---
title: "OOD Fundamentals"
chapterSlug: "ood-fundamentals"
order: 3
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 105
skills:
  - "Explain core OOD ideas like encapsulation, inheritance, composition, and polymorphism"
  - "Decide what responsibilities belong inside an object"
  - "Compare 'is-a' and 'has-a' relationships"
  - "Use simple TypeScript examples to model clean object designs"
---

# OOD Fundamentals

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: OOD fundamentals are the core building blocks that help us design clean, flexible, and organized software systems.

---

# Chapter Overview

Now that we know what Object Oriented Design is, and now that we have a framework for solving design challenges, we need the actual **design tools**.

These tools are the fundamental ideas that help us answer questions like:

- Which object should own this job?
- Should this class be a type of another class?
- Should this object contain another object?
- How do we keep a system organized as it grows?

These ideas are called **OOD fundamentals**.

In this chapter, we will learn:

1. **Responsibility**
2. **Encapsulation**
3. **Abstraction**
4. **Inheritance**
5. **Composition**
6. **Polymorphism**
7. **Single Responsibility Thinking**
8. **How These Ideas Work Together**
9. **Chapter Review**
10. **Mastery Check**

---

# Why OOD Fundamentals Matter

Imagine you are building a giant school simulation game.

You have:
- students
- teachers
- classrooms
- schedules
- lockers
- assignments
- buses
- lunch cards

Without design fundamentals, the code can become tangled and confusing.

With strong fundamentals, you can build systems that are:

- easier to understand
- easier to change
- easier to test
- easier to extend later

That is why this chapter matters so much.

It teaches the rules of good object design.

---

# 1. Responsibility

## What is responsibility?

A responsibility is a job an object owns.

Good OOD starts with this question:

> Which object should be responsible for this behavior?

For example, in a tic tac toe game:

- the **Board** should know which cells are filled
- the **Player** should know their symbol
- the **Game** should manage turn order

If the Player tried to also control the board, the win logic, and the score system, that would be messy.

Good design means:
- give each object a clear job
- do not pile every job into one class

---

## Example: Music player

### MusicPlayer
Responsible for:
- playing songs
- pausing songs
- switching songs

### Playlist
Responsible for:
- storing songs
- adding songs
- removing songs

### Song
Responsible for:
- knowing its title
- knowing its artist
- knowing its length

This feels clear.
That is good responsibility design.

---

## A helpful beginner test

Ask:

- Should this object really own this job?
- Or am I giving it too much power?

That question helps a lot.

---

# 2. Encapsulation

## What is encapsulation?

Encapsulation means:

> Keep an object’s important data and rules inside the object.

In simpler words:

- an object should protect its own state
- other parts of the program should not mess with its internals carelessly

You can think of encapsulation like a vending machine.

You press buttons and insert money from the outside.
But you do **not** reach inside and directly change the machine’s gears.

That is encapsulation.

---

## Why encapsulation helps

Encapsulation helps because:
- objects can protect their own rules
- other code does not need to know every tiny detail
- the system becomes safer and easier to change

---

## Example: Bank account

Suppose we have a `BankAccount`.

It has:
- balance

A bad design would let anyone do this:

```ts
account.balance = -1000000;
```

That breaks the rules.

A better design is:
- keep the balance protected
- only allow changes through methods like:
  - deposit()
  - withdraw()

Then the object can stop illegal behavior.

---

## TypeScript Example

```ts
class BankAccount {
  private balance: number;

  constructor(startingBalance: number) {
    this.balance = startingBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): boolean {
    if (amount <= 0) {
      return false;
    }

    if (amount > this.balance) {
      return false;
    }

    this.balance -= amount;
    return true;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

---

## What makes this good?

- `balance` is private
- you cannot change it directly from outside
- the class protects its own rules

That is encapsulation.

---

# 3. Abstraction

## What is abstraction?

Abstraction means:

> Focus on the important idea, and hide unnecessary details.

Think about driving a car.

When you press the brake pedal, you do not need to know every gear, pipe, and mechanism inside the braking system.

You just need the important action:

- press brake
- car slows down

That is abstraction.

---

## Why abstraction helps

Abstraction helps because:
- we do not want every part of the system to know every internal detail
- it keeps designs simpler
- it lets us think at the right level

---

## Example: Remote control

A remote control has buttons like:
- powerOn()
- volumeUp()
- changeChannel()

You do not need to know how electricity flows inside the TV.

The remote gives a simple interface.

That is abstraction.

---

## Example in software

A `Printer` object might have:

```ts
printDocument()
```

The user of the class does not need to know:
- exactly how pages are buffered
- how memory is managed
- how the printer motor spins

They only need the important action.

---

## Beginner-friendly definition

Encapsulation is about:
- protecting the inside

Abstraction is about:
- showing only the useful outside view

They are related, but not exactly the same.

---

# 4. Inheritance

## What is inheritance?

Inheritance means:

> One class can start from another class and reuse its shared behavior.

A child class is a more specific kind of a parent class.

This is often called an **is-a** relationship.

Example:
- a `Dog` **is an** `Animal`
- a `Bus` **is a** `Vehicle`
- a `Teacher` **is a** `Person`

---

## Why inheritance helps

Inheritance helps when:
- several classes share common attributes and methods
- you do not want to repeat the same code again and again

---

## Example: Vehicles

Suppose we have:

### Vehicle
Knows:
- licensePlate
- color

Does:
- move()

Then we can make:

### Car extends Vehicle
Extra things:
- trunkSize

### Bus extends Vehicle
Extra things:
- passengerCapacity

### Motorcycle extends Vehicle
Extra things:
- hasSidecar

All of them are vehicles, so they can share the common base class.

---

## TypeScript Example

```ts
class Vehicle {
  licensePlate: string;

  constructor(licensePlate: string) {
    this.licensePlate = licensePlate;
  }

  move(): string {
    return "The vehicle moves forward.";
  }
}

class Car extends Vehicle {
  doors: number;

  constructor(licensePlate: string, doors: number) {
    super(licensePlate);
    this.doors = doors;
  }
}

class Bus extends Vehicle {
  passengerCapacity: number;

  constructor(licensePlate: string, passengerCapacity: number) {
    super(licensePlate);
    this.passengerCapacity = passengerCapacity;
  }
}
```

---

## When inheritance is a good fit

Inheritance is helpful when the child class truly is a more specific version of the parent class.

A good test is:

> Can I honestly say “X is a Y”?

Examples:
- A bus is a vehicle -> yes
- A playlist is a song -> no

So:
- `Bus extends Vehicle` makes sense
- `Playlist extends Song` would not make sense

---

# 5. Composition

## What is composition?

Composition means:

> Build one object using other objects as parts.

This is often called a **has-a** relationship.

Examples:
- a `Car` has an `Engine`
- a `Game` has a `Board`
- a `MusicPlayer` has a `Playlist`
- a `School` has `Classrooms`

Composition is one of the most important ideas in OOD.

---

## Why composition is powerful

Composition helps because:
- it keeps systems modular
- it allows objects to work together cleanly
- it is often more flexible than inheritance

---

## Example: Game system

A `Game` might have:
- a `Board`
- two `Player` objects
- a `ScoreManager`

That means the Game is built from smaller useful parts.

Instead of making one giant class do everything, we compose the system from pieces.

---

## TypeScript Example

```ts
class Board {
  cells: string[][];

  constructor() {
    this.cells = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }
}

class Player {
  name: string;
  symbol: string;

  constructor(name: string, symbol: string) {
    this.name = name;
    this.symbol = symbol;
  }
}

class Game {
  board: Board;
  playerOne: Player;
  playerTwo: Player;

  constructor(playerOne: Player, playerTwo: Player) {
    this.board = new Board();
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }
}
```

---

## Inheritance vs Composition

This is a very important comparison.

### Inheritance
- is-a relationship
- `Bus is a Vehicle`

### Composition
- has-a relationship
- `Game has a Board`

A lot of beginners overuse inheritance.
Strong designers learn to use composition often.

---

## Helpful question

Ask:

> Is this a kind of thing, or does it simply contain/use that thing?

That question helps you choose between inheritance and composition.

---

# 6. Polymorphism

## What is polymorphism?

Polymorphism means:

> Different objects can respond to the same command in their own way.

That sounds fancy, but the idea is simple.

Suppose we have:
- `Dog`
- `Cat`
- `Bird`

All of them may have a method called:

```ts
makeSound()
```

But:
- Dog says “Woof”
- Cat says “Meow”
- Bird says “Tweet”

Same method name.
Different behavior.

That is polymorphism.

---

## Why polymorphism helps

Polymorphism helps because:
- different object types can fit into a shared design
- code becomes more flexible
- we can write logic that works with many related types

---

## TypeScript Example

```ts
class Animal {
  makeSound(): string {
    return "Some animal sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}
```

Now we can do:

```ts
const animals: Animal[] = [new Dog(), new Cat()];

for (const animal of animals) {
  console.log(animal.makeSound());
}
```

Output:
- Woof
- Meow

That is polymorphism in action.

---

## Beginner-friendly meaning

Polymorphism means:
- same message
- different object
- different response

---

# 7. Single Responsibility Thinking

## What is single responsibility?

This means:

> A class should have one main job.

Not twenty jobs.
Not “everything in the system.”
One main role.

This idea keeps design clean.

---

## Example of bad design

```txt
MegaSchoolSystem
- students
- teachers
- grades
- buses
- lunchCards
- attendance
- payments
- assignments
- reportCards
- sendEmails()
- driveBus()
- gradeHomework()
- collectLunchMoney()
```

This class is doing far too much.

That is a warning sign.

---

## Better design

Split the jobs into:
- Student
- Teacher
- BusRoute
- Gradebook
- LunchAccount
- AssignmentManager

Now responsibilities are clearer.

---

## Why this helps

Single responsibility helps because:
- each class is easier to understand
- changes affect fewer parts
- bugs are easier to trace
- the system is easier to expand later

---

# 8. How These Ideas Work Together

Let’s imagine a movie theater booking system.

We might design:

### Movie
Knows:
- title
- duration

### Seat
Knows:
- row
- number
- reserved

Does:
- reserve()

### Show
Knows:
- movie
- time
- seats

Does:
- findAvailableSeat()

### Booking
Knows:
- show
- seat
- customerName

Does:
- confirm()

Now look at the OOD fundamentals inside this design.

---

## Responsibility
- `Seat` handles seat reservation
- `Show` handles finding seats
- `Booking` handles the booking record

---

## Encapsulation
- `Seat` should protect whether it is already reserved
- outside code should not casually break that rule

---

## Abstraction
- `Show.findAvailableSeat()` gives a clean action
- outside code does not need to know every seat-checking detail

---

## Composition
- `Show` has a `Movie`
- `Show` has many `Seat`s
- `Booking` has a `Show` and a `Seat`

---

## Inheritance
Maybe later:
- `RegularSeat extends Seat`
- `VIPSeat extends Seat`

---

## Polymorphism
Different seat types might respond differently to:
- `getPrice()`

Example:
- RegularSeat returns 10
- VIPSeat returns 18

That shows how these ideas work together inside one real system.

---

# A Simple OOD Decision Guide

When you design a class, ask these questions:

## Responsibility
- What is this class mainly responsible for?

## Encapsulation
- What data should this class protect?

## Abstraction
- What simple outside actions should this class offer?

## Inheritance
- Is this class truly a more specific kind of another class?

## Composition
- Does this class contain or use other classes?

## Polymorphism
- Do related classes need to respond differently to the same method?

These questions make you a much stronger designer.

---

# Common Beginner Mistakes

## 1. Overusing inheritance

Not everything should extend something else.

Bad idea:
- `Playlist extends Song`

Why bad?
- a playlist is not a kind of song
- it contains songs

This should use composition instead.

---

## 2. Breaking encapsulation

Bad idea:
- letting outside code directly change important values in unsafe ways

Better:
- use methods that protect the rules

---

## 3. One giant class

Bad idea:
- stuffing every job into one “manager” class

Better:
- split responsibilities

---

## 4. Empty classes with no real behavior

Sometimes students create many classes, but none of them actually do anything useful.

Strong design is not about having lots of classes.
It is about having the **right** classes.

---

# Chapter Review

## What you learned

In this chapter, you learned the major building blocks of Object Oriented Design.

You learned:

- **Responsibility** means giving each object a clear job
- **Encapsulation** means protecting important data and rules inside the object
- **Abstraction** means showing the important outside view while hiding extra detail
- **Inheritance** means one class can be a more specific kind of another class
- **Composition** means building objects out of other objects
- **Polymorphism** means different objects can respond to the same command in different ways
- **Single responsibility thinking** helps keep classes focused and clean

---

## Key comparisons to remember

### Inheritance
- is-a
- `Bus is a Vehicle`

### Composition
- has-a
- `Game has a Board`

### Encapsulation
- protect the inside

### Abstraction
- simplify the outside view

### Polymorphism
- same method name, different behavior

---

## Strongest design questions

When designing, ask:

- What is this object’s job?
- What should it know?
- What should it do?
- Is this an is-a relationship or a has-a relationship?
- Is this class trying to do too much?

Those questions lead to strong designs.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

Inheritance is an ________ relationship. Composition is a ________ relationship.

**Answer:** is-a, has-a

---

## 2. True or False

Encapsulation helps protect an object’s important data and rules.

**Answer:** True

---

## 3. Short Answer

What is the difference between an attribute and a method?

**Answer:** An attribute is information an object stores. A method is an action the object can perform.

---

## 4. Short Answer

What does polymorphism mean in simple terms?

**Answer:** Different objects can respond to the same method name in different ways.

---

## 5. Fill in the blank

A class should usually have one main ________.

**Answer:** responsibility

---

## 6. Mini Design Challenge

A `Car` contains an `Engine`.

Is that inheritance or composition?

**Answer:** Composition, because a car has an engine.

---

## 7. Mini Design Challenge

A `Dog` is a kind of `Animal`.

Is that inheritance or composition?

**Answer:** Inheritance, because a dog is an animal.

---

## 8. Mini Design Challenge

Design a simple object card for a **SchoolBus**.

One possible answer:

```txt
SchoolBus
Knows:
- busNumber
- seatCount
- routeName

Does:
- pickUpStudents()
- dropOffStudents()
- driveToNextStop()
```

---

# Practice Prompts

Try these on your own:

1. For a video game, which classes should use inheritance?
2. For a restaurant app, which classes should use composition?
3. What should a `Cart` object know and do?
4. What should be protected inside a `BankAccount` object?
5. What is one example of polymorphism in a pet simulator?

---

# Friendly Wrap-up

OOD fundamentals teach one of the most important software lessons:

> Clean systems are not built by accident.  
> They are built by making strong design choices.

The more you practice these ideas, the more you will notice:

- when a class has the wrong job
- when an object should protect its own rules
- when composition is better than inheritance
- when shared behavior can come from a parent class
- when the same method name can work across different object types

These are the tools real designers use.

Next, we will put these tools to work in our first full design challenge: **Design a Tic Tac Toe Game**.
