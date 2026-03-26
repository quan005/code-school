---
title: "Design a Web Crawler"
chapterSlug: "design-a-web-crawler"
order: 9
audience: "High school students (Grades 9–12)"
estimatedMinutes: 120
skills:
  - "Explain what a web crawler does and why search systems use one"
  - "Design a crawler using queues, fetchers, parsers, and deduplication"
  - "Think about politeness, scaling, storage, and failure handling"
  - "Reason about trade-offs between speed, freshness, and coverage"
---

# Design a Web Crawler

> Audience: High school students (Grades 9–12)  
> Language used in examples: product stories, architecture sketches, and practical distributed-system reasoning  
> Big idea: A web crawler is a system that discovers pages, fetches them, extracts links, and keeps exploring the web without getting lost, overloading sites, or repeating the same work forever.

---

# Chapter Overview

Imagine you want to build a search engine.

Before you can search the web, you need to **find** the web.

That means your system needs to:
- start from a few known pages
- download page content
- discover links inside those pages
- keep exploring new pages
- avoid crawling the same page forever
- avoid hammering websites too aggressively
- store what it found for later indexing and search

That system is called a **web crawler**.

A crawler is one of the best system design problems because it combines:
- queues
- distributed workers
- deduplication
- storage
- rate limiting
- scheduling
- retries
- freshness trade-offs

In this chapter, we will learn:

1. **What a web crawler is**
2. **Why crawlers matter**
3. **Core requirements**
4. **The main components of a crawler**
5. **The basic crawl flow**
6. **Deduplication and visited tracking**
7. **Politeness and rate limiting**
8. **Scaling to many workers**
9. **Freshness and recrawling**
10. **Trade-offs and edge cases**
11. **Chapter Review**
12. **Mastery Check**

---

# 1. What a Web Crawler Is

## Intuition

A web crawler is like a robot explorer for the internet.

It starts with some known pages, often called **seed URLs**.

Then it:
1. visits one page
2. reads its content
3. finds links inside it
4. adds those links to a list of pages to visit later
5. repeats the process

That sounds simple at first, but the web is huge.

So the crawler must be smart about:
- what to fetch next
- what to skip
- how often to revisit a page
- how to avoid doing the same work over and over

---

## A simple definition

A web crawler is:

> a system that automatically discovers and fetches web pages by following links from page to page.

It is often used before:
- indexing
- ranking
- search
- analytics
- content monitoring

---

## Why the problem becomes hard

At small scale, crawling 100 pages is easy.

At large scale, the system may need to deal with:
- billions of URLs
- duplicate pages
- broken links
- slow websites
- websites that should not be overloaded
- pages that change often
- pages that almost never change

That is why a crawler is a real system design challenge.

---

# 2. Why Crawlers Matter

A crawler is often the first step in a larger information system.

## Search engines
They need crawlers to discover pages before they can index and rank them.

## Content monitoring
A company may crawl websites to track:
- product prices
- news changes
- broken links
- brand mentions

## Archiving systems
Some systems crawl the web to preserve snapshots over time.

## Research tools
A crawler can help collect public data for analysis.

That means crawlers matter because:

> You cannot organize or search content you never found.

---

# 3. Core Requirements

Before designing the system, we should understand what we want.

A web crawler should usually be able to:

1. start from seed URLs
2. fetch page content
3. extract links from pages
4. avoid revisiting the same page too often
5. store fetched content and metadata
6. scale across many workers
7. respect politeness rules
8. retry temporary failures
9. support recrawling over time

---

## Clarifying questions

Strong system designers ask:

- How large is the crawl target?
  - one website?
  - millions of websites?
  - the public web?
- Are we storing full page content, metadata, or both?
- How often should we revisit pages?
- How aggressive can the crawler be?
- Do we need to obey robots rules?
- How much freshness matters compared to coverage?
- Should we prioritize some URLs over others?
- What counts as a duplicate URL or page?

For this chapter, we will assume:
- the crawler can run across many websites
- it starts from seed URLs
- it stores fetched content and metadata
- it should avoid duplicates
- it should use politeness rules
- it should support future recrawls

---

# 4. The Main Components of a Crawler

A strong crawler design is not one giant machine.
It is a set of cooperating parts.

A practical crawler often needs:

- URL frontier
- fetcher workers
- parser/extractor
- visited URL tracking
- content storage
- scheduler
- politeness/rate-limiting logic

Let’s look at each.

---

## URL Frontier

The **URL frontier** is the list or queue of URLs waiting to be crawled.

You can think of it as the crawler’s to-do list.

It stores:
- pages not fetched yet
- maybe priorities
- maybe per-site scheduling information

This is one of the most important parts of the system.

---

## Fetcher

The **fetcher** downloads page content from a URL.

It does the network work:
- connect to site
- request page
- get HTML or content back
- record success or failure

---

## Parser / Link Extractor

After a page is fetched, the parser:
- reads the content
- extracts links
- normalizes URLs
- maybe extracts metadata such as title or language

This is what allows the crawler to discover new pages.

---

## Visited Tracking / Deduplication

The crawler must avoid repeating the same work unnecessarily.

This component helps answer:
- have we seen this URL before?
- should we crawl it again?
- is this link already in the system?

Without this, the crawler can loop or waste huge resources.

---

## Storage

The crawler often stores:
- fetched page content
- fetch time
- response status
- discovered links
- metadata
- maybe page hashes for duplicate detection

This storage may later be used by:
- an indexer
- a search engine
- analytics pipelines

---

## Scheduler

The scheduler decides:
- what to crawl next
- when to retry failures
- when to revisit old pages
- how to spread crawl work fairly across sites

This is where crawler intelligence becomes important.

---

## Politeness Controller

A crawler should not hammer one site with too many requests too quickly.

This component helps enforce:
- per-domain pacing
- rate limits
- robots-like rules
- crawl delays

This is an important real-world behavior rule.

---

# 5. The Basic Crawl Flow

Let’s build the main story of how the crawler works.

## Step 1: Seed URLs are added

Example:

```txt
https://example.com
https://schoolnews.org
https://library.net
```

These go into the URL frontier.

---

## Step 2: Fetchers take URLs from the frontier

A worker fetches one page from the queue.

---

## Step 3: The system downloads the page

Possible outcomes:
- success
- timeout
- redirect
- error
- blocked

The crawler should record what happened.

---

## Step 4: The parser extracts links

If the page contains links like:

```txt
/about
/news
/contact
```

those are turned into full URLs and considered for future crawling.

---

## Step 5: Deduplication checks them

Before adding discovered URLs to the frontier, the crawler asks:

- have we already seen this URL?
- is it already waiting in the frontier?
- should we skip it?

Only new or eligible URLs should move forward.

---

## Step 6: Store the page and metadata

The system stores:
- the page content or snapshot
- fetch timestamp
- status code
- extracted links
- maybe a content hash

---

## Step 7: Repeat at scale

This happens over and over across many workers.

That is the heartbeat of a crawler.

---

# 6. A High-Level Design

Here is a simple crawler design sketch.

```txt
Seed URLs
   |
URL Frontier / Scheduler
   |
Fetcher Workers
   |
Parser / Link Extractor
   |
Visited URL Store / Deduper
   |
Content Storage + Metadata Storage
```

A slightly richer version might look like this:

```txt
Seed URLs
   |
Scheduler / Frontier
   |
Fetcher Pool
   |
Parser
   | \
   |  \-> New URLs -> Deduper -> Frontier
   |
   \-> Page Storage / Metadata
```

This is a strong core crawler architecture.

---

# 7. Deduplication and Visited Tracking

One of the biggest crawler problems is repetition.

## Why repetition is dangerous

If the crawler keeps visiting:
- the same page
- the same URL with tiny variations
- pages that loop to each other endlessly

then it wastes:
- bandwidth
- storage
- fetcher time
- queue space

So deduplication is essential.

---

## URL-level deduplication

The simplest version tracks URLs that were already seen.

Example:
- if `https://example.com/news` was already processed, do not keep adding it forever

This is often stored in a fast lookup structure.

---

## Content-level duplication

Sometimes two different URLs lead to nearly the same content.

Example:
- page with tracking parameters
- mirrored copies
- duplicate articles

A more advanced crawler may use:
- normalized URLs
- page hashes
- canonical URLs
- duplicate-content checks

But for a first design, URL-level deduplication is enough to explain the idea.

---

## Useful data structures

A visited store might use:
- a distributed set
- a key-value store
- a compact filter such as a Bloom filter-like idea

The important thing is:
- fast membership checks
- large scale
- low duplicate work

---

# 8. Politeness and Rate Limiting

A crawler should not behave like a bully.

If it hits one website too fast, it can:
- overload the site
- get blocked
- cause operational harm

That means crawling needs politeness.

---

## Per-domain pacing

A strong crawler usually avoids sending requests to the same domain too quickly.

Example:
- no more than 1 request every few seconds per domain
- or no more than N parallel fetches per site

This helps protect target sites.

---

## Why rate limiting matters here

Notice how this chapter connects to earlier system design ideas.

A crawler may need:
- per-domain rate limiting
- per-host request spacing
- retry backoff after failures

This is a very practical use of rate-limiter thinking.

---

## Robots and rules

A real web crawler often respects site guidance about:
- which paths are allowed
- crawl delays
- what should not be indexed

For this curriculum, students do not need deep standards knowledge.
The important point is:

> A good crawler should follow site rules and avoid abusive behavior.

---

# 9. Scaling to Many Workers

A tiny crawler can run on one machine.

A serious crawler often needs many workers.

## Why?

Because crawling at scale involves:
- lots of URLs
- network waiting
- many sites
- many retries
- massive storage

One worker is not enough.

---

## Multi-worker design

```txt
Scheduler / Frontier
   |
--------------------------------
|        |        |            |
Fetcher1 Fetcher2 Fetcher3   FetcherN
--------------------------------
   |
Parser / Storage / Deduper
```

Each worker:
- pulls work from the frontier
- fetches pages
- returns results

This allows much higher throughput.

---

## What becomes harder at scale?

Now the system must handle:
- shared frontier state
- shared deduplication
- per-domain politeness across workers
- retries
- worker crashes
- balanced work distribution

That is why crawler design becomes a distributed systems problem.

---

# 10. Freshness and Recrawling

A crawler should not just discover pages once forever.

Pages change.

Some pages:
- update every few minutes
- update every hour
- change rarely
- disappear completely

So the crawler needs a recrawl strategy.

---

## Why recrawling matters

If you never revisit pages:
- your data becomes stale
- search results become outdated
- missing pages stay in the index
- new content is missed

---

## Recrawl scheduling

Different pages may deserve different revisit times.

Examples:
- homepage of a major news site -> very frequent
- old archived PDF -> infrequent
- trending topic page -> frequent
- static “about us” page -> much less frequent

That means the scheduler often needs some notion of:
- freshness priority
- change frequency
- importance

---

## Trade-off

Crawling fresh pages more often improves freshness,
but it reduces coverage because workers spend more time revisiting old pages.

So crawler systems often balance:
- coverage
- freshness
- politeness
- cost

---

# 11. Failures and Retries

The web is messy.

Pages may fail because of:
- temporary network timeouts
- server errors
- redirects
- DNS issues
- robots or permission blocks

A strong crawler design needs retry logic.

---

## Retry ideas

For temporary problems:
- retry later
- maybe use exponential backoff
- avoid immediate repeated hammering

For permanent problems:
- record failure
- maybe stop retrying quickly

This helps the system stay efficient and polite.

---

## Worker failure

If a worker crashes mid-fetch:
- the frontier should not lose the URL forever
- another worker may need to retry it later

That means job tracking and retry state matter in the design.

---

# 12. A Practical System Design View

Let’s describe a strong high-school-level crawler design.

## High-level architecture

```txt
Seed URLs
   |
Frontier / Scheduler
   |
Distributed Fetcher Workers
   |
Parser / Extractor
   |
Visited URL Store
   |
Content + Metadata Storage
```

---

## What the scheduler does

The scheduler:
- chooses which URL to crawl next
- avoids hitting one domain too often
- decides when to retry or recrawl
- manages worker assignments

---

## What the fetchers do

Fetchers:
- download pages
- return status and content
- report failures

---

## What the parser does

The parser:
- extracts outgoing links
- normalizes URLs
- sends new links through deduplication

---

## What the storage does

Storage keeps:
- page content
- metadata
- fetch time
- status
- maybe content hashes

This design is strong because each part has a clear role.

---

# 13. Trade-offs

This chapter is filled with trade-offs.

---

## Coverage vs Freshness

### More coverage
- discover more pages
- revisit less often

### More freshness
- revisit important pages more often
- discover fewer totally new pages

You cannot maximize both perfectly with limited resources.

---

## Speed vs Politeness

### Faster crawling
- gathers data quickly

### More politeness
- better behavior toward websites
- slower per-domain throughput

A strong crawler chooses a respectful balance.

---

## Simple deduplication vs smarter duplication handling

### Simple URL dedupe
- easier
- faster

### Smarter duplicate-content handling
- more accurate
- more complexity

---

## Single machine vs distributed crawler

### Single machine
- simple
- limited

### Distributed
- scalable
- much more complex coordination

---

# 14. How to Explain a Strong Web Crawler Design

A strong high school system design answer might sound like this:

> We want a crawler that starts from seed URLs, fetches pages, extracts links, and keeps expanding coverage over time.  
> I would use a URL frontier to hold crawl candidates, distributed fetcher workers to download pages, a parser to extract links, and a visited store to prevent duplicate crawling.  
> I would also include politeness controls so one site is not hit too aggressively, and a scheduler that supports retries and future recrawls.  
> The main trade-offs are coverage versus freshness, and crawling speed versus politeness.

That is strong because it includes:
- the goal
- the core components
- the crawl flow
- politeness
- recrawling
- trade-offs

---

# 15. Common Beginner Mistakes

## Mistake 1: Forgetting deduplication

Without deduplication, the crawler can waste huge amounts of time revisiting the same URLs.

---

## Mistake 2: Ignoring politeness

A crawler that only cares about speed can behave badly and get blocked or cause harm.

---

## Mistake 3: Treating the frontier like a simple list forever

At scale, the frontier often needs:
- priorities
- retries
- recrawl scheduling
- per-domain pacing

That is much more than one simple list.

---

## Mistake 4: Ignoring recrawling

Finding a page once is not enough if the system cares about freshness.

---

## Mistake 5: Forgetting worker failures

At scale, some workers will fail.
A good design plans for that.

---

# 16. Chapter Review

## What you learned

In this chapter, you learned that a web crawler is a discovery system that explores pages, extracts links, and keeps expanding its coverage while managing duplicates, storage, retries, and politeness.

You learned:

- what a web crawler does
- why crawlers matter
- the role of the URL frontier
- how fetchers and parsers work together
- why deduplication is essential
- why politeness and rate limiting matter
- how distributed workers help scale crawling
- why recrawling and freshness matter
- what trade-offs real crawler systems face

---

## Strongest lesson from this chapter

This chapter teaches one of the most important lessons in large-scale discovery systems:

> Finding information at scale  
> is not just about going fast.  
> It is about going wide, staying organized, and behaving responsibly.

That is what makes crawler design interesting.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A web crawler often starts from a set of known pages called ________ URLs.

**Answer:** seed

---

## 2. True or False

A crawler should usually revisit the same URL over and over without tracking whether it has been seen before.

**Answer:** False

Deduplication and revisit logic are very important.

---

## 3. Short Answer

Why is the URL frontier important?

**Answer:** Because it stores the URLs waiting to be crawled and acts like the crawler’s to-do list.

---

## 4. Short Answer

Why does a crawler need politeness controls?

**Answer:** So it does not overload websites by sending too many requests too quickly to the same domain or host.

---

## 5. Fill in the blank

After a page is fetched, a parser often extracts new ________ from it.

**Answer:** links

---

## 6. Mini Design Challenge

What component would help a crawler avoid fetching the same URL again and again?

One good answer:
- a visited URL store or deduplication system

---

## 7. Mini Design Challenge

Why might a news homepage be recrawled more often than an old PDF file?

One good answer:
- because it changes more frequently and freshness matters more

---

# Practice Prompts

Try these on your own:

1. Why is a queue or frontier important in a crawler?
2. What happens if many workers all crawl the same domain too fast?
3. What data would you store after fetching a page?
4. Why is freshness a different problem from coverage?
5. What kinds of systems besides search engines might use a crawler?

---

# Friendly Wrap-up

This chapter shows how a crawler turns the open web into a structured discovery problem.

It has to:
- know where to go next
- fetch pages efficiently
- find new links
- avoid duplicates
- behave politely
- handle failures
- decide what to revisit later

That combination makes web crawlers a powerful system design challenge.

Next, we will continue with another high-scale communication problem: **Design a Notification System**.
