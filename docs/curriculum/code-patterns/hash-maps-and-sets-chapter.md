---
title: "Hash Maps And Sets"
chapterSlug: "hash-maps-and-sets"
order: 2
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 90
skills:
  - "Use sets to check whether something has been seen before"
  - "Use hash maps to count and look up information quickly"
  - "Choose between a set and a map for a problem"
  - "Trace lookup and counting code by hand"
---

# Hash Maps And Sets

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Use a **hash map** when you want to remember information. Use a **set** when you only care whether something has been seen before.

---

# Chapter Overview

A **hash map** is like a super-fast notebook.

Instead of searching through a whole list again and again, we can write down what we need to remember and look it up quickly.

A **set** is like a special collection box that only keeps **unique** things. If you try to put the same thing in twice, it still only keeps one copy.

This chapter teaches you how to use hash maps and sets to solve problems faster.

In this chapter, we will learn:

1. **Introduction to Hash Maps and Sets**
   - Intuition
   - Main Strategies
   - When To Use Them
   - Real-world Example
2. **Contains Duplicate**
3. **Two Sum**
4. **Valid Anagram**
5. **First Unique Character**
6. **Intersection of Two Arrays**
7. **Count the Frequencies**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Hash Maps and Sets

## Intuition

Imagine your classroom has cubbies.

Each cubby has a **label** with a student’s name, and inside that cubby is the student’s stuff.

That is a lot like a **hash map**.

- The **label** is the **key**
- The **stuff inside** is the **value**

So if we have:

- `"Maya" -> 3`
- `"Leo" -> 7`

That means the key `"Maya"` maps to the value `3`, and the key `"Leo"` maps to `7`.

In code, a hash map lets us do things like:

- remember how many times we saw something
- remember where we first saw something
- look up a value using a key
- match one thing to another thing

A **set** is even simpler.

A set is like a sticker board where each sticker can only appear **once**.

If you add:

- `"cat"`
- `"dog"`
- `"cat"`

The set will only keep:

- `"cat"`
- `"dog"`

That makes sets great for:

- checking if something already exists
- removing duplicates
- keeping track of “seen” values

---

## Why are hash maps and sets powerful?

Without a hash map or set, we often have to scan through an entire array over and over.

That can be slow.

With a hash map or set, we can often answer questions very quickly:

- “Have I seen this number before?”
- “How many times did this letter appear?”
- “Where was that value?”
- “Does this item exist in the other list?”

That is why hash maps and sets are some of the most useful tools in coding practice and real programs.

---

## Main Strategies

There are four common strategies.

### 1. Seen-before checking

Use a **set** to answer:

> “Have I already seen this?”

Example:
- find duplicates
- detect repeated numbers
- check whether a value exists

---

### 2. Counting

Use a **hash map** to answer:

> “How many times did each thing appear?”

Example:
- count letters
- count numbers
- compare two words

---

### 3. Lookup by need

Use a **hash map** when you know what value you need and want to check whether it already exists.

Example:
- in **Two Sum**, if the target is `10` and the current number is `3`, we need `7`
- we can check whether `7` has already appeared

---

### 4. Matching between collections

Use a **set** or **hash map** to compare one group to another.

Example:
- find common values in two arrays
- check whether two strings use the same letters the same number of times

---

## When To Use Hash Maps And Sets

A problem may be a good fit for a hash map or set if it asks things like:

- “Have you seen this before?”
- “How many times does this appear?”
- “Return duplicates”
- “Find matching pairs”
- “Compare two collections”
- “Is there a fast way without nested loops?”

A big clue is when the brute force solution uses **two loops**.

Hash maps and sets often help us turn a slower solution into a faster one.

---

## Hash Map vs Set

Use a **set** when you only care if something is present.

Use a **hash map** when you need to store extra information.

### Example

If you only need to know whether `5` appeared:
- use a **set**

If you need to know how many times `5` appeared:
- use a **hash map**

If you need to know where `5` first appeared:
- use a **hash map**

---

## Real-world Example

### School attendance

Suppose a teacher wants to know:

- which students already checked in
- how many times each student visited the reading station

A **set** can track which students have already checked in.

A **hash map** can track how many times each student visited the reading station.

That is exactly how programmers think:

- **set** = who has been seen
- **hash map** = what info do we remember about each thing

---

## TypeScript Reminder

In TypeScript and JavaScript, we often use:

- `Set<number>()`
- `Set<string>()`
- `Map<string, number>()`
- `Map<number, number>()`

Examples:

```ts
const seen = new Set<number>();
seen.add(5);
seen.add(8);
console.log(seen.has(5)); // true
```

```ts
const counts = new Map<string, number>();
counts.set("a", 1);
counts.set("b", 2);
console.log(counts.get("a")); // 1
```

---

## Chapter Outline

In this chapter:

- **Contains Duplicate** teaches us how to use a set for seen-before checking
- **Two Sum** teaches us how to use a map for fast lookup
- **Valid Anagram** teaches us how to use a map for counting
- **First Unique Character** teaches us how to count and then search
- **Intersection of Two Arrays** teaches us how to compare collections
- **Count the Frequencies** teaches us how to build a counting map cleanly

---

# Lesson 1: Contains Duplicate

## Problem

Given an array of integers, return `true` if any value appears more than once.  
Return `false` if all values are different.

### Example 1

**Input:** `nums = [3, 1, 4, 2, 1]`  
**Output:** `true`

Because `1` appears more than once.

### Example 2

**Input:** `nums = [5, 6, 7]`  
**Output:** `false`

Because every number is different.

---

## Intuition

The brute force way is to compare every number with every other number.

That works, but it takes a lot of checking.

A faster idea:

- keep a **set** called `seen`
- go through the array one number at a time
- if the number is already in `seen`, we found a duplicate
- otherwise, add it to `seen`

This is a classic **seen-before** problem.

---

## Walkthrough

For `nums = [3, 1, 4, 2, 1]`

Start with:

- `seen = {}`

Step 1:
- current number = `3`
- `3` is not in `seen`
- add `3`

Now:
- `seen = {3}`

Step 2:
- current number = `1`
- `1` is not in `seen`
- add `1`

Now:
- `seen = {3, 1}`

Step 3:
- current number = `4`
- not in `seen`
- add it

Now:
- `seen = {3, 1, 4}`

Step 4:
- current number = `2`
- not in `seen`
- add it

Now:
- `seen = {3, 1, 4, 2}`

Step 5:
- current number = `1`
- `1` **is already in** `seen`

So we return `true`.

---

## TypeScript Solution

```ts
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}
```

---

## Why it works

The set remembers every number we have already visited.

The moment we see the same number again, we know there is a duplicate.

---

## Complexity Analysis

- **Time:** `O(n)` because we visit each number once
- **Space:** `O(n)` in the worst case if all numbers are different

---

## Test Cases

```ts
containsDuplicate([]) // false
containsDuplicate([1]) // false
containsDuplicate([1, 2, 3, 1]) // true
containsDuplicate([7, 7]) // true
containsDuplicate([4, 5, 6]) // false
```

---

## Quick Check

1. What should we use here: map or set?  
   **Answer:** Set

2. Why?  
   **Answer:** We only care whether we have seen a value before.

---

# Lesson 2: Two Sum

## Problem

Given an array of integers `nums` and an integer `target`, return the indexes of two numbers that add up to `target`.

You may assume exactly one answer exists, and you may not use the same index twice.

### Example 1

**Input:** `nums = [2, 7, 11, 15]`, `target = 9`  
**Output:** `[0, 1]`

Because `2 + 7 = 9`.

### Example 2

**Input:** `nums = [3, 2, 4]`, `target = 6`  
**Output:** `[1, 2]`

Because `2 + 4 = 6`.

---

## Intuition

The brute force solution checks every pair.

That means:

- first number with every later number
- second number with every later number
- and so on

That works, but it is slow.

A smarter idea:

When we are at a number, we can ask:

> “What number do I need to reach the target?”

If:
- `target = 9`
- current number = `2`

Then we need:
- `7`

So before adding the current number to a map, we check whether the needed partner is already there.

The map will store:

- key = number
- value = index where we found it

---

## Walkthrough

`nums = [2, 7, 11, 15]`, `target = 9`

Start:
- `seen = {}`

Step 1:
- index = `0`, num = `2`
- need = `9 - 2 = 7`
- `7` is not in the map
- store `2 -> 0`

Map:
- `{2: 0}`

Step 2:
- index = `1`, num = `7`
- need = `9 - 7 = 2`
- `2` **is** in the map at index `0`

Return:
- `[0, 1]`

---

## TypeScript Solution

```ts
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const need = target - num;

    if (seen.has(need)) {
      return [seen.get(need)!, i];
    }

    seen.set(num, i);
  }

  return [];
}
```

---

## Why it works

For each number, the map remembers numbers we already passed.

If the partner we need is already in the map, then we found the pair.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
twoSum([2, 7, 11, 15], 9) // [0, 1]
twoSum([3, 2, 4], 6) // [1, 2]
twoSum([3, 3], 6) // [0, 1]
twoSum([1, 5, 8], 100) // []
```

---

## Interview Tip

When a problem asks for:

- a pair
- a matching value
- fast lookup

ask yourself:

> “Can I store what I’ve already seen in a map?”

---

# Lesson 3: Valid Anagram

## Problem

Two strings are anagrams if they use the same letters the same number of times.

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`. Otherwise, return `false`.

### Example 1

**Input:** `s = "listen"`, `t = "silent"`  
**Output:** `true`

### Example 2

**Input:** `s = "rat"`, `t = "car"`  
**Output:** `false`

---

## Intuition

An anagram is like rearranging letter tiles.

If two words use the exact same letters the exact same number of times, then they are anagrams.

A great way to check this is by **counting** letters.

We can use a hash map:

- key = letter
- value = number of times it appears

If both words have the same counts, then they are anagrams.

---

## Strategy

1. If the strings have different lengths, return `false`
2. Count letters in `s`
3. Count letters in `t`
4. Compare the counts

---

## Walkthrough

`s = "listen"`  
`t = "silent"`

Count letters in `"listen"`:

- l: 1
- i: 1
- s: 1
- t: 1
- e: 1
- n: 1

Count letters in `"silent"`:

- s: 1
- i: 1
- l: 1
- e: 1
- n: 1
- t: 1

Same letters, same counts, so the answer is `true`.

---

## TypeScript Solution

```ts
function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Map<string, number>();

  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  for (const ch of t) {
    if (!counts.has(ch)) {
      return false;
    }

    counts.set(ch, counts.get(ch)! - 1);

    if (counts.get(ch)! < 0) {
      return false;
    }
  }

  return true;
}
```

---

## Why it works

Every time a letter appears in `s`, we add 1.

Every time a letter appears in `t`, we subtract 1.

If the words match perfectly, all counts balance correctly.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)` where `k` is the number of different letters

---

## Test Cases

```ts
validAnagram("listen", "silent") // true
validAnagram("rat", "car") // false
validAnagram("aabb", "bbaa") // true
validAnagram("hello", "helloo") // false
```

---

## Quick Check

Why is a **map** better than a **set** here?

**Answer:** Because we need to know how many times each letter appears, not just whether it appears.

---

# Lesson 4: First Unique Character

## Problem

Given a string `s`, return the index of the first character that appears exactly once.  
If there is no such character, return `-1`.

### Example 1

**Input:** `s = "leetcode"`  
**Output:** `0`

Because `'l'` appears once and is the first such character.

### Example 2

**Input:** `s = "aabb"`  
**Output:** `-1`

Because every character appears more than once.

---

## Intuition

This problem has two parts:

1. Count how many times each character appears
2. Scan the string again and find the first character with count `1`

This is a good example of using a map for **counting**.

---

## Walkthrough

`s = "loveleetcode"`

Count letters:

- l: 2
- o: 2
- v: 1
- e: 4
- t: 1
- c: 1
- d: 1

Now scan from left to right:

- `l` has count 2
- `o` has count 2
- `v` has count 1

So return index `2`.

---

## TypeScript Solution

```ts
function firstUniqueChar(s: string): number {
  const counts = new Map<string, number>();

  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (counts.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
```

---

## Why it works

The map remembers how many times each character appears.

Then we use the original order of the string to find the **first** one that appears exactly once.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)`

---

## Test Cases

```ts
firstUniqueChar("leetcode") // 0
firstUniqueChar("loveleetcode") // 2
firstUniqueChar("aabb") // -1
firstUniqueChar("z") // 0
```

---

## Common Mistake

A common mistake is to find **a** unique character, but not the **first** one.

That is why we count first, and then scan the original string from left to right.

---

# Lesson 5: Intersection of Two Arrays

## Problem

Given two arrays of integers, return an array of their common values.  
Each value should appear only once in the result.

### Example 1

**Input:** `nums1 = [1, 2, 2, 1]`, `nums2 = [2, 2]`  
**Output:** `[2]`

### Example 2

**Input:** `nums1 = [4, 9, 5]`, `nums2 = [9, 4, 9, 8, 4]`  
**Output:** `[4, 9]` or `[9, 4]`

---

## Intuition

We want values that appear in **both** arrays.

A simple strategy:

1. Put all values from the first array into a set
2. Loop through the second array
3. If a value is in the first set, add it to a result set
4. Convert the result set to an array

We use sets because:

- checking membership is fast
- duplicates are automatically removed

---

## Walkthrough

`nums1 = [1, 2, 2, 1]`  
`nums2 = [2, 2]`

First set:
- `{1, 2}`

Check values in `nums2`:

- `2` is in the first set -> add `2` to result
- next `2` is also in the first set, but the result set still only keeps one `2`

Result:
- `[2]`

---

## TypeScript Solution

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set<number>(nums1);
  const result = new Set<number>();

  for (const num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}
```

---

## Why it works

The first set lets us quickly check whether a number exists in the first array.

The result set makes sure we only keep unique answers.

---

## Complexity Analysis

- **Time:** `O(n + m)`
- **Space:** `O(n + r)` where `r` is the size of the result

---

## Test Cases

```ts
intersection([1, 2, 2, 1], [2, 2]) // [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]) // [4, 9] or [9, 4]
intersection([], [1, 2]) // []
intersection([1, 2, 3], [4, 5, 6]) // []
```

---

## Quick Check

Why is a set helpful here?

**Answer:** It helps us check membership quickly and avoids duplicate answers.

---

# Lesson 6: Count the Frequencies

## Problem

Given an array of numbers, return a map-like result showing how many times each number appears.

### Example

**Input:** `nums = [4, 4, 2, 7, 2, 2]`

**Output idea:**
- `4 -> 2`
- `2 -> 3`
- `7 -> 1`

---

## Intuition

This is one of the most important hash map patterns.

We want to count how often each value appears.

That means:

- key = number
- value = count

Every time we see a number:
- if it is new, start its count at 1
- otherwise, add 1 to its count

---

## Walkthrough

`nums = [4, 4, 2, 7, 2, 2]`

Start:
- `{}`

See `4`
- `{4: 1}`

See `4`
- `{4: 2}`

See `2`
- `{4: 2, 2: 1}`

See `7`
- `{4: 2, 2: 1, 7: 1}`

See `2`
- `{4: 2, 2: 2, 7: 1}`

See `2`
- `{4: 2, 2: 3, 7: 1}`

---

## TypeScript Solution

```ts
function countFrequencies(nums: number[]): Map<number, number> {
  const counts = new Map<number, number>();

  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  return counts;
}
```

---

## Why it works

The map stores one bucket for each number.

Each time we see that number again, we increase its bucket count.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)` where `k` is the number of distinct values

---

## Test Cases

```ts
countFrequencies([4, 4, 2, 7, 2, 2])
countFrequencies([])
countFrequencies([9])
```

---

## Why this lesson matters

This pattern shows up everywhere:

- counting votes
- counting letters
- counting visits
- counting scores
- finding the most common item

If you get good at counting with hash maps, many harder problems become easier.

---

# Chapter Review

## What you learned

In this chapter, you learned that:

- a **set** stores unique values
- a **hash map** stores key-value pairs
- sets are great for checking whether something was seen
- maps are great for counting and lookup
- many slow nested-loop problems can become faster with maps and sets

---

## Pattern Summary

### Use a set when:
- you only care whether something exists
- you want to track seen values
- you want unique results

### Use a map when:
- you need counts
- you need indexes
- you need to connect one thing to another thing

---

## Problem Pattern Match

### Contains Duplicate
- best tool: **set**
- reason: seen-before checking

### Two Sum
- best tool: **map**
- reason: fast lookup for the needed partner

### Valid Anagram
- best tool: **map**
- reason: count letters

### First Unique Character
- best tool: **map**
- reason: count first, then search

### Intersection of Two Arrays
- best tool: **set**
- reason: membership and uniqueness

### Count the Frequencies
- best tool: **map**
- reason: counting

---

# Mastery Check

Try answering these before looking at the answers.

## 1. True or False

A set can store the count of how many times something appears.

**Answer:** False  
A set only stores whether the item exists.

---

## 2. Fill in the blank

If a problem asks, “Have I seen this value before?”, a good tool is a _______.

**Answer:** set

---

## 3. Fill in the blank

If a problem asks, “How many times did each letter appear?”, a good tool is a _______.

**Answer:** hash map

---

## 4. Short Answer

Why is `Two Sum` a map problem instead of a set problem?

**Answer:** Because we need to remember the index of each number, not just whether it exists.

---

## 5. Coding Challenge

Write a function that returns `true` if a word has any repeated letter.

### Example

- `"lamp"` -> `false`
- `"letter"` -> `true`

### Hint

Use a set.

```ts
function hasRepeatedLetter(word: string): boolean {
  const seen = new Set<string>();

  for (const ch of word) {
    if (seen.has(ch)) {
      return true;
    }
    seen.add(ch);
  }

  return false;
}
```

---

## 6. Coding Challenge

Write a function that returns the most common number in an array.

### Hint

First build a frequency map.

Example starter idea:

```ts
function mostCommonNumber(nums: number[]): number | null {
  if (nums.length === 0) {
    return null;
  }

  const counts = new Map<number, number>();

  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  let bestNum = nums[0];
  let bestCount = counts.get(bestNum)!;

  for (const [num, count] of counts) {
    if (count > bestCount) {
      bestNum = num;
      bestCount = count;
    }
  }

  return bestNum;
}
```

---

# Friendly Wrap-up

Hash maps and sets help us remember things while we solve a problem.

That is the superpower.

Instead of asking the same question again and again, we save important information as we go.

That helps us write code that is:

- faster
- cleaner
- smarter

In the next chapter, you’ll keep building your problem-solving toolbox with another important coding pattern.
