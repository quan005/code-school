---
title: "Introduction to Object Oriented Design"
chapterSlug: "intro-to-object-oriented-design"
order: 1
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 90
skills:
  - "Explain what objects, classes, attributes, and methods are"
  - "Describe software systems as teams of objects with jobs"
  - "Identify what an object knows and what it can do"
  - "Read and create simple object blueprints"
---

# Introduction to Object Oriented Design

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: Object Oriented Design means building software out of smart objects, where each object has a job, knows some information, and can do certain actions.

---

# Chapter Overview

Imagine you are building a game world.

You might have:

- a **Player**
- an **Enemy**
- a **Treasure Chest**
- a **Door**
- a **Scoreboard**

Each one is a different **thing** in the system.

Each thing has:
- information it knows
- actions it can do
- rules it should follow

That is the heart of **Object Oriented Design**, often called **OOD**.

OOD is about building software as a group of smart, organized parts instead of one giant messy blob of code.

In this chapter, we will learn:

1. **What Object Oriented Design Is**
2. **Objects vs Classes**
3. **Attributes and Methods**
4. **Thinking in “Knows” and “Does”**
5. **Why OOD Helps**
6. **A First Blueprint Example**
7. **A First TypeScript Example**
8. **Chapter Review**
9. **Mastery Check**

---

# What Object Oriented Design Is

## Intuition

Object Oriented Design is a way of planning and building software.

Instead of saying:

> “I will write one huge program that does everything,”

we say:

> “I will build a team of objects, and each object will handle part of the job.”

That makes systems easier to:
- understand
- build
- fix
- grow later

---

## A simple real-world example

Think about a school.

A school is not just one giant person doing everything.

It has many parts:

- students
- teachers
- classrooms
- schedules
- assignments

Each part has a role.

That is how OOD works too.

A software system is often a group of parts that work together.

---

## OOD as a team

Here is a helpful way to think about it:

- each object is like a team member
- each object has a responsibility
- objects can talk to each other
- no object should try to do every job

This is one of the biggest lessons in OOD:

> Good design means giving the right job to the right object.

---

# Objects vs Classes

## What is an object?

An **object** is a specific thing in a program.

Examples:
- one particular player named Maya
- one door in level 3
- one shopping cart
- one movie ticket
- one elevator

An object is like a real item you can point at.

---

## What is a class?

A **class** is the blueprint for making objects.

If an object is a real house, then a class is the house blueprint.

Example:

- `Dog` could be a class
- `"Buddy"` could be one dog object
- `"Luna"` could be another dog object

Both Buddy and Luna come from the `Dog` blueprint, but they are not the same dog.

---

## Class vs Object example

### Class
```txt
Dog
```

### Objects made from that class
```txt
Buddy
Luna
Max
```

All of them are dogs, but each one has its own data.

For example:

- Buddy might be 3 years old
- Luna might be 5 years old

That means:
- same kind of object
- different specific values

---

# Attributes and Methods

## Attributes: what an object knows

An **attribute** is a piece of information an object stores.

For a `Dog`, attributes might be:
- name
- age
- energyLevel

For a `Player`, attributes might be:
- username
- score
- health

You can think of attributes as:

> what the object knows about itself

---

## Methods: what an object can do

A **method** is an action an object can perform.

For a `Dog`, methods might be:
- bark()
- eat()
- sleep()

For a `Player`, methods might be:
- jump()
- takeDamage()
- collectCoin()

You can think of methods as:

> what the object can do

---

## The best beginner question in OOD

When you meet a new object, ask:

- What does this object **know**?
- What can this object **do**?

That one question helps you design much better systems.

---

# Thinking in “Knows” and “Does”

This is one of the best ways for middle school students to learn OOD.

## Example: Vending Machine

### Object: Snack
Knows:
- name
- price
- quantity

Does:
- maybe nothing by itself, or maybe report if it is in stock

### Object: VendingMachine
Knows:
- what snacks it has
- how much money was inserted

Does:
- showItems()
- acceptMoney()
- dispenseItem()
- returnChange()

### Object: Customer
Knows:
- name
- balance

Does:
- chooseItem()
- insertMoney()

This is how OOD begins:
we turn a story into objects, then decide what each one knows and does.

---

## Example: Tic Tac Toe

### Object: Board
Knows:
- grid cells
- which spots are filled

Does:
- placeMark()
- showBoard()
- checkCell()

### Object: Player
Knows:
- name
- symbol (`X` or `O`)

Does:
- chooseMove()

### Object: Game
Knows:
- board
- players
- whose turn it is

Does:
- start()
- switchTurn()
- checkWinner()

See how the jobs are shared?
That is good design.

---

# Why OOD Helps

## 1. It keeps code organized

Instead of mixing everything together, we separate responsibilities.

That makes the code easier to read.

---

## 2. It makes systems easier to grow

If we later want to add:
- a new kind of vehicle
- a VIP movie ticket
- a new vending machine payment method

OOD helps because the system already has structure.

---

## 3. It makes bugs easier to find

If something goes wrong, we can often ask:

- Which object is responsible for this job?

That narrows the search.

---

## 4. It matches real-world thinking

OOD feels natural because many real systems already have:
- parts
- roles
- rules
- interactions

That is why it is such a popular way to design software.

---

# A First Blueprint Example

Let’s design a very small system: a pet game.

We want a pet that can:
- have a name
- have energy
- eat food
- play
- rest

## Object card

### Pet
Knows:
- name
- energy
- hunger

Does:
- eat()
- play()
- sleep()

This can become a simple blueprint:

```txt
Pet
- name
- energy
- hunger
- eat()
- play()
- sleep()
```

That box is like a tiny class diagram.

---

## How to read the blueprint

The top is:
- the class name

The middle is:
- attributes

The bottom is:
- methods

So:

```txt
Pet
- name
- energy
- hunger
- eat()
- play()
- sleep()
```

means:
- `Pet` is the blueprint
- every pet object stores name, energy, hunger
- every pet object can eat, play, and sleep

---

# A First TypeScript Example

Here is what that blueprint might look like in TypeScript.

```ts
class Pet {
  name: string;
  energy: number;
  hunger: number;

  constructor(name: string) {
    this.name = name;
    this.energy = 50;
    this.hunger = 50;
  }

  eat(): void {
    this.hunger = Math.max(0, this.hunger - 20);
  }

  play(): void {
    this.energy = Math.max(0, this.energy - 10);
    this.hunger = Math.min(100, this.hunger + 10);
  }

  sleep(): void {
    this.energy = Math.min(100, this.energy + 25);
  }
}
```

---

## What is happening here?

### Class name
```ts
class Pet
```

This creates the blueprint.

### Attributes
```ts
name: string;
energy: number;
hunger: number;
```

These are the things each pet knows.

### Constructor
```ts
constructor(name: string)
```

This runs when a new pet is created.

### Methods
```ts
eat()
play()
sleep()
```

These are the things the pet can do.

---

## Creating an object from the class

```ts
const pet1 = new Pet("Mochi");
```

Now `pet1` is an object made from the `Pet` class.

We can use it like this:

```ts
pet1.play();
pet1.eat();
pet1.sleep();
```

That means:
- the same blueprint
- but now one real object exists in the program

---

# Mini Design Studio

Let’s practice with a small challenge.

## Challenge: Design a Music Player

What objects might we need?

Possible answers:
- Song
- Playlist
- MusicPlayer
- User

### Song
Knows:
- title
- artist
- length

Does:
- maybe just provide its information

### Playlist
Knows:
- list of songs
- name

Does:
- addSong()
- removeSong()

### MusicPlayer
Knows:
- current song
- current playlist
- volume

Does:
- play()
- pause()
- nextSong()
- setVolume()

That is OOD thinking.

---

# Common Beginner Mistakes

## 1. One giant class does everything

Example:
- one `GameSystem` class handles players, board, score, enemies, music, and inventory all at once

That becomes messy fast.

Better:
- split jobs into separate objects

---

## 2. Giving an object the wrong job

Example:
- a `Player` object should not control the whole vending machine
- a `Snack` object should not manage all customers

Ask:
- whose job is this really?

---

## 3. Mixing up “knows” and “does”

Example:
- “jump” should be a method, not an attribute
- “score” should be an attribute, not a method

---

## 4. Making objects that are too tiny or too empty

Some objects are important.
Some are not needed yet.

Good OOD means choosing the right amount of detail.

---

# Quick Comparison: Bad Design vs Better Design

## Messy design

```txt
GameManager
- board
- players
- score
- moves
- music
- inventory
- enemies
- winner
- startGame()
- movePlayer()
- attackEnemy()
- playMusic()
- checkWinner()
- addItem()
- removeItem()
```

Problem:
- too many jobs
- one class is doing everything

---

## Better design

```txt
Board
Player
Enemy
Inventory
Game
```

Now each object has a clearer role.

That is easier to understand and change later.

---

# Chapter Review

## What you learned

In this chapter, you learned that Object Oriented Design is about building software from organized objects instead of one giant block of code.

You learned:

- an **object** is a specific thing in the system
- a **class** is the blueprint for creating objects
- **attributes** are what an object knows
- **methods** are what an object can do
- good OOD gives different jobs to different objects
- object blueprints can be sketched before coding

---

## Key Ideas to Remember

### Object
A real thing in the program.

### Class
The blueprint for a kind of object.

### Attribute
Information an object stores.

### Method
An action an object can perform.

### Good design
Split responsibilities clearly.

---

## The strongest beginner question

Whenever you design a system, ask:

- What are the important objects?
- What does each object know?
- What can each object do?

That question is the doorway into OOD.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A class is a ________ for making objects.

**Answer:** blueprint

---

## 2. Fill in the blank

Attributes are what an object ________. Methods are what an object ________.

**Answer:** knows, does

---

## 3. True or False

An object is a specific thing made from a class.

**Answer:** True

---

## 4. Short Answer

Why is it bad to put every job into one giant class?

**Answer:** Because the system becomes messy, harder to understand, harder to test, and harder to change later.

---

## 5. Short Answer

What are two good questions to ask when designing an object?

**Answer:** What does it know? What can it do?

---

## 6. Mini Design Challenge

Design an object card for a **Book**.

One possible answer:

```txt
Book
Knows:
- title
- author
- pageCount

Does:
- open()
- close()
- showInfo()
```

---

## 7. Mini Design Challenge

Design an object card for a **School Locker**.

One possible answer:

```txt
Locker
Knows:
- lockerNumber
- isOpen
- ownerName

Does:
- open()
- close()
- assignOwner()
```

---

# Practice Prompts

Try these on your own:

1. What objects would you create for a pizza ordering app?
2. What objects would you create for a zoo simulation?
3. What does a `MovieTicket` know, and what can it do?
4. What does a `Robot` know, and what can it do?

---

# Friendly Wrap-up

Object Oriented Design teaches an important software lesson:

> Big systems become easier to build  
> when we break them into smart parts.

That is why OOD matters.

The more you practice OOD, the more you will notice:

- where the objects are hiding inside a story
- which jobs belong together
- which classes are too big
- how blueprints can make coding easier

This chapter is the starting point.

Next, we will learn a step-by-step **framework for tackling Object Oriented Design challenges**, so you can design bigger systems with confidence.
