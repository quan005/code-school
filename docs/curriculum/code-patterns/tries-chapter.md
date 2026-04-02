---
title: "Tries"
chapterSlug: "tries"
order: 12
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 100
skills:
  - "Explain how a trie stores words one letter at a time"
  - "Use a trie to insert and search for words"
  - "Recognize why tries are strong for prefix problems"
  - "Trace a path through a trie step by step"
---

# Tries

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A trie stores words letter by letter, which makes it very good at prefix searching.

---

# Chapter Overview

Imagine a giant word tree.

At the top is the start.

Then each step down chooses the next letter.

For example, the words:

- `cat`
- `car`
- `cap`

all start with `ca`, so they can share the same first part of the path.

That is the big idea behind a **trie**.

A trie is a tree-like data structure for storing words or strings.

You can think of a trie as a **word tree**.

Instead of storing each word completely separate, a trie lets words share the letters they have in common at the beginning.

That makes tries very useful for:

- word lookup
- prefix search
- autocomplete
- dictionary problems
- counting words with the same start

In this chapter, we will learn:

1. **Introduction to Tries**
   - Intuition
   - How Words Are Stored
   - Why Prefixes Matter
   - When To Use a Trie
   - Real-world Example
2. **Implement a Trie**
3. **Search for a Word**
4. **Starts With Prefix**
5. **Add and Search Word**
6. **Count Words With a Prefix**
7. **Longest Common Prefix**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Tries

## Concrete Screen Design

### Learning Goal

Teach that a trie is a word tree where shared beginnings use the same path.

### Habitat

`Word Tree Grove`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Word Tree Grove
- Screen title: Introduction to Tries
- Progress chip: Intro

Scene:
- A glowing word tree with letter nodes
- Shared prefix paths lit in one color
- A word-end sparkle where a full word finishes

Support strip:
- "A prefix is the beginning of a word."
- "Words that start the same can share the same path."

Action zone:
- Add words into the tree
- Watch shared prefix paths light up
- Tap a node to see children and word-end status

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The word tree should feel magical but organized, with each letter node large enough to read. Shared paths should glow clearly so children can see how the trie saves repeated beginnings. Word-end sparkles should feel special without cluttering the tree.



### Background Design

The background for `Word Tree Grove` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A glowing word tree with letter nodes, Shared prefix paths lit in one color, and A word-end sparkle where a full word finishes; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A glowing word tree with letter nodes, Shared prefix paths lit in one color, and A word-end sparkle where a full word finishes already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Word Tree Grove` and should visually support the lesson goal: a trie is a word tree where shared beginnings use the same path. The background should establish the world softly, but the foreground should stay centered on A glowing word tree with letter nodes, Shared prefix paths lit in one color, and A word-end sparkle where a full word finishes. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A glowing word tree with letter nodes, Shared prefix paths lit in one color, and A word-end sparkle where a full word finishes should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "A prefix is the beginning of a word." and "Words that start the same can share the same path.", and the action area should invite one clear next step through Add words into the tree, Watch shared prefix paths light up, and Tap a node to see children and word-end status. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A glowing word tree with letter nodes, Shared prefix paths lit in one color, and A word-end sparkle where a full word finishes.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "A prefix is the beginning of a word." and "Words that start the same can share the same path.". The action zone should stay tightly focused on Add words into the tree, Watch shared prefix paths light up, and Tap a node to see children and word-end status, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma introduces the tree as a place where words walk letter by letter.
2. The learner inserts words like `cat`, `car`, and `cap`.
3. Shared beginning letters stay on one common path.
4. Word-end sparkles appear only where a full word finishes.
5. The support strip explains the idea of a prefix in child-friendly language.

### Component Usage

- Scene Card
- Shared-path highlight
- Word-end sparkle
- Node detail popover
- Start-lesson CTA

## Intuition

A trie stores words one letter at a time.

Suppose we insert:

- `cat`
- `car`

The trie can share the letters:

- `c`
- `a`

Then split at the last letter:

- `t`
- `r`

So instead of repeating the full beginning of both words, the trie keeps shared prefixes together.

That saves work and makes prefix searching fast.

---

## Why is it called a prefix tree?

A trie is often called a **prefix tree** because it is very good at prefixes.

A **prefix** is the beginning of a word.

Examples:
- prefix of `"cat"` could be `"c"`
- or `"ca"`
- or `"cat"`

If many words start with the same letters, a trie can store those shared letters in one path.

---

## What does a trie node store?

A trie node usually stores:

- a map of children
- a flag that tells whether a full word ends here

In kid words:

- a **node** is one letter stop in the word tree
- **children** are the next possible letters
- `isWord` means "a whole word ends here"

Example idea:

```ts
class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}
```

That means:
- `children` tells what letters can come next
- `isWord` tells whether this node ends a complete word

---

## Example of word paths

Suppose we insert:

- `to`
- `top`
- `toy`

The trie would act like this:

```txt
start
  └── t
       └── o  (word: "to")
            ├── p  (word: "top")
            └── y  (word: "toy")
```

Notice:
- the beginning `to` is shared
- after that, the paths split

---

## Why tries are useful

Tries are powerful when you care about:
- whole words
- prefixes
- searching letter by letter
- finding all words starting with the same beginning

A normal array of words can store the words, but a trie organizes them in a way that makes prefix questions much easier.

---

## When To Use a Trie

A problem may be a good fit for a trie if it involves:

- words
- dictionaries
- prefixes
- autocomplete
- starts-with questions
- many repeated string searches

A big clue is when the problem asks:

- “Does this word exist?”
- “Does anything start with this prefix?”
- “How many words begin with these letters?”

---

## Real-world Example

### Search suggestions

When you type into a search bar, it may start suggesting words after just a few letters.

For example, after typing:

```txt
ca
```

you might see:
- cat
- car
- cap
- camera

That is a strong trie-style job because all of those words share the same prefix.

---

## TypeScript Setup

We will use this node shape:

```ts
class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}
```

And a trie class:

```ts
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }
}
```

---

## Chapter Outline

In this chapter:

- **Implement a Trie** teaches how to build the basic structure
- **Search for a Word** teaches exact matching
- **Starts With Prefix** teaches prefix lookup
- **Add and Search Word** teaches a wildcard extension
- **Count Words With a Prefix** teaches prefix counting
- **Longest Common Prefix** teaches how shared beginnings can be found

---

# Lesson 1: Implement a Trie

## Concrete Screen Design

### Learning Goal

Teach that inserting a word means walking letter by letter, creating missing nodes, and marking the end of the word.

### Habitat

`Letter Lantern Arbor`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Letter Lantern Arbor
- Lesson title: Implement a Trie
- Progress chip: 1/6

Scene:
- A root node at the top and branching letter lanterns below
- A current-letter token moving through the trie
- A create-node glow for missing letters

Support strip:
- "Move one letter at a time."
- "Create a node only if it is missing."

Action zone:
- Read the next letter
- Reuse or create the next node
- Mark the last node as a whole word

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The create-node glow should make it obvious when the trie grows. Reused letters should light softly instead, showing that no new node was needed. Keep the root visible to anchor every insertion path.



### Background Design

The background for `Letter Lantern Arbor` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A root node at the top and branching letter lanterns below, A current-letter token moving through the trie, and A create-node glow for missing letters; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A root node at the top and branching letter lanterns below, A current-letter token moving through the trie, and A create-node glow for missing letters already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Letter Lantern Arbor` and should visually support the lesson goal: inserting a word means walking letter by letter, creating missing nodes, and marking the end of the word. The background should establish the world softly, but the foreground should stay centered on A root node at the top and branching letter lanterns below, A current-letter token moving through the trie, and A create-node glow for missing letters. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A root node at the top and branching letter lanterns below, A current-letter token moving through the trie, and A create-node glow for missing letters should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Move one letter at a time." and "Create a node only if it is missing.", and the action area should invite one clear next step through Read the next letter, Reuse or create the next node, and Mark the last node as a whole word. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A root node at the top and branching letter lanterns below, A current-letter token moving through the trie, and A create-node glow for missing letters.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Move one letter at a time." and "Create a node only if it is missing.". The action zone should stay tightly focused on Read the next letter, Reuse or create the next node, and Mark the last node as a whole word, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma starts at the root with a word token.
2. The learner moves one letter at a time through the trie.
3. Missing letters create new nodes with a gentle glow.
4. Existing letters reuse the current path.
5. The last node gets marked as a complete word ending.

### Component Usage

- Scene Card
- Current-letter token
- Create-node glow
- Word-end marker
- Hint card

## Problem

Build a trie that supports:
- inserting words
- storing shared prefixes

---

## Intuition

When we insert a word, we walk through its letters one by one.

At each letter:
- if a child node for that letter does not exist, create it
- move to that child
- continue

At the end of the word:
- mark the last node as a complete word

---

## Walkthrough

Insert `"cat"`

Start at root.

See `'c'`
- no child yet, create one
- move there

See `'a'`
- no child yet, create one
- move there

See `'t'`
- no child yet, create one
- move there

End of word:
- mark this node as a word ending

Now insert `"car"`

Start again at root.

See `'c'`
- already exists, move there

See `'a'`
- already exists, move there

See `'r'`
- no child yet, create one
- move there

End of word:
- mark this node as a word ending

Now the words share `ca`.

---

## TypeScript Solution

```ts
class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        current.children.set(ch, new TrieNode());
      }

      current = current.children.get(ch)!;
    }

    current.isWord = true;
  }
}
```

---

## Why it works

Each letter moves us one step deeper into the trie.

Shared prefixes reuse existing nodes, and new branches are created only when needed.

---

## Complexity Analysis

If the word length is `m`:

- **Insert:** `O(m)`
- **Space:** up to `O(m)` new nodes if no letters are shared

---

## Test Cases

```ts
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cap");
```

---

## Quick Check

Why do `"cat"` and `"car"` share part of the trie?

**Answer:** Because they have the same prefix `"ca"`.

---

# Lesson 2: Search for a Word

## Concrete Screen Design

### Learning Goal

Teach that exact word search must follow every letter and end on a node marked as a full word.

### Habitat

`Exact Match Hollow`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Exact Match Hollow
- Lesson title: Search for a Word
- Progress chip: 2/6

Scene:
- A trie with a glowing search path
- A target word badge above the tree
- A final `isWord` lantern at the ending node

Support strip:
- "You must follow every letter."
- "The path is not enough. The last node must end a whole word."

Action zone:
- Walk through the target letters
- Check whether each child exists
- Test the ending node's word flag

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The ending node needs a clear word-end lantern so children see the difference between "path exists" and "full word exists." The target word badge should stay visible throughout the search. Missing-path moments should be clear but gentle.



### Background Design

The background for `Exact Match Hollow` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A trie with a glowing search path, A target word badge above the tree, and A final `isWord` lantern at the ending node; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A trie with a glowing search path, A target word badge above the tree, and A final `isWord` lantern at the ending node already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Exact Match Hollow` and should visually support the lesson goal: exact word search must follow every letter and end on a node marked as a full word. The background should establish the world softly, but the foreground should stay centered on A trie with a glowing search path, A target word badge above the tree, and A final `isWord` lantern at the ending node. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A trie with a glowing search path, A target word badge above the tree, and A final `isWord` lantern at the ending node should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "You must follow every letter." and "The path is not enough. The last node must end a whole word.", and the action area should invite one clear next step through Walk through the target letters, Check whether each child exists, and Test the ending node's word flag. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A trie with a glowing search path, A target word badge above the tree, and A final `isWord` lantern at the ending node.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "You must follow every letter." and "The path is not enough. The last node must end a whole word.". The action zone should stay tightly focused on Walk through the target letters, Check whether each child exists, and Test the ending node's word flag, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma shows the target word above the tree.
2. The learner follows each letter through the trie.
3. If a needed child is missing, the search stops.
4. If the path exists, the last node's `isWord` lantern is checked.
5. The lesson explains why exact search needs both the path and the word ending.

### Component Usage

- Scene Card
- Target word badge
- Search path highlight
- `isWord` lantern
- Hint card

## Problem

Given a trie and a word, return `true` if the exact word exists in the trie. Otherwise, return `false`.

### Example

If the trie contains:
- `cat`
- `car`

Then:
- search `"cat"` -> `true`
- search `"ca"` -> `false`
- search `"cab"` -> `false`

---

## Intuition

To search for a word:

1. start at the root
2. follow each letter
3. if a needed letter is missing, the word is not there
4. if all letters are found, check whether the final node is marked as a complete word

That last step matters.

Why?

Because `"ca"` might be only a prefix and not a full word.

---

## Walkthrough

Search `"cat"`

Start at root.

See `'c'`
- child exists, move there

See `'a'`
- child exists, move there

See `'t'`
- child exists, move there

Now all letters are used.
Check `isWord`.

If `isWord === true`, return `true`.

---

## TypeScript Solution

```ts
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        current.children.set(ch, new TrieNode());
      }
      current = current.children.get(ch)!;
    }

    current.isWord = true;
  }

  search(word: string): boolean {
    let current = this.root;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        return false;
      }

      current = current.children.get(ch)!;
    }

    return current.isWord;
  }
}
```

---

## Why it works

The trie path must match every letter in the word.

And the final node must say that a real word ends there.

---

## Complexity Analysis

If the word length is `m`:

- **Search:** `O(m)`
- **Space:** `O(1)` extra

---

## Test Cases

```ts
const trie = new Trie();
trie.insert("cat");
trie.insert("car");

trie.search("cat") // true
trie.search("ca") // false
trie.search("cab") // false
```

---

## Pattern Reminder

A prefix path existing is not enough for exact search.
The final node must also mark a complete word.

---

# Lesson 3: Starts With Prefix

## Concrete Screen Design

### Learning Goal

Teach that prefix search only needs the path for the beginning letters, not a full word ending.

### Habitat

`Prefix Path Meadow`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Prefix Path Meadow
- Lesson title: Starts With Prefix
- Progress chip: 3/6

Scene:
- A trie with one highlighted beginning path
- A prefix badge above the tree
- A branch fan-out showing that more letters may continue afterward

Support strip:
- "For a prefix, the path is enough."
- "You do not need to stop at a full word ending."

Action zone:
- Walk through the prefix letters
- Check whether the path exists
- Reveal the possible word branches below

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The branch fan-out should visually communicate that many words can continue after the prefix. Keep the prefix badge short and readable. This screen should feel lighter than exact search because the final `isWord` check is not required.



### Background Design

The background for `Prefix Path Meadow` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A trie with one highlighted beginning path, A prefix badge above the tree, and A branch fan-out showing that more letters may continue afterward; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A trie with one highlighted beginning path, A prefix badge above the tree, and A branch fan-out showing that more letters may continue afterward already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Prefix Path Meadow` and should visually support the lesson goal: prefix search only needs the path for the beginning letters, not a full word ending. The background should establish the world softly, but the foreground should stay centered on A trie with one highlighted beginning path, A prefix badge above the tree, and A branch fan-out showing that more letters may continue afterward. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A trie with one highlighted beginning path, A prefix badge above the tree, and A branch fan-out showing that more letters may continue afterward should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "For a prefix, the path is enough." and "You do not need to stop at a full word ending.", and the action area should invite one clear next step through Walk through the prefix letters, Check whether the path exists, and Reveal the possible word branches below. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A trie with one highlighted beginning path, A prefix badge above the tree, and A branch fan-out showing that more letters may continue afterward.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "For a prefix, the path is enough." and "You do not need to stop at a full word ending.". The action zone should stay tightly focused on Walk through the prefix letters, Check whether the path exists, and Reveal the possible word branches below, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma presents a short prefix badge like `ca`.
2. The learner follows those letters through the trie.
3. If the path exists, the prefix succeeds immediately.
4. The scene reveals possible branches that can continue from there.
5. The support strip explains that prefix search stops earlier than exact word search.

### Component Usage

- Scene Card
- Prefix badge
- Path highlight
- Branch fan-out preview
- Hint card

## Problem

Given a trie and a prefix, return `true` if any word in the trie starts with that prefix.

### Example

If the trie contains:
- `cat`
- `car`
- `dog`

Then:
- startsWith `"ca"` -> `true`
- startsWith `"do"` -> `true`
- startsWith `"da"` -> `false`

---

## Intuition

This is easier than exact word search.

We do not care if the final node is a full word.

We only care whether the path for the prefix exists.

So:

1. start at the root
2. follow each prefix letter
3. if all letters exist, return `true`

---

## Walkthrough

Prefix `"ca"`

Start at root.

See `'c'`
- exists

See `'a'`
- exists

Done.

The path exists, so some word starts with `"ca"`.

Return `true`.

---

## TypeScript Solution

```ts
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        current.children.set(ch, new TrieNode());
      }
      current = current.children.get(ch)!;
    }

    current.isWord = true;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const ch of prefix) {
      if (!current.children.has(ch)) {
        return false;
      }

      current = current.children.get(ch)!;
    }

    return true;
  }
}
```

---

## Why it works

A trie stores shared prefixes directly as paths.

So if the prefix path exists, then at least one word starts with that prefix.

---

## Complexity Analysis

If the prefix length is `m`:

- **startsWith:** `O(m)`
- **Space:** `O(1)` extra

---

## Test Cases

```ts
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");

trie.startsWith("ca") // true
trie.startsWith("do") // true
trie.startsWith("da") // false
trie.startsWith("c") // true
```

---

## Quick Check

Why is a trie especially good at prefix checking?

**Answer:** Because prefixes are stored as shared paths in the trie.

---

# Lesson 4: Add and Search Word

## Concrete Screen Design

### Learning Goal

Teach that wildcard search may branch into more than one possible letter path.

### Habitat

`Mystery Dot Maze`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Mystery Dot Maze
- Lesson title: Add and Search Word
- Progress chip: 4/6

Scene:
- A trie with one or more search paths glowing
- A search badge that may contain a dot wildcard
- A split-path star where the wildcard can try many branches

Support strip:
- "A dot means any one letter."
- "Try every branch that could fit."

Action zone:
- Insert new words into the trie
- Search a pattern with or without dots
- Follow one or many branches until a match is found

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The split-path star is the most important visual here because it shows branching search. Keep the wildcard dot large and obvious in the search badge. Multiple active paths should stay readable and not become a tangled mess.



### Background Design

The background for `Mystery Dot Maze` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A trie with one or more search paths glowing, A search badge that may contain a dot wildcard, and A split-path star where the wildcard can try many branches; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A trie with one or more search paths glowing, A search badge that may contain a dot wildcard, and A split-path star where the wildcard can try many branches already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Mystery Dot Maze` and should visually support the lesson goal: wildcard search may branch into more than one possible letter path. The background should establish the world softly, but the foreground should stay centered on A trie with one or more search paths glowing, A search badge that may contain a dot wildcard, and A split-path star where the wildcard can try many branches. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A trie with one or more search paths glowing, A search badge that may contain a dot wildcard, and A split-path star where the wildcard can try many branches should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "A dot means any one letter." and "Try every branch that could fit.", and the action area should invite one clear next step through Insert new words into the trie, Search a pattern with or without dots, and Follow one or many branches until a match is found. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A trie with one or more search paths glowing, A search badge that may contain a dot wildcard, and A split-path star where the wildcard can try many branches.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "A dot means any one letter." and "Try every branch that could fit.". The action zone should stay tightly focused on Insert new words into the trie, Search a pattern with or without dots, and Follow one or many branches until a match is found, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma inserts a few words into the trie.
2. The learner starts searching a pattern with a dot wildcard.
3. At the dot, the search branches into all possible child paths.
4. Matching branches continue until a full word ending is found.
5. The support strip explains that the dot can stand for any single letter.

### Component Usage

- Scene Card
- Search badge
- Split-path star
- Multi-path highlight
- Hint card

## Problem

Build a word dictionary that supports:
- adding words
- searching words

In the search, the dot `.` can match any one letter.

### Example

If we add:
- `bad`
- `dad`
- `mad`

Then:
- search `"pad"` -> `false`
- search `"bad"` -> `true`
- search `".ad"` -> `true`
- search `"b."` -> `true`

---

## Intuition

Normal trie search follows one exact path.

But the `.` wildcard means:

> “Try any one child here.”

So when we see a normal letter:
- follow that exact child

When we see a `.`:
- try all children
- if any path works, return `true`

This is a recursion problem on top of a trie.

---

## Walkthrough

Suppose we search `".ad"`.

At the first character `.`:
- we do not know which letter it is
- try all children from the root

If one of those paths can finish `"ad"`, the answer is `true`.

---

## TypeScript Solution

```ts
class WordDictionary {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let current = this.root;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        current.children.set(ch, new TrieNode());
      }

      current = current.children.get(ch)!;
    }

    current.isWord = true;
  }

  search(word: string): boolean {
    const dfs = (node: TrieNode, index: number): boolean => {
      if (index === word.length) {
        return node.isWord;
      }

      const ch = word[index];

      if (ch === ".") {
        for (const child of node.children.values()) {
          if (dfs(child, index + 1)) {
            return true;
          }
        }
        return false;
      }

      if (!node.children.has(ch)) {
        return false;
      }

      return dfs(node.children.get(ch)!, index + 1);
    };

    return dfs(this.root, 0);
  }
}
```

---

## Why it works

The trie handles normal letters by following exact paths.

The recursion handles `.` by exploring all one-letter possibilities at that step.

---

## Complexity Analysis

- **Add word:** `O(m)`
- **Search:** usually fast, but wildcard searches can branch more

---

## Test Cases

```ts
const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");

wd.search("pad") // false
wd.search("bad") // true
wd.search(".ad") // true
wd.search("b.") // true
```

---

## Challenge Thought

This lesson combines:
- trie structure
- recursion
- backtracking-like branching

That is why it is more advanced than basic trie search.

---

# Lesson 5: Count Words With a Prefix

## Concrete Screen Design

### Learning Goal

Teach that once we reach a prefix node, we can count how many complete words live below it.

### Habitat

`Glow Branch Counting Den`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Glow Branch Counting Den
- Lesson title: Count Words With a Prefix
- Progress chip: 5/6

Scene:
- A trie with one prefix node highlighted
- Word-end sparkles below that prefix
- A count bubble tallying how many word endings appear in the subtree

Support strip:
- "Find the prefix first."
- "Then count full words below that point."

Action zone:
- Walk to the prefix node
- Explore the subtree below it
- Count the word-end markers

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The prefix node should act like a doorway into the subtree we need to count. Keep the word-end sparkles distinct from regular nodes. The count bubble should rise one by one as endings are found.



### Background Design

The background for `Glow Branch Counting Den` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A trie with one prefix node highlighted, Word-end sparkles below that prefix, and A count bubble tallying how many word endings appear in the subtree; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A trie with one prefix node highlighted, Word-end sparkles below that prefix, and A count bubble tallying how many word endings appear in the subtree already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Glow Branch Counting Den` and should visually support the lesson goal: once we reach a prefix node, we can count how many complete words live below it. The background should establish the world softly, but the foreground should stay centered on A trie with one prefix node highlighted, Word-end sparkles below that prefix, and A count bubble tallying how many word endings appear in the subtree. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A trie with one prefix node highlighted, Word-end sparkles below that prefix, and A count bubble tallying how many word endings appear in the subtree should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Find the prefix first." and "Then count full words below that point.", and the action area should invite one clear next step through Walk to the prefix node, Explore the subtree below it, and Count the word-end markers. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A trie with one prefix node highlighted, Word-end sparkles below that prefix, and A count bubble tallying how many word endings appear in the subtree.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Find the prefix first." and "Then count full words below that point.". The action zone should stay tightly focused on Walk to the prefix node, Explore the subtree below it, and Count the word-end markers, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma walks the learner to the prefix node.
2. The subtree below that node lights up.
3. The learner counts the full-word endings under that branch.
4. The count bubble updates with each found word.
5. The lesson explains that the count comes from words starting with that prefix.

### Component Usage

- Scene Card
- Prefix-node doorway
- Word-end sparkles
- Count bubble
- Hint card

## Problem

Given a trie and a prefix, return how many stored words begin with that prefix.

### Example

If the trie contains:
- `cat`
- `car`
- `cap`
- `dog`

Then:
- count prefix `"ca"` -> `3`
- count prefix `"c"` -> `3`
- count prefix `"do"` -> `1`
- count prefix `"z"` -> `0`

---

## Intuition

There are two good ways to solve this.

### Simple way
1. follow the prefix path
2. once there, count how many complete words exist below that node

That means we do a DFS from the prefix node.

### Faster advanced way
Store a count at each node saying how many words pass through it.

For this chapter, we will use the simple DFS idea because it is easier to understand.

---

## Walkthrough

Words:
- `cat`
- `car`
- `cap`
- `dog`

Prefix `"ca"`

Follow:
- root -> `c` -> `a`

Now we are at the node for `"ca"`.

Below that node, there are complete words ending at:
- `cat`
- `car`
- `cap`

So the answer is 3.

---

## TypeScript Solution

```ts
function countWordsWithPrefix(root: TrieNode, prefix: string): number {
  let current: TrieNode | null = root;

  for (const ch of prefix) {
    if (!current.children.has(ch)) {
      return 0;
    }
    current = current.children.get(ch)!;
  }

  function dfs(node: TrieNode): number {
    let count = node.isWord ? 1 : 0;

    for (const child of node.children.values()) {
      count += dfs(child);
    }

    return count;
  }

  return dfs(current);
}
```

---

## Why it works

The prefix path brings us to the correct subtree.

Every word below that subtree starts with the prefix we want.

So counting word endings in that subtree gives the answer.

---

## Complexity Analysis

- **Prefix walk:** `O(p)` where `p` is prefix length
- **DFS count:** depends on how large the subtree is

---

## Test Cases

```ts
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cap");
trie.insert("dog");

countWordsWithPrefix(trie.root, "ca") // 3
countWordsWithPrefix(trie.root, "c") // 3
countWordsWithPrefix(trie.root, "do") // 1
countWordsWithPrefix(trie.root, "z") // 0
```

---

## Pattern Reminder

A trie makes prefix-based counting possible because words sharing the same prefix live under the same subtree.

---

# Lesson 6: Longest Common Prefix

## Concrete Screen Design

### Learning Goal

Teach that the longest common prefix is the shared path that all words can follow before splitting.

### Habitat

`Shared Trail Lookout`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Shared Trail Lookout
- Lesson title: Longest Common Prefix
- Progress chip: 6/6

Scene:
- A trie built from several words
- One bright shared trail from the root
- A split marker where the words stop agreeing

Support strip:
- "Keep walking while there is only one next letter."
- "Stop when the paths split or a word ends."

Action zone:
- Follow the shared trail from the root
- Watch for a split or word ending
- Record the letters collected so far

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The shared trail should feel like a single safe walkway through the trie. The split marker needs to be clear because that is where the common prefix stops. The collected-prefix strip should grow letter by letter as the learner walks.



### Background Design

The background for `Shared Trail Lookout` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A trie built from several words, One bright shared trail from the root, and A split marker where the words stop agreeing; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A trie built from several words, One bright shared trail from the root, and A split marker where the words stop agreeing already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Shared Trail Lookout` and should visually support the lesson goal: the longest common prefix is the shared path that all words can follow before splitting. The background should establish the world softly, but the foreground should stay centered on A trie built from several words, One bright shared trail from the root, and A split marker where the words stop agreeing. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A trie built from several words, One bright shared trail from the root, and A split marker where the words stop agreeing should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Keep walking while there is only one next letter." and "Stop when the paths split or a word ends.", and the action area should invite one clear next step through Follow the shared trail from the root, Watch for a split or word ending, and Record the letters collected so far. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A trie built from several words, One bright shared trail from the root, and A split marker where the words stop agreeing.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Keep walking while there is only one next letter." and "Stop when the paths split or a word ends.". The action zone should stay tightly focused on Follow the shared trail from the root, Watch for a split or word ending, and Record the letters collected so far, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma starts at the root with multiple words already inserted.
2. The learner follows the single shared path as long as there is only one choice.
3. The collected-prefix strip records each shared letter.
4. When the path splits or a word ends, the walk stops.
5. The support strip explains that the collected letters are the longest common prefix.

### Component Usage

- Scene Card
- Shared-trail highlight
- Split marker
- Collected-prefix strip
- Hint card

## Problem

Given an array of strings, return the longest common prefix shared by all the strings.

### Example 1

**Input:** `["flower", "flow", "flight"]`  
**Output:** `"fl"`

### Example 2

**Input:** `["dog", "racecar", "car"]`  
**Output:** `""`

---

## Intuition

A trie helps us see shared beginnings.

If we insert all the words, then the longest common prefix is the path from the root where:

- there is exactly one child
- and we have not hit the end of a word yet

As soon as the path splits, the common prefix ends.

As soon as one word ends, the common prefix also ends.

---

## Walkthrough

Words:
- `flower`
- `flow`
- `flight`

Start at root.

All words share:
- `f`
- `l`

After that:
- one word goes to `o`
- another goes to `i`

That means the common path splits after `"fl"`.

So answer is `"fl"`.

---

## TypeScript Solution

```ts
function longestCommonPrefix(words: string[]): string {
  if (words.length === 0) {
    return "";
  }

  const trie = new Trie();

  for (const word of words) {
    trie.insert(word);
  }

  let current = trie.root;
  let answer = "";

  while (current.children.size === 1 && !current.isWord) {
    const [ch, nextNode] = current.children.entries().next().value as [string, TrieNode];
    answer += ch;
    current = nextNode;
  }

  return answer;
}
```

---

## Why it works

The common prefix continues only while all words share exactly one next letter.

If the trie branches, the common prefix is over.

If a word ends, the common prefix also stops there.

---

## Complexity Analysis

- Building the trie depends on total word length
- Walking the common path is usually short

---

## Test Cases

```ts
longestCommonPrefix(["flower", "flow", "flight"]) // "fl"
longestCommonPrefix(["dog", "racecar", "car"]) // ""
longestCommonPrefix(["interspecies", "interstellar", "interstate"]) // "inters"
longestCommonPrefix([]) // ""
```

---

## Quick Check

When does the longest common prefix stop in the trie?

**Answer:** When the path splits or when a word ends.

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review insert, exact search, prefix search, wildcard branching, subtree counting, and longest shared beginnings.

### Habitat

`Word Forest Review Deck`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Word Forest Review Deck
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review wall with six mini trie scenes
- Tool chips for insert, exact, prefix, wildcard, count, common prefix
- A prefix reminder banner across the top

Support strip:
- "Ask what letters must be shared."
- "Then decide whether you need a path, a word ending, or a branch search."

Action zone:
- Match each mini-scene to the right trie idea
- Sort clue chips to the correct lesson
- Explain what the highlighted node means

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review deck should feel like a wall of glowing word trails. Keep the prefix reminder banner visible because shared beginnings are the heart of the chapter. Mini-scenes should be simple and not overcrowded with letters.



### Background Design

The background for `Word Forest Review Deck` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A review wall with six mini trie scenes, Tool chips for insert, exact, prefix, wildcard, count, common prefix, and A prefix reminder banner across the top; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A review wall with six mini trie scenes, Tool chips for insert, exact, prefix, wildcard, count, common prefix, and A prefix reminder banner across the top already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Word Forest Review Deck` and should visually support the lesson goal: review insert, exact search, prefix search, wildcard branching, subtree counting, and longest shared beginnings. The background should establish the world softly, but the foreground should stay centered on A review wall with six mini trie scenes, Tool chips for insert, exact, prefix, wildcard, count, common prefix, and A prefix reminder banner across the top. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A review wall with six mini trie scenes, Tool chips for insert, exact, prefix, wildcard, count, common prefix, and A prefix reminder banner across the top should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask what letters must be shared." and "Then decide whether you need a path, a word ending, or a branch search.", and the action area should invite one clear next step through Match each mini-scene to the right trie idea, Sort clue chips to the correct lesson, and Explain what the highlighted node means. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A review wall with six mini trie scenes, Tool chips for insert, exact, prefix, wildcard, count, common prefix, and A prefix reminder banner across the top.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask what letters must be shared." and "Then decide whether you need a path, a word ending, or a branch search.". The action zone should stay tightly focused on Match each mini-scene to the right trie idea, Sort clue chips to the correct lesson, and Explain what the highlighted node means, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma opens the review wall of trie scenes.
2. The learner matches each scene to its trie idea.
3. Clue chips slide into the right recap panel.
4. The support strip explains the reasoning in one short sentence.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Tool chips
- Mini trie scenes
- Mascot speech bubble
- Next-step panel

## What you learned

In this chapter, you learned that a trie stores words one letter at a time in a tree-like structure.

You learned how to:

- insert words
- search for exact words
- check whether a prefix exists
- handle wildcard searches
- count words under a prefix
- find the longest common prefix

---

## Pattern Summary

### Implement a Trie
- follow letters one by one
- create missing nodes
- mark word endings

### Search for a Word
- follow exact letters
- make sure the final node is a word

### Starts With Prefix
- follow the prefix path
- path existing is enough

### Add and Search Word
- follow exact letters
- use branching recursion for `.`

### Count Words With a Prefix
- reach the prefix node
- count complete words in that subtree

### Longest Common Prefix
- follow the shared single-child path
- stop on branch or word ending

---

## When this pattern is a clue

Think about tries when you see:

- words
- prefixes
- dictionary search
- starts with
- autocomplete
- many repeated string lookups

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can read a trie path and choose the right search or prefix action with less support.

### Habitat

`Prefix Challenge Lanterns`

### Primary Mascot

`Luma the Firefly`

### Screen Composition

```txt
Header:
- Back
- Prefix Challenge Lanterns
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused trie challenge
- A highlighted active path and target word or prefix badge
- A result badge area above the tree

Support strip:
- "What does this path prove?"
- "Choose whether you are checking a word, a prefix, or many possible branches."

Action zone:
- Predict the next path step
- Solve one short trie challenge
- Explain what the ending node tells you

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay calm and centered on one active path. The target badge should be clear and readable, and the result area should remain simple. Word-end and branch clues need to be visually distinct.



### Background Design

The background for `Prefix Challenge Lanterns` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One focused trie challenge, A highlighted active path and target word or prefix badge, and A result badge area above the tree; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One focused trie challenge, A highlighted active path and target word or prefix badge, and A result badge area above the tree already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Luma the Firefly should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Prefix Challenge Lanterns` and should visually support the lesson goal: check whether the learner can read a trie path and choose the right search or prefix action with less support. The background should establish the world softly, but the foreground should stay centered on One focused trie challenge, A highlighted active path and target word or prefix badge, and A result badge area above the tree. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Luma the Firefly should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One focused trie challenge, A highlighted active path and target word or prefix badge, and A result badge area above the tree should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "What does this path prove?" and "Choose whether you are checking a word, a prefix, or many possible branches.", and the action area should invite one clear next step through Predict the next path step, Solve one short trie challenge, and Explain what the ending node tells you. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One focused trie challenge, A highlighted active path and target word or prefix badge, and A result badge area above the tree.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "What does this path prove?" and "Choose whether you are checking a word, a prefix, or many possible branches.". The action zone should stay tightly focused on Predict the next path step, Solve one short trie challenge, and Explain what the ending node tells you, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Luma presents a final trie challenge with limited guidance.
2. The learner studies the active path and target badge.
3. The learner chooses the next step or final answer.
4. A short reflection asks what the ending node or branch clue meant.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Active-path highlight
- Target badge
- Reflection prompt
- Result feedback card

Try these before looking at the answers.

## 1. Fill in the blank

A trie stores words one ________ at a time.

**Answer:** letter

---

## 2. True or False

A trie is especially good at prefix problems.

**Answer:** True

---

## 3. Short Answer

Why do words like `"cat"` and `"car"` share part of a trie?

**Answer:** Because they have the same beginning letters, so they can share the same prefix path.

---

## 4. Short Answer

What does `isWord` mean in a trie node?

**Answer:** It tells whether a complete word ends at that node.

---

## 5. Fill in the blank

A trie is often called a prefix ________.

**Answer:** tree

---

## 6. Mini Coding Challenge

Write a function that returns `true` if a trie contains the prefix `"pre"`.

```ts
function hasPrePrefix(trie: Trie): boolean {
  return trie.startsWith("pre");
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why tries help autocomplete.

**Sample answer:** Tries help autocomplete because once you follow the letters the user typed, all matching words are in the subtree below that prefix.

---

# Friendly Wrap-up

Tries teach an important coding lesson:

> Sometimes the beginning of a word  
> is just as important as the whole word.

That is why tries are so useful for search, autocomplete, and dictionary problems.

The more you practice tries, the more you will notice:

- when prefix sharing saves work
- when a word path matters
- when a subtree represents many matching words
- when a string problem is really about shared beginnings

That is a powerful pattern to add to your algorithm toolbox.
