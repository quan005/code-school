---
title: "Greedy"
chapterSlug: "greedy"
order: 16
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 105
skills:
  - "Explain what a greedy choice is"
  - "Recognize when a best-now choice leads to a best overall answer"
  - "Trace greedy algorithms step by step"
  - "Compare greedy thinking to brute force and dynamic programming"
---

# Greedy

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A greedy algorithm makes the best choice it can right now and then keeps moving forward.

---

# Chapter Overview

Imagine you are picking snacks for a trip.

You can only carry a few things, so you keep choosing the best snack you can right now based on the rule you have.

That is the idea behind a **greedy** algorithm.

A greedy algorithm does not try every possibility.
It does not usually look very far into the future.
Instead, it asks:

> “What is the best choice I can make right now?”

Then it makes that choice and keeps going.

Greedy works wonderfully for some problems, but not for all problems.
That is why this chapter is important:
you will learn not just how greedy works, but also what kinds of problems fit it well.

In this chapter, we will learn:

1. **Introduction to Greedy**
   - Intuition
   - What a Greedy Choice Means
   - Why Greedy Sometimes Works
   - When To Use Greedy
   - Real-world Example
2. **Assign Cookies**
3. **Best Time to Buy and Sell Stock II**
4. **Jump Game**
5. **Lemonade Change**
6. **Partition Labels**
7. **Gas Station**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Greedy

## Concrete Screen Design

### Learning Goal

Teach that a greedy algorithm makes the best current choice it can and then keeps moving forward.

### Habitat

`Best-Now Camp`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Best-Now Camp
- Screen title: Introduction to Greedy
- Progress chip: Intro

Scene:
- A trail of choices with one "best now" spotlight
- A current-choice card and a future-flexibility meter
- A path that keeps moving forward instead of exploring every branch

Support strip:
- "Pick the best helpful move right now."
- "Greedy works when the best-now choice keeps the future in good shape."

Action zone:
- Compare current options
- Choose the best-now move
- Watch the trail continue without backtracking

Navigation:
- Replay
- Hint
- Start lesson 1
```

### Visual Details

The trail should feel direct and confident, unlike a branching backtracking maze. The best-now spotlight should make the local choice visible. The future-flexibility meter should help children understand that greedy is about staying in a good position for what comes next.

### Interaction Flow

1. Sunny presents several current options on the trail.
2. The learner chooses the best-now move.
3. The spotlight shifts forward to the next choice point.
4. A small meter shows whether the choice kept future options open.
5. The support strip explains that greedy means make a strong local move and keep going.

### Component Usage

- Scene Card
- Best-now spotlight
- Future-flexibility meter
- Choice cards
- Start-lesson CTA

## Intuition

A greedy algorithm makes one choice at a time.

At each step, it tries to do the best thing **right now**.

Example:
if you want to travel as far as possible in one jump, a greedy idea might be:

- from where I am now, choose the move that reaches the farthest

That is a greedy choice.

It is “greedy” because it grabs the best immediate option it sees.

---

## What does “best now” mean?

That depends on the problem.

Sometimes “best now” means:
- take the largest value
- take the smallest value
- finish the earliest
- reach the farthest
- use the least amount
- make the safest choice that keeps things possible

So greedy is not one single formula.

It is a style of thinking:
- choose the best local move
- hope that local best also leads to global best

---

## Why does greedy sometimes work?

Some problems have a special structure where making the best current choice keeps the future in a good shape.

For example:
- If you want to fit as many short tasks as possible, taking the one that finishes earliest can be smart because it leaves more room for later tasks.
- If you want to know whether you can reach the end of an array, it can be smart to always track the farthest place reachable so far.

In those problems, the greedy choice is enough.

---

## Why doesn’t greedy always work?

Because sometimes the best local choice is not the best total plan.

That is why greedy must be used carefully.

A problem fits greedy when the local choice rule can be trusted.

If it cannot be trusted, we may need:
- dynamic programming
- backtracking
- another method

---

## When To Use Greedy

A problem may be a good fit for greedy if:

- it asks for the maximum number of things you can do
- it asks whether something is possible if you always keep the best current reach
- it involves intervals, jumps, or repeated choices
- you can sort first and then keep taking the best current option
- a simple local rule seems to keep the future flexible

A big clue is when the solution can be described like:

> “At each step, choose the option that helps the most right now.”

---

## Real-world Example

### Making change at a stand

If you run a lemonade stand, when someone gives you money, you may want to give back change using the bills you already have.

A greedy thought is:
- use the biggest helpful bills first

That is a very local choice:
solve the current customer as well as possible right now.

Sometimes that works perfectly.
Sometimes a different problem may need more planning.

---

## Greedy vs DP

Greedy:
- makes the best current move
- usually does not store many past states
- often feels fast and simple

Dynamic Programming:
- compares many smaller answers
- stores them
- often handles more complicated choice patterns

A good problem solver learns to notice the difference.

---

## Chapter Outline

In this chapter:

- **Assign Cookies** teaches matching small needs with small resources
- **Best Time to Buy and Sell Stock II** teaches taking every profitable gain
- **Jump Game** teaches farthest-reach greedy thinking
- **Lemonade Change** teaches greedy change-making under pressure
- **Partition Labels** teaches extending a segment just enough
- **Gas Station** teaches resetting the start when the current path becomes impossible

---

# Lesson 1: Assign Cookies

## Concrete Screen Design

### Learning Goal

Teach that the best greedy move is to match the smallest cookie that still satisfies the smallest waiting child.

### Habitat

`Cookie Picnic Lane`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Cookie Picnic Lane
- Lesson title: Assign Cookies
- Progress chip: 1/6

Scene:
- A sorted child row with greed badges
- A sorted cookie tray with size labels
- A happy-count banner that updates when matches work

Support strip:
- "Start small with small."
- "Do not waste a big cookie on a child who needs only a small one."

Action zone:
- Compare the current child and current cookie
- Match if the cookie is big enough
- Move to the next child or next cookie

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The sorted rows should make matching feel tidy and deliberate. The current child and cookie need clear focus rings. Happy matches should feel warm and rewarding, while too-small cookies should simply slide past without drama.

### Interaction Flow

1. Sunny lines up the children and cookies from smallest to largest.
2. The learner compares the current pair.
3. If the cookie works, one child becomes happy and both pointers move.
4. If it is too small, only the cookie pointer moves.
5. The support strip explains why using the smallest working cookie saves bigger ones for later.

### Component Usage

- Scene Card
- Sorted child row
- Sorted cookie tray
- Happy-count banner
- Hint card

## Problem

You have:
- a list of children with greed factors
- a list of cookies with sizes

A child is happy if they get a cookie with size greater than or equal to their greed factor.

Each child can get at most one cookie.
Each cookie can be used at most once.

Return the maximum number of happy children.

### Example

**Input:** `g = [1, 2, 3]`, `s = [1, 1]`  
**Output:** `1`

Because only one child can be satisfied.

---

## Intuition

A greedy idea is:

- give the smallest cookie that can satisfy the smallest remaining child

Why is that smart?

Because we do not want to waste a big cookie on a child who could be satisfied with a smaller one.

So:
1. sort the children by greed
2. sort the cookies by size
3. walk through both lists
4. if the current cookie can satisfy the current child, use it
5. otherwise try a bigger cookie

---

## Walkthrough

`g = [1, 2, 3]`
`s = [1, 1]`

Sorted:
- children: `[1, 2, 3]`
- cookies: `[1, 1]`

Start:
- child 1, cookie 1 -> good
- happy children = 1

Next:
- child 2, cookie 1 -> too small

No more cookies.

Answer: 1

---

## TypeScript Solution

```ts
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;
  let happy = 0;

  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      happy++;
      child++;
      cookie++;
    } else {
      cookie++;
    }
  }

  return happy;
}
```

---

## Why it works

The greedy choice is to use the smallest cookie that can still work.

That leaves larger cookies for greedier children later.

---

## Complexity Analysis

- **Time:** `O(n log n + m log m)` because of sorting
- **Space:** depends on sorting, otherwise `O(1)` extra

---

## Test Cases

```ts
findContentChildren([1, 2, 3], [1, 1]) // 1
findContentChildren([1, 2], [1, 2, 3]) // 2
findContentChildren([], [1, 2]) // 0
```

---

## Quick Check

Why do we sort both lists first?

**Answer:** So we can match the smallest needs with the smallest useful cookies.

---

# Lesson 2: Best Time to Buy and Sell Stock II

## Concrete Screen Design

### Learning Goal

Teach that every upward price step can be safely collected as profit.

### Habitat

`Market Hill Board`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Market Hill Board
- Lesson title: Best Time to Buy and Sell Stock II
- Progress chip: 2/6

Scene:
- A price line moving up and down across days
- Green gain ribbons on upward slopes
- A total-profit jar collecting each positive rise

Support strip:
- "When the price climbs, take that gain."
- "Ignore drops and collect the rising parts."

Action zone:
- Compare today to tomorrow
- Add positive changes to the profit jar
- Skip negative changes

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The price line should make rises and drops instantly visible. Gain ribbons should appear only on upward segments, helping children see that profit comes from collecting climbs. The total-profit jar should grow steadily.

### Interaction Flow

1. Sunny looks at one day-to-day change at a time.
2. The learner adds the increase when tomorrow is higher.
3. Downward changes are skipped.
4. The profit jar fills with all positive climbs.
5. The support strip explains that this collects the whole upward movement.

### Component Usage

- Scene Card
- Price line
- Gain ribbons
- Profit jar
- Hint card

## Problem

You are given stock prices where `prices[i]` is the price on day `i`.

You may buy and sell many times, but you can only hold one stock at a time.

Return the maximum profit.

### Example

**Input:** `prices = [7, 1, 5, 3, 6, 4]`  
**Output:** `7`

One best way:
- buy at 1, sell at 5 -> profit 4
- buy at 3, sell at 6 -> profit 3
- total = 7

---

## Intuition

A greedy idea is:

> If tomorrow is higher than today, take that gain.

Why?

Because if prices go up from one day to the next, that increase can safely be collected.

So we simply add every positive jump:

- if `prices[i] > prices[i - 1]`
- add `prices[i] - prices[i - 1]`

This ends up collecting all rising parts.

---

## Walkthrough

`prices = [7, 1, 5, 3, 6, 4]`

Day changes:
- 7 -> 1 : no gain
- 1 -> 5 : gain 4
- 5 -> 3 : no gain
- 3 -> 6 : gain 3
- 6 -> 4 : no gain

Total:
- `4 + 3 = 7`

---

## TypeScript Solution

```ts
function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}
```

---

## Why it works

Every rising slope can be broken into day-by-day gains.

Adding all positive increases gives the same best total profit as waiting for the whole rise.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
maxProfit([7, 1, 5, 3, 6, 4]) // 7
maxProfit([1, 2, 3, 4, 5]) // 4
maxProfit([7, 6, 4, 3, 1]) // 0
```

---

## Pattern Reminder

This greedy rule works because every positive increase is always worth taking.

---

# Lesson 3: Jump Game

## Concrete Screen Design

### Learning Goal

Teach that the key greedy idea is tracking the farthest place reachable so far.

### Habitat

`Leap Meadow`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Leap Meadow
- Lesson title: Jump Game
- Progress chip: 3/6

Scene:
- A row of jump stones with reach numbers
- A farthest-reach banner extending ahead of the learner
- A finish flag at the end

Support strip:
- "Keep the farthest reach you can get so far."
- "If you ever fall behind that reach, you are stuck."

Action zone:
- Read the jump value at the current stone
- Update the farthest reachable position
- Check whether the finish flag is still possible

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The farthest-reach banner should be the star of the screen because it represents the greedy state. Each jump stone should show how far it can help extend the banner. Stuck positions should be clear but not harsh.

### Interaction Flow

1. Sunny stands on the first jump stone.
2. The learner updates the farthest reachable position using the current jump value.
3. The farthest-reach banner stretches forward when possible.
4. If the current position goes beyond the banner, the path is stuck.
5. The lesson ends when the finish flag becomes reachable or impossible.

### Component Usage

- Scene Card
- Farthest-reach banner
- Jump stones
- Finish flag
- Hint card

## Problem

You are given an array `nums`, where each value tells the maximum jump length from that position.

Return `true` if you can reach the last index. Otherwise, return `false`.

### Example 1

**Input:** `nums = [2, 3, 1, 1, 4]`  
**Output:** `true`

### Example 2

**Input:** `nums = [3, 2, 1, 0, 4]`  
**Output:** `false`

---

## Intuition

A greedy way to think about this problem is:

- keep track of the farthest index you can reach so far
- as you move through the array, update that farthest reach
- if you ever get to an index beyond your farthest reach, you are stuck

This is greedy because at every point we only care about the best reach we can currently guarantee.

---

## Walkthrough

`nums = [2, 3, 1, 1, 4]`

Start:
- farthest = 0

Index 0:
- can jump to 0 + 2 = 2
- farthest = 2

Index 1:
- index 1 is reachable
- can jump to 1 + 3 = 4
- farthest = 4

Now we can already reach the last index.

Answer: true

For `[3, 2, 1, 0, 4]`:
- we eventually get stuck at index 4 because index 3 gives no forward jump

Answer: false

---

## TypeScript Solution

```ts
function canJump(nums: number[]): boolean {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    }

    farthest = Math.max(farthest, i + nums[i]);
  }

  return true;
}
```

---

## Why it works

The greedy rule keeps the best reach seen so far.

If an index is reachable, it may improve the farthest reach.
If an index is not reachable, the game is already lost.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
canJump([2, 3, 1, 1, 4]) // true
canJump([3, 2, 1, 0, 4]) // false
canJump([0]) // true
```

---

## Quick Check

What is the key value we keep updating in Jump Game?

**Answer:** The farthest index reachable so far.

---

# Lesson 4: Lemonade Change

## Concrete Screen Design

### Learning Goal

Teach that giving the best change now means using the helpful bills that protect future change-making.

### Habitat

`Lemon Stand Square`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Lemon Stand Square
- Lesson title: Lemonade Change
- Progress chip: 4/6

Scene:
- A lemonade stand register with $5 and $10 bill slots
- A line of customers holding bills
- A change-ready meter showing whether the stand can keep serving

Support strip:
- "Give change in the way that helps the stand stay ready."
- "Saving smaller bills can matter for later customers."

Action zone:
- Read the customer's bill
- Choose bills for change
- Update the register slots

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The register slots should make bill counts easy to scan. Keep the customer line visible so the learner thinks ahead a little about future service. The change-ready meter should help show why one local change choice is smarter than another.

### Interaction Flow

1. Sunny takes a customer's bill at the stand.
2. The learner chooses which change bills to give back.
3. The register updates after the transaction.
4. The change-ready meter shows whether the stand remains prepared for the next customer.
5. The support strip explains why some bills are better to keep for later.

### Component Usage

- Scene Card
- Register slots
- Customer line
- Change-ready meter
- Hint card

## Problem

At a lemonade stand, each lemonade costs $5.

Customers pay with:
- `$5`
- `$10`
- or `$20`

You must give correct change using the bills you already have.

Return `true` if you can serve every customer in order. Otherwise, return `false`.

### Example

**Input:** `bills = [5, 5, 5, 10, 20]`  
**Output:** `true`

---

## Intuition

We only need to track:
- how many $5 bills we have
- how many $10 bills we have

Greedy idea for a $20 bill:
- if possible, give one $10 and one $5
- otherwise give three $5 bills

Why prefer `$10 + $5` first?

Because $5 bills are more flexible for future change.

---

## Walkthrough

`bills = [5, 5, 5, 10, 20]`

Customer 1 pays 5:
- fives = 1

Customer 2 pays 5:
- fives = 2

Customer 3 pays 5:
- fives = 3

Customer 4 pays 10:
- give one 5
- fives = 2, tens = 1

Customer 5 pays 20:
- prefer 10 + 5
- fives = 1, tens = 0

Worked for everyone.

Answer: true

---

## TypeScript Solution

```ts
function lemonadeChange(bills: number[]): boolean {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      if (fives === 0) {
        return false;
      }
      fives--;
      tens++;
    } else {
      if (tens > 0 && fives > 0) {
        tens--;
        fives--;
      } else if (fives >= 3) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
}
```

---

## Why it works

The greedy rule for `$20` keeps more `$5` bills available for later customers.

That makes the future easier to handle.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
lemonadeChange([5, 5, 5, 10, 20]) // true
lemonadeChange([5, 5, 10, 10, 20]) // false
lemonadeChange([5, 10, 5, 20]) // false
```

---

## Pattern Reminder

Greedy often works well when one local choice clearly protects future flexibility.

---

# Lesson 5: Partition Labels

## Concrete Screen Design

### Learning Goal

Teach that a partition should stretch only until every letter inside it has fully finished appearing.

### Habitat

`Ribbon Word Fence`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Ribbon Word Fence
- Lesson title: Partition Labels
- Progress chip: 5/6

Scene:
- A string shown as colored letter flags
- A current partition fence stretching across the flags
- A last-seen marker for each letter's farthest position

Support strip:
- "Keep extending until every letter in the partition is done."
- "Then cut the partition and start a new one."

Action zone:
- Read the current letter
- Extend the partition end if needed
- Close the partition when the current index reaches the end

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The partition fence should visually stretch and stop, making the greedy rule easy to see. Last-seen markers should sit above the string so children can understand why the fence sometimes has to grow farther. Completed partitions should feel clean and satisfying.

### Interaction Flow

1. Sunny reads the next letter flag in the string.
2. The learner checks that letter's farthest last-seen marker.
3. If needed, the partition fence extends farther right.
4. When the current index reaches the fence end, the partition closes.
5. The process repeats for the next section of the string.

### Component Usage

- Scene Card
- Partition fence
- Last-seen markers
- Completed-partition chips
- Hint card

## Problem

Given a string `s`, split it into as many parts as possible so that each letter appears in at most one part.

Return the sizes of the parts.

### Example

**Input:** `s = "ababcbacadefegdehijhklij"`  
**Output:** `[9, 7, 8]`

---

## Intuition

A greedy idea is:

- first record the last position of every letter
- then scan the string while tracking how far the current part must extend
- when you reach that farthest needed position, cut the part there

Why?

Because if a letter appears again later, the current part must stay open until that last appearance.

---

## Walkthrough

For `"ababcbacadefegdehijhklij"`:

Suppose the first letters force the first partition to stay open until index 8.

When we reach index 8, all letters seen so far finish inside that range.

So we can safely cut there.

That gives the first size:
- 9

Then repeat for the rest.

---

## TypeScript Solution

```ts
function partitionLabels(s: string): number[] {
  const last = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    last.set(s[i], i);
  }

  const result: number[] = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last.get(s[i])!);

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
}
```

---

## Why it works

The current partition must stay open until every letter inside it has had its last appearance.

Once we reach that farthest last position, the partition is complete.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)` or `O(k)` for character tracking

---

## Test Cases

```ts
partitionLabels("ababcbacadefegdehijhklij") // [9, 7, 8]
partitionLabels("eccbbbbdec") // [10]
partitionLabels("abc") // [1, 1, 1]
```

---

## Quick Check

What important information do we store first in this problem?

**Answer:** The last position of each letter.

---

# Lesson 6: Gas Station

## Concrete Screen Design

### Learning Goal

Teach that when the current trip becomes impossible, we can reset the start to the next station.

### Habitat

`Fuel Ring Road`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Fuel Ring Road
- Lesson title: Gas Station
- Progress chip: 6/6

Scene:
- A ring road of gas stations with gain and cost badges
- A fuel tank meter showing current gas
- A reset flag that jumps to the next station when the path fails

Support strip:
- "If the tank drops below zero, this start cannot work."
- "Reset the start to the next station."

Action zone:
- Add gas from the current station
- Subtract cost to the next station
- Reset the start when the tank goes negative

Navigation:
- Replay
- Hint
- Check answer
```

### Visual Details

The ring-road layout should make the circular trip feel intuitive. The fuel tank meter must stay visible because it explains the greedy reset rule. The reset flag should jump clearly so children can see when the starting point changes.

### Interaction Flow

1. Sunny begins from one starting station with an empty tank.
2. The learner adds gas and subtracts travel cost as the trip moves forward.
3. If the tank drops below zero, the reset flag jumps to the next station.
4. The failed segment is left behind because it cannot be a valid start.
5. The support strip explains why resetting is safe in this problem.

### Component Usage

- Scene Card
- Fuel tank meter
- Reset flag
- Gas / cost badges
- Hint card

## Problem

There are gas stations in a circle.

You are given:
- `gas[i]` = gas at station `i`
- `cost[i]` = gas needed to go from station `i` to the next station

Return the starting station index if you can complete the whole circle.
If not possible, return `-1`.

### Example

**Input:**  
`gas = [1, 2, 3, 4, 5]`  
`cost = [3, 4, 5, 1, 2]`

**Output:** `3`

---

## Intuition

There are two important ideas.

### 1. Total check
If total gas is less than total cost, the answer is impossible.

### 2. Greedy reset
As we move through stations, keep a running tank.

If the tank becomes negative at station `i`, then:
- the current starting point cannot work
- and no station between the current start and `i` can work either

So we reset the start to `i + 1`.

That is the greedy step.

---

## Walkthrough

`gas = [1, 2, 3, 4, 5]`
`cost = [3, 4, 5, 1, 2]`

Differences:
- `-2, -2, -2, +3, +3`

Start at 0:
- tank becomes negative immediately
- reset start to 1

Start at 1:
- tank becomes negative
- reset start to 2

Start at 2:
- tank becomes negative
- reset start to 3

Start at 3:
- now the rest works

Answer: 3

---

## TypeScript Solution

```ts
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let total = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    tank += diff;

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return total < 0 ? -1 : start;
}
```

---

## Why it works

If the tank becomes negative, the current start cannot reach the next station.
And any start in the failed section would do even worse.
So the next station becomes the new greedy start.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(1)`

---

## Test Cases

```ts
canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) // 3
canCompleteCircuit([2, 3, 4], [3, 4, 3]) // -1
canCompleteCircuit([5], [4]) // 0
```

---

## Challenge Thought

This is a strong greedy problem because the reset rule safely removes many bad starting positions at once.

---

# Chapter Review

## Concrete Screen Design

### Learning Goal

Review best-now choices, matching, taking gains, farthest reach, change-making, partition cutting, and start resetting.

### Habitat

`Greedy Review Porch`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Greedy Review Porch
- Screen title: Chapter Review
- Progress chip: Review

Scene:
- A review wall with six mini greedy scenes
- Tool chips for best-now, match, gain, reach, keep-ready, reset
- A banner that says "take the local move that keeps the future possible"

Support strip:
- "Ask what current choice helps the most right now."
- "Then ask whether it keeps later choices in good shape."

Action zone:
- Match each lesson to its greedy idea
- Sort clue chips to the right mini-scene
- Explain why the local choice works here

Navigation:
- Replay
- Hint
- Open mastery
```

### Visual Details

The review porch should feel like a planning wall of smart local moves. The banner should stay visible because it summarizes the chapter well. Mini-scenes should be simple enough that the greedy action stands out immediately.

### Interaction Flow

1. Sunny opens the review wall of greedy scenes.
2. The learner matches each scene to the right greedy idea.
3. Clue chips slide into the correct recap panel.
4. The support strip explains why the local choice works in that problem.
5. The next-step panel opens mastery.

### Component Usage

- Review board
- Tool chips
- Mini greedy scenes
- Mascot speech bubble
- Next-step panel

## What you learned

In this chapter, you learned that greedy algorithms make the best local choice they can right now.

You learned how to:

- match smallest useful resources first
- collect every safe local profit
- track the farthest reach
- protect future flexibility
- close segments at the right moment
- reset the starting point when failure proves earlier starts impossible

---

## Pattern Summary

### Assign Cookies
- sort both sides
- use the smallest cookie that works

### Best Time to Buy and Sell Stock II
- add every positive price increase

### Jump Game
- track the farthest reachable index

### Lemonade Change
- use change in the most flexible way

### Partition Labels
- extend the current segment to the farthest last needed position

### Gas Station
- reset start when the current path becomes impossible

---

## When this pattern is a clue

Think about greedy when you see:

- maximum number of things
- best immediate gain
- farthest reach
- earliest finish
- smallest useful resource
- a local choice that clearly protects the future

---

## Greedy Warning

Greedy is powerful, but not every problem fits it.

Always ask:
- Does the best current choice still leave the future in a good state?
- Can a local best choice be trusted here?

If not, another pattern may be better.

---

# Mastery Check

## Concrete Screen Design

### Learning Goal

Check whether the learner can spot the best-now move and explain why it is safe with less support.

### Habitat

`Smart Choice Ridge`

### Primary Mascot

`Sunny the Raccoon`

### Screen Composition

```txt
Header:
- Back
- Smart Choice Ridge
- Screen title: Mastery Check
- Progress chip: Mastery

Scene:
- One focused greedy challenge
- A highlighted current choice point
- A result badge area above the scene

Support strip:
- "What is the best move right now?"
- "Why does that move keep the future workable?"

Action zone:
- Predict the next greedy move
- Solve one short challenge
- Explain why the local choice is trusted here

Navigation:
- Replay
- Hint
- Finish challenge
```

### Visual Details

This screen should stay focused on the current decision point. The highlighted local choice needs to be obvious, and the result area should remain calm and readable. Avoid clutter so the reasoning stays front and center.

### Interaction Flow

1. Sunny presents one final greedy challenge with limited guidance.
2. The learner studies the current options.
3. The learner chooses the best-now move.
4. A short reflection asks why that move was safe for the future.
5. The mastery result appears.

### Component Usage

- Challenge scene card
- Highlighted choice point
- Prediction prompt
- Reflection prompt
- Result feedback card

Try these before looking at the answers.

## 1. Fill in the blank

A greedy algorithm makes the best ________ choice it can right now.

**Answer:** local

---

## 2. True or False

Greedy works for every optimization problem.

**Answer:** False

---

## 3. Short Answer

What is the main idea of greedy thinking?

**Answer:** Make the best choice available right now and keep moving forward.

---

## 4. Short Answer

Why is sorting often helpful in greedy problems?

**Answer:** Because sorting can make it easier to choose the best current option in a clean order.

---

## 5. Fill in the blank

In Jump Game, we keep track of the farthest ________ we can reach.

**Answer:** index

---

## 6. Mini Coding Challenge

Write a function that adds up all positive increases in an array.

```ts
function sumPositiveIncreases(nums: number[]): number {
  let total = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      total += nums[i] - nums[i - 1];
    }
  }

  return total;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words when greedy is a good fit.

**Sample answer:** Greedy is a good fit when making the best current choice also keeps the future solution on track, so we do not need to try many complicated plans.

---

# Friendly Wrap-up

Greedy algorithms teach an important coding lesson:

> Sometimes the smartest move  
> is the best move you can make right now.

That simple idea can solve many problems beautifully.

The more you practice greedy algorithms, the more you will notice:

- when a local choice can be trusted
- when sorting makes the rule clearer
- when a problem does not need full search
- when simple forward progress is enough

That is a powerful pattern to add to your algorithm toolbox.
