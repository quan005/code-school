---
title: "Binary Search"
chapterSlug: "binary-search"
order: 6
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 95
skills:
  - "Use sorted order to cut the search space in half"
  - "Track left, right, and middle positions"
  - "Decide whether to search left or right"
  - "Explain why binary search is faster than checking one by one"
---

# Binary Search

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Binary search works on sorted data. We look at the middle, use what we learn, and throw away half of the remaining choices.

---

# Chapter Overview

Imagine you are looking for a word in a dictionary.

You would not start on page 1 and read every page one by one.

Instead, you might:

- open near the middle
- see whether your word comes before or after that page
- throw away half the dictionary
- repeat

That is the big idea behind **binary search**.

Binary search is a fast way to search when the data is in **sorted order**.

Instead of checking every value one at a time, we:

1. look at the middle
2. compare it to the target
3. decide whether the answer must be on the left or the right
4. repeat

This chapter teaches you how to search smarter by using order.

In this chapter, we will learn:

1. **Introduction to Binary Search**
   - Intuition
   - Why Sorting Matters
   - How Left, Right, and Middle Work
   - When To Use Binary Search
   - Real-world Example
2. **Find a Target in a Sorted Array**
3. **Search Insert Position**
4. **First Occurrence of a Number**
5. **Last Occurrence of a Number**
6. **Integer Square Root**
7. **Guess Number Higher or Lower**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Binary Search

## Intuition

Suppose you have this sorted array:

```txt
[1, 3, 5, 7, 9, 11, 13]
```

And you want to find `9`.

A slow way is to check:

- 1
- 3
- 5
- 7
- 9

That works, but it takes several checks.

A faster way:

- start in the middle
- compare the middle value to `9`
- if the middle is too small, search the right half
- if the middle is too large, search the left half

Each time, we remove half the remaining choices.

That is why binary search is so powerful.

---

## Why sorting matters

Binary search only works when the data is in a predictable order, usually sorted from smallest to largest.

Why?

Because when we look at the middle value, sorting lets us make a smart decision.

For example, in:

```txt
[1, 3, 5, 7, 9, 11, 13]
```

If the middle value is `7` and we want `9`, then we know:

- everything to the left of `7` is too small
- the target can only be on the right

Without sorting, we would not know which half to remove.

So the most important clue for binary search is:

> The data is sorted.

---

## The three key positions

Binary search usually uses three important variables:

- `left` = start of the current search area
- `right` = end of the current search area
- `mid` = middle of the current search area

A common way to compute the middle is:

```ts
const mid = Math.floor((left + right) / 2);
```

Then we compare:

- `nums[mid]` to the target

That tells us what to do next.

---

## The core decision

At each step:

- if `nums[mid] === target`, we found it
- if `nums[mid] < target`, search the right half
- if `nums[mid] > target`, search the left half

That means the search space keeps shrinking.

---

## Why binary search is fast

If we search one by one, we may have to check many values.

With binary search, we keep cutting the remaining choices in half.

For example, if there are 16 choices:

- after 1 check, maybe only 8 remain
- after 2 checks, maybe only 4 remain
- after 3 checks, maybe only 2 remain
- after 4 checks, maybe only 1 remains

That is much faster than checking 16 items one at a time.

---

## When To Use Binary Search

A problem may be a good fit for binary search if:

- the data is **sorted**
- you need to **find** a value
- you need to find where a value **belongs**
- you are trying to find the **first** or **last** position that works
- you can answer “too small” or “too large”

A big clue is words like:

- sorted
- ordered
- search
- find a target
- first position
- last position
- insert position

---

## Real-world Example

### Guessing a number

Imagine someone says:

> I am thinking of a number from 1 to 100.

Instead of guessing 1, then 2, then 3, we can guess the middle:

- 50

Then ask:
- too high?
- too low?
- correct?

Each answer removes half the choices.

That is binary search thinking.

---

## A helpful loop shape

Many binary search problems use this loop:

```ts
while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
```

The exact details may change, but this is the core pattern.

---

## Chapter Outline

In this chapter:

- **Find a Target in a Sorted Array** teaches the classic binary search pattern
- **Search Insert Position** teaches how to find where a value belongs
- **First Occurrence of a Number** teaches how to keep searching left
- **Last Occurrence of a Number** teaches how to keep searching right
- **Integer Square Root** teaches binary search on numbers
- **Guess Number Higher or Lower** teaches how binary search works like a game

---

# Lesson 1: Find a Target in a Sorted Array

## Problem

Given a sorted array of integers `nums` and a target value, return the index of the target if it exists. Otherwise, return `-1`.

### Example 1

**Input:** `nums = [1, 3, 5, 7, 9]`, `target = 7`  
**Output:** `3`

### Example 2

**Input:** `nums = [1, 3, 5, 7, 9]`, `target = 4`  
**Output:** `-1`

---

## Intuition

Because the array is sorted, the middle tells us a lot.

If we check the middle and it is too small, we know the answer cannot be on the left.

If it is too large, we know the answer cannot be on the right.

So each comparison lets us throw away half.

---

## Walkthrough

`nums = [1, 3, 5, 7, 9]`, `target = 7`

Start:
- left = 0
- right = 4

Middle:
- mid = 2
- nums[mid] = 5

Since `5 < 7`, search right side:
- left = 3

Now:
- left = 3
- right = 4

Middle:
- mid = 3
- nums[mid] = 7

Found it, so return `3`.

---

## TypeScript Solution

```ts
function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

---

## Why it works

Each step keeps only the half where the answer could still be.

Because the array is sorted, that choice is always valid.

---

## Complexity Analysis

- **Time:** `O(log n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
binarySearch([1, 3, 5, 7, 9], 7) // 3
binarySearch([1, 3, 5, 7, 9], 1) // 0
binarySearch([1, 3, 5, 7, 9], 9) // 4
binarySearch([1, 3, 5, 7, 9], 4) // -1
binarySearch([], 2) // -1
```

---

## Quick Check

Why does binary search need the array to be sorted?

**Answer:** Because sorting tells us which half could still contain the target.

---

# Lesson 2: Search Insert Position

## Problem

Given a sorted array of distinct integers and a target, return the index if the target is found.

If not, return the index where it should be inserted so the array stays sorted.

### Example 1

**Input:** `nums = [1, 3, 5, 7]`, `target = 5`  
**Output:** `2`

### Example 2

**Input:** `nums = [1, 3, 5, 7]`, `target = 4`  
**Output:** `2`

Because `4` should be inserted before `5`.

---

## Intuition

This problem feels like normal binary search, but there is a twist.

If the target is not found, we do not return `-1`.

Instead, we return the place where it belongs.

At the end of binary search, the `left` pointer lands exactly where the target should go.

That is the important trick.

---

## Walkthrough

`nums = [1, 3, 5, 7]`, `target = 4`

Start:
- left = 0
- right = 3

mid = 1
- nums[mid] = 3

Since `3 < 4`, move right:
- left = 2

Now:
- left = 2
- right = 3

mid = 2
- nums[mid] = 5

Since `5 > 4`, move left:
- right = 1

Now:
- left = 2
- right = 1

Loop stops.

Return `left`, which is `2`.

That is where `4` should go.

---

## TypeScript Solution

```ts
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
```

---

## Why it works

If the target exists, we return its index.

If not, binary search narrows the search area until `left` lands at the first valid insertion spot.

---

## Complexity Analysis

- **Time:** `O(log n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
searchInsert([1, 3, 5, 7], 5) // 2
searchInsert([1, 3, 5, 7], 4) // 2
searchInsert([1, 3, 5, 7], 0) // 0
searchInsert([1, 3, 5, 7], 9) // 4
```

---

## Pattern Reminder

Sometimes binary search is not only about finding an exact match.

Sometimes it is about finding the correct place.

---

# Lesson 3: First Occurrence of a Number

## Problem

Given a sorted array of integers `nums` that may contain duplicates and a target, return the index of the **first** occurrence of the target.

If the target does not exist, return `-1`.

### Example

**Input:** `nums = [1, 2, 2, 2, 4, 5]`, `target = 2`  
**Output:** `1`

---

## Intuition

Normal binary search stops as soon as it finds the target.

But this problem asks for the **first** one.

So if we find the target, we should remember the answer, but keep searching on the **left side** to see if there is an earlier one.

That is the key twist.

---

## Walkthrough

`nums = [1, 2, 2, 2, 4, 5]`, `target = 2`

Start:
- left = 0
- right = 5
- answer = -1

mid = 2
- nums[mid] = 2

Great, we found a `2`.
But maybe there is an earlier one.

So:
- answer = 2
- move left:
- right = 1

Now:
- left = 0
- right = 1

mid = 0
- nums[mid] = 1

Too small:
- left = 1

mid = 1
- nums[mid] = 2

Found another one:
- answer = 1
- move left again:
- right = 0

Loop stops.

Return `1`.

---

## TypeScript Solution

```ts
function firstOccurrence(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      answer = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
```

---

## Why it works

Every time we find the target, we save it.

But we do not stop.  
We keep searching left to see whether there is an earlier copy.

---

## Complexity Analysis

- **Time:** `O(log n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
firstOccurrence([1, 2, 2, 2, 4, 5], 2) // 1
firstOccurrence([2, 2, 2], 2) // 0
firstOccurrence([1, 3, 5], 2) // -1
firstOccurrence([], 7) // -1
```

---

## Quick Check

Why do we keep searching left after finding the target?

**Answer:** Because we want the first occurrence, not just any occurrence.

---

# Lesson 4: Last Occurrence of a Number

## Problem

Given a sorted array of integers `nums` that may contain duplicates and a target, return the index of the **last** occurrence of the target.

If the target does not exist, return `-1`.

### Example

**Input:** `nums = [1, 2, 2, 2, 4, 5]`, `target = 2`  
**Output:** `3`

---

## Intuition

This is very similar to the previous lesson.

The only difference is:

- when we find the target, we save the answer
- then keep searching on the **right side** to see if there is a later copy

---

## Walkthrough

`nums = [1, 2, 2, 2, 4, 5]`, `target = 2`

mid = 2
- nums[mid] = 2
- answer = 2
- search right:
- left = 3

mid = 4
- nums[mid] = 4
- too large
- right = 3

mid = 3
- nums[mid] = 2
- answer = 3
- search right:
- left = 4

Loop stops.

Return `3`.

---

## TypeScript Solution

```ts
function lastOccurrence(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      answer = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
```

---

## Why it works

Every time we find the target, we save the index.

Then we keep searching right to find the last possible copy.

---

## Complexity Analysis

- **Time:** `O(log n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
lastOccurrence([1, 2, 2, 2, 4, 5], 2) // 3
lastOccurrence([2, 2, 2], 2) // 2
lastOccurrence([1, 3, 5], 2) // -1
lastOccurrence([], 7) // -1
```

---

## Pattern Reminder

Binary search can be adjusted.

The loop is similar, but the rule for moving left or right changes depending on the goal.

---

# Lesson 5: Integer Square Root

## Problem

Given a non-negative integer `x`, return the integer part of its square root.

Do not use built-in square root functions.

### Example 1

**Input:** `x = 8`  
**Output:** `2`

Because:
- `2 * 2 = 4`
- `3 * 3 = 9`
- and `9` is too large

### Example 2

**Input:** `x = 16`  
**Output:** `4`

---

## Intuition

We are looking for a number `m` such that:

```txt
m * m <= x
```

and as large as possible.

We can binary search on the possible answers.

For example, if `x = 16`, the answer must be somewhere between `0` and `16`.

At each step:

- check the middle number
- square it
- if the square is too small, go right
- if the square is too large, go left

This is binary search on **answers**, not on an array.

---

## Walkthrough

`x = 8`

Start:
- left = 0
- right = 8
- answer = 0

mid = 4
- `4 * 4 = 16`
- too large
- right = 3

mid = 1
- `1 * 1 = 1`
- fits
- answer = 1
- left = 2

mid = 2
- `2 * 2 = 4`
- fits
- answer = 2
- left = 3

mid = 3
- `3 * 3 = 9`
- too large
- right = 2

Loop stops.

Return `2`.

---

## TypeScript Solution

```ts
function integerSqrt(x: number): number {
  let left = 0;
  let right = x;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
```

---

## Why it works

We are searching for the largest number whose square is not too big.

Binary search helps us find that number quickly.

---

## Complexity Analysis

- **Time:** `O(log x)`
- **Space:** `O(1)`

---

## Test Cases

```ts
integerSqrt(0) // 0
integerSqrt(1) // 1
integerSqrt(8) // 2
integerSqrt(16) // 4
integerSqrt(27) // 5
```

---

## Challenge Thought

This lesson shows that binary search is not only for arrays.

It also works when the answer comes from an ordered range of possibilities.

---

# Lesson 6: Guess Number Higher or Lower

## Problem

A secret number is chosen from `1` to `n`.

You can ask whether your guess is:

- correct
- too high
- too low

Return the secret number using as few guesses as possible.

For this lesson, we will use a helper function:

```ts
guess(num)
```

It returns:
- `0` if correct
- `-1` if your guess is too high
- `1` if your guess is too low

---

## Intuition

This is one of the clearest binary search problems.

The numbers are in order from `1` to `n`.

At each turn:

- guess the middle
- use the answer to throw away half the choices

That is exactly what binary search does.

---

## Walkthrough

Suppose the secret number is `6`, and `n = 10`.

Start:
- left = 1
- right = 10

mid = 5
- guess(5) says too low
- so search right
- left = 6

mid = 8
- guess(8) says too high
- so search left
- right = 7

mid = 6
- guess(6) says correct

Return `6`.

---

## TypeScript Solution

```ts
declare function guess(num: number): -1 | 0 | 1;

function guessNumber(n: number): number {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const result = guess(mid);

    if (result === 0) {
      return mid;
    } else if (result === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

---

## Why it works

Each guess gives information:

- too low means the answer is to the right
- too high means the answer is to the left
- correct means we are done

So each guess removes half the choices.

---

## Complexity Analysis

- **Time:** `O(log n)`
- **Space:** `O(1)`

---

## Test Cases

If the hidden number were `6`:

```ts
guessNumber(10) // 6
```

If the hidden number were `1`:

```ts
guessNumber(1) // 1
```

---

## Real-life Connection

This lesson is like a smart guessing game.

Binary search is often the best strategy when your guesses can tell you “too high” or “too low.”

---

# Chapter Review

## What you learned

In this chapter, you learned that binary search uses sorted order to search very quickly.

You learned how to:

- compare against the middle
- throw away half the search space
- find an exact target
- find where a value belongs
- find the first or last copy of a value
- search over possible answers, not just arrays

---

## Pattern Summary

### Find a Target
- compare middle to target
- go left or right

### Search Insert Position
- if not found, return `left`

### First Occurrence
- save the answer
- keep searching left

### Last Occurrence
- save the answer
- keep searching right

### Integer Square Root
- search over possible number answers

### Guess Number
- use “too high” and “too low” clues

---

## When this pattern is a clue

Think about binary search when you see:

- sorted arrays
- ordered values
- search problems
- first or last position
- insert position
- too high / too low
- an answer range that can be tested

---

## Why it is faster than brute force

Brute force might check one value at a time.

Binary search removes half the remaining choices after each comparison.

That is why its time complexity is:

```txt
O(log n)
```

which is much faster than:

```txt
O(n)
```

for large inputs.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

Binary search works best when the data is ________.

**Answer:** sorted

---

## 2. True or False

Binary search always checks values one by one from left to right.

**Answer:** False

It checks the middle and removes half the choices each time.

---

## 3. Short Answer

Why can binary search throw away half the array?

**Answer:** Because the array is sorted, so comparing the middle tells us which half cannot contain the answer.

---

## 4. Fill in the blank

The three main positions in binary search are `left`, `right`, and `_______`.

**Answer:** mid

---

## 5. Short Answer

When we want the first occurrence of a target, what do we do after finding the target?

**Answer:** Save the answer and keep searching to the left.

---

## 6. Mini Coding Challenge

Write a function that returns `true` if a target exists in a sorted array.

```ts
function containsInSortedArray(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why checking the middle is a smart idea.

**Sample answer:** Checking the middle is smart because one comparison can tell us whether the answer must be on the left side or the right side, which removes many choices at once.

---

# Friendly Wrap-up

Binary search teaches a very important coding lesson:

> If the data is in order,  
> use the order.

That simple idea lets you solve search problems much faster.

The more you practice binary search, the more you will notice:

- when the middle gives useful information
- when order helps you remove half the work
- when you are really searching for a position, not just a value

That is one of the most powerful ideas in algorithms.
