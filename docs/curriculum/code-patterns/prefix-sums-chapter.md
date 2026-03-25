---
title: "Prefix Sums"
chapterSlug: "prefix-sums"
order: 10
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 95
skills:
  - "Explain what a prefix sum stores"
  - "Use prefix sums to answer range-sum questions quickly"
  - "Build a running-total array step by step"
  - "Recognize when precomputing saves repeated work"
---

# Prefix Sums

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A prefix sum stores the running total from the beginning up to each position, so later sum questions become much faster.

---

# Chapter Overview

Imagine you have a line of numbers:

```txt
[2, 4, 1, 3, 5]
```

Now imagine someone keeps asking:

- What is the sum from index 0 to 2?
- What is the sum from index 1 to 4?
- What is the sum from index 2 to 3?

You *could* add the numbers every single time.

But that repeats work again and again.

A smarter idea is to build a helper array first.

This helper array stores the running total as we move from left to right.

That helper is called a **prefix sum** array.

With prefix sums, we do a little extra work at the beginning so later range-sum questions become fast and easy.

In this chapter, we will learn:

1. **Introduction to Prefix Sums**
   - Intuition
   - Building a Prefix Sum Array
   - Why Prefix Sums Save Time
   - When To Use Prefix Sums
   - Real-world Example
2. **Range Sum Query**
3. **Count the Running Totals**
4. **Find Pivot Index**
5. **Subarray Sum Equals K**
6. **Find the Largest Altitude**
7. **Product of Array Except Self**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Prefix Sums

## Intuition

A **prefix sum** is the total from the start up to a certain position.

Suppose we have:

```txt
nums = [2, 4, 1, 3]
```

The prefix sums would be:

- first total: `2`
- second total: `2 + 4 = 6`
- third total: `2 + 4 + 1 = 7`
- fourth total: `2 + 4 + 1 + 3 = 10`

So the prefix sum array is:

```txt
[2, 6, 7, 10]
```

That means:

- prefix[0] = sum of nums from 0 to 0
- prefix[1] = sum of nums from 0 to 1
- prefix[2] = sum of nums from 0 to 2
- prefix[3] = sum of nums from 0 to 3

---

## Why is that useful?

Let’s say we want the sum from index 1 to 3:

```txt
nums = [2, 4, 1, 3]
```

That sum is:

```txt
4 + 1 + 3 = 8
```

With prefix sums, we can get it by:

- total up to index 3 = `10`
- total before index 1 = `2`

Then:

```txt
10 - 2 = 8
```

That is the key trick.

To get the sum from `left` to `right`, we use:

```txt
prefix[right] - prefix[left - 1]
```

If `left` is `0`, then the answer is just:

```txt
prefix[right]
```

---

## Building a prefix sum array

If:

```txt
nums = [3, 1, 4, 2]
```

Then:

- prefix[0] = 3
- prefix[1] = 3 + 1 = 4
- prefix[2] = 4 + 4 = 8
- prefix[3] = 8 + 2 = 10

So:

```txt
prefix = [3, 4, 8, 10]
```

A common rule is:

```ts
prefix[i] = prefix[i - 1] + nums[i];
```

---

## Why prefix sums save time

Without prefix sums, each range sum might take many additions.

With prefix sums, after the prefix array is built, each range sum can often be answered in constant time.

That means:

- do a little setup once
- answer many questions quickly later

This is called **precomputing**.

---

## When To Use Prefix Sums

A problem may be a good fit for prefix sums if it involves:

- lots of range sums
- subarray totals
- running totals
- left sum vs right sum
- repeated “sum from here to there” questions
- counting subarrays with a certain total

A big clue is when the brute force solution keeps adding the same numbers again and again.

---

## Real-world Example

### Reading pages in a book

Suppose a reading chart tells you how many pages you read each day:

```txt
[5, 8, 3, 6]
```

A prefix total tells you:

- how many pages by day 1
- how many pages by day 2
- how many pages by day 3
- how many pages by day 4

Then if someone asks:

> How many pages did you read from day 2 to day 4?

you can answer by subtracting two running totals.

That is prefix-sum thinking.

---

## Helpful TypeScript Shape

A basic prefix sum builder looks like this:

```ts
function buildPrefix(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }

  const prefix = new Array(nums.length);
  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  return prefix;
}
```

---

## Chapter Outline

In this chapter:

- **Range Sum Query** teaches the basic prefix-sum formula
- **Count the Running Totals** teaches how to build cumulative totals
- **Find Pivot Index** teaches comparing left sum and right sum
- **Subarray Sum Equals K** teaches how prefix sums combine with hash maps
- **Find the Largest Altitude** teaches how cumulative change can be tracked with running totals
- **Product of Array Except Self** teaches a close cousin of prefix sums using prefix and suffix products

---

# Lesson 1: Range Sum Query

## Problem

Given an array `nums`, answer queries of this form:

> What is the sum of the numbers from index `left` to index `right`?

### Example

**Input:** `nums = [2, 4, 1, 3, 5]`  
Query: `left = 1`, `right = 3`

**Output:** `8`

Because:

```txt
4 + 1 + 3 = 8
```

---

## Intuition

If we answer one question, adding directly is fine.

But if there are many queries, it is better to build a prefix sum array once.

For:

```txt
nums = [2, 4, 1, 3, 5]
```

The prefix sums are:

```txt
[2, 6, 7, 10, 15]
```

Now the sum from index 1 to 3 is:

```txt
prefix[3] - prefix[0] = 10 - 2 = 8
```

---

## Walkthrough

`nums = [2, 4, 1, 3, 5]`

Build prefix:
- index 0 -> 2
- index 1 -> 6
- index 2 -> 7
- index 3 -> 10
- index 4 -> 15

Want sum from 2 to 4:

```txt
1 + 3 + 5 = 9
```

Using prefix:
- prefix[4] = 15
- prefix[1] = 6

So:
- `15 - 6 = 9`

---

## TypeScript Solution

```ts
function buildPrefix(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }

  const prefix = new Array(nums.length);
  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  return prefix;
}

function rangeSum(prefix: number[], left: number, right: number): number {
  if (left === 0) {
    return prefix[right];
  }

  return prefix[right] - prefix[left - 1];
}
```

---

## Why it works

`prefix[right]` gives the total from the beginning to `right`.

`prefix[left - 1]` gives the total before the part we want.

Subtracting removes the extra part on the left.

---

## Complexity Analysis

- **Build prefix:** `O(n)`
- **Each query:** `O(1)`
- **Space:** `O(n)`

---

## Test Cases

```ts
const prefix = buildPrefix([2, 4, 1, 3, 5]);

rangeSum(prefix, 1, 3) // 8
rangeSum(prefix, 0, 2) // 7
rangeSum(prefix, 2, 4) // 9
```

---

## Quick Check

Why do we subtract `prefix[left - 1]`?

**Answer:** To remove the sum before the range we actually want.

---

# Lesson 2: Count the Running Totals

## Problem

Given an array of numbers, return an array where each position stores the total sum from the start up to that point.

### Example

**Input:** `nums = [1, 2, 3, 4]`  
**Output:** `[1, 3, 6, 10]`

---

## Intuition

This is the simplest prefix-sum problem.

We keep a running total as we move from left to right.

At each step:

- add the current number
- save the new total

This creates the prefix sum array directly.

---

## Walkthrough

`nums = [1, 2, 3, 4]`

Start:
- total = 0

See `1`
- total = 1
- result = `[1]`

See `2`
- total = 3
- result = `[1, 3]`

See `3`
- total = 6
- result = `[1, 3, 6]`

See `4`
- total = 10
- result = `[1, 3, 6, 10]`

---

## TypeScript Solution

```ts
function runningTotals(nums: number[]): number[] {
  const result: number[] = [];
  let total = 0;

  for (const num of nums) {
    total += num;
    result.push(total);
  }

  return result;
}
```

---

## Why it works

Each result value is simply the total of everything seen so far.

That is exactly what a prefix sum stores.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
runningTotals([1, 2, 3, 4]) // [1, 3, 6, 10]
runningTotals([5]) // [5]
runningTotals([]) // []
runningTotals([3, -1, 2]) // [3, 2, 4]
```

---

## Pattern Reminder

A running total is one of the most basic forms of a prefix sum.

---

# Lesson 3: Find Pivot Index

## Problem

Given an array of integers `nums`, return the **pivot index**.

The pivot index is where:

- the sum of numbers to the left
- equals
- the sum of numbers to the right

If no pivot exists, return `-1`.

### Example

**Input:** `nums = [1, 7, 3, 6, 5, 6]`  
**Output:** `3`

Because:
- left sum = `1 + 7 + 3 = 11`
- right sum = `5 + 6 = 11`

---

## Intuition

We could try every position and add left and right sides each time.

But that repeats a lot of work.

A smarter way:

1. compute the total sum of the whole array
2. walk through the array
3. keep a running left sum
4. compute right sum using:

```txt
right sum = total - left sum - current value
```

If left sum equals right sum, that index is the pivot.

---

## Walkthrough

`nums = [1, 7, 3, 6, 5, 6]`

Total sum:
- `28`

Start:
- leftSum = 0

Index 0, value 1
- rightSum = 28 - 0 - 1 = 27
- not equal

Move on:
- leftSum = 1

Index 1, value 7
- rightSum = 28 - 1 - 7 = 20
- not equal

Move on:
- leftSum = 8

Index 2, value 3
- rightSum = 28 - 8 - 3 = 17
- not equal

Move on:
- leftSum = 11

Index 3, value 6
- rightSum = 28 - 11 - 6 = 11
- equal!

Return `3`.

---

## TypeScript Solution

```ts
function pivotIndex(nums: number[]): number {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
}
```

---

## Why it works

The total sum lets us figure out the right side quickly.

The running `leftSum` keeps track of the left side.

So each index can be checked in constant time.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
pivotIndex([1, 7, 3, 6, 5, 6]) // 3
pivotIndex([1, 2, 3]) // -1
pivotIndex([2, 1, -1]) // 0
```

---

## Quick Check

How do we compute the right sum quickly?

**Answer:** Use `total - leftSum - nums[i]`.

---

# Lesson 4: Subarray Sum Equals K

## Problem

Given an array of integers `nums` and an integer `k`, return how many subarrays have a sum equal to `k`.

Here, `k` is the goal sum we want to make.

If `k = 2`, we are asking:

> "How many side-by-side groups add up to 2?"

### Example

**Input:** `nums = [1, 1, 1]`, `k = 2`  
**Output:** `2`

Because these two subarrays add to 2:
- `[1, 1]` at indexes 0 to 1
- `[1, 1]` at indexes 1 to 2

---

## Intuition

This is a very important prefix sum problem.

Let `currentSum` be the prefix sum up to the current index.

That is just the running total so far.

If we want a subarray sum of `k`, then we are looking for an earlier prefix sum such that:

```txt
currentSum - earlierPrefix = k
```

That means:

```txt
earlierPrefix = currentSum - k
```

So as we move along, we want to know:

> How many times have we already seen the prefix sum `currentSum - k`?

That is why this problem uses:
- prefix sums
- plus a hash map

The map stores:
- key = prefix sum
- value = how many times it has appeared

---

## Walkthrough

`nums = [1, 1, 1]`, `k = 2`

Start:
- currentSum = 0
- map = `{0: 1}`
- count = 0

See first `1`
- currentSum = 1
- need `1 - 2 = -1`
- not in map
- add prefix sum 1

Map:
- `{0: 1, 1: 1}`

See second `1`
- currentSum = 2
- need `2 - 2 = 0`
- map says prefix 0 happened once
- count becomes 1
- add prefix sum 2

Map:
- `{0: 1, 1: 1, 2: 1}`

See third `1`
- currentSum = 3
- need `3 - 2 = 1`
- map says prefix 1 happened once
- count becomes 2

Answer: 2

---

## TypeScript Solution

```ts
function subarraySumEqualsK(nums: number[], k: number): number {
  const counts = new Map<number, number>();
  counts.set(0, 1);

  let currentSum = 0;
  let totalCount = 0;

  for (const num of nums) {
    currentSum += num;

    const need = currentSum - k;
    totalCount += counts.get(need) ?? 0;

    counts.set(currentSum, (counts.get(currentSum) ?? 0) + 1);
  }

  return totalCount;
}
```

---

## Why it works

If a subarray sums to `k`, then the difference between two prefix sums is `k`.

The map lets us quickly count how many earlier prefix sums make that happen.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
subarraySumEqualsK([1, 1, 1], 2) // 2
subarraySumEqualsK([1, 2, 3], 3) // 2
subarraySumEqualsK([3, 4, 7, 2, -3, 1, 4, 2], 7) // 4
```

---

## Challenge Thought

This is one of the most important "prefix sum + hash map" patterns in coding practice.

---

# Lesson 5: Find the Largest Altitude

## Problem

A biker starts at altitude `0`.

You are given an array `gain`, where each number tells how much altitude changes after that step.

Return the highest altitude the biker reaches.

### Example

**Input:** `gain = [-5, 1, 5, 0, -7]`  
**Output:** `1`

---

## Intuition

This is really a running-total problem.

If the biker starts at altitude 0, then each new altitude is:

```txt
current altitude += gain[i]
```

The sequence of altitudes acts like prefix sums of the gain array.

We simply track:
- current altitude
- highest altitude so far

---

## Walkthrough

`gain = [-5, 1, 5, 0, -7]`

Start:
- altitude = 0
- highest = 0

Gain `-5`
- altitude = -5
- highest = 0

Gain `1`
- altitude = -4
- highest = 0

Gain `5`
- altitude = 1
- highest = 1

Gain `0`
- altitude = 1
- highest = 1

Gain `-7`
- altitude = -6
- highest = 1

Answer: 1

---

## TypeScript Solution

```ts
function largestAltitude(gain: number[]): number {
  let altitude = 0;
  let highest = 0;

  for (const change of gain) {
    altitude += change;
    highest = Math.max(highest, altitude);
  }

  return highest;
}
```

---

## Why it works

Each altitude is the running total of all gains so far.

That is exactly a prefix-sum idea.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
largestAltitude([-5, 1, 5, 0, -7]) // 1
largestAltitude([-4, -3, -2, -1, 4, 3, 2]) // 0
largestAltitude([1, 2, 3]) // 6
```

---

## Pattern Reminder

Not every prefix-sum problem uses a full prefix array.
Sometimes a single running total is enough.

---

# Lesson 6: Product of Array Except Self

## Problem

Given an array `nums`, return an array where each answer at index `i` is the product of all numbers in the array except `nums[i]`.

Do not use division.

### Example

**Input:** `nums = [1, 2, 3, 4]`  
**Output:** `[24, 12, 8, 6]`

Because:
- for index 0: `2 * 3 * 4 = 24`
- for index 1: `1 * 3 * 4 = 12`
- for index 2: `1 * 2 * 4 = 8`
- for index 3: `1 * 2 * 3 = 6`

---

## Intuition

This problem is like prefix sums, but with multiplication.

We build:

- a **prefix product** from the left
- a **suffix product** from the right

For each position:
- answer = product of everything before it
- times
- product of everything after it

That gives the full product except self.

---

## Walkthrough

`nums = [1, 2, 3, 4]`

Prefix products:
- before index 0 -> 1
- before index 1 -> 1
- before index 2 -> 1 * 2 = 2
- before index 3 -> 1 * 2 * 3 = 6

So partial answer becomes:
```txt
[1, 1, 2, 6]
```

Now move from right with a suffix product.

Start suffix = 1

At index 3:
- answer[3] *= 1 -> 6
- suffix *= 4 -> 4

At index 2:
- answer[2] *= 4 -> 8
- suffix *= 3 -> 12

At index 1:
- answer[1] *= 12 -> 12
- suffix *= 2 -> 24

At index 0:
- answer[0] *= 24 -> 24

Final:
```txt
[24, 12, 8, 6]
```

---

## TypeScript Solution

```ts
function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
```

---

## Why it works

The first pass stores the product of everything to the left.

The second pass multiplies in the product of everything to the right.

Together, that gives everything except the current value.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)` extra space if we do not count the output array

---

## Test Cases

```ts
productExceptSelf([1, 2, 3, 4]) // [24, 12, 8, 6]
productExceptSelf([-1, 1, 0, -3, 3]) // [0, 0, 9, 0, 0]
productExceptSelf([2, 3]) // [3, 2]
```

---

## Challenge Thought

This lesson is not literally a sum problem, but it uses the same “prefix on the left, suffix on the right” way of thinking.

---

# Chapter Review

## What you learned

In this chapter, you learned that prefix sums help us answer repeated range questions quickly.

You learned how to:

- build a prefix sum array
- use subtraction to get range sums
- track running totals
- compare left and right sums
- combine prefix sums with hash maps
- use prefix and suffix thinking for products

---

## Pattern Summary

### Range Sum Query
- build prefix totals once
- answer each query with subtraction

### Running Totals
- keep a cumulative sum

### Pivot Index
- compare left sum to right sum using total

### Subarray Sum Equals K
- use prefix sums plus a hash map

### Largest Altitude
- treat altitude as a running total

### Product of Array Except Self
- use prefix products and suffix products

---

## When this pattern is a clue

Think about prefix sums when you see:

- range sum
- running total
- cumulative total
- left sum vs right sum
- repeated subarray sums
- “sum from here to there”

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A prefix sum stores the total from the ________ up to a position.

**Answer:** beginning

---

## 2. True or False

Prefix sums are helpful when many range-sum questions are asked.

**Answer:** True

---

## 3. Short Answer

Why do prefix sums save time?

**Answer:** Because we do some work once at the beginning, then later range sums can be answered quickly without adding everything again.

---

## 4. Fill in the blank

To get the sum from `left` to `right`, we often use `prefix[right] - prefix[_______]`.

**Answer:** left - 1

---

## 5. Short Answer

What extra tool do we combine with prefix sums in “Subarray Sum Equals K”?

**Answer:** A hash map.

---

## 6. Mini Coding Challenge

Write a function that returns the sum of the first `k` numbers in an array using a prefix array.

```ts
function firstKSum(prefix: number[], k: number): number {
  if (k <= 0) {
    return 0;
  }

  return prefix[k - 1];
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why “Product of Array Except Self” belongs near the prefix-sum chapter.

**Sample answer:** Because it uses the same kind of thinking: store information from the left side and from the right side, then combine them for each position.

---

# Friendly Wrap-up

Prefix sums teach an important coding lesson:

> Sometimes doing a little extra work first  
> makes later work much easier.

That is a very powerful idea in algorithms.

The more you practice prefix sums, the more you will notice:

- when repeated sums are wasting time
- when a running total is enough
- when subtraction can answer a bigger question
- when left-side and right-side precomputing can unlock a problem

That is a powerful pattern for coding practice and real-world programming.
