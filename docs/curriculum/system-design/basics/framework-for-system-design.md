---
title: "A Framework for System Design"
chapterSlug: "framework-for-system-design"
order: 4
audience: "High school students (Grades 9–12)"
estimatedMinutes: 110
skills:
  - "Use a repeatable step-by-step process to approach system design problems"
  - "Turn product requirements into system components and data flow"
  - "Use estimation to guide architecture choices"
  - "Identify bottlenecks, trade-offs, and next improvements in a design"
---

# A Framework for System Design

> Audience: High school students (Grades 9–12)  
> Language used in examples: architecture sketches, product stories, and practical design reasoning  
> Big idea: Strong system designers do not jump straight into random boxes and arrows. They follow a repeatable framework to understand the problem, estimate scale, design the core system, and improve it step by step.

---

# Chapter Overview

When students first try system design, they often do one of two things:

- draw a bunch of boxes too early
- freeze because the problem feels too big

Both problems usually come from the same thing:

> there is no clear process

That is why this chapter matters.

A system design framework is like a map.
It gives you a sequence of steps so you can move from:
- vague product idea
to
- structured design

Instead of asking:

> “How do I design this huge system all at once?”

you ask:

1. What does the product actually need to do?
2. How big is it?
3. What are the main parts?
4. How does data move through the system?
5. What breaks first?
6. What upgrades make sense next?
7. What trade-offs did I choose?

That is the framework.

In this chapter, we will learn:

1. **Why system design needs a framework**
2. **The 7-step framework**
3. **Step 1: Understand the product**
4. **Step 2: Estimate the scale**
5. **Step 3: Identify the core components**
6. **Step 4: Design the data flow**
7. **Step 5: Find bottlenecks**
8. **Step 6: Add scale and reliability improvements**
9. **Step 7: Explain trade-offs**
10. **A full mini example**
11. **Common beginner mistakes**
12. **Chapter Review**
13. **Mastery Check**

---

# 1. Why System Design Needs a Framework

## Intuition

Imagine someone says:

> “Design a chat app.”

That sounds simple for about 2 seconds.

Then questions appear:

- direct messages or group chat?
- how many users?
- real-time or delayed?
- should messages be stored?
- what happens when users go offline?
- how are notifications sent?
- how do we scale?

Without a framework, students can get lost very quickly.

A framework helps because it turns a giant problem into smaller moves.

---

## System design is not random

Strong system designers do not start by saying:

- “Let’s add a cache”
- “Let’s use 10 services”
- “Let’s put in a queue”
- “Let’s shard the database”

Not yet.

They start by understanding:
- the product
- the scale
- the pressure points

Only then do the design choices become meaningful.

---

## A framework makes your design explainable

A framework does not just help you think.
It also helps you explain your design clearly.

That matters because good system design is not just:
- having ideas

It is also:
- showing why your ideas make sense

---

# 2. The 7-Step Framework

Here is the framework we will use throughout the rest of the system design stage.

## Step 1: Understand the product
What is the system supposed to do?

## Step 2: Estimate the scale
How many users, requests, and data are we dealing with?

## Step 3: Identify the core components
What are the major parts of the system?

## Step 4: Design the data flow
How does information move through the system?

## Step 5: Find bottlenecks
What is most likely to break or slow down first?

## Step 6: Add scale and reliability improvements
How do we improve the design as pressure grows?

## Step 7: Explain trade-offs
Why did we choose this design and not another one?

That is the playbook.

---

# 3. Step 1: Understand the Product

Before drawing infrastructure, you must understand what the product is supposed to do.

This sounds obvious, but it is often skipped.

---

## Ask: what are the must-have features?

Every design problem has:
- core features
- optional features
- future features

Start with the core ones.

### Example: notification system
Core features might be:
- send push notifications
- send email notifications
- respect user preferences

Do not begin with:
- 20 extra edge features
- 10 future upgrades
- fancy optimizations for problems you do not even know you have yet

---

## Ask: who are the users?

Questions:
- How many users are there?
- Are they active at the same time?
- Are they global?
- Are they mobile-first?
- Are they mostly reading, writing, uploading, or streaming?

These questions help shape the system.

---

## Ask: what kind of experience matters?

Examples:
- chat cares about low latency
- video upload cares about storage and background processing
- news feeds care about fast reads
- notification systems care about fan-out and reliability

Different products care about different things.

That means system design always starts with the product.

---

## Useful Step 1 questions

Here are strong beginner questions:

- What are the main features?
- What are the must-have actions?
- What kind of users are involved?
- What matters most: speed, reliability, storage, or simplicity?
- What is in scope for version 1?

---

# 4. Step 2: Estimate the Scale

After understanding the product, ask:

> How big is this system really?

This is where back of the envelope estimation matters.

---

## Why this step matters

Without scale estimates, students often make poor architecture choices.

Example:
- a tiny school app probably does not need giant distributed storage
- a video platform probably does

Scale helps determine:
- server count
- storage strategy
- caching needs
- queue needs
- media delivery needs

---

## Things to estimate

You do not need perfect numbers.
You want useful rough numbers.

Estimate:
- daily active users
- requests per second
- read/write ratio
- storage per day
- bandwidth
- peak traffic

---

## Example

Suppose:
- 1,000,000 users
- 20 requests per user per day

Daily requests:

```txt
1,000,000 × 20 = 20,000,000 requests/day
```

Average RPS:

```txt
20,000,000 / 86,400 ≈ 231 RPS
```

Peak could be much higher.

These numbers help guide the design.

---

## Important lesson

Step 2 gives the design gravity.

Without estimates, your system design can float into vague thinking.

With estimates, your design becomes grounded.

---

# 5. Step 3: Identify the Core Components

Now that you know what the product does and how big it is, ask:

> What are the main pieces this system needs?

This is where you begin turning product needs into architecture pieces.

---

## Common components in many systems

Depending on the product, common parts might include:

- client apps
- API servers
- databases
- caches
- queues
- background workers
- object storage
- CDN
- search service
- notification service
- authentication service

Not every system needs all of them.

The point is:
pick the parts that match the problem.

---

## Example: simple chat system

Core components might be:

- mobile client
- chat server
- message database
- real-time connection layer
- notification service

That is already much clearer than a vague “chat app.”

---

## Strong Step 3 questions

Ask:
- What are the main services or components?
- What data needs to be stored?
- What work should happen immediately?
- What work can happen later in the background?
- What part serves reads?
- What part handles writes?
- What part stores large media?

---

# 6. Step 4: Design the Data Flow

Now ask:

> How does the system actually work from start to finish?

This is one of the most important steps.

A system design is not just a list of components.
It is also the **flow** between them.

---

## Think in stories

Use one product story at a time.

### Example: user posts a photo
What happens?

1. client uploads the photo
2. app server receives the request
3. photo is stored in object storage
4. metadata is saved in the database
5. feed updates may be queued
6. notifications may be sent later

That is data flow.

---

## Think in arrows

This is where system design diagrams become useful.

A simple sketch might look like:

```txt
User
  |
Client App
  |
API Server
  | \
  |  \-> Object Storage
  |
  \-> Database
  \-> Queue -> Workers
```

This is helpful because it shows:
- what happens first
- what happens later
- what path the data takes

---

## Why this step matters

Many system design mistakes happen because students choose parts, but do not explain how the system actually behaves.

The flow is what turns architecture into a working story.

---

# 7. Step 5: Find Bottlenecks

Now ask:

> If this system becomes popular, what breaks first?

This is where system design becomes real.

---

## Common bottlenecks

A system might struggle because of:

- overloaded app servers
- slow databases
- large media files
- too many repeated reads
- background jobs piling up
- network transfer being too large
- one service becoming a single point of failure

---

## Example: feed system

Suppose millions of users refresh the home feed.

Possible bottlenecks:
- database read overload
- expensive ranking computation
- cache misses
- fan-out load

That helps explain why a plain database-only design may fail.

---

## Strong Step 5 questions

Ask:
- What gets hit the most?
- Is this mostly reads or writes?
- Is one part doing too much?
- Are there giant files?
- Are there spikes?
- Is there a single point of failure?

This step helps you think like an architect instead of a diagram collector.

---

# 8. Step 6: Add Scale and Reliability Improvements

Once you know the likely bottlenecks, now you can improve the design.

This is the step where many famous system design tools finally become appropriate.

---

## Common improvements

Depending on the problem, improvements may include:

- load balancer
- multiple app servers
- cache
- read replicas
- queue and workers
- object storage
- CDN
- partitioning or sharding
- retries
- replication
- fallback systems

---

## Example: image-heavy app

Problem:
- serving photos is slow
- app servers are under too much file traffic

Possible improvements:
- object storage
- CDN

That is a targeted improvement.

---

## Example: repeated hot reads

Problem:
- same data requested constantly
- database getting hammered

Possible improvement:
- cache

Again, the key idea is:

> Add the improvement because it solves a real problem.

Not because it sounds advanced.

---

# 9. Step 7: Explain Trade-offs

This final step is what turns a decent design into a strong one.

A strong designer knows:
- every system choice helps something
- every system choice costs something

That is a trade-off.

---

## Examples of trade-offs

### Cache
Helps:
- speed
- database load

Costs:
- stale data risk
- more complexity

---

### Queue
Helps:
- smoother traffic
- faster user requests
- background processing

Costs:
- delayed completion
- more moving parts

---

### Replication
Helps:
- more read capacity
- better availability

Costs:
- lag between replicas
- more complexity

---

### CDN
Helps:
- faster media delivery
- less origin pressure

Costs:
- more infrastructure
- cache invalidation questions

---

## Strong Step 7 questions

Ask:
- What did I optimize for?
- What became simpler?
- What became more complex?
- What became faster?
- What might become less fresh or less consistent?

Trade-off thinking is one of the most important habits in system design.

---

# 10. A Full Mini Example

Let’s use the framework on a small product: a **school announcement system**.

---

## Step 1: Understand the product

Main feature:
- students open the app and read school announcements

Nice-to-have features:
- images
- push notifications
- search

Version 1 focus:
- read announcements quickly
- teachers can post announcements

---

## Step 2: Estimate the scale

Suppose:
- 200,000 students
- each opens the app 4 times/day
- each open makes 3 requests

Daily requests:

```txt
200,000 × 4 × 3 = 2,400,000 requests/day
```

Average RPS:

```txt
2,400,000 / 86,400 ≈ 28 RPS
```

That is not tiny, but not gigantic either.

---

## Step 3: Identify core components

Possible components:
- client app
- API server
- database
- maybe cache

---

## Step 4: Design the data flow

Reading announcements:

1. student opens app
2. request hits API server
3. server fetches announcements
4. announcements return to client

Posting announcements:

1. teacher submits announcement
2. API server validates and stores it
3. database saves it

---

## Step 5: Find bottlenecks

Most likely bottleneck:
- repeated reads in the morning

---

## Step 6: Add improvements

Possible improvement:
- cache the latest announcements

Now the system might be:

```txt
Clients -> API Servers -> Cache -> Database
```

---

## Step 7: Explain trade-offs

Good:
- faster reads
- less database pressure

Trade-off:
- cache might be briefly out of date

That is a complete mini system design using the framework.

---

# 11. A Reusable Student Checklist

Students can reuse this checklist for any future chapter.

## Before drawing
- What does the product need to do?
- What is in scope for version 1?
- How many users and requests are we dealing with?

## Before choosing components
- What data do we store?
- What are the core actions?
- What work happens immediately?
- What work can happen later?

## Before scaling
- What bottleneck appears first?
- Is it read-heavy or write-heavy?
- Are media files involved?

## Before finishing
- What upgrades improve scale?
- What reliability issues matter?
- What trade-offs did I choose?

This checklist is one of the most practical things students can carry into every later design problem.

---

# 12. Common Beginner Mistakes

## Mistake 1: Drawing infrastructure too early

Some students want to start with:
- load balancers
- queues
- CDNs
- replicas

before even understanding the product.

That usually leads to weak reasoning.

---

## Mistake 2: Ignoring scale

If you do not estimate users, requests, and storage, your design may be too small or wildly overbuilt.

---

## Mistake 3: Listing components without flow

A good design is not:
- “database, cache, queue, done”

A good design explains:
- how requests move
- how data is written
- how responses come back

---

## Mistake 4: Never identifying a bottleneck

If you never ask “what breaks first?”, your design stays too shallow.

---

## Mistake 5: No trade-off discussion

Real system design is not just:
- what works

It is also:
- what was chosen
- why it was chosen
- what cost came with the choice

---

# 13. Chapter Review

## What you learned

In this chapter, you learned that strong system design follows a repeatable framework instead of random diagram drawing.

You learned the 7-step framework:

1. understand the product
2. estimate the scale
3. identify the core components
4. design the data flow
5. find bottlenecks
6. add scale and reliability improvements
7. explain trade-offs

You also learned how this framework helps make designs:
- clearer
- more realistic
- easier to explain
- easier to improve

---

## The strongest lesson from this chapter

This chapter teaches one of the most important lessons in all of system design:

> A good architecture usually comes from a good process.

That process matters as much as the final boxes on the page.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

Before choosing architecture pieces like caches or queues, you should first understand the ________ and estimate the ________.

**Answer:** product, scale

---

## 2. True or False

A strong system design answer should explain both the components and the data flow between them.

**Answer:** True

---

## 3. Short Answer

Why is estimating scale important before designing the system?

**Answer:** Because scale helps determine what kind of architecture is realistic, which bottlenecks are likely, and which tools or upgrades are actually needed.

---

## 4. Short Answer

What is the purpose of finding bottlenecks?

**Answer:** To identify what part of the system is most likely to break, slow down, or get overloaded first as traffic or data grows.

---

## 5. Fill in the blank

A trade-off means a design choice helps something, but also adds a ________ or downside.

**Answer:** cost

---

## 6. Mini Design Challenge

Name 3 core components a simple chat system might have.

One possible answer:
- client app
- chat server
- message database

---

## 7. Mini Design Challenge

Why is it useful to think in product stories during Step 4?

**Sample answer:** Because product stories help show how requests and data actually move through the system from start to finish.

---

# Practice Prompts

Try these on your own:

1. Apply the 7-step framework to a music streaming app.
2. Apply the 7-step framework to a simple file-sharing system.
3. What is the most likely bottleneck in a photo-sharing app?
4. What trade-off might happen when adding a cache to a feed system?
5. What part of a video system would probably use a queue?

---

# Friendly Wrap-up

This chapter gives you one of the most valuable tools in the whole system design stage:

> a repeatable way to think

That matters because system design is not about memorizing giant diagrams.
It is about:
- asking the right questions
- understanding the pressure on the system
- building the right structure step by step
- improving it with clear reasoning

The more you use this framework, the more system design problems will stop feeling chaotic and start feeling solvable.

Next, we will apply this framework to our first major system design problem: **Design a Rate Limiter**.
