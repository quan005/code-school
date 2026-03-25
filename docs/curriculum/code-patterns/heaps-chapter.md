---
title: "Heaps"
chapterSlug: "heaps"
order: 8
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 105
skills:
  - "Explain how a heap helps find the smallest or largest item quickly"
  - "Choose between a min-heap and a max-heap"
  - "Use a heap for top-k and priority problems"
  - "Trace push and pop behavior in a heap"
---

# Heaps

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A heap helps us quickly get the **smallest** or **largest** item without sorting everything.

---

# Chapter Overview

Imagine you have a pile of toy blocks with numbers on them.

Sometimes you do not care about the full order of every block.

Sometimes you only care about:

- the **smallest** one
- the **largest** one
- the **top `k`** best ones
- the **next most important** thing to handle

Here, `k` just means "how many."

So `top k` means:

> "the best 3" or "the biggest 5" or whatever number we choose

That is where a **heap** shines.

A heap is a special data structure that helps us quickly access one very important item:

- in a **min-heap**, the smallest item is on top
- in a **max-heap**, the largest item is on top

A heap is not the same as a fully sorted list.

It does **not** keep everything in perfect order.

Instead, it keeps enough order so the top item is easy to get.

That makes heaps very useful for:

- top `k` problems
- repeated “get the smallest” problems
- repeated “get the largest” problems
- scheduling and priority problems
- merging many sorted lists

In this chapter, we will learn:

1. **Introduction to Heaps**
   - Intuition
   - Min-Heap vs Max-Heap
   - Push and Pop
   - When To Use a Heap
   - Real-world Example
2. **Find the K Largest Numbers**
3. **Kth Largest Number**
4. **Top K Frequent Elements**
5. **K Closest Points to the Origin**
6. **Merge K Sorted Lists**
7. **Connect Ropes with Minimum Cost**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Heaps

## Intuition

Suppose you have many numbers:

```txt
[8, 3, 10, 1, 6, 14, 4]
```

If someone asks:

> “What is the smallest number right now?”

You could scan everything and find `1`.

But what if they ask again and again after numbers keep getting added and removed?

A heap helps with that.

A heap keeps the most important item ready at the top.

That way, getting the smallest or largest item is much faster than searching the whole list every time.

---

## Min-Heap vs Max-Heap

### Min-Heap

A **min-heap** keeps the **smallest** value on top.

If you pop from a min-heap, you remove the smallest item.

Good for:
- smallest values
- shortest tasks
- cheapest costs
- merging sorted lists

---

### Max-Heap

A **max-heap** keeps the **largest** value on top.

If you pop from a max-heap, you remove the largest item.

Good for:
- biggest values
- highest scores
- strongest priorities
- top `k` largest problems

---

## Is a heap fully sorted?

No.

That is a very important idea.

A heap only promises something special about the top.

For example, in a min-heap:

- the top is the smallest

But the rest of the values are **not necessarily** in full sorted order.

So think of a heap like this:

> “I can quickly give you the most important item.”

Not:

> “I keep every item perfectly ordered.”

---

## The main heap actions

### 1. Push

Add a new item into the heap.

### 2. Peek

Look at the top item without removing it.

### 3. Pop

Remove the top item.

For a min-heap:
- pop removes the smallest

For a max-heap:
- pop removes the largest

---

## Why heaps are powerful

A heap is useful when a problem repeatedly asks for:

- the smallest item
- the largest item
- the next best choice
- the top `k` items

Instead of sorting everything again and again, a heap keeps the most important item ready.

---

## When To Use a Heap

A problem may be a good fit for a heap if it asks about:

- top `k`
- kth largest
- kth smallest
- most frequent
- closest points
- repeated min or max removal
- merging many sorted sources
- priority handling

A big clue is words like:

- largest
- smallest
- top
- next
- priority
- closest
- cheapest

If `kth` looks strange, read it like this:

- `1st` largest = the biggest
- `2nd` largest = the second biggest
- `3rd` largest = the third biggest

---

## Real-world Example

### Prize line

Imagine a contest where you always want to know the current highest score.

Instead of sorting every player after every update, you could use a max-heap to keep the biggest score on top.

Or imagine a rope-cutting machine that always works on the two shortest ropes first.

That sounds like a min-heap problem.

---

## Helpful TypeScript Setup

JavaScript and TypeScript do not have a built-in heap class, so for learning we can build a small one.

You do **not** need to memorize every line of this right away.

The important thing is understanding what `push`, `peek`, and `pop` do.

```ts
class Heap<T> {
  private data: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  size(): number {
    return this.data.length;
  }

  peek(): T | undefined {
    return this.data[0];
  }

  push(value: T): void {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): T | undefined {
    if (this.data.length === 0) {
      return undefined;
    }

    const top = this.data[0];
    const last = this.data.pop()!;

    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return top;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.compare(this.data[index], this.data[parent])) {
        [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
        index = parent;
      } else {
        break;
      }
    }
  }

  private bubbleDown(index: number): void {
    const length = this.data.length;

    while (true) {
      let best = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (left < length && this.compare(this.data[left], this.data[best])) {
        best = left;
      }

      if (right < length && this.compare(this.data[right], this.data[best])) {
        best = right;
      }

      if (best !== index) {
        [this.data[index], this.data[best]] = [this.data[best], this.data[index]];
        index = best;
      } else {
        break;
      }
    }
  }
}
```

### Build a min-heap of numbers

```ts
const minHeap = new Heap<number>((a, b) => a < b);
```

### Build a max-heap of numbers

```ts
const maxHeap = new Heap<number>((a, b) => a > b);
```

---

## Chapter Outline

In this chapter:

- **Find the K Largest Numbers** teaches how a heap helps keep only the best `k`
- **Kth Largest Number** teaches how top `k` logic leads to the kth answer
- **Top K Frequent Elements** teaches using a map plus a heap
- **K Closest Points to the Origin** teaches how heaps compare by distance
- **Merge K Sorted Lists** teaches how heaps help pull the next smallest item
- **Connect Ropes with Minimum Cost** teaches how greedy choices plus a min-heap create the best total cost

---

# Lesson 1: Find the K Largest Numbers

## Problem

Given an array of numbers `nums` and a number `k`, return the `k` largest numbers.

The result can be in any order.

### Example

**Input:** `nums = [3, 1, 5, 12, 2, 11]`, `k = 3`  
**Output:** `[5, 11, 12]` in any order

---

## Intuition

A simple way is to sort the whole array and take the last `k` numbers.

That works, but maybe we do not want to sort everything.

A heap-based idea:

- keep a **min-heap** of size at most `k`
- the heap stores the current best `k` large numbers
- if the heap gets bigger than `k`, remove the smallest
- that way, only the `k` largest values survive

Why a min-heap?

Because among the current best `k`, the smallest one is the easiest one to throw away when a better number comes in.

---

## Walkthrough

`nums = [3, 1, 5, 12, 2, 11]`, `k = 3`

Start with an empty min-heap.

Add `3`
- heap: `[3]`

Add `1`
- heap: `[1, 3]`

Add `5`
- heap has 3 items: `[1, 3, 5]`

Add `12`
- heap becomes too big
- remove smallest (`1`)
- keep `[3, 5, 12]`

Add `2`
- heap becomes `[2, 3, 5, 12]`
- remove smallest (`2`)
- keep `[3, 5, 12]`

Add `11`
- heap becomes too big
- remove smallest (`3`)
- keep `[5, 11, 12]`

Those are the 3 largest numbers.

---

## TypeScript Solution

```ts
class Heap<T> {
  private data: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  size(): number {
    return this.data.length;
  }

  peek(): T | undefined {
    return this.data[0];
  }

  push(value: T): void {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): T | undefined {
    if (this.data.length === 0) return undefined;

    const top = this.data[0];
    const last = this.data.pop()!;

    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return top;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.data[index], this.data[parent])) {
        [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
        index = parent;
      } else {
        break;
      }
    }
  }

  private bubbleDown(index: number): void {
    while (true) {
      let best = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (left < this.data.length && this.compare(this.data[left], this.data[best])) {
        best = left;
      }

      if (right < this.data.length && this.compare(this.data[right], this.data[best])) {
        best = right;
      }

      if (best !== index) {
        [this.data[index], this.data[best]] = [this.data[best], this.data[index]];
        index = best;
      } else {
        break;
      }
    }
  }
}

function kLargestNumbers(nums: number[], k: number): number[] {
  const minHeap = new Heap<number>((a, b) => a < b);

  for (const num of nums) {
    minHeap.push(num);

    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  const result: number[] = [];

  while (minHeap.size() > 0) {
    result.push(minHeap.pop()!);
  }

  return result;
}
```

---

## Why it works

The heap always stores at most `k` values.

Whenever there are too many, we remove the smallest one.

That means only the `k` largest numbers are left.

---

## Complexity Analysis

- **Time:** `O(n log k)`
- **Space:** `O(k)`

---

## Test Cases

```ts
kLargestNumbers([3, 1, 5, 12, 2, 11], 3) // [5, 11, 12] in any order
kLargestNumbers([5, 12, 11, -1, 12], 3) // [11, 12, 12] in any order
kLargestNumbers([1], 1) // [1]
```

---

## Quick Check

Why do we use a min-heap instead of a max-heap here?

**Answer:** Because we want the smallest of the current top `k` to be easy to remove.

---

# Lesson 2: Kth Largest Number

## Problem

Given an array of numbers `nums` and a number `k`, return the **kth largest** number.

### Example

**Input:** `nums = [3, 2, 1, 5, 6, 4]`, `k = 2`  
**Output:** `5`

Because the numbers in descending order are:

```txt
[6, 5, 4, 3, 2, 1]
```

and the 2nd largest is `5`.

---

## Intuition

This is almost the same as the last lesson.

If we keep only the `k` largest numbers in a min-heap, then:

- the top of that heap is the smallest of those `k`
- which means it is the **kth largest overall**

That is a very important heap trick.

---

## Walkthrough

`nums = [3, 2, 1, 5, 6, 4]`, `k = 2`

Keep a min-heap of size 2.

Add `3`
- heap: `[3]`

Add `2`
- heap: `[2, 3]`

Add `1`
- heap too big
- remove smallest (`1`)
- heap: `[2, 3]`

Add `5`
- heap too big
- remove smallest (`2`)
- heap: `[3, 5]`

Add `6`
- heap too big
- remove smallest (`3`)
- heap: `[5, 6]`

Add `4`
- heap too big
- remove smallest (`4`)
- heap: `[5, 6]`

Top is `5`, so the 2nd largest is `5`.

---

## TypeScript Solution

```ts
function kthLargest(nums: number[], k: number): number {
  const minHeap = new Heap<number>((a, b) => a < b);

  for (const num of nums) {
    minHeap.push(num);

    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  return minHeap.peek()!;
}
```

---

## Why it works

After processing all numbers, the heap contains exactly the `k` largest values.

The smallest of those `k` is the kth largest overall.

---

## Complexity Analysis

- **Time:** `O(n log k)`
- **Space:** `O(k)`

---

## Test Cases

```ts
kthLargest([3, 2, 1, 5, 6, 4], 2) // 5
kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) // 4
kthLargest([7], 1) // 7
```

---

## Pattern Reminder

Top `k` and kth problems are some of the strongest clues for heaps.

---

# Lesson 3: Top K Frequent Elements

## Problem

Given an array of numbers `nums`, return the `k` most frequent elements.

### Example

**Input:** `nums = [1, 1, 1, 2, 2, 3]`, `k = 2`  
**Output:** `[1, 2]`

Because:
- `1` appears 3 times
- `2` appears 2 times
- `3` appears 1 time

The two most frequent are `1` and `2`.

---

## Intuition

This problem has two parts:

1. count how often each number appears
2. keep the top `k` by frequency

So we use:
- a **hash map** for counting
- a **min-heap** to keep the best `k`

The heap will store pairs like:

```txt
[number, frequency]
```

The smallest frequency stays on top, so it is easy to remove weaker candidates.

---

## Walkthrough

`nums = [1, 1, 1, 2, 2, 3]`, `k = 2`

Count first:
- `1 -> 3`
- `2 -> 2`
- `3 -> 1`

Now use a min-heap by frequency.

Add `(1, 3)`
- heap: `[(1, 3)]`

Add `(2, 2)`
- heap: `[(2, 2), (1, 3)]`

Add `(3, 1)`
- heap too big
- remove smallest frequency `(3, 1)`

Now the heap keeps:
- `(2, 2)`
- `(1, 3)`

So the answer is `[1, 2]` in any order.

---

## TypeScript Solution

```ts
function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();

  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  const minHeap = new Heap<[number, number]>((a, b) => a[1] < b[1]);

  for (const entry of counts.entries()) {
    minHeap.push(entry);

    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  const result: number[] = [];

  while (minHeap.size() > 0) {
    result.push(minHeap.pop()![0]);
  }

  return result;
}
```

---

## Why it works

The map tells us the frequencies.

The heap keeps only the `k` most frequent entries by throwing away the lowest frequency when needed.

---

## Complexity Analysis

- **Time:** `O(n log k)`
- **Space:** `O(n)`

---

## Test Cases

```ts
topKFrequent([1, 1, 1, 2, 2, 3], 2) // [1, 2] in any order
topKFrequent([4, 4, 4, 5, 5, 6], 1) // [4]
topKFrequent([7], 1) // [7]
```

---

## Challenge Thought

This lesson mixes two patterns together:

- **Hash Maps**
- **Heaps**

That happens a lot in coding practice problems.

---

# Lesson 4: K Closest Points to the Origin

## Problem

You are given a list of points on a graph.

Each point is written like `[x, y]`.

Return the `k` points closest to the origin `(0, 0)`.

### Example

**Input:** `points = [[1, 3], [-2, 2], [2, -1]]`, `k = 2`  
**Output:** `[[-2, 2], [2, -1]]` in any order

---

## Intuition

To know which point is closer to the origin, we compare distance.

We can use the squared distance:

```txt
x*x + y*y
```

We do not need the real square root because comparing squared distances works the same way.

A smart heap idea:

- keep a **max-heap** of size `k`
- store the current `k` closest points
- if the heap gets too big, remove the farthest point

Why a max-heap?

Because among the current best `k`, the farthest one should be easiest to remove.

---

## Walkthrough

Points:
- `[1, 3]` -> squared distance `10`
- `[-2, 2]` -> squared distance `8`
- `[2, -1]` -> squared distance `5`

Keep a max-heap of size 2.

Add `[1, 3]`
- heap has distance 10

Add `[-2, 2]`
- heap has distances 10 and 8

Add `[2, -1]`
- heap gets too big
- remove farthest point, which is `[1, 3]`

Now the remaining 2 closest are:
- `[-2, 2]`
- `[2, -1]`

---

## TypeScript Solution

```ts
function kClosest(points: number[][], k: number): number[][] {
  const maxHeap = new Heap<[number, number[]]>((a, b) => a[0] > b[0]);

  for (const point of points) {
    const distance = point[0] * point[0] + point[1] * point[1];
    maxHeap.push([distance, point]);

    if (maxHeap.size() > k) {
      maxHeap.pop();
    }
  }

  const result: number[][] = [];

  while (maxHeap.size() > 0) {
    result.push(maxHeap.pop()![1]);
  }

  return result;
}
```

---

## Why it works

The heap stores only the current `k` closest points.

If a farther point is on top, it is the first one removed.

That lets the best `k` survive.

---

## Complexity Analysis

- **Time:** `O(n log k)`
- **Space:** `O(k)`

---

## Test Cases

```ts
kClosest([[1, 3], [-2, 2], [2, -1]], 2) // [[-2, 2], [2, -1]] in any order
kClosest([[3, 3], [5, -1], [-2, 4]], 2) // two closest points
kClosest([[0, 1]], 1) // [[0, 1]]
```

---

## Quick Check

Why do we use squared distance instead of true distance?

**Answer:** Because squared distances compare points correctly without needing square roots.

---

# Lesson 5: Merge K Sorted Lists

## Problem

You are given `k` sorted linked lists.

Merge them into one sorted linked list and return the head.

### Example

List 1:
```txt
1 -> 4 -> 7
```

List 2:
```txt
2 -> 5
```

List 3:
```txt
3 -> 6 -> 8
```

Output:
```txt
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
```

---

## Intuition

If we have many sorted lists, the next smallest value must be at the front of one of them.

That is a heap clue.

Plan:

1. put the head of each non-empty list into a min-heap
2. pop the smallest node
3. attach it to the answer list
4. if that node has a next node, push the next node into the heap
5. repeat until the heap is empty

The heap always tells us which current front node is smallest.

---

## TypeScript Setup

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

## Walkthrough

Heap starts with:
- node 1 from list 1
- node 2 from list 2
- node 3 from list 3

Pop smallest:
- 1
- attach it
- push 4

Now heap has:
- 2, 3, 4

Pop smallest:
- 2
- attach it
- push 5

Now heap has:
- 3, 4, 5

And so on.

The heap always keeps the smallest front node ready.

---

## TypeScript Solution

```ts
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new Heap<ListNode>((a, b) => a.val < b.val);

  for (const node of lists) {
    if (node !== null) {
      minHeap.push(node);
    }
  }

  const dummy = new ListNode(0);
  let tail = dummy;

  while (minHeap.size() > 0) {
    const node = minHeap.pop()!;
    tail.next = node;
    tail = tail.next;

    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return dummy.next;
}
```

---

## Why it works

The heap stores the current smallest front choices from all lists.

Each pop chooses the next correct node for the merged answer.

Then the next node from that same list joins the heap.

---

## Complexity Analysis

If there are `n` total nodes across `k` lists:

- **Time:** `O(n log k)`
- **Space:** `O(k)`

---

## Test Cases

```ts
const a = new ListNode(1, new ListNode(4, new ListNode(7)));
const b = new ListNode(2, new ListNode(5));
const c = new ListNode(3, new ListNode(6, new ListNode(8)));

mergeKLists([a, b, c]); // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
mergeKLists([]); // null
mergeKLists([null, new ListNode(1)]); // 1
```

---

## Pattern Reminder

When many sorted sources each have a “current smallest candidate,” a min-heap is often the right tool.

---

# Lesson 6: Connect Ropes with Minimum Cost

## Problem

You are given rope lengths.

Each time you connect two ropes, the cost is the sum of their lengths.

Return the minimum total cost to connect all ropes into one rope.

### Example

**Input:** `ropes = [1, 3, 11, 5]`  
**Output:** `33`

---

## Intuition

To keep the total cost small, we should connect the two shortest ropes first.

Why?

Because every rope we create may be used again later.

So it is smart to keep early combined ropes as small as possible.

That means:

1. put all rope lengths into a **min-heap**
2. pop the two smallest
3. connect them
4. add the cost
5. push the combined rope back
6. repeat until one rope remains

---

## Walkthrough

`ropes = [1, 3, 11, 5]`

Heap:
- `[1, 3, 5, 11]`

Pop 1 and 3
- cost = 4
- total = 4
- push 4

Heap:
- `[4, 5, 11]`

Pop 4 and 5
- cost = 9
- total = 13
- push 9

Heap:
- `[9, 11]`

Pop 9 and 11
- cost = 20
- total = 33
- push 20

Done.

Minimum total cost is `33`.

---

## TypeScript Solution

```ts
function minimumCostToConnectRopes(ropes: number[]): number {
  if (ropes.length <= 1) {
    return 0;
  }

  const minHeap = new Heap<number>((a, b) => a < b);

  for (const rope of ropes) {
    minHeap.push(rope);
  }

  let totalCost = 0;

  while (minHeap.size() > 1) {
    const first = minHeap.pop()!;
    const second = minHeap.pop()!;
    const cost = first + second;

    totalCost += cost;
    minHeap.push(cost);
  }

  return totalCost;
}
```

---

## Why it works

Choosing the two shortest ropes first is the greedy choice that keeps future costs small.

The min-heap makes those two shortest ropes easy to get every time.

---

## Complexity Analysis

- **Time:** `O(n log n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
minimumCostToConnectRopes([1, 3, 11, 5]) // 33
minimumCostToConnectRopes([3, 4, 5, 6]) // 36
minimumCostToConnectRopes([8]) // 0
```

---

## Challenge Thought

This lesson mixes two ideas:

- heap
- greedy choice

That is common in advanced coding practice problems.

---

# Chapter Review

## What you learned

In this chapter, you learned that heaps help us quickly get the most important item:

- smallest in a min-heap
- largest in a max-heap

You learned how to:

- choose between min-heap and max-heap
- solve top `k` problems
- keep only the best candidates
- merge many sorted sources
- make repeated best choices

---

## Pattern Summary

### K Largest Numbers
- keep a min-heap of size `k`

### Kth Largest
- keep a min-heap of size `k`
- the top becomes the answer

### Top K Frequent
- count first with a map
- then keep top `k` in a heap

### K Closest Points
- keep a max-heap of size `k`

### Merge K Sorted Lists
- keep the current front nodes in a min-heap

### Connect Ropes
- repeatedly pop the two smallest from a min-heap

---

## When this pattern is a clue

Think about heaps when you see:

- top `k`
- kth largest
- kth smallest
- most frequent
- closest
- repeated smallest
- repeated largest
- priority
- next best choice

---

## Min-Heap vs Max-Heap Reminder

Use a **min-heap** when you want easy access to the smallest value.

Use a **max-heap** when you want easy access to the largest value.

Sometimes we use one heap to keep the best `k` candidates by making the “worst of the best” easy to remove.

That is why top-`k` problems often use a heap that may feel reversed at first.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In a min-heap, the ________ value is on top.

**Answer:** smallest

---

## 2. Fill in the blank

In a max-heap, the ________ value is on top.

**Answer:** largest

---

## 3. True or False

A heap always keeps every item fully sorted.

**Answer:** False

A heap mainly guarantees something special about the top.

---

## 4. Short Answer

Why are heaps useful for top `k` problems?

**Answer:** Because a heap can keep only the best `k` candidates and make it easy to remove the weakest one among them.

---

## 5. Short Answer

What is the difference between `peek()` and `pop()`?

**Answer:** `peek()` looks at the top item without removing it. `pop()` removes and returns the top item.

---

## 6. Mini Coding Challenge

Write a function that returns the smallest number in an array using a min-heap.

```ts
function smallestWithHeap(nums: number[]): number | undefined {
  if (nums.length === 0) {
    return undefined;
  }

  const minHeap = new Heap<number>((a, b) => a < b);

  for (const num of nums) {
    minHeap.push(num);
  }

  return minHeap.peek();
}
```

---

## 7. Mini Coding Challenge

Explain in your own words when you would choose a min-heap instead of a max-heap.

**Sample answer:** I would choose a min-heap when I need to repeatedly get the smallest item, like the cheapest cost, shortest rope, or smallest front value.

---

# Friendly Wrap-up

Heaps teach a very useful coding lesson:

> Sometimes you do not need everything sorted.  
> Sometimes you only need the most important thing ready.

That is what heaps are great at.

The more you practice heaps, the more you will notice:

- when top `k` is really a heap problem
- when repeated min or max removal is the clue
- when priority matters more than full order
- when a heap helps you avoid sorting everything

That is a powerful pattern for coding practice and real programs.
