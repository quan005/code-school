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
dfs(...);            // explore
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
    results.push([...path]);
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
      results.push([...path]);
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
      results.push([...path]);
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
      results.push([...path]);
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
