---
title: "Backtracking"
chapterSlug: "backtracking"
order: 14
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 115
skills:
  - "Explain the choose-explore-undo pattern"
  - "Use recursion to build answers step by step"
  - "Backtrack safely after trying a choice"
  - "Recognize when a problem needs trying many possibilities"
---

# Backtracking

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Backtracking means trying a choice, exploring what happens, and then undoing that choice so you can try another one.

---

# Chapter Overview

Imagine you are walking through a maze.

At each turn, you choose a path.

If that path works, great.

If it does not work, you walk back to the last choice point and try a different path.

That is the big idea behind **backtracking**.

Backtracking is a problem-solving pattern where we:

1. make a choice
2. explore what happens
3. undo the choice
4. try the next choice

This is very useful when there are many possible answers and we want to:

- generate all possibilities
- find valid arrangements
- search through combinations
- solve puzzles
- try choices one step at a time

In this chapter, we will learn:

1. **Introduction to Backtracking**
   - Intuition
   - Choose, Explore, Undo
   - Recursive Decision Trees
   - When To Use Backtracking
   - Real-world Example
2. **Generate All Subsets**
3. **Generate All Permutations**
4. **Letter Combinations of a Phone Number**
5. **Word Search**
6. **Generate Parentheses**
7. **Combination Sum**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Backtracking

## Concrete Screen Design

### Learning Goal

Teach that backtracking means choose, explore, undo, and try again when there are many possible paths.

### Habitat

`Maze of Choices`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Maze of Choices
- Screen title: Introduction to Backtracking
- Progress chip: Intro

Scene:
- A branching maze with several decision points
- A current path ribbon showing the choices made so far
- An undo arrow returning to the last branch point

Support strip:
- "Choose one path."
- "If it does not work, undo and try another."

Action zone:
- Choose a branch
- Explore the path
- Step back with undo and try again

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The maze should make decision points feel inviting, not stressful. The current path ribbon needs to show the exact choices already made. The undo arrow should feel calm and helpful because backtracking is not failure, it is part of the plan.



### Background Design

The background for `Maze of Choices` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A branching maze with several decision points, A current path ribbon showing the choices made so far, and An undo arrow returning to the last branch point; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A branching maze with several decision points, A current path ribbon showing the choices made so far, and An undo arrow returning to the last branch point already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Maze of Choices` and should visually support the lesson goal: backtracking means choose, explore, undo, and try again when there are many possible paths. The background should establish the world softly, but the foreground should stay centered on A branching maze with several decision points, A current path ribbon showing the choices made so far, and An undo arrow returning to the last branch point. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A branching maze with several decision points, A current path ribbon showing the choices made so far, and An undo arrow returning to the last branch point should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Choose one path." and "If it does not work, undo and try another.", and the action area should invite one clear next step through Choose a branch, Explore the path, and Step back with undo and try again. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A branching maze with several decision points, A current path ribbon showing the choices made so far, and An undo arrow returning to the last branch point.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Choose one path." and "If it does not work, undo and try another.". The action zone should stay tightly focused on Choose a branch, Explore the path, and Step back with undo and try again, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout introduces the maze and the first choice point.
2. The learner chooses one branch and sees the current path ribbon grow.
3. If the path fails or finishes, the undo arrow returns to the last decision point.
4. A different branch is then explored.
5. The support strip names this cycle as choose, explore, undo.

### Component Usage

- Scene Card
- Current-path ribbon
- Undo arrow
- Decision chips
- Start-lesson CTA

## Intuition

Backtracking is like trying outfits.

Suppose you want to make all possible outfits from:

- shirts
- pants
- shoes

You pick one shirt, then try all pants with it, then try all shoes with that.

After you finish with one shirt, you go back and choose a different shirt.

That is backtracking:
- choose
- explore
- undo
- choose again

---

## The choose, explore, undo pattern

This is the heart of backtracking.

### 1. Choose
Pick one option.

### 2. Explore
Keep solving the smaller problem with that choice included.

### 3. Undo
Remove that choice so other choices can be tried.

That often looks like:

```ts
path.push(choice);   // choose
dfs(..);            // explore
path.pop();          // undo
```

That `pop()` step is very important.

It resets the path so the next choice starts from a clean state.

---

## Recursive decision trees

Backtracking problems often create a **decision tree**.

Example: choose subsets from `[1, 2]`

At each number, we can:
- take it
- skip it

That creates branches:

```txt
start
├── take 1
│   ├── take 2  -> [1, 2]
│   └── skip 2  -> [1]
└── skip 1
    ├── take 2  -> [2]
    └── skip 2  -> []
```

Backtracking walks through this invisible decision tree.

---

## Why backtracking is useful

Some problems do not have one simple straight-line answer.

Sometimes we need to try many possibilities.

Backtracking helps when we must:
- build answers one step at a time
- test whether a partial answer is still valid
- stop early when a path cannot work
- collect all valid results

---

## When To Use Backtracking

A problem may be a good fit for backtracking if it asks for:

- all subsets
- all permutations
- all combinations
- all valid arrangements
- all paths
- puzzle solutions
- word search in a board
- parentheses or placement rules

A big clue is phrases like:
- “return all”
- “find every”
- “generate all”
- “try each possibility”
- “is this partial answer still valid?”

---

## Real-world Example

### Building a password

Imagine making a password one character at a time.

At each step, you choose the next character.

If the password breaks a rule, you stop and try another choice.

That is backtracking.

Or think of searching for a hidden word on a letter board:
- try one path
- if it fails, step back
- try another direction

That is also backtracking.

---

## A common backtracking template

Many backtracking solutions look like this:

```ts
function backtrack(path: number[]): void {
  if (finished) {
    results.push([..path]);
    return;
  }

  for (const choice of choices) {
    if (!allowed(choice)) {
      continue;
    }

    path.push(choice);   // choose
    backtrack(path);     // explore
    path.pop();          // undo
  }
}
```

The exact details change from problem to problem, but the pattern stays similar.

---

## Chapter Outline

In this chapter:

- **Generate All Subsets** teaches include-or-skip decisions
- **Generate All Permutations** teaches position-based arrangement building
- **Letter Combinations of a Phone Number** teaches building strings step by step
- **Word Search** teaches path searching with undo on a grid
- **Generate Parentheses** teaches validity rules during building
- **Combination Sum** teaches how choices can repeat while chasing a target

---

# Lesson 1: Generate All Subsets

## Concrete Screen Design

### Learning Goal

Teach that each number gives two choices: take it or skip it.

### Habitat

`Choice Basket Grove`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Choice Basket Grove
- Lesson title: Generate All Subsets
- Progress chip: 1/6

Scene:
- A row of number baskets
- A branching decision tree with take and skip paths
- A result shelf collecting finished subsets

Support strip:
- "For each number, choose take or skip."
- "Every full path becomes one subset."

Action zone:
- Take the current number
- Skip the current number
- Save the finished subset when choices run out

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The take and skip branches should be visually balanced so both feel like real choices. The current subset should stay visible as a growing basket list. The result shelf should fill with finished subsets in a friendly, orderly way.



### Background Design

The background for `Choice Basket Grove` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of number baskets, A branching decision tree with take and skip paths, and A result shelf collecting finished subsets; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of number baskets, A branching decision tree with take and skip paths, and A result shelf collecting finished subsets already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Choice Basket Grove` and should visually support the lesson goal: each number gives two choices: take it or skip it. The background should establish the world softly, but the foreground should stay centered on A row of number baskets, A branching decision tree with take and skip paths, and A result shelf collecting finished subsets. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of number baskets, A branching decision tree with take and skip paths, and A result shelf collecting finished subsets should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "For each number, choose take or skip." and "Every full path becomes one subset.", and the action area should invite one clear next step through Take the current number, Skip the current number, and Save the finished subset when choices run out. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of number baskets, A branching decision tree with take and skip paths, and A result shelf collecting finished subsets.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "For each number, choose take or skip." and "Every full path becomes one subset.". The action zone should stay tightly focused on Take the current number, Skip the current number, and Save the finished subset when choices run out, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout stands at the first number basket.
2. The learner chooses take or skip.
3. The current subset changes depending on that choice.
4. When all numbers have been decided, the subset moves to the result shelf.
5. The learner backtracks to try the other branch.

### Component Usage

- Scene Card
- Take / skip branch cards
- Current-subset tray
- Result shelf
- Hint card

## Problem

Given an array of distinct numbers `nums`, return all possible subsets.

A subset can include any number of elements, including none.

### Example

**Input:** `nums = [1, 2]`  
**Output:** `[[], [1], [2], [1, 2]]`

Order does not matter.

---

## Intuition

For each number, we have two choices:

- include it
- skip it

That makes this a perfect backtracking problem.

At every step:
- choose whether to add the current number
- explore
- undo if needed
- also explore the skip choice

---

## Walkthrough

For `[1, 2]`

Start with:
- path = `[]`

At number `1`:
- take it -> `[1]`
- or skip it -> `[]`

From `[1]`, at number `2`:
- take it -> `[1, 2]`
- or skip it -> `[1]`

From `[]`, at number `2`:
- take it -> `[2]`
- or skip it -> `[]`

All subsets are:
- `[1, 2]`
- `[1]`
- `[2]`
- `[]`

---

## TypeScript Solution

```ts
function subsets(nums: number[]): number[][] {
  const results: number[][] = [];

  function backtrack(index: number, path: number[]): void {
    if (index === nums.length) {
      results.push([..path]);
      return;
    }

    // take nums[index]
    path.push(nums[index]);
    backtrack(index + 1, path);
    path.pop();

    // skip nums[index]
    backtrack(index + 1, path);
  }

  backtrack(0, []);
  return results;
}
```

---

## Why it works

At each index, we explore both choices:
- take
- skip

That covers every possible subset exactly once.

---

## Complexity Analysis

There are `2^n` subsets for `n` numbers.

- **Time:** `O(n * 2^n)`
- **Space:** depends on recursion depth and output size

---

## Test Cases

```ts
subsets([1, 2]) // [[], [1], [2], [1, 2]] in any order
subsets([1]) // [[], [1]]
subsets([]) // [[]]
```

---

## Quick Check

What are the two choices for each number in the subset problem?

**Answer:** Include it or skip it.

---

# Lesson 2: Generate All Permutations

## Concrete Screen Design

### Learning Goal

Teach that permutations are built by choosing which unused number goes in the next spot.

### Habitat

`Parade Line Plaza`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Parade Line Plaza
- Lesson title: Generate All Permutations
- Progress chip: 2/6

Scene:
- A row of empty parade spots
- A set of unused number cards
- A used-card tray and a finished-parade shelf

Support strip:
- "Pick one unused card for the next spot."
- "Undo the pick so other orders can be tried."

Action zone:
- Choose an unused number
- Place it in the next parade spot
- Undo and try a different card

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The empty parade spots should make order matter visually. Used cards should clearly move out of the unused pile and into the current arrangement. Finished permutations should line up neatly on the shelf.



### Background Design

The background for `Parade Line Plaza` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of empty parade spots, A set of unused number cards, and A used-card tray and a finished-parade shelf; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of empty parade spots, A set of unused number cards, and A used-card tray and a finished-parade shelf already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Parade Line Plaza` and should visually support the lesson goal: permutations are built by choosing which unused number goes in the next spot. The background should establish the world softly, but the foreground should stay centered on A row of empty parade spots, A set of unused number cards, and A used-card tray and a finished-parade shelf. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of empty parade spots, A set of unused number cards, and A used-card tray and a finished-parade shelf should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Pick one unused card for the next spot." and "Undo the pick so other orders can be tried.", and the action area should invite one clear next step through Choose an unused number, Place it in the next parade spot, and Undo and try a different card. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of empty parade spots, A set of unused number cards, and A used-card tray and a finished-parade shelf.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Pick one unused card for the next spot." and "Undo the pick so other orders can be tried.". The action zone should stay tightly focused on Choose an unused number, Place it in the next parade spot, and Undo and try a different card, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout starts with all cards unused.
2. The learner chooses one card for the next open spot.
3. The card moves into the parade line and becomes used.
4. When the line is full, the permutation moves to the finished shelf.
5. The learner undoes the last choice and tries another unused card.

### Component Usage

- Scene Card
- Unused-card tray
- Parade spot row
- Finished-permutation shelf
- Hint card

## Problem

Given an array of distinct numbers `nums`, return all possible permutations.

A permutation is an arrangement using all the numbers in some order.

### Example

**Input:** `nums = [1, 2, 3]`

**Output includes:**
- `[1, 2, 3]`
- `[1, 3, 2]`
- `[2, 1, 3]`
- `[2, 3, 1]`
- `[3, 1, 2]`
- `[3, 2, 1]`

---

## Intuition

A subset problem decides whether to include something.

A permutation problem decides:

> “Which unused number should go next?”

At each step:
- try each number that has not been used yet
- add it to the path
- explore deeper
- undo it afterward

We need a way to remember which numbers are already used.

---

## Walkthrough

For `[1, 2]`

Start:
- path = `[]`

Choices for first spot:
- 1
- 2

If we choose `1`:
- path = `[1]`

Now only `2` is unused:
- path = `[1, 2]`

That gives one permutation.

Then undo and try:
- first choose `2`
- then choose `1`

That gives `[2, 1]`.

---

## TypeScript Solution

```ts
function permute(nums: number[]): number[][] {
  const results: number[][] = [];
  const used = new Array(nums.length).fill(false);

  function backtrack(path: number[]): void {
    if (path.length === nums.length) {
      results.push([..path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }

      used[i] = true;
      path.push(nums[i]);

      backtrack(path);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return results;
}
```

---

## Why it works

Each step picks one unused number for the next position.

The `used` array makes sure each number appears only once in a path.

---

## Complexity Analysis

There are `n!` permutations.

- **Time:** about `O(n * n!)`
- **Space:** depends on recursion depth and output size

---

## Test Cases

```ts
permute([1, 2]) // [[1,2],[2,1]]
permute([1]) // [[1]]
permute([]) // [[]]
```

---

## Pattern Reminder

Subsets decide “take or skip.”
Permutations decide “who goes next?”

---

# Lesson 3: Letter Combinations of a Phone Number

## Concrete Screen Design

### Learning Goal

Teach that each phone digit gives a small set of letters, and backtracking tries every letter choice step by step.

### Habitat

`Phone Garden Gate`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Phone Garden Gate
- Lesson title: Letter Combinations of a Phone Number
- Progress chip: 3/6

Scene:
- A row of phone digits with their letter petals beneath them
- A growing word vine showing the current combination
- A result board collecting completed words

Support strip:
- "Each digit opens a small letter set."
- "Pick one letter, then move to the next digit."

Action zone:
- Choose a letter from the current digit
- Grow the word vine
- Save a completed combination

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The letter petals should make the digit-to-letter mapping feel playful and easy to scan. The word vine should grow one letter at a time so the combination feels built, not just listed. Keep the result board visible but secondary.



### Background Design

The background for `Phone Garden Gate` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of phone digits with their letter petals beneath them, A growing word vine showing the current combination, and A result board collecting completed words; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of phone digits with their letter petals beneath them, A growing word vine showing the current combination, and A result board collecting completed words already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Phone Garden Gate` and should visually support the lesson goal: each phone digit gives a small set of letters, and backtracking tries every letter choice step by step. The background should establish the world softly, but the foreground should stay centered on A row of phone digits with their letter petals beneath them, A growing word vine showing the current combination, and A result board collecting completed words. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of phone digits with their letter petals beneath them, A growing word vine showing the current combination, and A result board collecting completed words should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Each digit opens a small letter set." and "Pick one letter, then move to the next digit.", and the action area should invite one clear next step through Choose a letter from the current digit, Grow the word vine, and Save a completed combination. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of phone digits with their letter petals beneath them, A growing word vine showing the current combination, and A result board collecting completed words.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Each digit opens a small letter set." and "Pick one letter, then move to the next digit.". The action zone should stay tightly focused on Choose a letter from the current digit, Grow the word vine, and Save a completed combination, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout reveals the first digit and its letter petals.
2. The learner chooses one letter and adds it to the word vine.
3. The process repeats for the next digit.
4. When every digit has been used, the full combination goes to the result board.
5. The learner backtracks to try a different letter choice.

### Component Usage

- Scene Card
- Digit petals
- Word vine
- Result board
- Hint card

## Problem

A phone keypad maps digits to letters.

Example:
- `2` -> `"abc"`
- `3` -> `"def"`
- `4` -> `"ghi"`

Given a string of digits, return all possible letter combinations.

### Example

**Input:** `digits = "23"`  
**Output:**  
`["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`

---

## Intuition

Each digit gives us a small set of choices.

For digit `"2"`:
- `a`
- `b`
- `c`

For digit `"3"`:
- `d`
- `e`
- `f`

We build the answer one letter at a time.

At each digit:
- try each possible letter
- add it to the current path
- recurse to the next digit
- undo it

---

## Walkthrough

Digits: `"23"`

Start with empty path:
- `""`

For digit `"2"`:
- choose `a`
- choose `b`
- choose `c`

If we choose `a`, then for digit `"3"`:
- `ad`
- `ae`
- `af`

If we choose `b`, then:
- `bd`
- `be`
- `bf`

If we choose `c`, then:
- `cd`
- `ce`
- `cf`

---

## TypeScript Solution

```ts
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const map = new Map<string, string>([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const results: string[] = [];

  function backtrack(index: number, path: string): void {
    if (index === digits.length) {
      results.push(path);
      return;
    }

    const letters = map.get(digits[index]) ?? "";

    for (const ch of letters) {
      backtrack(index + 1, path + ch);
    }
  }

  backtrack(0, "");
  return results;
}
```

---

## Why it works

Each digit creates a branching choice.

Backtracking tries every letter for the current digit and continues until a full word is built.

---

## Complexity Analysis

If each digit has about 3 or 4 choices, the number of combinations grows quickly.

- **Time:** exponential in the number of digits
- **Space:** depends on recursion depth and output size

---

## Test Cases

```ts
letterCombinations("23") // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
letterCombinations("2") // ["a","b","c"]
letterCombinations("") // []
```

---

## Quick Check

What does one digit contribute in this problem?

**Answer:** A set of possible letters for the next position.

---

# Lesson 4: Word Search

## Concrete Screen Design

### Learning Goal

Teach that we can search a word in a grid by trying paths and undoing when a path stops working.

### Habitat

`Letter Trail Field`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Letter Trail Field
- Lesson title: Word Search
- Progress chip: 4/6

Scene:
- A letter grid with one active path highlighted
- A target word badge above the grid
- A visited-cell trail showing which squares are in the current path

Support strip:
- "Move to neighboring letters only."
- "If the path breaks, step back and try another direction."

Action zone:
- Start from a possible first letter
- Explore neighboring cells
- Undo visited cells when the path fails

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The grid needs to be large and readable, with the current path easy to trace. Visited cells should be visibly marked so the learner knows they cannot be reused in the same path. Failed-path steps should fade gently when undone.



### Background Design

The background for `Letter Trail Field` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A letter grid with one active path highlighted, A target word badge above the grid, and A visited-cell trail showing which squares are in the current path; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A letter grid with one active path highlighted, A target word badge above the grid, and A visited-cell trail showing which squares are in the current path already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Letter Trail Field` and should visually support the lesson goal: we can search a word in a grid by trying paths and undoing when a path stops working. The background should establish the world softly, but the foreground should stay centered on A letter grid with one active path highlighted, A target word badge above the grid, and A visited-cell trail showing which squares are in the current path. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A letter grid with one active path highlighted, A target word badge above the grid, and A visited-cell trail showing which squares are in the current path should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Move to neighboring letters only." and "If the path breaks, step back and try another direction.", and the action area should invite one clear next step through Start from a possible first letter, Explore neighboring cells, and Undo visited cells when the path fails. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A letter grid with one active path highlighted, A target word badge above the grid, and A visited-cell trail showing which squares are in the current path.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Move to neighboring letters only." and "If the path breaks, step back and try another direction.". The action zone should stay tightly focused on Start from a possible first letter, Explore neighboring cells, and Undo visited cells when the path fails, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout finds a possible starting letter in the grid.
2. The learner follows one neighboring path trying to match the target word.
3. The visited-cell trail grows as letters match.
4. If the path fails, the trail rolls back one step at a time.
5. The learner tries a new direction or a new start cell.

### Component Usage

- Scene Card
- Target word badge
- Visited-cell trail
- Grid highlight
- Hint card

## Problem

Given a 2D board of letters and a word, return `true` if the word exists in the board.

You may move:
- up
- down
- left
- right

You may not use the same cell twice in one path.

### Example

Board:

```txt
A B C E
S F C S
A D E E
```

Word:
```txt
ABCCED
```

Output:
- `true`

---

## Intuition

This is a path-searching backtracking problem.

At each step:
- match the next letter
- move to neighboring cells
- mark the current cell as used
- explore
- undo the mark afterward

This undo step is what makes it backtracking.

---

## Walkthrough

To find `"ABCCED"`:
- start at `A`
- move to `B`
- move to `C`
- move to `C`
- move to `E`
- move to `D`

If a path fails at some point:
- backtrack
- unmark the cell
- try a different direction

---

## TypeScript Solution

```ts
function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r: number, c: number, index: number): boolean {
    if (index === word.length) {
      return true;
    }

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false;
    }

    const temp = board[r][c];
    board[r][c] = "#";

    const found =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);

    board[r][c] = temp;
    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
}
```

---

## Why it works

Each DFS call tries to match one more letter.

Marking the current cell prevents reuse in the same path.

Restoring the cell afterward lets other paths try it later.

---

## Complexity Analysis

This can branch in several directions, so it can grow quickly.

- **Time:** can be large in the worst case
- **Space:** recursion depth up to the word length

---

## Test Cases

```ts
exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCCED"
) // true

exist(
  [
    ["A", "B"],
    ["C", "D"],
  ],
  "ABCD"
) // false
```

---

## Challenge Thought

This lesson mixes:
- grid traversal
- backtracking
- visited marking

That is why it is one of the most famous backtracking problems.

---

# Lesson 5: Generate Parentheses

## Concrete Screen Design

### Learning Goal

Teach that we build parentheses strings carefully by keeping them valid as we go.

### Habitat

`Bracket Balance Stage`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Bracket Balance Stage
- Lesson title: Generate Parentheses
- Progress chip: 5/6

Scene:
- A stage showing a growing parentheses string
- Open-count and close-count meters
- A validity shield that dims when a move would break the rules

Support strip:
- "You can only close if there is something open to match."
- "Build only valid strings as you go."

Action zone:
- Add an opening parenthesis
- Add a closing parenthesis when allowed
- Save a finished valid string

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The open-count and close-count meters should make the rule visible rather than hidden in logic. The validity shield should gently block invalid moves instead of letting the learner wander into broken strings. Finished strings should appear on a neat result banner.



### Background Design

The background for `Bracket Balance Stage` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A stage showing a growing parentheses string, Open-count and close-count meters, and A validity shield that dims when a move would break the rules; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A stage showing a growing parentheses string, Open-count and close-count meters, and A validity shield that dims when a move would break the rules already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Bracket Balance Stage` and should visually support the lesson goal: we build parentheses strings carefully by keeping them valid as we go. The background should establish the world softly, but the foreground should stay centered on A stage showing a growing parentheses string, Open-count and close-count meters, and A validity shield that dims when a move would break the rules. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A stage showing a growing parentheses string, Open-count and close-count meters, and A validity shield that dims when a move would break the rules should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "You can only close if there is something open to match." and "Build only valid strings as you go.", and the action area should invite one clear next step through Add an opening parenthesis, Add a closing parenthesis when allowed, and Save a finished valid string. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A stage showing a growing parentheses string, Open-count and close-count meters, and A validity shield that dims when a move would break the rules.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "You can only close if there is something open to match." and "Build only valid strings as you go.". The action zone should stay tightly focused on Add an opening parenthesis, Add a closing parenthesis when allowed, and Save a finished valid string, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout begins with an empty string.
2. The learner adds opening parentheses while there are still openings left.
3. Closing parentheses become available only when the string stays valid.
4. A finished valid string is saved when both counts reach the goal.
5. The learner backtracks to try a different valid path.

### Component Usage

- Scene Card
- Open / close count meters
- Validity shield
- Result banner
- Hint card

## Problem

Given `n`, return all combinations of `n` pairs of valid parentheses.

### Example

**Input:** `n = 3`

**Output includes:**
- `"((()))"`
- `"(()())"`
- `"(())()"`
- `"()(())"`
- `"()()()"`

---

## Intuition

We build the answer one character at a time.

At each step, we may choose:
- `"("`
- `")"`

But not every partial path is valid.

Rules:
- we can use at most `n` opening parentheses
- we can use at most `n` closing parentheses
- we can never place more closing parentheses than opening ones so far

That is the key pruning idea.

Backtracking becomes much smarter when we stop invalid paths early.

---

## Walkthrough

For `n = 2`

Start:
- `""`

Can add `"("`
- `"("`

From `"("`, can add:
- `"("` -> `"(("`
- `")"` -> `"()"`

If we ever try to make a path like:
- `")("`

that is invalid immediately because it closes before opening.

So we do not explore it.

---

## TypeScript Solution

```ts
function generateParenthesis(n: number): string[] {
  const results: string[] = [];

  function backtrack(path: string, open: number, close: number): void {
    if (path.length === n * 2) {
      results.push(path);
      return;
    }

    if (open < n) {
      backtrack(path + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(path + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return results;
}
```

---

## Why it works

The recursion builds valid strings only.

The rule `close < open` prevents illegal partial paths.

That means we never waste time finishing strings that can never become valid.

---

## Complexity Analysis

The number of valid answers grows quickly as `n` grows.

- **Time:** related to the number of valid parenthesis strings
- **Space:** recursion depth up to `2n`

---

## Test Cases

```ts
generateParenthesis(1) // ["()"]
generateParenthesis(2) // ["(())","()()"]
generateParenthesis(3) // 5 valid strings
```

---

## Quick Check

Why can we add `")"` only when `close < open`?

**Answer:** Because we can never close more parentheses than we have opened.

---

# Lesson 6: Combination Sum

## Concrete Screen Design

### Learning Goal

Teach that we can keep adding choices toward a target sum and backtrack when we go too far.

### Habitat

`Target Trail Market`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Target Trail Market
- Lesson title: Combination Sum
- Progress chip: 6/6

Scene:
- A set of number stalls the learner can choose from
- A current path basket showing chosen numbers
- A target-sum meter and over-limit warning

Support strip:
- "Keep adding choices toward the goal."
- "If the sum gets too big, undo and try another path."

Action zone:
- Pick a number
- Update the current sum
- Save or undo based on whether the sum hits, misses, or passes the target

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The target-sum meter should make progress toward the goal easy to read. The over-limit warning should be informative rather than punishing. The current path basket should show repeated choices clearly because numbers may be reused.



### Background Design

The background for `Target Trail Market` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A set of number stalls the learner can choose from, A current path basket showing chosen numbers, and A target-sum meter and over-limit warning; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A set of number stalls the learner can choose from, A current path basket showing chosen numbers, and A target-sum meter and over-limit warning already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Target Trail Market` and should visually support the lesson goal: we can keep adding choices toward a target sum and backtrack when we go too far. The background should establish the world softly, but the foreground should stay centered on A set of number stalls the learner can choose from, A current path basket showing chosen numbers, and A target-sum meter and over-limit warning. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A set of number stalls the learner can choose from, A current path basket showing chosen numbers, and A target-sum meter and over-limit warning should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Keep adding choices toward the goal." and "If the sum gets too big, undo and try another path.", and the action area should invite one clear next step through Pick a number, Update the current sum, and Save or undo based on whether the sum hits, misses, or passes the target. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A set of number stalls the learner can choose from, A current path basket showing chosen numbers, and A target-sum meter and over-limit warning.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Keep adding choices toward the goal." and "If the sum gets too big, undo and try another path.". The action zone should stay tightly focused on Pick a number, Update the current sum, and Save or undo based on whether the sum hits, misses, or passes the target, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout chooses a number stall and adds it to the basket.
2. The learner watches the target meter move toward the goal.
3. If the sum hits the target, the combination is saved.
4. If the sum goes too high, the last choice is undone.
5. The process continues until all useful paths are explored.

### Component Usage

- Scene Card
- Current-path basket
- Target-sum meter
- Over-limit warning chip
- Hint card

## Problem

Given an array of distinct positive integers `candidates` and a target number `target`, return all unique combinations where the chosen numbers add up to `target`.

You may reuse the same number many times.

### Example

**Input:** `candidates = [2, 3, 6, 7]`, `target = 7`

**Output:**
- `[2, 2, 3]`
- `[7]`

---

## Intuition

This is a combination-building problem.

At each step, we choose one candidate and subtract it from the remaining target.

There are two important ideas:
- if the remaining target becomes exactly 0, we found a valid combination
- if it becomes negative, stop that path

To avoid duplicate combinations in different orders, we use a `start` index.

That means once we choose from position `i`, we can continue using `i` or later, but not earlier numbers.

---

## Walkthrough

Candidates:
- `[2, 3, 6, 7]`
Target:
- `7`

Start with `[]`, remaining `7`

Choose `2`
- path `[2]`, remaining `5`

Choose `2` again
- path `[2, 2]`, remaining `3`

Choose `3`
- path `[2, 2, 3]`, remaining `0`

That is a valid answer.

Another path:
- choose `7`
- path `[7]`, remaining `0`

Also valid.

---

## TypeScript Solution

```ts
function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = [];

  function backtrack(start: number, remaining: number, path: number[]): void {
    if (remaining === 0) {
      results.push([..path]);
      return;
    }

    if (remaining < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, remaining - candidates[i], path);
      path.pop();
    }
  }

  backtrack(0, target, []);
  return results;
}
```

---

## Why it works

The recursion keeps building combinations until:
- the target is reached exactly
- or the path goes too far and must stop

The `start` index prevents duplicate orderings like `[2, 3]` and `[3, 2]` from both appearing.

---

## Complexity Analysis

This can branch many ways, so it grows quickly in hard cases.

- **Time:** exponential in the worst case
- **Space:** depends on recursion depth and output size

---

## Test Cases

```ts
combinationSum([2, 3, 6, 7], 7) // [[2,2,3],[7]]
combinationSum([2, 3, 5], 8) // [[2,2,2,2],[2,3,3],[3,5]]
combinationSum([2], 1) // []
```

---

## Pattern Reminder

Backtracking often becomes stronger when we can stop bad paths early.

That is called **pruning**.

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review choose-explore-undo, decision trees, valid partial paths, and when backtracking should stop early.

### Habitat

`Choice Review Campfire`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Choice Review Campfire
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review wall with six mini decision-tree scenes
- Tool chips for choose, explore, undo, valid path, stop early, save result
- A reminder banner that says "try, check, undo"

Support strip:
- "Ask what choice you are making now."
- "Then ask whether the partial path can still work."

Action zone:
- Match each mini-scene to the right backtracking idea
- Sort clue chips to the correct lesson
- Explain where the undo step happens

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review wall should feel like a campfire planning board full of branch sketches. The "try, check, undo" banner should stay visible because it summarizes the whole chapter. Mini-scenes should keep one branch highlighted so they stay easy to read.



### Background Design

The background for `Choice Review Campfire` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A review wall with six mini decision-tree scenes, Tool chips for choose, explore, undo, valid path, stop early, save result, and A reminder banner that says "try, check, undo"; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A review wall with six mini decision-tree scenes, Tool chips for choose, explore, undo, valid path, stop early, save result, and A reminder banner that says "try, check, undo" already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Choice Review Campfire` and should visually support the lesson goal: review choose-explore-undo, decision trees, valid partial paths, and when backtracking should stop early. The background should establish the world softly, but the foreground should stay centered on A review wall with six mini decision-tree scenes, Tool chips for choose, explore, undo, valid path, stop early, save result, and A reminder banner that says "try, check, undo". Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A review wall with six mini decision-tree scenes, Tool chips for choose, explore, undo, valid path, stop early, save result, and A reminder banner that says "try, check, undo" should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask what choice you are making now." and "Then ask whether the partial path can still work.", and the action area should invite one clear next step through Match each mini-scene to the right backtracking idea, Sort clue chips to the correct lesson, and Explain where the undo step happens. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A review wall with six mini decision-tree scenes, Tool chips for choose, explore, undo, valid path, stop early, save result, and A reminder banner that says "try, check, undo".

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask what choice you are making now." and "Then ask whether the partial path can still work.". The action zone should stay tightly focused on Match each mini-scene to the right backtracking idea, Sort clue chips to the correct lesson, and Explain where the undo step happens, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout opens the review wall of decision paths.
2. The learner matches each scene to the right backtracking idea.
3. Clue chips slide into the correct recap panel.
4. The support strip explains the reasoning in one short sentence.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Tool chips
- Mini decision-tree scenes
- Mascot speech bubble
- Next-step panel

## What you learned

In this chapter, you learned that backtracking means:

- choose
- explore
- undo

You learned how to:

- generate subsets
- generate permutations
- build strings one step at a time
- search paths in a board
- enforce rules during construction
- prune impossible paths early

---

## Pattern Summary

### Generate Subsets
- take or skip each item

### Generate Permutations
- choose one unused item for the next position

### Letter Combinations
- choose a letter for each digit

### Word Search
- try neighboring paths
- mark visited
- undo after exploring

### Generate Parentheses
- build only valid partial strings

### Combination Sum
- try candidates
- stop when remaining target goes below 0
- use a start index to avoid duplicates

---

## When this pattern is a clue

Think about backtracking when you see:

- return all possibilities
- generate all valid answers
- puzzle search
- path search
- combinations
- permutations
- need to undo choices

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can read a choice point and decide what to try, keep, or undo with less support.

### Habitat

`Final Branch Challenge`

### Primary Mascot

`Scout the Rabbit`

### Screen Composition

```txt
Header:
- Back
- Final Branch Challenge
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused backtracking challenge
- A visible current path and next choice point
- A result badge area above the scene

Support strip:
- "What should you try next?"
- "If it cannot work, where should you undo?"

Action zone:
- Predict the next choice
- Solve one short backtracking challenge
- Explain why the path stayed valid or had to be undone

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay focused on the current path and choice point. The result area should remain simple so the decision process is the main teacher. Undo cues should be visible but calm.



### Background Design

The background for `Final Branch Challenge` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One focused backtracking challenge, A visible current path and next choice point, and A result badge area above the scene; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One focused backtracking challenge, A visible current path and next choice point, and A result badge area above the scene already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Scout the Rabbit should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Final Branch Challenge` and should visually support the lesson goal: check whether the learner can read a choice point and decide what to try, keep, or undo with less support. The background should establish the world softly, but the foreground should stay centered on One focused backtracking challenge, A visible current path and next choice point, and A result badge area above the scene. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Scout the Rabbit should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One focused backtracking challenge, A visible current path and next choice point, and A result badge area above the scene should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "What should you try next?" and "If it cannot work, where should you undo?", and the action area should invite one clear next step through Predict the next choice, Solve one short backtracking challenge, and Explain why the path stayed valid or had to be undone. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One focused backtracking challenge, A visible current path and next choice point, and A result badge area above the scene.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "What should you try next?" and "If it cannot work, where should you undo?". The action zone should stay tightly focused on Predict the next choice, Solve one short backtracking challenge, and Explain why the path stayed valid or had to be undone, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Scout presents a final decision-tree challenge with limited guidance.
2. The learner studies the current path and next branch.
3. The learner chooses a move or decides to undo.
4. A short reflection asks what clue made the path valid or invalid.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Current-path ribbon
- Prediction prompt
- Reflection prompt
- Result feedback card

Try these before looking at the answers.

## 1. Fill in the blank

Backtracking usually follows the pattern: choose, explore, and ________.

**Answer:** undo

---

## 2. True or False

Backtracking is useful when we need to try many possibilities.

**Answer:** True

---

## 3. Short Answer

Why is the undo step important?

**Answer:** It resets the current path so we can try the next choice correctly.

---

## 4. Short Answer

What is pruning in backtracking?

**Answer:** Pruning means stopping a path early when we already know it cannot lead to a valid answer.

---

## 5. Fill in the blank

In many backtracking solutions, we add a choice with `push()` and remove it with `_______()`.

**Answer:** pop

---

## 6. Mini Coding Challenge

Write a function that returns all one-letter strings from the letters `"a"`, `"b"`, and `"c"` using the style of backtracking.

```ts
function singleLetters(): string[] {
  const results: string[] = [];
  const letters = ["a", "b", "c"];

  function backtrack(path: string): void {
    if (path.length === 1) {
      results.push(path);
      return;
    }

    for (const ch of letters) {
      backtrack(path + ch);
    }
  }

  backtrack("");
  return results;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why backtracking is like solving a maze.

**Sample answer:** Backtracking is like solving a maze because you try one path, and if it does not work, you step back to the last choice and try a different route.

---

# Friendly Wrap-up

Backtracking teaches an important coding lesson:

> Sometimes the best way to solve a problem  
> is to build the answer step by step.

That is why backtracking appears in puzzles, search problems, and generation problems.

The more you practice backtracking, the more you will notice:

- when a problem is really about choices
- when undoing is the key step
- when a partial answer can already be checked
- when pruning can save a lot of time

That is a powerful pattern to add to your algorithm toolbox.
