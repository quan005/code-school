---
title: "Sliding Windows"
chapterSlug: "sliding-windows"
order: 5
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 100
skills:
  - "Track a moving range inside an array or string"
  - "Grow and shrink a window with a reason"
  - "Use counts to manage what is inside the window"
  - "Explain why sliding windows can be faster than brute force"
---

# Sliding Windows

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A sliding window is a moving section of an array or string. We grow it, shrink it, and learn from what is inside it.

---

# Chapter Overview

Imagine holding a picture frame over part of a long line of objects.

The frame only shows a **small section** at a time.

If you slide the frame to the right, you see a different section.

That is the big idea behind a **sliding window**.

A sliding window is a part of an array or string that we keep track of as we move through the data.

This helps us solve problems like:

- finding the largest sum in a fixed-size group
- finding the shortest section that meets a goal
- finding the longest substring with no repeated characters
- keeping track of what letters or numbers are inside a moving range

Instead of rechecking every possible section from scratch, we update the current window as it moves.

That often makes the algorithm much faster.

In this chapter, we will learn:

1. **Introduction to Sliding Windows**
   - Intuition
   - Fixed vs Dynamic Windows
   - When To Use Sliding Windows
   - Real-world Example
2. **Maximum Sum of Size K**
3. **Average of Every Window of Size K**
4. **Smallest Subarray with Sum at Least Target**
5. **Longest Substring Without Repeating Characters**
6. **Permutation in a String**
7. **Longest Repeating Character Replacement**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Sliding Windows

## Concrete Screen Design

### Learning Goal

Teach that a sliding window is a moving frame that shows only one part of an array or string at a time.

### Habitat

`Window Wagon`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Window Wagon
- Screen title: Introduction to Sliding Windows
- Progress chip: Intro

Scene:
- A train car window moving along a row of number tiles
- A highlighted frame showing the current window
- Entry and exit arrows for what comes in and out

Support strip:
- "A window shows one part at a time."
- "Slide it and only update what changed."

Action zone:
- Move the frame right one step
- Watch one item leave and one item enter
- Toggle fixed window vs dynamic window

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The train-window metaphor should make movement the star of the screen. Keep the frame large and easy to track, with one clear entry arrow on the right and one exit arrow on the left. The fixed-window mode should look steady and even, while the dynamic-window mode should visibly stretch and shrink.

### Interaction Flow

1. Pip introduces the frame as a moving view.
2. The learner slides the window one step and sees one value leave while another enters.
3. The scene compares fixed-size and dynamic windows.
4. A short helper panel explains why reusing work is faster than starting over.
5. The intro ends with the key words `left`, `right`, and `window size`.

### Component Usage

- Scene Card
- Window frame overlay
- Mode toggle
- Entry / exit markers
- Start-lesson CTA

## Intuition

Suppose you have this array:

```txt
[2, 1, 5, 1, 3, 2]
```

And you want to know:

> What is the biggest sum of any 3 numbers next to each other?

You could check:

- `2 + 1 + 5`
- `1 + 5 + 1`
- `5 + 1 + 3`
- `1 + 3 + 2`

That works, but if the array is very long, doing every group from scratch can be wasteful.

A better idea:

- build the first window
- then slide the window forward
- remove the number that leaves
- add the number that enters

That lets us update the answer quickly.

---

## What is a window?

A **window** is a range of positions.

For example, in:

```txt
[2, 1, 5, 1, 3, 2]
```

A window of size 3 could be:

```txt
[2, 1, 5]
```

Then after sliding right by one step:

```txt
[1, 5, 1]
```

Then:

```txt
[5, 1, 3]
```

Then:

```txt
[1, 3, 2]
```

Each of those is a different window.

---

## Two types of sliding windows

### 1. Fixed-size window

The window size stays the same.

Example:
- every group of 3 numbers
- every substring of length 5

We usually:
- add the new item entering the window
- remove the old item leaving the window

---

### 2. Dynamic window

The window can grow or shrink depending on the problem.

Example:
- shortest subarray with sum at least target
- longest substring without repeats

We usually:
- expand the right side to explore more
- shrink the left side when needed

---

## Why sliding windows are powerful

A brute force solution often checks every possible subarray or substring from scratch.

That can be very slow.

Sliding windows are powerful because they let us **reuse work**.

Instead of rebuilding a whole section again, we only update what changed.

That often turns a slower solution into a linear-time solution.

---

## When To Use Sliding Windows

A problem may be a good fit for sliding windows if:

- the input is an **array** or **string**
- you are asked about a **subarray**, **substring**, or **contiguous section**
- you need a **longest**, **shortest**, **largest**, or **smallest** section
- you are tracking something inside a moving range

A big clue is words like:

- contiguous
- consecutive
- subarray
- substring
- longest
- shortest
- size `k`

---

## Real-world Example

### Looking through a train window

Imagine sitting on a train and looking out of the window.

You can only see a section of the world at one time.

As the train moves, the view changes a little:

- something leaves the left side
- something new appears on the right side

That is how a sliding window works in code.

We keep a view of the current section and update it as we move.

---

## Helpful Variables

Sliding window problems often use:

- `left` for the start of the window
- `right` for the end of the window

Example:

```ts
let left = 0;

for (let right = 0; right < nums.length; right++) {
  // expand the window with nums[right]
}
```

In a dynamic window, we often use a `while` loop to shrink from the left.

---

## Chapter Outline

In this chapter:

- **Maximum Sum of Size K** teaches fixed-size window sums
- **Average of Every Window of Size K** teaches how to reuse the same sum again and again
- **Smallest Subarray with Sum at Least Target** teaches dynamic shrinking
- **Longest Substring Without Repeating Characters** teaches using a set inside a window
- **Permutation in a String** teaches window counting with a hash map
- **Longest Repeating Character Replacement** teaches how a window can stay valid by checking one special rule

---

# Lesson 1: Maximum Sum of Size K

## Concrete Screen Design

### Learning Goal

Teach that for a fixed-size window, we can keep one running sum and update it as the window slides.

### Habitat

`Sun Basket Lane`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Sun Basket Lane
- Lesson title: Maximum Sum of Size K
- Progress chip: 1/6

Scene:
- A row of fruit baskets with a frame covering exactly k baskets
- A running-sum badge above the frame
- A best-sum ribbon that updates when a larger total appears

Support strip:
- "k means how many baskets fit in the frame."
- "Subtract the old one, add the new one."

Action zone:
- Build the first sum
- Slide the frame one step
- Compare current sum to best sum

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Use cheerful baskets so `k` feels like "how many fit in this frame" instead of a mysterious variable. The running-sum badge should update with each move, and the best-sum ribbon should only glow when a new maximum appears.

### Interaction Flow

1. Pip builds the first window sum.
2. The learner slides the frame and watches one value leave and one value enter.
3. The running sum updates without rebuilding everything.
4. The best-sum ribbon checks whether the new sum is larger.
5. The support strip restates that fixed windows keep the same size.

### Component Usage

- Scene Card
- Fixed window frame
- Running-sum badge
- Best-sum ribbon
- Hint card

## Problem

Given an array of positive integers `nums` and a number `k`, return the maximum sum of any contiguous subarray of size `k`.

Here, `k` is just the window size.

If `k = 3`, that means:

> "Always look at groups of 3 next-door numbers."

### Example

**Input:** `nums = [2, 1, 5, 1, 3, 2]`, `k = 3`  
**Output:** `9`

Because the window `[5, 1, 3]` has sum `9`.

---

## Intuition

The brute force way is to look at every group of `k` numbers and add them up from scratch.

But that repeats a lot of work.

A better idea:

1. build the first window sum
2. slide right one step at a time
3. subtract the number leaving the window
4. add the number entering the window
5. keep track of the biggest sum

---

## Walkthrough

`nums = [2, 1, 5, 1, 3, 2]`, `k = 3`

First window:
- `[2, 1, 5]`
- sum = `8`

Slide right:
- remove `2`
- add `1`
- new sum = `7`

Window:
- `[1, 5, 1]`

Slide right:
- remove `1`
- add `3`
- new sum = `9`

Window:
- `[5, 1, 3]`

Slide right:
- remove `5`
- add `2`
- new sum = `6`

Window:
- `[1, 3, 2]`

Biggest sum was `9`.

---

## TypeScript Solution

```ts
function maxSumSubarrayOfSizeK(nums: number[], k: number): number {
  if (k <= 0 || k > nums.length) {
    return 0;
  }

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right];
    windowSum -= nums[right - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

---

## Why it works

Each time the window moves right by 1:

- one old number leaves
- one new number enters

So we can update the sum in constant time instead of rebuilding it.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3) // 9
maxSumSubarrayOfSizeK([1, 2, 3, 4], 2) // 7
maxSumSubarrayOfSizeK([5], 1) // 5
maxSumSubarrayOfSizeK([], 1) // 0
```

---

## Quick Check

Why do we subtract one number and add one number?

**Answer:** Because when the window slides, one item leaves and one new item enters.

---

# Lesson 2: Average of Every Window of Size K

## Concrete Screen Design

### Learning Goal

Teach that once we know each window sum, finding the average is one more simple step.

### Habitat

`Juice Cart Row`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Juice Cart Row
- Lesson title: Average of Every Window of Size K
- Progress chip: 2/6

Scene:
- A row of numbered juice cups
- A frame covering k cups at a time
- A recipe card showing sum divided by k

Support strip:
- "Keep the same running sum."
- "Then divide by k to get the average."

Action zone:
- Slide the frame
- Update the sum
- Record each average in an answer tray

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The answer tray should fill one average at a time so children see that this lesson produces many outputs, not just one best answer. The recipe card should make division feel like a simple follow-up step after the window sum is ready.

### Interaction Flow

1. Pip starts with the first window sum.
2. The learner divides that sum by `k` and records the average.
3. The frame slides one step, and the running sum updates again.
4. A new average drops into the answer tray.
5. The lesson emphasizes that the window logic stayed the same from the previous lesson.

### Component Usage

- Scene Card
- Fixed window frame
- Recipe card for average
- Answer tray
- Hint card

## Problem

Given an array of numbers `nums` and an integer `k`, return an array containing the average of every contiguous subarray of size `k`.

Again, `k` is just how wide the moving window should be.

### Example

**Input:** `nums = [1, 3, 2, 6, -1, 4, 1, 8, 2]`, `k = 5`

**Output:** `[2.2, 2.8, 2.4, 3.6, 2.8]`

---

## Intuition

This problem is very similar to the last one.

Instead of keeping the **largest** sum, we record the average of each fixed-size window.

That means:

- keep a running `windowSum`
- once the window has size `k`, record `windowSum / k`
- slide forward

---

## Walkthrough

First window of size 5:

```txt
[1, 3, 2, 6, -1]
```

Sum:
- `1 + 3 + 2 + 6 + (-1) = 11`

Average:
- `11 / 5 = 2.2`

Now slide:
- remove `1`
- add `4`

New window:

```txt
[3, 2, 6, -1, 4]
```

New sum:
- `14`

Average:
- `2.8`

Continue until the array ends.

---

## TypeScript Solution

```ts
function averagesOfSubarrays(nums: number[], k: number): number[] {
  const result: number[] = [];

  if (k <= 0 || k > nums.length) {
    return result;
  }

  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right >= k - 1) {
      result.push(windowSum / k);
      windowSum -= nums[left];
      left++;
    }
  }

  return result;
}
```

---

## Why it works

The current sum always matches the current window.

Once the window is big enough, we record the average and then slide the window by removing the leftmost value.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)` for the output

---

## Test Cases

```ts
averagesOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5) // [2.2, 2.8, 2.4, 3.6, 2.8]
averagesOfSubarrays([5, 5, 5], 2) // [5, 5]
averagesOfSubarrays([7], 1) // [7]
```

---

## Pattern Reminder

This lesson and the last lesson use a **fixed-size window**.

That means the window width never changes.

---

# Lesson 3: Smallest Subarray with Sum at Least Target

## Concrete Screen Design

### Learning Goal

Teach that a dynamic window grows until it reaches the goal, then shrinks to find the smallest valid section.

### Habitat

`Target Tunnel`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Target Tunnel
- Lesson title: Smallest Subarray with Sum at Least Target
- Progress chip: 3/6

Scene:
- A tunnel of number lanterns
- A window frame that can stretch and shrink
- A target sign and current-sum badge

Support strip:
- "Grow until the sum reaches the goal."
- "Then shrink to see if you can keep it smaller."

Action zone:
- Expand right
- Check current sum against target
- Shrink left while the goal still holds

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The tunnel should make the expanding and shrinking window easy to see. The target sign needs to stay visible so the learner remembers the goal. The smallest-window badge should update only when a shorter valid section appears.

### Interaction Flow

1. Pip expands the right side until the current sum reaches the target.
2. The learner sees that the window is now valid.
3. The left side starts shrinking to test whether the section can be shorter.
4. The smallest-window badge updates when a better answer appears.
5. The support strip explains why dynamic windows both grow and shrink.

### Component Usage

- Scene Card
- Stretching window frame
- Current-sum badge
- Smallest-window badge
- Hint card

## Problem

Given an array of positive integers `nums` and a positive integer `target`, return the length of the smallest contiguous subarray whose sum is greater than or equal to `target`.

If no such subarray exists, return `0`.

### Example

**Input:** `nums = [2, 1, 5, 2, 3, 2]`, `target = 7`  
**Output:** `2`

Because `[5, 2]` has sum `7`, and its length is `2`.

---

## Intuition

This is different from a fixed-size window because the best answer could have many different lengths.

So we use a **dynamic window**.

Plan:

1. expand the window by moving `right`
2. add the new value to the sum
3. once the sum is big enough, try shrinking from the left
4. keep track of the smallest valid length

---

## Walkthrough

`nums = [2, 1, 5, 2, 3, 2]`, `target = 7`

Start:
- left = 0
- sum = 0

Add `2`
- sum = 2

Add `1`
- sum = 3

Add `5`
- sum = 8

Now the window is valid:
- `[2, 1, 5]`
- length = 3

Try shrinking:
- remove `2`
- sum = 6

Now it is too small again.

Add `2`
- sum = 8

Window:
- `[1, 5, 2]`
- length = 3

Shrink:
- remove `1`
- sum = 7

Window:
- `[5, 2]`
- length = 2

That is even smaller.

Keep going until the array ends.

---

## TypeScript Solution

```ts
function smallestSubarrayWithSum(target: number, nums: number[]): number {
  let left = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
```

---

## Why it works

The window grows until it becomes valid.

Then we shrink it as much as possible while keeping it valid.

That helps us find the shortest valid section.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
smallestSubarrayWithSum(7, [2, 1, 5, 2, 3, 2]) // 2
smallestSubarrayWithSum(7, [2, 1, 5, 2, 8]) // 1
smallestSubarrayWithSum(8, [3, 4, 1, 1, 6]) // 3
smallestSubarrayWithSum(100, [1, 2, 3]) // 0
```

---

## Quick Check

When do we shrink the window?

**Answer:** When the window already meets the target and we want to see if we can make it smaller.

---

# Lesson 4: Longest Substring Without Repeating Characters

## Concrete Screen Design

### Learning Goal

Teach that we can keep a window of unique letters by shrinking whenever a repeat appears.

### Habitat

`Letter Lantern Parade`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Letter Lantern Parade
- Lesson title: Longest Substring Without Repeating Characters
- Progress chip: 4/6

Scene:
- A string shown as glowing letter lanterns
- A window frame around the current substring
- A seen-letter tray that tracks which letters are inside

Support strip:
- "If a letter repeats, shrink from the left."
- "Keep the window full of unique letters only."

Action zone:
- Expand right to add a letter
- Detect a repeated letter
- Shrink left until the repeat is gone

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Letter lanterns should be large and readable, with repeated letters clearly highlighted. The seen-letter tray should act like a small memory shelf so the learner understands why repeats matter. Keep the longest-window badge visible but calm.

### Interaction Flow

1. Pip expands the window across new letters.
2. A repeated letter lights up to show the rule breaking.
3. The learner shrinks from the left until the window is unique again.
4. The longest-window badge checks whether this substring is the best so far.
5. The scene reinforces that uniqueness is the rule we must protect.

### Component Usage

- Scene Card
- Dynamic window frame
- Seen-letter tray
- Longest-window badge
- Hint card

## Problem

Given a string `s`, return the length of the longest substring that has no repeating characters.

### Example 1

**Input:** `s = "abcabcbb"`  
**Output:** `3`

Because `"abc"` is the longest substring without repeats.

### Example 2

**Input:** `s = "bbbbb"`  
**Output:** `1`

Because the longest substring without repeats is `"b"`.

---

## Intuition

We want a substring where every character is unique.

This is a great fit for:

- a dynamic sliding window
- a `Set` to remember what is inside the window

Plan:

1. expand right
2. if a repeated character appears, shrink from the left until the window becomes valid again
3. track the longest valid window

---

## Walkthrough

`s = "abca"`

Start:
- window = `""`
- set = `{}`

Add `'a'`
- window = `"a"`
- set = `{a}`
- best = 1

Add `'b'`
- window = `"ab"`
- set = `{a, b}`
- best = 2

Add `'c'`
- window = `"abc"`
- set = `{a, b, c}`
- best = 3

Add `'a'`
- now `'a'` repeats

Shrink from the left:
- remove first `'a'`

Now window becomes `"bca"`
- set = `{b, c, a}`

Still valid.
Best stays `3`.

---

## TypeScript Solution

```ts
function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let best = 0;
  const seen = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    best = Math.max(best, right - left + 1);
  }

  return best;
}
```

---

## Why it works

The set always matches the characters inside the current window.

If a repeat appears, we shrink until the window is valid again.

Then we measure its length.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)` where `k` is the number of different characters in the window

---

## Test Cases

```ts
lengthOfLongestSubstring("abcabcbb") // 3
lengthOfLongestSubstring("bbbbb") // 1
lengthOfLongestSubstring("pwwkew") // 3
lengthOfLongestSubstring("") // 0
```

---

## Common Mistake

Do not remove just one character and stop.

Keep shrinking until the repeated character is gone from the window.

That is why we use `while`, not `if`.

---

# Lesson 5: Permutation in a String

## Concrete Screen Design

### Learning Goal

Teach that a fixed-size window can use counts to check whether the current letters match the needed pattern.

### Habitat

`Pattern Post`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Pattern Post
- Lesson title: Permutation in a String
- Progress chip: 5/6

Scene:
- A target word card pinned above a row of letters
- A same-size window sliding across the main string
- A count board comparing needed letters to current letters

Support strip:
- "The window stays the same size as the pattern."
- "Check whether the counts match."

Action zone:
- Slide the window
- Update the letter counts
- Watch for a full match

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The pattern card should remain fixed so children can compare every new window to the same target. The count board should use easy-to-read tiles, not tiny tables. Full matches should feel satisfying and obvious.

### Interaction Flow

1. Pip shows the target pattern and its letter counts.
2. The learner slides a same-size window over the main string.
3. The current window counts update as letters enter and leave.
4. A match badge appears when every needed count lines up.
5. The support strip explains that this is still a sliding-window problem, just with counting.

### Component Usage

- Scene Card
- Pattern card
- Count board
- Match badge
- Hint card

## Problem

Given two strings `pattern` and `s`, return `true` if any substring of `s` is a permutation of `pattern`.

A permutation means the same letters with the same counts, but maybe in a different order.

### Example 1

**Input:** `pattern = "ab"`, `s = "eidbaooo"`  
**Output:** `true`

Because `"ba"` appears in `s`, and `"ba"` is a permutation of `"ab"`.

### Example 2

**Input:** `pattern = "ab"`, `s = "eidboaoo"`  
**Output:** `false`

---

## Intuition

A substring is a permutation of `pattern` if:

- it has the same length as `pattern`
- it has the same letter counts

That suggests:

- use a fixed-size window of `pattern.length`
- use a hash map to count needed letters
- track how the window matches those counts

---

## Strategy

1. build a frequency map for `pattern`
2. move a window across `s`
3. update counts as letters enter and leave the window
4. if all needed counts match, return `true`

---

## TypeScript Solution

```ts
function containsPermutation(pattern: string, s: string): boolean {
  const counts = new Map<string, number>();

  for (const ch of pattern) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  let left = 0;
  let matched = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    if (counts.has(rightChar)) {
      counts.set(rightChar, counts.get(rightChar)! - 1);

      if (counts.get(rightChar) === 0) {
        matched++;
      }
    }

    if (right >= pattern.length - 1) {
      if (matched === counts.size) {
        return true;
      }

      const leftChar = s[left];
      left++;

      if (counts.has(leftChar)) {
        if (counts.get(leftChar) === 0) {
          matched--;
        }
        counts.set(leftChar, counts.get(leftChar)! + 1);
      }
    }
  }

  return false;
}
```

---

## Why it works

The map keeps track of what letters and counts are needed.

As the window moves:

- letters enter
- letters leave
- counts update

If all needed counts are matched at the same time, then the current window is a permutation.

---

## Complexity Analysis

- **Time:** `O(n + m)` where `n` is the length of `s` and `m` is the length of `pattern`
- **Space:** `O(m)`

---

## Test Cases

```ts
containsPermutation("ab", "eidbaooo") // true
containsPermutation("ab", "eidboaoo") // false
containsPermutation("adc", "dcda") // true
containsPermutation("a", "a") // true
```

---

## Pattern Reminder

This is a sliding window plus hash map problem.

That happens often in substring problems.

---

# Lesson 6: Longest Repeating Character Replacement

## Concrete Screen Design

### Learning Goal

Teach that we can keep a larger window if only a small number of letters need to be replaced to make it all the same.

### Habitat

`Paint Banner Studio`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Paint Banner Studio
- Lesson title: Longest Repeating Character Replacement
- Progress chip: 6/6

Scene:
- A banner made of colored letter tiles
- A dynamic window frame
- A repaint counter showing how many letters would need changing

Support strip:
- "Keep the window if the repaint count is small enough."
- "Shrink only when it needs too many changes."

Action zone:
- Expand right
- Track the most common letter
- Shrink left if the repaint count gets too big

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The banner should make "repainting letters" feel concrete. The repaint counter should clearly show how many tiles would need to change. Use one standout color to mark the most common letter inside the window.

### Interaction Flow

1. Pip expands the banner window across more letters.
2. The learner sees which letter is most common in the current window.
3. The repaint counter checks how many tiles would need changing.
4. If the count is too high, the window shrinks from the left.
5. The longest-valid badge updates when the window stays allowed.

### Component Usage

- Scene Card
- Dynamic window frame
- Repaint counter
- Most-common marker
- Hint card

## Problem

You are given a string `s` and an integer `k`.

You may change at most `k` characters so that all characters in a substring become the same.

Return the length of the longest substring you can make this way.

### Example

**Input:** `s = "AABABBA"`, `k = 1`  
**Output:** `4`

Because one valid answer is `"AABA"`:
- change the `'B'` to `'A'`
- then the substring becomes `"AAAA"`

---

## Intuition

We want the longest window that can be turned into all one letter using at most `k` changes.

Suppose the current window has:

- size = 5
- the most common letter appears 4 times

Then we only need:
- `5 - 4 = 1` change

That window is valid if `1 <= k`.

So the rule is:

```txt
window size - count of most common letter <= k
```

If that rule fails, shrink the window.

---

## Walkthrough

`s = "AABABBA"`, `k = 1`

Build a window and count letters.

At one point, a window like `"AABA"` has:
- size = 4
- most common letter is `A`, count = 3

Needed changes:
- `4 - 3 = 1`

That is allowed, so the window is valid.

We keep the longest valid one.

---

## TypeScript Solution

```ts
function characterReplacement(s: string, k: number): number {
  const counts = new Map<string, number>();
  let left = 0;
  let maxCount = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
    maxCount = Math.max(maxCount, counts.get(ch)!);

    while (right - left + 1 - maxCount > k) {
      const leftChar = s[left];
      counts.set(leftChar, counts.get(leftChar)! - 1);
      left++;
    }

    best = Math.max(best, right - left + 1);
  }

  return best;
}
```

---

## Why it works

The window stays valid as long as we can fix it with at most `k` changes.

If too many characters would need to change, we shrink the window.

That lets us keep track of the longest valid section.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)` for the character counts in the window

---

## Test Cases

```ts
characterReplacement("ABAB", 2) // 4
characterReplacement("AABABBA", 1) // 4
characterReplacement("AAAA", 2) // 4
characterReplacement("ABC", 0) // 1
```

---

## Challenge Thought

This lesson is more advanced because the window is not checking exact equality.

It is checking whether the window is still “fixable” under a rule.

That is an important sliding-window skill.

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review fixed windows, dynamic windows, and the main clues that tell us how a window should move.

### Habitat

`Viewfinder Review Station`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Viewfinder Review Station
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A board with six mini window scenes
- Two large labels: fixed and dynamic
- Tiny clue chips for sum, average, unique, target, count, replace

Support strip:
- "Ask what the window is trying to protect."
- "Then decide whether it should stay fixed or change size."

Action zone:
- Sort lessons into fixed or dynamic
- Match clue chips to the right lesson
- Explain when the window should shrink

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review board should feel like a camera station full of little viewfinders. Keep each mini-scene simple and recognizable from the chapter lessons. The fixed and dynamic labels should be large enough to anchor the sorting activity.

### Interaction Flow

1. Pip introduces the review as a window-sorting game.
2. The learner places each mini-scene under fixed or dynamic.
3. Clue chips snap into the right lesson panels.
4. A helper line explains why the window grew, shrank, or stayed the same size.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Viewfinder mini-scenes
- Fixed / dynamic labels
- Mascot speech bubble
- Next-step panel

## What you learned

In this chapter, you learned that a sliding window is a moving section of an array or string.

You learned how to:

- keep a fixed-size window
- grow and shrink a dynamic window
- track sums, averages, counts, and repeated characters
- reuse work instead of rebuilding each section from scratch

---

## Pattern Summary

### Fixed-size window
Use when the problem gives a size like `k`.

Common actions:
- add the new right value
- remove the old left value

### Dynamic window
Use when the best section can grow or shrink.

Common actions:
- expand right to explore
- shrink left to restore a rule
- measure the best valid window

---

## Problem Pattern Match

### Maximum Sum of Size K
- fixed-size window
- keep a running sum

### Average of Every Window of Size K
- fixed-size window
- keep a running sum and divide

### Smallest Subarray with Sum at Least Target
- dynamic window
- shrink when valid

### Longest Substring Without Repeating Characters
- dynamic window
- set for uniqueness

### Permutation in a String
- fixed-size window
- map for counts

### Longest Repeating Character Replacement
- dynamic window
- keep counts and check if window is fixable

---

## When this pattern is a clue

Think about sliding windows when you see:

- arrays or strings
- subarray or substring
- contiguous section
- longest or shortest section
- exact size `k`
- need to track what is inside a moving range

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can decide how to move a window with much less support.

### Habitat

`Sky Window Challenge`

### Primary Mascot

`Pip the Bluebird`

### Screen Composition

```txt
Header:
- Back
- Sky Window Challenge
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused array or string challenge
- A movable window frame already on the data
- A result badge area and one small clue card

Support strip:
- "What should the window remember right now?"
- "Decide whether to grow, shrink, or record the answer."

Action zone:
- Predict the next window move
- Solve a short challenge
- Explain why that move made sense

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should feel calm and focused, with the frame as the main visual object. The clue card should be short and readable. Keep the result area clear so the lesson ends on understanding, not clutter.

### Interaction Flow

1. Pip presents a challenge with a current window already visible.
2. The learner chooses whether to grow, shrink, or record an answer.
3. The scene updates to show the effect of that choice.
4. A short explanation prompt asks what the window was tracking.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Window frame overlay
- Prediction prompt
- Reflection prompt
- Result feedback card

Try these before looking at the answers.

## 1. Fill in the blank

A sliding window is a moving ________ of an array or string.

**Answer:** section

---

## 2. True or False

Sliding windows are often useful for subarray and substring problems.

**Answer:** True

---

## 3. Short Answer

What is the difference between a fixed-size window and a dynamic window?

**Answer:** A fixed-size window always stays the same width. A dynamic window can grow and shrink depending on the rule in the problem.

---

## 4. Short Answer

Why can sliding windows be faster than brute force?

**Answer:** Because we reuse work from the current window instead of rebuilding every section from scratch.

---

## 5. Fill in the blank

In many sliding-window solutions, `left` marks the start of the window and `_______` marks the end.

**Answer:** right

---

## 6. Mini Coding Challenge

Write a function that returns the maximum sum of any subarray of size 2.

```ts
function maxSumSize2(nums: number[]): number {
  if (nums.length < 2) {
    return 0;
  }

  let windowSum = nums[0] + nums[1];
  let best = windowSum;

  for (let right = 2; right < nums.length; right++) {
    windowSum += nums[right];
    windowSum -= nums[right - 2];
    best = Math.max(best, windowSum);
  }

  return best;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words what it means to “shrink the window.”

**Sample answer:** Shrinking the window means moving the left side to the right so fewer items stay inside the current section.

---

# Friendly Wrap-up

Sliding windows teach an important coding idea:

> When a problem is about a moving section,  
> do not start over every time.  
> Update what changed.

That idea helps you solve many array and string problems much faster.

The more you practice sliding windows, the more you will notice:

- when a window should stay fixed
- when it should grow
- when it should shrink
- what information you need to track inside it

That is a powerful pattern for coding practice and real programming.
