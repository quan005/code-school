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

## Concrete Screen Design

### Learning Goal

Teach that a linked list is a chain of boxes called nodes, and each node points to where to go next.

### Habitat

`Treasure Trail`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Treasure Trail
- Screen title: Introduction to Linked Lists
- Progress chip: Intro

Scene:
- A winding path of treasure chests
- Each chest shows a value badge
- A big arrow tag on each chest labeled "next"
- A head sign at the first chest and a null sign at the end

Support strip:
- "A node is one box in the chain."
- "The pointer says where to go next."

Action zone:
- Tap a chest to reveal value and next
- Follow the arrows from head to null
- Compare array vs linked list with a visual card

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The trail should feel like a treasure hunt so following `next` feels natural. Each node should look like a sturdy little chest with two clear compartments: one for the value and one for the pointer note. The `head` sign and `null` sign should be large and unmistakable.



### Background Design

The background for `Treasure Trail` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A winding path of treasure chests, Each chest shows a value badge, A big arrow tag on each chest labeled "next", and A head sign at the first chest and a null sign at the end; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A winding path of treasure chests, Each chest shows a value badge, A big arrow tag on each chest labeled "next", and A head sign at the first chest and a null sign at the end already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Treasure Trail` and should visually support the lesson goal: a linked list is a chain of boxes called nodes, and each node points to where to go next. The background should establish the world softly, but the foreground should stay centered on A winding path of treasure chests, Each chest shows a value badge, A big arrow tag on each chest labeled "next", and A head sign at the first chest and a null sign at the end. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A winding path of treasure chests, Each chest shows a value badge, A big arrow tag on each chest labeled "next", and A head sign at the first chest and a null sign at the end should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "A node is one box in the chain." and "The pointer says where to go next.", and the action area should invite one clear next step through Tap a chest to reveal value and next, Follow the arrows from head to null, and Compare array vs linked list with a visual card. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A winding path of treasure chests, Each chest shows a value badge, A big arrow tag on each chest labeled "next", and A head sign at the first chest and a null sign at the end.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "A node is one box in the chain." and "The pointer says where to go next.". The action zone should stay tightly focused on Tap a chest to reveal value and next, Follow the arrows from head to null, and Compare array vs linked list with a visual card, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango introduces the treasure trail as a chain of clue boxes.
2. The learner taps a node and sees its value and its `next` arrow.
3. The path highlights from `head` through each node until `null`.
4. A compare card shows how arrays sit side by side while linked lists connect one by one.
5. The lesson ends by naming `node`, `head`, `next`, and `null` in child-friendly language.

### Component Usage

- Scene Card
- Node detail card
- Mascot speech bubble
- Compare panel for array vs linked list
- Start-lesson CTA

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

## Concrete Screen Design

### Learning Goal

Teach how to walk through a linked list safely from `head` to `null`.

### Habitat

`Clue Walk`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Clue Walk
- Lesson title: Traverse a Linked List
- Progress chip: 1/6

Scene:
- A row of clue stones connected by arrows
- A current marker standing on one node
- A finish sign at null

Support strip:
- "Start at head."
- "Visit the node, then move to next."

Action zone:
- Read the current node value
- Move current to next
- Stop when current becomes null

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The connected stones should make the one-way path obvious. The current marker should stand clearly on exactly one node at a time. The `null` finish sign should feel like a safe stopping point, not an error.



### Background Design

The background for `Clue Walk` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of clue stones connected by arrows, A current marker standing on one node, and A finish sign at null; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of clue stones connected by arrows, A current marker standing on one node, and A finish sign at null already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Clue Walk` and should visually support the lesson goal: how to walk through a linked list safely from `head` to `null`. The background should establish the world softly, but the foreground should stay centered on A row of clue stones connected by arrows, A current marker standing on one node, and A finish sign at null. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of clue stones connected by arrows, A current marker standing on one node, and A finish sign at null should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Start at head." and "Visit the node, then move to next.", and the action area should invite one clear next step through Read the current node value, Move current to next, and Stop when current becomes null. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of clue stones connected by arrows, A current marker standing on one node, and A finish sign at null.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Start at head." and "Visit the node, then move to next.". The action zone should stay tightly focused on Read the current node value, Move current to next, and Stop when current becomes null, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango places the current marker on `head`.
2. The learner reads the value of the current node.
3. The current marker moves along the arrow to the next node.
4. The path repeats until the finish sign at `null`.
5. The lesson explains that traversal means walking the list one node at a time.

### Component Usage

- Scene Card
- Current-node marker
- Value readout chip
- Step controls
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach how to search through a linked list by checking each node until the target is found or the list ends.

### Habitat

`Badge Hunt Bridge`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Badge Hunt Bridge
- Lesson title: Search for a Value
- Progress chip: 2/6

Scene:
- A chain bridge of linked nodes
- A target badge shown above the bridge
- A current marker checking one node at a time

Support strip:
- "Check this node."
- "If it is not the target, follow next."

Action zone:
- Compare current value to target
- Move to next node
- Decide found or not found

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Make the target badge large and persistent so the learner never loses the search goal. Each node check should feel like lifting a little cover and comparing it to the target. Found moments should glow green, and not-found endings should stay calm and clear.



### Background Design

The background for `Badge Hunt Bridge` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A chain bridge of linked nodes, A target badge shown above the bridge, and A current marker checking one node at a time; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A chain bridge of linked nodes, A target badge shown above the bridge, and A current marker checking one node at a time already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Badge Hunt Bridge` and should visually support the lesson goal: how to search through a linked list by checking each node until the target is found or the list ends. The background should establish the world softly, but the foreground should stay centered on A chain bridge of linked nodes, A target badge shown above the bridge, and A current marker checking one node at a time. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A chain bridge of linked nodes, A target badge shown above the bridge, and A current marker checking one node at a time should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Check this node." and "If it is not the target, follow next.", and the action area should invite one clear next step through Compare current value to target, Move to next node, and Decide found or not found. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A chain bridge of linked nodes, A target badge shown above the bridge, and A current marker checking one node at a time.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Check this node." and "If it is not the target, follow next.". The action zone should stay tightly focused on Compare current value to target, Move to next node, and Decide found or not found, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango shows the target badge before the search begins.
2. The learner checks the current node value.
3. If it does not match, the marker follows `next`.
4. The search ends at either a match or `null`.
5. The support strip explains why linked lists search one node at a time.

### Component Usage

- Scene Card
- Target badge
- Current-node checker
- Found / not-found feedback card
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that inserting at the end means walking to the last node and changing its pointer to the new node.

### Habitat

`Train Car Yard`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Train Car Yard
- Lesson title: Insert at the End
- Progress chip: 3/6

Scene:
- A train of linked cars
- A new car waiting beside the track
- A glowing pointer hook on the last car

Support strip:
- "Walk to the last node first."
- "Then connect its next pointer to the new node."

Action zone:
- Traverse to the final car
- Spot the null pointer
- Attach the new car

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The train metaphor makes "attach at the end" immediately understandable. The last car should show a clear `null` hook before insertion. When the new car connects, the pointer line should animate into place so the change feels physical.



### Background Design

The background for `Train Car Yard` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A train of linked cars, A new car waiting beside the track, and A glowing pointer hook on the last car; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A train of linked cars, A new car waiting beside the track, and A glowing pointer hook on the last car already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Train Car Yard` and should visually support the lesson goal: inserting at the end means walking to the last node and changing its pointer to the new node. The background should establish the world softly, but the foreground should stay centered on A train of linked cars, A new car waiting beside the track, and A glowing pointer hook on the last car. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A train of linked cars, A new car waiting beside the track, and A glowing pointer hook on the last car should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Walk to the last node first." and "Then connect its next pointer to the new node.", and the action area should invite one clear next step through Traverse to the final car, Spot the null pointer, and Attach the new car. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A train of linked cars, A new car waiting beside the track, and A glowing pointer hook on the last car.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Walk to the last node first." and "Then connect its next pointer to the new node.". The action zone should stay tightly focused on Traverse to the final car, Spot the null pointer, and Attach the new car, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango walks the learner through the train one car at a time.
2. The final car with `null` is highlighted.
3. The new car is brought into place beside the last car.
4. The `next` pointer changes to connect the new car.
5. The lesson repeats that we changed a pointer, not the whole list.

### Component Usage

- Scene Card
- New-node waiting card
- Pointer hook highlight
- Step cards
- Success badge

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

## Concrete Screen Design

### Learning Goal

Teach that deleting a node means reconnecting the chain so it skips over the node we want to remove.

### Habitat

`Bridge Repair Bay`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Bridge Repair Bay
- Lesson title: Delete a Node by Value
- Progress chip: 4/6

Scene:
- A chain of bridge planks as linked nodes
- A target plank marked for removal
- A previous marker and current marker showing the repair move

Support strip:
- "Find the node before the one you remove."
- "Reconnect the chain so it skips the target."

Action zone:
- Track previous and current
- Identify the target node
- Update previous.next to skip the target

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

This scene should make the reconnection step easy to see. Use one color for `previous`, one for `current`, and a soft warning outline on the target node. When the repair happens, the chain should visibly skip the removed plank.



### Background Design

The background for `Bridge Repair Bay` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A chain of bridge planks as linked nodes, A target plank marked for removal, and A previous marker and current marker showing the repair move; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A chain of bridge planks as linked nodes, A target plank marked for removal, and A previous marker and current marker showing the repair move already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Bridge Repair Bay` and should visually support the lesson goal: deleting a node means reconnecting the chain so it skips over the node we want to remove. The background should establish the world softly, but the foreground should stay centered on A chain of bridge planks as linked nodes, A target plank marked for removal, and A previous marker and current marker showing the repair move. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A chain of bridge planks as linked nodes, A target plank marked for removal, and A previous marker and current marker showing the repair move should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Find the node before the one you remove." and "Reconnect the chain so it skips the target.", and the action area should invite one clear next step through Track previous and current, Identify the target node, and Update previous.next to skip the target. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A chain of bridge planks as linked nodes, A target plank marked for removal, and A previous marker and current marker showing the repair move.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Find the node before the one you remove." and "Reconnect the chain so it skips the target.". The action zone should stay tightly focused on Track previous and current, Identify the target node, and Update previous.next to skip the target, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango explains that removal is really a reconnection job.
2. The learner tracks `previous` and `current` as the scan moves forward.
3. The target node is found and highlighted.
4. `previous.next` redraws to point past the target.
5. The support strip explains that the removed node is no longer in the chain.

### Component Usage

- Scene Card
- Previous / current markers
- Reconnect animation
- Warning outline on target node
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that reversing a linked list means changing each pointer so the arrows point backward instead of forward.

### Habitat

`River Turnaround`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- River Turnaround
- Lesson title: Reverse a Linked List
- Progress chip: 5/6

Scene:
- A river path of linked rafts
- Three markers: previous, current, next
- Arrow ropes that flip direction as the reversal happens

Support strip:
- "Save next before you change the pointer."
- "Flip one arrow at a time."

Action zone:
- Save next
- Reverse current.next
- Move previous and current forward

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Reversal should feel careful, not chaotic. The three markers need strong visual roles so children can track them without getting lost. Each flipped rope should animate slowly enough to show that one pointer is changing at a time.



### Background Design

The background for `River Turnaround` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A river path of linked rafts, Three markers: previous, current, next, and Arrow ropes that flip direction as the reversal happens; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A river path of linked rafts, Three markers: previous, current, next, and Arrow ropes that flip direction as the reversal happens already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `River Turnaround` and should visually support the lesson goal: reversing a linked list means changing each pointer so the arrows point backward instead of forward. The background should establish the world softly, but the foreground should stay centered on A river path of linked rafts, Three markers: previous, current, next, and Arrow ropes that flip direction as the reversal happens. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A river path of linked rafts, Three markers: previous, current, next, and Arrow ropes that flip direction as the reversal happens should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Save next before you change the pointer." and "Flip one arrow at a time.", and the action area should invite one clear next step through Save next, Reverse current.next, and Move previous and current forward. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A river path of linked rafts, Three markers: previous, current, next, and Arrow ropes that flip direction as the reversal happens.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Save next before you change the pointer." and "Flip one arrow at a time.". The action zone should stay tightly focused on Save next, Reverse current.next, and Move previous and current forward, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango introduces the three helper markers: `previous`, `current`, and `next`.
2. The learner saves `next` before any pointer flips.
3. The current arrow rope is reversed.
4. The markers advance and repeat the process.
5. The scene ends with the whole river chain pointing the other way.

### Component Usage

- Scene Card
- Three-marker helper row
- Rope-flip animation
- Process step cards
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that merging two sorted linked lists means always choosing the smaller front node and building one new sorted chain.

### Habitat

`Twin Stream Merge`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Twin Stream Merge
- Lesson title: Merge Two Sorted Linked Lists
- Progress chip: 6/6

Scene:
- Two sorted node streams flowing toward a middle path
- Front-node spotlights on both input lists
- A merged trail growing in the center

Support strip:
- "Look at the front of both lists."
- "Pick the smaller one and connect it next."

Action zone:
- Compare the two front nodes
- Append the smaller node
- Move forward in the list you used

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The two-stream layout should make comparison easy at a glance. The merged trail in the middle should grow one node at a time so the learner can watch the sorted result being built. Use calm highlights instead of clutter because there are already three visible chains.



### Background Design

The background for `Twin Stream Merge` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo Two sorted node streams flowing toward a middle path, Front-node spotlights on both input lists, and A merged trail growing in the center; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If Two sorted node streams flowing toward a middle path, Front-node spotlights on both input lists, and A merged trail growing in the center already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Twin Stream Merge` and should visually support the lesson goal: merging two sorted linked lists means always choosing the smaller front node and building one new sorted chain. The background should establish the world softly, but the foreground should stay centered on Two sorted node streams flowing toward a middle path, Front-node spotlights on both input lists, and A merged trail growing in the center. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. Two sorted node streams flowing toward a middle path, Front-node spotlights on both input lists, and A merged trail growing in the center should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Look at the front of both lists." and "Pick the smaller one and connect it next.", and the action area should invite one clear next step through Compare the two front nodes, Append the smaller node, and Move forward in the list you used. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through Two sorted node streams flowing toward a middle path, Front-node spotlights on both input lists, and A merged trail growing in the center.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Look at the front of both lists." and "Pick the smaller one and connect it next.". The action zone should stay tightly focused on Compare the two front nodes, Append the smaller node, and Move forward in the list you used, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango shows the front node from both sorted lists.
2. The learner compares the two values.
3. The smaller node moves into the merged trail.
4. Only that list advances to its next node.
5. The scene repeats until one list ends, then the rest connects.

### Component Usage

- Scene Card
- Front-node spotlights
- Growing merged-chain panel
- Compare badge
- Hint card

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

## Concrete Screen Design

### Learning Goal

Review the main linked-list moves: traverse, search, insert, delete, reverse, and merge.

### Habitat

`Pointer Workshop`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Pointer Workshop
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A workshop board with six mini chain scenes
- Tool chips labeled traverse, search, insert, delete, reverse, merge
- A head and null legend pinned to the side

Support strip:
- "Look for the pointer move that changes the chain."
- "Say what each marker is doing."

Action zone:
- Match each mini-scene to its pointer move
- Explain what changed in the chain
- Sort vocabulary cards to the right example

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review should feel like a workshop wall full of repair cards and chain diagrams. Keep the node visuals consistent with earlier lessons so the learner recognizes the same objects in smaller recap scenes. The legend for `head`, `next`, and `null` should stay visible.



### Background Design

The background for `Pointer Workshop` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A workshop board with six mini chain scenes, Tool chips labeled traverse, search, insert, delete, reverse, merge, and A head and null legend pinned to the side; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A workshop board with six mini chain scenes, Tool chips labeled traverse, search, insert, delete, reverse, merge, and A head and null legend pinned to the side already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Pointer Workshop` and should visually support the lesson goal: review the main linked-list moves: traverse, search, insert, delete, reverse, and merge. The background should establish the world softly, but the foreground should stay centered on A workshop board with six mini chain scenes, Tool chips labeled traverse, search, insert, delete, reverse, merge, and A head and null legend pinned to the side. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A workshop board with six mini chain scenes, Tool chips labeled traverse, search, insert, delete, reverse, merge, and A head and null legend pinned to the side should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Look for the pointer move that changes the chain." and "Say what each marker is doing.", and the action area should invite one clear next step through Match each mini-scene to its pointer move, Explain what changed in the chain, and Sort vocabulary cards to the right example. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A workshop board with six mini chain scenes, Tool chips labeled traverse, search, insert, delete, reverse, merge, and A head and null legend pinned to the side.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Look for the pointer move that changes the chain." and "Say what each marker is doing.". The action zone should stay tightly focused on Match each mini-scene to its pointer move, Explain what changed in the chain, and Sort vocabulary cards to the right example, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango opens the workshop board with six mini-scenes.
2. The learner taps a mini-scene and chooses its pointer move.
3. Vocabulary cards snap to the correct recap panel.
4. A short explanation confirms what changed in the chain.
5. The screen points forward to mastery.

### Component Usage

- Review board
- Tool chips
- Mini scene cards
- Mascot speech bubble
- Next-step panel

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

## Concrete Screen Design

### Learning Goal

Check whether the learner can trace and update linked-list pointers with much less support.

### Habitat

`Pointer Challenge Dock`

### Primary Mascot

`Tango the Turtle`

### Screen Composition

```txt
Header:
- Back
- Pointer Challenge Dock
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused linked-list challenge on a dock board
- Visible head marker
- A target action card such as insert, delete, or reverse
- Result badge area

Support strip:
- "Watch the pointers carefully."
- "Choose the safe next move."

Action zone:
- Predict the next pointer change
- Solve one short chain problem
- Explain why the chain still works afterward

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should feel focused and slightly more serious than the lessons, but still safe and kid-friendly. Keep the chain large and readable. The result badge should celebrate correct pointer reasoning without adding visual noise.



### Background Design

The background for `Pointer Challenge Dock` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One focused linked-list challenge on a dock board, Visible head marker, A target action card such as insert, delete, or reverse, and Result badge area; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One focused linked-list challenge on a dock board, Visible head marker, A target action card such as insert, delete, or reverse, and Result badge area already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Tango the Turtle should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Pointer Challenge Dock` and should visually support the lesson goal: check whether the learner can trace and update linked-list pointers with much less support. The background should establish the world softly, but the foreground should stay centered on One focused linked-list challenge on a dock board, Visible head marker, A target action card such as insert, delete, or reverse, and Result badge area. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Tango the Turtle should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One focused linked-list challenge on a dock board, Visible head marker, A target action card such as insert, delete, or reverse, and Result badge area should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Watch the pointers carefully." and "Choose the safe next move.", and the action area should invite one clear next step through Predict the next pointer change, Solve one short chain problem, and Explain why the chain still works afterward. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One focused linked-list challenge on a dock board, Visible head marker, A target action card such as insert, delete, or reverse, and Result badge area.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Watch the pointers carefully." and "Choose the safe next move.". The action zone should stay tightly focused on Predict the next pointer change, Solve one short chain problem, and Explain why the chain still works afterward, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Tango presents a short linked-list challenge with less coaching.
2. The learner predicts the next safe pointer move.
3. The chain updates to show the result.
4. A reflection prompt asks why the list still connects correctly.
5. The mastery badge or retry message appears.

### Component Usage

- Challenge scene card
- Prediction prompt
- Reflection prompt
- Result feedback card
- Hint card

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
