---
title: "A Framework for Tackling Object Oriented Design"
chapterSlug: "framework-for-tackling-object-oriented-design"
order: 2
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 105
skills:
  - "Use a step-by-step process to design object-oriented systems"
  - "Ask smart clarifying questions before building"
  - "Identify core objects from a story problem"
  - "Turn requirements into a simple blueprint and code skeleton"
---

# A Framework for Tackling Object Oriented Design

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: Strong designers do not start coding blindly. They use a step-by-step framework to understand the problem, find the main objects, sketch a blueprint, and then build.

---

# Chapter Overview

When beginners see a big design problem, they often do one of two things:

- freeze because the problem feels too big
- start coding too early without a plan

Neither one feels good.

That is why designers use a **framework**.

A framework is a repeatable process.
It is like a checklist for your brain.

Instead of asking:

> “How do I solve this giant design problem all at once?”

you ask:

1. What is the system supposed to do?
2. What are the important objects?
3. How do those objects connect?
4. What should I build first?
5. What edge cases should I think about?

This chapter gives you that process.

In this chapter, we will learn:

1. **Different Types of OOD Design Challenges**
   - System Blueprints
   - Code Skeletons
   - Working Code
2. **A Guiding Framework for Object Oriented Design**
   - Step 1: Requirements Gathering
   - Step 2: Identify Core Objects
   - Step 3: Design the Blueprint and Code
   - Step 4: Deep Dive and Improve
3. **A Step-by-Step Example: Parking Lot**
4. **What If the Design Challenge Doesn’t Go as Planned?**
5. **Chapter Review**
6. **Mastery Check**

---

# Why We Need a Framework

## Intuition

Imagine someone says:

> “Design a movie ticket booking system.”

That is a lot.

You might immediately think about:
- seats
- movies
- payments
- customers
- theaters
- showtimes
- tickets
- refunds
- bugs
- edge cases

It is easy to feel lost.

A framework helps you go one step at a time.

Instead of trying to solve the whole thing at once, you move in a clear order.

That is what real designers do.

---

## The main mindset

A strong object-oriented designer does **not** jump straight to code.

A strong designer:
- asks smart questions
- names the important objects
- decides what each object knows and does
- sketches a simple system blueprint
- only then starts building code

That is the habit this chapter teaches.

---

# Different Types of OOD Design Challenges

Not every design challenge looks the same.

Sometimes you may be asked to draw.
Sometimes you may be asked to sketch classes.
Sometimes you may be asked to write working code.

It helps to know the common forms.

---

## 1. System Blueprints

A **system blueprint** is a diagram view of the design.

You may show:
- classes
- attributes
- methods
- relationships between objects

This is similar to a UML diagram, but for our course we can think of it as:

> a blueprint for the system

### Example

```txt
ParkingLot
- spots
- parkVehicle()
- removeVehicle()

ParkingSpot
- size
- occupied
- park()
- leave()

Vehicle
- type
- licensePlate

Ticket
- entryTime
- calculateFee()
```

This kind of challenge focuses on:
- structure
- relationships
- responsibilities

---

## 2. Code Skeletons

A **code skeleton** is a partial code design.

It usually includes:
- class names
- attributes
- method names
- constructors
- maybe a little logic

But it may not be fully complete yet.

Think of it like:
- building the bones of the system
- before all the details are filled in

### Example

```ts
class ParkingLot {
  spots: ParkingSpot[];

  constructor(spots: ParkingSpot[]) {
    this.spots = spots;
  }

  parkVehicle(vehicle: Vehicle): Ticket | null {
    // logic goes here
    return null;
  }
}
```

This kind of challenge focuses on:
- translating design into classes
- writing clean structure
- showing that the design could become real code

---

## 3. Working Code

A **working code** challenge goes farther.

You are expected to write enough real code that the system actually works for important examples.

This may include:
- creating objects
- running methods
- showing output
- handling common cases

This kind of challenge focuses on:
- structure
- code quality
- logic
- whether the design really works

---

## Why this matters

These three versions are related.

You can think of them like:

- **Blueprint** -> visual plan
- **Skeleton** -> code structure
- **Working Code** -> real prototype

A strong designer should be able to move between all three.

---

# A Guiding Framework for OOD

Here is the framework we will use again and again in later chapters.

---

## Step 1: Requirements Gathering

Before building, make sure you understand the mission.

### Goal of this step
Find out:
- what the system must do
- what rules matter
- what is inside the challenge
- what is outside the challenge

### Good beginner questions
Ask questions like:
- What are the main actions the system must support?
- What kinds of users or objects are involved?
- Are there special rules or limits?
- What should happen in simple cases?
- What should happen in tricky cases?

### Example questions
If the challenge is a parking lot:
- What types of vehicles do we support?
- Do all spots fit all vehicles?
- Should we create tickets?
- Do we calculate parking fees?
- Can spaces be reserved?

### Important rule
Ask questions that make the design clearer.

Do **not** ask:
- random tiny details too early
- questions that were already answered
- extra complexity that distracts from the main mission

---

## Step 2: Identify Core Objects

Now that the mission is clearer, ask:

> What are the main things in this system?

Look for:
- important nouns
- important roles
- things with their own responsibilities

### Example
In a parking lot challenge, important nouns might be:
- ParkingLot
- ParkingSpot
- Vehicle
- Ticket

Those become strong candidates for objects.

### Best beginner strategy
Start with the most important objects first.
You do not need every tiny object on day one.

Find the objects that carry the main behavior.

### Useful question
For each object, ask:
- What does it know?
- What can it do?

---

## Step 3: Design the Blueprint and Code

Once you know the core objects, turn them into structure.

This step includes:
- class names
- attributes
- method names
- relationships
- code skeleton

There are two beginner-friendly approaches.

---

### Top-down approach

Start from the big picture first.

Ask:
- what is the whole system?
- what major parts does it contain?
- what responsibilities belong to each part?

Example:
- ParkingLot contains many ParkingSpots
- ParkingLot handles assigning a spot
- ParkingSpot handles whether it is occupied
- Ticket tracks entry time and fee

Top-down is good when:
- the system is big
- the structure matters first
- you want the architecture before details

---

### Bottom-up approach

Start from smaller useful pieces first.

Ask:
- what small objects are clearly needed?
- what can I define right now?
- how can I connect them later?

Example:
- first define Vehicle
- then define ParkingSpot
- then build ParkingLot from those smaller objects

Bottom-up is good when:
- small objects are very clear
- you want momentum quickly
- the big structure will become clearer as you build

---

### Which approach is better?

Neither one is always better.

Strong designers often mix them.

They may:
- start top-down to name the main objects
- then switch bottom-up to write classes

That is normal.

---

## Step 4: Deep Dive and Improve

Once the basic design works, step back and improve it.

Ask:
- what edge cases are missing?
- does any class have too many jobs?
- is the system easy to grow later?
- are there smart upgrades worth mentioning?

This is where you refine.

Examples:
- what if the lot is full?
- what if a bus needs multiple spots?
- what if a ticket is invalid?
- what if pricing changes by time of day?

This step is not about starting over.
It is about polishing the design you already built.

---

# The Full Framework in One View

Here is the full playbook:

## Step 1: Requirements Gathering
Understand the mission.

## Step 2: Identify Core Objects
Find the important players.

## Step 3: Design the Blueprint and Code
Turn the players into a system.

## Step 4: Deep Dive and Improve
Handle edge cases and make the design stronger.

This is the framework we will keep using.

---

# A Step-by-Step Example: Parking Lot

Now let’s walk through the framework with a full example.

---

## The Design Challenge Story

Anne is a junior software designer in a design lab.

Beth gives her this challenge:

> Design a parking lot system in 45 minutes.

The system should support:
- different vehicle types
- reserved spaces
- fee calculation

Anne does **not** rush into code.
She uses the framework.

---

## Step 1: Requirements Gathering

Anne starts by asking smart questions.

### Sample dialogue

**Anne:** What types of vehicles should the parking lot support?  
**Beth:** Cars, motorcycles, and buses.

**Anne:** Do buses need special handling?  
**Beth:** Yes. Each bus takes up three spots.

**Anne:** Should we design different kinds of parking spaces?  
**Beth:** Yes, you can decide how.

**Anne:** Should the system support reserved spaces and parking fees?  
**Beth:** Yes.

---

### Why Anne’s questions are good

Her questions:
- clarify the scope
- reveal important rules
- help the design
- do not waste time

She is learning the shape of the system.

---

### Anne summarizes the mission

After asking a few good questions, Anne restates the main job:

**Anne:** The system should support parking and unparking vehicles, track available spaces, support different vehicle types, handle reserved spaces, and calculate parking fees.

This is a strong move because it checks shared understanding.

---

### Use examples to clarify the scope

Anne also uses examples.

#### Simple example

**Anne:** A car enters, gets a space, parks for two hours, and leaves. The system should assign a spot, track the stay, and calculate the fee.

#### More complex example

**Anne:** A bus with a reservation enters. The system must find enough suitable space and still protect future availability.

Examples like these help uncover hidden rules.

---

## Step 2: Identify Core Objects

Now Anne asks:

> What are the most important things in this system?

She notices these main objects:

- ParkingLot
- ParkingSpot
- Vehicle
- Ticket

That is a strong starting set.

---

### Why these objects make sense

#### ParkingLot
Knows:
- all spots
- current availability

Does:
- find spaces
- assign spaces
- release spaces

#### ParkingSpot
Knows:
- size
- reserved status
- whether it is occupied

Does:
- canFit()
- parkVehicle()
- removeVehicle()

#### Vehicle
Knows:
- type
- license plate

Does:
- maybe report its type or parking needs

#### Ticket
Knows:
- entry time
- assigned spot
- vehicle

Does:
- calculateFee()

---

### Anne keeps the design focused

Beth asks:

**Beth:** What if the lot is full?

Anne answers:

**Anne:** Then the system should return a clear message or failure result. I’ll add that when I refine the core flow.

This is smart because Anne:
- acknowledges the edge case
- does not get derailed too early

---

## Step 3: Design the Blueprint and Code

Now Anne turns the objects into a blueprint.

---

### Blueprint view

```txt
ParkingLot
- spots
- parkVehicle()
- removeVehicle()
- findSpot()

ParkingSpot
- size
- isReserved
- isOccupied
- vehicle
- canFit()
- park()
- leave()

Vehicle
- type
- licensePlate

Ticket
- entryTime
- vehicle
- spot
- calculateFee()
```

---

### Relationship thinking

Anne explains the connections:

- ParkingLot contains many ParkingSpots
- A ParkingSpot may hold one Vehicle
- A Ticket connects a Vehicle to a ParkingSpot
- A Ticket tracks time and fee

That already gives a nice early system design.

---

### Code skeleton example

```ts
enum VehicleType {
  Car = "car",
  Motorcycle = "motorcycle",
  Bus = "bus",
}

class Vehicle {
  type: VehicleType;
  licensePlate: string;

  constructor(type: VehicleType, licensePlate: string) {
    this.type = type;
    this.licensePlate = licensePlate;
  }
}

class ParkingSpot {
  size: string;
  isReserved: boolean;
  vehicle: Vehicle | null;

  constructor(size: string, isReserved = false) {
    this.size = size;
    this.isReserved = isReserved;
    this.vehicle = null;
  }

  isOccupied(): boolean {
    return this.vehicle !== null;
  }

  canFit(vehicle: Vehicle): boolean {
    return !this.isReserved && !this.isOccupied();
  }

  park(vehicle: Vehicle): boolean {
    if (!this.canFit(vehicle)) {
      return false;
    }

    this.vehicle = vehicle;
    return true;
  }

  leave(): void {
    this.vehicle = null;
  }
}

class Ticket {
  vehicle: Vehicle;
  entryTime: number;
  spot: ParkingSpot;

  constructor(vehicle: Vehicle, spot: ParkingSpot) {
    this.vehicle = vehicle;
    this.spot = spot;
    this.entryTime = Date.now();
  }

  calculateFee(): number {
    return 10;
  }
}

class ParkingLot {
  spots: ParkingSpot[];

  constructor(spots: ParkingSpot[]) {
    this.spots = spots;
  }

  findSpot(vehicle: Vehicle): ParkingSpot | null {
    for (const spot of this.spots) {
      if (spot.canFit(vehicle)) {
        return spot;
      }
    }

    return null;
  }

  parkVehicle(vehicle: Vehicle): Ticket | null {
    const spot = this.findSpot(vehicle);

    if (spot === null) {
      return null;
    }

    spot.park(vehicle);
    return new Ticket(vehicle, spot);
  }
}
```

---

### Why this is a good first version

It is not perfect or complete.
That is okay.

It is a strong first version because:
- the core objects are clear
- responsibilities are mostly separated
- the main use case works
- future upgrades are possible

---

## Step 4: Deep Dive and Improve

Now Anne looks at the design again.

She asks:
- what is missing?
- what edge cases matter most?
- what could be improved?

### Good upgrades to mention
- handle full parking lots
- support grouped spots for buses
- support different spot sizes
- validate tickets on exit
- use different pricing rules later

Beth asks:

**Beth:** What if pricing changes by time of day?

Anne says:

**Anne:** I would likely separate fee calculation into its own pricing rule object later, so the Ticket does not need to know every pricing style.

That is a great improvement idea.

---

### Anne’s summary

At the end, Anne gives a clean summary:

**Anne:** This design supports parking and unparking vehicles, tracks spaces, handles tickets, and leaves room for extensions like grouped bus parking and better pricing rules.

That kind of summary helps others understand the whole design quickly.

---

# What If the Design Challenge Doesn’t Go as Planned?

Real design challenges are messy.
That is normal.

Here are common problems and how to handle them.

---

## 1. The requirements keep changing

Sometimes new rules appear in the middle of the challenge.

Example:
- “Now add reserved spots.”
- “Now buses need grouped spaces.”
- “Now support dynamic pricing.”

### What to do
- stay calm
- explain what changes
- update the design without throwing everything away

Good response:
> “My current design handles the core flow. I would extend ParkingSpot and assignment logic to support that new requirement.”

That shows flexibility.

---

## 2. You get pulled too deep too early

Sometimes someone asks for tiny details before the big picture is ready.

### What to do
Say something like:
> “I’ll first finish the high-level design, then I can zoom into that part.”

That helps protect your structure and your time.

---

## 3. Your explanation gets messy

Sometimes you know what you mean, but it comes out jumbled.

### What to do
Use this reset move:

1. restate the mission
2. list the main objects
3. explain one use case
4. connect the objects

That brings clarity back.

---

## 4. Someone challenges your design choices

This is normal.

It does not always mean you are wrong.

### What to do
Explain:
- what choice you made
- why you made it
- what trade-off it has
- what another possible choice could be

Good response:
> “I chose to keep fee calculation in Ticket for the first version because it keeps the example simple, but I could move pricing into its own strategy object if the rules become more complex.”

That is mature design thinking.

---

## 5. You are unsure how detailed to be

### What to do
Start with:
- simple blueprint
- core objects
- one main use case

Then add detail only when needed.

It is easier to zoom in later than to escape from too much detail too soon.

---

## 6. You realize your first design has a flaw

That is okay.

### What to do
Say:
> “I see a better design now. I’d like to adjust this class so responsibilities are clearer.”

Good designers revise.
That is a strength, not a weakness.

---

## 7. Advanced topic: concurrency

Middle school students do not need to go deep on this yet, but it is helpful to know the basic idea.

**Concurrency** means:
- multiple users or actions happening at the same time

Example:
- two people try to book the same movie seat at once

A strong high-level answer is:
> “The system would need a way to lock or reserve the seat so two people cannot grab it at the same time.”

At this stage, that level of understanding is enough.

---

# A Simple Design Challenge Checklist

Here is the checklist students can reuse later.

## Before designing
- What is the mission?
- What are the must-have actions?
- What rules matter?

## While identifying objects
- What are the important things in the story?
- What does each one know?
- What can each one do?

## While building
- Are responsibilities split clearly?
- Does any class have too many jobs?
- Can I explain the main use case step by step?

## Before finishing
- What edge cases matter most?
- What would I improve next?
- Can I summarize the design clearly?

---

# Chapter Review

## What you learned

In this chapter, you learned that strong Object Oriented Design begins with a process, not with random coding.

You learned:

- design challenges can appear as blueprints, code skeletons, or working code
- requirements gathering helps define the mission clearly
- identifying core objects helps reveal the system’s building blocks
- class design turns those objects into structure
- deep-dive thinking helps refine the design
- strong designers stay flexible when the problem changes

---

## The 4-step framework

### Step 1: Requirements Gathering
Understand the system clearly.

### Step 2: Identify Core Objects
Find the main things in the problem.

### Step 3: Design the Blueprint and Code
Turn those things into classes, attributes, methods, and relationships.

### Step 4: Deep Dive and Improve
Handle edge cases, trade-offs, and upgrades.

---

## Strong habits to remember

- do not rush into code
- ask smart questions
- focus on core objects first
- use examples to test your thinking
- explain your design choices
- improve the design after the first version works

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

A design framework helps you solve a problem one ________ at a time.

**Answer:** step

---

## 2. True or False

It is always best to start coding immediately before asking any questions.

**Answer:** False

---

## 3. Short Answer

What is the goal of requirements gathering?

**Answer:** To understand what the system must do, what rules matter, and what the challenge is really asking for.

---

## 4. Short Answer

What are “core objects”?

**Answer:** The most important things in the system that carry the main responsibilities and behaviors.

---

## 5. Fill in the blank

A code skeleton is the ________ structure of the system before every detail is finished.

**Answer:** basic

---

## 6. Mini Design Challenge

A school wants a simple library system.

Name 3 likely core objects.

One possible answer:
- Library
- Book
- Member

---

## 7. Mini Design Challenge

Why is it useful to summarize your design before finishing?

**Sample answer:** It helps make the big picture clear, shows that the main goals are covered, and gives others a clean understanding of the system.

---

# Practice Prompts

Try these with the framework:

1. Design a school locker system.
2. Design a pet adoption center.
3. Design a simple arcade game machine.
4. Design a bike rental station.

For each one, ask:
- What is the mission?
- What are the core objects?
- What does each object know and do?
- What is one main use case?
- What edge case should I think about?

---

# Friendly Wrap-up

This chapter teaches one of the most important design lessons:

> Big design problems become much easier  
> when you stop trying to solve everything at once.

That is what a framework does.

The more you practice this process, the more you will notice:

- how smart questions save time
- how core objects shape the whole system
- how a blueprint makes coding easier
- how even tricky design problems become manageable step by step

Next, we will go deeper into **OOD fundamentals**, where we will learn the most important design building blocks like encapsulation, inheritance, composition, and responsibility.
