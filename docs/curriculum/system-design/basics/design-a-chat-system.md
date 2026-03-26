---
title: "Design a Chat System"
chapterSlug: "design-a-chat-system"
order: 12
audience: "High school students (Grades 9–12)"
estimatedMinutes: 125
skills:
  - "Explain what a chat system does and why real-time messaging is hard at scale"
  - "Design a chat system using clients, chat servers, message storage, presence, and notifications"
  - "Think about online/offline delivery, ordering, and message persistence"
  - "Reason about trade-offs between latency, reliability, scale, and complexity"
---

# Design a Chat System

> Audience: High school students (Grades 9–12)  
> Language used in examples: product stories, architecture sketches, and practical distributed-system reasoning  
> Big idea: A chat system must make messages feel instant while also keeping them stored, ordered, and deliverable even when users go offline or reconnect later.

---

# Chapter Overview

Chat feels simple when you use it.

You:
- type a message
- press send
- it appears on your friend’s screen

But underneath, a chat system has to solve a lot of hard problems:

- how to deliver messages quickly
- how to know which users are online
- how to store messages safely
- how to support one-to-one and group chats
- how to retry delivery when devices disconnect
- how to send push notifications when someone is offline
- how to keep messages in a sensible order
- how to scale to millions of users sending messages at the same time

That makes chat one of the most important real-time system design problems.

In this chapter, we will learn:

1. **What a chat system is**
2. **Why chat systems are hard**
3. **Core requirements**
4. **Main components**
5. **Connection and delivery flow**
6. **Online vs offline messaging**
7. **Message storage and persistence**
8. **Presence, ordering, and acknowledgments**
9. **Scaling the system**
10. **Trade-offs and edge cases**
11. **Chapter Review**
12. **Mastery Check**

---

# 1. What a Chat System Is

## Intuition

A chat system lets users exchange messages in near real time.

That can include:
- direct messages between two people
- group conversations
- message history
- read or delivery status
- presence indicators
- media attachments
- notifications

At a high level, the system must answer:

> How does one user’s message safely and quickly reach the correct other user or group?

That sounds simple, but many moving parts are involved.

---

## A simple definition

A chat system is:

> a system that lets users send, receive, store, and view messages, often with very low latency.

A strong chat system usually needs both:
- fast delivery
- reliable storage

If it only delivers quickly but loses messages, users lose trust.
If it stores perfectly but feels slow, the product feels broken.

That tension is at the heart of chat design.

---

# 2. Why Chat Systems Are Hard

Chat systems are difficult because they combine several tough system design problems at once.

## Problem 1: Low latency

Users expect messages to feel instant.

---

## Problem 2: Intermittent connections

Phones disconnect.
Wi-Fi drops.
Apps go to the background.
Users switch devices.

The system must still work.

---

## Problem 3: Persistence

Messages usually need to remain available later.

That means:
- history should load when you reopen the chat
- messages should survive reconnects
- offline users should still receive the message later

---

## Problem 4: Presence

Users often want to know:
- who is online
- who is typing
- who has seen a message

That adds more real-time state.

---

## Problem 5: Scale

Millions of users may be connected at once.

That creates pressure on:
- connection handling
- routing
- message storage
- fan-out for groups
- notifications

---

# 3. Core Requirements

Before designing the system, we should understand what it must do.

A chat system should usually support:

1. sending one-to-one messages
2. receiving messages quickly
3. storing message history
4. loading conversation history later
5. handling users going online and offline
6. delivering messages after reconnect if needed

Depending on the product, it may also support:
- group chats
- read receipts
- typing indicators
- push notifications
- media attachments
- message editing or deletion

For this chapter, we will assume:
- one-to-one chat is required
- group chat is a likely extension
- message history must be stored
- online/offline delivery matters
- push notifications may be used for offline users
- reasonable ordering matters

---

## Clarifying questions

Strong system designers ask:

- Is this direct messaging only, or also group chat?
- Do messages need to be delivered instantly?
- Are users usually mobile?
- Should the system store full history?
- Do we need delivery or read receipts?
- What happens when the recipient is offline?
- How important is exact ordering?
- Do we support attachments?

These questions shape the design.

---

# 4. The Main Components

A strong chat system often includes these parts:

- chat clients
- connection service
- chat/message service
- message store
- conversation metadata store
- presence service
- notification service
- media storage (optional)
- delivery acknowledgment tracking

Let’s go through them.

---

## Chat Clients

These are:
- mobile apps
- web apps
- desktop apps

They let users:
- send messages
- receive messages
- view history
- show online or typing status

---

## Connection Service

Because chat is real-time, clients often keep a long-lived connection open to the server.

This is often done with:
- WebSocket-like persistent connections
or another long-lived messaging channel

Why?
Because opening a fresh request for every new incoming message would be slower and clumsier.

The connection service helps keep users connected for real-time delivery.

---

## Chat / Message Service

This is the logic layer that handles:
- incoming messages
- recipient lookup
- message validation
- routing
- persistence coordination

This is one of the central brains of the system.

---

## Message Store

Messages need to be saved somewhere durable.

The message store keeps:
- conversation id
- sender id
- recipient id or group id
- message content
- timestamps
- message id
- delivery state

This is what lets users load old history later.

---

## Conversation Metadata Store

This may store lighter-weight conversation information like:
- conversation members
- last message preview
- unread counts
- last activity time

This helps the app load the conversation list quickly.

---

## Presence Service

Presence tracks whether a user is:
- online
- offline
- maybe last seen recently

This helps the system decide:
- can we push the message over a live connection?
- should we send a push notification instead?

---

## Notification Service

If the recipient is offline or inactive, the system may trigger:
- a push notification
- maybe an email in some products
- maybe SMS for critical alerts

This often connects to the notification system from the earlier chapter.

---

## Media Storage

If chat supports:
- images
- videos
- voice notes
- files

then the system often stores media separately from simple text messages.

Usually:
- the message record stores metadata and references
- media itself goes into object storage

---

# 5. A High-Level Design

Here is a simple chat system sketch.

```txt
Clients
   |
Connection Service
   |
Chat Service
   | \
   |  \-> Message Store
   |  \-> Conversation Metadata Store
   |  \-> Presence Service
   |
   \-> Notification Service
```

A richer version could look like:

```txt
Sender Client
    |
Persistent Connection
    |
Connection Gateway
    |
Chat Service
   / |  \
  /  |   \
Store Presence Notifications
  |
Recipient Routing
  |
Recipient Client
```

This is a strong start.

---

# 6. Connection and Delivery Flow

Now let’s walk through the main chat story.

Suppose Maya sends “Hey, are you free later?” to Alex.

---

## Step 1: Maya’s client sends the message

Maya’s app sends the message through its live connection to the connection service or gateway.

The request contains:
- sender id
- conversation id or recipient id
- message text
- client timestamp
- maybe a temporary client-side message id

---

## Step 2: Chat service validates and stores the message

The chat service:
- checks that Maya is allowed to send
- creates a server-side message id
- stores the message in the message store

This is important:
a strong system usually stores the message before considering the job “done.”

---

## Step 3: The system checks Alex’s presence

If Alex is online and connected:
- route the message to Alex’s active connection

If Alex is offline:
- store it for later retrieval
- maybe trigger a push notification

---

## Step 4: Alex receives the message

If online, Alex’s client receives the message quickly over the live connection.

The app displays it in the conversation view.

---

## Step 5: Delivery acknowledgment

The system may track that:
- the message was accepted by the server
- the message was delivered to the recipient’s device
- maybe later, that it was seen/read

These are different states.

That matters a lot in chat products.

---

# 7. Online vs Offline Messaging

This is one of the most important parts of chat design.

## Online recipient

If the recipient is connected:
- message can be pushed live right away

This gives the “instant chat” feeling users expect.

---

## Offline recipient

If the recipient is not connected:
- the message is still stored
- the user can fetch it later after reconnect
- a push notification may be sent

This means chat is not only a live system.
It is also a reliable delayed-delivery system.

That dual nature is very important.

---

## Why storage matters here

If the system only tried to push messages live and did not store them safely, then offline users could lose messages.

That would be unacceptable.

So chat systems must usually combine:
- real-time delivery
- durable storage

---

# 8. Message Storage and Persistence

Messages are one of the most important kinds of product data.

A chat system often stores:
- message id
- conversation id
- sender id
- content
- created time
- delivery/read state
- maybe attachment references

---

## Why persistence matters

Users expect that:
- old messages are still there later
- messages survive app restarts
- messages survive device changes
- chat history can be loaded when scrolling upward

That means message persistence is central, not optional.

---

## Conversation loading

When a user opens a conversation, the system may:
1. fetch recent messages from the message store
2. return them ordered by time or message sequence
3. paginate older messages if the user scrolls upward

This is why pagination matters in chat too.
A conversation may contain:
- hundreds
- thousands
- or millions of messages

The app should not load everything at once.

---

# 9. Presence, Ordering, and Acknowledgments

These three ideas make chat feel real and reliable.

---

## Presence

Presence answers:
- is this user online right now?

This may be tracked through:
- active connections
- heartbeats
- recent activity timestamps

Presence can be tricky because “online” is not always perfectly clear.
But a useful approximation is very valuable.

---

## Message ordering

Users expect messages to appear in a sensible order.

This gets tricky because:
- devices send messages at slightly different times
- network delays vary
- retries happen
- multiple devices may be used

A strong beginner answer can say:

> The system should use server-assigned message ids or server timestamps to help keep conversation ordering stable.

That is enough for this stage.

---

## Acknowledgments

There are different kinds of “success.”

### Sent to server
The server received and accepted the message.

### Delivered
The recipient device received it.

### Read
The recipient opened or viewed it.

These are different states and may be tracked separately.

That is why chat UIs often show:
- one check
- two checks
- seen/read indicators

---

# 10. Scaling the System

Chat systems must scale in several directions at once.

## Challenge 1: Many connected users

The connection layer may need to support huge numbers of long-lived connections.

That means one server is not enough.

A scaled system often has:
- many connection servers or gateways
- routing logic
- shared metadata about where users are connected

---

## Challenge 2: Many messages

Message writes can be high and continuous.

The message store must handle:
- lots of writes
- lots of history reads
- pagination

---

## Challenge 3: Notifications

If recipients are offline, notification fan-out becomes another pressure point.

---

## Challenge 4: Group chats

A message to one group may need to fan out to:
- 5 people
- 50 people
- 5,000 people

That changes the routing and delivery problem a lot.

---

## High-level scaled design

```txt
Clients
   |
Connection Gateways
   |
Chat Service
   | \
   |  \-> Message Store
   |  \-> Presence Store
   |  \-> Notification Service
   |
Routing Layer
```

This is a strong large-scale shape.

---

# 11. Group Chat Extension

Even if our main focus is one-to-one chat, a strong answer can mention group chat.

## Why group chat changes things

One incoming message now may need to reach:
- many recipients

This creates fan-out.

The system may need:
- group membership data
- per-member delivery logic
- unread tracking per member
- maybe batching

That makes group chat more complex than direct messaging.

A strong design answer can mention:
- one-to-one is simpler
- group chat is a natural next layer

---

# 12. Edge Cases and Bottlenecks

Strong system designers ask:
- what can go wrong?
- what breaks first?

---

## Edge Case 1: Device disconnects during send

Maybe Maya sends a message while her connection is unstable.

The client may retry.

The system should avoid accidentally creating duplicates.

This is why message ids and idempotent handling can matter.

---

## Edge Case 2: Offline recipient for a long time

Alex may be offline for hours or days.

The system should:
- keep messages stored
- deliver when Alex reconnects
- maybe notify Alex through another channel

---

## Edge Case 3: Message ordering differences

Messages from different devices or unstable networks may arrive in surprising orders.

The system should use a server-side ordering rule to reduce confusion.

---

## Edge Case 4: Duplicate delivery

Retries or reconnect logic may cause duplicate sends unless the system is careful.

Strong systems usually try to make delivery idempotent.

---

## Edge Case 5: Huge group chats

Large groups can stress:
- fan-out
- unread tracking
- notification load
- delivery speed

That is why group chat is a meaningful extension problem.

---

# 13. Trade-offs

This chapter is full of trade-offs.

---

## Real-time feel vs system complexity

### More real-time behavior
Good:
- better user experience
- instant feeling

Trade-off:
- more connection infrastructure
- more presence/routing complexity

---

## Strong durability vs lower latency

### Store first, then deliver
Good:
- safer
- more reliable

Trade-off:
- slightly more work before delivery

A strong design often chooses safety here.

---

## Rich presence vs simpler architecture

### Rich presence
Good:
- better UX
- more context

Trade-off:
- more state tracking
- more infrastructure

---

## Full read receipts vs privacy/simplicity

### Read receipts
Good:
- clear user feedback

Trade-off:
- more tracking
- more state changes
- not always desired by users

---

## More channels for offline users vs more complexity

### Push + email + SMS
Good:
- stronger reach

Trade-off:
- more cost
- more routing complexity
- more user preference rules

---

# 14. A Practical Chat System Design

A strong high-school-level design might be:

```txt
Clients
   |
Persistent Connection Layer
   |
Chat Service
   | \
   |  \-> Message Store
   |  \-> Presence Service
   |  \-> Conversation Metadata Store
   |
   \-> Notification Service for offline recipients
```

---

## What this design does well

- supports real-time delivery for online users
- stores messages durably
- supports loading history later
- supports offline notification paths
- separates major concerns into clear services

That is a strong practical architecture.

---

# 15. How to Explain a Strong Chat System Design

A strong high school system design answer might sound like this:

> We want a system that lets users send and receive messages with low latency while also storing chat history reliably.  
> I would use long-lived client connections to a connection layer so online users can receive messages quickly.  
> A chat service would validate and store each message in a message store, then route it to the recipient if they are online.  
> If the recipient is offline, the message would stay in storage and the system could trigger a push notification.  
> I would also use a presence service to track whether users are connected, and conversation metadata to help load chat lists quickly.  
> The main trade-offs are latency versus complexity, real-time delivery versus reliability, and richer features like read receipts versus additional system state.

That is strong because it includes:
- the goal
- the core components
- the online/offline flow
- persistence
- presence
- trade-offs

---

# 16. Common Beginner Mistakes

## Mistake 1: Treating chat like simple request-response

Chat is more than:
- send request
- get response

It usually needs:
- persistent connections
- real-time routing
- offline delivery support

---

## Mistake 2: Forgetting persistence

If messages are not stored durably, offline users and chat history both break.

---

## Mistake 3: Ignoring presence

Presence is not the whole system, but it matters a lot for routing and user experience.

---

## Mistake 4: Ignoring retries and duplicates

Network instability is normal in real apps.
The design should account for reconnects and retries.

---

## Mistake 5: Forgetting group chat changes the problem

One-to-one is simpler.
Group chat adds fan-out and delivery complexity.

---

# 17. Chapter Review

## What you learned

In this chapter, you learned that a chat system combines real-time delivery with durable storage and user state like presence and acknowledgments.

You learned:

- what a chat system does
- why chat is hard at scale
- the roles of connection services, chat services, message stores, presence, and notifications
- how online and offline delivery differ
- why persistence matters
- why ordering and acknowledgments matter
- what scaling and fan-out challenges appear
- what trade-offs real chat systems face

---

## Strongest lesson from this chapter

This chapter teaches one of the most important real-time system lessons in system design:

> “Instant” is only half the problem.  
> A good chat system must also be durable, recoverable, and trustworthy.

That is what makes chat design so powerful.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A chat system often uses long-lived ________ so messages can be delivered quickly to online users.

**Answer:** connections

---

## 2. True or False

A strong chat system can ignore message persistence as long as online delivery is fast.

**Answer:** False

Persistence is essential for history and offline delivery.

---

## 3. Short Answer

Why is a presence service useful?

**Answer:** Because it helps the system know whether a user is currently online and connected, which affects how messages should be routed and whether offline notifications are needed.

---

## 4. Short Answer

Why are acknowledgments important in chat?

**Answer:** Because they help track whether a message was accepted by the server, delivered to a device, or read by the recipient.

---

## 5. Fill in the blank

If a recipient is offline, the message should still be stored in the message ________.

**Answer:** store

---

## 6. Mini Design Challenge

What is one major difference between one-to-one chat and group chat?

One good answer:
- group chat requires one message to fan out to many recipients, which adds delivery and scaling complexity

---

## 7. Mini Design Challenge

Why might a chat system send a push notification?

One good answer:
- to alert an offline or inactive user that a new message arrived

---

# Practice Prompts

Try these on your own:

1. Why do chat apps often use persistent connections instead of only normal request-response APIs?
2. What could go wrong if the system did not store messages durably?
3. Why might server-assigned message ids help with ordering?
4. What changes when a chat app supports huge group chats?
5. What are the trade-offs of adding read receipts?

---

# Friendly Wrap-up

This chapter shows how a chat system combines:
- speed
- persistence
- presence
- routing
- notifications
- reliability

To users, chat should feel effortless.
But underneath, it is one of the clearest examples of a real-time distributed system.

That is why chat systems are such an important system design topic.

Next, we will move on to a media-heavy product system: **Design YouTube**.
