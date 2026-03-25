---
title: "Design a Parking Lot"
chapterSlug: "design-a-parking-lot"
order: 5
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 120
skills:
  - "Turn a real-world parking problem into objects and responsibilities"
  - "Design a system using ParkingLot, ParkingSpot, Vehicle, and Ticket classes"
  - "Separate core flow from edge cases and upgrades"
  - "Write a clean TypeScript code skeleton for a multi-object system"
---

# Design a Parking Lot

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: A parking lot system becomes much easier to design when we break it into clear objects with clear jobs.

---

# Chapter Overview

A parking lot looks simple at first.

Cars come in.
Cars park.
Cars leave.

But once we think harder, the system gets more interesting.

We may need to support:
- different vehicle types
- different parking spot sizes
- reserved spaces
- tickets
- parking fees
- full-lot situations

That makes a parking lot a great Object Oriented Design challenge.

It is a strong next step after Tic Tac Toe because:
- it is more like a real-world system
- it has multiple object types
- it has rules and edge cases
- it gives us room to improve the design over time

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

Design a parking lot system.

The system should support:
- parking vehicles
- removing vehicles
- tracking available spots
- creating tickets
- calculating parking fees

It should also support different vehicle types.

For our first version, we will include:
- cars
- motorcycles
- buses

We will also think about:
- reserved spaces
- spot sizes
- what happens when the lot is full

---

## Why this is a strong OOD challenge

A parking lot is a great system design problem because it includes:

- objects with different responsibilities
- rules about what fits where
- state changes over time
- real-world edge cases
- natural extension ideas

It also teaches an important design lesson:

> A system can look simple from the outside,  
> but still need a smart internal design.

---

# 2. Gather Requirements

Before we build classes, we should understand the rules.

## Core requirements

Our parking lot should:

1. Support different vehicle types
2. Support different spot types or sizes
3. Find a valid space for a vehicle
4. Mark a spot as occupied when a vehicle parks
5. Mark a spot as available when the vehicle leaves
6. Create a ticket when a vehicle parks
7. Calculate a fee when the vehicle exits
8. Reject parking if no valid space is available

---

## Clarifying questions

A strong designer asks questions before coding.

For a parking lot, good questions include:

- What vehicle types should we support?
- Do different vehicles need different kinds of spaces?
- Can buses use just one big space, or multiple smaller spaces?
- Should some spots be reserved?
- How do we calculate fees?
- Should we track time on the ticket?
- What happens if the lot is full?

For our chapter, we will choose these answers:

- support cars, motorcycles, and buses
- different spaces have different sizes
- buses need larger parking space support in version 1
- reserved spots exist and should not be given away casually
- each parked vehicle gets a ticket
- ticket tracks entry time
- parking fee depends on vehicle type and time
- if no spot fits, the system returns failure

---

## A simple use case

A car enters the lot.

The system should:
1. find a valid available spot
2. park the car
3. mark the spot as occupied
4. create a ticket

Later, when the car exits, the system should:
1. find the ticket
2. calculate the fee
3. remove the car from the spot
4. mark the spot as available again

That is the core flow.

---

## A more complex use case

Now imagine a bus enters.

The system must:
- decide whether there is a suitable place for a bus
- avoid using a spot that is too small
- avoid using a reserved spot incorrectly
- still protect future availability as much as possible

This helps us see that a parking lot is not just “store cars in a list.”

It is a system with rules.

---

# 3. Identify Core Objects

Now we ask:

> What are the main things in this system?

A strong starting set is:

- `ParkingLot`
- `ParkingSpot`
- `Vehicle`
- `Ticket`

We may also add:
- `VehicleType`
- `SpotSize`
- `PricingRule`
- `ParkingResult`

But the first four are the backbone.

---

## Object 1: ParkingLot

### The ParkingLot knows:
- all parking spots
- which spots are available
- maybe how pricing works

### The ParkingLot can:
- find a spot for a vehicle
- park a vehicle
- unpark a vehicle
- report availability

The ParkingLot is the system manager for overall parking flow.

---

## Object 2: ParkingSpot

### The ParkingSpot knows:
- its id
- its size
- whether it is reserved
- whether it is occupied
- which vehicle is currently parked there

### The ParkingSpot can:
- decide if a vehicle fits
- accept a vehicle
- remove a vehicle

A ParkingSpot should own its own availability state.

---

## Object 3: Vehicle

### The Vehicle knows:
- its type
- its license plate

### The Vehicle can:
- report its type
- maybe tell what size spot it needs

A vehicle represents the thing entering and leaving the lot.

---

## Object 4: Ticket

### The Ticket knows:
- ticket id
- vehicle
- assigned spot
- entry time

### The Ticket can:
- calculate or help calculate parking fee
- describe the parking session

The Ticket links a parked vehicle to a spot and a parking session.

---

## Why these objects are strong

These are strong objects because they each own real behavior.

- `ParkingLot` manages parking flow
- `ParkingSpot` manages spot state
- `Vehicle` describes the incoming object
- `Ticket` tracks the parking session

That is much better than stuffing everything into one giant class.

---

# 4. Design the Blueprint

Now let’s sketch the system.

## Object cards

### ParkingLot
Knows:
- spots

Does:
- findSpot()
- parkVehicle()
- unparkVehicle()
- countAvailableSpots()

### ParkingSpot
Knows:
- id
- size
- reserved
- currentVehicle

Does:
- canFit()
- park()
- leave()
- isOccupied()

### Vehicle
Knows:
- type
- licensePlate

Does:
- getRequiredSpotSize()

### Ticket
Knows:
- ticketId
- vehicle
- spot
- entryTime

Does:
- calculateFee()

---

## UML-lite blueprint

```txt
ParkingLot
- spots
- findSpot()
- parkVehicle()
- unparkVehicle()
- countAvailableSpots()

ParkingSpot
- id
- size
- reserved
- currentVehicle
- canFit()
- park()
- leave()
- isOccupied()

Vehicle
- type
- licensePlate
- getRequiredSpotSize()

Ticket
- ticketId
- vehicle
- spot
- entryTime
- calculateFee()
```

---

## Relationship thinking

- A `ParkingLot` has many `ParkingSpot`s
- A `ParkingSpot` may hold one `Vehicle`
- A `Ticket` connects a `Vehicle` to a `ParkingSpot`
- A `ParkingLot` creates a `Ticket` when parking succeeds

These are mostly **composition** and **association** relationships.

---

# 5. Make Key Design Decisions

Before writing code, let’s choose how the design should behave.

---

## Choice 1: Use enums for vehicle type and spot size

This makes the system easier to read.

We can use:
- `VehicleType.Car`
- `VehicleType.Motorcycle`
- `VehicleType.Bus`

and:
- `SpotSize.Small`
- `SpotSize.Medium`
- `SpotSize.Large`

That is cleaner than random strings everywhere.

---

## Choice 2: Let Vehicle tell us what kind of spot it needs

This is a good responsibility choice.

A `Vehicle` should know what kind of parking space it needs.

That way the `ParkingSpot` can ask:

> “Can I fit this vehicle?”

without needing too much extra logic outside.

---

## Choice 3: Let ParkingSpot own fit logic and occupancy

A spot should know:
- whether it is empty
- whether it is reserved
- whether a certain vehicle can fit

That makes `ParkingSpot` a smart object instead of just a bag of data.

---

## Choice 4: Let ParkingLot search for a space

The lot sees all spots, so it is the right object to:
- search
- choose
- assign

That makes `ParkingLot` the coordinator.

---

## Choice 5: Keep fee calculation simple in version 1

In our first version:
- motorcycles cost less
- cars cost medium
- buses cost more

Later we could move pricing into a separate pricing strategy object.

For now, keeping fee calculation in `Ticket` is okay for a beginner-friendly version.

---

# 6. TypeScript Code Skeleton

Here is a clean first version.

```ts
enum VehicleType {
  Motorcycle = "motorcycle",
  Car = "car",
  Bus = "bus",
}

enum SpotSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

class Vehicle {
  type: VehicleType;
  licensePlate: string;

  constructor(type: VehicleType, licensePlate: string) {
    this.type = type;
    this.licensePlate = licensePlate;
  }

  getRequiredSpotSize(): SpotSize {
    if (this.type === VehicleType.Motorcycle) {
      return SpotSize.Small;
    }

    if (this.type === VehicleType.Car) {
      return SpotSize.Medium;
    }

    return SpotSize.Large;
  }
}

class ParkingSpot {
  id: string;
  size: SpotSize;
  reserved: boolean;
  currentVehicle: Vehicle | null;

  constructor(id: string, size: SpotSize, reserved = false) {
    this.id = id;
    this.size = size;
    this.reserved = reserved;
    this.currentVehicle = null;
  }

  isOccupied(): boolean {
    return this.currentVehicle !== null;
  }

  canFit(vehicle: Vehicle): boolean {
    if (this.reserved) {
      return false;
    }

    if (this.isOccupied()) {
      return false;
    }

    const needed = vehicle.getRequiredSpotSize();

    if (needed === SpotSize.Small) {
      return true;
    }

    if (needed === SpotSize.Medium) {
      return this.size === SpotSize.Medium || this.size === SpotSize.Large;
    }

    return this.size === SpotSize.Large;
  }

  park(vehicle: Vehicle): boolean {
    if (!this.canFit(vehicle)) {
      return false;
    }

    this.currentVehicle = vehicle;
    return true;
  }

  leave(): void {
    this.currentVehicle = null;
  }
}

class Ticket {
  ticketId: string;
  vehicle: Vehicle;
  spot: ParkingSpot;
  entryTime: number;

  constructor(ticketId: string, vehicle: Vehicle, spot: ParkingSpot) {
    this.ticketId = ticketId;
    this.vehicle = vehicle;
    this.spot = spot;
    this.entryTime = Date.now();
  }

  calculateFee(exitTime: number = Date.now()): number {
    const hoursParked = Math.max(1, Math.ceil((exitTime - this.entryTime) / (1000 * 60 * 60)));

    if (this.vehicle.type === VehicleType.Motorcycle) {
      return hoursParked * 2;
    }

    if (this.vehicle.type === VehicleType.Car) {
      return hoursParked * 5;
    }

    return hoursParked * 10;
  }
}

class ParkingLot {
  spots: ParkingSpot[];
  nextTicketNumber: number;

  constructor(spots: ParkingSpot[]) {
    this.spots = spots;
    this.nextTicketNumber = 1;
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

    const parked = spot.park(vehicle);

    if (!parked) {
      return null;
    }

    const ticket = new Ticket(
      `T-${this.nextTicketNumber}`,
      vehicle,
      spot
    );

    this.nextTicketNumber++;
    return ticket;
  }

  unparkVehicle(ticket: Ticket): number {
    ticket.spot.leave();
    return ticket.calculateFee();
  }

  countAvailableSpots(): number {
    let count = 0;

    for (const spot of this.spots) {
      if (!spot.isOccupied() && !spot.reserved) {
        count++;
      }
    }

    return count;
  }
}
```

---

# 7. Walk Through the Core Flow

Now let’s simulate a simple parking story.

```ts
const lot = new ParkingLot([
  new ParkingSpot("S1", SpotSize.Small),
  new ParkingSpot("M1", SpotSize.Medium),
  new ParkingSpot("L1", SpotSize.Large),
]);

const car = new Vehicle(VehicleType.Car, "CAR-101");
const ticket = lot.parkVehicle(car);
```

What should happen?

1. The lot checks all spots
2. Small spot is too small for the car
3. Medium spot fits
4. The car parks in `M1`
5. A ticket is created

That is the main use case working.

---

## Later, the car leaves

```ts
if (ticket !== null) {
  const fee = lot.unparkVehicle(ticket);
  console.log(fee);
}
```

What happens?

1. The system finds the ticket’s spot
2. The spot is cleared
3. The fee is calculated
4. The available spot count increases

That is a full park/unpark cycle.

---

# 8. Walk Through a More Complex Case

Now let’s test a bus.

```ts
const bus = new Vehicle(VehicleType.Bus, "BUS-77");
const busTicket = lot.parkVehicle(bus);
```

The bus needs a large spot.

So:
- small spot -> no
- medium spot -> no
- large spot -> yes

If the large spot is taken or reserved, parking fails.

That shows why spot size matters.

---

# 9. Edge Cases to Handle

Strong designers always ask:
- what can go wrong?
- what special cases matter?

---

## Edge Case 1: The lot is full

If no valid spot exists:
- `findSpot()` returns `null`
- `parkVehicle()` returns `null`

That is a clear failure signal.

---

## Edge Case 2: A spot is reserved

If a spot is reserved:
- it should not be given away by the regular search

Our current version blocks reserved spots in `canFit()`.

That works for version 1.

Later we could add special reservation logic.

---

## Edge Case 3: Wrong-sized parking

A bus should not fit in a medium spot.
A car should not fit in a small spot.

That is why spot-size logic matters.

---

## Edge Case 4: Invalid ticket on exit

A more advanced version should check:
- is this ticket real?
- is this ticket already used?
- does the spot still match?

Our first version keeps this simple, but that would be a good upgrade.

---

## Edge Case 5: Parking the same vehicle twice

A stronger system might also track:
- whether a vehicle is already in the lot

Our first version does not yet prevent duplicate parking sessions for the same license plate.

That could be an improvement.

---

# 10. Upgrade Ideas

Once the basic design works, we can make it smarter.

---

## Upgrade 1: Vehicle subclasses

Right now we use one `Vehicle` class with a type field.

Later, we could use inheritance:

- `Motorcycle extends Vehicle`
- `Car extends Vehicle`
- `Bus extends Vehicle`

That could make behavior more specific.

---

## Upgrade 2: Better pricing rules

Right now fee calculation is simple.

Later we could add a `PricingRule` object.

Example:

```txt
PricingRule
- calculate(vehicle, hours)
```

That would keep pricing logic separate from Ticket.

This is a strong upgrade if pricing gets more complicated.

---

## Upgrade 3: Floors and sections

A real parking lot may have:
- multiple floors
- sections
- special zones

We could add:
- `ParkingFloor`
- `ParkingSection`

Then `ParkingLot` would contain floors, and floors would contain spots.

---

## Upgrade 4: Bus grouping logic

In a more advanced version, a bus might need:
- three connected large spots
- or a special bus zone

That would make search logic more advanced and more realistic.

---

## Upgrade 5: Reservation system

We could add:
- `Reservation`
- reserved vehicle matching
- time-limited reservations

That would be a fun future extension.

---

## Upgrade 6: Ticket registry

We could store active tickets inside `ParkingLot`.

Then the lot could:
- validate tickets
- prevent duplicate exits
- look up sessions by ticket id

That would make the system stronger.

---

# 11. Why This Design Is Strong

This design is strong because:

- responsibilities are separated
- `ParkingLot` handles the overall flow
- `ParkingSpot` handles fit and occupancy
- `Vehicle` handles vehicle identity and required size
- `Ticket` handles session tracking and fee calculation
- the system works for the core use cases
- future upgrades fit naturally

This is what good beginner OOD looks like:
- clear
- practical
- extendable

---

# 12. Common Beginner Mistakes

## Mistake 1: One giant ParkingLot class does everything

Bad version:
- ParkingLot stores vehicles
- ParkingLot stores spots
- ParkingLot checks size
- ParkingLot calculates fees
- ParkingLot validates tickets
- ParkingLot manages pricing
- ParkingLot manages reservations

That gets huge fast.

Better:
- give each object its own job

---

## Mistake 2: ParkingSpot is just dumb data

If a spot has fields but no useful methods, then all the logic gets pushed elsewhere.

A better design makes the spot smart enough to answer:
- am I occupied?
- can I fit this vehicle?
- can I park this vehicle?

---

## Mistake 3: Vehicle has no role in the design

A vehicle should at least help tell the system what it needs.

That is why `getRequiredSpotSize()` is useful.

---

## Mistake 4: Ignoring edge cases

If the system never thinks about:
- full lots
- reserved spaces
- wrong spot sizes

then it is not really designing the real problem.

---

# Chapter Review

## What you learned

In this chapter, you learned how to design a parking lot system as a real object-oriented system.

You learned how to:

- gather requirements
- identify core objects
- separate responsibilities
- design a blueprint
- build a TypeScript code skeleton
- simulate parking and unparking
- handle edge cases
- think about future improvements

---

## Main objects in this design

### ParkingLot
Owns:
- overall parking flow
- spot searching
- ticket creation
- availability reporting

### ParkingSpot
Owns:
- spot state
- fit logic
- occupancy logic

### Vehicle
Owns:
- type
- license plate
- required spot size

### Ticket
Owns:
- parking session information
- fee calculation

---

## Strong design lesson

This chapter teaches an important OOD lesson:

> Real systems become easier to manage  
> when each object handles the right slice of the problem.

That is the heart of good design.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In this design, the `ParkingLot` handles overall parking ________, while the `ParkingSpot` handles individual spot ________.

**Answer:** flow, logic

---

## 2. True or False

A `ParkingSpot` should usually decide whether it is occupied and whether a vehicle fits.

**Answer:** True

---

## 3. Short Answer

Why is `Vehicle.getRequiredSpotSize()` useful?

**Answer:** Because it lets the system ask the vehicle what kind of spot it needs, which makes parking logic cleaner.

---

## 4. Short Answer

Why is a parking lot a good OOD challenge?

**Answer:** Because it has multiple object types, real-world rules, changing state, and lots of opportunities for upgrades and edge-case thinking.

---

## 5. Fill in the blank

A `ParkingLot` has many `ParkingSpot`s, so this is an example of ________.

**Answer:** composition

---

## 6. Mini Design Challenge

What object would you add if you wanted special VIP reservations?

One good answer:
- `Reservation`

---

## 7. Mini Design Challenge

What object would you add if parking prices became much more complicated?

One good answer:
- `PricingRule`

---

# Practice Prompts

Try these on your own:

1. Add a `ParkingFloor` class.
2. Design a `Reservation` class.
3. Prevent the same vehicle from parking twice.
4. Make buses require multiple grouped spots.
5. Add a ticket lookup system by ticket id.

---

# Friendly Wrap-up

This chapter shows how a real-world system can be designed step by step:

- understand the mission
- ask smart questions
- find the main objects
- give each object the right job
- build the blueprint
- create the code skeleton
- improve the design with edge cases and upgrades

That is real Object Oriented Design.

Next, we will design another larger system: **Design a Movie Ticket Booking System**.
