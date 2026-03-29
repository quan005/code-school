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

## Concrete Screen Design

### Learning Goal

Teach that a graph is a network of nodes and edges, and that graph problems are really questions about connection.

### Habitat

`Connection Map Camp`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Connection Map Camp
- Screen title: Introduction to Graphs
- Progress chip: Intro

Scene:
- A map of connected cabins as graph nodes
- Visible path lines as edges
- A mode switch for directed and undirected arrows

Support strip:
- "A node is a place or thing."
- "An edge is the line that connects two nodes."

Action zone:
- Tap nodes and edges to reveal their roles
- Toggle directed vs undirected mode
- Highlight one route through the graph

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The map should feel playful and clear, like a camp map with cabins and paths. Nodes need to be large and labeled, and edges should be easy to trace visually. Directed mode should add arrowheads without making the map too busy.

### Interaction Flow

1. Nova introduces the map of cabins and paths.
2. The learner taps a cabin to learn that it is a node.
3. The learner taps a path to learn that it is an edge.
4. Directed mode shows one-way arrows, while undirected mode shows two-way connections.
5. The support strip explains that graph problems ask what is connected to what.

### Component Usage

- Scene Card
- Node / edge labels
- Directed-mode toggle
- Route highlighter
- Start-lesson CTA

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

## Concrete Screen Design

### Learning Goal

Teach that DFS goes deep down one route first, while BFS explores nearby nodes first.

### Habitat

`Trail Network Board`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Trail Network Board
- Lesson title: Traverse a Graph (DFS and BFS)
- Progress chip: 1/6

Scene:
- A connected graph of trail stops
- A DFS path marker and a BFS queue tray
- A visited set badge and visit-order strip

Support strip:
- "Use visited so you do not loop forever."
- "DFS goes deep. BFS goes wide."

Action zone:
- Toggle DFS or BFS mode
- Step through the graph
- Watch the visit order build

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Keep the same graph visible in both modes so the difference comes from traversal behavior. The visited badge should always be present because it is central to safe graph traversal. DFS path highlights should look like one adventurous route, while BFS should light outward layer by layer.

### Interaction Flow

1. Nova starts at one node with an empty visited set.
2. In DFS mode, the learner follows one path as far as possible.
3. In BFS mode, the learner uses the queue tray to explore neighbors level by level.
4. The visit-order strip records each traversal.
5. The support strip compares deep-first and wide-first movement.

### Component Usage

- Scene Card
- DFS / BFS toggle
- Queue tray
- Visited badge
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that a path exists if we can travel through connected nodes from the start to the goal.

### Habitat

`Bridge Route Quest`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Bridge Route Quest
- Lesson title: Find if a Path Exists
- Progress chip: 2/6

Scene:
- A graph map with a start flag and a target flag
- A current route highlight through connected nodes
- A reachable / blocked result banner

Support strip:
- "Can you travel from start to target through the connections?"
- "Keep exploring connected nodes until you find the goal or run out."

Action zone:
- Start from the source node
- Explore connected neighbors
- Decide reachable or not reachable

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The start and target flags need to stand out immediately so the question is concrete. The route highlight should make progress feel visible. A blocked result should show disconnected space, not just a red failure message.

### Interaction Flow

1. Nova places a start flag and a target flag on the map.
2. The learner explores connected neighbors from the start.
3. The route highlight grows through reachable nodes.
4. If the target is reached, the reachable banner appears.
5. If exploration ends first, the blocked banner explains that no path exists.

### Component Usage

- Scene Card
- Start / target flags
- Route highlight
- Reachable / blocked banner
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that connected components are separate groups of nodes that cannot reach each other.

### Habitat

`Friendship Island Board`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Friendship Island Board
- Lesson title: Count Connected Components
- Progress chip: 3/6

Scene:
- A graph with several disconnected clusters
- A color fill spreading through one component at a time
- A component counter banner

Support strip:
- "One component is one connected group."
- "Start a new count when you find an unvisited group."

Action zone:
- Find an unvisited node
- Traverse its full component
- Increase the component counter

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Disconnected clusters should be visually separated enough that the idea of separate groups becomes obvious. The color fill should sweep through one component fully before the next count begins. Keep the component counter visible and steady.

### Interaction Flow

1. Nova spots an unvisited node in one cluster.
2. The learner explores and colors that whole connected group.
3. The component counter increases by one.
4. The process repeats with the next unvisited cluster.
5. The support strip explains that every new untouched cluster starts a new component.

### Component Usage

- Scene Card
- Component color fill
- Counter banner
- Unvisited-node marker
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that groups of connected land cells form islands, while water keeps them separated.

### Habitat

`Tide Grid Bay`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Tide Grid Bay
- Lesson title: Number of Islands
- Progress chip: 4/6

Scene:
- A grid of water and land tiles
- A flood-fill highlight spreading across one island
- An island counter badge

Support strip:
- "Land cells that touch belong to the same island."
- "Water stops the island from growing."

Action zone:
- Pick an unvisited land tile
- Explore all touching land tiles
- Count one island and continue

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The grid should look like a little bay map, with land and water easy to distinguish. The flood-fill highlight should spread across one island at a time. Keep the island counter calm and readable.

### Interaction Flow

1. Nova finds an unvisited land tile.
2. The learner flood-fills all connected land around it.
3. The island counter increases after that region is finished.
4. The search resumes for the next untouched land tile.
5. The support strip explains that each separate land region counts once.

### Component Usage

- Scene Card
- Grid tiles
- Flood-fill highlight
- Island counter
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that cloning a graph means making new nodes and reconnecting them in the same pattern without reusing the old nodes.

### Habitat

`Mirror Network Workshop`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Mirror Network Workshop
- Lesson title: Clone Graph
- Progress chip: 5/6

Scene:
- An original graph on the left and a clone graph on the right
- A copy map board linking old nodes to new nodes
- Connection beams recreating edges in the clone

Support strip:
- "Make a new node for each old node."
- "Use a map so you do not copy the same node twice."

Action zone:
- Visit an original node
- Create its clone if needed
- Rebuild its neighbor connections on the clone side

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The side-by-side original and clone layout is important for clarity. The copy map board should make the old-to-new pairing visible. Connection beams need to show that the structure is being rebuilt, not shared.

### Interaction Flow

1. Nova selects one original node.
2. The learner checks the copy map to see whether a clone already exists.
3. A new clone node is created if needed.
4. The clone graph gains matching neighbor links.
5. The support strip explains that the copy should look the same but use different nodes.

### Component Usage

- Scene Card
- Copy map board
- Dual-graph layout
- Connection beams
- Hint card

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

## Concrete Screen Design

### Learning Goal

Teach that course prerequisites form a directed graph, and a cycle means the schedule cannot be completed.

### Habitat

`Class Arrow Academy`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Class Arrow Academy
- Lesson title: Course Schedule
- Progress chip: 6/6

Scene:
- A directed graph of class cards connected by arrow lines
- A cycle alert loop if prerequisites circle back
- A finish path banner if the graph stays valid

Support strip:
- "Arrows mean this class comes first."
- "A cycle means the plan loops forever."

Action zone:
- Follow prerequisite arrows
- Detect whether arrows circle back
- Decide finishable or not finishable

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Directed arrows need to be clear and readable because they are the core rule of the lesson. The cycle alert loop should be visually distinct without becoming alarming. The class cards should feel like a real school plan.

### Interaction Flow

1. Nova introduces the class cards and prerequisite arrows.
2. The learner follows one chain of classes.
3. If an arrow path circles back, the cycle alert loop appears.
4. If all arrows move forward cleanly, the finish path banner remains open.
5. The lesson explains that cycles block completion.

### Component Usage

- Scene Card
- Directed-arrow graph
- Cycle alert loop
- Finish path banner
- Hint card

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

## Concrete Screen Design

### Learning Goal

Review nodes, edges, DFS, BFS, paths, components, islands, graph cloning, and directed dependency cycles.

### Habitat

`Network Review Lodge`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Network Review Lodge
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review wall with six mini graph scenes
- Tool chips for traverse, path, component, island, clone, cycle
- A reminder banner that says "graphs are about connections"

Support strip:
- "Ask what is connected, reachable, or looping."
- "Then choose the graph idea that matches."

Action zone:
- Match each mini-scene to the right graph idea
- Sort clue chips to the correct lesson
- Explain what the edges are telling you

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review lodge should feel like a map room full of connection sketches. Keep the reminder banner visible because it anchors the whole chapter. Mini-scenes should reuse the same visual language from the lessons to stay familiar.

### Interaction Flow

1. Nova opens the review wall of graph scenes.
2. The learner matches each scene to its graph concept.
3. Clue chips slide into the correct recap panel.
4. The support strip explains the reasoning in one sentence.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Tool chips
- Mini graph scenes
- Mascot speech bubble
- Next-step panel

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

## Concrete Screen Design

### Learning Goal

Check whether the learner can read a graph and choose the right connection-based action with less support.

### Habitat

`Route Challenge Camp`

### Primary Mascot

`Nova the Fox`

### Screen Composition

```txt
Header:
- Back
- Route Challenge Camp
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused graph challenge
- A highlighted start point or active node
- A result badge area above the graph

Support strip:
- "What does this graph say about connection?"
- "Choose the path, group, copy, or cycle answer that fits."

Action zone:
- Predict the next graph move or answer
- Solve one short graph challenge
- Explain what connection clue mattered most

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay clean and centered on one graph. The active node or start point must stand out clearly. Keep the result area calm so the graph itself remains the main teacher.

### Interaction Flow

1. Nova presents a final graph challenge with limited guidance.
2. The learner studies the active node or route.
3. The learner chooses the next step or final answer.
4. A short reflection asks which connection clue mattered most.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Active-node highlight
- Prediction prompt
- Reflection prompt
- Result feedback card

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
