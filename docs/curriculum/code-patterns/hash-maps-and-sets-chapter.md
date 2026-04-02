---
title: "Hash Maps And Sets"
chapterSlug: "hash-maps-and-sets"
order: 2
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 90
skills:
  - "Use sets to check whether something has been seen before"
  - "Use hash maps to count and look up information quickly"
  - "Choose between a set and a map for a problem"
  - "Trace lookup and counting code by hand"
---

# Hash Maps And Sets

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Use a **hash map** when you want to remember information. Use a **set** when you only care whether something has been seen before.

---

# Chapter Overview

A **hash map** is like a super-fast notebook.

Instead of searching through a whole list again and again, we can write down what we need to remember and look it up quickly.

A **set** is like a special collection box that only keeps **unique** things. If you try to put the same thing in twice, it still only keeps one copy.

This chapter teaches you how to use hash maps and sets to solve problems faster.

In this chapter, we will learn:

1. **Introduction to Hash Maps and Sets**
   - Intuition
   - Main Strategies
   - When To Use Them
   - Real-world Example
2. **Contains Duplicate**
3. **Two Sum**
4. **Valid Anagram**
5. **First Unique Character**
6. **Intersection of Two Arrays**
7. **Count the Frequencies**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Hash Maps and Sets

## Concrete Screen Design

### Learning Goal

Teach the difference between a set and a hash map by turning "remembering" into a visible sorting-and-labeling activity.

### Habitat

`Cubby Corner`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Cubby Corner
- Screen title: Introduction to Hash Maps and Sets
- Progress chip: Intro

Scene:
- A classroom wall with labeled cubbies
- A sticker board beside the cubbies
- One "seen" tray and one "remember more" tray

Support strip:
- "A set remembers if something is here."
- "A hash map remembers extra information too."

Action zone:
- Drag an item to the sticker board for set behavior
- Drag an item to a labeled cubby for map behavior
- Tap a callout to compare key and value

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

Use a warm classroom scene with big cubby labels and oversized stickers so the difference between "one copy only" and "save extra information" feels physical. The set area should feel simpler and flatter. The cubby area should feel richer because each label opens to reveal stored details.



### Background Design

The background for `Cubby Corner` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A classroom wall with labeled cubbies, A sticker board beside the cubbies, and One "seen" tray and one "remember more" tray; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A classroom wall with labeled cubbies, A sticker board beside the cubbies, and One "seen" tray and one "remember more" tray already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Cubby Corner` and should visually support the lesson goal: teach the difference between a set and a hash map by turning "remembering" into a visible sorting-and-labeling activity. The background should establish the world softly, but the foreground should stay centered on A classroom wall with labeled cubbies, A sticker board beside the cubbies, and One "seen" tray and one "remember more" tray. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A classroom wall with labeled cubbies, A sticker board beside the cubbies, and One "seen" tray and one "remember more" tray should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "A set remembers if something is here." and "A hash map remembers extra information too.", and the action area should invite one clear next step through Drag an item to the sticker board for set behavior, Drag an item to a labeled cubby for map behavior, and Tap a callout to compare key and value. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A classroom wall with labeled cubbies, A sticker board beside the cubbies, and One "seen" tray and one "remember more" tray.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "A set remembers if something is here." and "A hash map remembers extra information too.". The action zone should stay tightly focused on Drag an item to the sticker board for set behavior, Drag an item to a labeled cubby for map behavior, and Tap a callout to compare key and value, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico introduces the sticker board and cubbies as two different ways to remember.
2. The learner places repeated items onto the sticker board and sees duplicates collapse into one.
3. The learner places named items into cubbies and sees each label hold a value.
4. A compare panel explains when to choose a set and when to choose a map.
5. The screen ends with a gentle checkpoint before the first problem lesson.

### Component Usage

- Scene Card
- Choice cards for set vs map
- Mascot speech bubble
- Compare panel
- Start-lesson CTA

## Intuition

Imagine your classroom has cubbies.

Each cubby has a **label** with a student’s name, and inside that cubby is the student’s stuff.

That is a lot like a **hash map**.

- The **label** is the **key**
- The **stuff inside** is the **value**

So if we have:

- `"Maya" -> 3`
- `"Leo" -> 7`

That means the key `"Maya"` maps to the value `3`, and the key `"Leo"` maps to `7`.

In code, a hash map lets us do things like:

- remember how many times we saw something
- remember where we first saw something
- look up a value using a key
- match one thing to another thing

A **set** is even simpler.

A set is like a sticker board where each sticker can only appear **once**.

If you add:

- `"cat"`
- `"dog"`
- `"cat"`

The set will only keep:

- `"cat"`
- `"dog"`

That makes sets great for:

- checking if something already exists
- removing duplicates
- keeping track of “seen” values

---

## Why are hash maps and sets powerful?

Without a hash map or set, we often have to scan through an entire array over and over.

That can be slow.

With a hash map or set, we can often answer questions very quickly:

- “Have I seen this number before?”
- “How many times did this letter appear?”
- “Where was that value?”
- “Does this item exist in the other list?”

That is why hash maps and sets are some of the most useful tools in coding practice and real programs.

---

## Main Strategies

There are four common strategies.

### 1. Seen-before checking

Use a **set** to answer:

> “Have I already seen this?”

Example:
- find duplicates
- detect repeated numbers
- check whether a value exists

---

### 2. Counting

Use a **hash map** to answer:

> “How many times did each thing appear?”

Example:
- count letters
- count numbers
- compare two words

---

### 3. Lookup by need

Use a **hash map** when you know what value you need and want to check whether it already exists.

Example:
- in **Two Sum**, if the target is `10` and the current number is `3`, we need `7`
- we can check whether `7` has already appeared

---

### 4. Matching between collections

Use a **set** or **hash map** to compare one group to another.

Example:
- find common values in two arrays
- check whether two strings use the same letters the same number of times

---

## When To Use Hash Maps And Sets

A problem may be a good fit for a hash map or set if it asks things like:

- “Have you seen this before?”
- “How many times does this appear?”
- “Return duplicates”
- “Find matching pairs”
- “Compare two collections”
- “Is there a fast way without nested loops?”

A big clue is when the brute force solution uses **two loops**.

Hash maps and sets often help us turn a slower solution into a faster one.

---

## Hash Map vs Set

Use a **set** when you only care if something is present.

Use a **hash map** when you need to store extra information.

### Example

If you only need to know whether `5` appeared:
- use a **set**

If you need to know how many times `5` appeared:
- use a **hash map**

If you need to know where `5` first appeared:
- use a **hash map**

---

## Real-world Example

### School attendance

Suppose a teacher wants to know:

- which students already checked in
- how many times each student visited the reading station

A **set** can track which students have already checked in.

A **hash map** can track how many times each student visited the reading station.

That is exactly how programmers think:

- **set** = who has been seen
- **hash map** = what info do we remember about each thing

---

## TypeScript Reminder

In TypeScript and JavaScript, we often use:

- `Set<number>()`
- `Set<string>()`
- `Map<string, number>()`
- `Map<number, number>()`

Examples:

```ts
const seen = new Set<number>();
seen.add(5);
seen.add(8);
console.log(seen.has(5)); // true
```

```ts
const counts = new Map<string, number>();
counts.set("a", 1);
counts.set("b", 2);
console.log(counts.get("a")); // 1
```

---

## Chapter Outline

In this chapter:

- **Contains Duplicate** teaches us how to use a set for seen-before checking
- **Two Sum** teaches us how to use a map for fast lookup
- **Valid Anagram** teaches us how to use a map for counting
- **First Unique Character** teaches us how to count and then search
- **Intersection of Two Arrays** teaches us how to compare collections
- **Count the Frequencies** teaches us how to build a counting map cleanly

---

# Lesson 1: Contains Duplicate

## Concrete Screen Design

### Learning Goal

Teach that a set can answer "Have I seen this before?" quickly.

### Habitat

`Sticker Garden`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Sticker Garden
- Lesson title: Contains Duplicate
- Progress chip: 1/6

Scene:
- A row of number stickers moving onto a garden board
- A seen basket that holds only one copy of each sticker
- A duplicate alert bubble when a sticker appears again

Support strip:
- "Ask: Have I seen this already?"
- "The set keeps only one copy."

Action zone:
- Step through each number
- Watch the set grow
- Tap when a duplicate appears

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The garden board should feel clean and repetitive so the duplicate moment stands out. Each new sticker should land with a small pop. When a duplicate appears, the alert should glow yellow instead of feeling like an error.



### Background Design

The background for `Sticker Garden` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of number stickers moving onto a garden board, A seen basket that holds only one copy of each sticker, and A duplicate alert bubble when a sticker appears again; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of number stickers moving onto a garden board, A seen basket that holds only one copy of each sticker, and A duplicate alert bubble when a sticker appears again already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Sticker Garden` and should visually support the lesson goal: a set can answer "Have I seen this before?" quickly. The background should establish the world softly, but the foreground should stay centered on A row of number stickers moving onto a garden board, A seen basket that holds only one copy of each sticker, and A duplicate alert bubble when a sticker appears again. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of number stickers moving onto a garden board, A seen basket that holds only one copy of each sticker, and A duplicate alert bubble when a sticker appears again should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask: Have I seen this already?" and "The set keeps only one copy.", and the action area should invite one clear next step through Step through each number, Watch the set grow, and Tap when a duplicate appears. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of number stickers moving onto a garden board, A seen basket that holds only one copy of each sticker, and A duplicate alert bubble when a sticker appears again.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask: Have I seen this already?" and "The set keeps only one copy.". The action zone should stay tightly focused on Step through each number, Watch the set grow, and Tap when a duplicate appears, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico places each number sticker into the seen basket.
2. New numbers slide in and stay on the board.
3. A repeated number triggers the duplicate bubble immediately.
4. The learner explains why the set solved the check quickly.
5. A final card connects the scene back to the word "duplicate."

### Component Usage

- Scene Card
- Set basket component
- Duplicate alert chip
- Step controls
- Hint card

## Problem

Given an array of integers, return `true` if any value appears more than once.  
Return `false` if all values are different.

### Example 1

**Input:** `nums = [3, 1, 4, 2, 1]`  
**Output:** `true`

Because `1` appears more than once.

### Example 2

**Input:** `nums = [5, 6, 7]`  
**Output:** `false`

Because every number is different.

---

## Intuition

The brute force way is to compare every number with every other number.

That works, but it takes a lot of checking.

A faster idea:

- keep a **set** called `seen`
- go through the array one number at a time
- if the number is already in `seen`, we found a duplicate
- otherwise, add it to `seen`

This is a classic **seen-before** problem.

---

## Walkthrough

For `nums = [3, 1, 4, 2, 1]`

Start with:

- `seen = {}`

Step 1:
- current number = `3`
- `3` is not in `seen`
- add `3`

Now:
- `seen = {3}`

Step 2:
- current number = `1`
- `1` is not in `seen`
- add `1`

Now:
- `seen = {3, 1}`

Step 3:
- current number = `4`
- not in `seen`
- add it

Now:
- `seen = {3, 1, 4}`

Step 4:
- current number = `2`
- not in `seen`
- add it

Now:
- `seen = {3, 1, 4, 2}`

Step 5:
- current number = `1`
- `1` **is already in** `seen`

So we return `true`.

---

## TypeScript Solution

```ts
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}
```

---

## Why it works

The set remembers every number we have already visited.

The moment we see the same number again, we know there is a duplicate.

---

## Complexity Analysis

- **Time:** `O(n)` because we visit each number once
- **Space:** `O(n)` in the worst case if all numbers are different

---

## Test Cases

```ts
containsDuplicate([]) // false
containsDuplicate([1]) // false
containsDuplicate([1, 2, 3, 1]) // true
containsDuplicate([7, 7]) // true
containsDuplicate([4, 5, 6]) // false
```

---

## Quick Check

1. What should we use here: map or set?  
   **Answer:** Set

2. Why?  
   **Answer:** We only care whether we have seen a value before.

---

# Lesson 2: Two Sum

## Concrete Screen Design

### Learning Goal

Teach that a hash map can remember what number we still need and where to find its partner.

### Habitat

`Pairing Post Office`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Pairing Post Office
- Lesson title: Two Sum
- Progress chip: 2/6

Scene:
- Number packages moving along a post office belt
- A target sign above the belt
- Mail slots labeled with needed partner values

Support strip:
- "Ask: What number do I still need?"
- "The map helps me look it up fast."

Action zone:
- Reveal the current number
- Compute the needed partner
- Check the mail slots for a match

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Turn the problem into a postal-matching scene so "lookup" feels concrete. The current number should ride in on a package, and the needed value should appear as a stamped label. Matching slots should glow blue when the answer is ready.



### Background Design

The background for `Pairing Post Office` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo Number packages moving along a post office belt, A target sign above the belt, and Mail slots labeled with needed partner values; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If Number packages moving along a post office belt, A target sign above the belt, and Mail slots labeled with needed partner values already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Pairing Post Office` and should visually support the lesson goal: a hash map can remember what number we still need and where to find its partner. The background should establish the world softly, but the foreground should stay centered on Number packages moving along a post office belt, A target sign above the belt, and Mail slots labeled with needed partner values. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. Number packages moving along a post office belt, A target sign above the belt, and Mail slots labeled with needed partner values should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Ask: What number do I still need?" and "The map helps me look it up fast.", and the action area should invite one clear next step through Reveal the current number, Compute the needed partner, and Check the mail slots for a match. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through Number packages moving along a post office belt, A target sign above the belt, and Mail slots labeled with needed partner values.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Ask: What number do I still need?" and "The map helps me look it up fast.". The action zone should stay tightly focused on Reveal the current number, Compute the needed partner, and Check the mail slots for a match, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico reveals the target and the current number package.
2. The learner computes the missing partner.
3. The map slots are checked to see if that partner is already there.
4. If not, the current number gets stored for later.
5. When a match appears, the belt pauses and celebrates the found pair.

### Component Usage

- Scene Card
- Target badge
- Lookup slot map
- Step card for "current" and "need"
- Success badge

## Problem

Given an array of integers `nums` and an integer `target`, return the indexes of two numbers that add up to `target`.

You may assume exactly one answer exists, and you may not use the same index twice.

### Example 1

**Input:** `nums = [2, 7, 11, 15]`, `target = 9`  
**Output:** `[0, 1]`

Because `2 + 7 = 9`.

### Example 2

**Input:** `nums = [3, 2, 4]`, `target = 6`  
**Output:** `[1, 2]`

Because `2 + 4 = 6`.

---

## Intuition

The brute force solution checks every pair.

That means:

- first number with every later number
- second number with every later number
- and so on

That works, but it is slow.

A smarter idea:

When we are at a number, we can ask:

> “What number do I need to reach the target?”

If:
- `target = 9`
- current number = `2`

Then we need:
- `7`

So before adding the current number to a map, we check whether the needed partner is already there.

The map will store:

- key = number
- value = index where we found it

---

## Walkthrough

`nums = [2, 7, 11, 15]`, `target = 9`

Start:
- `seen = {}`

Step 1:
- index = `0`, num = `2`
- need = `9 - 2 = 7`
- `7` is not in the map
- store `2 -> 0`

Map:
- `{2: 0}`

Step 2:
- index = `1`, num = `7`
- need = `9 - 7 = 2`
- `2` **is** in the map at index `0`

Return:
- `[0, 1]`

---

## TypeScript Solution

```ts
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const need = target - num;

    if (seen.has(need)) {
      return [seen.get(need)!, i];
    }

    seen.set(num, i);
  }

  return [];
}
```

---

## Why it works

For each number, the map remembers numbers we already passed.

If the partner we need is already in the map, then we found the pair.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
twoSum([2, 7, 11, 15], 9) // [0, 1]
twoSum([3, 2, 4], 6) // [1, 2]
twoSum([3, 3], 6) // [0, 1]
twoSum([1, 5, 8], 100) // []
```

---

## Interview Tip

When a problem asks for:

- a pair
- a matching value
- fast lookup

ask yourself:

> “Can I store what I’ve already seen in a map?”

---

# Lesson 3: Valid Anagram

## Concrete Screen Design

### Learning Goal

Teach that counting letters with a hash map helps us compare whether two words use the same letters the same number of times.

### Habitat

`Letter Bakery`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Letter Bakery
- Lesson title: Valid Anagram
- Progress chip: 3/6

Scene:
- Two word trays filled with letter cookies
- A counting board with one jar per letter
- A match meter showing whether the jars end balanced

Support strip:
- "Count the letters, not just the shapes."
- "Both words must use the same letters the same number of times."

Action zone:
- Add cookies from the first tray
- Remove cookies using the second tray
- Watch the match meter update

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The bakery metaphor makes counting feel friendly. Each letter cookie should be large and readable. The jar board should make increases and decreases obvious so the learner can see balance rather than memorize rules.



### Background Design

The background for `Letter Bakery` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo Two word trays filled with letter cookies, A counting board with one jar per letter, and A match meter showing whether the jars end balanced; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If Two word trays filled with letter cookies, A counting board with one jar per letter, and A match meter showing whether the jars end balanced already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Letter Bakery` and should visually support the lesson goal: counting letters with a hash map helps us compare whether two words use the same letters the same number of times. The background should establish the world softly, but the foreground should stay centered on Two word trays filled with letter cookies, A counting board with one jar per letter, and A match meter showing whether the jars end balanced. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. Two word trays filled with letter cookies, A counting board with one jar per letter, and A match meter showing whether the jars end balanced should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Count the letters, not just the shapes." and "Both words must use the same letters the same number of times.", and the action area should invite one clear next step through Add cookies from the first tray, Remove cookies using the second tray, and Watch the match meter update. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through Two word trays filled with letter cookies, A counting board with one jar per letter, and A match meter showing whether the jars end balanced.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Count the letters, not just the shapes." and "Both words must use the same letters the same number of times.". The action zone should stay tightly focused on Add cookies from the first tray, Remove cookies using the second tray, and Watch the match meter update, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico pours letter cookies from the first word into matching jars.
2. The learner watches the counts rise.
3. The second word removes cookies from those jars.
4. Balanced jars produce a green match meter.
5. The lesson ends by naming this idea as counting with a map.

### Component Usage

- Scene Card
- Counting jars
- Match meter
- Mascot helper strip
- Hint card

## Problem

Two strings are anagrams if they use the same letters the same number of times.

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`. Otherwise, return `false`.

### Example 1

**Input:** `s = "listen"`, `t = "silent"`  
**Output:** `true`

### Example 2

**Input:** `s = "rat"`, `t = "car"`  
**Output:** `false`

---

## Intuition

An anagram is like rearranging letter tiles.

If two words use the exact same letters the exact same number of times, then they are anagrams.

A great way to check this is by **counting** letters.

We can use a hash map:

- key = letter
- value = number of times it appears

If both words have the same counts, then they are anagrams.

---

## Strategy

1. If the strings have different lengths, return `false`
2. Count letters in `s`
3. Count letters in `t`
4. Compare the counts

---

## Walkthrough

`s = "listen"`  
`t = "silent"`

Count letters in `"listen"`:

- l: 1
- i: 1
- s: 1
- t: 1
- e: 1
- n: 1

Count letters in `"silent"`:

- s: 1
- i: 1
- l: 1
- e: 1
- n: 1
- t: 1

Same letters, same counts, so the answer is `true`.

---

## TypeScript Solution

```ts
function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Map<string, number>();

  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  for (const ch of t) {
    if (!counts.has(ch)) {
      return false;
    }

    counts.set(ch, counts.get(ch)! - 1);

    if (counts.get(ch)! < 0) {
      return false;
    }
  }

  return true;
}
```

---

## Why it works

Every time a letter appears in `s`, we add 1.

Every time a letter appears in `t`, we subtract 1.

If the words match perfectly, all counts balance correctly.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)` where `k` is the number of different letters

---

## Test Cases

```ts
validAnagram("listen", "silent") // true
validAnagram("rat", "car") // false
validAnagram("aabb", "bbaa") // true
validAnagram("hello", "helloo") // false
```

---

## Quick Check

Why is a **map** better than a **set** here?

**Answer:** Because we need to know how many times each letter appears, not just whether it appears.

---

# Lesson 4: First Unique Character

## Concrete Screen Design

### Learning Goal

Teach that we can count first, then scan again to find the first character that appears only once.

### Habitat

`Lantern Lane`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Lantern Lane
- Lesson title: First Unique Character
- Progress chip: 4/6

Scene:
- A path of glowing letter lanterns
- A counting board above the path
- A unique spotlight that lands on the first lantern with count 1

Support strip:
- "First count everything."
- "Then walk left to right and find the first count of one."

Action zone:
- Count each letter
- Start the second scan
- Tap the first unique lantern

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The lantern path should encourage a left-to-right walk so the second pass feels natural. The unique spotlight should arrive only after the count board is ready, making the two-pass strategy visible.



### Background Design

The background for `Lantern Lane` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A path of glowing letter lanterns, A counting board above the path, and A unique spotlight that lands on the first lantern with count 1; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A path of glowing letter lanterns, A counting board above the path, and A unique spotlight that lands on the first lantern with count 1 already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Lantern Lane` and should visually support the lesson goal: we can count first, then scan again to find the first character that appears only once. The background should establish the world softly, but the foreground should stay centered on A path of glowing letter lanterns, A counting board above the path, and A unique spotlight that lands on the first lantern with count 1. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A path of glowing letter lanterns, A counting board above the path, and A unique spotlight that lands on the first lantern with count 1 should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "First count everything." and "Then walk left to right and find the first count of one.", and the action area should invite one clear next step through Count each letter, Start the second scan, and Tap the first unique lantern. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A path of glowing letter lanterns, A counting board above the path, and A unique spotlight that lands on the first lantern with count 1.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "First count everything." and "Then walk left to right and find the first count of one.". The action zone should stay tightly focused on Count each letter, Start the second scan, and Tap the first unique lantern, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico counts all letters into the board.
2. The learner sees that counting alone does not answer "first."
3. A second walk begins along the lantern path.
4. The first lantern with count `1` gets a bright spotlight.
5. The support strip explains why this lesson needs two passes.

### Component Usage

- Scene Card
- Count board
- Spotlight indicator
- Two-step process cards
- Hint card

## Problem

Given a string `s`, return the index of the first character that appears exactly once.  
If there is no such character, return `-1`.

### Example 1

**Input:** `s = "leetcode"`  
**Output:** `0`

Because `'l'` appears once and is the first such character.

### Example 2

**Input:** `s = "aabb"`  
**Output:** `-1`

Because every character appears more than once.

---

## Intuition

This problem has two parts:

1. Count how many times each character appears
2. Scan the string again and find the first character with count `1`

This is a good example of using a map for **counting**.

---

## Walkthrough

`s = "loveleetcode"`

Count letters:

- l: 2
- o: 2
- v: 1
- e: 4
- t: 1
- c: 1
- d: 1

Now scan from left to right:

- `l` has count 2
- `o` has count 2
- `v` has count 1

So return index `2`.

---

## TypeScript Solution

```ts
function firstUniqueChar(s: string): number {
  const counts = new Map<string, number>();

  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (counts.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
```

---

## Why it works

The map remembers how many times each character appears.

Then we use the original order of the string to find the **first** one that appears exactly once.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)`

---

## Test Cases

```ts
firstUniqueChar("leetcode") // 0
firstUniqueChar("loveleetcode") // 2
firstUniqueChar("aabb") // -1
firstUniqueChar("z") // 0
```

---

## Common Mistake

A common mistake is to find **a** unique character, but not the **first** one.

That is why we count first, and then scan the original string from left to right.

---

# Lesson 5: Intersection of Two Arrays

## Concrete Screen Design

### Learning Goal

Teach that a set can help us find which values appear in both collections.

### Habitat

`Bridge Market`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Bridge Market
- Lesson title: Intersection of Two Arrays
- Progress chip: 5/6

Scene:
- Two market stalls facing each other
- A middle bridge tray for shared items
- A set basket holding the first stall's values

Support strip:
- "Remember the first group."
- "Check whether the second group has matches."

Action zone:
- Load the first stall into the set basket
- Scan the second stall
- Drop shared values onto the bridge tray

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Use two colorful stalls and one bridge tray in the center so "intersection" feels like a meeting place. Shared items should travel across the bridge when matched. Non-shared items should fade back softly instead of feeling rejected.



### Background Design

The background for `Bridge Market` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo Two market stalls facing each other, A middle bridge tray for shared items, and A set basket holding the first stall's values; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If Two market stalls facing each other, A middle bridge tray for shared items, and A set basket holding the first stall's values already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Bridge Market` and should visually support the lesson goal: a set can help us find which values appear in both collections. The background should establish the world softly, but the foreground should stay centered on Two market stalls facing each other, A middle bridge tray for shared items, and A set basket holding the first stall's values. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. Two market stalls facing each other, A middle bridge tray for shared items, and A set basket holding the first stall's values should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Remember the first group." and "Check whether the second group has matches.", and the action area should invite one clear next step through Load the first stall into the set basket, Scan the second stall, and Drop shared values onto the bridge tray. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through Two market stalls facing each other, A middle bridge tray for shared items, and A set basket holding the first stall's values.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Remember the first group." and "Check whether the second group has matches.". The action zone should stay tightly focused on Load the first stall into the set basket, Scan the second stall, and Drop shared values onto the bridge tray, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico loads all values from the first stall into the set basket.
2. The learner scans items from the second stall one by one.
3. Shared items jump onto the bridge tray.
4. The bridge tray fills with common values only.
5. The lesson ties the scene back to the word "intersection."

### Component Usage

- Scene Card
- Set basket
- Shared-items tray
- Match chips
- Hint card

## Problem

Given two arrays of integers, return an array of their common values.  
Each value should appear only once in the result.

### Example 1

**Input:** `nums1 = [1, 2, 2, 1]`, `nums2 = [2, 2]`  
**Output:** `[2]`

### Example 2

**Input:** `nums1 = [4, 9, 5]`, `nums2 = [9, 4, 9, 8, 4]`  
**Output:** `[4, 9]` or `[9, 4]`

---

## Intuition

We want values that appear in **both** arrays.

A simple strategy:

1. Put all values from the first array into a set
2. Loop through the second array
3. If a value is in the first set, add it to a result set
4. Convert the result set to an array

We use sets because:

- checking membership is fast
- duplicates are automatically removed

---

## Walkthrough

`nums1 = [1, 2, 2, 1]`  
`nums2 = [2, 2]`

First set:
- `{1, 2}`

Check values in `nums2`:

- `2` is in the first set -> add `2` to result
- next `2` is also in the first set, but the result set still only keeps one `2`

Result:
- `[2]`

---

## TypeScript Solution

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set<number>(nums1);
  const result = new Set<number>();

  for (const num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}
```

---

## Why it works

The first set lets us quickly check whether a number exists in the first array.

The result set makes sure we only keep unique answers.

---

## Complexity Analysis

- **Time:** `O(n + m)`
- **Space:** `O(n + r)` where `r` is the size of the result

---

## Test Cases

```ts
intersection([1, 2, 2, 1], [2, 2]) // [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]) // [4, 9] or [9, 4]
intersection([], [1, 2]) // []
intersection([1, 2, 3], [4, 5, 6]) // []
```

---

## Quick Check

Why is a set helpful here?

**Answer:** It helps us check membership quickly and avoids duplicate answers.

---

# Lesson 6: Count the Frequencies

## Concrete Screen Design

### Learning Goal

Teach how to build a frequency map by increasing the count for each item we see.

### Habitat

`Bell Tower Board`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Bell Tower Board
- Lesson title: Count the Frequencies
- Progress chip: 6/6

Scene:
- A row of item bells ringing one by one
- A tally board with labeled count tiles
- A helper ribbon showing "new item" or "add one more"

Support strip:
- "If the item is new, start at one."
- "If it is already there, add one more."

Action zone:
- Step through the items
- Watch counts appear and increase
- Answer what the finished map says

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The tally board should feel neat and rhythmic so frequency-building looks repetitive and learnable. Each count increase should animate as a simple `+1`. Avoid clutter so the learner notices the repeated structure.



### Background Design

The background for `Bell Tower Board` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A row of item bells ringing one by one, A tally board with labeled count tiles, and A helper ribbon showing "new item" or "add one more"; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A row of item bells ringing one by one, A tally board with labeled count tiles, and A helper ribbon showing "new item" or "add one more" already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Bell Tower Board` and should visually support the lesson goal: how to build a frequency map by increasing the count for each item we see. The background should establish the world softly, but the foreground should stay centered on A row of item bells ringing one by one, A tally board with labeled count tiles, and A helper ribbon showing "new item" or "add one more". Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A row of item bells ringing one by one, A tally board with labeled count tiles, and A helper ribbon showing "new item" or "add one more" should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "If the item is new, start at one." and "If it is already there, add one more.", and the action area should invite one clear next step through Step through the items, Watch counts appear and increase, and Answer what the finished map says. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A row of item bells ringing one by one, A tally board with labeled count tiles, and A helper ribbon showing "new item" or "add one more".

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "If the item is new, start at one." and "If it is already there, add one more.". The action zone should stay tightly focused on Step through the items, Watch counts appear and increase, and Answer what the finished map says, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico rings each item bell in order.
2. New items create a fresh count tile starting at `1`.
3. Repeated items increase their tile by one.
4. The learner reads the final board like a summary of the whole list.
5. The lesson emphasizes that this same pattern powers many later map problems.

### Component Usage

- Scene Card
- Count tiles
- `+1` helper ribbon
- Step controls
- Summary card

## Problem

Given an array of numbers, return a map-like result showing how many times each number appears.

### Example

**Input:** `nums = [4, 4, 2, 7, 2, 2]`

**Output idea:**
- `4 -> 2`
- `2 -> 3`
- `7 -> 1`

---

## Intuition

This is one of the most important hash map patterns.

We want to count how often each value appears.

That means:

- key = number
- value = count

Every time we see a number:
- if it is new, start its count at 1
- otherwise, add 1 to its count

---

## Walkthrough

`nums = [4, 4, 2, 7, 2, 2]`

Start:
- `{}`

See `4`
- `{4: 1}`

See `4`
- `{4: 2}`

See `2`
- `{4: 2, 2: 1}`

See `7`
- `{4: 2, 2: 1, 7: 1}`

See `2`
- `{4: 2, 2: 2, 7: 1}`

See `2`
- `{4: 2, 2: 3, 7: 1}`

---

## TypeScript Solution

```ts
function countFrequencies(nums: number[]): Map<number, number> {
  const counts = new Map<number, number>();

  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  return counts;
}
```

---

## Why it works

The map stores one bucket for each number.

Each time we see that number again, we increase its bucket count.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(k)` where `k` is the number of distinct values

---

## Test Cases

```ts
countFrequencies([4, 4, 2, 7, 2, 2])
countFrequencies([])
countFrequencies([9])
```

---

## Why this lesson matters

This pattern shows up everywhere:

- counting votes
- counting letters
- counting visits
- counting scores
- finding the most common item

If you get good at counting with hash maps, many harder problems become easier.

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review when to choose a set versus a hash map and which strategy fits each problem type.

### Habitat

`Memory Meadow Review Hall`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Memory Meadow Review Hall
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review wall with six problem cards
- Two large zones: set side and hash map side
- Tiny icons for seen-before, counting, lookup, and matching

Support strip:
- "Pick the memory tool that fits the clue."
- "Start with the question the problem is asking."

Action zone:
- Sort each problem card into set or map
- Match strategy icons to lessons
- Explain one choice in a short sentence

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review hall should feel organized like a museum of memory tools. Keep the set side visually simpler and the map side more information-rich. Strategy icons should be large enough for children to recognize before reading labels.



### Background Design

The background for `Memory Meadow Review Hall` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo A review wall with six problem cards, Two large zones: set side and hash map side, and Tiny icons for seen-before, counting, lookup, and matching; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If A review wall with six problem cards, Two large zones: set side and hash map side, and Tiny icons for seen-before, counting, lookup, and matching already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Memory Meadow Review Hall` and should visually support the lesson goal: review when to choose a set versus a hash map and which strategy fits each problem type. The background should establish the world softly, but the foreground should stay centered on A review wall with six problem cards, Two large zones: set side and hash map side, and Tiny icons for seen-before, counting, lookup, and matching. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. A review wall with six problem cards, Two large zones: set side and hash map side, and Tiny icons for seen-before, counting, lookup, and matching should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "Pick the memory tool that fits the clue." and "Start with the question the problem is asking.", and the action area should invite one clear next step through Sort each problem card into set or map, Match strategy icons to lessons, and Explain one choice in a short sentence. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through A review wall with six problem cards, Two large zones: set side and hash map side, and Tiny icons for seen-before, counting, lookup, and matching.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "Pick the memory tool that fits the clue." and "Start with the question the problem is asking.". The action zone should stay tightly focused on Sort each problem card into set or map, Match strategy icons to lessons, and Explain one choice in a short sentence, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico introduces the review as a sorting challenge.
2. The learner drags lesson cards to the set side or map side.
3. Strategy icons snap into place under the correct lessons.
4. The support strip restates why each choice fits.
5. A next-step card opens the mastery check.

### Component Usage

- Review sorting board
- Strategy icon chips
- Problem cards
- Mascot speech bubble
- Next-step panel

## What you learned

In this chapter, you learned that:

- a **set** stores unique values
- a **hash map** stores key-value pairs
- sets are great for checking whether something was seen
- maps are great for counting and lookup
- many slow nested-loop problems can become faster with maps and sets

---

## Pattern Summary

### Use a set when:
- you only care whether something exists
- you want to track seen values
- you want unique results

### Use a map when:
- you need counts
- you need indexes
- you need to connect one thing to another thing

---

## Problem Pattern Match

### Contains Duplicate
- best tool: **set**
- reason: seen-before checking

### Two Sum
- best tool: **map**
- reason: fast lookup for the needed partner

### Valid Anagram
- best tool: **map**
- reason: count letters

### First Unique Character
- best tool: **map**
- reason: count first, then search

### Intersection of Two Arrays
- best tool: **set**
- reason: membership and uniqueness

### Count the Frequencies
- best tool: **map**
- reason: counting

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can independently choose between a set and a hash map and explain why.

### Habitat

`Memory Meadow Challenge Tent`

### Primary Mascot

`Pico the Fox`

### Screen Composition

```txt
Header:
- Back
- Memory Meadow Challenge Tent
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One challenge table with mystery cards
- A set basket on one side
- A map cubby board on the other
- A result badge area above the table

Support strip:
- "What do you need to remember?"
- "Choose the tool before you solve the whole problem."

Action zone:
- Pick set or map
- Solve a short challenge
- Explain the choice in one sentence

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

The mastery tent should feel focused and slightly special without becoming visually noisy. The set basket and map board should be familiar from earlier screens so the learner can rely on memory rather than fresh instruction. Keep the result area calm and clear.



### Background Design

The background for `Memory Meadow Challenge Tent` should follow the core product art direction: light neutral foundations, soft storybook vector shapes, rounded forms, and bright accents used only where they help the learner focus. Build the habitat in three clear depth layers. The far layer should establish place with a pale sky, wall, canopy, hill, or horizon wash; the middle layer should add simplified environmental props that echo One challenge table with mystery cards, A set basket on one side, A map cubby board on the other, and A result badge area above the table; and the near-ground layer should create a clean stage plane where the active lesson objects can sit without visual clutter.

The environmental props in the background should feel related to the lesson world, but they should always be quieter than the interactive foreground. That means broader silhouettes, lower contrast, fewer details, and softer edges than the tappable objects. If One challenge table with mystery cards, A set basket on one side, A map cubby board on the other, and A result badge area above the table already carries the teaching idea, the background should support it through atmosphere and metaphor rather than duplicating it with extra busy decoration. Pico the Fox should still have a clean visual lane near the teaching edge, so background objects should never crowd the mascot bubble or the central interaction corridor.

Use the design-system palette logic consistently: soft cream, pale sky, misty blue, meadow green, warm sand, and light stone as the base; brighter orange, blue, green, or yellow only as restrained accents that reinforce progress, focus, or delight. Motion in the background should stay gentle and secondary, such as drifting clouds, swaying grass, tiny sparkles, or slow machine twinkles depending on the habitat. The background should make the lesson world feel alive, but it should never compete with the scene model, the support strip, or the child’s next interaction.

### Detailed Scene Design

The scene should immediately read as `Memory Meadow Challenge Tent` and should visually support the lesson goal: check whether the learner can independently choose between a set and a hash map and explain why. The background should establish the world softly, but the foreground should stay centered on One challenge table with mystery cards, A set basket on one side, A map cubby board on the other, and A result badge area above the table. Those objects should be oversized, well spaced, and easy to touch, with the most important interactive pieces getting the strongest contrast, glow, and motion. Pico the Fox should sit near the teaching edge of the scene, acting like a guide who points attention toward the current rule without covering the active object.

Every major scene object should do double duty as both world-building and lesson logic. One challenge table with mystery cards, A set basket on one side, A map cubby board on the other, and A result badge area above the table should feel like playful props inside the habitat, but they should also physically represent the data, positions, or choices the child is learning to reason about. The scene should never feel decorative-only. If a child can point at an object, they should also be able to explain what lesson job that object is doing.

As the learner interacts, the world should answer right away with gentle motion, small highlights, and short helper copy. The support strip should stay tied to what is happening on screen through lines like "What do you need to remember?" and "Choose the tool before you solve the whole problem.", and the action area should invite one clear next step through Pick set or map, Solve a short challenge, and Explain the choice in one sentence. Correct actions should visibly advance the world state, while incorrect actions should pause the scene, point back to the relevant object, and offer one calm clue instead of a loud error state.

### Overall Interaction Design

The interaction should follow a consistent learning loop: look at the scene, identify the active object, make one small move, then watch the scene explain why that move mattered. This keeps the world and the concept aligned, because the learner is not only reading about the rule but also seeing it happen through One challenge table with mystery cards, A set basket on one side, A map cubby board on the other, and A result badge area above the table.

The support strip should act like a translator between the visual world and the lesson vocabulary. It should stay short, concrete, and synchronized with the scene state, especially when it reinforces ideas such as "What do you need to remember?" and "Choose the tool before you solve the whole problem.". The action zone should stay tightly focused on Pick set or map, Solve a short challenge, and Explain the choice in one sentence, so the child always knows what to do next and never has to hunt across the screen for the primary interaction.

Most importantly, the scene should coincide with the lesson by making the algorithm feel like a visible cause-and-effect story. The objects in the world stand in for the data structure, the movement in the world stands in for the algorithm step, and the learner choice stands in for the reasoning the algorithm is using. When those three things stay aligned, the child can understand the concept through action instead of only through explanation.

### Interaction Flow

1. Pico presents a mystery card and gives less guidance than before.
2. The learner chooses whether the challenge needs a set or a map.
3. The scene updates to show the chosen tool in action.
4. A short reflection asks what information had to be remembered.
5. The result badge shows pass or needs more practice.

### Component Usage

- Challenge scene card
- Tool choice buttons
- Reflection prompt
- Mastery feedback card
- Hint card

Try answering these before looking at the answers.

## 1. True or False

A set can store the count of how many times something appears.

**Answer:** False  
A set only stores whether the item exists.

---

## 2. Fill in the blank

If a problem asks, “Have I seen this value before?”, a good tool is a _______.

**Answer:** set

---

## 3. Fill in the blank

If a problem asks, “How many times did each letter appear?”, a good tool is a _______.

**Answer:** hash map

---

## 4. Short Answer

Why is `Two Sum` a map problem instead of a set problem?

**Answer:** Because we need to remember the index of each number, not just whether it exists.

---

## 5. Coding Challenge

Write a function that returns `true` if a word has any repeated letter.

### Example

- `"lamp"` -> `false`
- `"letter"` -> `true`

### Hint

Use a set.

```ts
function hasRepeatedLetter(word: string): boolean {
  const seen = new Set<string>();

  for (const ch of word) {
    if (seen.has(ch)) {
      return true;
    }
    seen.add(ch);
  }

  return false;
}
```

---

## 6. Coding Challenge

Write a function that returns the most common number in an array.

### Hint

First build a frequency map.

Example starter idea:

```ts
function mostCommonNumber(nums: number[]): number | null {
  if (nums.length === 0) {
    return null;
  }

  const counts = new Map<number, number>();

  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  let bestNum = nums[0];
  let bestCount = counts.get(bestNum)!;

  for (const [num, count] of counts) {
    if (count > bestCount) {
      bestNum = num;
      bestCount = count;
    }
  }

  return bestNum;
}
```

---

# Friendly Wrap-up

Hash maps and sets help us remember things while we solve a problem.

That is the superpower.

Instead of asking the same question again and again, we save important information as we go.

That helps us write code that is:

- faster
- cleaner
- smarter

In the next chapter, you’ll keep building your problem-solving toolbox with another important coding pattern.
