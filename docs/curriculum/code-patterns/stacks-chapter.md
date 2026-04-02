---
title: "Stacks"
chapterSlug: "stacks"
order: 7
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 95
skills:
  - "Explain how last-in, first-out ordering works"
  - "Use push, pop, and peek with a stack"
  - "Recognize when a stack helps solve a problem"
  - "Trace stack-based code step by step"
---

# Stacks

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A stack follows **last in, first out**. The last thing you put on top is the first thing you take off.

---

# Chapter Overview

Imagine a stack of plates.

When you add a new plate, you put it on the **top**.

When you remove a plate, you also take it from the **top**.

You do not pull one out from the middle.

That is how a **stack** works in programming.

A stack is a data structure that follows this rule:

> **Last In, First Out**  
> The last item added is the first item removed.

Stacks are useful when problems involve:

- undoing actions
- matching opening and closing symbols
- keeping track of unfinished work
- remembering things until the right moment
- looking backward at recent items

In this chapter, we will learn:

1. **Introduction to Stacks**
   - Intuition
   - Push, Pop, and Peek
   - When To Use a Stack
   - Real-world Example
2. **Implement a Stack with an Array**
3. **Valid Parentheses**
4. **Remove All Adjacent Duplicates**
5. **Baseball Game**
6. **Next Greater Element**
7. **Evaluate Reverse Polish Notation**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Stacks

## Concrete Screen Design

### Learning Goal

Teach that a stack keeps items in last-in, first-out order, and that all the important action happens at the top.

### Habitat

`Plate Tower Kitchen`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Plate Tower Kitchen
- Screen title: Introduction to Stacks
- Progress chip: Intro

Scene:
- A tall stack of colorful plates
- A glowing top marker
- Push, pop, and peek labels near the stack

Support strip:
- "The top is the action spot."
- "Last in means first out."

Action zone:
- Add a plate to the top
- Remove the top plate
- Peek at the top without removing it

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The plate tower should feel stable and readable, with the top plate clearly highlighted. Keep all movement vertical so the learner associates stacks with top-only actions. Push, pop, and peek should be shown as distinct but gentle interactions.



### Background Design

The background for `Plate Tower Kitchen` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A tall stack of colorful plates, A glowing top marker, and Push, pop, and peek labels near the stack; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A tall stack of colorful plates, A glowing top marker, and Push, pop, and peek labels near the stack already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Plate Tower Kitchen` and should visually support the lesson goal: a stack keeps items in last-in, first-out order, and that all the important action happens at the top. The background should establish the world softly, but the foreground should stay centered on A tall stack of colorful plates, A glowing top marker, and Push, pop, and peek labels near the stack. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A tall stack of colorful plates, A glowing top marker, and Push, pop, and peek labels near the stack should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "The top is the action spot." and "Last in means first out.", and the action area should invite one clear next step through Add a plate to the top, Remove the top plate, and Peek at the top without removing it. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A tall stack of colorful plates, A glowing top marker, and Push, pop, and peek labels near the stack.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "The top is the action spot." and "Last in means first out.". The action zone should stay tightly focused on Add a plate to the top, Remove the top plate, and Peek at the top without removing it, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel introduces the plate tower and points to the top.
2. The learner pushes a new plate onto the stack.
3. A peek bubble reveals the top plate without removing it.
4. A pop action removes that same top plate.
5. The support strip names this rule as last in, first out.

### Component Usage

- Scene Card
- Top marker
- Action buttons for push, pop, peek
- Peek bubble
- Start-lesson CTA

## Intuition

A stack is like a pile of books.

If you place books one on top of another:

- the newest book is on top
- the oldest book is near the bottom

If you want to remove one, the easiest one to take is the top book.

That means the stack has an important order:

- add to the top
- remove from the top

This is called **LIFO**:

- **Last In**
- **First Out**

---

## The three main stack actions

Stacks usually have these important actions:

### 1. Push

Add an item to the top.

```ts
stack.push(5);
```

If the stack was:

```txt
[2, 7]
```

after pushing `5`, it becomes:

```txt
[2, 7, 5]
```

---

### 2. Pop

Remove the top item.

```ts
stack.pop();
```

If the stack was:

```txt
[2, 7, 5]
```

after popping, it becomes:

```txt
[2, 7]
```

The removed item was `5`.

---

### 3. Peek

Look at the top item without removing it.

```ts
stack[stack.length - 1]
```

If the stack is:

```txt
[2, 7, 5]
```

then the top is `5`.

---

## Why stacks are useful

A stack is helpful when the **most recent unfinished thing** matters most.

Examples:

- a text editor’s undo button
- checking whether symbols like `(` and `)` match correctly
- remembering previous steps
- solving problems where items wait until a future moment

---

## When To Use a Stack

A problem may be a good fit for a stack if it involves:

- nested things, like brackets inside brackets
- reversing order
- undoing the latest action
- looking at the most recent item first
- matching opening and closing symbols
- “remove while top matches something”

A big clue is when the problem wants you to compare something new with the **most recent unfinished item**.

That often means “use a stack.”

---

## Real-world Example

### Cafeteria tray stack

In a cafeteria, trays are often stacked on top of each other.

If a new tray is added, it goes on top.

If a tray is taken, it also comes from the top.

That is a stack.

Or imagine a web browser’s back history:

- the most recently visited page is the first one you go back to

That also feels stack-like.

---

## Stacks in TypeScript

A simple way to use a stack in TypeScript is with an array:

```ts
const stack: number[] = [];

stack.push(10);
stack.push(20);

console.log(stack.pop()); // 20
console.log(stack[stack.length - 1]); // 10
```

The end of the array acts like the top of the stack.

---

## Chapter Outline

In this chapter:

- **Implement a Stack with an Array** teaches the basic stack operations
- **Valid Parentheses** teaches matching open and close symbols
- **Remove All Adjacent Duplicates** teaches how stacks can erase patterns
- **Baseball Game** teaches how a stack can remember previous scores
- **Next Greater Element** teaches how stacks help compare current values to earlier ones
- **Evaluate Reverse Polish Notation** teaches how stacks help process math expressions

---

# Lesson 1: Implement a Stack with an Array

## Concrete Screen Design

### Learning Goal

Teach that the end of an array can act like the top of a stack.

### Habitat

`Tray Rack Lab`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Tray Rack Lab
- Lesson title: Implement a Stack with an Array
- Progress chip: 1/6

Scene:
- An array tray shown as horizontal slots
- A top arrow pointing to the last slot
- Push, pop, peek, and empty-state badges

Support strip:
- "The last slot is the top of the stack."
- "Push and pop happen at the end."

Action zone:
- Push a new value
- Pop the last value
- Peek at the last value
- Check whether the stack is empty

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Keep the array slots big and simple, with the last slot clearly marked as the top. The end-focused movement should feel obvious so children see why arrays can model stacks well. Empty states should be calm and unambiguous.



### Background Design

The background for `Tray Rack Lab` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo An array tray shown as horizontal slots, A top arrow pointing to the last slot, and Push, pop, peek, and empty-state badges; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If An array tray shown as horizontal slots, A top arrow pointing to the last slot, and Push, pop, peek, and empty-state badges already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Tray Rack Lab` and should visually support the lesson goal: the end of an array can act like the top of a stack. The background should establish the world softly, but the foreground should stay centered on An array tray shown as horizontal slots, A top arrow pointing to the last slot, and Push, pop, peek, and empty-state badges. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. An array tray shown as horizontal slots, A top arrow pointing to the last slot, and Push, pop, peek, and empty-state badges should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "The last slot is the top of the stack." and "Push and pop happen at the end.", and the action area should invite one clear next step through Push a new value, Pop the last value, Peek at the last value, and Check whether the stack is empty. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through An array tray shown as horizontal slots, A top arrow pointing to the last slot, and Push, pop, peek, and empty-state badges.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "The last slot is the top of the stack." and "Push and pop happen at the end.". The action zone should stay tightly focused on Push a new value, Pop the last value, Peek at the last value, and Check whether the stack is empty, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel starts with an empty tray rack.
2. The learner pushes values onto the end.
3. The top arrow follows the last filled slot.
4. Peek and pop both use that same final slot.
5. The screen explains that the array end is acting like the stack top.

### Component Usage

- Scene Card
- Array slot row
- Top arrow
- Action badges
- Hint card

## Problem

Create a stack that supports these actions:

- `push(x)` adds `x` to the top
- `pop()` removes and returns the top item
- `peek()` returns the top item without removing it
- `isEmpty()` returns whether the stack is empty

---

## Intuition

The easiest way to build a stack in TypeScript is to use an array.

We let the **end of the array** be the top of the stack.

That means:

- `push` adds to the end
- `pop` removes from the end
- `peek` looks at the last item

---

## Example

Start with an empty stack:

```txt
[]
```

Push `3`:

```txt
[3]
```

Push `8`:

```txt
[3, 8]
```

Peek:
- top is `8`

Pop:
- remove `8`

Now the stack is:

```txt
[3]
```

---

## TypeScript Solution

```ts
class MyStack {
  private items: number[] = [];

  push(x: number): void {
    this.items.push(x);
  }

  pop(): number | undefined {
    return this.items.pop();
  }

  peek(): number | undefined {
    if (this.items.length === 0) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
```

---

## Why it works

The top of the stack is always the end of the array.

That makes all the main stack actions simple and fast.

---

## Complexity Analysis

- **Push:** `O(1)` on average
- **Pop:** `O(1)`
- **Peek:** `O(1)`
- **isEmpty:** `O(1)`

---

## Test Cases

```ts
const stack = new MyStack();

stack.isEmpty(); // true
stack.push(3);
stack.push(8);
stack.peek(); // 8
stack.pop(); // 8
stack.peek(); // 3
stack.isEmpty(); // false
```

---

## Quick Check

What part of the array acts like the top of the stack?

**Answer:** The end of the array.

---

# Lesson 2: Valid Parentheses

## Concrete Screen Design

### Learning Goal

Teach that a stack can remember opening symbols until the matching closing symbols appear.

### Habitat

`Bracket Castle Gate`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Bracket Castle Gate
- Lesson title: Valid Parentheses
- Progress chip: 2/6

Scene:
- A path of bracket symbols entering a castle gate
- An opening-symbol stack beside the path
- A match light that turns on for correct pairs

Support strip:
- "Push openers."
- "When a closer arrives, check the top."

Action zone:
- Push opening symbols
- Compare a closer with the stack top
- Decide valid or invalid

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The castle-gate metaphor should make matching feel like opening the correct lock. Each opener should sit visibly in the stack until its matching closer appears. Wrong matches should be explained clearly without feeling punishing.



### Background Design

The background for `Bracket Castle Gate` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A path of bracket symbols entering a castle gate, An opening-symbol stack beside the path, and A match light that turns on for correct pairs; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A path of bracket symbols entering a castle gate, An opening-symbol stack beside the path, and A match light that turns on for correct pairs already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Bracket Castle Gate` and should visually support the lesson goal: a stack can remember opening symbols until the matching closing symbols appear. The background should establish the world softly, but the foreground should stay centered on A path of bracket symbols entering a castle gate, An opening-symbol stack beside the path, and A match light that turns on for correct pairs. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A path of bracket symbols entering a castle gate, An opening-symbol stack beside the path, and A match light that turns on for correct pairs should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Push openers." and "When a closer arrives, check the top.", and the action area should invite one clear next step through Push opening symbols, Compare a closer with the stack top, and Decide valid or invalid. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A path of bracket symbols entering a castle gate, An opening-symbol stack beside the path, and A match light that turns on for correct pairs.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Push openers." and "When a closer arrives, check the top.". The action zone should stay tightly focused on Push opening symbols, Compare a closer with the stack top, and Decide valid or invalid, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel watches opening symbols arrive and pushes them onto the stack.
2. A closing symbol arrives at the gate.
3. The learner checks the top opener for a match.
4. A correct pair lights up and pops away.
5. The lesson ends by checking whether the stack is empty and all symbols matched.

### Component Usage

- Scene Card
- Symbol stack
- Match light
- Pair-check bubble
- Hint card

## Problem

Given a string containing only these symbols:

- `(`
- `)`
- `[`
- `]`
- `{`
- `}`

return `true` if every opening symbol is closed in the correct order. Otherwise, return `false`.

### Example 1

**Input:** `s = "([])"`  
**Output:** `true`

### Example 2

**Input:** `s = "([)]"`  
**Output:** `false`

---

## Intuition

Opening symbols are like doors that need matching closing doors later.

When we see an opening symbol, we are waiting for its match.

A stack is perfect for this because the **most recent opening symbol** must be the first one closed.

That is exactly stack order.

Plan:

1. when we see an opening symbol, push it
2. when we see a closing symbol, check the top opening symbol
3. if they match, pop it
4. if they do not match, return `false`
5. at the end, the stack must be empty

---

## Walkthrough

`s = "([])"`

Start:
- stack = `[]`

See `(`
- push it
- stack = `[(]`

See `[`
- push it
- stack = `[(, []`

See `]`
- top is `[`
- matches, so pop
- stack = `[(]`

See `)`
- top is `(`
- matches, so pop
- stack = `[]`

End:
- stack is empty
- return `true`

---

## TypeScript Solution

```ts
function isValidParentheses(s: string): boolean {
  const stack: string[] = [];
  const pairs = new Map<string, string>([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop()!;
      if (top !== pairs.get(ch)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

---

## Why it works

The stack keeps track of unfinished opening symbols.

Because the most recent opening symbol must close first, a stack matches the problem perfectly.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)` in the worst case

---

## Test Cases

```ts
isValidParentheses("()") // true
isValidParentheses("([])") // true
isValidParentheses("([)]") // false
isValidParentheses("(") // false
isValidParentheses("()[]{}") // true
```

---

## Common Mistake

Do not just count how many opening and closing symbols there are.

The **order** matters too.

That is why `"([)]"` is not valid.

---

# Lesson 3: Remove All Adjacent Duplicates

## Concrete Screen Design

### Learning Goal

Teach that when the new item matches the stack top, both can disappear together.

### Habitat

`Echo Block Alley`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Echo Block Alley
- Lesson title: Remove All Adjacent Duplicates
- Progress chip: 3/6

Scene:
- A stream of letter blocks entering from the right
- A stack tower in the middle
- A pop-away effect when two neighbors match

Support strip:
- "Compare the new block with the top block."
- "If they match, both disappear."

Action zone:
- Read the next block
- Compare it to the stack top
- Push or pop based on the match

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The pop-away effect should feel satisfying and easy to track. Keep the current incoming block separate from the stack so the decision point is clear. Matching pairs should vanish in one clean motion.



### Background Design

The background for `Echo Block Alley` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A stream of letter blocks entering from the right, A stack tower in the middle, and A pop-away effect when two neighbors match; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A stream of letter blocks entering from the right, A stack tower in the middle, and A pop-away effect when two neighbors match already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Echo Block Alley` and should visually support the lesson goal: when the new item matches the stack top, both can disappear together. The background should establish the world softly, but the foreground should stay centered on A stream of letter blocks entering from the right, A stack tower in the middle, and A pop-away effect when two neighbors match. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A stream of letter blocks entering from the right, A stack tower in the middle, and A pop-away effect when two neighbors match should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Compare the new block with the top block." and "If they match, both disappear.", and the action area should invite one clear next step through Read the next block, Compare it to the stack top, and Push or pop based on the match. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A stream of letter blocks entering from the right, A stack tower in the middle, and A pop-away effect when two neighbors match.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Compare the new block with the top block." and "If they match, both disappear.". The action zone should stay tightly focused on Read the next block, Compare it to the stack top, and Push or pop based on the match, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel reveals the next incoming block.
2. The learner compares it to the current top block.
3. If they match, both disappear.
4. If they do not match, the new block gets pushed.
5. The support strip explains that the stack keeps only the unfinished pattern.

### Component Usage

- Scene Card
- Incoming block tray
- Stack tower
- Pop-away animation
- Hint card

## Problem

Given a string `s`, remove all pairs of adjacent matching letters again and again until no more such pairs exist.

Return the final string.

### Example 1

**Input:** `s = "abbaca"`  
**Output:** `"ca"`

### Example 2

**Input:** `s = "azxxzy"`  
**Output:** `"ay"`

---

## Intuition

If the current letter matches the top of the stack, then the two letters are adjacent duplicates.

So we pop the top instead of keeping both.

If the current letter does not match the top, we push it.

This lets the stack build the string that survives.

---

## Walkthrough

`s = "abbaca"`

Start:
- stack = `[]`

See `a`
- push
- stack = `[a]`

See `b`
- top is `a`, not a match
- push
- stack = `[a, b]`

See next `b`
- top is `b`, match!
- pop
- stack = `[a]`

See `a`
- top is `a`, match!
- pop
- stack = `[]`

See `c`
- push
- stack = `[c]`

See `a`
- top is `c`, no match
- push
- stack = `[c, a]`

Final answer:
- `"ca"`

---

## TypeScript Solution

```ts
function removeAdjacentDuplicates(s: string): string {
  const stack: string[] = [];

  for (const ch of s) {
    if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
}
```

---

## Why it works

The stack keeps the current cleaned-up string.

Each new character compares with the most recent surviving character, which is exactly the stack top.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
removeAdjacentDuplicates("abbaca") // "ca"
removeAdjacentDuplicates("azxxzy") // "ay"
removeAdjacentDuplicates("a") // "a"
removeAdjacentDuplicates("aaaa") // ""
```

---

## Pattern Reminder

This is a good stack problem because we care about the **most recent remaining character**.

---

# Lesson 4: Baseball Game

## Concrete Screen Design

### Learning Goal

Teach that a stack can remember recent scores so later rules can look back at them.

### Habitat

`Scoreboard Dugout`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Scoreboard Dugout
- Lesson title: Baseball Game
- Progress chip: 4/6

Scene:
- A dugout score board with a stack of round scores
- Action cards for number, `C`, `D`, and `+`
- A total-score banner across the top

Support strip:
- "The stack remembers recent scores."
- "Each special card uses the scores already on top."

Action zone:
- Push a new score
- Cancel the last score
- Double the last score
- Add the last two scores

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Use large score chips so the operations feel tangible. The stack should show score history clearly, with the newest score on top. The total-score banner should update live but stay secondary to the stack actions.



### Background Design

The background for `Scoreboard Dugout` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A dugout score board with a stack of round scores, Action cards for number, `C`, `D`, and `+`, and A total-score banner across the top; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A dugout score board with a stack of round scores, Action cards for number, `C`, `D`, and `+`, and A total-score banner across the top already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Scoreboard Dugout` and should visually support the lesson goal: a stack can remember recent scores so later rules can look back at them. The background should establish the world softly, but the foreground should stay centered on A dugout score board with a stack of round scores, Action cards for number, `C`, `D`, and `+`, and A total-score banner across the top. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A dugout score board with a stack of round scores, Action cards for number, `C`, `D`, and `+`, and A total-score banner across the top should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "The stack remembers recent scores." and "Each special card uses the scores already on top.", and the action area should invite one clear next step through Push a new score, Cancel the last score, Double the last score, and Add the last two scores. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A dugout score board with a stack of round scores, Action cards for number, `C`, `D`, and `+`, and A total-score banner across the top.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "The stack remembers recent scores." and "Each special card uses the scores already on top.". The action zone should stay tightly focused on Push a new score, Cancel the last score, Double the last score, and Add the last two scores, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel reveals the next scoring card.
2. The learner uses the top of the score stack to apply the rule.
3. Score chips appear, disappear, or duplicate based on the action.
4. The total banner updates after each move.
5. The lesson explains that the stack stores the recent scores we still need.

### Component Usage

- Scene Card
- Score stack
- Action cards
- Total banner
- Hint card

## Problem

You are given a list of operations representing scores in a game.

Each operation is one of these:

- an integer: add that score
- `"+"`: add a score equal to the last two scores added
- `"D"`: add a score equal to double the last score
- `"C"`: remove the last score

Return the total score.

### Example

**Input:** `ops = ["5", "2", "C", "D", "+"]`  
**Output:** `30`

---

## Intuition

This problem keeps asking about the **most recent scores**.

That is a strong clue for a stack.

We store scores in a stack.

Then:

- a number gets pushed
- `"C"` pops
- `"D"` looks at the top and doubles it
- `"+"` looks at the last two scores and adds them

---

## Walkthrough

`ops = ["5", "2", "C", "D", "+"]`

Start:
- stack = `[]`

See `"5"`
- push 5
- stack = `[5]`

See `"2"`
- push 2
- stack = `[5, 2]`

See `"C"`
- pop 2
- stack = `[5]`

See `"D"`
- double top: 10
- push 10
- stack = `[5, 10]`

See `"+"`
- last two scores are 5 and 10
- push 15
- stack = `[5, 10, 15]`

Total:
- `5 + 10 + 15 = 30`

---

## TypeScript Solution

```ts
function calPoints(ops: string[]): number {
  const stack: number[] = [];

  for (const op of ops) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === "+") {
      const last = stack[stack.length - 1];
      const secondLast = stack[stack.length - 2];
      stack.push(last + secondLast);
    } else {
      stack.push(Number(op));
    }
  }

  let total = 0;
  for (const score of stack) {
    total += score;
  }

  return total;
}
```

---

## Why it works

The stack stores the score history in order.

Because the newest score is on top, the stack makes it easy to use the last one or two scores.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
calPoints(["5", "2", "C", "D", "+"]) // 30
calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]) // 27
calPoints(["1"]) // 1
```

---

## Quick Check

Why is a stack helpful here?

**Answer:** Because the rules keep asking about the most recent scores.

---

# Lesson 5: Next Greater Element

## Concrete Screen Design

### Learning Goal

Teach that a stack can hold waiting values until a bigger value appears and answers them.

### Habitat

`Hill Watch Path`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Hill Watch Path
- Lesson title: Next Greater Element
- Progress chip: 5/6

Scene:
- A line of numbered hikers on a hill path
- A waiting stack of hikers who have not found a bigger value yet
- A discovery flag when a larger number appears

Support strip:
- "Some values wait for a bigger one."
- "When a bigger value appears, it answers the stack top."

Action zone:
- Read the current value
- Compare it to the top waiting value
- Pop solved values and assign their answers

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The waiting stack should feel like a line of hikers watching the path ahead. Discovery flags should appear the moment a bigger value arrives. Keep the comparison movement clear so the learner sees why some values wait longer than others.



### Background Design

The background for `Hill Watch Path` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A line of numbered hikers on a hill path, A waiting stack of hikers who have not found a bigger value yet, and A discovery flag when a larger number appears; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A line of numbered hikers on a hill path, A waiting stack of hikers who have not found a bigger value yet, and A discovery flag when a larger number appears already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Hill Watch Path` and should visually support the lesson goal: a stack can hold waiting values until a bigger value appears and answers them. The background should establish the world softly, but the foreground should stay centered on A line of numbered hikers on a hill path, A waiting stack of hikers who have not found a bigger value yet, and A discovery flag when a larger number appears. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A line of numbered hikers on a hill path, A waiting stack of hikers who have not found a bigger value yet, and A discovery flag when a larger number appears should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Some values wait for a bigger one." and "When a bigger value appears, it answers the stack top.", and the action area should invite one clear next step through Read the current value, Compare it to the top waiting value, and Pop solved values and assign their answers. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A line of numbered hikers on a hill path, A waiting stack of hikers who have not found a bigger value yet, and A discovery flag when a larger number appears.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Some values wait for a bigger one." and "When a bigger value appears, it answers the stack top.". The action zone should stay tightly focused on Read the current value, Compare it to the top waiting value, and Pop solved values and assign their answers, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel places early values into the waiting stack.
2. A new larger value arrives on the path.
3. The learner resolves one or more waiting values from the stack top.
4. Answer lines connect solved values to their next greater element.
5. The lesson explains that the stack stores unfinished questions.

### Component Usage

- Scene Card
- Waiting-value stack
- Discovery flags
- Answer connectors
- Hint card

## Problem

Given an array of numbers, return an array where each position tells the next greater number to the right.

If there is no greater number to the right, use `-1`.

### Example

**Input:** `nums = [2, 1, 2, 4, 3]`  
**Output:** `[4, 2, 4, -1, -1]`

Explanation:
- next greater after `2` is `4`
- next greater after `1` is `2`
- next greater after the second `2` is `4`
- `4` has no greater value to its right
- `3` has no greater value to its right

---

## Intuition

This problem is harder than the earlier ones.

We want to look to the right and find the next bigger value.

A smart way is to use a stack to keep indexes whose answers are not found yet.

As we move through the array:

- if the current number is bigger than the number at the top index in the stack,
  then we found that older index’s answer
- we keep popping while the current number solves older unfinished positions
- then we push the current index

This is called a **monotonic stack** idea, but you do not need to memorize that name yet.

---

## Walkthrough

`nums = [2, 1, 2, 4, 3]`

Start:
- answer = `[-1, -1, -1, -1, -1]`
- stack = `[]`

Index 0, value 2
- push index 0
- stack = `[0]`

Index 1, value 1
- `1` is not greater than `2`
- push index 1
- stack = `[0, 1]`

Index 2, value 2
- `2` is greater than value at index 1, which is `1`
- answer[1] = 2
- pop 1
- now compare with index 0, value `2`
- not greater, stop
- push index 2
- stack = `[0, 2]`

Index 3, value 4
- `4` is greater than value at index 2, which is `2`
- answer[2] = 4
- pop 2
- `4` is also greater than value at index 0, which is `2`
- answer[0] = 4
- pop 0
- push index 3
- stack = `[3]`

Index 4, value 3
- `3` is not greater than `4`
- push index 4
- stack = `[3, 4]`

Done.
Indices 3 and 4 have no greater value to the right, so they stay `-1`.

---

## TypeScript Solution

```ts
function nextGreaterElement(nums: number[]): number[] {
  const answer = new Array(nums.length).fill(-1);
  const stack: number[] = []; // stores indexes

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop()!;
      answer[index] = nums[i];
    }

    stack.push(i);
  }

  return answer;
}
```

---

## Why it works

The stack holds positions that are still waiting for a bigger value.

When a bigger value appears, it solves the waiting positions on top.

That lets us avoid checking every pair.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
nextGreaterElement([2, 1, 2, 4, 3]) // [4, 2, 4, -1, -1]
nextGreaterElement([1, 2, 3]) // [2, 3, -1]
nextGreaterElement([3, 2, 1]) // [-1, -1, -1]
```

---

## Challenge Thought

This lesson is more advanced because the stack stores **unfinished positions** instead of direct values only.

---

# Lesson 6: Evaluate Reverse Polish Notation

## Concrete Screen Design

### Learning Goal

Teach that a stack can hold numbers until an operator arrives and combines the top two values.

### Habitat

`Math Cauldron Workshop`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Math Cauldron Workshop
- Lesson title: Evaluate Reverse Polish Notation
- Progress chip: 6/6

Scene:
- A token row of numbers and operators
- A number stack beside a bubbling math cauldron
- An operator card that pulls the top two values into the cauldron

Support strip:
- "Numbers wait on the stack."
- "When an operator arrives, use the top two numbers."

Action zone:
- Push number tokens
- Pop the top two numbers for an operator
- Push the new result back

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The cauldron should make the combine step feel magical but understandable. Keep the order of the top two numbers visible so children can see why subtraction and division care about position. The result token should clearly return to the stack.



### Background Design

The background for `Math Cauldron Workshop` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A token row of numbers and operators, A number stack beside a bubbling math cauldron, and An operator card that pulls the top two values into the cauldron; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A token row of numbers and operators, A number stack beside a bubbling math cauldron, and An operator card that pulls the top two values into the cauldron already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Math Cauldron Workshop` and should visually support the lesson goal: a stack can hold numbers until an operator arrives and combines the top two values. The background should establish the world softly, but the foreground should stay centered on A token row of numbers and operators, A number stack beside a bubbling math cauldron, and An operator card that pulls the top two values into the cauldron. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A token row of numbers and operators, A number stack beside a bubbling math cauldron, and An operator card that pulls the top two values into the cauldron should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Numbers wait on the stack." and "When an operator arrives, use the top two numbers.", and the action area should invite one clear next step through Push number tokens, Pop the top two numbers for an operator, and Push the new result back. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A token row of numbers and operators, A number stack beside a bubbling math cauldron, and An operator card that pulls the top two values into the cauldron.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Numbers wait on the stack." and "When an operator arrives, use the top two numbers.". The action zone should stay tightly focused on Push number tokens, Pop the top two numbers for an operator, and Push the new result back, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel pushes number tokens onto the stack.
2. An operator token arrives and calls for the top two values.
3. The learner combines them in the cauldron.
4. The result token returns to the stack.
5. The process repeats until one final answer remains.

### Component Usage

- Scene Card
- Number stack
- Operator card
- Combine cauldron
- Hint card

## Problem

You are given an expression written in **Reverse Polish Notation**.

That means the operator comes **after** the numbers.

Return the value of the expression.

### Example 1

**Input:** `tokens = ["2", "1", "+", "3", "*"]`  
**Output:** `9`

Because:
- `2 + 1 = 3`
- `3 * 3 = 9`

### Example 2

**Input:** `tokens = ["4", "13", "5", "/", "+"]`  
**Output:** `6`

Because:
- `13 / 5 = 2` using integer division
- `4 + 2 = 6`

---

## Intuition

When we see a number, we are not ready to use it yet, so we push it onto the stack.

When we see an operator:

- pop the top two numbers
- do the math
- push the result back

The stack stores unfinished numbers and partial answers.

---

## Walkthrough

`tokens = ["2", "1", "+", "3", "*"]`

Start:
- stack = `[]`

See `"2"`
- push 2
- stack = `[2]`

See `"1"`
- push 1
- stack = `[2, 1]`

See `"+"`
- pop 1 and 2
- `2 + 1 = 3`
- push 3
- stack = `[3]`

See `"3"`
- push 3
- stack = `[3, 3]`

See `"*"`
- pop 3 and 3
- `3 * 3 = 9`
- push 9
- stack = `[9]`

Answer is the top:
- `9`

---

## TypeScript Solution

```ts
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const b = stack.pop()!;
      const a = stack.pop()!;
      let result = 0;

      if (token === "+") {
        result = a + b;
      } else if (token === "-") {
        result = a - b;
      } else if (token === "*") {
        result = a * b;
      } else {
        result = Math.trunc(a / b);
      }

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
```

---

## Why it works

Numbers wait on the stack until an operator is ready to use them.

Each operator turns two stack values into one new value.

At the end, the stack holds the final answer.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
evalRPN(["2", "1", "+", "3", "*"]) // 9
evalRPN(["4", "13", "5", "/", "+"]) // 6
evalRPN(["3", "4", "+"]) // 7
```

---

## Pattern Reminder

This is a strong stack problem because the most recent unfinished numbers are the first ones used by the next operator.

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review the main stack ideas: top-only actions, unfinished work, matching, canceling, and combining.

### Habitat

`Top Shelf Review Room`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Top Shelf Review Room
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review board with six mini stack scenes
- Tool chips for push, pop, peek, match, cancel, combine
- A top-of-stack legend pinned beside the board

Support strip:
- "Ask what the top item is waiting to do."
- "The top usually decides the next move."

Action zone:
- Match each lesson to the right stack idea
- Explain why the top matters
- Sort vocabulary cards to the correct mini-scene

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review room should feel like a tidy shelf of recap cards. The top-of-stack legend should stay visible because it anchors the whole chapter. Keep the mini-scenes recognizable from the lessons and avoid overloading the screen with text.



### Background Design

The background for `Top Shelf Review Room` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A review board with six mini stack scenes, Tool chips for push, pop, peek, match, cancel, combine, and A top-of-stack legend pinned beside the board; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A review board with six mini stack scenes, Tool chips for push, pop, peek, match, cancel, combine, and A top-of-stack legend pinned beside the board already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Top Shelf Review Room` and should visually support the lesson goal: review the main stack ideas: top-only actions, unfinished work, matching, canceling, and combining. The background should establish the world softly, but the foreground should stay centered on A review board with six mini stack scenes, Tool chips for push, pop, peek, match, cancel, combine, and A top-of-stack legend pinned beside the board. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A review board with six mini stack scenes, Tool chips for push, pop, peek, match, cancel, combine, and A top-of-stack legend pinned beside the board should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask what the top item is waiting to do." and "The top usually decides the next move.", and the action area should invite one clear next step through Match each lesson to the right stack idea, Explain why the top matters, and Sort vocabulary cards to the correct mini-scene. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A review board with six mini stack scenes, Tool chips for push, pop, peek, match, cancel, combine, and A top-of-stack legend pinned beside the board.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask what the top item is waiting to do." and "The top usually decides the next move.". The action zone should stay tightly focused on Match each lesson to the right stack idea, Explain why the top matters, and Sort vocabulary cards to the correct mini-scene, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel opens the review board of mini stack scenes.
2. The learner matches each lesson to its main stack idea.
3. Vocabulary cards slide into the right recap panel.
4. The support strip confirms the reasoning in short child-friendly language.
5. The next-step panel points toward mastery.

### Component Usage

- Review board
- Tool chips
- Mini scene cards
- Mascot speech bubble
- Next-step panel

## What you learned

In this chapter, you learned that a stack follows the rule:

> Last In, First Out

You learned how to:

- push, pop, and peek
- recognize when the most recent unfinished item matters
- match symbols correctly
- remove patterns by comparing with the top
- store unfinished positions
- evaluate expressions step by step

---

## Pattern Summary

### Implement a Stack
- use an array
- the array’s end is the stack top

### Valid Parentheses
- push opening symbols
- pop when a matching closing symbol appears

### Remove Adjacent Duplicates
- compare the current character to the top

### Baseball Game
- keep score history in a stack

### Next Greater Element
- store unfinished indexes until a bigger value appears

### Reverse Polish Notation
- push numbers
- pop two values when an operator appears

---

## When this pattern is a clue

Think about stacks when you see:

- most recent thing first
- undoing actions
- matching symbols
- nested structure
- unfinished work
- repeated popping while the top matches a rule

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can decide what the top of the stack should do next with much less support.

### Habitat

`Stack Summit Challenge`

### Primary Mascot

`Mabel the Mouse`

### Screen Composition

```txt
Header:
- Back
- Stack Summit Challenge
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused stack challenge
- A visible stack with a highlighted top
- A result badge area above the scene

Support strip:
- "Look at the top first."
- "Decide whether to push, pop, match, or combine."

Action zone:
- Predict the next stack move
- Solve one short challenge
- Explain why the top item mattered

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay focused and readable, with the highlighted top doing most of the teaching. Keep the result badge calm and clear. The action options should be large enough to tap mentally and compare.



### Background Design

The background for `Stack Summit Challenge` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One focused stack challenge, A visible stack with a highlighted top, and A result badge area above the scene; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One focused stack challenge, A visible stack with a highlighted top, and A result badge area above the scene already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Mabel the Mouse should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Stack Summit Challenge` and should visually support the lesson goal: check whether the learner can decide what the top of the stack should do next with much less support. The background should establish the world softly, but the foreground should stay centered on One focused stack challenge, A visible stack with a highlighted top, and A result badge area above the scene. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Mabel the Mouse should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One focused stack challenge, A visible stack with a highlighted top, and A result badge area above the scene should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Look at the top first." and "Decide whether to push, pop, match, or combine.", and the action area should invite one clear next step through Predict the next stack move, Solve one short challenge, and Explain why the top item mattered. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One focused stack challenge, A visible stack with a highlighted top, and A result badge area above the scene.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Look at the top first." and "Decide whether to push, pop, match, or combine.". The action zone should stay tightly focused on Predict the next stack move, Solve one short challenge, and Explain why the top item mattered, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Mabel presents one final stack challenge.
2. The learner checks the top and predicts the next move.
3. The scene updates to show the result.
4. A short explanation prompt asks why the top determined the action.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Highlighted top marker
- Prediction prompt
- Reflection prompt
- Result feedback card

Try these before looking at the answers.

## 1. Fill in the blank

A stack follows the rule ________ in, ________ out.

**Answer:** last, first

---

## 2. True or False

In a stack, you usually remove items from the middle.

**Answer:** False

You remove from the top.

---

## 3. Short Answer

What are the three main stack actions?

**Answer:** Push, pop, and peek.

---

## 4. Short Answer

Why is a stack helpful for matching parentheses?

**Answer:** Because the most recent opening symbol must be closed first.

---

## 5. Fill in the blank

In a TypeScript array-based stack, the ________ of the array acts like the top.

**Answer:** end

---

## 6. Mini Coding Challenge

Write a function that reverses an array using a stack.

```ts
function reverseWithStack(nums: number[]): number[] {
  const stack: number[] = [];

  for (const num of nums) {
    stack.push(num);
  }

  const result: number[] = [];

  while (stack.length > 0) {
    result.push(stack.pop()!);
  }

  return result;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words when a stack is a good idea.

**Sample answer:** A stack is a good idea when the newest unfinished thing matters most, like matching brackets, undoing actions, or checking the most recent item first.

---

# Friendly Wrap-up

Stacks teach a very important coding lesson:

> Sometimes the newest unfinished thing  
> is the most important thing.

That is why stacks show up so often in algorithms.

The more you practice stacks, the more you will notice:

- when order needs to be reversed
- when the latest thing should be handled first
- when nested structure needs matching
- when a problem is really about the top item

That is a powerful pattern to add to your toolbox.
