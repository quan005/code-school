---
title: "Sort and Search"
chapterSlug: "sort-and-search"
order: 17
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 105
skills:
  - "Explain the difference between searching and sorting"
  - "Choose when to scan directly and when to sort first"
  - "Trace simple sorting algorithms step by step"
  - "Use sorted order to make later work easier"
---

# Sort and Search

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Searching helps us find something. Sorting puts things in order. When data is sorted, many problems become easier.

---

# Chapter Overview

Imagine a messy box of cards with numbers on them.

If you want to find one card, you can search through the box.

If you first arrange the cards from smallest to largest, the box becomes easier to understand, compare, and use.

That is the heart of **sort and search**.

- **Searching** means looking for something
- **Sorting** means arranging things in order

Sometimes the fastest plan is:
- just search directly

Sometimes the smartest plan is:
- sort first
- then search or compare more easily

This chapter teaches how sorting and searching work together.

In this chapter, we will learn:

1. **Introduction to Sort and Search**
   - Intuition
   - Searching vs Sorting
   - Why Order Helps
   - When To Sort First
   - Real-world Example
2. **Linear Search**
3. **Selection Sort**
4. **Insertion Sort**
5. **Merge Two Sorted Arrays**
6. **Sort Colors**
7. **Search in a Rotated Sorted Array**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Sort and Search

## Intuition

Suppose you have these numbers:

```txt
[7, 2, 9, 1, 5]
```

If someone asks:

> “Is 9 in the list?”

You can search one by one.

If someone asks:

> “What is the smallest value?”
> “What comes before 7?”
> “Where should 4 go?”

then having the numbers in sorted order can help a lot.

Sorted order gives structure.

That structure can make searching, comparing, and merging easier.

---

## Searching vs Sorting

### Searching
Searching means:
- look for a value
- find where it is
- check whether it exists

Examples:
- Is `5` in the array?
- What index has `"cat"`?
- Is this student on the list?

---

### Sorting
Sorting means:
- arrange items in a clear order

Examples:
- smallest to largest
- largest to smallest
- alphabetical order

Examples:
- `[7, 2, 9, 1, 5]` becomes `[1, 2, 5, 7, 9]`
- `"dog", "ant", "cat"` becomes `"ant", "cat", "dog"`

---

## Why order helps

When items are sorted, we can:

- compare neighbors
- merge lists more easily
- find duplicates more easily
- place new values in the right location
- sometimes search much faster

That is why sorting shows up so often in algorithms.

Even if sorting is not the final goal, sorting can prepare the data so the real task becomes easier.

---

## When To Sort First

Sorting first may be helpful when:

- the problem compares many values
- you need smallest or largest values in order
- you want to detect duplicates or gaps
- you want to merge data cleanly
- sorted structure helps the next step become simpler

A big clue is when the problem becomes messy in unsorted order, but clear once the items are arranged.

---

## Real-world Example

### Library books

If books are not organized, finding one specific title can take a long time.

But if the books are sorted alphabetically by title or author, searching becomes easier.

Sorting creates structure.
Searching uses that structure.

That is the relationship between these two ideas.

---

## Chapter Outline

In this chapter:

- **Linear Search** teaches the simplest kind of search
- **Selection Sort** teaches how to build sorted order one position at a time
- **Insertion Sort** teaches how to slide items into the correct place
- **Merge Two Sorted Arrays** teaches how sorted order can make combining easy
- **Sort Colors** teaches a special in-place sorting pattern
- **Search in a Rotated Sorted Array** teaches how order can still help, even when the array has been shifted

---

# Lesson 1: Linear Search

## Problem

Given an array `nums` and a target value, return the index of the target if it exists.

If it does not exist, return `-1`.

### Example 1

**Input:** `nums = [4, 2, 7, 1]`, `target = 7`  
**Output:** `2`

### Example 2

**Input:** `nums = [4, 2, 7, 1]`, `target = 9`  
**Output:** `-1`

---

## Intuition

Linear search is the simplest kind of searching.

We look at each item one by one:

- check index 0
- check index 1
- check index 2
- and so on

This works on any array, even if it is not sorted.

---

## Walkthrough

`nums = [4, 2, 7, 1]`, `target = 7`

Check:
- index 0 -> 4, not it
- index 1 -> 2, not it
- index 2 -> 7, yes!

Return `2`.

---

## TypeScript Solution

```ts
function linearSearch(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}
```

---

## Why it works

If the target is in the array, linear search will eventually reach it.

If the loop ends without finding it, then the target is not there.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
linearSearch([4, 2, 7, 1], 7) // 2
linearSearch([4, 2, 7, 1], 9) // -1
linearSearch([], 3) // -1
linearSearch([5], 5) // 0
```

---

## Quick Check

When is linear search a good choice?

**Answer:** When the array is small or not sorted, and we just need to check one by one.

---

# Lesson 2: Selection Sort

## Problem

Sort an array of numbers in ascending order using **selection sort**.

### Example

**Input:** `[5, 3, 4, 1, 2]`  
**Output:** `[1, 2, 3, 4, 5]`

---

## Intuition

Selection sort works like this:

1. find the smallest item in the unsorted part
2. place it in the next correct position
3. repeat for the rest

It is like lining up students by height:
- first put the shortest student in the first position
- then among the rest, put the next shortest in the second position
- and so on

---

## Walkthrough

Start:
```txt
[5, 3, 4, 1, 2]
```

Find smallest:
- `1`

Swap it into the first position:
```txt
[1, 3, 4, 5, 2]
```

Now sort the rest:
- smallest of `[3, 4, 5, 2]` is `2`

Swap it into the second position:
```txt
[1, 2, 4, 5, 3]
```

Continue:
```txt
[1, 2, 3, 5, 4]
[1, 2, 3, 4, 5]
```

---

## TypeScript Solution

```ts
function selectionSort(nums: number[]): number[] {
  const arr = [...nums];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}
```

---

## Why it works

At each step, the smallest remaining value is placed in the next sorted position.

So the sorted section grows from left to right.

---

## Complexity Analysis

- **Time:** `O(n^2)`
- **Space:** `O(n)` here because we copied the array, though it can be done in place

---

## Test Cases

```ts
selectionSort([5, 3, 4, 1, 2]) // [1, 2, 3, 4, 5]
selectionSort([1]) // [1]
selectionSort([]) // []
selectionSort([3, 3, 2]) // [2, 3, 3]
```

---

## Pattern Reminder

Selection sort is easy to understand, but it is not very fast for large arrays.

---

# Lesson 3: Insertion Sort

## Problem

Sort an array of numbers in ascending order using **insertion sort**.

### Example

**Input:** `[5, 3, 4, 1, 2]`  
**Output:** `[1, 2, 3, 4, 5]`

---

## Intuition

Insertion sort works like sorting cards in your hand.

You take one new card and slide it into the correct place among the cards already sorted.

So:
- the left part stays sorted
- one new value is inserted into that sorted part

---

## Walkthrough

Start:
```txt
[5, 3, 4, 1, 2]
```

Treat `5` as already sorted.

Take `3`:
- move `5` right
- insert `3`

Now:
```txt
[3, 5, 4, 1, 2]
```

Take `4`:
- move `5` right
- insert `4`

Now:
```txt
[3, 4, 5, 1, 2]
```

Continue:
```txt
[1, 3, 4, 5, 2]
[1, 2, 3, 4, 5]
```

---

## TypeScript Solution

```ts
function insertionSort(nums: number[]): number[] {
  const arr = [...nums];

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}
```

---

## Why it works

At each step, the left side is already sorted.

We take one new value and slide it backward until it reaches the right place.

---

## Complexity Analysis

- **Time:** `O(n^2)` in the worst case
- **Space:** `O(n)` here because we copied the array

---

## Test Cases

```ts
insertionSort([5, 3, 4, 1, 2]) // [1, 2, 3, 4, 5]
insertionSort([1, 2, 3]) // [1, 2, 3]
insertionSort([]) // []
insertionSort([2, 1]) // [1, 2]
```

---

## Quick Check

What part of the array is treated as already sorted in insertion sort?

**Answer:** The left side up to the current position.

---

# Lesson 4: Merge Two Sorted Arrays

## Problem

Given two arrays already sorted in ascending order, merge them into one sorted array.

### Example

**Input:**  
`a = [1, 3, 5]`  
`b = [2, 4, 6]`

**Output:**  
`[1, 2, 3, 4, 5, 6]`

---

## Intuition

Because both arrays are already sorted, we do not need to sort everything again.

We can compare the front of each array and always take the smaller one next.

That is the power of sorted order.

This is a classic two-pointer merge pattern.

---

## Walkthrough

`a = [1, 3, 5]`
`b = [2, 4, 6]`

Compare:
- 1 vs 2 -> take 1
- 3 vs 2 -> take 2
- 3 vs 4 -> take 3
- 5 vs 4 -> take 4
- 5 vs 6 -> take 5
- then take 6

Result:
```txt
[1, 2, 3, 4, 5, 6]
```

---

## TypeScript Solution

```ts
function mergeSortedArrays(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}
```

---

## Why it works

The smallest remaining value must always be at one of the two current pointers.

So comparing just those two values is enough to build the merged result correctly.

---

## Complexity Analysis

- **Time:** `O(n + m)`
- **Space:** `O(n + m)`

---

## Test Cases

```ts
mergeSortedArrays([1, 3, 5], [2, 4, 6]) // [1, 2, 3, 4, 5, 6]
mergeSortedArrays([], [1, 2]) // [1, 2]
mergeSortedArrays([1, 2], []) // [1, 2]
mergeSortedArrays([1, 2, 2], [2, 3]) // [1, 2, 2, 2, 3]
```

---

## Pattern Reminder

Once data is sorted, merging can often be done in one clean pass.

---

# Lesson 5: Sort Colors

## Problem

You are given an array containing only:
- 0
- 1
- 2

Sort the array in place so that:
- all 0s come first
- then all 1s
- then all 2s

### Example

**Input:** `[2, 0, 2, 1, 1, 0]`  
**Output:** `[0, 0, 1, 1, 2, 2]`

---

## Intuition

A simple way is to count how many 0s, 1s, and 2s there are.

Then rewrite the array.

That is a great beginner-friendly strategy.

There is also a famous one-pass method, but the counting method is easier to learn first.

---

## Walkthrough

`[2, 0, 2, 1, 1, 0]`

Count:
- zeros = 2
- ones = 2
- twos = 2

Rewrite:
- first two positions -> 0
- next two positions -> 1
- last two positions -> 2

Result:
```txt
[0, 0, 1, 1, 2, 2]
```

---

## TypeScript Solution

```ts
function sortColors(nums: number[]): void {
  let zeros = 0;
  let ones = 0;
  let twos = 0;

  for (const num of nums) {
    if (num === 0) {
      zeros++;
    } else if (num === 1) {
      ones++;
    } else {
      twos++;
    }
  }

  let index = 0;

  for (let i = 0; i < zeros; i++) {
    nums[index++] = 0;
  }

  for (let i = 0; i < ones; i++) {
    nums[index++] = 1;
  }

  for (let i = 0; i < twos; i++) {
    nums[index++] = 2;
  }
}
```

---

## Why it works

The array contains only three possible values.

So counting each type and then writing them back in order is enough to sort it.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
const a = [2, 0, 2, 1, 1, 0];
sortColors(a);
// a becomes [0, 0, 1, 1, 2, 2]

const b = [2, 0, 1];
sortColors(b);
// b becomes [0, 1, 2]
```

---

## Quick Check

Why is counting a good method for this problem?

**Answer:** Because there are only three possible values, so we can count each kind and rebuild the array in order.

---

# Lesson 6: Search in a Rotated Sorted Array

## Problem

You are given a sorted array that was rotated at some unknown point.

Find the target value and return its index.
If it does not exist, return `-1`.

### Example

**Input:** `nums = [4, 5, 6, 7, 0, 1, 2]`, `target = 0`  
**Output:** `4`

### Example 2

**Input:** `nums = [4, 5, 6, 7, 0, 1, 2]`, `target = 3`  
**Output:** `-1`

---

## Intuition

This array is still partly ordered.

Even though it was rotated, at any middle point, at least one side is still sorted.

That means we can still search smartly.

Plan:
1. check the middle
2. decide which side is sorted
3. check whether the target belongs inside that sorted side
4. move left or right

This is a search problem that still uses sorted structure, just in a trickier way.

---

## Walkthrough

`nums = [4, 5, 6, 7, 0, 1, 2]`, `target = 0`

Start:
- left = 0
- right = 6

mid = 3
- nums[mid] = 7

Left half `[4, 5, 6, 7]` is sorted.

Does target 0 belong there?
- No

So search the other side.

Now:
- left = 4
- right = 6

mid = 5
- nums[mid] = 1

Right half `[1, 2]` is sorted.

Does target 0 belong there?
- No

So search left side.

Now:
- left = 4
- right = 4

mid = 4
- nums[mid] = 0

Found it.

---

## TypeScript Solution

```ts
function searchRotated(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      // left side is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right side is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
```

---

## Why it works

Even after rotation, one half of the current search space is always still sorted.

That sorted half gives us enough information to decide where the target can or cannot be.

---

## Complexity Analysis

- **Time:** `O(log n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
searchRotated([4, 5, 6, 7, 0, 1, 2], 0) // 4
searchRotated([4, 5, 6, 7, 0, 1, 2], 3) // -1
searchRotated([1], 0) // -1
searchRotated([1], 1) // 0
```

---

## Challenge Thought

This lesson is a nice example of search using order, even when the order looks partly broken.

---

# Chapter Review

## What you learned

In this chapter, you learned that:

- searching finds something
- sorting creates order
- order can make later work much easier

You learned how to:

- use linear search on unsorted data
- sort with selection sort
- sort with insertion sort
- merge sorted arrays
- sort special-value arrays by counting
- search in rotated sorted arrays

---

## Pattern Summary

### Linear Search
- check items one by one

### Selection Sort
- repeatedly place the smallest remaining value next

### Insertion Sort
- insert each new value into the sorted left side

### Merge Two Sorted Arrays
- compare the front values and take the smaller one

### Sort Colors
- count each value and rewrite in order

### Search in Rotated Sorted Array
- use the sorted half to guide the search

---

## When this pattern is a clue

Think about sort-and-search ideas when you see:

- find a value
- arrange data in order
- merge sorted lists
- compare many values
- use sorted structure to make the next step easier

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

Searching means trying to ________ something. Sorting means putting things in ________.

**Answer:** find, order

---

## 2. True or False

Sorting can make some later problems easier to solve.

**Answer:** True

---

## 3. Short Answer

What is the main idea of selection sort?

**Answer:** Repeatedly find the smallest remaining value and place it in the next sorted position.

---

## 4. Short Answer

What is the main idea of insertion sort?

**Answer:** Take one value at a time and slide it into the correct place in the already sorted left side.

---

## 5. Fill in the blank

In merge of two sorted arrays, we compare the current front values and take the ________ one first.

**Answer:** smaller

---

## 6. Mini Coding Challenge

Write a function that returns `true` if a target exists in an unsorted array by using linear search.

```ts
function containsValue(nums: number[], target: number): boolean {
  for (const num of nums) {
    if (num === target) {
      return true;
    }
  }

  return false;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why sorting first can sometimes help.

**Sample answer:** Sorting first can help because once data is in order, it becomes easier to compare values, merge lists, find patterns, and search smarter.

---

# Friendly Wrap-up

Sort and search teach an important coding lesson:

> Order creates power.

When data is messy, we may need to scan carefully.

When data is ordered, we can often think much more clearly and solve the problem with cleaner steps.

The more you practice sort and search ideas, the more you will notice:

- when sorting is worth the effort
- when searching directly is enough
- when order makes merging easy
- when structured data opens the door to smarter algorithms

That is a powerful pattern to add to your algorithm toolbox.
