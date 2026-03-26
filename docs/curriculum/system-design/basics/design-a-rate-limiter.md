---
title: "Design a Rate Limiter"
chapterSlug: "design-a-rate-limiter"
order: 5
audience: "High school students (Grades 9–12)"
estimatedMinutes: 110
skills:
  - "Explain what a rate limiter does and why systems need one"
  - "Compare common rate limiting strategies like fixed window, sliding window, and token bucket"
  - "Design a rate limiter using counters, time windows, and fast storage"
  - "Think about trade-offs between fairness, simplicity, and performance"
---

# Design a Rate Limiter

> Audience: High school students (Grades 9–12)  
> Language used in examples: architecture sketches, request timelines, and practical product scenarios  
> Big idea: A rate limiter protects a system by controlling how many requests a user, device, or service can make in a certain amount of time.

---

# Chapter Overview

Imagine one student clicking a button 5 times.

That is fine.

Now imagine:
- one person refreshing a page 1,000 times in a minute
- a buggy app sending requests in a loop
- a bot trying passwords over and over
- one user flooding an API so other users cannot use it well

Now the system has a problem.

This is where a **rate limiter** helps.

A rate limiter decides:

> “How many requests should be allowed in this amount of time?”

If too many requests arrive too quickly, the limiter can:
- reject them
- delay them
- or temporarily block more traffic

That makes rate limiting one of the most useful protection patterns in system design.

In this chapter, we will learn:

1. **What a rate limiter is**
2. **Why systems need rate limiting**
3. **Common places to use a rate limiter**
4. **Core requirements**
5. **Rate limiting strategies**
   - Fixed Window
   - Sliding Window Log
   - Sliding Window Counter
   - Token Bucket
   - Leaky Bucket
6. **Designing the system**
7. **Data flow and storage choices**
8. **Edge cases and bottlenecks**
9. **Trade-offs**
10. **Chapter Review**
11. **Mastery Check**

---

# 1. What a Rate Limiter Is

## Intuition

A rate limiter is like a gatekeeper.

It watches incoming requests and asks:

- Who is making the request?
- How many requests have they made recently?
- Are they still allowed to make another one?

If yes:
- let the request through

If no:
- reject it
- or ask the client to try again later

---

## A simple definition

A rate limiter is:

> a system that controls how many requests are allowed during a certain time period.

Examples:
- 100 requests per minute per user
- 5 login attempts per 10 minutes per account
- 1 message per second per device
- 1,000 API calls per day per app key

---

## Why it matters

Without a rate limiter, one user or bot could:
- overload a service
- abuse an endpoint
- cause unfairness for other users
- create security problems
- drive up system cost

That makes rate limiters useful for both:
- protection
- fairness

---

# 2. Why Systems Need Rate Limiting

## Reason 1: Protect the system

If too many requests hit one service too fast, the system can slow down or fail.

A rate limiter helps reduce overload.

---

## Reason 2: Prevent abuse

Some users or bots may intentionally spam:
- sign-up forms
- login endpoints
- password reset requests
- comment posting
- API endpoints

Rate limiting makes abuse harder.

---

## Reason 3: Keep things fair

If one client sends huge amounts of traffic, other users may get worse performance.

Rate limiting helps make system usage fairer.

---

## Reason 4: Control cost

Some operations are expensive:
- sending SMS
- generating AI responses
- processing images
- calling external APIs

Rate limiting helps control cost by limiting how often those operations happen.

---

# 3. Common Places to Use a Rate Limiter

Rate limiters can be used in many places.

## Login systems
To stop repeated password guessing.

## Public APIs
To control how many requests each user or app can make.

## Messaging systems
To stop users from sending too many messages too quickly.

## Notification systems
To avoid spammy repeated sends.

## Content posting systems
To stop comment flooding or posting bots.

## Expensive services
Such as:
- AI generation
- image processing
- export/report generation

This is one reason rate limiting is such a foundational system design topic.

---

# 4. Core Requirements

Before designing the system, we should understand what the product needs.

A rate limiter should be able to:

1. Identify who the request belongs to
2. Track recent request activity
3. Decide whether the request should be allowed
4. Respond quickly
5. Work correctly even under high traffic
6. Optionally return information like:
   - retry later
   - remaining quota
   - reset time

---

## Clarifying questions

Strong system designers ask:

- What are we limiting by?
  - user id?
  - IP address?
  - API key?
  - device id?
- What is the limit?
  - 10 per second?
  - 100 per minute?
  - 1,000 per day?
- What happens when the limit is exceeded?
  - reject?
  - delay?
  - block for a while?
- Does the limiter need to work across multiple servers?
- How accurate must the limit be?
- Is this a security-critical endpoint or just a fairness feature?

For this chapter, we will assume:
- we are rate limiting by user id or API key
- we want fast allow/deny decisions
- the limiter may be used by multiple app servers
- it should use a shared fast storage layer

---

# 5. Rate Limiting Strategies

There is not just one way to build a rate limiter.

Different strategies make different trade-offs.

---

## Strategy 1: Fixed Window

### Idea

Pick a time window, such as:
- 1 minute

Count how many requests happen in that window.

Example rule:
- allow up to 100 requests per minute

If the count goes above 100:
- reject more requests until the next minute begins

---

### Example

Suppose the current window is:

```txt
12:00:00 to 12:00:59
```

A user sends 100 requests in that minute.
All are allowed.

Then at:

```txt
12:01:00
```

the counter resets, and the user can send 100 more.

---

### Why it is simple

Fixed window is easy to understand and easy to implement.

You only need:
- a counter
- a window start or expiration

---

### Main weakness

It can be unfair at window boundaries.

Example:
- 100 requests at 12:00:59
- 100 requests at 12:01:00

That means 200 requests happen almost instantly, even though the rule says 100 per minute.

So fixed window is simple, but not always smooth.

---

## Strategy 2: Sliding Window Log

### Idea

Store the timestamp of every request.

When a new request comes in:
1. remove timestamps older than the allowed window
2. count how many recent timestamps remain
3. allow or reject based on that count

---

### Example

Rule:
- 5 requests per 10 seconds

If a user made requests at:
- 01s
- 03s
- 05s
- 08s
- 09s

and sends another at 10s:
- there are already 5 requests in the last 10 seconds
- reject the new one

---

### Why it is accurate

This gives a much smoother and fairer rolling time view than fixed windows.

---

### Main weakness

It may use more memory because it stores many timestamps.

If millions of users are active, that can get expensive.

---

## Strategy 3: Sliding Window Counter

### Idea

This is a smoother version that uses counters instead of storing every timestamp.

It often combines:
- the current time bucket
- the previous time bucket

Then it estimates how full the current sliding window really is.

---

### Why it is useful

It is often:
- more memory-friendly than sliding window log
- fairer than fixed window

---

### Main weakness

It is more complex to explain and implement than fixed window.

For a beginner system design answer, it is enough to know:
- this exists as a middle ground between simplicity and fairness

---

## Strategy 4: Token Bucket

### Idea

Imagine a bucket that holds tokens.

To make a request:
- you spend one token

Tokens refill over time.

If the bucket is empty:
- requests are rejected until more tokens appear

---

### Example

Rule:
- bucket size = 10
- refill rate = 1 token per second

A user can burst up to 10 requests quickly if they saved tokens.
Then they must wait for refills.

---

### Why it is powerful

Token bucket is great when you want:
- average limits
- but also short bursts

This is very common in real systems.

---

### Why it matters

Some systems do not want a perfectly flat rate.
They want to allow bursts up to a point, but not unlimited bursts.

Token bucket is strong for that.

---

## Strategy 5: Leaky Bucket

### Idea

Imagine requests entering a bucket that leaks out at a steady rate.

This smooths traffic by making the output more steady.

---

### Why it is useful

Leaky bucket is useful when you want:
- smoother outgoing traffic
- more controlled pacing

---

### Difference from token bucket

Token bucket:
- allows bursts if tokens were saved

Leaky bucket:
- focuses more on steady output flow

That is the main mental difference.

---

# 6. Designing the System

Now let’s design a practical rate limiter.

---

## Main idea

We want the app server to ask:

> “Is this request allowed right now?”

The rate limiter answers:
- yes
- or no

---

## High-level design

```txt
Client
  |
App Server
  |
Rate Limiter
  |
Fast Shared Storage
```

---

## Why a separate rate limiter component?

This is useful because:
- many app servers may need the same rule
- rate limiting logic stays centralized or reusable
- the app server can remain cleaner

---

## What does the rate limiter need?

For each request, it needs:
- an identifier
  - user id
  - IP
  - API key
- a rule
  - 100 requests/minute
- request history or counter state
- a decision

---

## Example flow

A client sends a request.

1. App server receives the request
2. App server asks the rate limiter:
   - user = 123
   - endpoint = /messages/send
3. Rate limiter checks stored counts/timestamps
4. Rate limiter decides:
   - allow
   - or reject
5. App server continues or returns an error like:
   - “Too many requests”

That is the core flow.

---

# 7. Data Flow and Storage Choices

The storage choice matters a lot in rate limiting.

We usually want:
- very fast reads
- very fast writes
- shared access across app servers
- automatic expiration of old data

That is why a fast in-memory store is often used.

---

## Example: fixed window with fast storage

Suppose the rule is:
- 100 requests/minute per user

We might store keys like:

```txt
rate_limit:user123:2026-03-25T12:01
```

Value:
- request count

When a request arrives:
1. increment the counter
2. set expiration to the end of the minute
3. if count > 100, reject

This is simple and fast.

---

## Example: token bucket state

For token bucket, the store may hold:
- current token count
- last refill timestamp

When a request arrives:
1. compute how many tokens should have refilled
2. update the token count
3. if at least 1 token exists, allow and subtract one
4. otherwise reject

---

## Why shared storage matters

If there are many app servers, they must not each keep separate local counts for the same user.
Otherwise:
- server A may allow 100
- server B may allow 100
- server C may allow 100

Now the user got 300 total instead of 100.

That is why shared rate limit state is often needed.

---

# 8. Example Design: Fixed Window Limiter

Let’s walk through a simple full design.

## Goal
Allow:
- 5 requests per 10 seconds per user

---

## Stored key

```txt
rate_limit:user123:window_10s
```

Value:
- count = number of requests in the current 10-second window

---

## Request flow

When a request arrives:

1. identify the user
2. figure out the current 10-second window
3. increment the counter for that user/window
4. if count <= 5 -> allow
5. if count > 5 -> reject

---

## Strengths
- simple
- fast
- easy to explain
- easy to build

## Weakness
- burstiness at the boundary of two windows

This is why fixed window is often the first design students should understand.

---

# 9. Example Design: Token Bucket Limiter

Now let’s look at a more flexible design.

## Goal
Allow:
- bursts up to 10 requests
- refill at 1 request per second

---

## Stored state

For each user:
- token count
- last refill time

---

## Request flow

When a request arrives:

1. load the user’s token bucket state
2. calculate how many tokens should have been refilled since last time
3. refill up to the bucket max
4. if tokens >= 1:
   - allow request
   - subtract 1 token
5. otherwise:
   - reject request

---

## Strengths
- allows short bursts
- still controls average rate
- common in real systems

## Weakness
- more logic than fixed window

This makes token bucket a strong design when burst tolerance matters.

---

# 10. Edge Cases and Bottlenecks

Strong designers ask:
- what could go wrong?
- what becomes the next bottleneck?

---

## Edge Case 1: Multiple app servers

As discussed earlier, local counters on separate servers can break the rule.

Solution idea:
- shared storage

---

## Edge Case 2: Storage becomes hot

If the rate limiter checks fast storage for every request, that storage layer itself may become very busy.

Possible ideas:
- highly optimized in-memory store
- partitioning keys
- local caching for some less strict rules
- distributed rate limiter design

---

## Edge Case 3: Clock problems

Some strategies depend on time windows and timestamps.

If different machines have different clocks, behavior can get weird.

That is why time consistency matters in distributed systems.

---

## Edge Case 4: Different limits for different endpoints

Some actions may deserve different rules.

Examples:
- login: 5 attempts/minute
- feed read: 200 requests/minute
- expensive AI endpoint: 10 requests/day

A real rate limiter may need rule configuration by endpoint or action type.

---

## Edge Case 5: Blocked users retrying aggressively

A good system may also return metadata like:
- retry after 8 seconds
- limit resets at time X

This helps clients behave better.

---

# 11. Trade-offs

This is one of the most important parts of the chapter.

---

## Fixed Window

### Good
- simple
- cheap
- easy to explain

### Trade-off
- unfair burstiness near boundaries

---

## Sliding Window Log

### Good
- accurate
- fairer rolling window

### Trade-off
- more memory
- more storage work

---

## Sliding Window Counter

### Good
- smoother than fixed window
- lighter than full logs

### Trade-off
- more complexity
- approximate rather than exact

---

## Token Bucket

### Good
- allows short bursts
- controls long-term rate

### Trade-off
- more logic
- must track refill state carefully

---

## Leaky Bucket

### Good
- smooth output rate

### Trade-off
- less burst-friendly
- can be more strict than desired

---

## Shared storage

### Good
- correct global view across many servers

### Trade-off
- storage layer may become a bottleneck
- adds network calls

---

# 12. How to Explain a Strong Rate Limiter Design

A strong high school system design answer might sound like this:

> We want to protect the service from abuse and overload by limiting requests per user or API key.  
> For a simple first version, I would use a fixed window limiter with a fast shared in-memory store.  
> Each request increments a counter for that user and time window.  
> If the counter exceeds the limit, the request is rejected.  
> If we need smoother fairness or burst support, I would consider a sliding window or token bucket approach instead.  
> The main trade-offs are simplicity versus fairness and accuracy.

That is a strong explanation because it includes:
- the goal
- the first design
- the storage idea
- future upgrade options
- trade-offs

---

# 13. Common Beginner Mistakes

## Mistake 1: Thinking rate limiting is only about spam

Spam prevention matters, but rate limiting also helps with:
- system protection
- fairness
- cost control
- overload management

---

## Mistake 2: Using local counters only

This often fails in multi-server systems because each server sees only part of the traffic.

---

## Mistake 3: Forgetting that different endpoints need different rules

Not every action should have the same rate limit.

---

## Mistake 4: Ignoring burst behavior

Two systems with the same average limit may feel very different depending on whether they allow bursts.

This matters a lot.

---

## Mistake 5: Only describing an algorithm, not the system

A strong answer should explain:
- where the limiter sits
- what storage it uses
- how requests flow through it
- how it behaves under scale

Not just the algorithm name.

---

# Chapter Review

## What you learned

In this chapter, you learned that a rate limiter is a protection and fairness system that controls how many requests are allowed in a certain time period.

You learned:

- why systems use rate limiters
- where rate limiters are commonly used
- how fixed window, sliding window, token bucket, and leaky bucket strategies work
- why shared fast storage is often important
- how to think about edge cases and bottlenecks
- what trade-offs different rate limiter designs make

---

## Strongest lesson from this chapter

This chapter teaches one of the most important lessons in practical system design:

> Sometimes the best way to protect a system  
> is not to make it infinitely powerful,  
> but to control how fast it is used.

That is what a rate limiter does.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A rate limiter controls how many ________ are allowed in a certain amount of time.

**Answer:** requests

---

## 2. True or False

A fixed window limiter is simple, but it can allow bursty behavior near window boundaries.

**Answer:** True

---

## 3. Short Answer

Why is shared storage often important in a rate limiter?

**Answer:** Because multiple app servers need to see the same rate limit state, or else each server may allow extra requests independently.

---

## 4. Short Answer

Why is token bucket useful?

**Answer:** Because it allows short bursts of requests while still controlling the average long-term request rate.

---

## 5. Fill in the blank

A rate limiter can help with fairness, protection, abuse prevention, and ________ control.

**Answer:** cost

---

## 6. Mini Design Challenge

Which strategy would you likely choose if you want something very simple to implement first?

One good answer:
- fixed window

---

## 7. Mini Design Challenge

Which strategy is a good fit if you want to allow bursts but still control the long-term rate?

One good answer:
- token bucket

---

# Practice Prompts

Try these on your own:

1. Design a login attempt limiter for a school portal.
2. Design a messaging limiter for a chat app.
3. What should happen when a user exceeds the limit?
4. Why might a public AI API need strong rate limiting?
5. What trade-off appears when moving from fixed window to sliding window approaches?

---

# Friendly Wrap-up

This chapter shows how a system can protect itself with a simple but powerful idea:

- count usage
- compare it to a rule
- allow or reject accordingly

That sounds small, but it solves very real problems.

The more you study rate limiters, the more you will notice:

- how many systems need protection from overload
- why fairness matters
- why fast decisions require smart storage
- how even simple policies create real trade-offs

Next, we will continue building infrastructure thinking with **Design Consistent Hashing**.
