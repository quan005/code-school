---
title: "Intervals"
chapterSlug: "intervals"
order: 9
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 95
skills:
  - "Explain what an interval represents"
  - "Recognize when intervals overlap or stay separate"
  - "Merge and insert intervals correctly"
  - "Use sorting to solve interval problems step by step"
---

# Intervals

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: An interval is a start and an end. Interval problems often ask whether ranges overlap, fit together, or need to be merged.

---

# Chapter Overview

Imagine a calendar.

One event might run from:

- 9:00 to 10:00

Another event might run from:

- 9:30 to 11:00

These two time blocks overlap.

That is the heart of **interval** problems.

An **interval** is a range with:

- a **start**
- an **end**

Examples of intervals:
- time blocks on a schedule
- pages in a book range
- seat number ranges
- positions on a line
- game rounds from one point to another

A lot of interval problems ask questions like:

- do these ranges overlap?
- should these ranges be merged?
- where does a new range fit?
- how many rooms do we need for all these meetings?

In this chapter, we will learn:

1. **Introduction to Intervals**
   - Intuition
   - What Overlap Means
   - Why Sorting Helps
   - When To Use Interval Thinking
   - Real-world Example
2. **Merge Overlapping Intervals**
3. **Insert Interval**
4. **Can Attend All Meetings**
5. **Minimum Meeting Rooms**
6. **Interval Intersection**
7. **Remove Covered Intervals**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Intervals

## Intuition

An interval is a pair of values:

```txt
[start, end]
```

For example:

```txt
[2, 5]
```

means everything from 2 through 5.

If we think in time, then:

```txt
[9, 10]
```

could mean from 9 o’clock to 10 o’clock.

The two most important questions in interval problems are:

1. Do these intervals **overlap**?
2. If they overlap, what should we do?

---

## What does overlap mean?

Suppose we have:

```txt
[1, 4] and [3, 6]
```

These overlap because they share some space.

But:

```txt
[1, 2] and [3, 5]
```

do not overlap because there is a gap between them.

A very common overlap rule is:

Two intervals overlap if the next interval starts **before or at** the current interval’s end.

In code, that often looks like:

```ts
if (nextStart <= currentEnd) {
  // overlap
}
```

---

## Why sorting helps

In many interval problems, the smartest first step is:

> Sort intervals by start time

Why?

Because then we can process the intervals from left to right.

That makes it easier to detect:

- overlap
- gaps
- merge opportunities
- schedule conflicts

Sorting turns a messy group of ranges into a cleaner line of events.

---

## When To Use Interval Thinking

A problem may be about intervals if it involves:

- ranges
- schedules
- time blocks
- start and end values
- overlap
- merge
- insert
- rooms or resources over time

A big clue is seeing data shaped like:

```txt
[start, end]
```

---

## Real-world Example

### School schedule

Suppose a school is planning room usage.

One class uses a room from:

- 9:00 to 10:00

Another uses it from:

- 9:30 to 10:30

These overlap, so the same room cannot be used for both at once.

That is an interval problem.

Or imagine coloring a line:

- one marker colors from 1 to 4
- another colors from 3 to 5

The colored sections overlap and can be merged into one larger section.

---

## A helpful type

We can represent an interval as:

```ts
type Interval = [number, number];
```

Example:

```ts
const intervals: Interval[] = [
  [1, 3],
  [2, 6],
  [8, 10],
];
```

---

## Chapter Outline

In this chapter:

- **Merge Overlapping Intervals** teaches how to combine intervals that touch or overlap
- **Insert Interval** teaches how to place a new interval into the right spot
- **Can Attend All Meetings** teaches how overlap can mean conflict
- **Minimum Meeting Rooms** teaches how many overlapping meetings happen at once
- **Interval Intersection** teaches how to find shared parts between two interval lists
- **Remove Covered Intervals** teaches how to detect intervals hidden inside bigger ones

---

# Lesson 1: Merge Overlapping Intervals

## Problem

Given a list of intervals, merge all overlapping intervals and return the merged result.

### Example

**Input:** `[[1, 3], [2, 6], [8, 10], [15, 18]]`  
**Output:** `[[1, 6], [8, 10], [15, 18]]`

Because `[1, 3]` and `[2, 6]` overlap.

---

## Intuition

This is the classic interval problem.

Plan:

1. sort intervals by start
2. keep a current interval
3. if the next interval overlaps, extend the current one
4. if it does not overlap, save the current interval and start a new one

---

## Walkthrough

Intervals:

```txt
[[1, 3], [2, 6], [8, 10], [15, 18]]
```

They are already sorted.

Start with current:
- `[1, 3]`

Next interval:
- `[2, 6]`

Since `2 <= 3`, they overlap.

Merge them:
- `[1, 6]`

Next interval:
- `[8, 10]`

Since `8 > 6`, no overlap.

Save `[1, 6]` and start new current:
- `[8, 10]`

Next interval:
- `[15, 18]`

No overlap again.

Final result:
- `[[1, 6], [8, 10], [15, 18]]`

---

## TypeScript Solution

```ts
function mergeIntervals(intervals: [number, number][]): [number, number][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result: [number, number][] = [];
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [nextStart, nextEnd] = intervals[i];

    if (nextStart <= end) {
      end = Math.max(end, nextEnd);
    } else {
      result.push([start, end]);
      [start, end] = [nextStart, nextEnd];
    }
  }

  result.push([start, end]);
  return result;
}
```

---

## Why it works

Sorting makes sure overlapping intervals appear next to each other.

Then we only need to compare the current interval to the next one.

---

## Complexity Analysis

- **Time:** `O(n log n)` because of sorting
- **Space:** `O(n)` for the result

---

## Test Cases

```ts
mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]) // [[1, 6], [8, 10], [15, 18]]
mergeIntervals([[1, 4], [4, 5]]) // [[1, 5]]
mergeIntervals([[1, 2]]) // [[1, 2]]
```

---

## Quick Check

Why do we sort first?

**Answer:** So intervals that might overlap are next to each other.

---

# Lesson 2: Insert Interval

## Problem

You are given a list of non-overlapping intervals sorted by start time, plus one new interval.

Insert the new interval into the list and merge if needed.

### Example

**Input:** `intervals = [[1, 3], [6, 9]]`, `newInterval = [2, 5]`  
**Output:** `[[1, 5], [6, 9]]`

---

## Intuition

The intervals are already sorted.

So we can move through them in three parts:

1. intervals that end before the new interval starts
2. intervals that overlap with the new interval
3. intervals that start after the new interval ends

That is a very clean way to solve it.

---

## Walkthrough

`intervals = [[1, 3], [6, 9]]`  
`newInterval = [2, 5]`

First:
- `[1, 3]` overlaps with `[2, 5]`

Merge:
- new interval becomes `[1, 5]`

Next:
- `[6, 9]` does not overlap

So result is:
- `[[1, 5], [6, 9]]`

---

## TypeScript Solution

```ts
function insertInterval(
  intervals: [number, number][],
  newInterval: [number, number]
): [number, number][] {
  const result: [number, number][] = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
```

---

## Why it works

The problem naturally breaks into:
- before
- overlapping
- after

That lets us insert and merge in one pass.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
insertInterval([[1, 3], [6, 9]], [2, 5]) // [[1, 5], [6, 9]]
insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]) // [[1, 2], [3, 10], [12, 16]]
insertInterval([], [4, 8]) // [[4, 8]]
```

---

## Pattern Reminder

When intervals are already sorted and non-overlapping, insertion problems often become much easier.

---

# Lesson 3: Can Attend All Meetings

## Problem

You are given a list of meeting time intervals.

Return `true` if one person can attend every meeting.

Return `false` if any meetings overlap.

### Example 1

**Input:** `[[0, 30], [35, 50], [60, 80]]`  
**Output:** `true`

### Example 2

**Input:** `[[0, 30], [15, 20]]`  
**Output:** `false`

---

## Intuition

A person can attend all meetings only if no two meetings overlap.

So:

1. sort by start time
2. compare each meeting to the one before it
3. if the next meeting starts before the previous one ends, that is a conflict

---

## Walkthrough

Meetings:
```txt
[[0, 30], [15, 20]]
```

Sort:
- already sorted

Compare:
- first meeting ends at `30`
- next meeting starts at `15`

Since `15 < 30`, they overlap.

So answer is `false`.

---

## TypeScript Solution

```ts
function canAttendAllMeetings(intervals: [number, number][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}
```

---

## Why it works

After sorting, any conflict must happen between neighboring meetings.

So we only need to check adjacent pairs.

---

## Complexity Analysis

- **Time:** `O(n log n)`
- **Space:** `O(1)` extra space if sorting in place

---

## Test Cases

```ts
canAttendAllMeetings([[0, 30], [35, 50], [60, 80]]) // true
canAttendAllMeetings([[0, 30], [15, 20]]) // false
canAttendAllMeetings([[5, 10]]) // true
```

---

## Quick Check

What causes a meeting conflict?

**Answer:** When the next meeting starts before the previous one ends.

---

# Lesson 4: Minimum Meeting Rooms

## Problem

You are given a list of meeting intervals.

Return the minimum number of rooms required so all meetings can happen.

### Example

**Input:** `[[0, 30], [5, 10], [15, 20]]`  
**Output:** `2`

Because:
- one room can hold `[0, 30]`
- another room is needed for `[5, 10]`
- then `[15, 20]` can reuse a room later

---

## Intuition

We want to know how many meetings are happening at the same time.

A good heap idea:

1. sort meetings by start time
2. use a min-heap to track current meeting end times
3. before adding a new meeting, remove any meetings that already ended
4. the heap size tells us how many rooms are being used right now
5. keep the largest heap size

Why a min-heap?

Because the earliest ending meeting is the one most likely to free a room first.

---

## Walkthrough

Meetings:
```txt
[[0, 30], [5, 10], [15, 20]]
```

Sort by start:
- already sorted

Start:
- add end time 30
- heap = `[30]`
- rooms = 1

Meeting `[5, 10]`
- earliest end is 30, so room not free yet
- add 10
- heap = `[10, 30]`
- rooms = 2

Meeting `[15, 20]`
- earliest end is 10, and 10 <= 15
- remove 10
- now add 20
- heap = `[20, 30]`
- rooms still = 2

Answer: 2

---

## TypeScript Heap Setup

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
```

---

## TypeScript Solution

```ts
function minMeetingRooms(intervals: [number, number][]): number {
  if (intervals.length === 0) {
    return 0;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const minHeap = new Heap<number>((a, b) => a < b);
  let maxRooms = 0;

  for (const [start, end] of intervals) {
    while (minHeap.size() > 0 && minHeap.peek()! <= start) {
      minHeap.pop();
    }

    minHeap.push(end);
    maxRooms = Math.max(maxRooms, minHeap.size());
  }

  return maxRooms;
}
```

---

## Why it works

The heap stores end times of meetings currently using rooms.

Whenever a meeting ends before the next one starts, that room becomes free.

The largest number of active meetings at once is the number of rooms needed.

---

## Complexity Analysis

- **Time:** `O(n log n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
minMeetingRooms([[0, 30], [5, 10], [15, 20]]) // 2
minMeetingRooms([[7, 10], [2, 4]]) // 1
minMeetingRooms([]) // 0
```

---

## Challenge Thought

This lesson mixes:
- intervals
- heaps

That happens a lot in scheduling problems.

---

# Lesson 5: Interval Intersection

## Problem

You are given two lists of intervals, both sorted and non-overlapping inside themselves.

Return all intersections between the two lists.

### Example

**Input:**  
`A = [[0, 2], [5, 10], [13, 23], [24, 25]]`  
`B = [[1, 5], [8, 12], [15, 24], [25, 26]]`

**Output:**  
`[[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]`

---

## Intuition

This is a great two-pointer interval problem.

We compare one interval from A and one from B.

If they overlap, the overlap is:

- start = bigger start
- end = smaller end

Then we move forward in the list whose interval ends first.

Why?

Because that interval cannot intersect anything else after its end.

---

## Walkthrough

Compare:
- `[0, 2]` and `[1, 5]`

Overlap:
- start = max(0, 1) = 1
- end = min(2, 5) = 2

So intersection is:
- `[1, 2]`

Now which ends first?
- `[0, 2]` ends first

So move A forward.

---

## TypeScript Solution

```ts
function intervalIntersection(
  A: [number, number][],
  B: [number, number][]
): [number, number][] {
  const result: [number, number][] = [];
  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    const start = Math.max(A[i][0], B[j][0]);
    const end = Math.min(A[i][1], B[j][1]);

    if (start <= end) {
      result.push([start, end]);
    }

    if (A[i][1] < B[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
```

---

## Why it works

At each step, we compare the current intervals.

If they overlap, we save the shared part.

Then we move the interval that ends first because it cannot help with future overlaps anymore.

---

## Complexity Analysis

- **Time:** `O(n + m)`
- **Space:** `O(n + m)` in the worst case for the result

---

## Test Cases

```ts
intervalIntersection(
  [[0, 2], [5, 10], [13, 23], [24, 25]],
  [[1, 5], [8, 12], [15, 24], [25, 26]]
) // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

intervalIntersection([[1, 3]], [[4, 6]]) // []
intervalIntersection([], [[1, 2]]) // []
```

---

## Quick Check

How do we compute the overlap of two intervals?

**Answer:** Use the bigger start and the smaller end.

---

# Lesson 6: Remove Covered Intervals

## Problem

Given a list of intervals, remove intervals that are completely covered by another interval.

Return the number of intervals left.

### Example

**Input:** `[[1, 4], [3, 6], [2, 8]]`  
**Output:** `2`

Because `[3, 6]` is covered by `[2, 8]`.

---

## Intuition

An interval is **covered** if it sits completely inside another one.

A smart strategy:

1. sort by:
   - start ascending
   - if starts tie, end descending
2. walk through the intervals
3. keep track of the farthest end seen so far
4. if the current interval ends before or at that farthest end, it is covered

Why sort with larger end first when starts tie?

Because then the bigger interval comes first and can cover smaller ones.

---

## Walkthrough

Intervals:
```txt
[[1, 4], [3, 6], [2, 8]]
```

Sort:
```txt
[[1, 4], [2, 8], [3, 6]]
```

Start:
- farthestEnd = 4
- count = 1

Next `[2, 8]`
- end = 8 > 4
- not covered
- count = 2
- farthestEnd = 8

Next `[3, 6]`
- end = 6 <= 8
- covered
- do not count it

Answer: 2

---

## TypeScript Solution

```ts
function removeCoveredIntervals(intervals: [number, number][]): number {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  let count = 0;
  let farthestEnd = -Infinity;

  for (const [start, end] of intervals) {
    if (end > farthestEnd) {
      count++;
      farthestEnd = end;
    }
  }

  return count;
}
```

---

## Why it works

Sorting makes sure bigger covering intervals appear before smaller ones when needed.

Then an interval is covered exactly when its end does not go farther than the best end we have already seen.

---

## Complexity Analysis

- **Time:** `O(n log n)`
- **Space:** `O(1)` extra space if sorting in place

---

## Test Cases

```ts
removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]) // 2
removeCoveredIntervals([[1, 4], [2, 3]]) // 1
removeCoveredIntervals([[1, 2], [1, 4], [3, 4]]) // 1
```

---

## Pattern Reminder

Sorting rules matter a lot in interval problems.

Sometimes changing the tie-break rule changes everything.

---

# Chapter Review

## What you learned

In this chapter, you learned that intervals represent ranges with a start and an end.

You learned how to:

- detect overlap
- merge intervals
- insert a new interval
- check schedule conflicts
- count how many rooms are needed
- find shared parts between interval lists
- remove covered intervals

---

## Pattern Summary

### Merge Overlapping Intervals
- sort by start
- merge when next start is inside current end

### Insert Interval
- handle before, overlapping, and after parts

### Can Attend All Meetings
- sort and check neighboring overlaps

### Minimum Meeting Rooms
- sort starts
- use a min-heap of end times

### Interval Intersection
- use two pointers
- overlap is bigger start and smaller end

### Remove Covered Intervals
- sort carefully
- track farthest end

---

## When this pattern is a clue

Think about interval problems when you see:

- start/end pairs
- time blocks
- overlap
- merge
- insert range
- meeting rooms
- schedule conflict

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

An interval usually has a ________ and an ________.

**Answer:** start, end

---

## 2. True or False

Sorting is often a helpful first step in interval problems.

**Answer:** True

---

## 3. Short Answer

When do two intervals overlap?

**Answer:** They overlap when one starts before the other one ends, so they share some space.

---

## 4. Short Answer

Why is sorting by start time useful?

**Answer:** Because it puts intervals in a clean left-to-right order, which makes overlap easier to check.

---

## 5. Fill in the blank

When two intervals overlap, the merged interval starts at the smaller start and ends at the larger ________.

**Answer:** end

---

## 6. Mini Coding Challenge

Write a function that returns `true` if two intervals overlap.

```ts
function overlaps(a: [number, number], b: [number, number]): boolean {
  return Math.max(a[0], b[0]) <= Math.min(a[1], b[1]);
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why meeting room problems often use a min-heap.

**Sample answer:** A min-heap quickly tells us which meeting ends earliest, so we know whether a room becomes free in time for the next meeting.

---

# Friendly Wrap-up

Intervals teach an important coding lesson:

> When something has a beginning and an ending,  
> the space between them matters.

That is why interval problems show up so often in calendars, schedules, ranges, and planning.

The more you practice intervals, the more you will notice:

- when sorting gives structure
- when overlap is the key question
- when merging makes the answer simpler
- when schedules are really just interval puzzles

That is a powerful pattern for real-world programming.
