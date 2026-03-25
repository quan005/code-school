---
title: "Linked Lists"
chapterSlug: "linked-lists"
order: 3
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 90
skills:
  - "Explain how nodes connect in a linked list"
  - "Traverse a list safely from head to null"
  - "Change pointers to insert, delete, and reverse nodes"
  - "Trace linked list code step by step"
---

# Linked Lists

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A linked list is a chain of nodes. Each node stores a value and a pointer to the next node.

---

# Chapter Overview

A **linked list** is a special way to store data in order.

Instead of putting everything side by side like an array, a linked list stores data in **nodes**.

In this chapter, you can think of a **node** as a little box or card.

Each node has:

- a **value**
- a **next pointer** that tells us where the next node is

You can think of a **pointer** like an arrow or note that says, "Go here next."

You can think of it like a treasure hunt:

- each clue has some information
- each clue tells you where to go next

Or like a train:

- each train car holds something
- each train car is connected to the next one

This chapter teaches you how to think about linked lists, move through them, and change them safely.

In this chapter, we will learn:

1. **Introduction to Linked Lists**
   - Intuition
   - Anatomy of a Linked List
   - Common Pointer Moves
   - When To Use Linked Lists
   - Real-world Example
2. **Traverse a Linked List**
3. **Search for a Value**
4. **Insert at the End**
5. **Delete a Node by Value**
6. **Reverse a Linked List**
7. **Merge Two Sorted Linked Lists**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Linked Lists

## Intuition

Imagine a line of treasure chests.

Each chest has:

- a treasure inside
- a note that says where the **next chest** is

That is how a linked list works.

Each item in the list is called a **node**.

In kid words, a node is just one little box in the chain.

Each node stores:

- `value`
- `next`

The `next` part is a reference to the next node in the chain.

You can think of `next` as an arrow that points to the next box.

If there is no next node, then `next` is `null`.

That means:

> “This is the end of the list.”

---

## Anatomy of a Linked List

A simple linked list might look like this:

```txt
head -> [3 | next] -> [7 | next] -> [10 | null]
```

This means:

- the list starts at `head`
- the first node holds `3`
- then it points to the node with `7`
- then that points to the node with `10`
- then the list ends

The **head** is the front of the list.

If you lose the head, you lose the whole list.

That is why the head pointer is very important.

---

## Node Structure in TypeScript

Here is a simple linked list node:

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

A node can point to another node, or it can point to `null`.

---

## Arrays vs Linked Lists

Arrays and linked lists both store data in order, but they work differently.

### Array
- values are stored side by side
- you can jump to any index quickly
- inserting in the middle may require shifting items

### Linked List
- nodes are connected one by one
- you move by following pointers
- inserting or deleting can be easier if you already have the right pointer

So a linked list is not “better” than an array.

It is just a different tool.

---

## Common Pointer Moves

When solving linked list problems, we often do the same few actions again and again.

### 1. Visit the current node

```ts
console.log(current.val);
```

### 2. Move to the next node

```ts
current = current.next;
```

### 3. Change where a node points

```ts
current.next = someOtherNode;
```

That third move is very powerful.

It lets us:

- insert nodes
- delete nodes
- reverse the list
- connect two lists

---

## A Very Important Safety Rule

Before using `.next` or `.val`, make sure the node is **not null**.

This is important because `null` means:

> “There is no node here.”

That is why many loops look like this:

```ts
while (current !== null) {
  // use current.val
  current = current.next;
}
```

---

## When To Use Linked Lists

A problem may be about linked lists if:

- the data is made of **nodes**
- each node points to the **next**
- you are asked to **insert**, **delete**, **reverse**, or **reconnect** nodes
- you are given a `head` node

A big clue is the presence of something like:

```ts
node.next
```

That usually means linked list thinking is required.

---

## Real-world Example

### Playlist queue

Imagine a music playlist where each song points to the next song to play.

That is like a linked list.

If you are listening to one song, the player knows what to play next by following the pointer to the next item.

Or think about a scavenger hunt:

- each clue tells you where the next clue is
- you can only move forward one clue at a time

That is exactly how linked list traversal works.

---

## Chapter Outline

In this chapter:

- **Traverse a Linked List** teaches us how to walk through a list safely
- **Search for a Value** teaches us how to find something in the list
- **Insert at the End** teaches us how to connect a new node
- **Delete a Node by Value** teaches us how to skip over a node
- **Reverse a Linked List** teaches us how to flip all the arrows
- **Merge Two Sorted Linked Lists** teaches us how to weave two lists together

---

# Lesson 1: Traverse a Linked List

## Problem

Given the `head` of a linked list, print or collect all the values from start to end.

### Example

If the list is:

```txt
head -> 4 -> 8 -> 2 -> null
```

The output should be:

```txt
[4, 8, 2]
```

---

## Intuition

To traverse a linked list means:

> start at the head and keep following `next`

Unlike an array, we cannot jump straight to the end.

We must move one node at a time.

A good plan is:

1. start at `head`
2. while the current node is not `null`
3. use its value
4. move to the next node

---

## Walkthrough

List:

```txt
head -> [4] -> [8] -> [2] -> null
```

Start:
- `current = head`
- `current.val = 4`

Collect `4`

Move:
- `current = current.next`

Now:
- `current.val = 8`

Collect `8`

Move again:
- `current = current.next`

Now:
- `current.val = 2`

Collect `2`

Move again:
- `current = current.next`

Now:
- `current = null`

Stop.

---

## TypeScript Solution

```ts
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function traverseList(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}
```

---

## Why it works

The `current` pointer starts at the front of the list.

Each loop:

- reads the current node
- moves to the next node

When `current` becomes `null`, we know the list is finished.

---

## Complexity Analysis

- **Time:** `O(n)` because we visit each node once
- **Space:** `O(n)` for the output array

---

## Test Cases

```ts
traverseList(null) // []
traverseList(new ListNode(5)) // [5]
traverseList(new ListNode(1, new ListNode(2, new ListNode(3)))) // [1, 2, 3]
```

---

## Quick Check

Why do we stop when `current === null`?

**Answer:** Because `null` means there is no node left to visit.

---

# Lesson 2: Search for a Value

## Problem

Given the `head` of a linked list and a target value, return `true` if the value is in the list. Otherwise, return `false`.

### Example 1

List:

```txt
2 -> 5 -> 9 -> null
```

Target: `5`

Output: `true`

### Example 2

List:

```txt
2 -> 5 -> 9 -> null
```

Target: `7`

Output: `false`

---

## Intuition

Searching a linked list is like checking each train car one by one.

We cannot skip ahead.

So we:

1. start at the head
2. compare the current value to the target
3. if they match, return `true`
4. otherwise move to the next node
5. if we reach the end, return `false`

---

## Walkthrough

List:

```txt
2 -> 5 -> 9 -> null
```

Target: `7`

Start at `2`
- is `2 === 7`? No

Move to `5`
- is `5 === 7`? No

Move to `9`
- is `9 === 7`? No

Move to `null`
- stop and return `false`

---

## TypeScript Solution

```ts
function searchList(head: ListNode | null, target: number): boolean {
  let current = head;

  while (current !== null) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }

  return false;
}
```

---

## Why it works

We check every node in order.

If the target exists, we will eventually land on it.

If we reach the end without finding it, then it is not in the list.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
searchList(null, 3) // false
searchList(new ListNode(7), 7) // true
searchList(new ListNode(2, new ListNode(5, new ListNode(9))), 5) // true
searchList(new ListNode(2, new ListNode(5, new ListNode(9))), 8) // false
```

---

## Interview Tip

A linked list search often feels like array search, but remember:

- in arrays, we use indexes
- in linked lists, we use pointers

---

# Lesson 3: Insert at the End

## Problem

Given the `head` of a linked list and a new value, insert a new node with that value at the end of the list.

Return the head of the updated list.

### Example

Input list:

```txt
1 -> 4 -> null
```

Insert: `9`

Output list:

```txt
1 -> 4 -> 9 -> null
```

---

## Intuition

To insert at the end, we need to find the last node.

The last node is the one whose `next` is `null`.

Once we find it, we connect it to the new node.

There is one special case:

- if the list is empty, the new node becomes the head

---

## Walkthrough

List:

```txt
1 -> 4 -> null
```

New value: `9`

Create new node:

```txt
[9 | null]
```

Start at head:
- current = `1`

Move:
- current = `4`

Now `current.next === null`, so `4` is the last node.

Set:

```ts
current.next = new ListNode(9);
```

Now the list is:

```txt
1 -> 4 -> 9 -> null
```

---

## TypeScript Solution

```ts
function insertAtEnd(head: ListNode | null, value: number): ListNode {
  const newNode = new ListNode(value);

  if (head === null) {
    return newNode;
  }

  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
  return head;
}
```

---

## Why it works

We walk until we find the tail node.

Then we connect its `next` to the new node.

If the list was empty, the new node is the whole list.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)` extra space

---

## Test Cases

```ts
traverseList(insertAtEnd(null, 5)) // [5]
traverseList(insertAtEnd(new ListNode(1), 2)) // [1, 2]
traverseList(insertAtEnd(new ListNode(1, new ListNode(4)), 9)) // [1, 4, 9]
```

---

## Common Mistake

Do not forget the empty-list case.

If `head` is `null`, there is no last node to connect to.

---

# Lesson 4: Delete a Node by Value

## Problem

Given the `head` of a linked list and a target value, delete the **first node** whose value equals the target.

Return the head of the updated list.

### Example

Input list:

```txt
3 -> 7 -> 9 -> null
```

Delete: `7`

Output list:

```txt
3 -> 9 -> null
```

---

## Intuition

Deleting from a linked list means changing pointers.

If we want to remove a node in the middle, we do not usually erase it directly.

Instead, we make the node before it **skip over it**.

Example:

```txt
3 -> 7 -> 9
```

To remove `7`, we change the `next` of `3` so it points to `9`.

That means:

```txt
3 -> 9
```

There is one special case:

- if the head itself should be deleted, return `head.next`

---

## Walkthrough

List:

```txt
3 -> 7 -> 9 -> null
```

Target: `7`

Start:
- head is `3`, not `7`

Now we walk through the list looking ahead.

At node `3`:
- `current.next.val` is `7`
- that means the next node is the one we want to delete

So we set:

```ts
current.next = current.next.next;
```

Now:

```txt
3 -> 9 -> null
```

---

## TypeScript Solution

```ts
function deleteByValue(head: ListNode | null, target: number): ListNode | null {
  if (head === null) {
    return null;
  }

  if (head.val === target) {
    return head.next;
  }

  let current = head;

  while (current.next !== null) {
    if (current.next.val === target) {
      current.next = current.next.next;
      return head;
    }
    current = current.next;
  }

  return head;
}
```

---

## Why it works

We check whether the next node is the one we want to remove.

If it is, we change the pointer so the list skips that node.

That reconnects the list without breaking it.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
traverseList(deleteByValue(null, 2)) // []
traverseList(deleteByValue(new ListNode(5), 5)) // []
traverseList(deleteByValue(new ListNode(3, new ListNode(7, new ListNode(9))), 7)) // [3, 9]
traverseList(deleteByValue(new ListNode(3, new ListNode(7, new ListNode(9))), 3)) // [7, 9]
traverseList(deleteByValue(new ListNode(3, new ListNode(7, new ListNode(9))), 100)) // [3, 7, 9]
```

---

## Pointer Reminder

Deletion is really a pointer problem.

We are not “destroying” the value in a magical way.

We are changing which node points to which.

---

# Lesson 5: Reverse a Linked List

## Problem

Given the `head` of a linked list, reverse the list and return the new head.

### Example

Input:

```txt
1 -> 2 -> 3 -> null
```

Output:

```txt
3 -> 2 -> 1 -> null
```

---

## Intuition

Reversing a linked list means flipping all the arrows.

Original:

```txt
1 -> 2 -> 3 -> null
```

Reversed:

```txt
1 <- 2 <- 3
```

But since the list must still move forward through `next`, the final list becomes:

```txt
3 -> 2 -> 1 -> null
```

To do this safely, we need three pointers:

- `prev`
- `current`
- `nextNode`

Why three?

Because before we change `current.next`, we must save where `current` was originally pointing.

Otherwise, we could lose the rest of the list.

---

## Walkthrough

Start with:

```txt
prev = null
current = 1 -> 2 -> 3 -> null
```

### Step 1
Save next:
- `nextNode = 2`

Flip arrow:
- `1.next = prev` which is `null`

Now:
- `1 -> null`

Move pointers:
- `prev = 1`
- `current = 2`

### Step 2
Save next:
- `nextNode = 3`

Flip arrow:
- `2.next = 1`

Now:
- `2 -> 1 -> null`

Move pointers:
- `prev = 2`
- `current = 3`

### Step 3
Save next:
- `nextNode = null`

Flip arrow:
- `3.next = 2`

Now:
- `3 -> 2 -> 1 -> null`

Move pointers:
- `prev = 3`
- `current = null`

Stop.

Return `prev`.

---

## TypeScript Solution

```ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
```

---

## Why it works

Each step does three jobs:

1. remember the rest of the list
2. flip one arrow
3. move forward

At the end, `prev` points to the new front of the reversed list.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
traverseList(reverseList(null)) // []
traverseList(reverseList(new ListNode(5))) // [5]
traverseList(reverseList(new ListNode(1, new ListNode(2, new ListNode(3))))) // [3, 2, 1]
```

---

## Common Mistake

A very common mistake is to do:

```ts
current.next = prev;
current = current.next;
```

That causes trouble because after flipping the arrow, `current.next` no longer points forward.

That is why we save `nextNode` first.

---

# Lesson 6: Merge Two Sorted Linked Lists

## Problem

Given the heads of two linked lists sorted in ascending order, merge them into one sorted linked list and return the new head.

### Example

List A:

```txt
1 -> 4 -> 7 -> null
```

List B:

```txt
2 -> 3 -> 8 -> null
```

Output:

```txt
1 -> 2 -> 3 -> 4 -> 7 -> 8 -> null
```

---

## Intuition

This is like weaving together two sorted trains.

At each step, we compare the front node of each list.

Whichever value is smaller gets attached next.

Then we move forward in that list.

We keep doing that until one list runs out.

Then we attach the rest of the other list.

---

## Helpful Trick: Dummy Node

A **dummy node** is a pretend starter node.

It makes building the answer easier.

We do not return the dummy itself.  
We return `dummy.next`.

This helps us avoid extra special cases at the beginning.

---

## Walkthrough

A:
```txt
1 -> 4 -> 7
```

B:
```txt
2 -> 3 -> 8
```

Start:
- dummy -> null
- tail = dummy

Compare `1` and `2`
- `1` is smaller
- attach `1`

Now:
- dummy -> 1
- move A forward to `4`

Compare `4` and `2`
- `2` is smaller
- attach `2`

Now:
- dummy -> 1 -> 2
- move B forward to `3`

Compare `4` and `3`
- `3` is smaller
- attach `3`

Now:
- dummy -> 1 -> 2 -> 3
- move B forward to `8`

Compare `4` and `8`
- attach `4`

Then compare `7` and `8`
- attach `7`

List A is done.
Attach the rest of B:
- `8`

Final:
```txt
1 -> 2 -> 3 -> 4 -> 7 -> 8 -> null
```

---

## TypeScript Solution

```ts
function mergeTwoSortedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;

  let a = list1;
  let b = list2;

  while (a !== null && b !== null) {
    if (a.val <= b.val) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
  }

  if (a !== null) {
    tail.next = a;
  } else {
    tail.next = b;
  }

  return dummy.next;
}
```

---

## Why it works

The merged list grows one node at a time.

Each step chooses the smaller front node, so the final result stays sorted.

When one list ends, the rest of the other list is already sorted, so we can attach it directly.

---

## Complexity Analysis

- **Time:** `O(n + m)`
- **Space:** `O(1)` extra space

---

## Test Cases

```ts
traverseList(mergeTwoSortedLists(null, null)) // []
traverseList(mergeTwoSortedLists(new ListNode(1), null)) // [1]
traverseList(
  mergeTwoSortedLists(
    new ListNode(1, new ListNode(4, new ListNode(7))),
    new ListNode(2, new ListNode(3, new ListNode(8)))
  )
) // [1, 2, 3, 4, 7, 8]
```

---

## Interview Tip

When building a linked list answer from left to right, a dummy node often makes the code cleaner and easier to understand.

---

# Chapter Review

## What you learned

In this chapter, you learned that:

- a linked list is made of connected nodes
- each node has a value and a `next` pointer
- the list starts at the `head`
- `null` means the end of the list
- many linked list problems are really pointer problems

---

## Core Skills

### Traverse
Move through the list one node at a time.

### Search
Check each node until you find the target.

### Insert
Find the right place and connect a new node.

### Delete
Skip over the node you want to remove.

### Reverse
Flip the arrows one at a time.

### Merge
Compare two lists and build one sorted result.

---

## Pattern Summary

### Traverse a Linked List
- best idea: follow `next` until `null`

### Search for a Value
- best idea: compare each node to the target

### Insert at the End
- best idea: find the tail and connect a new node

### Delete a Node by Value
- best idea: change the previous node’s `next`

### Reverse a Linked List
- best idea: use `prev`, `current`, and `nextNode`

### Merge Two Sorted Linked Lists
- best idea: compare fronts and use a dummy node

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A linked list node usually stores a value and a _______ pointer.

**Answer:** next

---

## 2. True or False

In a linked list, you can jump straight to any position like `list[10]`.

**Answer:** False

You usually move one node at a time by following pointers.

---

## 3. Short Answer

What does `null` mean in a linked list?

**Answer:** It means there is no next node. It marks the end of the list.

---

## 4. Short Answer

Why is the `head` important?

**Answer:** Because it is the starting point of the whole list. If you lose the head, you lose access to the list.

---

## 5. Short Answer

Why do we save `nextNode` before reversing a pointer?

**Answer:** So we do not lose the rest of the list.

---

## 6. Mini Coding Challenge

Write a function that counts how many nodes are in a linked list.

```ts
function listLength(head: ListNode | null): number {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}
```

---

## 7. Mini Coding Challenge

Write a function that returns the last value in the list, or `null` if the list is empty.

```ts
function lastValue(head: ListNode | null): number | null {
  if (head === null) {
    return null;
  }

  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  return current.val;
}
```

---

# Friendly Wrap-up

Linked lists teach an important coding idea:

> Sometimes the hardest part is not the values.  
> Sometimes the hardest part is the connections.

When you get good at linked lists, you get better at:

- following structure carefully
- changing pointers safely
- thinking step by step
- building strong debugging habits

That makes linked lists a very important chapter in your algorithm toolbox.
