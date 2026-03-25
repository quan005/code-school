---
title: "Design a Tic Tac Toe Game"
chapterSlug: "design-a-tic-tac-toe-game"
order: 4
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 110
skills:
  - "Turn a game idea into objects and responsibilities"
  - "Design a small system using Board, Player, and Game classes"
  - "Write a clean TypeScript class skeleton for a game system"
  - "Think through game rules, edge cases, and future upgrades"
---

# Design a Tic Tac Toe Game

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: A game system becomes easier to build when we break it into clear objects with clear jobs.

---

# Chapter Overview

Tic Tac Toe is a perfect first Object Oriented Design challenge.

Why?

Because it is:
- easy to understand
- small enough to model clearly
- rich enough to teach real design thinking

In Tic Tac Toe, we need to manage:
- a board
- two players
- turns
- moves
- wins
- ties
- game state

That means this chapter is not just about making the game work.

It is about learning how to design a clean system where:
- each object has a job
- the jobs are separated well
- the game can grow later if we want upgrades

In this chapter, we will learn:

1. **Understand the Mission**
2. **Gather Requirements**
3. **Identify Core Objects**
4. **Design the Blueprint**
5. **Build the Code Skeleton**
6. **Walk Through a Full Game**
7. **Handle Edge Cases**
8. **Upgrade the System**
9. **Chapter Review**
10. **Mastery Check**

---

# 1. Understand the Mission

## The design challenge

Design a Tic Tac Toe game system.

The system should support:
- two players
- a 3x3 board
- turn-taking
- placing marks
- checking for a winner
- detecting a tie
- stopping the game when it ends

We are not trying to build fancy graphics here.

We are designing the **game system** underneath.

That means we care about:
- objects
- state
- rules
- interactions

---

## Why this is a great OOD challenge

Tic Tac Toe is small, but it teaches many real design lessons:

- Which object should control the board?
- Which object should know whose turn it is?
- Where should win-checking happen?
- How do we stop invalid moves?
- How do we keep the game organized?

These are real design questions.

---

# 2. Gather Requirements

Before we create classes, we should understand the rules.

## Core requirements

Our game should:

1. Create a 3x3 board
2. Support two players
3. Let players take turns
4. Place `X` or `O` in empty cells
5. Prevent moves on filled cells
6. Detect a winner
7. Detect a tie
8. Stop once the game is over

---

## Clarifying questions

A strong designer asks smart questions before building.

For this game, we might ask:

- Is the board always 3x3?
- Are there always exactly 2 players?
- Does one player always use `X` and the other `O`?
- Should invalid moves be rejected?
- Should the system track winner, tie, or ongoing state?
- Should the system allow restart later?

For our first version, we will choose:

- board size = 3x3
- player count = 2
- symbols = `X` and `O`
- invalid moves are rejected
- game tracks whether it is active, won, or tied

---

## A simple use case

Let’s picture one normal game:

1. Maya places `X` in the center
2. Leo places `O` in the top-left
3. Maya places `X` in the bottom-right
4. The system keeps switching turns
5. The board checks after each move whether someone won
6. If three in a row happens, the game ends

This story helps reveal the design.

---

# 3. Identify Core Objects

Now let’s ask:

> What are the most important things in this system?

A strong first answer is:

- `Board`
- `Player`
- `Game`

We may also use:
- `Position`
- `GameStatus`
- `Symbol`

But the main objects are the first three.

---

## Object 1: Board

### The Board knows:
- the cells in the grid
- which cells are empty or filled

### The Board can:
- place a mark
- check whether a move is valid
- return the current grid
- check whether there is a winner
- check whether the board is full

The Board is responsible for the game space itself.

---

## Object 2: Player

### The Player knows:
- name
- symbol (`X` or `O`)

### The Player can:
- make a move choice

In a simple version, the player object may not do much logic yet, but it still matters because it represents a game participant.

---

## Object 3: Game

### The Game knows:
- the board
- the two players
- whose turn it is
- whether the game is active, won, or tied
- who won, if anyone

### The Game can:
- start the game
- process a move
- switch turns
- end the game
- announce the winner or tie

The Game coordinates the whole system.

---

## Why this division is good

This is clean because:

- the **Board** handles board rules
- the **Player** stores player identity
- the **Game** controls flow and state

No one class is doing everything.

That is strong OOD.

---

# 4. Design the Blueprint

Now we turn the objects into a blueprint.

## Object cards

### Board
Knows:
- grid

Does:
- placeMark()
- isCellEmpty()
- checkWinner()
- isFull()
- display()

### Player
Knows:
- name
- symbol

Does:
- maybe just provide identity in version 1

### Game
Knows:
- board
- players
- currentPlayerIndex
- status
- winner

Does:
- makeMove()
- switchTurn()
- getCurrentPlayer()
- endGame()

---

## UML-lite blueprint

```txt
Board
- grid
- placeMark()
- isCellEmpty()
- checkWinner()
- isFull()
- display()

Player
- name
- symbol

Game
- board
- players
- currentPlayerIndex
- status
- winner
- makeMove()
- switchTurn()
- getCurrentPlayer()
- endGame()
```

---

## Relationship thinking

- A `Game` has a `Board`
- A `Game` has two `Player` objects
- A `Board` stores marks
- A `Game` asks the `Board` whether moves are valid and whether someone has won

This is mostly **composition**:
- Game has a Board
- Game has Players

---

# 5. Design Decisions

Before coding, let’s make a few design choices.

## Choice 1: How should we represent the board?

We can use a 2D array like this:

```txt
[
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]
```

That is easy for beginners to understand.

---

## Choice 2: How should we represent player symbols?

We could use strings:
- `"X"`
- `"O"`

Or we could use an enum.

An enum is a little cleaner.

---

## Choice 3: Where should win checking live?

A beginner might put all win logic inside `Game`.

But a better design is to let `Board` handle:
- row checks
- column checks
- diagonal checks

Why?

Because winning depends on the board state.

That makes `Board` the right owner for that job.

---

## Choice 4: Where should turn switching live?

That belongs in `Game`, because turn order is part of game flow.

---

# 6. TypeScript Code Skeleton

Here is a clean first version of the system.

```ts
enum SymbolMark {
  X = "X",
  O = "O",
}

enum GameStatus {
  Active = "active",
  Won = "won",
  Tied = "tied",
}

class Player {
  name: string;
  symbol: SymbolMark;

  constructor(name: string, symbol: SymbolMark) {
    this.name = name;
    this.symbol = symbol;
  }
}

class Board {
  grid: string[][];

  constructor() {
    this.grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  isCellEmpty(row: number, col: number): boolean {
    return this.grid[row][col] === "";
  }

  placeMark(row: number, col: number, symbol: SymbolMark): boolean {
    if (!this.isCellEmpty(row, col)) {
      return false;
    }

    this.grid[row][col] = symbol;
    return true;
  }

  isFull(): boolean {
    for (const row of this.grid) {
      for (const cell of row) {
        if (cell === "") {
          return false;
        }
      }
    }

    return true;
  }

  checkWinner(): string | null {
    // Check rows
    for (let r = 0; r < 3; r++) {
      if (
        this.grid[r][0] !== "" &&
        this.grid[r][0] === this.grid[r][1] &&
        this.grid[r][1] === this.grid[r][2]
      ) {
        return this.grid[r][0];
      }
    }

    // Check columns
    for (let c = 0; c < 3; c++) {
      if (
        this.grid[0][c] !== "" &&
        this.grid[0][c] === this.grid[1][c] &&
        this.grid[1][c] === this.grid[2][c]
      ) {
        return this.grid[0][c];
      }
    }

    // Check diagonals
    if (
      this.grid[0][0] !== "" &&
      this.grid[0][0] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][2]
    ) {
      return this.grid[0][0];
    }

    if (
      this.grid[0][2] !== "" &&
      this.grid[0][2] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][0]
    ) {
      return this.grid[0][2];
    }

    return null;
  }

  display(): void {
    console.log(this.grid);
  }
}

class Game {
  board: Board;
  players: Player[];
  currentPlayerIndex: number;
  status: GameStatus;
  winner: Player | null;

  constructor(playerOneName: string, playerTwoName: string) {
    this.board = new Board();
    this.players = [
      new Player(playerOneName, SymbolMark.X),
      new Player(playerTwoName, SymbolMark.O),
    ];
    this.currentPlayerIndex = 0;
    this.status = GameStatus.Active;
    this.winner = null;
  }

  getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  switchTurn(): void {
    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;
  }

  makeMove(row: number, col: number): boolean {
    if (this.status !== GameStatus.Active) {
      return false;
    }

    const currentPlayer = this.getCurrentPlayer();
    const placed = this.board.placeMark(row, col, currentPlayer.symbol);

    if (!placed) {
      return false;
    }

    const winningSymbol = this.board.checkWinner();

    if (winningSymbol !== null) {
      this.status = GameStatus.Won;
      this.winner = currentPlayer;
      return true;
    }

    if (this.board.isFull()) {
      this.status = GameStatus.Tied;
      return true;
    }

    this.switchTurn();
    return true;
  }
}
```

---

# 7. Walk Through a Full Game

Let’s simulate part of a game.

```ts
const game = new Game("Maya", "Leo");
```

At the start:
- Maya is `X`
- Leo is `O`
- board is empty
- status is active

---

## Move 1

```ts
game.makeMove(1, 1);
```

Maya places `X` in the center.

Board now:

```txt
[
  ["", "", ""],
  ["", "X", ""],
  ["", "", ""],
]
```

No winner yet.
Switch turn.

---

## Move 2

```ts
game.makeMove(0, 0);
```

Leo places `O` in the top-left.

Board now:

```txt
[
  ["O", "", ""],
  ["", "X", ""],
  ["", "", ""],
]
```

No winner yet.
Switch turn.

---

## Move 3

```ts
game.makeMove(2, 2);
```

Maya places `X` in the bottom-right.

No winner yet.

This step-by-step simulation is important because it helps us test whether the design makes sense.

---

# 8. Edge Cases to Handle

Strong designers think about tricky situations.

## Edge Case 1: A player chooses a filled cell

Example:
- someone tries to place a mark where a mark already exists

Our design handles this because:
- `Board.placeMark()` returns `false`
- `Game.makeMove()` also returns `false`

That means the move is rejected.

---

## Edge Case 2: A player tries to move after the game ends

Example:
- someone keeps clicking after a winner is already found

Our design handles this because:
- `Game.makeMove()` checks if status is still active

---

## Edge Case 3: A tie game

If the board fills and there is no winner:
- status becomes `Tied`

That is important because a game can end without a winner.

---

## Edge Case 4: Invalid row or column

In a more complete version, we should also validate:
- row must be 0, 1, or 2
- col must be 0, 1, or 2

That would make the design safer.

---

# 9. Upgrade Ideas

Once the basic system works, we can extend it.

## Upgrade 1: Restart the game

Add:
- `reset()`

This could clear the board and set the status back to active.

---

## Upgrade 2: Score tracking

Add a `ScoreBoard` class.

### ScoreBoard
Knows:
- player scores
- number of ties

Does:
- recordWin()
- recordTie()
- showScores()

This is a great example of adding a new object instead of stuffing more jobs into `Game`.

---

## Upgrade 3: Computer player

Add an AI player.

This might lead to:
- `HumanPlayer`
- `ComputerPlayer`

That would be a good use of inheritance or polymorphism later.

---

## Upgrade 4: Bigger boards

Instead of always 3x3, we could allow:
- 4x4
- 5x5

That would make the board logic more advanced.

---

## Upgrade 5: UI layer

We could later add:
- buttons
- graphics
- input screens

But the good news is:
if the object design is clean, the system underneath can stay mostly the same.

---

# 10. Why This Design Is Strong

This design is not perfect or final, but it is strong because:

- responsibilities are separated
- Board handles board logic
- Game handles game flow
- Player stores identity
- invalid moves can be blocked
- winners and ties can be detected
- future upgrades are possible

This is what good beginner OOD looks like:
- simple
- clear
- extendable

---

# 11. Common Beginner Mistakes

## Mistake 1: Letting Player control the whole game

That would be messy because the player should not manage:
- the board
- turn switching
- win checking
- game ending

That belongs to `Game` and `Board`.

---

## Mistake 2: Putting every rule into Game

If `Game` handles:
- move placement
- board storage
- win logic
- row checks
- diagonal checks
- display

then it becomes too large.

Better:
- let Board own board-specific logic

---

## Mistake 3: Forgetting game state

A real game system needs to know:
- active
- won
- tied

Without that, the system cannot behave properly.

---

## Mistake 4: Ignoring invalid moves

Good systems reject bad input.

That is part of strong design.

---

# Chapter Review

## What you learned

In this chapter, you learned how to design a Tic Tac Toe game as an object-oriented system.

You learned how to:

- gather requirements
- identify core objects
- separate responsibilities
- design a blueprint
- build a TypeScript code skeleton
- test the design with a sample game
- think about edge cases and upgrades

---

## Main objects in this design

### Board
Owns:
- grid
- move validity
- winner checking
- full-board checking

### Player
Owns:
- name
- symbol

### Game
Owns:
- players
- turn order
- game status
- winner
- move flow

---

## Strong design lesson

This chapter teaches a very important OOD lesson:

> A system becomes easier to build  
> when each object handles the right part of the job.

That is the heart of good design.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In our Tic Tac Toe design, the `Game` handles game ________, while the `Board` handles board ________.

**Answer:** flow, logic

---

## 2. True or False

The `Player` class should usually decide whether three marks in a row count as a win.

**Answer:** False

That belongs more naturally to the `Board`.

---

## 3. Short Answer

Why is `Board.checkWinner()` a good idea?

**Answer:** Because winning depends on the board state, so the Board is the natural object to check rows, columns, and diagonals.

---

## 4. Short Answer

Why is Tic Tac Toe a good first OOD challenge?

**Answer:** Because it is small enough to understand but still has real design ideas like objects, responsibilities, rules, and interactions.

---

## 5. Fill in the blank

A `Game` object has a `Board`, which means this relationship is called ________.

**Answer:** composition

---

## 6. Mini Design Challenge

What object would you add if you wanted to track wins across many games?

One good answer:
- `ScoreBoard`

---

## 7. Mini Design Challenge

What method would you add if you wanted players to replay after a match ends?

One good answer:
- `reset()`

---

# Practice Prompts

Try these on your own:

1. Add a `reset()` method to the design.
2. Design a `ScoreBoard` class for multiple rounds.
3. Add row/column range checking to `makeMove()`.
4. Design a `ComputerPlayer`.
5. Ask: what would need to change if the board became 4x4?

---

# Friendly Wrap-up

This chapter shows how a real design challenge can be broken into clear steps:

- understand the mission
- find the objects
- give each one the right job
- build the blueprint
- write the code skeleton
- improve the design

That is real Object Oriented Design.

Next, we will use the same thinking on a bigger system: **Design a Parking Lot**.
