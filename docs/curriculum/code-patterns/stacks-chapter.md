---
title: "Stacks"
chapterSlug: "stacks"
order: 7
audience: "Advanced elementary students (Grades 1–5) with basic coding knowledge"
estimatedMinutes: 95
skills:
  - "Explain how last-in, first-out ordering works"
  - "Use push, pop, and peek with a stack"
  - "Recognize when a stack helps solve a problem"
  - "Trace stack-based code step by step"
---

# Stacks

> Audience: Advanced 1st–5th grade students with basic coding knowledge  
> Language used in code examples: TypeScript  
> Big idea: A stack follows **last in, first out**. The last thing you put on top is the first thing you take off.

---

# Chapter Overview

Imagine a stack of plates.

When you add a new plate, you put it on the **top**.

When you remove a plate, you also take it from the **top**.

You do not pull one out from the middle.

That is how a **stack** works in programming.

A stack is a data structure that follows this rule:

> **Last In, First Out**  
> The last item added is the first item removed.

Stacks are useful when problems involve:

- undoing actions
- matching opening and closing symbols
- keeping track of unfinished work
- remembering things until the right moment
- looking backward at recent items

In this chapter, we will learn:

1. **Introduction to Stacks**
   - Intuition
   - Push, Pop, and Peek
   - When To Use a Stack
   - Real-world Example
2. **Implement a Stack with an Array**
3. **Valid Parentheses**
4. **Remove All Adjacent Duplicates**
5. **Baseball Game**
6. **Next Greater Element**
7. **Evaluate Reverse Polish Notation**
8. **Chapter Review**
9. **Mastery Check**

---

# Introduction to Stacks

## Intuition

A stack is like a pile of books.

If you place books one on top of another:

- the newest book is on top
- the oldest book is near the bottom

If you want to remove one, the easiest one to take is the top book.

That means the stack has an important order:

- add to the top
- remove from the top

This is called **LIFO**:

- **Last In**
- **First Out**

---

## The three main stack actions

Stacks usually have these important actions:

### 1. Push

Add an item to the top.

```ts
stack.push(5);
```

If the stack was:

```txt
[2, 7]
```

after pushing `5`, it becomes:

```txt
[2, 7, 5]
```

---

### 2. Pop

Remove the top item.

```ts
stack.pop();
```

If the stack was:

```txt
[2, 7, 5]
```

after popping, it becomes:

```txt
[2, 7]
```

The removed item was `5`.

---

### 3. Peek

Look at the top item without removing it.

```ts
stack[stack.length - 1]
```

If the stack is:

```txt
[2, 7, 5]
```

then the top is `5`.

---

## Why stacks are useful

A stack is helpful when the **most recent unfinished thing** matters most.

Examples:

- a text editor’s undo button
- checking whether symbols like `(` and `)` match correctly
- remembering previous steps
- solving problems where items wait until a future moment

---

## When To Use a Stack

A problem may be a good fit for a stack if it involves:

- nested things, like brackets inside brackets
- reversing order
- undoing the latest action
- looking at the most recent item first
- matching opening and closing symbols
- “remove while top matches something”

A big clue is when the problem wants you to compare something new with the **most recent unfinished item**.

That often means “use a stack.”

---

## Real-world Example

### Cafeteria tray stack

In a cafeteria, trays are often stacked on top of each other.

If a new tray is added, it goes on top.

If a tray is taken, it also comes from the top.

That is a stack.

Or imagine a web browser’s back history:

- the most recently visited page is the first one you go back to

That also feels stack-like.

---

## Stacks in TypeScript

A simple way to use a stack in TypeScript is with an array:

```ts
const stack: number[] = [];

stack.push(10);
stack.push(20);

console.log(stack.pop()); // 20
console.log(stack[stack.length - 1]); // 10
```

The end of the array acts like the top of the stack.

---

## Chapter Outline

In this chapter:

- **Implement a Stack with an Array** teaches the basic stack operations
- **Valid Parentheses** teaches matching open and close symbols
- **Remove All Adjacent Duplicates** teaches how stacks can erase patterns
- **Baseball Game** teaches how a stack can remember previous scores
- **Next Greater Element** teaches how stacks help compare current values to earlier ones
- **Evaluate Reverse Polish Notation** teaches how stacks help process math expressions

---

# Lesson 1: Implement a Stack with an Array

## Problem

Create a stack that supports these actions:

- `push(x)` adds `x` to the top
- `pop()` removes and returns the top item
- `peek()` returns the top item without removing it
- `isEmpty()` returns whether the stack is empty

---

## Intuition

The easiest way to build a stack in TypeScript is to use an array.

We let the **end of the array** be the top of the stack.

That means:

- `push` adds to the end
- `pop` removes from the end
- `peek` looks at the last item

---

## Example

Start with an empty stack:

```txt
[]
```

Push `3`:

```txt
[3]
```

Push `8`:

```txt
[3, 8]
```

Peek:
- top is `8`

Pop:
- remove `8`

Now the stack is:

```txt
[3]
```

---

## TypeScript Solution

```ts
class MyStack {
  private items: number[] = [];

  push(x: number): void {
    this.items.push(x);
  }

  pop(): number | undefined {
    return this.items.pop();
  }

  peek(): number | undefined {
    if (this.items.length === 0) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
```

---

## Why it works

The top of the stack is always the end of the array.

That makes all the main stack actions simple and fast.

---

## Complexity Analysis

- **Push:** `O(1)` on average
- **Pop:** `O(1)`
- **Peek:** `O(1)`
- **isEmpty:** `O(1)`

---

## Test Cases

```ts
const stack = new MyStack();

stack.isEmpty(); // true
stack.push(3);
stack.push(8);
stack.peek(); // 8
stack.pop(); // 8
stack.peek(); // 3
stack.isEmpty(); // false
```

---

## Quick Check

What part of the array acts like the top of the stack?

**Answer:** The end of the array.

---

# Lesson 2: Valid Parentheses

## Problem

Given a string containing only these symbols:

- `(`
- `)`
- `[`
- `]`
- `{`
- `}`

return `true` if every opening symbol is closed in the correct order. Otherwise, return `false`.

### Example 1

**Input:** `s = "([])"`  
**Output:** `true`

### Example 2

**Input:** `s = "([)]"`  
**Output:** `false`

---

## Intuition

Opening symbols are like doors that need matching closing doors later.

When we see an opening symbol, we are waiting for its match.

A stack is perfect for this because the **most recent opening symbol** must be the first one closed.

That is exactly stack order.

Plan:

1. when we see an opening symbol, push it
2. when we see a closing symbol, check the top opening symbol
3. if they match, pop it
4. if they do not match, return `false`
5. at the end, the stack must be empty

---

## Walkthrough

`s = "([])"`

Start:
- stack = `[]`

See `(`
- push it
- stack = `[(]`

See `[`
- push it
- stack = `[(, []`

See `]`
- top is `[`
- matches, so pop
- stack = `[(]`

See `)`
- top is `(`
- matches, so pop
- stack = `[]`

End:
- stack is empty
- return `true`

---

## TypeScript Solution

```ts
function isValidParentheses(s: string): boolean {
  const stack: string[] = [];
  const pairs = new Map<string, string>([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop()!;
      if (top !== pairs.get(ch)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

---

## Why it works

The stack keeps track of unfinished opening symbols.

Because the most recent opening symbol must close first, a stack matches the problem perfectly.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)` in the worst case

---

## Test Cases

```ts
isValidParentheses("()") // true
isValidParentheses("([])") // true
isValidParentheses("([)]") // false
isValidParentheses("(") // false
isValidParentheses("()[]{}") // true
```

---

## Common Mistake

Do not just count how many opening and closing symbols there are.

The **order** matters too.

That is why `"([)]"` is not valid.

---

# Lesson 3: Remove All Adjacent Duplicates

## Problem

Given a string `s`, remove all pairs of adjacent matching letters again and again until no more such pairs exist.

Return the final string.

### Example 1

**Input:** `s = "abbaca"`  
**Output:** `"ca"`

### Example 2

**Input:** `s = "azxxzy"`  
**Output:** `"ay"`

---

## Intuition

If the current letter matches the top of the stack, then the two letters are adjacent duplicates.

So we pop the top instead of keeping both.

If the current letter does not match the top, we push it.

This lets the stack build the string that survives.

---

## Walkthrough

`s = "abbaca"`

Start:
- stack = `[]`

See `a`
- push
- stack = `[a]`

See `b`
- top is `a`, not a match
- push
- stack = `[a, b]`

See next `b`
- top is `b`, match!
- pop
- stack = `[a]`

See `a`
- top is `a`, match!
- pop
- stack = `[]`

See `c`
- push
- stack = `[c]`

See `a`
- top is `c`, no match
- push
- stack = `[c, a]`

Final answer:
- `"ca"`

---

## TypeScript Solution

```ts
function removeAdjacentDuplicates(s: string): string {
  const stack: string[] = [];

  for (const ch of s) {
    if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
}
```

---

## Why it works

The stack keeps the current cleaned-up string.

Each new character compares with the most recent surviving character, which is exactly the stack top.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
removeAdjacentDuplicates("abbaca") // "ca"
removeAdjacentDuplicates("azxxzy") // "ay"
removeAdjacentDuplicates("a") // "a"
removeAdjacentDuplicates("aaaa") // ""
```

---

## Pattern Reminder

This is a good stack problem because we care about the **most recent remaining character**.

---

# Lesson 4: Baseball Game

## Problem

You are given a list of operations representing scores in a game.

Each operation is one of these:

- an integer: add that score
- `"+"`: add a score equal to the last two scores added
- `"D"`: add a score equal to double the last score
- `"C"`: remove the last score

Return the total score.

### Example

**Input:** `ops = ["5", "2", "C", "D", "+"]`  
**Output:** `30`

---

## Intuition

This problem keeps asking about the **most recent scores**.

That is a strong clue for a stack.

We store scores in a stack.

Then:

- a number gets pushed
- `"C"` pops
- `"D"` looks at the top and doubles it
- `"+"` looks at the last two scores and adds them

---

## Walkthrough

`ops = ["5", "2", "C", "D", "+"]`

Start:
- stack = `[]`

See `"5"`
- push 5
- stack = `[5]`

See `"2"`
- push 2
- stack = `[5, 2]`

See `"C"`
- pop 2
- stack = `[5]`

See `"D"`
- double top: 10
- push 10
- stack = `[5, 10]`

See `"+"`
- last two scores are 5 and 10
- push 15
- stack = `[5, 10, 15]`

Total:
- `5 + 10 + 15 = 30`

---

## TypeScript Solution

```ts
function calPoints(ops: string[]): number {
  const stack: number[] = [];

  for (const op of ops) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === "+") {
      const last = stack[stack.length - 1];
      const secondLast = stack[stack.length - 2];
      stack.push(last + secondLast);
    } else {
      stack.push(Number(op));
    }
  }

  let total = 0;
  for (const score of stack) {
    total += score;
  }

  return total;
}
```

---

## Why it works

The stack stores the score history in order.

Because the newest score is on top, the stack makes it easy to use the last one or two scores.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
calPoints(["5", "2", "C", "D", "+"]) // 30
calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]) // 27
calPoints(["1"]) // 1
```

---

## Quick Check

Why is a stack helpful here?

**Answer:** Because the rules keep asking about the most recent scores.

---

# Lesson 5: Next Greater Element

## Problem

Given an array of numbers, return an array where each position tells the next greater number to the right.

If there is no greater number to the right, use `-1`.

### Example

**Input:** `nums = [2, 1, 2, 4, 3]`  
**Output:** `[4, 2, 4, -1, -1]`

Explanation:
- next greater after `2` is `4`
- next greater after `1` is `2`
- next greater after the second `2` is `4`
- `4` has no greater value to its right
- `3` has no greater value to its right

---

## Intuition

This problem is harder than the earlier ones.

We want to look to the right and find the next bigger value.

A smart way is to use a stack to keep indexes whose answers are not found yet.

As we move through the array:

- if the current number is bigger than the number at the top index in the stack,
  then we found that older index’s answer
- we keep popping while the current number solves older unfinished positions
- then we push the current index

This is called a **monotonic stack** idea, but you do not need to memorize that name yet.

---

## Walkthrough

`nums = [2, 1, 2, 4, 3]`

Start:
- answer = `[-1, -1, -1, -1, -1]`
- stack = `[]`

Index 0, value 2
- push index 0
- stack = `[0]`

Index 1, value 1
- `1` is not greater than `2`
- push index 1
- stack = `[0, 1]`

Index 2, value 2
- `2` is greater than value at index 1, which is `1`
- answer[1] = 2
- pop 1
- now compare with index 0, value `2`
- not greater, stop
- push index 2
- stack = `[0, 2]`

Index 3, value 4
- `4` is greater than value at index 2, which is `2`
- answer[2] = 4
- pop 2
- `4` is also greater than value at index 0, which is `2`
- answer[0] = 4
- pop 0
- push index 3
- stack = `[3]`

Index 4, value 3
- `3` is not greater than `4`
- push index 4
- stack = `[3, 4]`

Done.
Indices 3 and 4 have no greater value to the right, so they stay `-1`.

---

## TypeScript Solution

```ts
function nextGreaterElement(nums: number[]): number[] {
  const answer = new Array(nums.length).fill(-1);
  const stack: number[] = []; // stores indexes

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop()!;
      answer[index] = nums[i];
    }

    stack.push(i);
  }

  return answer;
}
```

---

## Why it works

The stack holds positions that are still waiting for a bigger value.

When a bigger value appears, it solves the waiting positions on top.

That lets us avoid checking every pair.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
nextGreaterElement([2, 1, 2, 4, 3]) // [4, 2, 4, -1, -1]
nextGreaterElement([1, 2, 3]) // [2, 3, -1]
nextGreaterElement([3, 2, 1]) // [-1, -1, -1]
```

---

## Challenge Thought

This lesson is more advanced because the stack stores **unfinished positions** instead of direct values only.

---

# Lesson 6: Evaluate Reverse Polish Notation

## Problem

You are given an expression written in **Reverse Polish Notation**.

That means the operator comes **after** the numbers.

Return the value of the expression.

### Example 1

**Input:** `tokens = ["2", "1", "+", "3", "*"]`  
**Output:** `9`

Because:
- `2 + 1 = 3`
- `3 * 3 = 9`

### Example 2

**Input:** `tokens = ["4", "13", "5", "/", "+"]`  
**Output:** `6`

Because:
- `13 / 5 = 2` using integer division
- `4 + 2 = 6`

---

## Intuition

When we see a number, we are not ready to use it yet, so we push it onto the stack.

When we see an operator:

- pop the top two numbers
- do the math
- push the result back

The stack stores unfinished numbers and partial answers.

---

## Walkthrough

`tokens = ["2", "1", "+", "3", "*"]`

Start:
- stack = `[]`

See `"2"`
- push 2
- stack = `[2]`

See `"1"`
- push 1
- stack = `[2, 1]`

See `"+"`
- pop 1 and 2
- `2 + 1 = 3`
- push 3
- stack = `[3]`

See `"3"`
- push 3
- stack = `[3, 3]`

See `"*"`
- pop 3 and 3
- `3 * 3 = 9`
- push 9
- stack = `[9]`

Answer is the top:
- `9`

---

## TypeScript Solution

```ts
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const b = stack.pop()!;
      const a = stack.pop()!;
      let result = 0;

      if (token === "+") {
        result = a + b;
      } else if (token === "-") {
        result = a - b;
      } else if (token === "*") {
        result = a * b;
      } else {
        result = Math.trunc(a / b);
      }

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
```

---

## Why it works

Numbers wait on the stack until an operator is ready to use them.

Each operator turns two stack values into one new value.

At the end, the stack holds the final answer.

---

## Complexity Analysis

- **Time:** `O(n)`
- **Space:** `O(n)`

---

## Test Cases

```ts
evalRPN(["2", "1", "+", "3", "*"]) // 9
evalRPN(["4", "13", "5", "/", "+"]) // 6
evalRPN(["3", "4", "+"]) // 7
```

---

## Pattern Reminder

This is a strong stack problem because the most recent unfinished numbers are the first ones used by the next operator.

---

# Chapter Review

## What you learned

In this chapter, you learned that a stack follows the rule:

> Last In, First Out

You learned how to:

- push, pop, and peek
- recognize when the most recent unfinished item matters
- match symbols correctly
- remove patterns by comparing with the top
- store unfinished positions
- evaluate expressions step by step

---

## Pattern Summary

### Implement a Stack
- use an array
- the array’s end is the stack top

### Valid Parentheses
- push opening symbols
- pop when a matching closing symbol appears

### Remove Adjacent Duplicates
- compare the current character to the top

### Baseball Game
- keep score history in a stack

### Next Greater Element
- store unfinished indexes until a bigger value appears

### Reverse Polish Notation
- push numbers
- pop two values when an operator appears

---

## When this pattern is a clue

Think about stacks when you see:

- most recent thing first
- undoing actions
- matching symbols
- nested structure
- unfinished work
- repeated popping while the top matches a rule

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A stack follows the rule ________ in, ________ out.

**Answer:** last, first

---

## 2. True or False

In a stack, you usually remove items from the middle.

**Answer:** False

You remove from the top.

---

## 3. Short Answer

What are the three main stack actions?

**Answer:** Push, pop, and peek.

---

## 4. Short Answer

Why is a stack helpful for matching parentheses?

**Answer:** Because the most recent opening symbol must be closed first.

---

## 5. Fill in the blank

In a TypeScript array-based stack, the ________ of the array acts like the top.

**Answer:** end

---

## 6. Mini Coding Challenge

Write a function that reverses an array using a stack.

```ts
function reverseWithStack(nums: number[]): number[] {
  const stack: number[] = [];

  for (const num of nums) {
    stack.push(num);
  }

  const result: number[] = [];

  while (stack.length > 0) {
    result.push(stack.pop()!);
  }

  return result;
}
```

---

## 7. Mini Coding Challenge

Explain in your own words when a stack is a good idea.

**Sample answer:** A stack is a good idea when the newest unfinished thing matters most, like matching brackets, undoing actions, or checking the most recent item first.

---

# Friendly Wrap-up

Stacks teach a very important coding lesson:

> Sometimes the newest unfinished thing  
> is the most important thing.

That is why stacks show up so often in algorithms.

The more you practice stacks, the more you will notice:

- when order needs to be reversed
- when the latest thing should be handled first
- when nested structure needs matching
- when a problem is really about the top item

That is a powerful pattern to add to your toolbox.
