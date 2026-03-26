---
title: "Design a Notification System"
chapterSlug: "design-a-notification-system"
order: 10
audience: "High school students (Grades 9–12)"
estimatedMinutes: 120
skills:
  - "Explain what a notification system does and why modern apps need one"
  - "Design a system using event producers, queues, workers, channels, and user preferences"
  - "Think about fan-out, retries, delivery failures, and notification fatigue"
  - "Reason about trade-offs between speed, reliability, cost, and user experience"
---

# Design a Notification System

> Audience: High school students (Grades 9–12)  
> Language used in examples: product stories, architecture sketches, and practical distributed-system reasoning  
> Big idea: A notification system takes important events from an app and turns them into messages delivered through channels like push, email, and SMS in a reliable and user-friendly way.

---

# Chapter Overview

Notifications are everywhere.

Apps send them when:
- someone messages you
- your order ships
- your friend likes your post
- a class assignment is due
- a livestream starts
- your password changes
- a bill is ready

At first, notifications sound simple:

> “Just send a message.”

But at system scale, this becomes much harder.

A real notification system must handle:
- many kinds of events
- many delivery channels
- huge fan-out
- user preferences
- delays and retries
- failures from outside providers
- duplicate prevention
- timing rules
- avoiding notification overload

That makes notifications one of the best system design topics.

In this chapter, we will learn:

1. **What a notification system is**
2. **Why apps need one**
3. **Core requirements**
4. **The main components**
5. **The event-to-delivery flow**
6. **Push, email, and SMS channels**
7. **User preferences and routing**
8. **Retries, failures, and delivery tracking**
9. **Scaling and fan-out**
10. **Trade-offs and edge cases**
11. **Chapter Review**
12. **Mastery Check**

---

# 1. What a Notification System Is

## Intuition

A notification system listens for important app events and decides:

- should we notify someone?
- who should get the message?
- which channel should we use?
- what should the message say?
- when should it be sent?

Then it delivers the message.

That message might become:
- a push notification on a phone
- an email
- a text message
- an in-app alert

---

## A simple definition

A notification system is:

> a system that takes events from other parts of an app and delivers messages to users through one or more channels.

This means the system often sits in the middle between:
- event producers
and
- delivery channels

---

## Why this is not “just sending text”

Real notification systems must deal with:
- millions of users
- different channel types
- provider failures
- user quiet hours
- message templates
- rate limits
- retries
- deduplication
- cost control

That is why notifications become a serious system design challenge.

---

# 2. Why Apps Need Notification Systems

Notifications matter because they help apps:
- bring users back
- alert users to urgent events
- confirm important actions
- improve engagement
- improve trust and reliability

---

## Example use cases

### Social app
- “Alex liked your post.”
- “You have 3 new followers.”

### Chat app
- “New message from Maya.”

### E-commerce app
- “Your package is out for delivery.”

### School platform
- “Homework due tomorrow.”
- “Class canceled.”

### Security system
- “New login from a different device.”

Some notifications are just nice-to-have.
Some are critical.

That difference matters a lot in system design.

---

# 3. Core Requirements

Before designing the system, we should understand what it needs to do.

A notification system should usually support:

1. receiving events from other systems
2. deciding whether a notification should be created
3. choosing recipients
4. selecting the right channel
5. formatting the message
6. delivering the notification
7. tracking success or failure
8. retrying when appropriate
9. respecting user preferences

Depending on the product, it may also support:
- scheduled notifications
- batching
- deduplication
- quiet hours
- priority levels
- analytics

---

## Clarifying questions

Strong system designers ask:

- What events produce notifications?
- Which channels are supported?
  - push?
  - email?
  - SMS?
  - in-app?
- Are some notifications urgent and others optional?
- Should users choose preferences?
- What happens if one delivery provider fails?
- Do we need retries?
- Do we need to avoid duplicate notifications?
- Should notifications be sent instantly or can some be delayed?

For this chapter, we will assume:
- events come from many systems
- supported channels are push, email, SMS, and in-app
- users may set preferences
- delivery failures should be tracked
- retries should exist for temporary failures
- some notifications may be high priority

---

# 4. The Main Components

A strong notification system usually includes these parts:

- event producers
- notification service
- template system
- user preference store
- queue
- workers
- channel-specific delivery services
- delivery log / status store

Let’s look at each.

---

## Event Producers

These are the systems that generate events.

Examples:
- chat service
- order service
- social feed service
- school assignment service
- security/auth service

They do not want to directly manage every notification detail.

Instead, they emit events like:

```txt
message_received
order_shipped
password_changed
assignment_due
```

---

## Notification Service

This is the central brain.

It decides:
- whether the event should become a notification
- who the recipients are
- which channels to use
- what message template to apply
- what priority it has

This service coordinates the system.

---

## Template System

Different notifications need different message text.

Examples:

```txt
"Alex sent you a message"
"Your order #4421 has shipped"
"Your class starts in 30 minutes"
```

A template system helps keep message formatting clean and reusable.

---

## User Preference Store

Different users may want different notification behavior.

Examples:
- push on, email off
- SMS only for urgent alerts
- no notifications after 10 PM
- weekly digest instead of instant email

The system must often check these preferences before sending.

---

## Queue

Notifications should not always be delivered synchronously inside the original user request.

That would be too slow and too fragile.

Instead:
- create notification jobs
- place them into a queue
- let workers process them

This is one of the most important design choices in the chapter.

---

## Workers

Workers read jobs from the queue and do the actual delivery work.

They may:
- send push requests
- send emails
- send SMS messages
- update status logs
- retry failed jobs

---

## Channel-Specific Delivery Services

Different channels behave differently.

Examples:
- push notifications go through push providers
- emails go through email services
- SMS goes through SMS gateways

So it is often useful to separate channel delivery logic into different components.

---

## Delivery Log / Status Store

The system often needs to record:
- notification id
- recipient
- channel
- created time
- sent time
- success/failure
- retry count

This is useful for:
- debugging
- analytics
- retries
- audits

---

# 5. A High-Level Design

Here is a simple system sketch.

```txt
Event Producers
   |
Notification Service
   |
Preference Check + Template Selection
   |
Queue
   |
Workers
   |
Push / Email / SMS / In-App Channels
   |
Delivery Status Store
```

A slightly richer version might look like:

```txt
Chat / Orders / Security / School Systems
              |
        Event Bus or API
              |
     Notification Service
        /            \
Preference Store   Template Store
              |
            Queue
              |
     -------------------------
     |         |         |   |
 Push Worker Email SMS In-App Worker
     |         |         |   |
 Providers / Delivery APIs
              |
        Status / Logs / Analytics
```

This is a strong large-scale design shape.

---

# 6. The Event-to-Delivery Flow

Let’s walk through the main story.

Suppose Maya gets a new chat message.

---

## Step 1: Event is produced

The chat system emits something like:

```txt
event_type = message_received
recipient = Maya
sender = Alex
message_preview = "Hey, are you free later?"
```

---

## Step 2: Notification service receives the event

The notification service checks:
- should this event create a notification?
- is the user online right now?
- what channels are allowed?
- what message template should be used?

---

## Step 3: Preferences are checked

Maybe Maya wants:
- push notifications for direct messages
- no email for chat
- no notifications during quiet hours unless urgent

The system checks those rules.

---

## Step 4: Message is formatted

Template example:

```txt
"Alex sent you a message: Hey, are you free later?"
```

---

## Step 5: Job is pushed to queue

Instead of sending immediately inside the chat request path, the system places a delivery job in a queue.

This helps:
- keep chat responsive
- isolate notification work
- support retries
- smooth traffic spikes

---

## Step 6: Worker processes the job

A push worker reads the job and sends it to a push provider.

---

## Step 7: Status is recorded

The system records:
- sent successfully
or
- failed, retry later

That is the core event-to-delivery flow.

---

# 7. Push, Email, SMS, and In-App Channels

Notification systems often support multiple delivery channels.

These are not the same.

---

## Push Notifications

### Good
- fast
- direct
- good for mobile engagement

### Trade-offs
- depend on device tokens and provider services
- may be muted by users
- not guaranteed to be seen

Push is great for:
- chat alerts
- social updates
- reminders
- breaking alerts

---

## Email

### Good
- durable
- readable later
- good for receipts, summaries, and confirmations

### Trade-offs
- slower feel
- users may ignore or unsubscribe
- provider reputation matters

Email is great for:
- account alerts
- receipts
- digests
- formal communication

---

## SMS

### Good
- strong attention
- good for urgent alerts
- useful when push/email may not work

### Trade-offs
- expensive
- limited message size
- should usually be used carefully

SMS is great for:
- 2FA codes
- security alerts
- delivery emergencies

---

## In-App Notifications

### Good
- easy to store and display inside the app
- less intrusive
- useful for notification history

### Trade-offs
- user must open the app to see them

In-app notifications are great for:
- activity feeds
- notifications center
- long-term visibility

---

# 8. User Preferences and Routing

Not every user wants the same thing.

This makes preference logic one of the most important parts of the system.

---

## Example preferences

A user might want:

- push for messages
- email for receipts
- SMS only for urgent security issues
- no notifications after 11 PM
- no marketing notifications at all

The notification service must check these rules before delivery.

---

## Why routing matters

An event may have multiple valid delivery channels.

Example:
- password changed

Possible channels:
- email
- push
- SMS

The system may need to route based on:
- urgency
- user preferences
- cost
- provider availability

That means notification systems are not just senders.
They are decision engines.

---

# 9. Retries, Failures, and Delivery Tracking

Delivery systems fail sometimes.

Examples:
- push provider timeout
- email provider outage
- SMS gateway rejects message
- invalid device token
- network issue

A strong system must handle these failures gracefully.

---

## Retry logic

For temporary failures:
- retry later
- maybe use exponential backoff
- limit how many times to retry

Example:
- retry after 1 minute
- then 5 minutes
- then 30 minutes

This avoids hammering providers repeatedly.

---

## Permanent failures

Some failures should not be retried forever.

Examples:
- invalid email address
- invalid phone number
- revoked device token

The system should record failure and stop wasting work.

---

## Delivery tracking

The system should often track states like:
- created
- queued
- sending
- delivered
- failed
- retrying

This helps with:
- debugging
- support tools
- analytics
- user trust

---

# 10. Scaling and Fan-Out

Some notifications go to one user.
Some go to millions.

That difference matters a lot.

---

## One-to-one example

- message alert to one person

This is relatively simple.

---

## One-to-many example

- school district sends closure notice to all students
- streamer goes live and millions of followers are notified
- product launch notification goes to every subscriber

Now the system has **fan-out**.

Fan-out means:
- one event becomes many delivery jobs

This can create huge spikes.

---

## Why queues matter here

If one event creates:
- 5 million push jobs

you do not want to process all of that synchronously.

Queues and workers help absorb the burst.

That is why notification systems are strongly connected to queue-based architecture.

---

## Scaling ideas

A large system may scale by:
- separating queue partitions
- using many workers
- separating channels into different pipelines
- batching some types of notifications
- prioritizing critical notifications over less urgent ones

That makes the design more resilient.

---

# 11. A Practical Notification System Design

Let’s describe a strong high-school-level design.

## High-level architecture

```txt
Event Producers
   |
Notification Service
   |
Preference + Template Lookup
   |
Queue
   |
Channel Workers
   |
Push / Email / SMS / In-App Providers
   |
Status Store
```

---

## What happens in the system

### Notification service
- receives events
- determines recipients
- checks preferences
- builds message jobs

### Queue
- stores jobs safely
- smooths bursts
- decouples event creation from delivery

### Workers
- deliver messages
- track success/failure
- retry temporary failures

### Status store
- records outcomes
- supports visibility and analytics

This is a strong practical design because each part has a clear role.

---

# 12. Trade-offs

This chapter has many trade-offs.

---

## Immediate send vs queued send

### Immediate send
Good:
- simpler for tiny systems
- low delay in small cases

Trade-off:
- slows user request path
- fragile if channel provider is slow

### Queued send
Good:
- more resilient
- better for spikes
- decouples systems

Trade-off:
- more moving parts
- slightly more delay

---

## More channels vs more complexity

### More channels
Good:
- better reach
- more flexibility

Trade-off:
- more routing logic
- more providers
- more failure modes

---

## More retries vs higher cost/noise

### More retries
Good:
- improves delivery chance

Trade-off:
- more provider traffic
- more cost
- risk of duplicate annoyance if poorly designed

---

## More user control vs more rules to manage

### More preference options
Good:
- better user experience

Trade-off:
- more logic
- more configuration complexity

---

## Fan-out speed vs provider safety

### Aggressive fan-out
Good:
- fast large delivery

Trade-off:
- can overload workers or providers
- may hit rate limits

---

# 13. Edge Cases

Strong designers ask:
- what can go wrong?
- what will users notice most?

---

## Edge Case 1: Duplicate notifications

If the same event is processed twice, users may get duplicate alerts.

Possible solutions:
- event id deduplication
- idempotent processing
- delivery history checks

---

## Edge Case 2: Quiet hours

A notification may be valid, but not appropriate to send immediately.

The system may need to:
- delay delivery
- skip some channels
- send later

---

## Edge Case 3: User online state

In some systems, if a user is already active in the app, sending a push may be unnecessary.

That means online presence can affect notification decisions.

---

## Edge Case 4: Provider outage

If the email or SMS provider is down:
- jobs may need retry
- channel fallback may be considered
- failures must be tracked

---

## Edge Case 5: Massive burst event

A single large event can generate millions of deliveries.

The queue and workers must absorb that safely.

---

# 14. How to Explain a Strong Notification System Design

A strong high school system design answer might sound like this:

> We want a system that receives events from other services and turns them into notifications delivered through channels like push, email, SMS, or in-app alerts.  
> I would use a notification service to process incoming events, check user preferences, choose templates, and create delivery jobs.  
> Those jobs would go into a queue so the system can handle spikes and avoid slowing down the original request.  
> Channel-specific workers would send messages through the appropriate providers and record success or failure in a status store.  
> The main trade-offs are speed versus reliability, user reach versus complexity, and retry safety versus cost.

That is strong because it includes:
- the goal
- the main components
- the event flow
- channel handling
- queue-based scaling
- trade-offs

---

# 15. Common Beginner Mistakes

## Mistake 1: Sending notifications directly from every product service

That often leads to:
- duplicated logic
- messy channel handling
- inconsistent preferences
- harder scaling

A shared notification service is usually stronger.

---

## Mistake 2: Ignoring user preferences

Even a technically successful notification system can be a bad product if it annoys users.

---

## Mistake 3: No queue

Without a queue, big bursts can overload the sending path and make the system fragile.

---

## Mistake 4: No retry logic

Provider failures are real.
A strong system plans for them.

---

## Mistake 5: Forgetting channel differences

Push, email, SMS, and in-app are not interchangeable.
Each one has different cost, speed, and user-experience behavior.

---

# 16. Chapter Review

## What you learned

In this chapter, you learned that a notification system turns application events into messages delivered through one or more channels while respecting preferences, handling retries, and scaling to large fan-out.

You learned:

- what a notification system does
- why apps need notifications
- the roles of event producers, queues, workers, templates, and preference stores
- how different channels behave
- why queues are important for scaling
- why delivery tracking and retries matter
- how fan-out changes the problem
- what trade-offs real notification systems face

---

## Strongest lesson from this chapter

This chapter teaches one of the most important communication-system lessons in system design:

> A notification is not just a message.  
> It is a decision, a delivery process, and a user-experience responsibility.

That is what makes the problem so interesting.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A notification system often receives ________ from other services and turns them into delivered messages.

**Answer:** events

---

## 2. True or False

Queues are useful in notification systems because they help handle bursts and decouple delivery from the original request path.

**Answer:** True

---

## 3. Short Answer

Why is a user preference store important?

**Answer:** Because different users may want different channels, urgency rules, quiet hours, or notification settings, and the system must respect those choices.

---

## 4. Short Answer

Why are retries important in a notification system?

**Answer:** Because delivery providers can fail temporarily, and retries help improve delivery success without losing the notification.

---

## 5. Fill in the blank

When one event becomes many delivery jobs, that is called ________-out.

**Answer:** fan

---

## 6. Mini Design Challenge

What channel would often be best for urgent security alerts?

One good answer:
- SMS or email, depending on the product, with push also possible

---

## 7. Mini Design Challenge

What component helps the system avoid slowing down the original app request when there is a huge notification burst?

One good answer:
- a queue

---

# Practice Prompts

Try these on your own:

1. Why might a chat app prefer push for messages but not email?
2. Why should an e-commerce app probably support email receipts?
3. What happens if millions of users must be notified at once?
4. Why is duplicate prevention important in a notification system?
5. What trade-off appears when adding more retry attempts?

---

# Friendly Wrap-up

This chapter shows how a notification system connects many parts of an app to many different kinds of users through many different kinds of delivery.

It has to:
- understand events
- choose recipients
- respect preferences
- route through channels
- survive bursts
- handle failures
- protect the user experience

That is why notification systems are such a strong system design problem.

Next, we will move on to another major product system: **Design a News Feed System**.
