---
title: "Design a News Feed System"
chapterSlug: "design-a-news-feed-system"
order: 11
audience: "High school students (Grades 9–12)"
estimatedMinutes: 125
skills:
  - "Explain what a news feed system does and why it is hard at scale"
  - "Design a feed using posts, follow relationships, fan-out, storage, and ranking"
  - "Compare fan-out on write and fan-out on read strategies"
  - "Reason about trade-offs between freshness, speed, storage, and complexity"
---

# Design a News Feed System

> Audience: High school students (Grades 9–12)  
> Language used in examples: product stories, architecture sketches, and practical distributed-system reasoning  
> Big idea: A news feed system decides what content a user should see, in what order, and how to deliver it quickly even when millions of people are posting at the same time.

---

# Chapter Overview

When a user opens a social app, one of the most important screens is the feed.

The feed might show:
- posts from friends
- updates from followed creators
- comments or activity highlights
- recommended content
- sponsored content
- ranked items chosen by relevance or time

From the user’s point of view, it looks easy:

> “Open app -> see posts.”

But underneath, a feed system is doing hard work:

- finding which accounts the user follows
- finding recent posts from those accounts
- choosing what order to show them in
- mixing freshness with relevance
- avoiding slow loading
- handling huge traffic spikes
- updating feeds while people are constantly posting

That makes news feed systems one of the most important product system design problems.

In this chapter, we will learn:

1. **What a news feed system is**
2. **Why feed systems are hard**
3. **Core requirements**
4. **Main components**
5. **The two big strategies**
   - Fan-out on write
   - Fan-out on read
6. **Feed generation flow**
7. **Ranking and ordering**
8. **Caching and scaling**
9. **Edge cases and bottlenecks**
10. **Trade-offs**
11. **Chapter Review**
12. **Mastery Check**

---

# 1. What a News Feed System Is

## Intuition

A news feed system answers a simple-looking question:

> “What should this user see right now?”

To answer that, the system may need to know:
- who the user follows
- what those people posted recently
- whether some posts are more important
- whether recommendations should be included
- whether the app should favor fresh content or relevant content

So a feed is not just a list of posts.

It is a system that:
- gathers candidate content
- organizes it
- ranks it
- returns it quickly

---

## A simple definition

A news feed system is:

> a system that gathers content for a user and returns an ordered list of feed items for that user.

That ordered list might be based on:
- time
- relevance
- popularity
- relationship closeness
- recommendations
- or some mix of those

---

# 2. Why Feed Systems Are Hard

Feed systems are hard because they sit in the middle of many powerful forces.

## Force 1: Lots of users create content

Millions of people may post constantly.

## Force 2: Lots of users read feeds constantly

Feed reads are often much more frequent than posting.

## Force 3: Users expect fast loading

The feed should feel almost instant.

## Force 4: A user may follow many accounts

Some users follow:
- 50 people
Others follow:
- 5,000 people
Some celebrity accounts may have:
- millions of followers

That changes the design dramatically.

## Force 5: Relevance matters

Chronological order is simple.
But most big apps also care about:
- ranking
- engagement
- personalization

That makes the system more complex.

---

# 3. Core Requirements

Before designing the system, we should understand what it must do.

A feed system should usually support:

1. creating posts
2. following and unfollowing users
3. loading a user’s feed
4. showing posts in a useful order
5. refreshing with new content
6. scaling to many readers and writers

Depending on the product, it may also support:
- likes and comments
- ranked recommendations
- ads
- muted accounts
- blocked content
- pagination or infinite scroll

---

## Clarifying questions

Strong system designers ask:

- Is the feed chronological, ranked, or both?
- Is this feed only from followed accounts, or also recommended content?
- How fresh does the feed need to be?
- How many users and posts are we dealing with?
- How many followers can one account have?
- Do we precompute feed entries or build them on demand?
- Do we support infinite scroll?
- How much personalization is required?

For this chapter, we will assume:
- users can follow accounts
- users can create posts
- the system must return a home feed
- the feed is mostly based on followed accounts
- the system may rank by freshness and simple relevance
- the system should scale to large read traffic

---

# 4. The Main Components

A strong feed system often needs these parts:

- post creation service
- social graph / follow graph
- feed generation service
- feed storage or feed cache
- ranking service
- post storage
- API layer
- cache

Let’s break them down.

---

## Post Creation Service

This part handles:
- new post creation
- storing post content or metadata
- triggering feed updates

When a creator posts something new, the feed system may need to react immediately.

---

## Social Graph

The social graph stores:
- who follows whom

Example:
- Maya follows Alex
- Alex follows Jordan

This matters because the feed often starts by asking:
- which accounts does this user follow?

---

## Feed Generation Service

This part decides:
- what posts should appear in the user’s feed

It may do this:
- when a post is created
or
- when the user opens the app

That difference leads to the two big strategies later in the chapter.

---

## Feed Storage or Feed Cache

Some systems keep precomputed feed entries ready to serve.

This can make reads very fast.

But it costs:
- storage
- write work
- fan-out effort

---

## Ranking Service

If the feed is not purely chronological, then a ranking step may decide:
- which candidate posts matter most
- what order they should appear in

This can use:
- recency
- popularity
- relationship strength
- personalization signals

For this curriculum, we will keep ranking conceptually simple.

---

## Post Storage

The system must store:
- post ids
- author id
- creation time
- metadata
- maybe media references

This is the source content the feed refers to.

---

## API Layer

This serves:
- feed requests from client apps
- pagination
- refresh requests

This is the user-facing entry point.

---

# 5. A High-Level Design

Here is a simple feed system sketch.

```txt
Clients
   |
Feed API
   |
Feed Service
   | \
   |  \-> Feed Cache / Feed Store
   |
   \-> Social Graph
   \-> Post Store
   \-> Ranking Logic
```

And when users create posts:

```txt
Post Creator
   |
Post Creation Service
   |
Post Store
   |
Feed Update Path
```

This is the big system shape.
Now we need to talk about the two major feed-generation strategies.

---

# 6. The Two Big Strategies

This is the heart of the chapter.

When a user posts something, how do we make it appear in followers’ feeds?

There are two classic strategies.

---

## Strategy 1: Fan-out on Write

### Main idea

When a user creates a post, the system immediately pushes references to that post into the feeds of that user’s followers.

That means:
- work happens at write time

---

### Example

Alex posts a new update.

If 500 people follow Alex, the system may:
- add Alex’s new post to 500 feed lists right away

Then when one of those followers opens the app:
- the feed is already partly prepared

---

### Why it is useful

### Good
- feed reads can be very fast
- feed loading feels quick
- good for read-heavy systems with moderate fan-out

This is often strong when:
- users read much more than they post
- most accounts do not have enormous follower counts

---

### Main weakness

### Problem
If someone with millions of followers posts, fan-out on write can become very expensive.

One post may trigger:
- millions of feed updates

That is a huge write amplification problem.

---

## Strategy 2: Fan-out on Read

### Main idea

Do less work when the post is created.

Instead, when a user opens the app:
- gather recent posts from followed accounts
- merge them
- rank them
- return the result

That means:
- work happens at read time

---

### Example

Maya follows:
- Alex
- Jordan
- Priya

When Maya opens the app, the system:
- fetches recent posts from Alex, Jordan, and Priya
- combines them
- sorts or ranks them
- builds the feed then

---

### Why it is useful

### Good
- posting is cheaper
- better for very high-follower accounts
- avoids massive write fan-out

---

### Main weakness

### Problem
Feed reads become more expensive because the work happens when the user opens the app.

If lots of users refresh often, the read path can become heavy.

---

# 7. Hybrid Strategy Thinking

Real systems often mix both strategies.

This is very important.

A strong design might say:

- normal users -> fan-out on write
- celebrity or huge accounts -> fan-out on read

Why?

Because celebrity accounts may have:
- millions of followers

Pushing every new post into all of those feed lists can be too expensive.

So hybrid strategies are common.

---

# 8. Feed Generation Flow

Let’s walk through both flows.

---

## Flow A: Fan-out on Write

Suppose Alex posts a photo.

### Step 1
The post creation service stores the post in the post store.

### Step 2
The system looks up Alex’s followers from the social graph.

### Step 3
For each follower, the feed update pipeline inserts a post reference into that follower’s feed store.

### Step 4
When Maya opens the app later, her feed can be read quickly from the prebuilt feed store.

This is very read-friendly.

---

## Flow B: Fan-out on Read

Suppose Alex posts a photo.

### Step 1
The post creation service stores the post.

### Step 2
No giant follower feed update happens immediately.

### Step 3
Later, when Maya opens the app, the feed service:
- gets the list of accounts Maya follows
- fetches recent posts from those accounts
- merges and ranks them
- returns the feed

This is more write-friendly, but more read-heavy.

---

# 9. Ranking and Ordering

Feed systems are not just about collecting posts.
They also decide order.

---

## Chronological feed

The simplest rule is:
- newest first

### Good
- simple
- easy to explain
- predictable

### Trade-off
- may not surface the most interesting or important content

---

## Ranked feed

A ranked feed may consider:
- recency
- number of likes/comments
- whether the user often interacts with the author
- post type
- relevance signals

### Good
- can improve engagement
- can personalize the feed

### Trade-off
- more complexity
- harder to explain
- more compute work

---

## Simple high-school-level approach

For this curriculum, a strong answer can say:

> The feed may first gather candidate posts, then sort them by a combination of freshness and simple relevance signals.

That is enough to show ranking awareness without going too deep into machine learning.

---

# 10. Caching and Scaling

Feeds are read constantly.

That means caching matters a lot.

---

## Why caching helps

If many users repeatedly request their feed, caching can help:
- reduce repeated database work
- speed up API responses
- reduce ranking recomputation for short periods

---

## What might be cached?

Examples:
- precomputed feed pages
- candidate post lists
- hot recent post metadata
- social graph lookups

---

## High-level scaled design

```txt
Clients
   |
Feed API
   |
Feed Cache
   |
Feed Service
   | \
   |  \-> Social Graph
   |  \-> Post Store
   |  \-> Ranking
   |
Feed Store / Candidate Store
```

This shape helps the system handle heavy read traffic.

---

## Why feed systems are often read-heavy

People may open the feed constantly:
- scrolling
- refreshing
- coming back many times a day

Meanwhile, most users post less often than they read.

That makes feed systems heavily read-oriented, even though posting is still important.

---

# 11. Pagination and Infinite Scroll

A real feed usually does not return the entire feed at once.

That would be too large.

Instead, it supports:
- pages
- cursors
- infinite scrolling

---

## Why this matters

If a user has access to thousands of candidate posts, the system should only send:
- the first chunk now
- more later as the user scrolls

That improves:
- speed
- bandwidth
- user experience

A strong design answer should mention pagination or cursors.

---

# 12. Edge Cases and Bottlenecks

Strong system designers ask:
- what breaks first?
- what gets expensive?

---

## Edge Case 1: Celebrity accounts

A user with millions of followers can create giant fan-out pressure.

That is one of the biggest reasons hybrid feed strategies exist.

---

## Edge Case 2: Hot reads

A user refreshing the feed constantly can create heavy read pressure.

That is why caching matters.

---

## Edge Case 3: Ranking cost

If ranking is complex, the feed service may become slow or expensive.

This can affect:
- response time
- compute cost
- scalability

---

## Edge Case 4: Follow graph size

Users who follow thousands of accounts make fan-out on read more expensive.

Gathering all candidate posts can become heavy.

---

## Edge Case 5: Stale cached feeds

Caching makes reads faster, but it can briefly show older feed results.

That creates a freshness trade-off.

---

## Edge Case 6: Deleted or hidden content

If a post is deleted, blocked, or moderated, the system may need to remove it from feed results quickly.

That adds operational complexity.

---

# 13. A Practical Feed System Design

Let’s describe a strong high-school-level design.

## High-level idea

We want:
- users to create posts
- followers to see those posts quickly
- reads to be fast
- massive fan-out to be manageable

A strong design might be:

```txt
Post Service
   |
Post Store
   |
Feed Update Pipeline
   |
Feed Store / Feed Cache
   |
Feed API
   |
Clients
```

with the social graph helping determine who should receive which posts.

---

## Hybrid version

A stronger real-world answer might say:

- use fan-out on write for normal users
- use fan-out on read for celebrity accounts
- cache feed results for fast reads
- rank candidate posts before returning them

That is a strong and realistic system design answer.

---

# 14. Trade-offs

This chapter is full of trade-offs.

---

## Fan-out on write

### Good
- fast reads
- feed ready ahead of time

### Trade-off
- expensive writes
- bad for celebrity-scale follower counts

---

## Fan-out on read

### Good
- cheaper post creation
- better for huge follower accounts

### Trade-off
- more expensive reads
- slower feed assembly

---

## Heavy caching

### Good
- fast reads
- lower backend load

### Trade-off
- stale data risk
- cache invalidation complexity

---

## Ranked feeds

### Good
- better personalization
- potentially more engaging feed

### Trade-off
- more compute
- more complexity
- harder debugging and explanation

---

## Chronological feeds

### Good
- simple
- predictable

### Trade-off
- may not surface the “best” content

---

# 15. How to Explain a Strong News Feed Design

A strong high school system design answer might sound like this:

> We want a system that shows each user a list of posts from followed accounts quickly and in a useful order.  
> I would store posts in a post store, keep follow relationships in a social graph, and use a feed service to assemble or serve feed items.  
> For many users, a fan-out on write strategy can make feed reads fast by precomputing feed entries.  
> But for very large accounts with millions of followers, I would switch to fan-out on read to avoid massive write amplification.  
> I would also use caching for feed reads and support pagination for infinite scrolling.  
> The main trade-offs are write cost versus read cost, freshness versus speed, and simple chronological ordering versus more expensive ranking.

That is strong because it includes:
- the goal
- the main components
- both major strategies
- hybrid reasoning
- caching
- trade-offs

---

# 16. Common Beginner Mistakes

## Mistake 1: Thinking the feed is just one database query

At scale, feed systems usually need more than:
- “SELECT posts ORDER BY time”

They involve graph lookups, candidate gathering, ranking, and caching.

---

## Mistake 2: Forgetting celebrity fan-out

This is one of the biggest feed design issues.
A design that ignores it is usually too shallow.

---

## Mistake 3: Ignoring read-heavy traffic

Feeds are often opened far more often than users post.
That changes everything.

---

## Mistake 4: No pagination

Returning giant feed results at once is wasteful and slow.

---

## Mistake 5: Ignoring ranking

Even if the first version is chronological, strong designers should at least mention that ranking may matter later.

---

# 17. Chapter Review

## What you learned

In this chapter, you learned that a news feed system gathers content for a user and returns an ordered feed while balancing freshness, relevance, and scale.

You learned:

- what a news feed system does
- why feed systems are hard
- the roles of posts, follow graph, feed generation, ranking, and caching
- the difference between fan-out on write and fan-out on read
- why hybrid strategies often make sense
- why caching and pagination matter
- what bottlenecks and trade-offs appear in real feed systems

---

## Strongest lesson from this chapter

This chapter teaches one of the most important product-system lessons in system design:

> A feed is not just stored content.  
> It is computed attention.

That is what makes feed systems so powerful and so complex.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In a fan-out on ________ design, the system pushes new posts into follower feed stores when the post is created.

**Answer:** write

---

## 2. True or False

Celebrity accounts are one reason fan-out on write can become expensive.

**Answer:** True

---

## 3. Short Answer

Why is fan-out on read useful for very large accounts?

**Answer:** Because it avoids pushing each new post into millions of follower feed entries at write time, which can be extremely expensive.

---

## 4. Short Answer

Why does caching matter in a feed system?

**Answer:** Because feed reads are very frequent, and caching can speed them up while reducing repeated backend work.

---

## 5. Fill in the blank

The system that stores who follows whom is often called the social ________.

**Answer:** graph

---

## 6. Mini Design Challenge

What is one major trade-off between fan-out on write and fan-out on read?

One good answer:
- fan-out on write makes reads faster but writes more expensive, while fan-out on read makes writes cheaper but reads more expensive

---

## 7. Mini Design Challenge

Why is pagination important in a feed?

One good answer:
- because the app should return only a manageable chunk of feed items at a time instead of trying to send everything at once

---

# Practice Prompts

Try these on your own:

1. Why might a chronological feed be simpler than a ranked feed?
2. What kind of cache might help a feed system?
3. Why is the follow graph important to feed generation?
4. What changes when a user follows 5 people versus 5 million people follow one creator?
5. What product signals might a ranked feed consider besides time?

---

# Friendly Wrap-up

This chapter shows how a feed system turns huge amounts of social activity into a fast, useful, personalized stream of content.

To do that, it has to:
- gather the right candidate posts
- decide when to compute feed entries
- rank or sort them
- scale for huge read traffic
- handle both normal users and giant accounts

That is why feed systems are such a central system design topic.

Next, we will move on to another major real-time product system: **Design a Chat System**.
