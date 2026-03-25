---
title: "Bit Manipulation"
chapterSlug: "bit-manipulation"
order: 18
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 110
skills:
  - "Explain how numbers can be represented with bits"
  - "Use bitwise operators like AND, OR, XOR, and shifts"
  - "Recognize when a bit trick can simplify a problem"
  - "Trace bit-based solutions step by step"
---

# Bit Manipulation

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Bit manipulation means working with the tiny 0-and-1 pieces inside numbers.

---

# Chapter Overview

Inside a computer, numbers are stored using **bits**.

A bit is very small.
It can only be:

- `0`
- or `1`

You can think of a bit like a light switch:

- `0` = off
- `1` = on

When many bits are placed together, they can represent numbers.

For example:

```txt
5 = 101
6 = 110
```

Bit manipulation means solving problems by working directly with those 0s and 1s.

This can help us do clever things like:

- find a number that appears only once
- count how many 1s are in a number
- check whether a number is a power of two
- find a missing number
- build answers one bit at a time

In this chapter, we will learn:

1. **Introduction to Bit Manipulation**
   - Intuition
   - What Bits Are
   - Common Bit Operators
   - When To Use Bit Manipulation
   - Real-world Example
2. **Single Number**
3. **Number of 1 Bits**
4. **Power of Two**
5. **Missing Number**
6. **Counting Bits**
7. **Reverse Bits**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Bit Manipulation

## Intuition

Let’s start with a tiny idea:

A computer can store information using only 0 and 1.

So how can a computer store a number like 13?

It uses multiple bits together.

Example:

```txt
13 = 1101
```

That means:

- 1 eight
- 1 four
- 0 twos
- 1 one

Because:

```txt
8 + 4 + 0 + 1 = 13
```

So bits are just another way to write numbers.

---

## Bits as place values

In base 10, we use place values like:

- ones
- tens
- hundreds

In binary (base 2), we use place values like:

- 1
- 2
- 4
- 8
- 16
- 32

Example:

```txt
1011
```

means:

- 1 eight
- 0 fours
- 1 two
- 1 one

So:

```txt
1011 = 8 + 2 + 1 = 11
```

---

## Common bitwise operators

These are the main operators we will use.

### AND (`&`)

A bit becomes `1` only if both bits are `1`.

Examples:

```txt
1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0
```

---

### OR (`|`)

A bit becomes `1` if at least one bit is `1`.

Examples:

```txt
1 | 1 = 1
1 | 0 = 1
0 | 1 = 1
0 | 0 = 0
```

---

### XOR (`^`)

A bit becomes `1` if the bits are different.

Examples:

```txt
1 ^ 1 = 0
1 ^ 0 = 1
0 ^ 1 = 1
0 ^ 0 = 0
```

A very important XOR rule is:

```txt
x ^ x = 0
x ^ 0 = x
```

This makes XOR very useful for “pair canceling” problems.

---

### NOT (`~`)

Flips each bit:

- `0` becomes `1`
- `1` becomes `0`

We will not use this one as much in this chapter.

---

### Left shift (`<<`)

Moves bits to the left.

This usually multiplies by 2 each shift.

Example:

```txt
0011 << 1 = 0110
```

That means `3 << 1 = 6`.

---

### Right shift (`>>` or `>>>`)

Moves bits to the right.

This usually divides by 2 each shift, ignoring fractions.

Example:

```txt
1100 >> 1 = 0110
```

That means `12 >> 1 = 6`.

In JavaScript/TypeScript, `>>>` is often used for unsigned right shift.

---

## Why bit manipulation is useful

Bit tricks can help when:

- values appear in pairs
- we need to count set bits
- we need to inspect powers of two
- numbers can be built or checked one bit at a time
- a problem has a hidden binary pattern

Bit manipulation can be fast and elegant, but it works best when the problem structure matches bit rules.

---

## When To Use Bit Manipulation

A problem may be a good fit for bit manipulation if it asks:

- which number appears once while others repeat
- how many 1 bits are in this number
- is this a power of two
- find the missing number
- build an answer bit by bit
- compare parity or powers cleanly

A big clue is when XOR, AND, or shifts seem to match the pattern naturally.

---

## Real-world Example

### Light switches

Imagine a row of light switches.

Each switch is either:
- off (`0`)
- on (`1`)

If you know which switches are on, you can describe the whole row with bits.

That is how computers think about many things:
- tiny on/off pieces
- combined to build larger meanings

---

## Helpful TypeScript Notes

In JavaScript and TypeScript, bit operators work on 32-bit integers.

Examples:

```ts
5 & 3   // 1
5 | 3   // 7
5 ^ 3   // 6
5 << 1  // 10
5 >> 1  // 2
```

---

## Chapter Outline

In this chapter:

- **Single Number** teaches XOR canceling
- **Number of 1 Bits** teaches how to inspect binary digits
- **Power of Two** teaches a famous AND trick
- **Missing Number** teaches how XOR can find what is gone
- **Counting Bits** teaches how smaller bit answers help build bigger ones
- **Reverse Bits** teaches building a number one bit at a time with shifts

---

# Lesson 1: Single Number

## Problem

Given an array where every number appears twice except for one number that appears once, return the number that appears once.

### Example

**Input:** `nums = [4, 1, 2, 1, 2]`  
**Output:** `4`

---

## Intuition

This is one of the most famous XOR problems.

Remember:

```txt
x ^ x = 0
x ^ 0 = x
```

So if we XOR all the numbers together:
- matching pairs cancel out
- the single number stays

That is exactly what we want.

---

## Walkthrough

`nums = [4, 1, 2, 1, 2]`

Start:
- result = 0

XOR with 4:
- `0 ^ 4 = 4`

XOR with 1:
- `4 ^ 1`

XOR with 2:
- `4 ^ 1 ^ 2`

XOR with 1 again:
- the two `1`s cancel

XOR with 2 again:
- the two `2`s cancel

Only `4` remains.

---

## TypeScript Solution

```ts
function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}
```

---

## Why it works

Pairs disappear because:

```txt
x ^ x = 0
```

And XOR with 0 changes nothing.

So after all canceling, the single number is left.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
singleNumber([2, 2, 1]) // 1
singleNumber([4, 1, 2, 1, 2]) // 4
singleNumber([1]) // 1
```

---

## Quick Check

Why is XOR perfect for this problem?

**Answer:** Because equal pairs cancel each other out.

---

# Lesson 2: Number of 1 Bits

## Problem

Given a positive integer `n`, return how many `1` bits are in its binary form.

This is sometimes called the **population count** or **Hamming weight**.

### Example

**Input:** `n = 11`

Binary:

```txt
11 = 1011
```

**Output:** `3`

Because there are three `1`s.

---

## Intuition

A simple idea is:

- look at the last bit
- if it is 1, count it
- shift right
- repeat until the number becomes 0

We can check the last bit using:

```ts
n & 1
```

If the last bit is 1, then `n & 1` is 1.

---

## Walkthrough

`n = 11`

Binary:

```txt
1011
```

Check last bit:
- `1011 & 0001 = 1`
- count = 1

Shift right:
- `101`

Check last bit:
- `101 & 001 = 1`
- count = 2

Shift right:
- `10`

Check last bit:
- `10 & 01 = 0`
- count stays 2

Shift right:
- `1`

Check last bit:
- `1 & 1 = 1`
- count = 3

Done.

---

## TypeScript Solution

```ts
function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    count += n & 1;
    n = n >>> 1;
  }

  return count;
}
```

---

## Why it works

Each step checks the current last bit.

Then shifting right moves the next bit into the last position.

So eventually we inspect every bit.

---

## Complexity Analysis

- **Time:** `O(number of bits)` which is `O(32)` for standard 32-bit integers
- **Space:** `O(1)`

---

## Test Cases

```ts
hammingWeight(11) // 3, because 1011
hammingWeight(8)  // 1, because 1000
hammingWeight(0)  // 0
```

---

## Pattern Reminder

Bit problems often use:
- `& 1` to inspect the last bit
- `>>> 1` to move right through the bits

---

# Lesson 3: Power of Two

## Problem

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

### Example 1

**Input:** `n = 8`  
Binary:

```txt
1000
```

**Output:** `true`

### Example 2

**Input:** `n = 10`  
Binary:

```txt
1010
```

**Output:** `false`

---

## Intuition

A power of two in binary always looks like:

```txt
1
10
100
1000
10000
```

That means:
- it has exactly one `1` bit

Now look at what happens if we subtract 1.

Example:

```txt
8  = 1000
7  = 0111
```

If we do:

```txt
1000 & 0111 = 0000
```

That gives us a famous trick:

A positive number is a power of two if:

```txt
n & (n - 1) === 0
```

---

## Walkthrough

### For 8

```txt
8 = 1000
7 = 0111
1000 & 0111 = 0000
```

So 8 is a power of two.

### For 10

```txt
10 = 1010
 9 = 1001
1010 & 1001 = 1000
```

Not zero, so 10 is not a power of two.

---

## TypeScript Solution

```ts
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
```

---

## Why it works

Powers of two have only one `1` bit.

Subtracting 1 turns that `1` into `0` and all smaller bits into `1`.

The AND becomes zero only in that special case.

---

## Complexity Analysis

- **Time:** `O(1)`
- **Space:** `O(1)`

---

## Test Cases

```ts
isPowerOfTwo(1)  // true
isPowerOfTwo(2)  // true
isPowerOfTwo(8)  // true
isPowerOfTwo(10) // false
isPowerOfTwo(0)  // false
```

---

## Quick Check

What special thing does a power of two have in binary?

**Answer:** Exactly one `1` bit.

---

# Lesson 4: Missing Number

## Problem

Given an array containing `n` distinct numbers from the range `0` to `n`, return the one number that is missing.

### Example

**Input:** `nums = [3, 0, 1]`  
**Output:** `2`

Because the numbers should be:
- `0, 1, 2, 3`

and `2` is missing.

---

## Intuition

This is another beautiful XOR problem.

If we XOR:
- all the indexes from `0` to `n`
- and all the numbers in the array

then matching values cancel out.

The missing number is left.

---

## Walkthrough

`nums = [3, 0, 1]`

There are 3 numbers, so the full range is `0` to `3`.

XOR all indexes and numbers:

```txt
0 ^ 1 ^ 2 ^ 3 ^ 3 ^ 0 ^ 1
```

Now cancel pairs:
- `0 ^ 0 = 0`
- `1 ^ 1 = 0`
- `3 ^ 3 = 0`

Only `2` remains.

---

## TypeScript Solution

```ts
function missingNumber(nums: number[]): number {
  let result = nums.length;

  for (let i = 0; i < nums.length; i++) {
    result ^= i;
    result ^= nums[i];
  }

  return result;
}
```

---

## Why it works

All numbers that appear both in the index range and in the array cancel out.

The only value that does not get canceled is the missing one.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
missingNumber([3, 0, 1]) // 2
missingNumber([0, 1])    // 2
missingNumber([9,6,4,2,3,5,7,0,1]) // 8
```

---

## Pattern Reminder

XOR is great when:
- values appear in matching pairs
- or a full expected set is compared with an incomplete actual set

---

# Lesson 5: Counting Bits

## Problem

Given an integer `n`, return an array where `answer[i]` is the number of `1` bits in the binary form of `i`, for all `0 <= i <= n`.

### Example

**Input:** `n = 5`  
**Output:** `[0, 1, 1, 2, 1, 2]`

Because:
- `0 = 0` has 0 ones
- `1 = 1` has 1 one
- `2 = 10` has 1 one
- `3 = 11` has 2 ones
- `4 = 100` has 1 one
- `5 = 101` has 2 ones

---

## Intuition

We could count bits separately for each number.

But there is a smarter pattern.

If we shift `i` right by 1, we remove the last bit.

So:

```txt
bits[i] = bits[i >> 1] + (i & 1)
```

Why?
- `i >> 1` gives the number without the last bit
- `(i & 1)` tells whether the last bit was 1

This is a tiny dynamic programming idea mixed with bits.

---

## Walkthrough

For `i = 5`

Binary:

```txt
5 = 101
```

Shift right:

```txt
5 >> 1 = 2
2 = 10
```

So:
- bits in 2 = 1
- last bit of 5 is `1`

Therefore:
- bits in 5 = `1 + 1 = 2`

---

## TypeScript Solution

```ts
function countBits(n: number): number[] {
  const result = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
}
```

---

## Why it works

Each number is built from:
- a smaller shifted version
- plus the information from its last bit

So earlier answers help build later answers.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
countBits(0) // [0]
countBits(2) // [0, 1, 1]
countBits(5) // [0, 1, 1, 2, 1, 2]
```

---

## Quick Check

What does `(i & 1)` tell us?

**Answer:** Whether the last bit of `i` is 1.

---

# Lesson 6: Reverse Bits

## Problem

Given a 32-bit unsigned integer, reverse its bits and return the result.

### Example

Suppose we use a short 4-bit example first:

```txt
1101
```

Reversed becomes:

```txt
1011
```

In the real problem, we do this with 32 bits.

---

## Intuition

We can build the reversed number one bit at a time.

Plan:
1. look at the last bit of `n`
2. add that bit to the result
3. shift the result left to make room for the next bit
4. shift `n` right to get the next bit
5. repeat 32 times

This is like reading bits from right to left and writing them from left to right.

---

## Walkthrough

Let’s use a tiny example with 4 bits:

Start:
- `n = 1101`
- `result = 0000`

Take last bit of `n`:
- last bit is `1`
- shift result left, add 1

Repeat with the next bits.
After all 4 steps, result becomes:

```txt
1011
```

That is the reverse.

---

## TypeScript Solution

```ts
function reverseBits(n: number): number {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >>> 1;
  }

  return result >>> 0;
}
```

---

## Why it works

Each loop:
- takes the current last bit from `n`
- shifts the result to make room
- places that bit into the result

After 32 steps, all bits have been reversed.

---

## Complexity Analysis

- **Time:** `O(32)` which is effectively `O(1)`
- **Space:** `O(1)`

---

## Test Cases

```ts
reverseBits(0) // 0
reverseBits(1) // large 32-bit reversed result
reverseBits(43261596) // classic test value
```

---

## Challenge Thought

This lesson shows how shifts and bit checks can help build a new number bit by bit.

---

# Chapter Review

## What you learned

In this chapter, you learned that bit manipulation works with the tiny 0-and-1 pieces inside numbers.

You learned how to:

- think of bits as switches
- use AND, OR, XOR, and shifts
- cancel pairs with XOR
- count set bits
- detect powers of two
- build answers from smaller bit patterns
- reverse bits step by step

---

## Pattern Summary

### Single Number
- XOR cancels equal pairs

### Number of 1 Bits
- inspect the last bit with `& 1`
- shift right to continue

### Power of Two
- use `n & (n - 1)`

### Missing Number
- XOR the full expected set with the actual array

### Counting Bits
- use `bits[i >> 1] + (i & 1)`

### Reverse Bits
- shift the result and add the last bit each step

---

## When this pattern is a clue

Think about bit manipulation when you see:

- pairs canceling
- powers of two
- count of 1 bits
- binary representation
- repeated last-bit checks
- build or inspect a number bit by bit

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A bit can be either ________ or ________.

**Answer:** 0, 1

---

## 2. True or False

XOR of a value with itself becomes 0.

**Answer:** True

---

## 3. Short Answer

What does `n & 1` tell us?

**Answer:** It tells us whether the last bit of `n` is 1.

---

## 4. Short Answer

Why is XOR useful for pair-canceling problems?

**Answer:** Because equal values cancel out when XORed together.

---

## 5. Fill in the blank

A positive power of two has exactly one ________ bit in binary.

**Answer:** 1

---

## 6. Mini Coding Challenge

Write a function that returns `true` if a number is even using bits.

```ts
function isEven(n: number): boolean {
  return (n & 1) === 0;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why shifting right helps when counting bits.

**Sample answer:** Shifting right removes the current last bit, so the next bit moves into place and can be checked next.

---

# Friendly Wrap-up

Bit manipulation teaches an important coding lesson:

> Big numbers are built from tiny pieces.

When you learn to work with those tiny pieces, some problems become surprisingly simple and elegant.

The more you practice bit manipulation, the more you will notice:

- when XOR can make pairs disappear
- when the last bit tells the key clue
- when shifts can build or inspect answers
- when binary patterns are hiding inside a problem

That is a powerful final pattern to add to your algorithm toolbox.
