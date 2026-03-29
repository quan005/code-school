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

## Concrete Screen Design

### Learning Goal

Teach that a prefix sum is a running total from the start, and that these stored totals can answer later questions quickly.

### Habitat

`Running Total Trail`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Running Total Trail
- Screen title: Introduction to Prefix Sums
- Progress chip: Intro

Scene:
- A row of stepping-stone numbers
- A second row of running-total lanterns building from left to right
- A subtraction bridge showing how one range answer is found

Support strip:
- "Build the totals once."
- "Then answer later questions with subtraction."

Action zone:
- Step through the array from left to right
- Watch the running total grow
- Test one range-sum question with the subtraction bridge

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The two-row layout should make it obvious that the prefix row is built from the original row. Running-total lanterns should brighten one by one as the sum grows. The subtraction bridge should visually connect "total up to right" and "total before left."

### Interaction Flow

1. Poppy introduces the idea of saving totals as you walk.
2. The learner moves left to right, building the running-total row.
3. A range question appears over part of the trail.
4. The subtraction bridge highlights which prefix totals to use.
5. The support strip explains that this is precomputing to save time later.

### Component Usage

- Scene Card
- Running-total lantern row
- Subtraction bridge callout
- Query highlight strip
- Start-lesson CTA

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

## Concrete Screen Design

### Learning Goal

Teach the core prefix-sum trick: use two stored totals to answer a range-sum question fast.

### Habitat

`Question Bridge`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Question Bridge
- Lesson title: Range Sum Query
- Progress chip: 1/6

Scene:
- An array row and a matching prefix row
- A highlighted query range from left to right
- Two selected prefix totals with a subtraction card between them

Support strip:
- "The range answer hides inside two stored totals."
- "Take the big total and subtract what came before."

Action zone:
- Build or reveal the prefix row
- Choose left and right for the query
- Subtract the right pair of totals

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Keep the query range bright and easy to see. The subtraction card should sit between the two chosen prefix totals so the operation feels physical, not abstract. The `left = 0` shortcut should appear as a small helper note rather than a separate distraction.

### Interaction Flow

1. Poppy highlights the query range on the original array.
2. The learner finds the prefix total at `right`.
3. The learner finds the prefix total just before `left`.
4. The subtraction card produces the range answer.
5. A helper note explains the special case when `left` is `0`.

### Component Usage

- Scene Card
- Query highlight strip
- Prefix-total selectors
- Subtraction card
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach how to build cumulative totals step by step from left to right.

### Habitat

`Acorn Counter Path`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Acorn Counter Path
- Lesson title: Count the Running Totals
- Progress chip: 2/6

Scene:
- A path of daily number stones
- A basket that carries the current total forward
- A result row filling with running totals

Support strip:
- "Keep carrying the total forward."
- "Each new total includes everything before it."

Action zone:
- Add the next number to the basket total
- Place the new running total in the result row
- Compare original numbers to cumulative totals

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

This screen should feel rhythmic and repetitive in a good way. The basket should visually carry the current total from one stone to the next. The result row should grow steadily so the learner sees the pattern.

### Interaction Flow

1. Poppy starts the basket with the first number.
2. The learner adds the next value to the carried total.
3. A new cumulative value appears in the result row.
4. The process repeats until every position has a running total.
5. The support strip explains that each total remembers everything before it.

### Component Usage

- Scene Card
- Carry basket
- Running-total row
- Step controls
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that a pivot index is a balancing point where the left sum and right sum are equal.

### Habitat

`Balance Board Grove`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Balance Board Grove
- Lesson title: Find Pivot Index
- Progress chip: 3/6

Scene:
- A number row above a seesaw balance board
- A current pivot marker on one position
- Left-sum and right-sum bowls on each side of the board

Support strip:
- "A pivot balances the left side and right side."
- "Use stored totals so you do not recount everything."

Action zone:
- Move the pivot marker
- Compute left sum and right sum
- Check whether the board balances

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The balance board should make equality feel visual and immediate. The left and right bowls should fill with the sums on each side of the pivot. A balanced glow should appear only when both sides match.

### Interaction Flow

1. Poppy places the pivot marker on one index.
2. The learner reads the left sum and right sum using stored totals.
3. The balance board tilts or balances depending on the comparison.
4. The pivot marker moves until a balanced spot is found or all options are used.
5. The support strip explains why prefix totals make these comparisons quick.

### Component Usage

- Scene Card
- Pivot marker
- Left / right sum bowls
- Balance board
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that prefix sums plus a hash map can count how many earlier totals make the current total differ by `k`.

### Habitat

`Echo Sum Forest`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Echo Sum Forest
- Lesson title: Subarray Sum Equals K
- Progress chip: 4/6

Scene:
- A path of prefix-total markers through a forest
- A target sign for k
- A memory board that remembers earlier prefix sums

Support strip:
- "k means the goal sum."
- "Ask whether an earlier total is exactly current minus k."

Action zone:
- Walk to the next prefix total
- Compute current minus k
- Check the memory board for matching earlier totals

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

This is one of the trickier lessons, so the scene should keep the math visible and concrete. The memory board should look like labeled forest signs storing earlier totals. The `current - k` clue should appear as a friendly helper bubble, not a heavy formula wall.

### Interaction Flow

1. Poppy moves to the next prefix-total marker.
2. The learner computes `current - k`.
3. The memory board is checked for earlier matching totals.
4. Each match means one valid subarray ending here.
5. The support strip explains that the map remembers which earlier totals we need.

### Component Usage

- Scene Card
- Prefix-total markers
- Memory board
- `Current - k` helper bubble
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that running totals can track height changes and reveal the highest point reached.

### Habitat

`Mountain Glide Path`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Mountain Glide Path
- Lesson title: Find the Largest Altitude
- Progress chip: 5/6

Scene:
- A trail of height-change arrows
- A mountain line rising and falling with the running total
- A highest-peak flag marking the best altitude so far

Support strip:
- "Add each height change to the current altitude."
- "Keep the highest altitude you ever reach."

Action zone:
- Apply each gain or loss
- Update the altitude line
- Move the highest-peak flag when needed

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The mountain line should make the cumulative idea feel natural: each step changes the current height rather than replacing it. Gains and losses should use simple up and down arrows. The highest-peak flag should move only when a new maximum appears.

### Interaction Flow

1. Poppy starts at altitude zero.
2. The learner applies each gain or loss in order.
3. The mountain line rises or falls with the running total.
4. A peak flag updates whenever a higher altitude is reached.
5. The lesson explains that this is a running total in disguise.

### Component Usage

- Scene Card
- Gain / loss arrows
- Altitude line
- Highest-peak flag
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that we can build left products and right products so each answer uses everything except the current position.

### Habitat

`Mirror Mill Workshop`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Mirror Mill Workshop
- Lesson title: Product of Array Except Self
- Progress chip: 6/6

Scene:
- A row of number gears
- A left-product ribbon and a right-product ribbon
- A center answer tile for the current position

Support strip:
- "Use everything to the left and everything to the right."
- "Skip the current gear itself."

Action zone:
- Build left products
- Build right products
- Combine them for each answer slot

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

This lesson is more advanced, so the left and right ribbons need strong visual separation. The current gear should be clearly skipped while the two ribbons feed into the answer tile. Keep the explanation concrete and avoid overloading the screen with formulas.

### Interaction Flow

1. Poppy builds the left-product ribbon across the row.
2. A second pass builds the right-product ribbon.
3. The learner focuses on one current gear at a time.
4. The left and right ribbons combine into the answer tile while skipping the current gear.
5. The support strip explains that this is like prefix thinking with products instead of sums.

### Component Usage

- Scene Card
- Left-product ribbon
- Right-product ribbon
- Answer tile
- Hint card

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

## Concrete Screen Design

### Learning Goal

Review running totals, range subtraction, balancing, `k`-difference matching, altitude tracking, and left/right product building.

### Habitat

`Precompute Review Camp`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Precompute Review Camp
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review board with six mini running-total scenes
- Tool chips for range, running total, pivot, k, altitude, product
- A banner that says "build once, answer faster"

Support strip:
- "Ask what you can save ahead of time."
- "Then use the saved totals or products to answer quickly."

Action zone:
- Match each lesson to its saved-information idea
- Sort clue chips to the right mini-scene
- Explain what was precomputed

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review camp should feel like a planning board for saved work. Keep the precompute banner visible because it summarizes the whole chapter. Each mini-scene should reuse the simple two-row or helper-ribbon visuals from the lessons.

### Interaction Flow

1. Poppy opens the review board of saved-work scenes.
2. The learner matches each lesson to its main precomputed idea.
3. Clue chips snap into the right mini-scene.
4. The support strip explains what information got saved ahead of time.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Tool chips
- Mini scene cards
- Mascot speech bubble
- Next-step panel

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

## Concrete Screen Design

### Learning Goal

Check whether the learner can spot what should be precomputed and how to use it with less support.

### Habitat

`Swift Answer Ridge`

### Primary Mascot

`Poppy the Squirrel`

### Screen Composition

```txt
Header:
- Back
- Swift Answer Ridge
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused range or running-total challenge
- A visible original row and one helper row or board
- A result badge area above the challenge

Support strip:
- "What should be saved first?"
- "How will that saved information answer the question faster?"

Action zone:
- Predict the helper structure
- Solve one short challenge
- Explain why the saved information helped

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay focused and clear, with the helper structure as the most important design element. The result area should stay calm and readable. Keep the original row and helper row visually linked.

### Interaction Flow

1. Poppy presents a final precompute challenge with limited guidance.
2. The learner predicts what helper row or board should be built.
3. The scene uses that saved information to solve the question.
4. A short reflection asks why this was faster than recomputing.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Helper-row builder
- Prediction prompt
- Reflection prompt
- Result feedback card

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
