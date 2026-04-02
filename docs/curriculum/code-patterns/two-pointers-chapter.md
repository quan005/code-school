---
title: "Two Pointers"
chapterSlug: "two-pointers"
order: 1
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 90
skills:
  - "Use two indexes to look at two places in a list"
  - "Move pointers with a reason"
  - "Explain why an algorithm is faster than brute force"
  - "Trace code by hand"
---

# Two Pointers

Welcome to **Two Pointers**!

In this chapter, we will learn how to solve problems by using **two positions** inside a list or string at the same time.

Think of a pointer as a **finger** pointing at one spot.

- One pointer = one finger
- Two pointers = two fingers

When we use two pointers, we can compare things, search faster, and avoid checking every single possibility.

---

## Chapter Goals

By the end of this chapter, you will be able to:

- explain what a pointer is
- recognize when a problem fits the two-pointer pattern
- use three two-pointer styles:
  - **inward traversal**
  - **unidirectional traversal**
  - **staged traversal**
- solve real coding problems using two pointers
- explain the time and space complexity in simple words

---

## Chapter Outline

1. [Introduction to Two Pointers](#lesson-1-introduction-to-two-pointers)
2. [Pair Sum - Sorted](#lesson-2-pair-sum---sorted)
3. [Triplet Sum](#lesson-3-triplet-sum)
4. [Largest Container](#lesson-4-largest-container)
5. [Is Palindrome Valid](#lesson-5-is-palindrome-valid)
6. [Shift Zeros to the End](#lesson-6-shift-zeros-to-the-end)
7. [Next Lexicographical Sequence](#lesson-7-next-lexicographical-sequence)
8. [Chapter Review](#chapter-review)
9. [Mastery Check](#mastery-check)

---

# Introduction to Two Pointers

## Concrete Screen Design

### Learning Goal

Teach that two pointers means watching two places at the same time and moving
with a reason.

### Habitat

`Mirror Meadow`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Mirror Meadow
- Lesson title: Two Pointers
- Progress chip: 1/7

Scene:
- A row of stepping stones
- One turtle marker on the left
- One turtle marker on the right
- A bright center path showing where the markers might meet

Support strip:
- "A pointer is a finger that points to one spot."
- "Two pointers help us compare two spots at once."

Action zone:
- Tap the left marker
- Tap the right marker
- Then choose which one should move next

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

- Background: pale meadow with a soft sky band at the top
- Markers: rounded turtle tokens with one blue scarf and one orange scarf
- Active stone: warm orange glow
- Helpful clue text: short bubbles near the active marker



### Background Design

The background for `Mirror Meadow` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of stepping stones, One turtle marker on the left, One turtle marker on the right, and A bright center path showing where the markers might meet; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of stepping stones, One turtle marker on the left, One turtle marker on the right, and A bright center path showing where the markers might meet already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Mirror Meadow` and should visually support the lesson goal: two pointers means watching two places at the same time and moving with a reason. The background should establish the world softly, but the foreground should stay centered on A row of stepping stones, One turtle marker on the left, One turtle marker on the right, and A bright center path showing where the markers might meet. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of stepping stones, One turtle marker on the left, One turtle marker on the right, and A bright center path showing where the markers might meet should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "A pointer is a finger that points to one spot." and "Two pointers help us compare two spots at once.", and the action area should invite one clear next step through Tap the left marker, Tap the right marker, and Then choose which one should move next. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of stepping stones, One turtle marker on the left, One turtle marker on the right, and A bright center path showing where the markers might meet.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "A pointer is a finger that points to one spot." and "Two pointers help us compare two spots at once.". The action zone should stay tightly focused on Tap the left marker, Tap the right marker, and Then choose which one should move next, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango says, "Let’s watch two spots at the same time."
2. The left and right markers appear on the ends of the row.
3. The child taps each marker to see which value it is watching.
4. A tiny challenge asks which marker should move when the total is too small.
5. The words `pointer`, `left`, and `right` appear after the child sees the move.

### Component Usage

- Scene Card
- Mascot speech bubble
- Progress chip
- Hint card
- Primary CTA button

## What Is a Pointer?

A **pointer** is just a variable that tells us **where we are looking**.

In an array, a pointer usually stores an **index**.

Example:

```ts
const nums = [14, 5, 5, 20]
let i = 1

console.log(nums[i]) // 5
```

Here, `i` points to index `1`, which stores the number `5`.

### Kid-Friendly Picture in Your Mind

Imagine a row of toy boxes:

```txt
index:  0   1   2   3
nums:  [14, 5, 5, 20]
```

If your finger is on box `1`, you are pointing at `5`.

That finger is like a pointer.

---

## Why Use Two Pointers?

One pointer lets us look at one thing.

Two pointers let us:

- compare two values
- move from both ends of a list
- keep track of a "good" spot and a "searching" spot
- solve some problems faster than nested loops

Example:

```ts
const nums = [14, 5, 5, 20]
let i = 0
let j = 2

console.log(nums[i], nums[j]) // 14 5
```

Now we can compare two values.

---

## Brute Force vs. Smart Movement

A lot of beginners solve comparison problems with **nested loops**.

```ts
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    // compare nums[i] and nums[j]
  }
}
```

This works, but it can be slow.

If the list has `n` items, nested loops often take about **O(n²)** time.

### What does `O(n²)` mean?

It means that as the list gets bigger, the number of checks grows **very quickly**.

If there are:
- 10 items, there can be around 100 checks
- 100 items, there can be around 10,000 checks

That is a lot!

Two-pointer solutions often take **O(n)** time instead, which is much faster.

---

## The Big Idea

Two pointers work best when the data has a **pattern we can trust**.

Examples:

- a **sorted array**
- a **palindrome**
- a list where we want to move all non-zero values forward
- a sequence where we scan once and make careful moves

If moving left or right tells us something useful, two pointers may help.

---

## Three Main Two-Pointer Strategies

## 1. Inward Traversal

Start at opposite ends and move toward the middle.

```txt
left -> [ . . . . . . ] <- right
```

Use this when:
- you compare values from both ends
- the list is sorted
- the string is symmetric, like a palindrome

Examples:
- Pair Sum - Sorted
- Largest Container
- Is Palindrome Valid

---

## 2. Unidirectional Traversal

Both pointers move in the same direction.

Often:
- one pointer **searches**
- one pointer **stores** or **tracks**

```txt
slow -> [ . . . . . . ]
fast -> [ . . . . . . ]
```

Use this when:
- you are rearranging items
- you want to keep all "good" items together
- you are compressing or cleaning data

Example:
- Shift Zeros to the End

---

## 3. Staged Traversal

One pointer searches for an important spot.
Then a second pointer helps finish the job.

Use this when:
- one moment in the list tells you where to start another action
- the problem happens in stages

Example:
- Next Lexicographical Sequence

---

## When Should You Think About Two Pointers?

Two pointers are a good idea when:

- the problem uses an **array**, **string**, or **linked list**
- the input has a **pattern**, like sorted order
- you need to find a **pair**
- you need to compare two places
- you want to solve the problem faster than checking every possibility

### Pattern Clues

Ask yourself:

- "Can I start from both ends?"
- "Can I move one pointer based on what I see?"
- "Does the list being sorted help me?"
- "Am I trying to find a pair or compare two values?"

If the answer is yes, two pointers may be the right pattern.

---

## Real-World Example: Cleaning Up Memory

Computers sometimes need to tidy up memory by moving important data together.

Imagine a long shelf with:
- some boxes we still need
- some empty gaps

A computer can use:
- one pointer to **scan** through the shelf
- another pointer to mark the next **free good spot**

When it finds a useful box, it moves it to the free spot.

That is a real-world two-pointer idea:
- one pointer searches
- one pointer tracks where the next item should go

---

## Mini Check

### 1. What does a pointer usually store in an array?
A. a color  
B. an index  
C. a loop  
D. a function  

**Answer:** B. an index

### 2. Which situation is best for inward traversal?
A. moving all zeroes to the end  
B. comparing the first and last characters of a word  
C. adding numbers to a sum one by one  
D. printing every element  

**Answer:** B. comparing the first and last characters of a word

### 3. Why are two pointers often faster than nested loops?
A. they use magic  
B. they always sort the data  
C. they avoid checking every possible pair  
D. they delete items automatically  

**Answer:** C. they avoid checking every possible pair

---

## Tiny Practice

You have a sorted array:

```ts
const nums = [1, 3, 5, 8, 10]
```

If `left = 0` and `right = 4`, then:
- `nums[left] = 1`
- `nums[right] = 10`

If the target sum is `13`, should you move `left` or `right`?

**Think:**  
`1 + 10 = 11`, which is too small.

**Answer:** Move `left` to the right so the sum gets bigger.

---

## Lesson Summary

- A pointer is a variable that stores a position.
- Two pointers let us compare and move smartly.
- Three main strategies:
  - inward traversal
  - unidirectional traversal
  - staged traversal
- Two pointers often turn a slow solution into a faster one.

---

# Lesson 2: Pair Sum - Sorted

## Concrete Screen Design

### Learning Goal

Teach that sorted order lets us move the left or right pointer with a reason.

### Habitat

`Bridge Berry Row`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Bridge Berry Row
- Lesson title: Pair Sum - Sorted
- Progress chip: 2/7

Scene:
- Five berry stones in sorted order
- One left marker and one right marker
- A target sign showing the goal sum
- The active pair lights up when selected

Support strip:
- "If the sum is too small, move left."
- "If the sum is too big, move right."

Action zone:
- Tap "Move left"
- Tap "Move right"
- Then check whether the pair matches the target

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

- Background: cream bridge path over calm blue water
- Berry stones: rounded circles with clear number labels
- Target sign: chunky orange badge
- Correct answer state: green ring around the winning pair



### Background Design

The background for `Bridge Berry Row` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo Five berry stones in sorted order, One left marker and one right marker, A target sign showing the goal sum, and The active pair lights up when selected; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If Five berry stones in sorted order, One left marker and one right marker, A target sign showing the goal sum, and The active pair lights up when selected already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Bridge Berry Row` and should visually support the lesson goal: sorted order lets us move the left or right pointer with a reason. The background should establish the world softly, but the foreground should stay centered on Five berry stones in sorted order, One left marker and one right marker, A target sign showing the goal sum, and The active pair lights up when selected. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. Five berry stones in sorted order, One left marker and one right marker, A target sign showing the goal sum, and The active pair lights up when selected should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "If the sum is too small, move left." and "If the sum is too big, move right.", and the action area should invite one clear next step through Tap "Move left", Tap "Move right", and Then check whether the pair matches the target. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through Five berry stones in sorted order, One left marker and one right marker, A target sign showing the goal sum, and The active pair lights up when selected.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "If the sum is too small, move left." and "If the sum is too big, move right.". The action zone should stay tightly focused on Tap "Move left", Tap "Move right", and Then check whether the pair matches the target, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango says, "The list is sorted, so each move teaches us something."
2. The child sees the left and right values add together.
3. The child chooses which pointer should move.
4. The wrong move shows a gentle note instead of a harsh error.
5. The winning pair glows green and the indexes pop into view.

### Component Usage

- Scene Card
- Pointer chips
- Target badge
- Hint card
- Success badge

## Problem

Given an array of integers sorted in ascending order and a target value, return the indexes of **any pair** of numbers that sum to the target.

If no pair exists, return an empty array.

### Example 1

```txt
Input: nums = [-5, -2, 3, 4, 6], target = 7
Output: [2, 3]
```

Why? Because `nums[2] + nums[3] = 3 + 4 = 7`.

### Example 2

```txt
Input: nums = [1, 1, 1], target = 2
Output: [0, 1]
```

Other correct answers could also work.

---

## Why This Problem Is Special

The array is **sorted**.

That is our clue.

Because the array is sorted:
- moving `left` right makes the value bigger or stay the same
- moving `right` left makes the value smaller or stay the same

That means we can move pointers **with a reason**.

---

## Brute Force Idea

Check every pair.

```ts
function pairSumSortedBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return []
}
```

### Why it works
It checks all pairs.

### Why it is not the best
It can take **O(n²)** time.

---

## Better Idea: Inward Traversal

Start with:
- `left` at the beginning
- `right` at the end

Then:
- if the sum is too small, move `left`
- if the sum is too big, move `right`
- if the sum matches, return the indexes

---

## Walkthrough

```txt
nums = [-5, -2, 3, 4, 6]
target = 7
```

### Step 1
- `left = 0` -> `-5`
- `right = 4` -> `6`
- sum = `1`

`1` is too small, so move `left` right.

### Step 2
- `left = 1` -> `-2`
- `right = 4` -> `6`
- sum = `4`

Still too small, so move `left` right.

### Step 3
- `left = 2` -> `3`
- `right = 4` -> `6`
- sum = `9`

Too big, so move `right` left.

### Step 4
- `left = 2` -> `3`
- `right = 3` -> `4`
- sum = `7`

We found the pair.

Return `[2, 3]`.

---

## Why Pointer Movement Makes Sense

If the sum is too small:
- we need a bigger number
- the sorted array tells us moving `left` right gives a bigger number

If the sum is too big:
- we need a smaller number
- the sorted array tells us moving `right` left gives a smaller number

That is the whole trick.

---

## TypeScript Solution

```ts
function pairSumSorted(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const sum = nums[left] + nums[right]

    if (sum < target) {
      left += 1
    } else if (sum > target) {
      right -= 1
    } else {
      return [left, right]
    }
  }

  return []
}
```

---

## Step-by-Step Rules

```txt
while left < right:
  sum = nums[left] + nums[right]

  if sum < target:
    move left right
  else if sum > target:
    move right left
  else:
    found answer
```

---

## Complexity

### Time
**O(n)**

Why?  
Each pointer only moves across the array once.

### Space
**O(1)**

Why?  
We only use a few extra variables.

---

## Test Cases

```ts
pairSumSorted([], 0) // []
pairSumSorted([1], 1) // []
pairSumSorted([2, 3], 5) // [0, 1]
pairSumSorted([2, 4], 5) // []
pairSumSorted([2, 2, 3], 5) // [0, 2] or [1, 2]
pairSumSorted([-1, 2, 3], 2) // [0, 2]
pairSumSorted([-3, -2, -1], -5) // [0, 1]
```

---

## Common Mistakes

### Mistake 1: Forgetting that the array is sorted
The whole two-pointer trick depends on sorted order.

### Mistake 2: Using `left <= right`
We want two **different** indexes, so use `left < right`.

### Mistake 3: Moving the wrong pointer
- sum too small -> move `left`
- sum too big -> move `right`

---

## Quick Check

If `nums[left] + nums[right]` is smaller than the target, which pointer should move?

**Answer:** `left`

---

## Practice Challenge

Try this by hand:

```txt
nums = [1, 2, 4, 7, 11]
target = 9
```

Start:
- `left = 0`
- `right = 4`

Can you trace the steps and find the answer?

**Answer:** `[1, 3]` because `2 + 7 = 9`

---

## Interview Pattern Reminder

The most important clue in this problem is:

> **The input is sorted.**

When a problem gives you sorted data, stop and ask:
- can I use two pointers?
- can I use binary search?

---

## Lesson Summary

- Sorted order helps us move pointers smartly.
- Start at both ends.
- Move `left` when the sum is too small.
- Move `right` when the sum is too large.
- This turns an **O(n²)** idea into **O(n)**.

---

# Lesson 3: Triplet Sum

## Concrete Screen Design

### Learning Goal

Teach that we can fix one number first, then use two pointers to search for the
other two numbers.

### Habitat

`Picnic Path`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Picnic Path
- Lesson title: Triplet Sum
- Progress chip: 3/7

Scene:
- A sorted picnic row of number tiles
- One fixed flag on the first chosen tile
- Two moving markers searching the rest of the row
- A running target bubble for the remaining sum

Support strip:
- "Pick one number first."
- "Then solve the smaller pair-sum problem."

Action zone:
- Tap a fixed first number
- Move the left or right search marker
- Decide whether the triplet works

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

- Background: picnic blanket colors with roomy tile spacing
- Fixed tile: purple flag marker
- Search markers: blue and orange explorer chips
- Remaining target bubble: small yellow helper badge



### Background Design

The background for `Picnic Path` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A sorted picnic row of number tiles, One fixed flag on the first chosen tile, Two moving markers searching the rest of the row, and A running target bubble for the remaining sum; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A sorted picnic row of number tiles, One fixed flag on the first chosen tile, Two moving markers searching the rest of the row, and A running target bubble for the remaining sum already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Picnic Path` and should visually support the lesson goal: we can fix one number first, then use two pointers to search for the other two numbers. The background should establish the world softly, but the foreground should stay centered on A sorted picnic row of number tiles, One fixed flag on the first chosen tile, Two moving markers searching the rest of the row, and A running target bubble for the remaining sum. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A sorted picnic row of number tiles, One fixed flag on the first chosen tile, Two moving markers searching the rest of the row, and A running target bubble for the remaining sum should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Pick one number first." and "Then solve the smaller pair-sum problem.", and the action area should invite one clear next step through Tap a fixed first number, Move the left or right search marker, and Decide whether the triplet works. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A sorted picnic row of number tiles, One fixed flag on the first chosen tile, Two moving markers searching the rest of the row, and A running target bubble for the remaining sum.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Pick one number first." and "Then solve the smaller pair-sum problem.". The action zone should stay tightly focused on Tap a fixed first number, Move the left or right search marker, and Decide whether the triplet works, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango says, "Freeze one number first."
2. The child picks the first tile and sees the new smaller target.
3. Two search markers appear on the rest of the row.
4. The child moves the markers until the three-number total matches or fails.
5. The lesson reveals that the big problem becomes a smaller pair-sum problem.

### Component Usage

- Scene Card
- Fixed-value flag
- Pointer chips
- Hint card
- Success badge

## Problem

Given an array of integers and a target value, return `true` if there exists **any three numbers** whose sum equals the target. Otherwise, return `false`.

### Example 1

```txt
Input: nums = [-1, 0, 2, 3], target = 2
Output: true
```

Why? Because `-1 + 0 + 3 = 2`.

### Example 2

```txt
Input: nums = [1, 2, 4, 9], target = 20
Output: false
```

---

## Big Idea

This problem sounds bigger than Pair Sum, but it is really:

> **Pick one number, then find a pair that makes the rest.**

That means we can combine:
- one loop
- plus the two-pointer trick

---

## First Step: Sort the Array

Why sort?

Because after sorting, we can use inward traversal to search for the last two numbers.

---

## Brute Force Idea

Check every triplet.

```ts
function tripletSumBruteForce(nums: number[], target: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          return true
        }
      }
    }
  }

  return false
}
```

This works, but it takes about **O(n³)** time.

That is very slow for large arrays.

---

## Smarter Idea

1. Sort the array.
2. Use `i` to choose the first number.
3. Use `left` and `right` to find the other two numbers.

---

## Walkthrough

```txt
nums = [-1, 0, 2, 3]
target = 2
```

The array is already sorted.

### Pick `i = 0`
- first number = `-1`
- now we need two numbers that sum to `3`

Set:
- `left = 1` -> `0`
- `right = 3` -> `3`

Check:
- `0 + 3 = 3`

That matches what we need.

So the triplet exists.

Return `true`.

---

## Another Example

```txt
nums = [1, 2, 4, 9]
target = 20
```

### Pick `i = 0`
- first number = `1`
- need pair sum = `19`

Try:
- `2 + 9 = 11` -> too small
- move `left`
- `4 + 9 = 13` -> too small
- move `left`

No pair.

### Pick `i = 1`
- first number = `2`
- need pair sum = `18`

Try:
- `4 + 9 = 13` -> too small

No pair.

Done. Return `false`.

---

## TypeScript Solution

```ts
function tripletSum(nums: number[], target: number): boolean {
  nums = [..nums].sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    const needed = target - nums[i]

    while (left < right) {
      const sum = nums[left] + nums[right]

      if (sum < needed) {
        left += 1
      } else if (sum > needed) {
        right -= 1
      } else {
        return true
      }
    }
  }

  return false
}
```

---

## Why It Works

For each starting number:
- we lock that number in place
- then solve a smaller pair-sum problem

That is why this feels like:
- **one loop**
- plus **two pointers**

---

## Complexity

### Time
Sorting takes **O(n log n)**.

Then the outer loop plus inner pointer scan takes about **O(n²)**.

Final answer: **O(n²)**

### Space
If we copy the array before sorting, that uses extra space.

In this version, space is about **O(n)** because of the copy.

If we sort in place, the extra space may be smaller depending on the sorting details.

---

## Test Cases

```ts
tripletSum([-1, 0, 2, 3], 2) // true
tripletSum([1, 2, 4, 9], 20) // false
tripletSum([0, 0, 0], 0) // true
tripletSum([5, 1, 3, 7], 9) // true
tripletSum([], 0) // false
tripletSum([1, 2], 3) // false
```

---

## Common Mistakes

### Mistake 1: Forgetting to sort
Without sorting, you cannot move `left` and `right` logically.

### Mistake 2: Starting `left` at `0`
It should start at `i + 1`, because the first number is already chosen.

### Mistake 3: Not leaving room for three numbers
The outer loop only needs to run to `nums.length - 3`.

---

## Quick Check

What smaller problem are we solving inside Triplet Sum?

**Answer:** Pair Sum

---

## Mini Practice

Trace this:

```txt
nums = [3, 1, 4, 2]
target = 9
```

Sorted array:
```txt
[1, 2, 3, 4]
```

Can you find a triplet?

**Answer:** Yes, `2 + 3 + 4 = 9`

---

## Lesson Summary

- Sort first.
- Pick one number.
- Use two pointers to find the other two.
- This is much faster than checking every triplet.

---

# Lesson 4: Largest Container

## Concrete Screen Design

### Learning Goal

Teach that the shorter side limits the water, so that is the side we should
move.

### Habitat

`Harbor Heights`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Harbor Heights
- Lesson title: Largest Container
- Progress chip: 4/7

Scene:
- Vertical post bars standing on water
- One left post and one right post highlighted
- A pale blue water fill between them
- A size badge showing current container area

Support strip:
- "The shorter wall limits the water."
- "Move the shorter side, not the taller side."

Action zone:
- Compare the two wall heights
- Choose which side should move
- Watch the water area change

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

- Background: harbor sky with a soft blue water band
- Posts: thick rounded bars with height marks
- Water: transparent blue fill that rises only to the shorter wall
- Area badge: large yellow circle near the water



### Background Design

The background for `Harbor Heights` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo Vertical post bars standing on water, One left post and one right post highlighted, A pale blue water fill between them, and A size badge showing current container area; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If Vertical post bars standing on water, One left post and one right post highlighted, A pale blue water fill between them, and A size badge showing current container area already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Harbor Heights` and should visually support the lesson goal: the shorter side limits the water, so that is the side we should move. The background should establish the world softly, but the foreground should stay centered on Vertical post bars standing on water, One left post and one right post highlighted, A pale blue water fill between them, and A size badge showing current container area. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. Vertical post bars standing on water, One left post and one right post highlighted, A pale blue water fill between them, and A size badge showing current container area should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "The shorter wall limits the water." and "Move the shorter side, not the taller side.", and the action area should invite one clear next step through Compare the two wall heights, Choose which side should move, and Watch the water area change. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through Vertical post bars standing on water, One left post and one right post highlighted, A pale blue water fill between them, and A size badge showing current container area.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "The shorter wall limits the water." and "Move the shorter side, not the taller side.". The action zone should stay tightly focused on Compare the two wall heights, Choose which side should move, and Watch the water area change, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango says, "The shorter wall is the limit."
2. Water fills between the two chosen posts.
3. The child taps the shorter wall to move it inward.
4. The water redraws to show the new area.
5. The lesson repeats that a taller wall cannot help if the shorter wall stays short.

### Component Usage

- Scene Card
- Water-area overlay
- Decision chips
- Hint card
- Success badge

## Problem

You are given an array `heights`.

Each height is like a wall standing upright.

Choose two walls that can hold the **most water** together.

The amount of water depends on:
- the **shorter** wall
- the **distance** between the walls

Return the largest area.

### Example

```txt
Input: heights = [1, 7, 2, 5, 4, 7, 3, 6]
Output: 36
```

One best choice is height `7` at index `1` and height `6` at index `7`.

- width = `7 - 1 = 6`
- height = `min(7, 6) = 6`
- area = `6 * 6 = 36`

---

## Visual Idea

Picture two walls with water between them.

The water level can only rise as high as the **shorter wall**.

So:

```txt
area = width * min(leftHeight, rightHeight)
```

---

## Brute Force Idea

Try every pair of walls.

```ts
function largestContainerBruteForce(heights: number[]): number {
  let best = 0

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const width = j - i
      const height = Math.min(heights[i], heights[j])
      best = Math.max(best, width * height)
    }
  }

  return best
}
```

This works, but takes **O(n²)** time.

---

## Better Idea: Start Wide

Use two pointers:
- `left = 0`
- `right = heights.length - 1`

This starts with the **widest** possible container.

At each step:
1. compute the area
2. keep the best area seen so far
3. move the shorter wall inward

---

## The Important Rule

Always move the pointer at the **shorter wall**.

Why?

Because the shorter wall is limiting the water.

If you move the taller wall:
- the width gets smaller
- the shorter wall stays the same
- so it is hard to do better

If you move the shorter wall:
- the width gets smaller
- but maybe the new wall is taller
- that gives us a chance to improve

---

## Walkthrough

```txt
heights = [1, 7, 2, 5, 4, 7, 3, 6]
```

### Step 1
- `left = 0` -> `1`
- `right = 7` -> `6`
- width = `7`
- area = `7 * min(1, 6) = 7`

Best so far = `7`

Shorter wall is `1`, so move `left`.

### Step 2
- `left = 1` -> `7`
- `right = 7` -> `6`
- width = `6`
- area = `6 * min(7, 6) = 36`

Best so far = `36`

Shorter wall is `6`, so move `right`.

Keep going until pointers meet.

---

## TypeScript Solution

```ts
function largestContainer(heights: number[]): number {
  let left = 0
  let right = heights.length - 1
  let best = 0

  while (left < right) {
    const width = right - left
    const height = Math.min(heights[left], heights[right])
    const area = width * height

    best = Math.max(best, area)

    if (heights[left] < heights[right]) {
      left += 1
    } else {
      right -= 1
    }
  }

  return best
}
```

---

## Complexity

### Time
**O(n)**

Each pointer moves inward across the list at most once.

### Space
**O(1)**

We only use a few variables.

---

## Test Cases

```ts
largestContainer([1, 7, 2, 5, 4, 7, 3, 6]) // 36
largestContainer([1, 1]) // 1
largestContainer([4]) // 0
largestContainer([]) // 0
largestContainer([2, 3, 4, 5, 18, 17, 6]) // 17
```

---

## Common Mistakes

### Mistake 1: Moving the taller wall
You should move the **shorter** wall.

### Mistake 2: Forgetting to calculate width
Width is the distance between indexes:
```ts
right - left
```

### Mistake 3: Using the taller height
Water is limited by the shorter wall:
```ts
Math.min(heights[left], heights[right])
```

---

## Quick Check

Why do we move the shorter wall?

**Answer:** Because the shorter wall is limiting the area. Moving it gives us a chance to find a taller wall.

---

## Mini Practice

What is the area using indexes `0` and `3` in this array?

```txt
heights = [3, 1, 2, 4]
```

- width = `3`
- shorter height = `3`
- area = `9`

**Answer:** `9`

---

## Lesson Summary

- Start wide.
- Compute area each time.
- Move the shorter wall inward.
- Keep track of the best area.

---

# Lesson 5: Is Palindrome Valid

## Concrete Screen Design

### Learning Goal

Teach that matching from both ends helps us test whether a word or phrase reads
the same forward and backward.

### Habitat

`Echo Gate`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Echo Gate
- Lesson title: Is Palindrome Valid
- Progress chip: 5/7

Scene:
- A row of letter lanterns
- One left marker on the first letter
- One right marker on the last letter
- A mirror arch in the middle

Support strip:
- "Compare the outside letters first."
- "Skip spaces and punctuation if the rule says to ignore them."

Action zone:
- Tap the next left letter
- Tap the next right letter
- Decide if the two letters match

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

- Background: twilight path with a glowing mirror gate
- Letter lanterns: rounded tiles with big lowercase letters
- Matching letters: soft green pulse
- Mismatch state: gentle wiggle and helper note



### Background Design

The background for `Echo Gate` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of letter lanterns, One left marker on the first letter, One right marker on the last letter, and A mirror arch in the middle; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of letter lanterns, One left marker on the first letter, One right marker on the last letter, and A mirror arch in the middle already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Echo Gate` and should visually support the lesson goal: matching from both ends helps us test whether a word or phrase reads the same forward and backward. The background should establish the world softly, but the foreground should stay centered on A row of letter lanterns, One left marker on the first letter, One right marker on the last letter, and A mirror arch in the middle. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of letter lanterns, One left marker on the first letter, One right marker on the last letter, and A mirror arch in the middle should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Compare the outside letters first." and "Skip spaces and punctuation if the rule says to ignore them.", and the action area should invite one clear next step through Tap the next left letter, Tap the next right letter, and Decide if the two letters match. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of letter lanterns, One left marker on the first letter, One right marker on the last letter, and A mirror arch in the middle.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Compare the outside letters first." and "Skip spaces and punctuation if the rule says to ignore them.". The action zone should stay tightly focused on Tap the next left letter, Tap the next right letter, and Decide if the two letters match, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango says, "Start on the outside."
2. The child compares the first and last useful letters.
3. If they match, both markers move inward together.
4. If they do not match, the screen pauses and explains why the word fails.
5. The lesson reveals that palindrome checking is inward traversal.

### Component Usage

- Scene Card
- Letter tiles
- Mascot speech bubble
- Hint card
- Success badge

## Problem

A palindrome is something that reads the same forward and backward.

Examples:
- `"racecar"` is a palindrome
- `"level"` is a palindrome
- `"hello"` is not a palindrome

Given a string, return `true` if it is a palindrome and `false` otherwise.

### Example 1

```txt
Input: "racecar"
Output: true
```

### Example 2

```txt
Input: "rocket"
Output: false
```

---

## Why Two Pointers Help

Palindromes have a special pattern:
- the first character should match the last
- the second should match the second-to-last
- and so on

That means inward traversal is perfect.

---

## Plan

1. Put `left` at the start
2. Put `right` at the end
3. Compare the letters
4. If they do not match, return `false`
5. If they do match, move inward
6. If everything matches, return `true`

---

## Walkthrough

### Example: `"racecar"`

- `left = 0` -> `'r'`
- `right = 6` -> `'r'`
- match

Move inward.

- `left = 1` -> `'a'`
- `right = 5` -> `'a'`
- match

Move inward.

- `left = 2` -> `'c'`
- `right = 4` -> `'c'`
- match

Move inward.

Now both meet in the middle at `'e'`.

Return `true`.

---

## Another Example: `"rocket"`

- `'r'` vs `'t'`
- not equal

Return `false` right away.

---

## TypeScript Solution

```ts
function isPalindromeValid(word: string): boolean {
  let left = 0
  let right = word.length - 1

  while (left < right) {
    if (word[left] !== word[right]) {
      return false
    }

    left += 1
    right -= 1
  }

  return true
}
```

---

## Complexity

### Time
**O(n)**

We compare each character at most once.

### Space
**O(1)**

We only use two pointers.

---

## Test Cases

```ts
isPalindromeValid("racecar") // true
isPalindromeValid("level") // true
isPalindromeValid("a") // true
isPalindromeValid("") // true
isPalindromeValid("ab") // false
isPalindromeValid("rocket") // false
```

---

## Common Mistakes

### Mistake 1: Comparing the whole word backwards using extra memory
That can work, but the two-pointer method uses less extra space.

### Mistake 2: Using `left <= right`
That can still work, but `left < right` is simpler because once the pointers meet, all needed comparisons are done.

### Mistake 3: Forgetting that an empty string is a palindrome
Reading nothing forward and backward is still the same.

---

## Extension Idea

Sometimes palindrome problems ignore:
- spaces
- punctuation
- uppercase vs lowercase

Example:

```txt
"A man, a plan, a canal: Panama"
```

That version needs a little extra cleaning first.

But the inward two-pointer idea is still the same.

---

## Quick Check

What kind of pattern makes this a two-pointer problem?

**Answer:** Symmetry

---

## Mini Practice

Is `"abba"` a palindrome?

Check:
- `'a'` vs `'a'`
- `'b'` vs `'b'`

**Answer:** Yes

---

## Lesson Summary

- Palindromes are symmetric.
- Compare both ends.
- Move inward.
- Stop early if characters do not match.

---

# Lesson 6: Shift Zeros to the End

## Concrete Screen Design

### Learning Goal

Teach that one pointer can search while another pointer tracks the next good
spot for a non-zero value.

### Habitat

`Supply Shelf`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Supply Shelf
- Lesson title: Shift Zeros to the End
- Progress chip: 6/7

Scene:
- A row of item crates
- One search marker scanning each crate
- One storage marker showing the next good spot
- Zero crates shown as faded empty boxes

Support strip:
- "The search pointer looks at every box."
- "The storage pointer marks the next good spot."

Action zone:
- Tap the next non-zero item
- Move it to the good spot
- Leave zero crates for the end

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

- Background: warm wooden shelf scene
- Non-zero crates: full colorful boxes
- Zero crates: pale empty boxes with a soft gray label
- Swap motion: quick slide with a calm bounce



### Background Design

The background for `Supply Shelf` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of item crates, One search marker scanning each crate, One storage marker showing the next good spot, and Zero crates shown as faded empty boxes; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of item crates, One search marker scanning each crate, One storage marker showing the next good spot, and Zero crates shown as faded empty boxes already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Supply Shelf` and should visually support the lesson goal: one pointer can search while another pointer tracks the next good spot for a non-zero value. The background should establish the world softly, but the foreground should stay centered on A row of item crates, One search marker scanning each crate, One storage marker showing the next good spot, and Zero crates shown as faded empty boxes. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of item crates, One search marker scanning each crate, One storage marker showing the next good spot, and Zero crates shown as faded empty boxes should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "The search pointer looks at every box." and "The storage pointer marks the next good spot.", and the action area should invite one clear next step through Tap the next non-zero item, Move it to the good spot, and Leave zero crates for the end. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of item crates, One search marker scanning each crate, One storage marker showing the next good spot, and Zero crates shown as faded empty boxes.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "The search pointer looks at every box." and "The storage pointer marks the next good spot.". The action zone should stay tightly focused on Tap the next non-zero item, Move it to the good spot, and Leave zero crates for the end, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango says, "Keep the useful boxes together."
2. The search marker scans one crate at a time.
3. When the child finds a non-zero item, it slides to the storage marker.
4. The storage marker moves forward to the next good spot.
5. The screen shows how zeros naturally end up at the back.

### Component Usage

- Scene Card
- Dual pointer chips
- Swap animation cue
- Hint card
- Success badge

## Problem

Given an array of numbers, move all `0`s to the end while keeping the order of the non-zero numbers the same.

Return the updated array.

### Example

```txt
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
```

---

## Why This Is a Two-Pointer Problem

We want to:
- scan through the array
- place good numbers at the front

That means:
- one pointer can **search**
- one pointer can **store**

This is unidirectional traversal.

---

## Pointer Jobs

- `read` scans every index
- `write` marks where the next non-zero number should go

When `read` sees a non-zero number:
- copy it to `write`
- move `write`

After that, fill the rest with zeros.

---

## Walkthrough

```txt
nums = [0, 1, 0, 3, 12]
```

Start:
- `write = 0`

### read = 0
- `nums[0] = 0`
- skip it

### read = 1
- `nums[1] = 1`
- place `1` at `nums[write]`
- array becomes `[1, 1, 0, 3, 12]`
- move `write` to `1`

### read = 2
- value is `0`
- skip

### read = 3
- value is `3`
- place at `nums[1]`
- array becomes `[1, 3, 0, 3, 12]`
- move `write` to `2`

### read = 4
- value is `12`
- place at `nums[2]`
- array becomes `[1, 3, 12, 3, 12]`
- move `write` to `3`

Now fill the rest with zeros:
- `nums[3] = 0`
- `nums[4] = 0`

Final:
```txt
[1, 3, 12, 0, 0]
```

---

## TypeScript Solution

```ts
function shiftZerosToTheEnd(nums: number[]): number[] {
  let write = 0

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read]
      write += 1
    }
  }

  while (write < nums.length) {
    nums[write] = 0
    write += 1
  }

  return nums
}
```

---

## Why It Works

At all times:
- everything before `write` is already in the correct place
- `read` keeps searching for the next non-zero number

This is a great example of two pointers moving in the same direction for different jobs.

---

## Complexity

### Time
**O(n)**

We scan the array and then fill the rest with zeros.

### Space
**O(1)**

We change the array in place.

---

## Test Cases

```ts
shiftZerosToTheEnd([0, 1, 0, 3, 12]) // [1, 3, 12, 0, 0]
shiftZerosToTheEnd([1, 2, 3]) // [1, 2, 3]
shiftZerosToTheEnd([0, 0, 0]) // [0, 0, 0]
shiftZerosToTheEnd([]) // []
shiftZerosToTheEnd([4, 0, 5, 0, 0, 2]) // [4, 5, 2, 0, 0, 0]
```

---

## Common Mistakes

### Mistake 1: Sorting the array
Sorting changes the order of the non-zero numbers. We must keep their order.

### Mistake 2: Forgetting to fill the rest with zeros
After moving non-zero values forward, the leftover spots must become zero.

### Mistake 3: Moving `write` on zero values
Only move `write` when you place a non-zero value.

---

## Quick Check

Which pointer searches through every element?

**Answer:** `read`

Which pointer tracks where the next non-zero number should go?

**Answer:** `write`

---

## Mini Practice

Trace this:

```txt
[2, 0, 5, 0]
```

After moving non-zero values forward:
```txt
[2, 5, ?, ?]
```

What should fill the last two spots?

**Answer:** `0, 0`

---

## Lesson Summary

- This is unidirectional traversal.
- `read` searches.
- `write` stores.
- Keep non-zero values in order.
- Fill the rest with zeros.

---

# Lesson 7: Next Lexicographical Sequence

## Concrete Screen Design

### Learning Goal

Teach that this two-pointer lesson happens in stages: find the pivot, swap with the next bigger value, then reverse the tail.

### Habitat

`Flag Parade`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Flag Parade
- Lesson title: Next Lexicographical Sequence
- Progress chip: 7/7

Scene:
- A parade road with numbered flags in a row
- A purple glow around the pivot flag
- A gold swap marker over the next bigger flag
- A pale blue outline around the tail section to fix

Support strip:
- "Find the pivot first."
- "Then swap and fix the tail."

Action zone:
- Step 1 card: search from the right for the first drop
- Step 2 card: pick the next bigger flag
- Step 3 card: reverse the tail

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Use a parade road with confetti dots and soft flag poles so the sequence feels playful instead of abstract. The pivot should get a purple spotlight because it is the special turning point. The tail should have a calm blue outline so children can see which part gets reorganized after the swap.



### Background Design

The background for `Flag Parade` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A parade road with numbered flags in a row, A purple glow around the pivot flag, A gold swap marker over the next bigger flag, and A pale blue outline around the tail section to fix; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A parade road with numbered flags in a row, A purple glow around the pivot flag, A gold swap marker over the next bigger flag, and A pale blue outline around the tail section to fix already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Flag Parade` and should visually support the lesson goal: this two-pointer lesson happens in stages: find the pivot, swap with the next bigger value, then reverse the tail. The background should establish the world softly, but the foreground should stay centered on A parade road with numbered flags in a row, A purple glow around the pivot flag, A gold swap marker over the next bigger flag, and A pale blue outline around the tail section to fix. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A parade road with numbered flags in a row, A purple glow around the pivot flag, A gold swap marker over the next bigger flag, and A pale blue outline around the tail section to fix should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Find the pivot first." and "Then swap and fix the tail.", and the action area should invite one clear next step through Step 1 card: search from the right for the first drop, Step 2 card: pick the next bigger flag, and Step 3 card: reverse the tail. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A parade road with numbered flags in a row, A purple glow around the pivot flag, A gold swap marker over the next bigger flag, and A pale blue outline around the tail section to fix.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Find the pivot first." and "Then swap and fix the tail.". The action zone should stay tightly focused on Step 1 card: search from the right for the first drop, Step 2 card: pick the next bigger flag, and Step 3 card: reverse the tail, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango says this problem happens in careful stages, not one giant move.
2. The learner scans from the right until the first "drop" is found.
3. The next bigger flag glows to show the swap choice.
4. The tail flips into ascending order with a gentle animation.
5. The lesson explains that the swap makes the sequence bigger, and the reversed tail keeps it only a little bigger.

### Component Usage

- Scene Card
- Pivot spotlight chip
- Tail-group outline
- Step cards for pivot, swap, and reverse
- Hint card

## Problem

Given an array of numbers, rearrange it into the **next lexicographical sequence**.

That means the next arrangement in dictionary-like order.

That phrase is a mouthful, so here is the simple version:

> "Find the next number order you would see if all the orders were lined up from smallest to biggest."

If no larger arrangement exists, rearrange it into the smallest possible order.

### Example 1

```txt
Input: [1, 2, 3]
Output: [1, 3, 2]
```

### Example 2

```txt
Input: [3, 2, 1]
Output: [1, 2, 3]
```

### Example 3

```txt
Input: [1, 3, 2]
Output: [2, 1, 3]
```

---

## What Does "Next" Mean?

Imagine all orderings of `[1, 2, 3]` in sorted order:

```txt
[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]
```

The "next" sequence after `[1, 2, 3]` is `[1, 3, 2]`.

The "next" sequence after `[3, 2, 1]` does not exist, so we loop back to the smallest:
`[1, 2, 3]`.

---

## Why This Is a Staged Traversal Problem

We do not simply move two pointers inward the whole time.

Instead, the solution happens in stages:

1. find the first place from the right where the order goes up
2. find the next bigger value to swap with it
3. reverse the tail to make it as small as possible

That is why this is a staged two-pointer idea.

---

## The Key Insight

If you scan from right to left and see numbers going down like this:

```txt
5, 4, 3, 2
```

that part is already the biggest ordering for those digits.

To make the whole array just a little bigger:
- find the first place where we can increase something
- swap carefully
- then reset the rest to the smallest order

---

## Step-by-Step Plan

### Step 1: Find the pivot

Scan from right to left and find the first index `i` where:

```txt
nums[i] < nums[i + 1]
```

This is the place we can make the number bigger.

### Step 2: Find the swap spot

Scan from the right again and find the first number bigger than `nums[i]`.

Swap them.

### Step 3: Reverse the tail

Everything after index `i` should be reversed so it becomes the smallest possible order.

---

## Walkthrough 1

```txt
nums = [1, 2, 3]
```

### Find pivot
From the right:
- `2 < 3`, so pivot is index `1`

### Find swap spot
From the right, first number bigger than `2` is `3`

Swap:
```txt
[1, 3, 2]
```

### Reverse tail
The tail has only one value, so it stays the same.

Answer:
```txt
[1, 3, 2]
```

---

## Walkthrough 2

```txt
nums = [1, 3, 2]
```

### Find pivot
From the right:
- `3 < 2`? no
- `1 < 3`? yes

Pivot is index `0` with value `1`

### Find swap spot
From the right, first value bigger than `1` is `2`

Swap:
```txt
[2, 3, 1]
```

### Reverse tail after index `0`
Reverse `[3, 1]` to `[1, 3]`

Final:
```txt
[2, 1, 3]
```

---

## Walkthrough 3

```txt
nums = [3, 2, 1]
```

There is no pivot, because the entire array is going down.

That means this is already the biggest order.

So reverse the whole array:

```txt
[1, 2, 3]
```

---

## TypeScript Solution

```ts
function nextLexicographicalSequence(nums: number[]): number[] {
  let pivot = nums.length - 2

  while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) {
    pivot -= 1
  }

  if (pivot >= 0) {
    let swapIndex = nums.length - 1

    while (nums[swapIndex] <= nums[pivot]) {
      swapIndex -= 1
    }

    ;[nums[pivot], nums[swapIndex]] = [nums[swapIndex], nums[pivot]]
  }

  let left = pivot + 1
  let right = nums.length - 1

  while (left < right) {
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
    left += 1
    right -= 1
  }

  return nums
}
```

---

## Why the Reverse Works

After the swap, the part to the right of the pivot is still in descending order.

Reversing it makes it ascending order, which is the **smallest possible tail**.

That gives us the very next sequence, not a much bigger one.

---

## Complexity

### Time
**O(n)**

We scan from the right, maybe scan again, and reverse part of the array.

### Space
**O(1)**

We change the array in place.

---

## Test Cases

```ts
nextLexicographicalSequence([1, 2, 3]) // [1, 3, 2]
nextLexicographicalSequence([3, 2, 1]) // [1, 2, 3]
nextLexicographicalSequence([1, 3, 2]) // [2, 1, 3]
nextLexicographicalSequence([1, 1, 5]) // [1, 5, 1]
nextLexicographicalSequence([2]) // [2]
```

---

## Common Mistakes

### Mistake 1: Swapping with the wrong number
You need the **smallest bigger number on the right**, which is found by scanning from the end.

### Mistake 2: Sorting the whole array after swapping
You only need to reverse the tail.

### Mistake 3: Forgetting the "all descending" case
If no pivot exists, reverse the whole array.

---

## Quick Check

Why do we reverse the tail after the swap?

**Answer:** To make the rest of the sequence as small as possible.

---

## Mini Practice

Find the next sequence after:

```txt
[1, 4, 3, 2]
```

Try it before looking below.

**Answer:** `[2, 1, 3, 4]`

---

## Lesson Summary

- This problem works in stages.
- Find the pivot.
- Find the next bigger number.
- Swap them.
- Reverse the tail.

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review the three two-pointer styles and help the learner choose the right move from visual clues.

### Habitat

`Mirror Meadow Review Board`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Mirror Meadow Review Board
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A classroom board with three mini-scenes
- Mini-scene 1: inward traversal
- Mini-scene 2: unidirectional traversal
- Mini-scene 3: staged traversal

Support strip:
- "Ask which style fits the clue."
- "Use the scene before the big vocabulary word."

Action zone:
- Choose the matching two-pointer style
- Explain which pointer should move next
- Match a problem card to a scene card

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review board should feel like a meadow classroom wall with pinned recap cards. Each recap card should reuse the chapter colors so children quickly connect style to visual pattern. Green check bursts should feel celebratory but calm, and retry messages should stay gentle.



### Background Design

The background for `Mirror Meadow Review Board` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A classroom board with three mini-scenes, Mini-scene 1: inward traversal, Mini-scene 2: unidirectional traversal, and Mini-scene 3: staged traversal; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A classroom board with three mini-scenes, Mini-scene 1: inward traversal, Mini-scene 2: unidirectional traversal, and Mini-scene 3: staged traversal already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Mirror Meadow Review Board` and should visually support the lesson goal: review the three two-pointer styles and help the learner choose the right move from visual clues. The background should establish the world softly, but the foreground should stay centered on A classroom board with three mini-scenes, Mini-scene 1: inward traversal, Mini-scene 2: unidirectional traversal, and Mini-scene 3: staged traversal. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A classroom board with three mini-scenes, Mini-scene 1: inward traversal, Mini-scene 2: unidirectional traversal, and Mini-scene 3: staged traversal should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask which style fits the clue." and "Use the scene before the big vocabulary word.", and the action area should invite one clear next step through Choose the matching two-pointer style, Explain which pointer should move next, and Match a problem card to a scene card. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A classroom board with three mini-scenes, Mini-scene 1: inward traversal, Mini-scene 2: unidirectional traversal, and Mini-scene 3: staged traversal.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask which style fits the clue." and "Use the scene before the big vocabulary word.". The action zone should stay tightly focused on Choose the matching two-pointer style, Explain which pointer should move next, and Match a problem card to a scene card, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango introduces the review as a style-matching game.
2. The learner taps a recap card and sees a mini-scene open larger.
3. The screen asks which two-pointer style fits the clue.
4. The support strip explains the answer in one short sentence.
5. A final prompt points the learner toward mastery.

### Component Usage

- Scene Cards
- Recap choice cards
- Mascot speech bubble
- Hint card
- Next-step panel

## The Three Two-Pointer Styles

### 1. Inward Traversal
Use two pointers from opposite ends.

Good for:
- sorted pair problems
- comparing both ends
- symmetry

Used in:
- Pair Sum - Sorted
- Largest Container
- Is Palindrome Valid

### 2. Unidirectional Traversal
Use two pointers moving the same way.

Good for:
- rearranging items
- tracking a good write position
- compressing data

Used in:
- Shift Zeros to the End

### 3. Staged Traversal
One pointer finds an important place.
Another pointer helps finish the job.

Good for:
- multi-step rearrangement
- problems with a pivot or special turning point

Used in:
- Next Lexicographical Sequence

---

## Chapter Vocabulary

- **pointer**: a variable storing a position
- **index**: a numbered spot in an array
- **sorted**: arranged in order
- **palindrome**: reads the same forward and backward
- **pivot**: a special point where change begins
- **lexicographical order**: dictionary-like order

---

## Fast Recap by Problem

### Pair Sum - Sorted
Clue: sorted array  
Move:
- sum too small -> `left++`
- sum too big -> `right--`

### Triplet Sum
Clue: can turn it into pair sum  
Plan:
- sort
- choose one number
- use two pointers for the rest

### Largest Container
Clue: widest first, shorter wall matters  
Move:
- move the shorter wall

### Is Palindrome Valid
Clue: symmetry  
Move:
- compare ends and move inward

### Shift Zeros to the End
Clue: keep good numbers in order  
Pointers:
- `read`
- `write`

### Next Lexicographical Sequence
Clue: multi-stage rearrangement  
Plan:
- find pivot
- swap
- reverse tail

---

## Big Pattern Questions

Ask these when solving a new problem:

1. Is the input an array or string?
2. Is it sorted or predictable?
3. Can I compare two places?
4. Do I need to find a pair?
5. Can one pointer search while another tracks?

If yes, try two pointers.

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can choose and use the correct two-pointer move with much less support.

### Habitat

`Mirror Meadow Challenge Trail`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Mirror Meadow Challenge Trail
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused challenge scene
- Two markers already in place
- A target card near the scene
- A result badge area for pass or needs-practice

Support strip:
- "Use the clue, then choose the move."
- "Try to explain why your move works."

Action zone:
- Choose the next move on your own
- Solve one challenge with limited hints
- Explain the pattern in one short sentence

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should feel a little calmer and more focused than the walkthrough lessons. Keep the same pointer colors from the chapter so the learner can transfer what they already know. Reserve purple and gold for the mastery result area so success feels special without turning the whole screen into a reward explosion.



### Background Design

The background for `Mirror Meadow Challenge Trail` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One focused challenge scene, Two markers already in place, A target card near the scene, and A result badge area for pass or needs-practice; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One focused challenge scene, Two markers already in place, A target card near the scene, and A result badge area for pass or needs-practice already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Mirror Meadow Challenge Trail` and should visually support the lesson goal: check whether the learner can choose and use the correct two-pointer move with much less support. The background should establish the world softly, but the foreground should stay centered on One focused challenge scene, Two markers already in place, A target card near the scene, and A result badge area for pass or needs-practice. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One focused challenge scene, Two markers already in place, A target card near the scene, and A result badge area for pass or needs-practice should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Use the clue, then choose the move." and "Try to explain why your move works.", and the action area should invite one clear next step through Choose the next move on your own, Solve one challenge with limited hints, and Explain the pattern in one short sentence. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One focused challenge scene, Two markers already in place, A target card near the scene, and A result badge area for pass or needs-practice.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Use the clue, then choose the move." and "Try to explain why your move works.". The action zone should stay tightly focused on Choose the next move on your own, Solve one challenge with limited hints, and Explain the pattern in one short sentence, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango gives a short challenge setup and then steps back.
2. The learner chooses the next move without a full walkthrough.
3. The scene updates to show whether that move helps the solution.
4. A short explanation prompt asks why the move made sense.
5. The mastery result appears with either a pass badge or a gentle needs-practice message.

### Component Usage

- Scene Card
- Prediction prompt
- Reflection prompt
- Practice challenge card
- Mastery feedback card

## Part A: Multiple Choice

### 1. Which clue most strongly suggests Pair Sum - Sorted can use two pointers?
A. The numbers are colorful  
B. The array is sorted  
C. The array is short  
D. The target is positive  

**Answer:** B

### 2. In Largest Container, which pointer should move?
A. always the taller wall  
B. always the shorter wall  
C. both every time  
D. neither ever moves  

**Answer:** B

### 3. Which problem uses unidirectional traversal?
A. Is Palindrome Valid  
B. Pair Sum - Sorted  
C. Shift Zeros to the End  
D. Largest Container  

**Answer:** C

### 4. Which problem uses a pivot?
A. Next Lexicographical Sequence  
B. Is Palindrome Valid  
C. Largest Container  
D. Pair Sum - Sorted  

**Answer:** A

### 5. Why is a palindrome a good fit for two pointers?
A. it is sorted  
B. it has symmetry  
C. it contains numbers  
D. it uses multiplication  

**Answer:** B

---

## Part B: Short Answer

### 1. What is a pointer?

**Sample answer:**  
A pointer is a variable that stores a position, like an index in an array.

### 2. Why can sorted arrays help with two pointers?

**Sample answer:**  
Because when you move left or right, you can predict whether the value gets smaller or bigger.

### 3. In Shift Zeros to the End, what does the `write` pointer do?

**Sample answer:**  
It marks where the next non-zero value should be placed.

---

## Part C: Trace It

### 1. Pair Sum - Sorted

```txt
nums = [1, 3, 4, 6, 8]
target = 10
```

Trace the algorithm.

**Answer:**  
`[1, 4]` because `3 + 8 = 11` is too big after first shift? Let's trace carefully:

- `1 + 8 = 9` -> too small -> move left
- `3 + 8 = 11` -> too big -> move right
- `3 + 6 = 9` -> too small -> move left
- `4 + 6 = 10` -> found

So the answer is `[2, 3]`.

### 2. Is Palindrome Valid

```txt
word = "level"
```

Does it return true or false?

**Answer:** `true`

### 3. Shift Zeros to the End

```txt
[0, 4, 0, 1]
```

What is the final array?

**Answer:** `[4, 1, 0, 0]`

---

## Part D: Build the Habit

When you see a new problem, say this to yourself:

> Can I use two pointers to move smarter instead of checking everything?

That question will help you spot this pattern again and again.

---

# Teacher / Builder Notes

## Suggested UI Blocks for This Chapter

If this content is used in your app, these parts would work well as interactive components:

- **Pointer animation** for inward traversal
- **Array bar visualizer** for Largest Container
- **Mirror comparison animation** for Palindrome
- **Read/write lane visualizer** for Shift Zeros
- **Pivot and reverse visualizer** for Next Lexicographical Sequence
- **Tap-to-predict quiz cards** before each pointer move

## Suggested Rewards

- Badge: **Pointer Pro**
- Badge: **Palindrome Patrol**
- Badge: **Container Captain**
- Badge: **Sequence Solver**

---

# Final Chapter Summary

Two pointers is one of the most useful coding patterns because it teaches you to **move with purpose**.

Instead of checking everything, you learn to ask:

- what do I know about the data?
- what should I compare?
- which pointer should move?
- why does that move make sense?

That is real algorithmic thinking.

You are not just writing code.  
You are learning to **notice patterns**.
