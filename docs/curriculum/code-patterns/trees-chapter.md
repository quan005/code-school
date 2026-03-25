---
title: "Trees"
chapterSlug: "trees"
order: 11
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 110
skills:
  - "Explain how nodes connect in a tree"
  - "Recognize root, child, parent, and leaf nodes"
  - "Traverse a tree using depth-first and breadth-first strategies"
  - "Solve basic binary tree and binary search tree problems step by step"
---

# Trees

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A tree is a group of connected nodes that branches out from a starting point called the root.

---

# Chapter Overview

Imagine a family tree.

At the top, there is one starting person.

Below that person, the family branches out into children, grandchildren, and more.

That is a lot like a **tree** in programming.

A tree is made of **nodes** connected in a branching shape.

In this chapter, a **node** is just one little circle or box in the tree.

Unlike a linked list, which mostly goes in one line, a tree can split into different paths.

Trees help us model things like:

- family relationships
- folders and files
- game decision paths
- menu choices
- search structures
- levels in a game map

In this chapter, we will learn:

1. **Introduction to Trees**
   - Intuition
   - Tree Words You Need to Know
   - Binary Trees and Binary Search Trees
   - Traversal Strategies
   - Real-world Example
2. **Traverse a Tree (DFS and BFS)**
3. **Maximum Depth of a Binary Tree**
4. **Same Tree**
5. **Invert Binary Tree**
6. **Binary Tree Level Order Traversal**
7. **Search in a Binary Search Tree**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Trees

## Intuition

A tree starts with a top node called the **root**.

From there, it can branch into other nodes.

A very simple tree might look like this:

```txt
        8
       / \
      3   10
     / \    \
    1   6    14
```

In this tree:

- `8` is the root
- `3` and `10` are children of `8`
- `1`, `6`, and `14` are farther down
- some nodes have children
- some nodes do not

That branching shape is what makes a tree a tree.

---

## Tree words you need to know

### Root
The very top starting node.

### Parent
A node directly above another node.

### Child
A node directly below another node.

### Leaf
A node with no children.

### Edge
A connection between two nodes.

### Path
A route from one node to another.

### Depth
How far a node is from the root.

### Height
How tall a tree is from top to bottom.

If those words feel big, that is okay.

- **root** means the top starter
- **parent** means the node above
- **child** means the node below
- **leaf** means an ending node

---

## Binary Tree

A **binary tree** is a tree where each node can have at most:

- one left child
- one right child

So each node can have:
- 0 children
- 1 child
- 2 children

A node in a binary tree often looks like this:

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

---

## Binary Search Tree

A **binary search tree**, or **BST**, is a special kind of binary tree.

It follows this rule:

- values in the left subtree are smaller
- values in the right subtree are larger

Example:

```txt
        8
       / \
      3   10
     / \    \
    1   6    14
```

This is a BST because:
- left side of `8` has smaller values
- right side of `8` has larger values

That rule makes searching faster.

---

## How do we move through a tree?

Moving through a tree is called **traversal**.

There are two big families of traversal:

### 1. Depth-First Search (DFS)

Go as far down one path as possible before backing up.

In kid words, DFS means:

> "Keep going down this path first."

Common DFS orders:
- preorder
- inorder
- postorder

### 2. Breadth-First Search (BFS)

Visit the tree level by level.

In kid words, BFS means:

> "Look across one row before going lower."

We often use a **queue** for BFS.

---

## Why trees are useful

Trees are great when information branches.

That happens a lot in real life and in coding.

Examples:
- folder structures on a computer
- categories on a shopping website
- game move decisions
- family trees
- auto-complete and search systems
- many coding practice problems

---

## When To Use Tree Thinking

A problem may be about trees if:

- data branches into left and right
- there is a root node
- you hear words like subtree, parent, child, leaf
- you need to traverse a structure level by level
- you need to compare or transform branching data

A big clue is seeing a node shape like:

```ts
node.left
node.right
```

---

## Real-world Example

### Folders on a computer

Your computer folders act like a tree.

- one main folder can contain subfolders
- each subfolder can contain more files or subfolders
- you can move down into smaller branches

That is tree thinking.

Or think of a company chart:
- one leader at the top
- teams below
- people below teams

That also looks like a tree.

---

## TypeScript Setup

We will use this class in the chapter:

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

---

## Chapter Outline

In this chapter:

- **Traverse a Tree (DFS and BFS)** teaches how to visit nodes in different orders
- **Maximum Depth of a Binary Tree** teaches how to measure tree height
- **Same Tree** teaches how to compare two trees
- **Invert Binary Tree** teaches how to swap branches
- **Binary Tree Level Order Traversal** teaches BFS level by level
- **Search in a Binary Search Tree** teaches how BST order helps us search smarter

---

# Lesson 1: Traverse a Tree (DFS and BFS)

## Problem

Given the root of a binary tree, collect the node values using:

- depth-first search
- breadth-first search

### Example Tree

```txt
        8
       / \
      3   10
     / \    \
    1   6    14
```

---

## Intuition

There are different ways to visit the same tree.

### DFS
Go deep into one branch first.

### BFS
Visit the tree one level at a time.

Both are important.

---

## DFS Walkthrough

For the example tree:

### Preorder
Visit:
- node
- left
- right

Result:

```txt
[8, 3, 1, 6, 10, 14]
```

### Inorder
Visit:
- left
- node
- right

Result:

```txt
[1, 3, 6, 8, 10, 14]
```

### Postorder
Visit:
- left
- right
- node

Result:

```txt
[1, 6, 3, 14, 10, 8]
```

---

## BFS Walkthrough

Visit level by level:

- level 0: `[8]`
- level 1: `[3, 10]`
- level 2: `[1, 6, 14]`

Flat BFS order:

```txt
[8, 3, 10, 1, 6, 14]
```

---

## TypeScript Solution

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function preorder(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null): void {
    if (node === null) {
      return;
    }

    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result;
}

function bfs(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node.val);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return result;
}
```

---

## Why it works

DFS uses recursion to go deep into branches.

BFS uses a queue so nodes are processed in the same order they were discovered, which creates level-by-level traversal.

---

## Complexity Analysis

- **Time:** `O(n)` for both DFS and BFS
- **Space:** `O(n)` in the worst case

---

## Test Cases

```ts
const root = new TreeNode(
  8,
  new TreeNode(3, new TreeNode(1), new TreeNode(6)),
  new TreeNode(10, null, new TreeNode(14))
);

preorder(root) // [8, 3, 1, 6, 10, 14]
bfs(root) // [8, 3, 10, 1, 6, 14]
preorder(null) // []
bfs(null) // []
```

---

## Quick Check

What is the big difference between DFS and BFS?

**Answer:** DFS goes deep down one path first. BFS goes level by level.

---

# Lesson 2: Maximum Depth of a Binary Tree

## Problem

Given the root of a binary tree, return its maximum depth.

The maximum depth is the number of nodes along the longest path from the root down to a leaf.

### Example

For this tree:

```txt
        3
       / \
      9   20
         /  \
        15   7
```

The answer is `3`.

---

## Intuition

The depth of a tree depends on its deepest branch.

At each node:

- look at the depth of the left subtree
- look at the depth of the right subtree
- take the bigger one
- add 1 for the current node

That is a perfect recursive idea.

---

## Walkthrough

For node `3`:
- left depth is 1 from node `9`
- right depth is 2 from node `20 -> 15` or `20 -> 7`

So:
- depth of tree = `1 + max(1, 2) = 3`

---

## TypeScript Solution

```ts
function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
```

---

## Why it works

Each node asks the same question about its children:

> How deep is your subtree?

Then it builds the answer from those smaller answers.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(h)` for the recursion stack, where `h` is the tree height

---

## Test Cases

```ts
maxDepth(null) // 0
maxDepth(new TreeNode(1)) // 1

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

maxDepth(tree) // 3
```

---

## Pattern Reminder

Tree recursion often follows this pattern:

- solve left subtree
- solve right subtree
- combine the results

---

# Lesson 3: Same Tree

## Problem

Given two binary trees, return `true` if they are the same.

Two trees are the same if:

- they have the same shape
- they have the same values in matching positions

Otherwise, return `false`.

### Example

These are the same:

```txt
    1         1
   / \       / \
  2   3     2   3
```

These are not the same:

```txt
    1         1
   /           \
  2             2
```

---

## Intuition

To compare two trees, we compare matching nodes at the same time.

At each step:

- if both nodes are null, that part matches
- if one is null and the other is not, they do not match
- if values are different, they do not match
- otherwise compare left children and right children

This is a great recursion problem.

---

## Walkthrough

Compare roots:
- values same? good

Then compare:
- left with left
- right with right

If every pair matches, the trees are the same.

---

## TypeScript Solution

```ts
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

---

## Why it works

The trees are the same only if:

- current nodes match
- left subtrees match
- right subtrees match

All three must be true.

---

## Complexity Analysis

- **Time:** `O(n)` if both trees have `n` total matching positions
- **Space:** `O(h)` for recursion

---

## Test Cases

```ts
const a = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const b = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const c = new TreeNode(1, new TreeNode(2), null);

isSameTree(a, b) // true
isSameTree(a, c) // false
isSameTree(null, null) // true
```

---

## Quick Check

What makes two trees the same?

**Answer:** They must have the same shape and the same values in matching places.

---

# Lesson 4: Invert Binary Tree

## Problem

Given the root of a binary tree, invert the tree and return its root.

To invert a tree means:

- swap the left and right children of every node

### Example

Original:

```txt
        4
       / \
      2   7
     / \ / \
    1  3 6  9
```

Inverted:

```txt
        4
       / \
      7   2
     / \ / \
    9  6 3  1
```

---

## Intuition

At every node, do one simple action:

- swap left and right

Then do the same thing to the subtrees.

This is another strong recursion problem.

---

## Walkthrough

At root `4`:
- swap left and right

Now:
- left becomes `7`
- right becomes `2`

Then recursively invert:
- subtree rooted at `7`
- subtree rooted at `2`

Eventually every node swaps its children.

---

## TypeScript Solution

```ts
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
```

---

## Why it works

Each node only needs one local action:
- swap left and right

Doing that at every node in the tree inverts the whole tree.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(h)` for recursion

---

## Test Cases

```ts
const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

invertTree(tree); // tree becomes inverted
invertTree(null) // null
```

---

## Pattern Reminder

When the same action should happen at every node, recursion is often a natural fit.

---

# Lesson 5: Binary Tree Level Order Traversal

## Problem

Given the root of a binary tree, return the values level by level.

### Example

For this tree:

```txt
        3
       / \
      9   20
         /  \
        15   7
```

Output:

```txt
[[3], [9, 20], [15, 7]]
```

---

## Intuition

This is a classic **BFS** problem.

We want:
- first level
- second level
- third level

A queue is perfect because it processes nodes in the order they were discovered.

To keep levels separate, we use the queue size at the start of each level.

---

## Walkthrough

Start queue:
- `[3]`

Level 1:
- size = 1
- remove `3`
- result gets `[3]`
- add children `9`, `20`

Queue:
- `[9, 20]`

Level 2:
- size = 2
- remove `9`, `20`
- result gets `[9, 20]`
- add `15`, `7`

Queue:
- `[15, 7]`

Level 3:
- remove `15`, `7`
- result gets `[15, 7]`

Done.

---

## TypeScript Solution

```ts
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      level.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}
```

---

## Why it works

At the start of each level, the queue already contains exactly the nodes for that level.

So processing that many nodes gives one full row of the tree.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

levelOrder(root) // [[3], [9, 20], [15, 7]]
levelOrder(null) // []
levelOrder(new TreeNode(1)) // [[1]]
```

---

## Quick Check

What data structure helps us do BFS?

**Answer:** A queue.

---

# Lesson 6: Search in a Binary Search Tree

## Problem

Given the root of a binary search tree and a value `val`, return the node where `val` is found.

If it does not exist, return `null`.

### Example

BST:

```txt
        8
       / \
      3   10
     / \    \
    1   6    14
```

Search for `6`

Answer:
- return the node with value `6`

---

## Intuition

This problem uses the BST rule:

- smaller values go left
- larger values go right

So at each node:

- if the value matches, return it
- if the target is smaller, search left
- if the target is larger, search right

This is like tree binary search.

---

## Walkthrough

Search for `6` in:

```txt
        8
       / \
      3   10
     / \    \
    1   6    14
```

Start at `8`
- `6 < 8`, so go left

Now at `3`
- `6 > 3`, so go right

Now at `6`
- match found

Return that node.

---

## TypeScript Solution

```ts
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let current = root;

  while (current !== null) {
    if (current.val === val) {
      return current;
    } else if (val < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  return null;
}
```

---

## Why it works

The BST property tells us which side could still contain the answer.

That means we never need to search both sides.

---

## Complexity Analysis

- **Time:** `O(h)` where `h` is the height of the tree
- **Space:** `O(1)`

---

## Test Cases

```ts
const bst = new TreeNode(
  8,
  new TreeNode(3, new TreeNode(1), new TreeNode(6)),
  new TreeNode(10, null, new TreeNode(14))
);

searchBST(bst, 6)?.val // 6
searchBST(bst, 14)?.val // 14
searchBST(bst, 100) // null
searchBST(null, 5) // null
```

---

## Pattern Reminder

A BST gives order inside a tree, and that order helps us search much faster.

---

# Chapter Review

## What you learned

In this chapter, you learned that trees are branching structures made of connected nodes.

You learned how to:

- name parts of a tree
- traverse using DFS and BFS
- measure tree depth
- compare trees
- invert trees
- collect nodes level by level
- search efficiently in a BST

---

## Pattern Summary

### Traverse a Tree
- DFS goes deep first
- BFS goes level by level

### Maximum Depth
- ask left depth
- ask right depth
- take the bigger one

### Same Tree
- compare matching nodes together

### Invert Tree
- swap left and right at every node

### Level Order Traversal
- use BFS with a queue

### Search BST
- use smaller-go-left, larger-go-right

---

## When this pattern is a clue

Think about trees when you see:

- root
- parent and child
- left and right nodes
- subtree
- leaf
- recursive branching
- level order
- BST search rules

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

The top starting node in a tree is called the ________.

**Answer:** root

---

## 2. True or False

A leaf node has no children.

**Answer:** True

---

## 3. Short Answer

What is the difference between DFS and BFS?

**Answer:** DFS goes deep down one path before backing up. BFS visits nodes level by level.

---

## 4. Short Answer

What special rule does a binary search tree follow?

**Answer:** Smaller values go in the left subtree, and larger values go in the right subtree.

---

## 5. Fill in the blank

A binary tree node can have at most ________ children.

**Answer:** two

---

## 6. Mini Coding Challenge

Write a function that counts how many nodes are in a binary tree.

```ts
function countNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why a queue is useful for level-order traversal.

**Sample answer:** A queue is useful because it keeps nodes in the order they were discovered, so we process one level from left to right before moving to the next level.

---

# Friendly Wrap-up

Trees teach an important coding lesson:

> Some data does not live in a line.  
> Some data branches.

That is why tree problems feel different from arrays and linked lists.

The more you practice trees, the more you will notice:

- when recursion fits naturally
- when a queue helps with levels
- when order inside a BST gives faster search
- when a problem is really about structure, not just values

That is a powerful pattern to add to your algorithm toolbox.
