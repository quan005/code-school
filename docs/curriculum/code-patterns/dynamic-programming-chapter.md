---
title: "Dynamic Programming"
chapterSlug: "dynamic-programming"
order: 15
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 120
skills:
  - "Explain why saving smaller answers can make a problem faster"
  - "Recognize overlapping subproblems"
  - "Build answers from base cases upward"
  - "Trace simple dynamic programming tables step by step"
---

# Dynamic Programming

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: Dynamic programming solves a big problem by using answers to smaller repeated problems and saving those answers so we do not redo work.

---

# Chapter Overview

Imagine climbing a staircase.

If you want to know how many ways there are to reach the top, you might notice something interesting:

To get to step 5, you must come from:
- step 4
- or step 3

That means the answer for step 5 depends on smaller answers.

This is the heart of **dynamic programming**, often called **DP**.

That name sounds big, but the idea is friendly:

> solve a small piece once, save it, and use it later

Dynamic programming helps when:

- a big problem can be broken into smaller problems
- the same smaller problems appear again and again
- saving those smaller answers avoids repeated work

DP is one of the most powerful patterns in algorithms because many hard problems become easier once you notice the repeated smaller pieces.

In this chapter, we will learn:

1. **Introduction to Dynamic Programming**
   - Intuition
   - Overlapping Subproblems
   - Base Cases
   - Top-Down vs Bottom-Up
   - Real-world Example
2. **Fibonacci Number**
3. **Climbing Stairs**
4. **Min Cost Climbing Stairs**
5. **House Robber**
6. **Unique Paths**
7. **Coin Change**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Dynamic Programming

## Concrete Screen Design

### Learning Goal

Teach that dynamic programming solves big problems by saving small answers and building upward from base cases.

### Habitat

`Block Builder Lab`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Block Builder Lab
- Screen title: Introduction to Dynamic Programming
- Progress chip: Intro

Scene:
- A staircase or number path built from small answer blocks
- A base-case shelf holding the first known answers
- A DP row that fills from left to right

Support strip:
- "Start with the tiny answers you already know."
- "Build the next answer from saved smaller ones."

Action zone:
- Place the base cases
- Fill the next DP slot
- Compare repeated work vs saved work

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The lab should feel constructive and calm. Base cases need their own special shelf so children see that DP has to start somewhere known. The DP row should fill one slot at a time so saving answers feels visual and concrete.

### Interaction Flow

1. Dot places the base-case blocks first.
2. The learner uses those saved answers to fill the next slot.
3. A compare card shows how repeated work would happen without saving.
4. The DP row grows from left to right.
5. The support strip explains that DP means save and reuse.

### Component Usage

- Scene Card
- Base-case shelf
- DP row
- Compare panel
- Start-lesson CTA

## Intuition

Dynamic programming is about solving a big problem by building from smaller answers.

Suppose we want the Fibonacci numbers:

- `F(0) = 0`
- `F(1) = 1`
- `F(2) = F(1) + F(0) = 1`
- `F(3) = F(2) + F(1) = 2`
- `F(4) = F(3) + F(2) = 3`

Notice how each answer depends on earlier ones.

Now notice something else:
if we try to compute `F(5)` recursively, we may ask for `F(3)` many different times.

That repeated work is what DP tries to avoid.

---

## Overlapping subproblems

A problem has **overlapping subproblems** when the same smaller question shows up more than once.

In kid words, it means:

> "Oops, I am solving the same little problem again."

Example:
To compute `F(5)`, we need:
- `F(4)`
- `F(3)`

But `F(4)` also needs `F(3)`.

So `F(3)` repeats.

If we save `F(3)` the first time, we do not have to compute it again.

That is a major DP idea.

---

## Base cases

DP needs **base cases**.

These are the simplest known answers.

You can think of base cases as the first tiny answers we already know for sure.

For Fibonacci:
- `F(0) = 0`
- `F(1) = 1`

Once we know the base cases, we can build larger answers from them.

Without base cases, the whole structure has nowhere to begin.

---

## Two common DP styles

### 1. Top-down (memoization)

Start with the big problem.
Use recursion.
Save answers as you compute them.

This is like:
- ask the big question
- break it into smaller ones
- remember what you already solved

### 2. Bottom-up (tabulation)

Start with the smallest base cases.
Build upward step by step.

This is like:
- fill in the little answers first
- then use them to build larger answers

Both are DP.
In this chapter, we will often use bottom-up because it is easier to see.

---

## Why dynamic programming is useful

DP is useful when:
- smaller answers help build larger answers
- the same smaller answers repeat
- brute force tries too many repeated possibilities

Instead of solving the same thing again and again, we store answers and reuse them.

---

## When To Use Dynamic Programming

A problem may be a good fit for DP if:

- the answer depends on smaller versions of the same problem
- you hear phrases like “minimum,” “maximum,” “number of ways”
- recursive brute force repeats many states
- the problem can be described with a recurrence rule

A big clue is when you can say something like:

> “The answer for this position depends on one or two earlier positions.”

---

## Real-world Example

### Building with blocks

Imagine you are building a staircase out of blocks.

To know how many ways to build step 6, you may only need to know the number of ways to build step 5 and step 4.

If you already wrote those answers down, then step 6 becomes easy.

That is DP:
- save the smaller answers
- build the larger answer

---

## Chapter Outline

In this chapter:

- **Fibonacci Number** teaches the most classic DP pattern
- **Climbing Stairs** teaches counting ways
- **Min Cost Climbing Stairs** teaches minimum-cost DP
- **House Robber** teaches “take or skip” decisions with saved answers
- **Unique Paths** teaches grid DP
- **Coin Change** teaches minimum coins using repeated smaller answers

---

# Lesson 1: Fibonacci Number

## Concrete Screen Design

### Learning Goal

Teach that each Fibonacci number is built from the two answers right before it.

### Habitat

`Rabbit Number Run`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Rabbit Number Run
- Lesson title: Fibonacci Number
- Progress chip: 1/6

Scene:
- A number path with DP stones from 0 up to n
- Base-case stones for 0 and 1
- Two helper arrows feeding into the next Fibonacci stone

Support strip:
- "Each new number uses the two before it."
- "Save the old answers so you can build the next one."

Action zone:
- Read the two previous values
- Add them to fill the next slot
- Continue until n is reached

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

Keep the path clean and repetitive so the pattern is obvious. The two helper arrows should always point from `i - 1` and `i - 2` into the next DP stone. Base cases should stay highlighted the whole time.

### Interaction Flow

1. Dot starts with `F(0)` and `F(1)` on the base shelf.
2. The learner adds the two previous values to create the next one.
3. The next DP stone fills in.
4. The process repeats until the target `n` is reached.
5. The support strip names the recurrence in simple language.

### Component Usage

- Scene Card
- DP stone row
- Helper arrows
- Base-case shelf
- Hint card

## Problem

Given `n`, return the `n`th Fibonacci number.

The Fibonacci numbers follow this rule:

- `F(0) = 0`
- `F(1) = 1`
- `F(n) = F(n - 1) + F(n - 2)` for `n >= 2`

### Example

**Input:** `n = 6`  
**Output:** `8`

Because:
- `0, 1, 1, 2, 3, 5, 8`

---

## Intuition

Each Fibonacci number depends on the two before it.

That means:
- if we know `F(4)` and `F(5)`
- then `F(6)` is easy

This is perfect for bottom-up DP.

---

## Walkthrough

To find `F(6)`:

Start with:
- `F(0) = 0`
- `F(1) = 1`

Then build:
- `F(2) = 1`
- `F(3) = 2`
- `F(4) = 3`
- `F(5) = 5`
- `F(6) = 8`

We keep reusing earlier answers.

---

## TypeScript Solution

```ts
function fib(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

---

## Why it works

Each position uses the exact recurrence rule:

```txt
dp[i] = dp[i - 1] + dp[i - 2]
```

The base cases start the process, and every later answer builds from them.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
fib(0) // 0
fib(1) // 1
fib(2) // 1
fib(6) // 8
fib(10) // 55
```

---

## Quick Check

What two earlier values do we need to compute a Fibonacci number?

**Answer:** The two previous Fibonacci numbers.

---

# Lesson 2: Climbing Stairs

## Concrete Screen Design

### Learning Goal

Teach that the number of ways to reach one stair comes from the ways to reach the one-step-below and two-steps-below stairs.

### Habitat

`Step Count Hill`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Step Count Hill
- Lesson title: Climbing Stairs
- Progress chip: 2/6

Scene:
- A staircase with one- and two-step hop arrows
- A DP badge on each stair showing ways to reach it
- Base-case signs at the first steps

Support strip:
- "To reach this stair, you came from one step below or two steps below."
- "Add those saved counts together."

Action zone:
- Read the previous two stair counts
- Fill the next stair badge
- Continue climbing to the top

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The staircase should make the one-step and two-step moves obvious. Each stair badge should display the number of ways to get there. Keep the motion playful so the counting feels like a path-building activity.

### Interaction Flow

1. Dot marks the first small stair answers.
2. The learner looks one and two stairs back.
3. Those counts combine to fill the next stair badge.
4. The process repeats upward.
5. The top stair shows the total number of ways.

### Component Usage

- Scene Card
- Stair badges
- One-step / two-step arrows
- Base-case signs
- Hint card

## Problem

You are climbing a staircase with `n` steps.

Each time, you may climb:
- 1 step
- or 2 steps

Return the number of different ways to reach the top.

### Example 1

**Input:** `n = 2`  
**Output:** `2`

Ways:
- `1 + 1`
- `2`

### Example 2

**Input:** `n = 3`  
**Output:** `3`

Ways:
- `1 + 1 + 1`
- `1 + 2`
- `2 + 1`

---

## Intuition

To reach step `n`, your last move must have come from:

- step `n - 1` by taking 1 step
- or step `n - 2` by taking 2 steps

So:

```txt
ways[n] = ways[n - 1] + ways[n - 2]
```

That is exactly a DP recurrence.

---

## Walkthrough

For `n = 4`

Ways to step 1:
- 1

Ways to step 2:
- 2

Now build:
- step 3 = step 2 + step 1 = `2 + 1 = 3`
- step 4 = step 3 + step 2 = `3 + 2 = 5`

So there are 5 ways.

---

## TypeScript Solution

```ts
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

---

## Why it works

Every path to step `i` must come from:
- `i - 1`
- or `i - 2`

So counting both gives the full answer.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
climbStairs(1) // 1
climbStairs(2) // 2
climbStairs(3) // 3
climbStairs(4) // 5
climbStairs(5) // 8
```

---

## Pattern Reminder

This problem feels like Fibonacci because each answer depends on the two before it.

---

# Lesson 3: Min Cost Climbing Stairs

## Concrete Screen Design

### Learning Goal

Teach that DP can also choose the smaller cost instead of counting ways.

### Habitat

`Coin Step Trail`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Coin Step Trail
- Lesson title: Min Cost Climbing Stairs
- Progress chip: 3/6

Scene:
- A staircase with coin costs on each step
- A DP cost badge for the cheapest way to each step
- Two incoming arrows showing the possible previous steps

Support strip:
- "Ask which previous path is cheaper."
- "Save the smaller total cost."

Action zone:
- Read the two previous total costs
- Choose the smaller one plus the current step cost
- Fill the next cost badge

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The coin costs should be easy to compare at a glance. Keep the DP badge visually different from the raw step cost so children understand "cost on the step" versus "best total cost so far." The smaller path should glow green.

### Interaction Flow

1. Dot shows the cost on each stair.
2. The learner compares the two possible previous total costs.
3. The cheaper path is chosen and the current cost is added.
4. The DP badge for that stair is updated.
5. The lesson ends with the minimum total cost to reach the top.

### Component Usage

- Scene Card
- Raw cost labels
- DP cost badges
- Smaller-path glow
- Hint card

## Problem

You are given an array `cost`, where `cost[i]` is the cost of stepping on step `i`.

You may climb:
- 1 step
- or 2 steps

You may start at step 0 or step 1.

Return the minimum cost to reach the top.

### Example

**Input:** `cost = [10, 15, 20]`  
**Output:** `15`

Because the cheapest way is:
- start at step 1
- pay 15
- jump to the top

---

## Intuition

This is like climbing stairs, but instead of counting ways, we want the cheapest total cost.

To reach step `i`, we must come from:
- `i - 1`
- or `i - 2`

So the cheapest way to step `i` is:

```txt
cost[i] + min(dp[i - 1], dp[i - 2])
```

At the end, the top is just beyond the last step, so the answer is:

```txt
min(dp[n - 1], dp[n - 2])
```

---

## Walkthrough

`cost = [10, 15, 20]`

Base:
- `dp[0] = 10`
- `dp[1] = 15`

Step 2:
- `dp[2] = 20 + min(10, 15) = 30`

Top:
- `min(dp[1], dp[2]) = min(15, 30) = 15`

Answer: 15

---

## TypeScript Solution

```ts
function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = new Array(n).fill(0);

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
}
```

---

## Why it works

At each step, we save the cheapest total cost to get there.

Then each new step chooses the cheaper of the two possible earlier paths.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
minCostClimbingStairs([10, 15, 20]) // 15
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) // 6
```

---

## Quick Check

What changes from “Climbing Stairs” to “Min Cost Climbing Stairs”?

**Answer:** Instead of counting ways, we choose the cheaper earlier path.

---

# Lesson 4: House Robber

## Concrete Screen Design

### Learning Goal

Teach that at each house we choose between taking this house or skipping it and keeping the better saved total.

### Habitat

`Lantern Street`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Lantern Street
- Lesson title: House Robber
- Progress chip: 4/6

Scene:
- A line of houses with money bags
- A take-or-skip decision card at each house
- A best-total badge showing the safest highest amount so far

Support strip:
- "If you take this house, you must skip the neighbor."
- "Save the better of take or skip."

Action zone:
- Compare take vs skip totals
- Choose the larger saved answer
- Move to the next house

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The houses should clearly show their money values, and neighboring houses should feel linked so the no-adjacent rule is visible. The take-or-skip card must make both options readable. Avoid crime-heavy visuals; keep it abstract and child-safe.

### Interaction Flow

1. Dot stands at the current house and shows its money bag.
2. The learner compares the take option to the skip option.
3. The best-total badge saves the larger answer.
4. The process continues house by house.
5. The support strip explains that DP stores the best answer up to each house.

### Component Usage

- Scene Card
- Take / skip card
- Best-total badge
- House value labels
- Hint card

## Problem

A robber wants to steal money from houses in a row.

Each house has some money.

But if the robber steals from two neighboring houses, an alarm goes off.

Return the maximum money the robber can steal.

### Example

**Input:** `nums = [2, 7, 9, 3, 1]`  
**Output:** `12`

One best choice is:
- rob house with 2
- rob house with 9
- rob house with 1

Total = 12

---

## Intuition

At each house, we have two choices:

- skip it
- rob it

If we rob house `i`, we cannot rob house `i - 1`.

So the best answer at index `i` is:

```txt
max(
  dp[i - 1],              // skip this house
  nums[i] + dp[i - 2]     // rob this house
)
```

This is a very classic DP choice problem.

---

## Walkthrough

`nums = [2, 7, 9, 3, 1]`

Base:
- `dp[0] = 2`
- `dp[1] = max(2, 7) = 7`

Index 2:
- skip -> 7
- rob -> 9 + 2 = 11
- `dp[2] = 11`

Index 3:
- skip -> 11
- rob -> 3 + 7 = 10
- `dp[3] = 11`

Index 4:
- skip -> 11
- rob -> 1 + 11 = 12
- `dp[4] = 12`

Answer: 12

---

## TypeScript Solution

```ts
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[nums.length - 1];
}
```

---

## Why it works

Each house asks:
- Is it better to skip me?
- Or rob me and add my money to the best answer from two houses back?

The DP array stores the best answer so far at every position.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
rob([1, 2, 3, 1]) // 4
rob([2, 7, 9, 3, 1]) // 12
rob([2]) // 2
rob([]) // 0
```

---

## Pattern Reminder

This is a “take or skip” DP problem, but unlike backtracking, we only want the best score, not all choices.

---

# Lesson 5: Unique Paths

## Concrete Screen Design

### Learning Goal

Teach that each grid cell can inherit its number of paths from the top and left cells.

### Habitat

`Garden Grid Path`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Garden Grid Path
- Lesson title: Unique Paths
- Progress chip: 5/6

Scene:
- A garden grid with movement allowed right and down
- A DP count in each cell
- Top and left helper arrows feeding into the current cell

Support strip:
- "This cell gets paths from above and from the left."
- "Add the saved path counts together."

Action zone:
- Fill the first row and first column base cases
- Add top and left counts for each new cell
- Continue until the bottom-right goal

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The grid should be simple and bright, with movement arrows only to the right and down. Base cases in the first row and first column should be highlighted. Each cell's DP count should be large enough to read easily.

### Interaction Flow

1. Dot fills the easy base-case cells on the top row and left column.
2. The learner moves through the grid one cell at a time.
3. Each current cell adds the top and left path counts.
4. The bottom-right goal cell fills last.
5. The support strip explains that every cell reuses smaller answers.

### Component Usage

- Scene Card
- Grid cells
- Top / left helper arrows
- Goal cell badge
- Hint card

## Problem

A robot is in the top-left corner of an `m x n` grid.

It wants to reach the bottom-right corner.

It may only move:
- right
- down

Return the number of unique paths.

### Example

**Input:** `m = 3`, `n = 2`  
**Output:** `3`

Paths:
- Right, Down, Down
- Down, Right, Down
- Down, Down, Right

---

## Intuition

To reach a cell, the robot must come from:
- the cell above
- or the cell to the left

So:

```txt
dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
```

That is a classic grid DP rule.

Base idea:
- first row has only 1 path to each cell
- first column has only 1 path to each cell

---

## Walkthrough

For a `3 x 3` grid:

Start with:

```txt
1 1 1
1 ? ?
1 ? ?
```

Now fill:
- middle cell = top + left = `1 + 1 = 2`
- next cell = `1 + 2 = 3`
- next row values continue the same way

Final table:

```txt
1 1 1
1 2 3
1 3 6
```

Answer: 6

---

## TypeScript Solution

```ts
function uniquePaths(m: number, n: number): number {
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  return dp[m - 1][n - 1];
}
```

---

## Why it works

Each cell’s answer depends only on:
- the cell above
- the cell to the left

So once smaller cells are filled, larger cells become easy.

---

## Complexity Analysis

- **Time:** `O(m * n)`
- **Space:** `O(m * n)`

---

## Test Cases

```ts
uniquePaths(3, 2) // 3
uniquePaths(3, 3) // 6
uniquePaths(1, 5) // 1
```

---

## Quick Check

Why does each cell use the top and left cells?

**Answer:** Because the robot can only move down or right, so those are the only two ways to enter the cell.

---

# Lesson 6: Coin Change

## Concrete Screen Design

### Learning Goal

Teach that DP can build the fewest coins needed for each amount from smaller amounts below it.

### Habitat

`Coin Forge Bench`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Coin Forge Bench
- Lesson title: Coin Change
- Progress chip: 6/6

Scene:
- A row of amounts from 0 up to the target
- Coin tools showing allowed denominations
- A DP badge on each amount showing the fewest coins found so far

Support strip:
- "Build the best answer for each smaller amount first."
- "Try each coin and keep the smallest result."

Action zone:
- Pick a target amount cell
- Try each coin tool
- Save the minimum coin count

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The amount row should feel like a workshop bench of target boxes. Coin tools should be clearly labeled by value. The DP badge for impossible or not-yet-solved amounts should stay visually distinct from solved ones.

### Interaction Flow

1. Dot starts from amount `0` as the base case.
2. The learner moves to the next amount and tests each coin option.
3. Each coin checks a smaller already-solved amount.
4. The smallest valid result is saved in the current badge.
5. The process continues until the target amount is solved.

### Component Usage

- Scene Card
- Amount row
- Coin tools
- Minimum-count badge
- Hint card

## Problem

You are given coin values and a target amount.

Return the minimum number of coins needed to make that amount.

If it is not possible, return `-1`.

### Example

**Input:** `coins = [1, 2, 5]`, `amount = 11`  
**Output:** `3`

Because:
- `5 + 5 + 1 = 11`

---

## Intuition

Let `dp[x]` mean:

> the minimum number of coins needed to make amount `x`

To build amount `x`, we can try each coin.

If we use coin `c`, then we need the best answer for:

```txt
x - c
```

So:

```txt
dp[x] = min(dp[x], dp[x - c] + 1)
```

We build from smaller amounts up to the target.

---

## Walkthrough

Coins:
- `[1, 2, 5]`
Amount:
- `5`

Start:
- `dp[0] = 0`
- other amounts start as “impossible” for now

Build:

For amount 1:
- use coin 1 -> `dp[1] = 1`

For amount 2:
- use coin 1 -> `dp[2] = dp[1] + 1 = 2`
- use coin 2 -> `dp[2] = min(2, dp[0] + 1) = 1`

For amount 3:
- best becomes 2

For amount 4:
- best becomes 2

For amount 5:
- use coin 5 -> `1`

So `dp[5] = 1`.

---

## TypeScript Solution

```ts
function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let current = 1; current <= amount; current++) {
    for (const coin of coins) {
      if (current - coin >= 0) {
        dp[current] = Math.min(dp[current], dp[current - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
```

---

## Why it works

Each amount uses smaller solved amounts.

Trying every coin asks:
- if I use this coin last, what is the best smaller amount left?

The DP table keeps the best minimum answer for every amount.

---

## Complexity Analysis

If there are `n` coin types:

- **Time:** `O(amount * n)`
- **Space:** `O(amount)`

---

## Test Cases

```ts
coinChange([1, 2, 5], 11) // 3
coinChange([2], 3) // -1
coinChange([1], 0) // 0
coinChange([1, 3, 4], 6) // 2
```

---

## Challenge Thought

This problem is a great example of:
- minimum answer
- repeated smaller amounts
- bottom-up DP building

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review base cases, repeated subproblems, saved answers, counting DP, minimum DP, and grid DP.

### Habitat

`Builder Review Workshop`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Builder Review Workshop
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review wall with six mini DP build scenes
- Tool chips for base case, save, count, minimum, take-or-skip, grid
- A banner that says "build small, reuse often"

Support strip:
- "Ask what small answers are needed first."
- "Then ask how those saved answers build the bigger one."

Action zone:
- Match each lesson to its DP idea
- Sort clue chips to the right mini-scene
- Explain what was saved and reused

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review workshop should feel like a wall of construction plans. The "build small, reuse often" banner should stay visible because it summarizes the chapter well. Mini-scenes should show just enough structure to trigger recognition.

### Interaction Flow

1. Dot opens the review wall of DP scenes.
2. The learner matches each scene to its main DP idea.
3. Clue chips slide into the correct recap panel.
4. The support strip explains what smaller answers were reused.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Tool chips
- Mini DP scenes
- Mascot speech bubble
- Next-step panel

## What you learned

In this chapter, you learned that dynamic programming helps when:

- a problem has repeated smaller parts
- saving answers prevents repeated work
- bigger answers can be built from smaller ones

You learned how to:

- build from base cases
- fill DP arrays and grids
- find counts, minimums, and maximums
- recognize overlapping subproblems

---

## Pattern Summary

### Fibonacci Number
- each answer uses the two before it

### Climbing Stairs
- ways to step `n` come from `n - 1` and `n - 2`

### Min Cost Climbing Stairs
- choose the cheaper earlier path

### House Robber
- take or skip each house

### Unique Paths
- each cell uses top and left neighbors

### Coin Change
- each amount tries all coin choices

---

## When this pattern is a clue

Think about dynamic programming when you see:

- number of ways
- minimum cost
- maximum score
- repeated smaller problems
- “depends on earlier answers”
- brute force repeats too much work

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can identify the base cases and the build rule for a new DP-style problem with less support.

### Habitat

`Final Build Ridge`

### Primary Mascot

`Dot the Beaver`

### Screen Composition

```txt
Header:
- Back
- Final Build Ridge
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused DP challenge
- A visible base-case area and a partially filled DP row or grid
- A result badge area above the scene

Support strip:
- "What tiny answers do you know already?"
- "What rule builds the next answer?"

Action zone:
- Predict the base cases
- Fill one or more DP states
- Explain the build rule in one sentence

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay clear and instructional, with the base-case area and the partially filled DP structure as the main visual anchors. The result badge should be simple and calm. Avoid crowding the scene with too many numbers at once.

### Interaction Flow

1. Dot presents a final DP-style build challenge.
2. The learner identifies the base cases.
3. The learner uses the rule to fill the next state or two.
4. A short reflection asks what smaller answers were reused.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Base-case shelf
- Partial DP structure
- Reflection prompt
- Result feedback card

Try these before looking at the answers.

## 1. Fill in the blank

Dynamic programming works well when a problem can be broken into smaller ________ problems.

**Answer:** repeated

---

## 2. True or False

Base cases are important in DP.

**Answer:** True

---

## 3. Short Answer

What is the difference between top-down and bottom-up DP?

**Answer:** Top-down starts with the big problem and saves smaller answers during recursion. Bottom-up starts with the smallest base cases and builds upward.

---

## 4. Short Answer

Why is saving smaller answers useful?

**Answer:** Because it prevents us from solving the same smaller problem again and again.

---

## 5. Fill in the blank

In many DP problems, the answer for one position depends on earlier ________ cases.

**Answer:** smaller

---

## 6. Mini Coding Challenge

Write a function that returns the number of ways to climb `n` stairs if you may take only 1 or 2 steps, using a DP array.

```ts
function climbWays(n: number): number {
  if (n <= 2) {
    return n;
  }

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

---

## 7. Mini Coding Challenge

Explain in your own words why Fibonacci is a good first DP example.

**Sample answer:** Fibonacci is a good first DP example because each answer depends on smaller earlier answers, and those smaller answers repeat a lot if we do not save them.

---

# Friendly Wrap-up

Dynamic programming teaches an important coding lesson:

> Sometimes the fastest way to solve a big problem  
> is to save what you learned from the small ones.

That is why DP is so powerful.

The more you practice dynamic programming, the more you will notice:

- when answers repeat
- when base cases matter
- when one row or one array can hold the story of a whole problem
- when building upward is smarter than starting over

That is one of the most powerful patterns in all of algorithms.
