---
title: "Back of the Envelope Estimation"
chapterSlug: "back-of-the-envelope-estimation"
order: 3
audience: "High school students (Grades 9–12)"
estimatedMinutes: 100
skills:
  - "Make rough but useful estimates for traffic, storage, and bandwidth"
  - "Convert user counts into requests per second and data volume"
  - "Use simple assumptions to reason about scale"
  - "Explain why estimation matters before drawing a system design"
---

# Back of the Envelope Estimation

> Audience: High school students (Grades 9–12)  
> Language used in examples: simple math, rough assumptions, and practical product scenarios  
> Big idea: Back of the envelope estimation means making fast, reasonable calculations that help you understand how big a system really is.

---

# Chapter Overview

When students first hear “system design,” they often imagine:
- diagrams
- servers
- databases
- caches
- queues

Those things matter.

But before you decide which parts to add, you should ask:

- How many users are we serving?
- How many requests happen every second?
- How much data is stored each day?
- How large are the files?
- How much traffic moves through the system?

That is where **back of the envelope estimation** comes in.

This means:
- making rough calculations
- using simple assumptions
- getting numbers that are “good enough” to guide design

You are not trying to get perfect answers.
You are trying to get answers that are useful.

In this chapter, we will learn:

1. **What back of the envelope estimation is**
2. **Why rough numbers matter**
3. **Useful units and conversions**
4. **Estimating users and traffic**
5. **Estimating storage**
6. **Estimating bandwidth**
7. **Estimating read-heavy vs write-heavy systems**
8. **A full worked example**
9. **Common beginner mistakes**
10. **Chapter Review**
11. **Mastery Check**

---

# 1. What Back of the Envelope Estimation Is

## Intuition

Imagine you want to design a video-sharing app.

Before choosing:
- how many servers you need
- how much storage to buy
- whether you need a CDN
- whether the database will survive

you should first ask:

> About how many videos are uploaded every day?
> About how big is each video?
> About how many people watch them every hour?

These do not need to be perfect answers.

You just need rough estimates.

That is what back of the envelope estimation is.

---

## A simple definition

Back of the envelope estimation means:

> making quick, rough calculations to understand the scale of a system.

It helps answer questions like:
- Is this a tiny system or a huge system?
- Will storage grow slowly or explode quickly?
- Is traffic moderate or massive?
- Does one server sound realistic or impossible?

---

## Why “back of the envelope”?

The phrase means:
- quick math
- done with simple assumptions
- not a giant spreadsheet
- not perfect precision

In real system design, rough answers are often much more useful than vague guesses.

---

# 2. Why Rough Numbers Matter

## Without numbers, designs can become fake

Suppose someone says:

> “We should use a giant distributed storage system.”

Maybe.
But maybe not.

If the app only stores:
- 5,000 text notes per day

then giant infrastructure may be unnecessary.

Now suppose the app stores:
- 10 million 50 MB videos per day

That is a completely different world.

Without estimates, those two systems might sound equally “big.”

But they are not.

---

## Estimation helps you choose the right tools

Estimation helps decide:
- whether a cache is important
- whether one database is enough
- whether you need object storage
- whether a CDN is necessary
- whether one machine would obviously fail

This is one of the strongest habits in system design:

> Do the rough math before deciding on the architecture.

---

## Estimation turns feelings into reasoning

Instead of saying:
- “This app might be large”

you can say:
- “If we have 2 million daily active users and each sends 10 requests per minute during peak times, that is a serious traffic load.”

That is much stronger thinking.

---

# 3. Useful Units and Conversions

Before estimating systems, students need a few common units.

---

## Time units

- 1 minute = 60 seconds
- 1 hour = 60 minutes
- 1 day = 24 hours
- 1 day = 86,400 seconds

That last one is especially useful.

```txt
1 day = 24 × 60 × 60 = 86,400 seconds
```

---

## Data units

For simple system design thinking, we often use rough decimal-style values:

- 1 KB ≈ 1,000 bytes
- 1 MB ≈ 1,000 KB
- 1 GB ≈ 1,000 MB
- 1 TB ≈ 1,000 GB

This is close enough for rough estimation.

---

## Common abbreviations

- **RPS** = requests per second
- **QPS** = queries per second
- **DAU** = daily active users
- **MAU** = monthly active users

You will see these often in system design.

---

## A very common shortcut

If something happens `N` times per day, then the average per second is:

```txt
N / 86,400
```

Example:
- 864,000 requests per day

Average per second:

```txt
864,000 / 86,400 = 10 requests per second
```

That is a very useful shortcut.

---

# 4. Estimating Users and Traffic

## Step 1: start with users

A common starting point is:

- DAU = daily active users

Example:
- 1,000,000 DAU

Then ask:
- how many actions per user per day?
- how many of those actions are reads?
- how many are writes?
- when is peak traffic?

---

## Step 2: estimate total daily actions

Example:
- 1,000,000 users
- 20 requests per user per day

Total daily requests:

```txt
1,000,000 × 20 = 20,000,000 requests/day
```

---

## Step 3: convert to average requests per second

```txt
20,000,000 / 86,400 ≈ 231 requests/second
```

That is the average.

---

## Step 4: think about peak traffic

Real systems do not get traffic evenly.

Traffic usually spikes.

A common rough idea is:
- peak traffic might be 2x, 5x, or even 10x the average

Example:
- average = 231 RPS
- peak = maybe 5 × 231 = 1,155 RPS

That is much more useful for design.

---

## Example: school announcements app

Suppose:
- 100,000 students use it daily
- each student opens the app 5 times a day
- each app open creates 4 requests

Daily requests:

```txt
100,000 × 5 × 4 = 2,000,000 requests/day
```

Average RPS:

```txt
2,000,000 / 86,400 ≈ 23 requests/second
```

Peak could be much higher, maybe near morning announcements.

That gives us a better feel for the system.

---

# 5. Estimating Storage

Storage estimation is one of the most important parts of system design.

Ask:
- how much data does one item use?
- how many items are created per day?
- how long do we keep the data?

---

## Example 1: text messages

Suppose:
- one message averages 500 bytes
- users send 10 million messages per day

Daily storage:

```txt
10,000,000 × 500 bytes = 5,000,000,000 bytes
```

That is about:

```txt
5 GB/day
```

Monthly storage:

```txt
5 GB × 30 = 150 GB/month
```

Yearly storage:

```txt
150 GB × 12 = 1.8 TB/year
```

That is already significant.

---

## Example 2: photos

Suppose:
- one photo averages 3 MB
- 500,000 photos are uploaded per day

Daily storage:

```txt
500,000 × 3 MB = 1,500,000 MB
```

Convert:

```txt
1,500,000 MB = 1,500 GB = 1.5 TB/day
```

Monthly:

```txt
1.5 TB × 30 = 45 TB/month
```

Now the storage need is much larger.

---

## Example 3: videos

Suppose:
- one video averages 50 MB
- 2,000,000 videos uploaded per day

Daily storage:

```txt
2,000,000 × 50 MB = 100,000,000 MB
```

Convert:

```txt
100,000,000 MB = 100,000 GB = 100 TB/day
```

That is huge.

This is why video systems quickly need serious object storage design.

---

## Important lesson

The type of content changes everything.

- text may be small
- photos are much larger
- videos are enormous

That is why estimation must match the product.

---

# 6. Estimating Bandwidth

Storage tells us how much data we keep.
Bandwidth tells us how much data moves across the system.

This matters for:
- streaming
- downloads
- uploads
- media delivery
- network cost

---

## Example: image viewing traffic

Suppose:
- one image averages 2 MB
- 1,000,000 image views happen per day

Daily transfer:

```txt
1,000,000 × 2 MB = 2,000,000 MB
```

Convert:

```txt
2,000,000 MB = 2,000 GB = 2 TB/day
```

That is a lot of network traffic.

---

## Example: video playback traffic

Suppose:
- one average viewed video session transfers 100 MB
- 5,000,000 plays happen per day

Daily bandwidth:

```txt
5,000,000 × 100 MB = 500,000,000 MB
```

Convert:

```txt
500,000,000 MB = 500,000 GB = 500 TB/day
```

That is enormous.

Now it becomes obvious why video platforms care so much about:
- CDNs
- compression
- caching
- streaming optimization

---

# 7. Read-Heavy vs Write-Heavy Systems

Not all systems are balanced.

Some are mostly reads.
Some are mostly writes.

This changes the design a lot.

---

## Read-heavy system

Example:
- school announcement site
- people read much more often than they post

Suppose:
- 10 million reads/day
- 100,000 writes/day

That is extremely read-heavy.

This kind of system often benefits from:
- caching
- read replicas
- CDN for static data

---

## Write-heavy system

Example:
- logging system
- analytics system
- sensor system

Suppose:
- millions of events are being written constantly

This kind of system may care more about:
- write throughput
- queues
- efficient storage pipelines

---

## Mixed systems

Some apps are both:
- heavy reads
- and heavy writes

Examples:
- chat
- social feeds
- short-video apps

These systems are often harder because they need to be strong in both directions.

---

# 8. A Full Worked Example

Let’s do a full example for a simple social app.

## Problem setup

Suppose we are designing a small media-sharing app with:

- 2,000,000 DAU
- each user opens the app 8 times per day
- each visit creates 6 requests
- each user uploads 1 photo every 4 days on average
- each photo is 4 MB

Let’s estimate:
- requests/day
- average RPS
- photo uploads/day
- storage/day

---

## Step 1: requests per day

Each user:
- 8 visits/day
- 6 requests/visit

So:
- 48 requests/user/day

Total daily requests:

```txt
2,000,000 × 48 = 96,000,000 requests/day
```

---

## Step 2: average RPS

```txt
96,000,000 / 86,400 ≈ 1,111 requests/second
```

Average:
- about 1,111 RPS

Peak could be much higher, maybe:
- 5x peak = about 5,555 RPS

That is real scale.

---

## Step 3: uploads per day

If each user uploads 1 photo every 4 days, that means:

```txt
2,000,000 / 4 = 500,000 uploads/day
```

---

## Step 4: storage per day

Each photo:
- 4 MB

Daily storage:

```txt
500,000 × 4 MB = 2,000,000 MB
```

Convert:

```txt
2,000,000 MB = 2,000 GB = 2 TB/day
```

Monthly storage:

```txt
2 TB × 30 = 60 TB/month
```

---

## What do these numbers tell us?

Now we can reason much better.

This system probably needs:
- multiple app servers
- a load balancer
- object storage for photos
- maybe a CDN for serving images
- probably caching for feeds and profiles

Without estimation, we might have guessed randomly.
With estimation, the design becomes grounded.

That is the power of this chapter.

---

# 9. Quick Estimation Patterns to Remember

These patterns come up all the time.

---

## Pattern 1: daily count -> per second

```txt
daily events / 86,400
```

---

## Pattern 2: users × actions per user

```txt
total daily actions = users × actions per user per day
```

---

## Pattern 3: item count × item size

```txt
total storage = number of items × size per item
```

---

## Pattern 4: average vs peak

Average traffic is not enough.

Always ask:
- what is the peak?

Peak might be several times larger than the average.

---

## Pattern 5: monthly and yearly growth

Daily storage might look small until you multiply it by:
- 30 days
- 365 days

That is why long-term storage estimation matters.

---

# 10. Common Beginner Mistakes

## Mistake 1: Trying to be perfectly exact

You do not need perfect math.

Rough but reasonable is the goal.

System design estimation is about:
- useful order-of-magnitude thinking
- not exact accounting

---

## Mistake 2: Forgetting peak traffic

Average traffic can hide the real problem.

Many systems fail during spikes, not during normal averages.

---

## Mistake 3: Ignoring the size of media

Text, images, audio, and video are not remotely the same scale.

If you forget file size, your system estimate can be wildly wrong.

---

## Mistake 4: Forgetting time growth

Daily storage may seem manageable, but:
- daily -> monthly -> yearly growth can become huge quickly

---

## Mistake 5: Mixing reads and writes together carelessly

A system with:
- many reads
- few writes

behaves differently from a system with:
- many writes
- few reads

This matters for the architecture.

---

# Chapter Review

## What you learned

In this chapter, you learned that back of the envelope estimation is about making rough but useful calculations to understand the scale of a system.

You learned how to:

- estimate requests per day
- convert daily traffic into requests per second
- estimate storage growth
- estimate bandwidth for media-heavy apps
- think about average vs peak traffic
- separate read-heavy and write-heavy patterns
- use quick estimation to guide design decisions

---

## Key formulas to remember

### Requests per day
```txt
users × actions per user
```

### Average RPS
```txt
daily requests / 86,400
```

### Storage
```txt
number of items × size per item
```

### Growth over time
```txt
daily storage × number of days
```

---

## Strongest lesson from this chapter

This chapter teaches one of the most important lessons in system design:

> Rough numbers are far better than vague feelings.

When you estimate first, your architecture decisions become much smarter.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

To estimate average requests per second from daily requests, divide by ________.

**Answer:** 86,400

---

## 2. True or False

Back of the envelope estimation is about making perfect, exact calculations.

**Answer:** False

It is about rough but useful estimates.

---

## 3. Short Answer

Why is peak traffic important?

**Answer:** Because real systems often fail during spikes, and average traffic may hide the true load the system must handle.

---

## 4. Short Answer

Why is storage estimation especially important for photo and video apps?

**Answer:** Because media files are much larger than text, so storage and bandwidth can grow very quickly.

---

## 5. Fill in the blank

A system with many reads and relatively few writes is called ________-heavy.

**Answer:** read

---

## 6. Mini Design Challenge

If 500,000 users each make 10 requests per day, about how many daily requests is that?

**Answer:** 5,000,000 requests/day

---

## 7. Mini Design Challenge

If an app stores 100,000 images per day and each image is 2 MB, about how much storage is that per day?

**Answer:** 200,000 MB, or about 200 GB/day

---

# Practice Prompts

Try these on your own:

1. Estimate the daily requests for a chat app with 300,000 users sending 20 messages each per day.
2. Estimate the storage for a homework app storing 50,000 PDF files per day at 1 MB each.
3. Estimate the average RPS for 17,280,000 requests per day.
4. Estimate why a video app might need a CDN based on playback bandwidth.
5. Think of one read-heavy app and one write-heavy app.

---

# Friendly Wrap-up

This chapter shows a powerful truth about system design:

> Before you choose the architecture,  
> you should understand the size of the problem.

That is why estimation matters.

The more you practice back of the envelope estimation, the more you will notice:

- when a system is still small
- when a design obviously needs to change
- when storage growth becomes scary
- when peak traffic is the real danger
- when rough math can save you from bad architecture choices

Next, we will turn these ideas into a repeatable process with **a framework for system design**.
