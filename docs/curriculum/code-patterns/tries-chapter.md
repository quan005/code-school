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
- search `"b.."` -> `true`

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
wd.search("b..") // true
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
