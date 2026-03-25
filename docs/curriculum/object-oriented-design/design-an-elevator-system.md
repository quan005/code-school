---
title: "Design an Elevator System"
chapterSlug: "design-an-elevator-system"
order: 8
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 125
skills:
  - "Turn an elevator problem into objects with clear responsibilities"
  - "Design a system using ElevatorSystem, Elevator, Request, and Door classes"
  - "Think about movement, requests, direction, and safety rules"
  - "Write a clean TypeScript code skeleton for a coordinated system"
---

# Design an Elevator System

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: An elevator system is easier to design when we separate requests, movement, doors, and control decisions into different objects.

---

# Chapter Overview

An elevator seems simple when you use it.

You press a button.
The elevator comes.
The doors open.
You go to your floor.

But underneath, an elevator system has to manage a lot:

- floors
- button requests
- direction
- doors
- current location
- multiple elevators
- safety rules
- deciding which elevator should respond

That makes elevators a fantastic Object Oriented Design challenge.

This chapter helps students practice:
- state
- control flow
- requests
- coordination between objects
- designing for future upgrades

In this chapter, we will learn:

1. **Understand the Mission**
2. **Gather Requirements**
3. **Identify Core Objects**
4. **Design the Blueprint**
5. **Make Key Design Decisions**
6. **Build the TypeScript Code Skeleton**
7. **Walk Through Core Use Cases**
8. **Handle Edge Cases**
9. **Upgrade the System**
10. **Chapter Review**
11. **Mastery Check**

---

# 1. Understand the Mission

## The design challenge

Design an elevator system.

The system should support:
- multiple floors
- at least one elevator
- outside requests (up/down buttons on floors)
- inside requests (floor buttons inside the elevator)
- moving the elevator
- opening and closing doors
- stopping at the right floor

For a first version, we will design:
- one building
- multiple elevators
- basic request handling
- simple assignment logic

---

## Why this is a strong OOD challenge

An elevator system is a strong design problem because it includes:

- real moving objects
- requests happening over time
- decisions about direction
- coordination
- state changes
- safety ideas
- upgrade possibilities

It also teaches a powerful design lesson:

> Some systems are not just about storing data.  
> They are about reacting to events and making decisions over time.

That makes this an excellent next step in OOD.

---

# 2. Gather Requirements

Before building, we should understand the mission clearly.

## Core requirements

Our elevator system should:

1. Support multiple floors
2. Support one or more elevators
3. Allow a floor to request an elevator
4. Allow passengers inside to choose destination floors
5. Move elevators up and down
6. Open and close doors at the right time
7. Track current floor and direction
8. Stop when there are no more requests

---

## Clarifying questions

A strong designer asks smart questions before coding.

For this system, good questions include:

- How many elevators are in the building?
- Should floor requests say “up” or “down”?
- Should elevators track inside requests separately from outside requests?
- How do we choose which elevator answers a request?
- Should doors be their own object?
- What happens if two people press buttons at almost the same time?
- Do we need overload or emergency logic in version 1?

For our chapter, we will choose:

- the building can have multiple elevators
- floor requests include a direction
- an elevator tracks destination requests
- the system assigns a request to the nearest idle elevator first
- doors will be modeled as their own object
- requests are handled in a simple queue/set style
- overload and emergency logic will be future upgrades

---

## A simple use case

A student on floor 3 wants to go up.

The system should:
1. record an outside request on floor 3
2. choose an elevator
3. send the elevator to floor 3
4. open the door when it arrives
5. allow the student to press floor 7
6. move the elevator to floor 7
7. open the door at floor 7

That is the main flow.

---

## A more complex use case

Now imagine:
- one elevator is already moving up
- another elevator is idle
- two requests appear from different floors

The system must decide:
- which elevator should answer which request
- how to track multiple stops
- how to avoid confusion

That makes the design much more interesting.

---

# 3. Identify Core Objects

Now let’s ask:

> What are the main things in this system?

A strong starting set is:

- `ElevatorSystem`
- `Elevator`
- `Request`
- `Door`

We may also add:
- `FloorPanel`
- `ElevatorPanel`
- `Building`
- `Direction`
- `ElevatorStatus`

But the first four are the backbone.

---

## Object 1: ElevatorSystem

### The ElevatorSystem knows:
- all elevators
- number of floors

### The ElevatorSystem can:
- receive outside requests
- choose which elevator should answer a request
- send requests to elevators

This is the main coordinator.

---

## Object 2: Elevator

### The Elevator knows:
- its id
- current floor
- direction
- pending destination floors
- whether its door is open or closed

### The Elevator can:
- move up
- move down
- open door
- close door
- add destination requests
- stop at the correct floor

This is the heart of the moving system.

---

## Object 3: Request

### The Request knows:
- the source floor
- the direction
- maybe later the destination floor

### The Request can:
- describe a call for service

This object helps keep requests clear and organized.

---

## Object 4: Door

### The Door knows:
- whether it is open

### The Door can:
- open
- close

This may seem simple, but it is a useful separate object because doors have their own state and safety role.

---

## Why these objects are strong

These objects are strong because:

- `ElevatorSystem` coordinates the whole building
- `Elevator` handles elevator behavior
- `Request` represents a real call for service
- `Door` owns door state

That is much cleaner than making one huge class do everything.

---

# 4. Design the Blueprint

Now let’s sketch the system.

## Object cards

### ElevatorSystem
Knows:
- elevators
- totalFloors

Does:
- requestElevator()
- assignElevator()
- stepSystem()

### Elevator
Knows:
- id
- currentFloor
- direction
- destinationFloors
- door

Does:
- addDestination()
- moveOneStep()
- openDoor()
- closeDoor()
- hasPendingRequests()

### Request
Knows:
- floor
- direction

Does:
- describe itself

### Door
Knows:
- isOpen

Does:
- open()
- close()

---

## UML-lite blueprint

```txt
ElevatorSystem
- elevators
- totalFloors
- requestElevator()
- assignElevator()
- stepSystem()

Elevator
- id
- currentFloor
- direction
- destinationFloors
- door
- addDestination()
- moveOneStep()
- openDoor()
- closeDoor()
- hasPendingRequests()

Request
- floor
- direction

Door
- isOpen
- open()
- close()
```

---

## Relationship thinking

- An `ElevatorSystem` has many `Elevator`s
- An `Elevator` has one `Door`
- An `ElevatorSystem` receives `Request`s
- An `Elevator` stores destination floors

This is mostly **composition**:
- system has elevators
- elevator has door

---

# 5. Make Key Design Decisions

Before coding, let’s make a few smart design choices.

---

## Choice 1: Track direction with an enum

This makes the system cleaner and easier to read.

We can use:
- `Up`
- `Down`
- `Idle`

That is much clearer than random strings.

---

## Choice 2: Let Elevator own movement

The elevator itself should know how to:
- move one floor
- decide whether it has reached a stop
- open or close the door

That is a natural responsibility.

---

## Choice 3: Let ElevatorSystem assign elevators

The system sees all elevators, so it should decide:
- which one should answer an outside request

This is a strong coordinator role.

---

## Choice 4: Keep assignment simple in version 1

Real elevator scheduling is very advanced.

For a beginner version, we will use a simple rule:

- choose the nearest idle elevator if one exists
- otherwise choose the first elevator

That gives us a working design without too much complexity.

---

## Choice 5: Track destination floors inside Elevator

Each elevator needs its own list or set of requested stops.

That lets it move floor by floor and stop where needed.

---

# 6. TypeScript Code Skeleton

Here is a clean first version.

```ts
enum Direction {
  Up = "up",
  Down = "down",
  Idle = "idle",
}

class Door {
  isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }
}

class Request {
  floor: number;
  direction: Direction;

  constructor(floor: number, direction: Direction) {
    this.floor = floor;
    this.direction = direction;
  }
}

class Elevator {
  id: string;
  currentFloor: number;
  direction: Direction;
  destinationFloors: Set<number>;
  door: Door;

  constructor(id: string, startingFloor = 1) {
    this.id = id;
    this.currentFloor = startingFloor;
    this.direction = Direction.Idle;
    this.destinationFloors = new Set();
    this.door = new Door();
  }

  addDestination(floor: number): void {
    if (floor !== this.currentFloor) {
      this.destinationFloors.add(floor);
    }
  }

  hasPendingRequests(): boolean {
    return this.destinationFloors.size > 0;
  }

  openDoor(): void {
    this.door.open();
  }

  closeDoor(): void {
    this.door.close();
  }

  private getNextTarget(): number | null {
    if (this.destinationFloors.size === 0) {
      return null;
    }

    const floors = Array.from(this.destinationFloors);
    floors.sort((a, b) => a - b);

    if (this.direction === Direction.Down) {
      floors.reverse();
    }

    return floors[0];
  }

  moveOneStep(): void {
    if (!this.hasPendingRequests()) {
      this.direction = Direction.Idle;
      return;
    }

    this.closeDoor();

    const target = this.getNextTarget();

    if (target === null) {
      this.direction = Direction.Idle;
      return;
    }

    if (this.currentFloor < target) {
      this.currentFloor++;
      this.direction = Direction.Up;
    } else if (this.currentFloor > target) {
      this.currentFloor--;
      this.direction = Direction.Down;
    }

    if (this.currentFloor === target) {
      this.destinationFloors.delete(target);
      this.direction = this.destinationFloors.size === 0 ? Direction.Idle : this.direction;
      this.openDoor();
    }
  }
}

class ElevatorSystem {
  elevators: Elevator[];
  totalFloors: number;

  constructor(elevators: Elevator[], totalFloors: number) {
    this.elevators = elevators;
    this.totalFloors = totalFloors;
  }

  requestElevator(request: Request): Elevator | null {
    const elevator = this.assignElevator(request);

    if (elevator === null) {
      return null;
    }

    elevator.addDestination(request.floor);
    return elevator;
  }

  assignElevator(request: Request): Elevator | null {
    let bestElevator: Elevator | null = null;
    let bestDistance = Infinity;

    for (const elevator of this.elevators) {
      if (elevator.direction === Direction.Idle) {
        const distance = Math.abs(elevator.currentFloor - request.floor);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestElevator = elevator;
        }
      }
    }

    if (bestElevator !== null) {
      return bestElevator;
    }

    if (this.elevators.length > 0) {
      return this.elevators[0];
    }

    return null;
  }

  stepSystem(): void {
    for (const elevator of this.elevators) {
      elevator.moveOneStep();
    }
  }
}
```

---

# 7. Walk Through the Core Flow

Let’s simulate a simple system.

```ts
const elevator1 = new Elevator("E1", 1);
const elevator2 = new Elevator("E2", 5);

const system = new ElevatorSystem([elevator1, elevator2], 10);
```

Now a request appears on floor 3 going up.

```ts
const request = new Request(3, Direction.Up);
const assigned = system.requestElevator(request);
```

What should happen?

1. The system checks idle elevators
2. Elevator 1 is at floor 1, distance 2
3. Elevator 2 is at floor 5, distance 2
4. The system picks one based on the assignment rule
5. That elevator adds floor 3 to its destinations

That is the outside request flow.

---

## Then the elevator starts moving

```ts
system.stepSystem();
system.stepSystem();
```

If the assigned elevator starts at floor 1:

- first step -> floor 2
- second step -> floor 3

When it reaches floor 3:
- it removes that destination
- it opens the door

That is the arrival flow.

---

## Then a rider chooses floor 7

Inside the elevator:

```ts
assigned?.addDestination(7);
```

Now the elevator should:
- close the door
- move upward
- stop at floor 7
- open the door there

That is the inside request flow.

---

# 8. Walk Through a Multi-Elevator Case

Now imagine:
- elevator 1 is idle at floor 1
- elevator 2 is idle at floor 8
- a request happens on floor 7

The system should choose the nearer idle elevator.

That would likely be elevator 2.

This shows why the system object is useful:
- it can compare elevators
- it can choose intelligently

That is a strong coordinator role.

---

# 9. Edge Cases to Handle

Strong designers ask:
- what can go wrong?
- what rules matter?

---

## Edge Case 1: Request for an invalid floor

If someone requests floor 0 or floor 99 in a 10-floor building, the request should be rejected.

A stronger version of the system should validate:
- floor >= 1
- floor <= totalFloors

That would be a good improvement.

---

## Edge Case 2: Elevator already at the requested floor

If the elevator is already at floor 3 and gets a request for floor 3:
- it may just open the door instead of moving

Our first version can be improved to support that behavior more directly.

---

## Edge Case 3: Multiple requests in one elevator

An elevator may need to stop at:
- floor 3
- floor 6
- floor 8

That means the elevator must store multiple destinations and serve them over time.

Our design already supports multiple destinations with a set.

---

## Edge Case 4: Doors left open forever

A real system should manage door timing.

Our simple version opens the door at a destination, but a more advanced version would include:
- open duration
- automatic close
- obstacle checking

That would be a good upgrade.

---

## Edge Case 5: No elevators available

If the system has zero elevators, it should fail safely.

Our first version returns `null` if no elevator can be assigned.

---

# 10. Safety Thinking

Elevator systems are a good place to introduce safety thinking.

A real elevator should care about:
- not moving while doors are open
- not opening between floors
- not exceeding capacity
- emergency stop handling

Our beginner design does not go deep into these yet, but it is important to say:

> Strong real-world systems often need safety rules on top of normal features.

That is an important design idea.

---

# 11. Upgrade Ideas

Once the core design works, we can improve it.

---

## Upgrade 1: FloorPanel and ElevatorPanel

We could add:
- `FloorPanel`
- `ElevatorPanel`

These would model the physical buttons.

### FloorPanel
Does:
- requestUp()
- requestDown()

### ElevatorPanel
Does:
- pressFloorButton()

That would make the system feel more realistic.

---

## Upgrade 2: Better elevator scheduling

Right now assignment is simple.

A stronger version could choose elevators based on:
- current direction
- current path
- least extra travel
- wait time

That would make the system smarter.

---

## Upgrade 3: Capacity and weight

We could add:
- max passengers
- current load
- overload handling

That would be a realistic safety extension.

---

## Upgrade 4: Emergency mode

We could add:
- emergency stop
- fire alarm mode
- maintenance mode

That would make the design more advanced.

---

## Upgrade 5: Door timer

We could make doors:
- open for a few seconds
- close automatically
- reopen if blocked

That would make `Door` even more important.

---

## Upgrade 6: Building object

We could add:
- `Building`

This object might own:
- floors
- elevator system
- building rules

That would make the system feel even more complete.

---

# 12. Why This Design Is Strong

This design is strong because:

- responsibilities are clearly separated
- `ElevatorSystem` coordinates assignments
- `Elevator` owns elevator behavior
- `Door` owns door state
- `Request` represents a real service call
- the design supports multiple elevators
- the system can grow naturally

This is what strong beginner OOD looks like:
- clear
- coordinated
- extendable

---

# 13. Common Beginner Mistakes

## Mistake 1: One giant ElevatorSystem class does everything

Bad design:
- system stores all requests
- system moves elevators
- system manages doors
- system handles safety
- system handles panels
- system handles everything

That becomes huge and messy.

Better:
- let `Elevator` own elevator behavior
- let `Door` own door state
- let `ElevatorSystem` coordinate at a higher level

---

## Mistake 2: Elevator does not store its own destinations

If destination logic lives only outside the elevator, the design becomes harder to reason about.

An elevator should naturally know:
- where it still needs to go

---

## Mistake 3: Ignoring state

Elevator systems are very state-based.

You need to know:
- current floor
- direction
- whether there are pending requests
- whether the door is open

Ignoring that makes the system weak.

---

## Mistake 4: Forgetting about safety rules

Even in a beginner design, it helps to mention:
- doors
- movement timing
- invalid floors
- overload ideas

That shows system thinking.

---

# Chapter Review

## What you learned

In this chapter, you learned how to design an elevator system as an object-oriented system.

You learned how to:

- gather requirements
- identify core objects
- separate requests, movement, and door behavior
- design a blueprint
- build a TypeScript code skeleton
- simulate outside and inside requests
- think about edge cases, safety, and upgrades

---

## Main objects in this design

### ElevatorSystem
Owns:
- building-level coordination
- request assignment
- stepping the whole system

### Elevator
Owns:
- current floor
- direction
- pending destinations
- movement behavior

### Request
Owns:
- floor
- direction

### Door
Owns:
- open/closed state

---

## Strong design lesson

This chapter teaches an important OOD lesson:

> Good control systems work better  
> when one object coordinates the big picture  
> and smaller objects handle local behavior.

That is a very powerful design pattern.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In this design, the `ElevatorSystem` handles request ________, while each `Elevator` handles its own movement and ________.

**Answer:** assignment, destinations

---

## 2. True or False

A `Door` is a useful separate object even though it seems simple.

**Answer:** True

Because it has its own state and rules.

---

## 3. Short Answer

Why is `ElevatorSystem.assignElevator()` useful?

**Answer:** Because the system can compare all elevators and choose which one should answer a request.

---

## 4. Short Answer

Why is an elevator system a good OOD challenge?

**Answer:** Because it has requests, movement, direction, coordination, changing state, and realistic upgrade ideas.

---

## 5. Fill in the blank

An `Elevator` has a `Door`, which means this is an example of ________.

**Answer:** composition

---

## 6. Mini Design Challenge

What object would you add if you wanted actual floor buttons outside the elevator?

One good answer:
- `FloorPanel`

---

## 7. Mini Design Challenge

What object would you add if you wanted weight limits and overload protection?

One good answer:
- `CapacityMonitor`

or a load-related object inside `Elevator`

---

# Practice Prompts

Try these on your own:

1. Add a `FloorPanel` class.
2. Add an `ElevatorPanel` class.
3. Add invalid floor checking.
4. Add overload handling.
5. Design a smarter elevator assignment rule.

---

# Friendly Wrap-up

This chapter shows how a real movement-based system can be designed step by step:

- understand the mission
- ask smart questions
- find the core objects
- separate coordination from local behavior
- build the blueprint
- create the code skeleton
- test real use cases
- improve the design with safety and upgrades

That is real Object Oriented Design.

Next, we will design another real-world system: **Design a Grocery Store System**.
