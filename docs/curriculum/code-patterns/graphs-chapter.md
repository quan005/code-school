---
title: "Graphs"
chapterSlug: "graphs"
order: 13
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 115
skills:
  - "Explain what nodes and edges represent in a graph"
  - "Traverse a graph using DFS and BFS"
  - "Recognize connected components and paths"
  - "Solve beginner graph problems step by step"
---

# Graphs

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A graph is a collection of points connected by links. Graphs help us think about relationships, routes, and connected systems.

---

# Chapter Overview

Imagine a map of cities connected by roads.

Each city is a point.
Each road connects two cities.

That is a lot like a **graph**.

A graph is made of:

- **nodes** (the points)
- **edges** (the connections)

In this chapter, a **node** is just a dot, place, or person, and an **edge** is the line that connects two dots.

Graphs show relationships.

They can represent:

- roads between places
- friendships between people
- rooms connected by hallways
- web pages connected by links
- game maps
- classes with prerequisite rules

Graphs are one of the most important ideas in algorithms because so many real problems are really about things being connected.

In this chapter, we will learn:

1. **Introduction to Graphs**
   - Intuition
   - Nodes and Edges
   - Directed vs Undirected Graphs
   - Graph Traversal
   - Real-world Example
2. **Traverse a Graph (DFS and BFS)**
3. **Find if a Path Exists**
4. **Count Connected Components**
5. **Number of Islands**
6. **Clone Graph**
7. **Course Schedule**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Graphs

## Intuition

A graph is a way to show things and the connections between them.

For example:

```txt
A --- B
|     |
C --- D
```

This graph has:

- nodes: `A`, `B`, `C`, `D`
- edges: the lines connecting them

Graphs are not limited to a straight line like a linked list or a branching shape like a tree.

Graphs can loop, branch, connect back, and form many kinds of patterns.

---

## Nodes and edges

### Node
A node is a point in the graph.

You can think of it as one dot on the map.

It might represent:
- a city
- a person
- a room
- a class
- a web page

### Edge
An edge is a connection between two nodes.

You can think of it as the road or line between two dots.

It might represent:
- a road
- a friendship
- a hallway
- a prerequisite
- a link

---

## Directed vs Undirected Graphs

### Undirected graph

If an edge goes both ways, the graph is **undirected**.

Example:
- if A is connected to B
- then B is also connected to A

Friendship is often modeled this way.

---

### Directed graph

If an edge has a direction, the graph is **directed**.

Example:
- A -> B

This does not automatically mean:
- B -> A

A class prerequisite is often directed:
- “Take Math 1 before Math 2”

So:
- Math 1 -> Math 2

---

## How do we store a graph?

A very common way is an **adjacency list**.

That name sounds big, but the idea is simple:

> for each node, write down its neighbors

Example graph:

```txt
A connected to B and C
B connected to A and D
C connected to A
D connected to B
```

Adjacency list:

```ts
const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D"]],
  ["C", ["A"]],
  ["D", ["B"]],
]);
```

This means:
- for each node, list its neighbors

---

## Two big graph traversal tools

### 1. DFS (Depth-First Search)

Go as far as possible down one path before backing up.

In kid words, DFS means:

> "Keep walking down one path before trying a different one."

DFS often uses:
- recursion
- or a stack

---

### 2. BFS (Breadth-First Search)

Explore level by level, like ripples spreading outward.

In kid words, BFS means:

> "Look at the nearby places first, then go farther."

BFS often uses:
- a queue

---

## Why graphs are useful

Graphs help us solve problems about:

- connectivity
- reachability
- shortest steps
- cycles
- groups
- dependencies
- networks

Many problems that look different on the surface are really graph problems underneath.

---

## When To Use Graph Thinking

A problem may be a graph problem if it involves:

- places connected to places
- people connected to people
- one thing leading to another
- routes
- groups
- components
- dependencies
- islands or regions
- can we get from X to Y?

A big clue is when the problem is about **connections**.

---

## Real-world Example

### School map

Imagine the rooms in a school as nodes.

If two rooms are connected by a hallway, that is an edge.

Then graph questions might be:

- Can I get from the library to the gym?
- How many separate building sections are there?
- What rooms are reachable from this hallway?

That is graph thinking.

---

## Chapter Outline

In this chapter:

- **Traverse a Graph (DFS and BFS)** teaches how to visit nodes safely
- **Find if a Path Exists** teaches reachability
- **Count Connected Components** teaches how many separate groups exist
- **Number of Islands** teaches graph thinking on a grid
- **Clone Graph** teaches how to copy graph structure safely
- **Course Schedule** teaches dependencies and cycle detection

---

# Lesson 1: Traverse a Graph (DFS and BFS)

## Problem

Given a graph and a starting node, visit all reachable nodes using:

- depth-first search
- breadth-first search

### Example Graph

```txt
A --- B
|     |
C --- D
```

Adjacency list:

```ts
const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D"]],
  ["C", ["A", "D"]],
  ["D", ["B", "C"]],
]);
```

---

## Intuition

Graph traversal means moving through connected nodes.

But there is an important problem:

> Graphs can have cycles.

That means if we do not keep track of visited nodes, we might loop forever.

So both DFS and BFS usually use a **visited set**.

---

## DFS Walkthrough

Start at `A`.

Possible DFS order:

- visit `A`
- go to `B`
- go to `D`
- go to `C`

One possible result:

```txt
[A, B, D, C]
```

DFS goes deep along one path first.

---

## BFS Walkthrough

Start at `A`.

Visit:
- level 0: `A`
- level 1: `B`, `C`
- level 2: `D`

One possible BFS order:

```txt
[A, B, C, D]
```

BFS spreads outward level by level.

---

## TypeScript Solution

```ts
function dfsTraversal(
  graph: Map<string, string[]>,
  start: string
): string[] {
  const result: string[] = [];
  const visited = new Set<string>();

  function dfs(node: string): void {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);
    result.push(node);

    for (const neighbor of graph.get(node) ?? []) {
      dfs(neighbor);
    }
  }

  dfs(start);
  return result;
}

function bfsTraversal(
  graph: Map<string, string[]>,
  start: string
): string[] {
  const result: string[] = [];
  const visited = new Set<string>([start]);
  const queue: string[] = [start];

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node);

    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}
```

---

## Why it works

The visited set prevents repeated work and infinite loops.

DFS explores deeply.
BFS explores broadly.

Both correctly visit all reachable nodes.

---

## Complexity Analysis

If there are `V` nodes and `E` edges:

- **Time:** `O(V + E)`
- **Space:** `O(V)`

---

## Test Cases

```ts
const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D"]],
  ["C", ["A", "D"]],
  ["D", ["B", "C"]],
]);

dfsTraversal(graph, "A") // one valid result: ["A", "B", "D", "C"]
bfsTraversal(graph, "A") // ["A", "B", "C", "D"]
```

---

## Quick Check

Why do graph traversals usually need a visited set?

**Answer:** Because graphs can loop back, and without a visited set we might revisit nodes forever.

---

# Lesson 2: Find if a Path Exists

## Problem

Given a graph, a start node, and an end node, return `true` if there is a path from start to end. Otherwise, return `false`.

### Example

Graph:

```txt
A --- B --- D
|
C
```

Path from `A` to `D`?
- Yes

Path from `C` to `D`?
- Yes

If another node `X` is disconnected, path from `A` to `X`?
- No

---

## Intuition

This is a reachability problem.

We can use DFS or BFS.

Plan:
1. start at the start node
2. explore neighbors
3. if we ever reach the end node, return `true`
4. if traversal finishes without finding it, return `false`

---

## Walkthrough

Path from `A` to `D`

Start at `A`
- neighbors are `B` and `C`

Go to `B`
- from `B`, go to `D`

Found `D`, so return `true`.

---

## TypeScript Solution

```ts
function hasPath(
  graph: Map<string, string[]>,
  start: string,
  end: string
): boolean {
  const visited = new Set<string>();

  function dfs(node: string): boolean {
    if (node === end) {
      return true;
    }

    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const neighbor of graph.get(node) ?? []) {
      if (dfs(neighbor)) {
        return true;
      }
    }

    return false;
  }

  return dfs(start);
}
```

---

## Why it works

The traversal checks all reachable nodes from the start.

If the end node is reachable, we will eventually visit it.

If not, the search ends without success.

---

## Complexity Analysis

- **Time:** `O(V + E)`
- **Space:** `O(V)`

---

## Test Cases

```ts
const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D"]],
  ["C", ["A"]],
  ["D", ["B"]],
  ["X", []],
]);

hasPath(graph, "A", "D") // true
hasPath(graph, "C", "D") // true
hasPath(graph, "A", "X") // false
```

---

## Pattern Reminder

“Can I get from X to Y?” is one of the strongest clues for a graph traversal problem.

---

# Lesson 3: Count Connected Components

## Problem

Given a graph, return how many connected components it has.

A connected component is a group of nodes where every node can be reached from the others in that group.

### Example

Graph:

```txt
A --- B    C --- D    E
```

There are 3 connected components:
- `{A, B}`
- `{C, D}`
- `{E}`

---

## Intuition

If a graph has separate groups, then starting a DFS from one group will not reach the others.

So we can:

1. loop through every node
2. if a node is not visited yet, that means we found a new component
3. run DFS/BFS from it to mark that whole component

Each fresh DFS/BFS means one more component.

---

## Walkthrough

Nodes:
- `A`, `B`, `C`, `D`, `E`

Start with `A`
- not visited, so component count = 1
- DFS marks `A` and `B`

Next `B`
- already visited

Next `C`
- not visited, so component count = 2
- DFS marks `C` and `D`

Next `D`
- already visited

Next `E`
- not visited, so component count = 3
- DFS marks `E`

Answer: 3

---

## TypeScript Solution

```ts
function countConnectedComponents(graph: Map<string, string[]>): number {
  const visited = new Set<string>();
  let count = 0;

  function dfs(node: string): void {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    for (const neighbor of graph.get(node) ?? []) {
      dfs(neighbor);
    }
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      count++;
      dfs(node);
    }
  }

  return count;
}
```

---

## Why it works

Each time we start a traversal from an unvisited node, we discover one whole new group.

So the number of fresh starts is the number of components.

---

## Complexity Analysis

- **Time:** `O(V + E)`
- **Space:** `O(V)`

---

## Test Cases

```ts
const graph = new Map<string, string[]>([
  ["A", ["B"]],
  ["B", ["A"]],
  ["C", ["D"]],
  ["D", ["C"]],
  ["E", []],
]);

countConnectedComponents(graph) // 3
```

---

## Quick Check

Why does each new unvisited start mean a new component?

**Answer:** Because if it were in an old component, it would already have been visited by that earlier traversal.

---

# Lesson 4: Number of Islands

## Problem

You are given a grid of `"1"`s and `"0"`s.

- `"1"` means land
- `"0"` means water

Return how many islands there are.

An island is a group of connected land cells touching up, down, left, or right.

### Example

Grid:

```txt
1 1 0 0
1 0 0 1
0 0 1 1
0 0 0 0
```

There are 2 islands.

---

## Intuition

A grid can also be treated like a graph.

Each land cell is like a node.
Neighbors up, down, left, and right are like edges.

Plan:
1. scan every cell
2. when we find unvisited land, that starts a new island
3. run DFS/BFS to mark the whole island
4. count how many times that happens

---

## Walkthrough

Suppose we scan left to right, top to bottom.

First time we see land at the top-left:
- that starts island 1
- DFS marks all connected land there

Later we find another unvisited land region:
- that starts island 2
- DFS marks that group

Done.
Answer: 2.

---

## TypeScript Solution

```ts
function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(r: number, c: number): void {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      grid[r][c] !== "1"
    ) {
      return;
    }

    grid[r][c] = "0";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
```

---

## Why it works

Each time we find unvisited land, it starts one island.

The DFS marks that whole island so it is not counted again.

---

## Complexity Analysis

If the grid has `rows * cols` cells:

- **Time:** `O(rows * cols)`
- **Space:** `O(rows * cols)` in the worst case for recursion

---

## Test Cases

```ts
numIslands([
  ["1", "1", "0", "0"],
  ["1", "0", "0", "1"],
  ["0", "0", "1", "1"],
  ["0", "0", "0", "0"],
]) // 2

numIslands([
  ["1", "1"],
  ["1", "1"],
]) // 1

numIslands([
  ["0", "0"],
  ["0", "0"],
]) // 0
```

---

## Pattern Reminder

A grid can often be treated as a graph where each cell connects to neighboring cells.

---

# Lesson 5: Clone Graph

## Problem

Given a node in a connected graph, return a deep copy of the graph.

A deep copy means:
- create all new nodes
- keep the same connections
- do not reuse the old nodes

---

## Intuition

This problem is tricky because graphs can have cycles.

If we copy a node and then blindly copy neighbors, we might loop forever.

So we need a map:

- key = original node
- value = cloned node

Plan:
1. if a node was already cloned, reuse the clone
2. otherwise create a new clone
3. recursively clone neighbors

---

## TypeScript Setup

```ts
class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val: number, neighbors: GraphNode[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}
```

---

## Walkthrough

Suppose node 1 connects to node 2, and node 2 connects back to node 1.

If we clone 1:
- make clone(1)
- then clone neighbor 2
- make clone(2)
- then clone neighbor 1 again

But this time, 1 is already cloned, so reuse it instead of creating another copy.

That prevents infinite loops and keeps the correct graph shape.

---

## TypeScript Solution

```ts
class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val: number, neighbors: GraphNode[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (node === null) {
    return null;
  }

  const copies = new Map<GraphNode, GraphNode>();

  function dfs(current: GraphNode): GraphNode {
    if (copies.has(current)) {
      return copies.get(current)!;
    }

    const clone = new GraphNode(current.val);
    copies.set(current, clone);

    for (const neighbor of current.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}
```

---

## Why it works

The map remembers which original nodes already have clones.

That lets us:
- avoid repeated cloning
- handle cycles safely
- preserve graph structure

---

## Complexity Analysis

- **Time:** `O(V + E)`
- **Space:** `O(V)`

---

## Test Cases

```ts
const n1 = new GraphNode(1);
const n2 = new GraphNode(2);
n1.neighbors.push(n2);
n2.neighbors.push(n1);

const cloned = cloneGraph(n1);
cloned !== n1 // true
cloned?.val // 1
cloned?.neighbors[0].val // 2
```

---

## Challenge Thought

This lesson mixes:
- graph traversal
- maps
- cycle handling

That is why it is an important graph practice problem.

---

# Lesson 6: Course Schedule

## Problem

There are `numCourses` labeled from `0` to `numCourses - 1`.

You are given prerequisite pairs:

```txt
[a, b]
```

which means:
- to take course `a`, you must first take course `b`

Return `true` if it is possible to finish all courses.
Return `false` if there is a cycle in the prerequisite graph.

### Example 1

`numCourses = 2`, prerequisites = `[[1, 0]]`
- possible -> `true`

### Example 2

`numCourses = 2`, prerequisites = `[[1, 0], [0, 1]]`
- impossible -> `false`

Because that makes a cycle.

---

## Intuition

This is a directed graph problem.

Each course is a node.
Each prerequisite is a directed edge.

If there is a cycle, that means:
- one course depends on another
- which depends back on the first
- so the loop can never begin correctly

To detect cycles in a directed graph, we can use DFS with 3 states:

- `0` = unvisited
- `1` = visiting right now
- `2` = fully finished

If during DFS we reach a node that is already in state `1`, that means we found a cycle.

---

## Walkthrough

Courses:
- 0
- 1

Prerequisites:
- `1 -> 0`
- `0 -> 1`

Start DFS from 0:
- mark 0 as visiting

Go to 1:
- mark 1 as visiting

Go back to 0:
- but 0 is already visiting

That means there is a cycle.

Return `false`.

---

## TypeScript Solution

```ts
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const state = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  function dfs(course: number): boolean {
    if (state[course] === 1) {
      return false;
    }

    if (state[course] === 2) {
      return true;
    }

    state[course] = 1;

    for (const next of graph[course]) {
      if (!dfs(next)) {
        return false;
      }
    }

    state[course] = 2;
    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
}
```

---

## Why it works

The `visiting` state tells us which nodes are in the current DFS path.

If we come back to one of those, that is a cycle.

If no cycle exists, all courses can be completed in some order.

---

## Complexity Analysis

- **Time:** `O(V + E)`
- **Space:** `O(V + E)`

---

## Test Cases

```ts
canFinish(2, [[1, 0]]) // true
canFinish(2, [[1, 0], [0, 1]]) // false
canFinish(4, [[1, 0], [2, 1], [3, 2]]) // true
```

---

## Quick Check

Why does a cycle make the course schedule impossible?

**Answer:** Because the courses end up depending on each other in a loop, so there is no valid starting point.

---

# Chapter Review

## What you learned

In this chapter, you learned that graphs are about nodes and connections.

You learned how to:

- traverse graphs with DFS and BFS
- find if a path exists
- count connected groups
- treat a grid like a graph
- copy a graph safely
- detect cycles in a dependency graph

---

## Pattern Summary

### Traverse a Graph
- use DFS or BFS
- track visited nodes

### Find if a Path Exists
- search from start to end

### Count Connected Components
- each new unvisited traversal starts a new group

### Number of Islands
- grid cells can act like graph nodes

### Clone Graph
- use a map from old nodes to new nodes

### Course Schedule
- directed graph
- detect cycles with DFS states

---

## When this pattern is a clue

Think about graphs when you see:

- connections
- routes
- groups
- dependencies
- networks
- islands
- prerequisites
- can we reach this?

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A graph is made of nodes and ________.

**Answer:** edges

---

## 2. True or False

Graphs can have cycles.

**Answer:** True

---

## 3. Short Answer

What is the difference between DFS and BFS?

**Answer:** DFS goes deep down one path first. BFS explores outward level by level.

---

## 4. Short Answer

Why do graph traversals often need a visited set?

**Answer:** Because graphs can loop back, and the visited set prevents repeated work and infinite loops.

---

## 5. Fill in the blank

A connected component is a group of nodes that can all ________ each other.

**Answer:** reach

---

## 6. Mini Coding Challenge

Write a function that returns `true` if a graph has a node with no neighbors.

```ts
function hasIsolatedNode(graph: Map<string, string[]>): boolean {
  for (const neighbors of graph.values()) {
    if (neighbors.length === 0) {
      return true;
    }
  }

  return false;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why a grid island problem is really a graph problem.

**Sample answer:** Each land cell can be treated like a node, and neighboring land cells are connected, so each island is like a connected component in a graph.

---

# Friendly Wrap-up

Graphs teach an important coding lesson:

> Many problems are really about connections.

That is why graphs show up in maps, games, scheduling, social networks, and so many coding challenges.

The more you practice graphs, the more you will notice:

- when a problem is about reachability
- when groups and components matter
- when cycles are the hidden danger
- when DFS or BFS is the right tool

That is a powerful pattern to add to your algorithm toolbox.
