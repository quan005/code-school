---
title: "Fast and Slow Pointers"
chapterSlug: "fast-and-slow-pointers"
order: 4
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 95
skills:
  - "Use two pointers that move at different speeds"
  - "Find the middle of a linked list"
  - "Detect whether a cycle exists"
  - "Explain why fast and slow pointers work"
---

# Fast and Slow Pointers

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Use one pointer that moves slowly and one pointer that moves quickly to find patterns in a list or number process.

---

# Chapter Overview

In the last chapter, we used pointers to move through a linked list one node at a time.

Now we are going to learn a clever twist:

- one pointer moves **slowly**
- one pointer moves **quickly**

This pattern is often called **fast and slow pointers**.

You can think of it like two racers on a track:

- the **slow** racer takes 1 step at a time
- the **fast** racer takes 2 steps at a time

That speed difference helps us solve special kinds of problems, like:

- finding the middle of a linked list
- detecting if a linked list has a cycle
- finding where a cycle begins
- checking whether a process gets stuck in a loop

This chapter teaches you how to use speed as a problem-solving tool.

In this chapter, we will learn:

1. **Introduction to Fast and Slow Pointers**
   - Intuition
   - Why Different Speeds Help
   - When To Use This Pattern
   - Real-world Example
2. **Find the Middle of a Linked List**
3. **Detect a Cycle in a Linked List**
4. **Find the Length of a Cycle**
5. **Find the Start of a Cycle**
6. **Happy Number**
7. **Is Palindrome Linked List**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Fast and Slow Pointers

## Intuition

Imagine two kids walking on stepping stones.

- Slow moves **1 step**
- Fast moves **2 steps**

If the path is straight and ends, fast will reach the end first.

If the path loops in a circle, fast will eventually catch up to slow.

That simple idea is the heart of this chapter.

Instead of using extra memory to remember everything we have seen, we sometimes let two pointers move at different speeds and use the way they meet to learn something.

---

## What are fast and slow pointers?

A **pointer** is a variable that keeps track of where we are.

In this chapter, we usually use:

- `slow`
- `fast`

Often:

- `slow` moves 1 step at a time
- `fast` moves 2 steps at a time

In linked list code, that often looks like this:

```ts
slow = slow.next;
fast = fast.next.next;
```

That means:

- slow moves to the next node
- fast skips one node and lands two nodes ahead

---

## Why different speeds help

There are two very important reasons.

### 1. To find the middle

If fast moves twice as quickly as slow, then by the time fast reaches the end, slow will be around the middle.

That helps us find the middle without first counting every node.

---

### 2. To detect cycles

If a linked list loops back around, fast and slow are moving on the same loop.

Because fast is moving quicker, it will eventually catch slow.

If they ever land on the same node again, there must be a cycle.

---

## When To Use Fast and Slow Pointers

This pattern is a good fit when:

- the problem uses a **linked list**
- you need to find the **middle**
- you need to check whether there is a **cycle**
- you need to find where a **cycle starts**
- a process repeats itself and may fall into a **loop**

A big clue is when a problem says:

- “middle”
- “cycle”
- “loop”
- “repeats forever”
- “detect if something circles back”

---

## Real-world Example

### Race track

Imagine two runners on a circular track.

- one runs slowly
- one runs quickly

If the track is a loop, the faster runner will eventually lap the slower runner.

That is like cycle detection.

Or imagine two kids walking down a hallway:

- one takes 1 step at a time
- the other takes 2 steps at a time

When the faster one reaches the end, the slower one is around halfway down the hallway.

That is like finding the middle.

---

## Safety Reminder

When using fast pointers, be careful.

Before doing:

```ts
fast = fast.next.next;
```

you must make sure:

- `fast !== null`
- `fast.next !== null`

Otherwise, you may try to move past the end of the list.

That is why many loops look like this:

```ts
while (fast !== null && fast.next !== null) {
  slow = slow.next!;
  fast = fast.next.next;
}
```

---

## Chapter Outline

In this chapter:

- **Find the Middle of a Linked List** teaches us how different speeds reveal the center
- **Detect a Cycle in a Linked List** teaches us how meeting means looping
- **Find the Length of a Cycle** teaches us how to measure a loop once we find it
- **Find the Start of a Cycle** teaches us how to locate where the loop begins
- **Happy Number** teaches us that fast and slow pointers also work on repeating number processes
- **Is Palindrome Linked List** teaches us how to combine middle-finding with list reversal

---

# TypeScript Setup

We will use this node class in several lessons:

```ts
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
```

---

# Lesson 1: Find the Middle of a Linked List

## Problem

Given the `head` of a linked list, return the middle node.

If there are two middle nodes, return the second middle node.

### Example 1

Input:

```txt
1 -> 2 -> 3 -> null
```

Output:

```txt
3? No.
The middle node is 2.
```

### Example 2

Input:

```txt
1 -> 2 -> 3 -> 4 -> null
```

Output:

```txt
3
```

Because the two middle nodes are `2` and `3`, and we return the second one.

---

## Intuition

A simple way would be:

1. count all the nodes
2. divide by 2
3. walk there again

That works, but it takes two passes.

A faster idea is to use:

- `slow` moving 1 step
- `fast` moving 2 steps

Every time fast takes 2 steps, slow takes 1.

So when fast reaches the end, slow is in the middle.

---

## Walkthrough

List:

```txt
1 -> 2 -> 3 -> 4 -> 5 -> null
```

Start:
- slow = 1
- fast = 1

Step 1:
- slow moves to 2
- fast moves to 3

Step 2:
- slow moves to 3
- fast moves to 5

Step 3:
- fast cannot move 2 more steps, so stop

Now:
- slow is at 3

That is the middle.

---

## TypeScript Solution

```ts
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}
```

---

## Why it works

Fast moves twice as quickly as slow.

That means when fast finishes the list, slow has only traveled half as far.

So slow lands in the middle.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
middleNode(null) // null
middleNode(new ListNode(1)) // node with value 1
middleNode(new ListNode(1, new ListNode(2, new ListNode(3)))) // node with value 2
middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))) // node with value 3
```

---

## Quick Check

Why do we move fast by 2?

**Answer:** So it reaches the end in about half as many turns, which makes slow land in the middle.

---

# Lesson 2: Detect a Cycle in a Linked List

## Problem

Given the `head` of a linked list, return `true` if the list contains a cycle. Otherwise, return `false`.

A cycle means some node points back to an earlier node instead of ending at `null`.

### Example

```txt
1 -> 2 -> 3 -> 4
     ^         |
     |_________|
```

This list has a cycle.

---

## Intuition

If there is **no cycle**, fast will reach `null`.

If there **is** a cycle, then fast and slow are both moving around the same loop.

Because fast moves quicker, it will eventually catch slow.

So:

- if fast reaches the end -> no cycle
- if fast meets slow -> cycle exists

---

## Walkthrough

Imagine a cycle like this:

```txt
1 -> 2 -> 3 -> 4 -> 5
          ^         |
          |_________|
```

Start:
- slow = 1
- fast = 1

Move them:
- slow goes 1 step each turn
- fast goes 2 steps each turn

Once both are inside the loop, fast keeps gaining on slow.

Eventually, they land on the same node.

That meeting tells us there is a cycle.

---

## TypeScript Solution

```ts
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
```

---

## Why it works

In a cycle:

- slow moves around the loop
- fast moves around the loop faster

So the distance between them changes until fast catches slow.

If there is no cycle, fast eventually falls off the end.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
hasCycle(null) // false
hasCycle(new ListNode(1)) // false
```

You can also create a cycle manually:

```ts
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
a.next = b;
b.next = c;
c.next = b;

hasCycle(a) // true
```

---

## Interview Tip

You do not need a set for this pattern.

The fast and slow meeting itself is enough.

---

# Lesson 3: Find the Length of a Cycle

## Problem

Given the `head` of a linked list, return the length of the cycle if one exists. Otherwise, return `0`.

### Example

If the cycle is:

```txt
3 -> 4 -> 5 -> back to 3
```

Then the cycle length is `3`.

---

## Intuition

First, we use fast and slow pointers to see whether a cycle exists.

If they meet, we know we are inside the loop.

Now we can keep one pointer still and move the other pointer around the loop until it comes back.

The number of steps it takes is the cycle length.

---

## Walkthrough

Suppose slow and fast meet at a node inside the cycle.

Now do this:

1. start a counter at 1
2. move one pointer to the next node
3. keep moving until it returns to the meeting node
4. count the steps

If it takes 4 steps to get all the way around, then the cycle length is 4.

---

## TypeScript Solution

```ts
function cycleLength(head: ListNode | null): number {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      let count = 1;
      let current = slow!.next;

      while (current !== slow) {
        count++;
        current = current!.next;
      }

      return count;
    }
  }

  return 0;
}
```

---

## Why it works

Once slow and fast meet, they are inside the loop.

Walking once around the loop and counting the steps tells us how long the loop is.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
cycleLength(null) // 0
```

Example with cycle:

```ts
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

cycleLength(a) // 3
```

---

## Quick Check

Why can we count the cycle after slow and fast meet?

**Answer:** Because the meeting point is already inside the loop.

---

# Lesson 4: Find the Start of a Cycle

## Problem

Given the `head` of a linked list, return the node where the cycle begins.  
If there is no cycle, return `null`.

### Example

```txt
1 -> 2 -> 3 -> 4 -> 5
          ^         |
          |_________|
```

The cycle starts at the node with value `3`.

---

## Intuition

This problem feels magical the first time you see it.

Here is the idea:

1. Use fast and slow pointers to find a meeting point inside the cycle
2. Put one pointer at the head
3. Keep the other pointer at the meeting point
4. Move both one step at a time
5. The place where they meet is the start of the cycle

You do not need to memorize the math right away.

For now, it is enough to learn the pattern and practice it.

---

## Why this works in a simple way

The meeting point and the head are arranged so that walking them forward at the same speed makes them arrive at the loop entrance together.

It is one of the coolest tricks in linked lists.

---

## TypeScript Solution

```ts
function detectCycleStart(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      let pointer1 = head;
      let pointer2 = slow;

      while (pointer1 !== pointer2) {
        pointer1 = pointer1!.next;
        pointer2 = pointer2!.next;
      }

      return pointer1;
    }
  }

  return null;
}
```

---

## Walkthrough

Imagine:

- head is some distance from the cycle start
- fast and slow meet somewhere inside the loop

Now start:

- pointer1 at head
- pointer2 at meeting point

Move both one step at a time.

They meet at the cycle entrance.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Case

```ts
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

detectCycleStart(a) === c // true
```

---

## Common Feeling

If this one feels tricky, that is normal.

This is a more advanced fast-and-slow-pointer problem.

The important thing is to understand the pattern:

- first find a meeting point
- then walk together to the cycle start

---

# Lesson 5: Happy Number

## Problem

A number is called **happy** if this process eventually reaches `1`:

1. take the digits
2. square each digit
3. add the squares
4. repeat

If the process gets stuck in a loop that never reaches `1`, then the number is not happy.

Return `true` if `n` is happy, otherwise return `false`.

### Example

`19` is happy:

- `1² + 9² = 1 + 81 = 82`
- `8² + 2² = 64 + 4 = 68`
- `6² + 8² = 36 + 64 = 100`
- `1² + 0² + 0² = 1`

So return `true`.

---

## Intuition

This problem is not a linked list, but it still forms a chain of steps:

- start with one number
- turn it into the next number
- then the next number
- then the next number

That makes it behave like a path.

If the path reaches `1`, great.

If it starts repeating numbers, then it is in a loop.

So we can use fast and slow pointers again:

- slow moves 1 transformation at a time
- fast moves 2 transformations at a time

If they meet at something other than `1`, then the process is looping.

---

## Helper Function

We need a function that turns a number into the sum of the squares of its digits.

```ts
function nextNumber(n: number): number {
  let total = 0;

  while (n > 0) {
    const digit = n % 10;
    total += digit * digit;
    n = Math.floor(n / 10);
  }

  return total;
}
```

---

## TypeScript Solution

```ts
function nextNumber(n: number): number {
  let total = 0;

  while (n > 0) {
    const digit = n % 10;
    total += digit * digit;
    n = Math.floor(n / 10);
  }

  return total;
}

function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  while (true) {
    slow = nextNumber(slow);
    fast = nextNumber(nextNumber(fast));

    if (fast === 1) {
      return true;
    }

    if (slow === fast) {
      return false;
    }
  }
}
```

---

## Why it works

If the number process loops forever, fast and slow will eventually meet inside the loop.

If the process reaches `1`, then the number is happy.

This shows that fast and slow pointers are not only for linked lists.  
They also work for repeated processes.

---

## Complexity Analysis

This is usually treated as very efficient for the input sizes we use.

- **Time:** small and fast in practice
- **Space:** `O(1)`

---

## Test Cases

```ts
isHappy(19) // true
isHappy(2) // false
isHappy(1) // true
```

---

## Quick Check

Why is this chapter pattern useful here even though there is no linked list?

**Answer:** Because the repeated number process behaves like a path that can end or loop.

---

# Lesson 6: Is Palindrome Linked List

## Problem

Given the `head` of a linked list, return `true` if the list reads the same forward and backward. Otherwise, return `false`.

### Example 1

```txt
1 -> 2 -> 2 -> 1 -> null
```

Output: `true`

### Example 2

```txt
1 -> 2 -> 3 -> null
```

Output: `false`

---

## Intuition

A palindrome is something that looks the same both ways.

For strings, we might compare from both ends.

For a linked list, that is harder because we cannot jump backward easily.

So here is a smart plan:

1. use fast and slow pointers to find the middle
2. reverse the second half of the list
3. compare the first half and the reversed second half

If all matching positions are equal, the list is a palindrome.

---

## Walkthrough

List:

```txt
1 -> 2 -> 2 -> 1
```

### Step 1: Find the middle
Using fast and slow:
- slow lands near the middle

### Step 2: Reverse the second half
Second half:

```txt
2 -> 1
```

Reversed becomes:

```txt
1 -> 2
```

### Step 3: Compare halves
First half:
```txt
1 -> 2
```

Second half reversed:
```txt
1 -> 2
```

They match, so return `true`.

---

## TypeScript Solution

```ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function isPalindromeList(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let secondHalf = reverseList(slow);
  let firstHalf = head;

  while (secondHalf !== null) {
    if (firstHalf!.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
```

---

## Why it works

Fast and slow pointers help us split the list near the middle.

Reversing the second half lets us compare values from both directions.

That turns a “forward-only” structure into something we can still compare from the ends.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)` extra space

---

## Test Cases

```ts
isPalindromeList(null) // true
isPalindromeList(new ListNode(1)) // true
isPalindromeList(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))) // true
isPalindromeList(new ListNode(1, new ListNode(2, new ListNode(3)))) // false
```

---

## Challenge Thought

This lesson combines ideas from two chapters:

- **Fast and Slow Pointers**
- **Linked Lists**

That is a big part of advanced problem solving:
sometimes one problem uses more than one pattern.

---

# Chapter Review

## What you learned

In this chapter, you learned that fast and slow pointers help us use **speed differences** to learn things about a structure or process.

You learned how to:

- find the middle of a linked list
- detect a cycle
- measure a cycle
- find where a cycle starts
- detect loops in number processes
- combine middle-finding with reversal to check palindromes

---

## Pattern Summary

### Find the Middle
- slow moves 1
- fast moves 2
- when fast ends, slow is in the middle

### Detect a Cycle
- if fast meets slow, there is a loop
- if fast reaches null, there is no loop

### Find Cycle Length
- after meeting, walk once around the loop and count

### Find Cycle Start
- after meeting, start one pointer at head
- move both 1 step at a time
- where they meet is the start

### Happy Number
- treat the repeated process like a path
- use fast and slow on the transformations

### Palindrome Linked List
- find the middle
- reverse the second half
- compare halves

---

## When this pattern is a clue

Think about fast and slow pointers when you see:

- linked lists
- middle node
- cycle
- repeated loop
- “does this process repeat forever?”

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In this pattern, the slow pointer usually moves ___ step at a time, and the fast pointer usually moves ___ steps at a time.

**Answer:** 1, 2

---

## 2. True or False

If a linked list has no cycle, the fast pointer will eventually reach `null`.

**Answer:** True

---

## 3. Short Answer

Why does the slow pointer land in the middle when fast moves twice as quickly?

**Answer:** Because when fast finishes the whole list, slow has only traveled about half as far.

---

## 4. Short Answer

What does it mean if fast and slow meet in a linked list cycle problem?

**Answer:** It means there is a cycle.

---

## 5. Fill in the blank

To safely do `fast = fast.next.next`, we must first check that `fast` is not `null` and `fast._____` is not `null`.

**Answer:** next

---

## 6. Mini Coding Challenge

Write a function that returns `true` if a linked list has an even number of nodes.

### Hint

Use fast pointer movement.

```ts
function hasEvenLength(head: ListNode | null): boolean {
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
  }

  return fast === null;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why happy numbers can be solved with fast and slow pointers.

**Sample answer:** Because the number keeps changing into another number, which makes a path of repeated states. That path can either reach 1 or loop, just like a linked list path can end or cycle.

---

# Friendly Wrap-up

Fast and slow pointers teach a very cool lesson:

> Sometimes you do not need extra memory.  
> Sometimes you just need two travelers moving at different speeds.

That one idea helps solve many problems that look very different on the surface.

The more you practice this pattern, the more you will notice:

- where a path ends
- where a path loops
- where the middle is
- how speed can reveal structure

That is a powerful algorithm skill.
