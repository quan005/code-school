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

## Concrete Screen Design

### Learning Goal

Teach that sorted order lets us check the middle and throw away half of the remaining choices.

### Habitat

`Maple Library`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Maple Library
- Screen title: Introduction to Binary Search
- Progress chip: Intro

Scene:
- A long sorted bookshelf of numbered books
- Left, right, and middle bookmarks
- A faded overlay on the half we can throw away

Support strip:
- "Because it is sorted, the middle gives us a clue."
- "After one check, we can ignore half."

Action zone:
- Jump to the middle book
- Compare it to the target
- Fade out the half that cannot contain the answer

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The library metaphor should make ordered searching feel calm and smart. Left, right, and middle bookmarks must stay visible the whole time. When a half gets removed, fade it softly rather than making it disappear abruptly so children can still understand what was discarded.



### Background Design

The background for `Maple Library` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A long sorted bookshelf of numbered books, Left, right, and middle bookmarks, and A faded overlay on the half we can throw away; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A long sorted bookshelf of numbered books, Left, right, and middle bookmarks, and A faded overlay on the half we can throw away already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Maple Library` and should visually support the lesson goal: sorted order lets us check the middle and throw away half of the remaining choices. The background should establish the world softly, but the foreground should stay centered on A long sorted bookshelf of numbered books, Left, right, and middle bookmarks, and A faded overlay on the half we can throw away. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A long sorted bookshelf of numbered books, Left, right, and middle bookmarks, and A faded overlay on the half we can throw away should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Because it is sorted, the middle gives us a clue." and "After one check, we can ignore half.", and the action area should invite one clear next step through Jump to the middle book, Compare it to the target, and Fade out the half that cannot contain the answer. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A long sorted bookshelf of numbered books, Left, right, and middle bookmarks, and A faded overlay on the half we can throw away.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Because it is sorted, the middle gives us a clue." and "After one check, we can ignore half.". The action zone should stay tightly focused on Jump to the middle book, Compare it to the target, and Fade out the half that cannot contain the answer, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo introduces a sorted shelf and a target book.
2. The learner jumps to the middle bookmark.
3. A compare bubble explains whether the middle is too small, too big, or correct.
4. The impossible half fades away.
5. The scene repeats once more so the learner feels the shrinking search area.

### Component Usage

- Scene Card
- Left / right / middle bookmarks
- Compare bubble
- Discarded-half overlay
- Start-lesson CTA

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

## Concrete Screen Design

### Learning Goal

Teach the classic binary search move: check the middle and search only the half that still makes sense.

### Habitat

`Target Shelf`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Target Shelf
- Lesson title: Find a Target in a Sorted Array
- Progress chip: 1/6

Scene:
- A sorted shelf of number books
- A target badge above the shelf
- Left, right, and middle markers

Support strip:
- "Middle first."
- "Then choose left half or right half."

Action zone:
- Compute the middle
- Compare the middle to the target
- Move left or right inward

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

This screen should keep the shelf simple so the changing search range is easy to follow. The target badge should stay pinned at the top. Each new middle choice should glow briefly before the discarded side fades.



### Background Design

The background for `Target Shelf` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A sorted shelf of number books, A target badge above the shelf, and Left, right, and middle markers; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A sorted shelf of number books, A target badge above the shelf, and Left, right, and middle markers already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Target Shelf` and should visually support the lesson goal: teach the classic binary search move: check the middle and search only the half that still makes sense. The background should establish the world softly, but the foreground should stay centered on A sorted shelf of number books, A target badge above the shelf, and Left, right, and middle markers. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A sorted shelf of number books, A target badge above the shelf, and Left, right, and middle markers should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Middle first." and "Then choose left half or right half.", and the action area should invite one clear next step through Compute the middle, Compare the middle to the target, and Move left or right inward. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A sorted shelf of number books, A target badge above the shelf, and Left, right, and middle markers.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Middle first." and "Then choose left half or right half.". The action zone should stay tightly focused on Compute the middle, Compare the middle to the target, and Move left or right inward, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo places the target badge above the sorted shelf.
2. The learner checks the middle value.
3. A compare bubble says too small, too large, or found.
4. Left or right moves inward to the smaller search zone.
5. The scene repeats until the target is found or the range disappears.

### Component Usage

- Scene Card
- Target badge
- Left / right / middle markers
- Compare bubble
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that when the target is missing, binary search can still show where it belongs.

### Habitat

`Bookmark Row`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Bookmark Row
- Lesson title: Search Insert Position
- Progress chip: 2/6

Scene:
- A sorted row of books with open gaps between them
- Left, right, and middle markers
- A glowing insert slot when the target is not found

Support strip:
- "If the number is missing, ask where it should go."
- "The answer is the first place that fits."

Action zone:
- Search as usual
- Narrow the range
- Reveal the insert slot

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The row should make "where does it belong?" feel visible by showing subtle insertion gaps. The final insert slot should glow gently at the moment the search ends. Keep the tone helpful, not like a miss or failure.



### Background Design

The background for `Bookmark Row` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A sorted row of books with open gaps between them, Left, right, and middle markers, and A glowing insert slot when the target is not found; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A sorted row of books with open gaps between them, Left, right, and middle markers, and A glowing insert slot when the target is not found already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Bookmark Row` and should visually support the lesson goal: when the target is missing, binary search can still show where it belongs. The background should establish the world softly, but the foreground should stay centered on A sorted row of books with open gaps between them, Left, right, and middle markers, and A glowing insert slot when the target is not found. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A sorted row of books with open gaps between them, Left, right, and middle markers, and A glowing insert slot when the target is not found should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "If the number is missing, ask where it should go." and "The answer is the first place that fits.", and the action area should invite one clear next step through Search as usual, Narrow the range, and Reveal the insert slot. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A sorted row of books with open gaps between them, Left, right, and middle markers, and A glowing insert slot when the target is not found.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "If the number is missing, ask where it should go." and "The answer is the first place that fits.". The action zone should stay tightly focused on Search as usual, Narrow the range, and Reveal the insert slot, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo starts a normal binary search for the target.
2. The learner narrows the search zone the same way as before.
3. When the target is absent, the range closes around its correct location.
4. A glowing slot appears to show the insert position.
5. The support strip explains that this position keeps the list sorted.

### Component Usage

- Scene Card
- Insert-slot highlight
- Left / right / middle markers
- Compare bubble
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that after finding a matching value, we may still need to keep searching left to find the first copy.

### Habitat

`Echo Shelf Left`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Echo Shelf Left
- Lesson title: First Occurrence of a Number
- Progress chip: 3/6

Scene:
- A sorted shelf with repeated matching books
- A candidate badge on one found match
- A left-search arrow showing we should keep checking earlier copies

Support strip:
- "A match does not always mean stop."
- "For the first copy, keep searching left."

Action zone:
- Find a match
- Save it as a candidate
- Move right inward to the left half

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The repeated books should make duplicates obvious. The candidate badge should stay on the best answer found so far while the active middle keeps moving. The left-search arrow should gently remind the learner why the search continues.



### Background Design

The background for `Echo Shelf Left` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A sorted shelf with repeated matching books, A candidate badge on one found match, and A left-search arrow showing we should keep checking earlier copies; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A sorted shelf with repeated matching books, A candidate badge on one found match, and A left-search arrow showing we should keep checking earlier copies already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Echo Shelf Left` and should visually support the lesson goal: after finding a matching value, we may still need to keep searching left to find the first copy. The background should establish the world softly, but the foreground should stay centered on A sorted shelf with repeated matching books, A candidate badge on one found match, and A left-search arrow showing we should keep checking earlier copies. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A sorted shelf with repeated matching books, A candidate badge on one found match, and A left-search arrow showing we should keep checking earlier copies should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "A match does not always mean stop." and "For the first copy, keep searching left.", and the action area should invite one clear next step through Find a match, Save it as a candidate, and Move right inward to the left half. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A sorted shelf with repeated matching books, A candidate badge on one found match, and A left-search arrow showing we should keep checking earlier copies.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "A match does not always mean stop." and "For the first copy, keep searching left.". The action zone should stay tightly focused on Find a match, Save it as a candidate, and Move right inward to the left half, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo finds a matching middle value.
2. The learner saves that position as a candidate.
3. Instead of stopping, the right marker moves left to keep searching earlier positions.
4. The candidate updates only if an earlier match appears.
5. The final candidate is revealed as the first occurrence.

### Component Usage

- Scene Card
- Candidate badge
- Left-search arrow
- Left / right / middle markers
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that after finding a match, we may need to keep searching right to find the last copy.

### Habitat

`Echo Shelf Right`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Echo Shelf Right
- Lesson title: Last Occurrence of a Number
- Progress chip: 4/6

Scene:
- A sorted shelf with repeated matching books
- A candidate badge on one found match
- A right-search arrow showing we should keep checking later copies

Support strip:
- "A match is only the start."
- "For the last copy, keep searching right."

Action zone:
- Find a match
- Save it as a candidate
- Move left inward to the right half

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

This screen should mirror the previous lesson closely so the difference between first and last is easy to compare. The right-search arrow needs to be the main change. Repeated copies should stay clearly visible.



### Background Design

The background for `Echo Shelf Right` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A sorted shelf with repeated matching books, A candidate badge on one found match, and A right-search arrow showing we should keep checking later copies; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A sorted shelf with repeated matching books, A candidate badge on one found match, and A right-search arrow showing we should keep checking later copies already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Echo Shelf Right` and should visually support the lesson goal: after finding a match, we may need to keep searching right to find the last copy. The background should establish the world softly, but the foreground should stay centered on A sorted shelf with repeated matching books, A candidate badge on one found match, and A right-search arrow showing we should keep checking later copies. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A sorted shelf with repeated matching books, A candidate badge on one found match, and A right-search arrow showing we should keep checking later copies should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "A match is only the start." and "For the last copy, keep searching right.", and the action area should invite one clear next step through Find a match, Save it as a candidate, and Move left inward to the right half. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A sorted shelf with repeated matching books, A candidate badge on one found match, and A right-search arrow showing we should keep checking later copies.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "A match is only the start." and "For the last copy, keep searching right.". The action zone should stay tightly focused on Find a match, Save it as a candidate, and Move left inward to the right half, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo finds a matching middle value.
2. The learner saves it as the current candidate.
3. The left marker moves right to keep searching later copies.
4. The candidate updates only if a later match is found.
5. The final candidate is shown as the last occurrence.

### Component Usage

- Scene Card
- Candidate badge
- Right-search arrow
- Left / right / middle markers
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that binary search can work on a number range, not just on an array of values.

### Habitat

`Square Garden`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Square Garden
- Lesson title: Integer Square Root
- Progress chip: 5/6

Scene:
- A number path from 1 up to the target range
- A middle guess marker
- A square tile board that shows mid × mid

Support strip:
- "Guess the middle number."
- "Check whether its square is too small or too large."

Action zone:
- Pick the middle guess
- Compute mid times mid
- Move the range left or right

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The square tile board should make `mid × mid` visual, not just numeric. This helps children understand why the comparison matters. The range path should be simple and evenly spaced so number binary search feels familiar.



### Background Design

The background for `Square Garden` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A number path from 1 up to the target range, A middle guess marker, and A square tile board that shows mid × mid; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A number path from 1 up to the target range, A middle guess marker, and A square tile board that shows mid × mid already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Square Garden` and should visually support the lesson goal: binary search can work on a number range, not just on an array of values. The background should establish the world softly, but the foreground should stay centered on A number path from 1 up to the target range, A middle guess marker, and A square tile board that shows mid × mid. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A number path from 1 up to the target range, A middle guess marker, and A square tile board that shows mid × mid should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Guess the middle number." and "Check whether its square is too small or too large.", and the action area should invite one clear next step through Pick the middle guess, Compute mid times mid, and Move the range left or right. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A number path from 1 up to the target range, A middle guess marker, and A square tile board that shows mid × mid.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Guess the middle number." and "Check whether its square is too small or too large.". The action zone should stay tightly focused on Pick the middle guess, Compute mid times mid, and Move the range left or right, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo marks the current number range.
2. The learner chooses the middle guess.
3. A square tile board builds `mid × mid`.
4. The range shrinks depending on whether the square is too small or too large.
5. The final answer is the largest guess whose square does not go over.

### Component Usage

- Scene Card
- Guess marker
- Square tile board
- Left / right / middle range markers
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach binary search as a playful guessing game where each clue removes half the choices.

### Habitat

`Cloud Guess Tower`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Cloud Guess Tower
- Lesson title: Guess Number Higher or Lower
- Progress chip: 6/6

Scene:
- A tower of numbered cloud doors
- A current guess badge in the middle
- A helper sign that says higher, lower, or correct

Support strip:
- "Always guess near the middle."
- "Use each clue to throw away half."

Action zone:
- Make the middle guess
- Read the higher/lower clue
- Narrow the range

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

This screen should feel game-like and inviting. The higher/lower clue sign should be large and instant. As ranges shrink, faded cloud doors should make the disappearing choices easy to understand.



### Background Design

The background for `Cloud Guess Tower` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A tower of numbered cloud doors, A current guess badge in the middle, and A helper sign that says higher, lower, or correct; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A tower of numbered cloud doors, A current guess badge in the middle, and A helper sign that says higher, lower, or correct already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Cloud Guess Tower` and should visually support the lesson goal: teach binary search as a playful guessing game where each clue removes half the choices. The background should establish the world softly, but the foreground should stay centered on A tower of numbered cloud doors, A current guess badge in the middle, and A helper sign that says higher, lower, or correct. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A tower of numbered cloud doors, A current guess badge in the middle, and A helper sign that says higher, lower, or correct should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Always guess near the middle." and "Use each clue to throw away half.", and the action area should invite one clear next step through Make the middle guess, Read the higher/lower clue, and Narrow the range. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A tower of numbered cloud doors, A current guess badge in the middle, and A helper sign that says higher, lower, or correct.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Always guess near the middle." and "Use each clue to throw away half.". The action zone should stay tightly focused on Make the middle guess, Read the higher/lower clue, and Narrow the range, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo starts with the full guessing range.
2. The learner chooses the middle guess.
3. The clue sign says higher, lower, or correct.
4. Half of the cloud doors fade away.
5. The process repeats until the answer is found.

### Component Usage

- Scene Card
- Guess badge
- Higher / lower clue sign
- Faded-range overlay
- Hint card

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

## Concrete Screen Design

### Learning Goal

Review the main binary-search clues: sorted order, middle check, and how to decide left vs right.

### Habitat

`Library Review Desk`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Library Review Desk
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review desk with six mini shelf and range scenes
- Tool chips for target, insert, first, last, square root, guess
- A sorted-order reminder banner

Support strip:
- "Ask what the middle tells you."
- "Then decide which half still makes sense."

Action zone:
- Match each mini-scene to its goal
- Choose left or right for each clue
- Explain why sorted order matters

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review desk should feel organized and scholarly without becoming dense. The sorted-order banner should stay visible because it is the most important clue of the whole chapter. Keep mini-scenes simple and familiar.



### Background Design

The background for `Library Review Desk` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A review desk with six mini shelf and range scenes, Tool chips for target, insert, first, last, square root, guess, and A sorted-order reminder banner; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A review desk with six mini shelf and range scenes, Tool chips for target, insert, first, last, square root, guess, and A sorted-order reminder banner already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Library Review Desk` and should visually support the lesson goal: review the main binary-search clues: sorted order, middle check, and how to decide left vs right. The background should establish the world softly, but the foreground should stay centered on A review desk with six mini shelf and range scenes, Tool chips for target, insert, first, last, square root, guess, and A sorted-order reminder banner. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A review desk with six mini shelf and range scenes, Tool chips for target, insert, first, last, square root, guess, and A sorted-order reminder banner should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask what the middle tells you." and "Then decide which half still makes sense.", and the action area should invite one clear next step through Match each mini-scene to its goal, Choose left or right for each clue, and Explain why sorted order matters. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A review desk with six mini shelf and range scenes, Tool chips for target, insert, first, last, square root, guess, and A sorted-order reminder banner.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask what the middle tells you." and "Then decide which half still makes sense.". The action zone should stay tightly focused on Match each mini-scene to its goal, Choose left or right for each clue, and Explain why sorted order matters, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo opens the review desk with six mini binary-search scenes.
2. The learner matches each scene to its problem goal.
3. Small clue cards ask whether the next move should go left or right.
4. The support strip confirms the reasoning in short child-friendly language.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Goal chips
- Mini scene cards
- Mascot speech bubble
- Next-step panel

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

## Concrete Screen Design

### Learning Goal

Check whether the learner can use the middle clue to make the next binary-search move independently.

### Habitat

`Halfway Challenge Shelf`

### Primary Mascot

`Milo the Owl`

### Screen Composition

```txt
Header:
- Back
- Halfway Challenge Shelf
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused sorted search challenge
- Left, right, and middle markers already placed
- A result badge area above the shelf

Support strip:
- "Read the middle, then choose the half."
- "Explain why the other half can be ignored."

Action zone:
- Predict the next move
- Solve one short search challenge
- Explain the reason in one sentence

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay calm and focused, with the sorted shelf doing most of the teaching. The result area should be clear and not overly celebratory. The ignored half should fade gently after the learner chooses.



### Background Design

The background for `Halfway Challenge Shelf` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One focused sorted search challenge, Left, right, and middle markers already placed, and A result badge area above the shelf; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One focused sorted search challenge, Left, right, and middle markers already placed, and A result badge area above the shelf already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Milo the Owl should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Halfway Challenge Shelf` and should visually support the lesson goal: check whether the learner can use the middle clue to make the next binary-search move independently. The background should establish the world softly, but the foreground should stay centered on One focused sorted search challenge, Left, right, and middle markers already placed, and A result badge area above the shelf. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Milo the Owl should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One focused sorted search challenge, Left, right, and middle markers already placed, and A result badge area above the shelf should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Read the middle, then choose the half." and "Explain why the other half can be ignored.", and the action area should invite one clear next step through Predict the next move, Solve one short search challenge, and Explain the reason in one sentence. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One focused sorted search challenge, Left, right, and middle markers already placed, and A result badge area above the shelf.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Read the middle, then choose the half." and "Explain why the other half can be ignored.". The action zone should stay tightly focused on Predict the next move, Solve one short search challenge, and Explain the reason in one sentence, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Milo presents one final sorted search challenge.
2. The learner reads the middle clue and chooses left, right, or found.
3. The unused half fades away.
4. A short reflection asks why that half could be ignored.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Left / right / middle markers
- Prediction prompt
- Reflection prompt
- Result feedback card

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
