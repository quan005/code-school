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

## Concrete Screen Design

### Learning Goal

Teach the difference between finding something and putting things in order, and show how order can help later work.

### Habitat

`Card Cabinet Room`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Card Cabinet Room
- Screen title: Introduction to Sort and Search
- Progress chip: Intro

Scene:
- A messy row of number cards above a neat sorted row
- A search spotlight and a sort wand toggle
- A helper panel showing what gets easier after sorting

Support strip:
- "Searching means find it."
- "Sorting means put it in order."

Action zone:
- Search for one target card in the messy row
- Sort the cards into order
- Compare what becomes easier after sorting

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The contrast between messy and ordered rows should be immediate. The search spotlight should feel direct and focused, while the sort wand should animate the rearrangement into order. Keep the helper panel short and concrete.



### Background Design

The background for `Card Cabinet Room` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A messy row of number cards above a neat sorted row, A search spotlight and a sort wand toggle, and A helper panel showing what gets easier after sorting; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A messy row of number cards above a neat sorted row, A search spotlight and a sort wand toggle, and A helper panel showing what gets easier after sorting already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Card Cabinet Room` and should visually support the lesson goal: teach the difference between finding something and putting things in order, and show how order can help later work. The background should establish the world softly, but the foreground should stay centered on A messy row of number cards above a neat sorted row, A search spotlight and a sort wand toggle, and A helper panel showing what gets easier after sorting. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A messy row of number cards above a neat sorted row, A search spotlight and a sort wand toggle, and A helper panel showing what gets easier after sorting should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Searching means find it." and "Sorting means put it in order.", and the action area should invite one clear next step through Search for one target card in the messy row, Sort the cards into order, and Compare what becomes easier after sorting. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A messy row of number cards above a neat sorted row, A search spotlight and a sort wand toggle, and A helper panel showing what gets easier after sorting.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Searching means find it." and "Sorting means put it in order.". The action zone should stay tightly focused on Search for one target card in the messy row, Sort the cards into order, and Compare what becomes easier after sorting, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper highlights one target in the messy row and shows direct searching.
2. The learner sorts the row into order.
3. A compare panel asks what new questions became easier after sorting.
4. The sorted row demonstrates clearer structure.
5. The support strip names the difference between searching and sorting.

### Component Usage

- Scene Card
- Search spotlight
- Sort toggle
- Compare helper panel
- Start-lesson CTA

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

## Concrete Screen Design

### Learning Goal

Teach that linear search checks one item at a time from left to right until it finds the target or runs out.

### Habitat

`Scan Shelf`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Scan Shelf
- Lesson title: Linear Search
- Progress chip: 1/6

Scene:
- A row of unsorted number cards
- A target badge above the shelf
- A scanning marker moving one slot at a time

Support strip:
- "Check one card, then the next."
- "Stop when you find the target or reach the end."

Action zone:
- Compare the current card to the target
- Move the scan marker right
- Decide found or not found

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The scanning marker should be the main moving element, so the one-by-one nature of linear search feels obvious. The target badge needs to stay fixed and readable. Found and not-found states should be clear but calm.



### Background Design

The background for `Scan Shelf` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of unsorted number cards, A target badge above the shelf, and A scanning marker moving one slot at a time; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of unsorted number cards, A target badge above the shelf, and A scanning marker moving one slot at a time already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Scan Shelf` and should visually support the lesson goal: linear search checks one item at a time from left to right until it finds the target or runs out. The background should establish the world softly, but the foreground should stay centered on A row of unsorted number cards, A target badge above the shelf, and A scanning marker moving one slot at a time. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of unsorted number cards, A target badge above the shelf, and A scanning marker moving one slot at a time should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Check one card, then the next." and "Stop when you find the target or reach the end.", and the action area should invite one clear next step through Compare the current card to the target, Move the scan marker right, and Decide found or not found. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of unsorted number cards, A target badge above the shelf, and A scanning marker moving one slot at a time.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Check one card, then the next." and "Stop when you find the target or reach the end.". The action zone should stay tightly focused on Compare the current card to the target, Move the scan marker right, and Decide found or not found, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper shows the target badge above the row.
2. The learner checks the current card.
3. If it is not the target, the scan marker moves right.
4. A found badge appears when the target matches.
5. If the shelf ends first, the result becomes not found.

### Component Usage

- Scene Card
- Target badge
- Scan marker
- Found / not-found badge
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that selection sort finds the smallest remaining item and places it into the next correct spot.

### Habitat

`Line-Up Stage`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Line-Up Stage
- Lesson title: Selection Sort
- Progress chip: 2/6

Scene:
- A row split into sorted and unsorted sections
- A smallest-item spotlight in the unsorted section
- A swap arrow placing the smallest item into the next sorted slot

Support strip:
- "Find the smallest remaining item."
- "Put it into the next sorted place."

Action zone:
- Scan the unsorted section
- Mark the smallest item
- Swap it into the next sorted slot

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The sorted and unsorted sections should have different background tones so the boundary is easy to see. The smallest-item spotlight should travel through the unsorted section as the learner scans. The swap arrow should make each placement feel deliberate.



### Background Design

The background for `Line-Up Stage` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row split into sorted and unsorted sections, A smallest-item spotlight in the unsorted section, and A swap arrow placing the smallest item into the next sorted slot; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row split into sorted and unsorted sections, A smallest-item spotlight in the unsorted section, and A swap arrow placing the smallest item into the next sorted slot already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Line-Up Stage` and should visually support the lesson goal: selection sort finds the smallest remaining item and places it into the next correct spot. The background should establish the world softly, but the foreground should stay centered on A row split into sorted and unsorted sections, A smallest-item spotlight in the unsorted section, and A swap arrow placing the smallest item into the next sorted slot. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row split into sorted and unsorted sections, A smallest-item spotlight in the unsorted section, and A swap arrow placing the smallest item into the next sorted slot should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Find the smallest remaining item." and "Put it into the next sorted place.", and the action area should invite one clear next step through Scan the unsorted section, Mark the smallest item, and Swap it into the next sorted slot. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row split into sorted and unsorted sections, A smallest-item spotlight in the unsorted section, and A swap arrow placing the smallest item into the next sorted slot.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Find the smallest remaining item." and "Put it into the next sorted place.". The action zone should stay tightly focused on Scan the unsorted section, Mark the smallest item, and Swap it into the next sorted slot, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper marks the first unsorted position.
2. The learner scans the remaining row to find the smallest item.
3. The smallest item gets a spotlight.
4. A swap arrow places it into the next sorted slot.
5. The sorted section grows one position at a time.

### Component Usage

- Scene Card
- Sorted / unsorted divider
- Smallest-item spotlight
- Swap arrow
- Hint card

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
  const arr = [..nums];

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

## Concrete Screen Design

### Learning Goal

Teach that insertion sort takes one card at a time and slides it left until it reaches the correct place.

### Habitat

`Sliding Card Bench`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Sliding Card Bench
- Lesson title: Insertion Sort
- Progress chip: 3/6

Scene:
- A row where the left side is already sorted
- A lifted current card ready to insert
- Shift arrows showing bigger cards sliding right

Support strip:
- "Take one new card."
- "Slide it left until it fits."

Action zone:
- Lift the current card
- Shift larger cards right
- Drop the card into the correct gap

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The lifted current card should hover above the row so the insertion action is unmistakable. Shift arrows should appear only when larger cards need to move. The insertion gap should glow softly to invite placement.



### Background Design

The background for `Sliding Card Bench` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row where the left side is already sorted, A lifted current card ready to insert, and Shift arrows showing bigger cards sliding right; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row where the left side is already sorted, A lifted current card ready to insert, and Shift arrows showing bigger cards sliding right already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Sliding Card Bench` and should visually support the lesson goal: insertion sort takes one card at a time and slides it left until it reaches the correct place. The background should establish the world softly, but the foreground should stay centered on A row where the left side is already sorted, A lifted current card ready to insert, and Shift arrows showing bigger cards sliding right. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row where the left side is already sorted, A lifted current card ready to insert, and Shift arrows showing bigger cards sliding right should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Take one new card." and "Slide it left until it fits.", and the action area should invite one clear next step through Lift the current card, Shift larger cards right, and Drop the card into the correct gap. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row where the left side is already sorted, A lifted current card ready to insert, and Shift arrows showing bigger cards sliding right.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Take one new card." and "Slide it left until it fits.". The action zone should stay tightly focused on Lift the current card, Shift larger cards right, and Drop the card into the correct gap, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper lifts the next unsorted card.
2. The learner compares it to the sorted cards on the left.
3. Larger cards slide right to make room.
4. The lifted card drops into its proper gap.
5. The sorted section expands by one card.

### Component Usage

- Scene Card
- Lifted-card overlay
- Shift arrows
- Insertion gap highlight
- Hint card

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
  const arr = [..nums];

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

## Concrete Screen Design

### Learning Goal

Teach that two sorted arrays can be combined by always taking the smaller front item next.

### Habitat

`Twin River Merge`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Twin River Merge
- Lesson title: Merge Two Sorted Arrays
- Progress chip: 4/6

Scene:
- Two sorted rows feeding into one result row
- Front-card markers on both inputs
- A merge tray building in sorted order

Support strip:
- "Look at the front of both rows."
- "Take the smaller one next."

Action zone:
- Compare the two front cards
- Move the smaller card into the result row
- Advance the pointer for that row

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The twin-row layout should make the side-by-side comparison easy. Front-card markers need strong visual emphasis. The result row should grow steadily so the learner sees the merge building in sorted order.



### Background Design

The background for `Twin River Merge` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo Two sorted rows feeding into one result row, Front-card markers on both inputs, and A merge tray building in sorted order; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If Two sorted rows feeding into one result row, Front-card markers on both inputs, and A merge tray building in sorted order already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Twin River Merge` and should visually support the lesson goal: two sorted arrays can be combined by always taking the smaller front item next. The background should establish the world softly, but the foreground should stay centered on Two sorted rows feeding into one result row, Front-card markers on both inputs, and A merge tray building in sorted order. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. Two sorted rows feeding into one result row, Front-card markers on both inputs, and A merge tray building in sorted order should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Look at the front of both rows." and "Take the smaller one next.", and the action area should invite one clear next step through Compare the two front cards, Move the smaller card into the result row, and Advance the pointer for that row. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through Two sorted rows feeding into one result row, Front-card markers on both inputs, and A merge tray building in sorted order.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Look at the front of both rows." and "Take the smaller one next.". The action zone should stay tightly focused on Compare the two front cards, Move the smaller card into the result row, and Advance the pointer for that row, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper points to the front card of each sorted row.
2. The learner compares the two values.
3. The smaller card moves into the merge tray.
4. Only that row's front marker advances.
5. The process repeats until all cards are merged.

### Component Usage

- Scene Card
- Front-card markers
- Merge tray
- Compare badge
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach the special in-place sorting pattern that groups colors into the correct zones.

### Habitat

`Paint Bucket Lane`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Paint Bucket Lane
- Lesson title: Sort Colors
- Progress chip: 5/6

Scene:
- A row of red, white, and blue paint chips
- Three zone markers: red zone, current zone, blue zone
- Swap arrows that move chips into the correct side

Support strip:
- "Place reds on the left and blues on the right."
- "Keep the middle for what is still being checked."

Action zone:
- Read the current color
- Swap into the left or right zone when needed
- Move the current marker forward

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The three-zone layout should make this lesson feel like sorting into buckets. The current marker needs to stay very clear so the learner knows which chip is being processed. Swaps should look quick and purposeful.



### Background Design

The background for `Paint Bucket Lane` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of red, white, and blue paint chips, Three zone markers: red zone, current zone, blue zone, and Swap arrows that move chips into the correct side; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of red, white, and blue paint chips, Three zone markers: red zone, current zone, blue zone, and Swap arrows that move chips into the correct side already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Paint Bucket Lane` and should visually support the lesson goal: teach the special in-place sorting pattern that groups colors into the correct zones. The background should establish the world softly, but the foreground should stay centered on A row of red, white, and blue paint chips, Three zone markers: red zone, current zone, blue zone, and Swap arrows that move chips into the correct side. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of red, white, and blue paint chips, Three zone markers: red zone, current zone, blue zone, and Swap arrows that move chips into the correct side should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Place reds on the left and blues on the right." and "Keep the middle for what is still being checked.", and the action area should invite one clear next step through Read the current color, Swap into the left or right zone when needed, and Move the current marker forward. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of red, white, and blue paint chips, Three zone markers: red zone, current zone, blue zone, and Swap arrows that move chips into the correct side.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Place reds on the left and blues on the right." and "Keep the middle for what is still being checked.". The action zone should stay tightly focused on Read the current color, Swap into the left or right zone when needed, and Move the current marker forward, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper starts with the current marker at the beginning.
2. The learner reads the color under the marker.
3. Reds swap left, blues swap right, and whites stay in the middle.
4. The zone boundaries tighten as sorting progresses.
5. The support strip explains that the row gets sorted in place.

### Component Usage

- Scene Card
- Zone markers
- Current marker
- Swap arrows
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that even when a sorted array is rotated, one half is still ordered and can help us decide where to search.

### Habitat

`Twist Shelf Quest`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Twist Shelf Quest
- Lesson title: Search in a Rotated Sorted Array
- Progress chip: 6/6

Scene:
- A shelf of cards that was once sorted but is now rotated
- Left, right, and middle markers
- A sorted-half highlight showing which side is still ordered

Support strip:
- "Even after the twist, one side is still in order."
- "Use the ordered half to decide where the target can live."

Action zone:
- Check the middle card
- Identify the ordered half
- Choose the half that could contain the target

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The rotation should be visually noticeable, but the ordered half still needs to be easy to see once highlighted. The left, right, and middle markers should work just like in binary search. Keep the target badge visible throughout.



### Background Design

The background for `Twist Shelf Quest` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A shelf of cards that was once sorted but is now rotated, Left, right, and middle markers, and A sorted-half highlight showing which side is still ordered; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A shelf of cards that was once sorted but is now rotated, Left, right, and middle markers, and A sorted-half highlight showing which side is still ordered already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Twist Shelf Quest` and should visually support the lesson goal: even when a sorted array is rotated, one half is still ordered and can help us decide where to search. The background should establish the world softly, but the foreground should stay centered on A shelf of cards that was once sorted but is now rotated, Left, right, and middle markers, and A sorted-half highlight showing which side is still ordered. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A shelf of cards that was once sorted but is now rotated, Left, right, and middle markers, and A sorted-half highlight showing which side is still ordered should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Even after the twist, one side is still in order." and "Use the ordered half to decide where the target can live.", and the action area should invite one clear next step through Check the middle card, Identify the ordered half, and Choose the half that could contain the target. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A shelf of cards that was once sorted but is now rotated, Left, right, and middle markers, and A sorted-half highlight showing which side is still ordered.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Even after the twist, one side is still in order." and "Use the ordered half to decide where the target can live.". The action zone should stay tightly focused on Check the middle card, Identify the ordered half, and Choose the half that could contain the target, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper places the target badge above the rotated shelf.
2. The learner checks the middle card.
3. A sorted-half highlight shows which side is still ordered.
4. The learner decides whether the target could be in that ordered half.
5. The search range shrinks until the target is found or absent.

### Component Usage

- Scene Card
- Left / right / middle markers
- Sorted-half highlight
- Target badge
- Hint card

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

## Concrete Screen Design

### Learning Goal

Review scanning, selecting minimums, inserting into order, merging, color partitioning, and searching with ordered structure.

### Habitat

`Order Review Studio`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Order Review Studio
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review wall with six mini card and row scenes
- Tool chips for scan, select, insert, merge, zone, ordered-half
- A banner that says "order can make later work easier"

Support strip:
- "Ask whether you should search directly or create order first."
- "Then choose the move that uses that structure best."

Action zone:
- Match each mini-scene to the right idea
- Sort clue chips to the correct lesson
- Explain what order is helping with

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review studio should feel like a wall of sorting and searching demos. The banner about order should remain visible because it summarizes the chapter well. Keep each mini-scene simple and familiar.



### Background Design

The background for `Order Review Studio` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A review wall with six mini card and row scenes, Tool chips for scan, select, insert, merge, zone, ordered-half, and A banner that says "order can make later work easier"; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A review wall with six mini card and row scenes, Tool chips for scan, select, insert, merge, zone, ordered-half, and A banner that says "order can make later work easier" already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Order Review Studio` and should visually support the lesson goal: review scanning, selecting minimums, inserting into order, merging, color partitioning, and searching with ordered structure. The background should establish the world softly, but the foreground should stay centered on A review wall with six mini card and row scenes, Tool chips for scan, select, insert, merge, zone, ordered-half, and A banner that says "order can make later work easier". Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A review wall with six mini card and row scenes, Tool chips for scan, select, insert, merge, zone, ordered-half, and A banner that says "order can make later work easier" should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask whether you should search directly or create order first." and "Then choose the move that uses that structure best.", and the action area should invite one clear next step through Match each mini-scene to the right idea, Sort clue chips to the correct lesson, and Explain what order is helping with. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A review wall with six mini card and row scenes, Tool chips for scan, select, insert, merge, zone, ordered-half, and A banner that says "order can make later work easier".

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask whether you should search directly or create order first." and "Then choose the move that uses that structure best.". The action zone should stay tightly focused on Match each mini-scene to the right idea, Sort clue chips to the correct lesson, and Explain what order is helping with, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper opens the review wall of search and sort scenes.
2. The learner matches each scene to its main idea.
3. Clue chips slide into the right recap panel.
4. The support strip explains what sorting or searching move is being used.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Tool chips
- Mini sort/search scenes
- Mascot speech bubble
- Next-step panel

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

## Concrete Screen Design

### Learning Goal

Check whether the learner can choose between direct searching and order-based work with less support.

### Habitat

`Order Challenge Shelf`

### Primary Mascot

`Piper the Otter`

### Screen Composition

```txt
Header:
- Back
- Order Challenge Shelf
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused sort-or-search challenge
- A visible row of cards and one active marker or boundary
- A result badge area above the shelf

Support strip:
- "Do you need to search now or build order first?"
- "Use the structure that makes the next move easiest."

Action zone:
- Predict the next move
- Solve one short challenge
- Explain why that move fit the row

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay focused on the row and the active marker or boundary. The result area should be simple and readable. Avoid extra decoration so the learner can think clearly about the next move.



### Background Design

The background for `Order Challenge Shelf` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One focused sort-or-search challenge, A visible row of cards and one active marker or boundary, and A result badge area above the shelf; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One focused sort-or-search challenge, A visible row of cards and one active marker or boundary, and A result badge area above the shelf already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Piper the Otter should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Order Challenge Shelf` and should visually support the lesson goal: check whether the learner can choose between direct searching and order-based work with less support. The background should establish the world softly, but the foreground should stay centered on One focused sort-or-search challenge, A visible row of cards and one active marker or boundary, and A result badge area above the shelf. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Piper the Otter should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One focused sort-or-search challenge, A visible row of cards and one active marker or boundary, and A result badge area above the shelf should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Do you need to search now or build order first?" and "Use the structure that makes the next move easiest.", and the action area should invite one clear next step through Predict the next move, Solve one short challenge, and Explain why that move fit the row. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One focused sort-or-search challenge, A visible row of cards and one active marker or boundary, and A result badge area above the shelf.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Do you need to search now or build order first?" and "Use the structure that makes the next move easiest.". The action zone should stay tightly focused on Predict the next move, Solve one short challenge, and Explain why that move fit the row, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Piper presents one final row challenge with limited guidance.
2. The learner studies whether the row is sorted, unsorted, or partly ordered.
3. The learner chooses the next search or sort move.
4. A short reflection asks what structure made that move smart.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Active marker or boundary
- Prediction prompt
- Reflection prompt
- Result feedback card

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
