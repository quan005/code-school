---
title: "Design a Movie Ticket Booking System"
chapterSlug: "design-a-movie-ticket-booking-system"
order: 6
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 125
skills:
  - "Turn a theater booking problem into clear objects and responsibilities"
  - "Design a system using Movie, Show, Seat, Booking, and Theater classes"
  - "Separate seat availability, booking flow, and payment ideas"
  - "Think about edge cases like sold-out shows and double-booking"
---

# Design a Movie Ticket Booking System

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: A movie ticket booking system becomes easier to design when we separate movies, showtimes, seats, and bookings into objects with clear jobs.

---

# Chapter Overview

Booking a movie ticket sounds simple.

A person:
- picks a movie
- picks a showtime
- picks a seat
- pays
- gets a ticket

But underneath, the system must manage a lot:

- theaters
- screens
- movies
- showtimes
- seats
- bookings
- sold-out situations
- invalid seat choices
- possible double-booking problems

That makes this a great Object Oriented Design challenge.

This chapter builds on the earlier OOD chapters and introduces a new kind of system:

> a system where many objects must stay in sync  
> so the same seat is not sold twice.

In this chapter, we will learn:

1. **Understand the Mission**
2. **Gather Requirements**
3. **Identify Core Objects**
4. **Design the Blueprint**
5. **Make Key Design Decisions**
6. **Build the TypeScript Code Skeleton**
7. **Walk Through Core Use Cases**
8. **Handle Edge Cases**
9. **Talk About Concurrency at a Kid-Friendly Level**
10. **Upgrade the System**
11. **Chapter Review**
12. **Mastery Check**

---

# 1. Understand the Mission

## The design challenge

Design a movie ticket booking system.

The system should support:
- movies
- showtimes
- theaters or screens
- seat selection
- booking creation
- basic payment flow
- ticket confirmation

For a first version, we want the system to allow a user to:

1. view a movie show
2. see available seats
3. choose a seat
4. create a booking
5. confirm the booking

---

## Why this is a strong OOD challenge

This is a strong challenge because it includes:

- multiple real-world objects
- relationships between objects
- changing state over time
- booking rules
- edge cases
- future scalability ideas

It also introduces a very important design idea:

> a seat may look like simple data,  
> but it actually has important rules around availability.

That makes responsibility design very important.

---

# 2. Gather Requirements

Before we build classes, we should understand the rules.

## Core requirements

Our system should:

1. Store movies
2. Store showtimes
3. Store screens or halls with seats
4. Show which seats are available for a given show
5. Let a user select a seat
6. Create a booking for that seat
7. Mark the seat as booked for that show
8. Prevent already-booked seats from being booked again
9. Support ticket confirmation

---

## Clarifying questions

A strong designer asks good questions first.

For this system, good questions include:

- Can one movie have many showtimes?
- Does each show happen in one screen?
- Do seats belong to the screen, the show, or both?
- Should the system support different seat types?
- Should users choose exact seats?
- What happens if a seat is already booked?
- Should payment happen before or after booking?
- Do we need refunds in version 1?

For our chapter, we will choose these answers:

- yes, one movie can have many shows
- each show happens in one screen
- the screen provides the seat layout
- each show tracks seat availability for that show
- users choose exact seats
- already-booked seats cannot be booked again
- payment can be represented simply in version 1
- refunds will be a future upgrade

---

## A simple use case

A student named Maya wants to book one ticket.

The system should:

1. show available movies
2. show one selected showtime
3. display available seats
4. let Maya choose seat B3
5. reserve that seat for that show
6. create a booking
7. confirm the ticket

That is the main happy path.

---

## A more complex use case

Now imagine two users both want seat B3 for the same show.

The system must:
- stop the second booking if the first one already took the seat
- keep the booking state correct
- avoid double-selling the same seat

This makes the design more interesting.

---

# 3. Identify Core Objects

Now let’s ask:

> What are the most important things in this system?

A strong first set is:

- `Movie`
- `Theater`
- `Screen`
- `Seat`
- `Show`
- `Booking`

We may also add:
- `User`
- `Payment`
- `SeatType`
- `BookingStatus`

But the six above are the backbone.

---

## Object 1: Movie

### The Movie knows:
- title
- duration
- rating or genre if needed

### The Movie can:
- mostly provide its movie information

A movie is the content being watched.

---

## Object 2: Theater

### The Theater knows:
- its name
- its screens

### The Theater can:
- list screens
- hold multiple shows through those screens

The theater is the place.

---

## Object 3: Screen

### The Screen knows:
- its screen number or name
- its seat layout

### The Screen can:
- provide its seats
- describe its capacity

A screen is a room where a show happens.

---

## Object 4: Seat

### The Seat knows:
- seat id like A1 or B3
- row
- number
- type if needed

### The Seat can:
- provide seat information

Important note:
A seat’s physical identity belongs to the screen,
but its booking status belongs to a specific show.

That is a key design insight.

---

## Object 5: Show

### The Show knows:
- movie
- start time
- screen
- which seats are booked

### The Show can:
- list available seats
- check whether a seat is available
- reserve a seat for a booking

This is one of the most important objects in the system.

Why?

Because seat availability is different for each show.

Seat B3 might be booked for the 6 PM show but still free for the 9 PM show.

That means booking state belongs naturally to the `Show`.

---

## Object 6: Booking

### The Booking knows:
- booking id
- show
- selected seats
- customer name
- total price
- status

### The Booking can:
- confirm itself
- maybe cancel later
- show booking details

The booking is the record of what the customer bought.

---

# 4. Design the Blueprint

Now let’s sketch the system.

## Object cards

### Movie
Knows:
- title
- durationMinutes
- genre

Does:
- showInfo()

### Theater
Knows:
- name
- screens

Does:
- addScreen()

### Screen
Knows:
- screenId
- seats

Does:
- getSeatById()
- seatCount()

### Seat
Knows:
- seatId
- row
- number
- type

Does:
- showLabel()

### Show
Knows:
- showId
- movie
- screen
- startTime
- bookedSeatIds

Does:
- isSeatAvailable()
- reserveSeat()
- getAvailableSeats()

### Booking
Knows:
- bookingId
- customerName
- show
- selectedSeatIds
- totalPrice
- status

Does:
- confirm()
- displaySummary()

---

## UML-lite blueprint

```txt
Movie
- title
- durationMinutes
- genre
- showInfo()

Theater
- name
- screens
- addScreen()

Screen
- screenId
- seats
- getSeatById()
- seatCount()

Seat
- seatId
- row
- number
- type
- showLabel()

Show
- showId
- movie
- screen
- startTime
- bookedSeatIds
- isSeatAvailable()
- reserveSeat()
- getAvailableSeats()

Booking
- bookingId
- customerName
- show
- selectedSeatIds
- totalPrice
- status
- confirm()
- displaySummary()
```

---

## Relationship thinking

- A `Theater` has many `Screen`s
- A `Screen` has many `Seat`s
- A `Show` has one `Movie`
- A `Show` happens in one `Screen`
- A `Booking` belongs to one `Show`
- A `Booking` contains selected seats for that show

This is a strong mix of composition and association.

---

# 5. Make Key Design Decisions

Before coding, let’s make a few important design choices.

---

## Choice 1: Seat identity belongs to Screen

A physical seat like `B3` belongs to the screen itself.

That means:
- the screen owns the seat layout
- the show should not create brand-new seat objects every time

This keeps the system cleaner.

---

## Choice 2: Seat availability belongs to Show

This is one of the most important design choices in the chapter.

A seat may be:
- free for Show A
- booked for Show B

So booking state must belong to the `Show`, not the `Seat`.

That is why `Show` will track booked seat ids.

---

## Choice 3: Booking should not directly control seat layout

A booking records the result of a reservation.

It should not own the whole seat system.

This means:
- `Show` manages reservation logic
- `Booking` stores the confirmed selection

That is a clean responsibility split.

---

## Choice 4: Keep payment simple in version 1

In our first version, payment can be modeled lightly.

We may:
- calculate total price
- mark the booking as confirmed

Later, we can add a full `Payment` object.

That keeps the beginner version understandable.

---

## Choice 5: Start with one seat type or simple seat types

We can support seat types such as:
- Regular
- Premium
- VIP

That makes pricing more interesting and gives room for upgrades.

---

# 6. TypeScript Code Skeleton

Here is a clean first version of the system.

```ts
enum SeatType {
  Regular = "regular",
  Premium = "premium",
  VIP = "vip",
}

enum BookingStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Cancelled = "cancelled",
}

class Movie {
  title: string;
  durationMinutes: number;
  genre: string;

  constructor(title: string, durationMinutes: number, genre: string) {
    this.title = title;
    this.durationMinutes = durationMinutes;
    this.genre = genre;
  }

  showInfo(): string {
    return `${this.title} (${this.genre}, ${this.durationMinutes} mins)`;
  }
}

class Seat {
  seatId: string;
  row: string;
  number: number;
  type: SeatType;

  constructor(seatId: string, row: string, number: number, type: SeatType) {
    this.seatId = seatId;
    this.row = row;
    this.number = number;
    this.type = type;
  }

  showLabel(): string {
    return this.seatId;
  }
}

class Screen {
  screenId: string;
  seats: Seat[];

  constructor(screenId: string, seats: Seat[]) {
    this.screenId = screenId;
    this.seats = seats;
  }

  getSeatById(seatId: string): Seat | null {
    for (const seat of this.seats) {
      if (seat.seatId === seatId) {
        return seat;
      }
    }

    return null;
  }

  seatCount(): number {
    return this.seats.length;
  }
}

class Theater {
  name: string;
  screens: Screen[];

  constructor(name: string) {
    this.name = name;
    this.screens = [];
  }

  addScreen(screen: Screen): void {
    this.screens.push(screen);
  }
}

class Show {
  showId: string;
  movie: Movie;
  screen: Screen;
  startTime: string;
  bookedSeatIds: Set<string>;

  constructor(showId: string, movie: Movie, screen: Screen, startTime: string) {
    this.showId = showId;
    this.movie = movie;
    this.screen = screen;
    this.startTime = startTime;
    this.bookedSeatIds = new Set();
  }

  isSeatAvailable(seatId: string): boolean {
    const seat = this.screen.getSeatById(seatId);

    if (seat === null) {
      return false;
    }

    return !this.bookedSeatIds.has(seatId);
  }

  reserveSeat(seatId: string): boolean {
    if (!this.isSeatAvailable(seatId)) {
      return false;
    }

    this.bookedSeatIds.add(seatId);
    return true;
  }

  getAvailableSeats(): Seat[] {
    const available: Seat[] = [];

    for (const seat of this.screen.seats) {
      if (!this.bookedSeatIds.has(seat.seatId)) {
        available.push(seat);
      }
    }

    return available;
  }
}

class Booking {
  bookingId: string;
  customerName: string;
  show: Show;
  selectedSeatIds: string[];
  totalPrice: number;
  status: BookingStatus;

  constructor(
    bookingId: string,
    customerName: string,
    show: Show,
    selectedSeatIds: string[],
    totalPrice: number
  ) {
    this.bookingId = bookingId;
    this.customerName = customerName;
    this.show = show;
    this.selectedSeatIds = selectedSeatIds;
    this.totalPrice = totalPrice;
    this.status = BookingStatus.Pending;
  }

  confirm(): void {
    this.status = BookingStatus.Confirmed;
  }

  displaySummary(): string {
    return `${this.customerName} booked ${this.selectedSeatIds.join(", ")} for ${this.show.movie.title}`;
  }
}

class BookingSystem {
  nextBookingNumber: number;

  constructor() {
    this.nextBookingNumber = 1;
  }

  calculateSeatPrice(seat: Seat): number {
    if (seat.type === SeatType.Regular) {
      return 10;
    }

    if (seat.type === SeatType.Premium) {
      return 15;
    }

    return 20;
  }

  createBooking(
    customerName: string,
    show: Show,
    seatIds: string[]
  ): Booking | null {
    for (const seatId of seatIds) {
      if (!show.isSeatAvailable(seatId)) {
        return null;
      }
    }

    let totalPrice = 0;

    for (const seatId of seatIds) {
      const seat = show.screen.getSeatById(seatId);

      if (seat === null) {
        return null;
      }

      totalPrice += this.calculateSeatPrice(seat);
    }

    for (const seatId of seatIds) {
      const reserved = show.reserveSeat(seatId);

      if (!reserved) {
        return null;
      }
    }

    const booking = new Booking(
      `B-${this.nextBookingNumber}`,
      customerName,
      show,
      seatIds,
      totalPrice
    );

    this.nextBookingNumber++;
    booking.confirm();

    return booking;
  }
}
```

---

# 7. Walk Through the Core Flow

Let’s simulate a simple booking.

```ts
const movie = new Movie("Galaxy Quest", 120, "Sci-Fi");

const seats = [
  new Seat("A1", "A", 1, SeatType.Regular),
  new Seat("A2", "A", 2, SeatType.Regular),
  new Seat("B1", "B", 1, SeatType.Premium),
  new Seat("B2", "B", 2, SeatType.Premium),
];

const screen1 = new Screen("Screen 1", seats);
const show1 = new Show("SHOW-101", movie, screen1, "6:00 PM");

const bookingSystem = new BookingSystem();
const booking = bookingSystem.createBooking("Maya", show1, ["B2"]);
```

What should happen?

1. The system checks if B2 exists
2. The system checks if B2 is available for this show
3. The system calculates the seat price
4. The system reserves B2 for the show
5. The system creates a booking
6. The booking becomes confirmed

That is the happy path.

---

## What does the booking know now?

If successful, the booking stores:
- customer name = Maya
- selected seat = B2
- show = SHOW-101
- total price = 15
- status = confirmed

That is a strong first version.

---

# 8. Walk Through a Double-Booking Case

Now imagine Leo tries to book B2 for the same show after Maya already got it.

```ts
const secondBooking = bookingSystem.createBooking("Leo", show1, ["B2"]);
```

What should happen?

1. The system asks the show if B2 is available
2. The show checks `bookedSeatIds`
3. B2 is already there
4. The booking fails
5. The system returns `null`

That is exactly what we want.

This shows why `Show` owning seat availability was such an important design choice.

---

# 9. Edge Cases to Handle

Strong designers think about what can go wrong.

---

## Edge Case 1: The seat does not exist

Example:
- user tries to book seat Z99

The system should reject the booking.

Our design handles this because:
- `Screen.getSeatById()` returns `null`
- booking creation then fails

---

## Edge Case 2: The seat is already booked

Example:
- two users want the same seat

The second attempt should fail.

Our design handles this because:
- `Show.isSeatAvailable()` checks `bookedSeatIds`

---

## Edge Case 3: Booking multiple seats

Example:
- a family wants A1 and A2 together

Our design already supports multiple seats because:
- `createBooking()` accepts a list of seat ids

That is a good design win.

---

## Edge Case 4: One seat in the group is unavailable

Example:
- user asks for A1 and B2
- A1 is free, B2 is already booked

The whole booking should fail.

That is better than half-booking unless the system clearly supports partial booking rules.

Our version rejects the whole attempt.

---

## Edge Case 5: Show sold out

If every seat is booked:
- `getAvailableSeats()` returns an empty list

That makes sold-out detection easy.

---

## Edge Case 6: Invalid screen or show

A stronger full system would also validate:
- does the show exist?
- is the screen valid?
- is the showtime still in the future?

Our first version keeps the system focused.

---

# 10. Concurrency at a Kid-Friendly Level

This is an advanced idea, but this system is a perfect place to introduce it simply.

## What is concurrency?

Concurrency means:
- more than one action happening at almost the same time

In this system, that could mean:
- Maya clicks B2
- Leo clicks B2
- both actions happen very close together

If the system is not careful, it might accidentally sell B2 twice.

That would be very bad.

---

## Kid-friendly explanation

Think of one cookie left on a plate.

If two people both grab for it at the same time, the system needs a rule that says:

> Once one person gets it, it is no longer available.

That is the kind of protection concurrency is about.

---

## What should a strong beginner say?

A strong student answer is:

> “The system needs to lock or reserve the seat carefully so two users cannot confirm the same seat at the same time.”

That is enough for this level.

No need to go deep into threads or advanced locking yet.

---

# 11. Upgrade Ideas

Once the core design works, we can improve it.

---

## Upgrade 1: User accounts

Add:
- `User`

This could support:
- booking history
- saved preferences
- login

---

## Upgrade 2: Payment object

Add:
- `Payment`

This could track:
- amount
- payment method
- paid or failed state

That would make the system more realistic.

---

## Upgrade 3: Booking cancellation

Add:
- `cancel()`

This would:
- mark the booking as cancelled
- free the seats again

That is a very natural extension.

---

## Upgrade 4: Seat hold timer

Real systems sometimes “hold” a seat for a few minutes during checkout.

We could add:
- temporary reservation state
- expiration time

That would make the design more advanced.

---

## Upgrade 5: Different pricing rules

We might later want:
- time-based pricing
- holiday pricing
- VIP pricing
- age discounts

That could lead to a `PricingRule` object.

---

## Upgrade 6: Multiple theaters and movie search

A larger version of the system could include:
- many theaters
- many movies
- search by city
- search by time

That would make the system feel more like a real app.

---

# 12. Why This Design Is Strong

This design is strong because:

- responsibilities are clearly separated
- `Show` owns seat booking state
- `Screen` owns the physical seat layout
- `Booking` owns the booking record
- `Movie` stays simple
- the system supports both single-seat and multi-seat bookings
- future upgrades fit naturally

This is what strong beginner OOD looks like:
- clean
- practical
- extendable

---

# 13. Common Beginner Mistakes

## Mistake 1: Letting Seat store booking state for all shows

That sounds tempting, but it causes trouble.

Why?

Because the same physical seat can be:
- booked for one show
- free for another show

So booking state belongs to the show, not the seat alone.

That is a major design lesson.

---

## Mistake 2: Making Booking control seat reservation logic

The booking should store the result of reservation, not manage the whole reservation system.

`Show` is the more natural owner of seat availability.

---

## Mistake 3: One giant MovieSystem class does everything

If one class handles:
- movies
- theaters
- screens
- seats
- shows
- bookings
- payments
- search
- cancellation

it becomes too big.

Better:
- split responsibilities

---

## Mistake 4: Ignoring double-booking

This is one of the most important risks in the whole system.

A strong design must think about it.

---

# Chapter Review

## What you learned

In this chapter, you learned how to design a movie ticket booking system as an object-oriented system.

You learned how to:

- gather requirements
- identify core objects
- separate screen layout from show seat availability
- design a blueprint
- build a TypeScript code skeleton
- simulate booking flow
- think about sold-out situations and double-booking
- plan future upgrades

---

## Main objects in this design

### Movie
Owns:
- movie information

### Theater
Owns:
- screens

### Screen
Owns:
- physical seat layout

### Seat
Owns:
- seat identity and type

### Show
Owns:
- booking state for a specific showtime

### Booking
Owns:
- the booking record and confirmation

---

## Strong design lesson

This chapter teaches a very important OOD lesson:

> The same object in the real world  
> may play different roles in the system depending on context.

A seat belongs to the screen physically,
but its availability belongs to the show.

That is a powerful design insight.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In this design, the `Screen` owns the seat ________, while the `Show` owns seat ________ for that showtime.

**Answer:** layout, availability

---

## 2. True or False

A seat should store one single “booked” flag for all shows forever.

**Answer:** False

A seat may be booked for one show and free for another.

---

## 3. Short Answer

Why is `Show` a very important object in this design?

**Answer:** Because it connects the movie, screen, start time, and seat booking state for one specific showtime.

---

## 4. Short Answer

Why is double-booking an important edge case?

**Answer:** Because the system must stop two users from buying the same seat for the same show.

---

## 5. Fill in the blank

A `Booking` belongs to one `Show`, so this relationship is an example of ________ and association working together in the system.

**Answer:** composition

---

## 6. Mini Design Challenge

What object would you add if you wanted real card or wallet payments?

One good answer:
- `Payment`

---

## 7. Mini Design Challenge

What method would you add if users should be allowed to give up their tickets later?

One good answer:
- `cancel()`

---

# Practice Prompts

Try these on your own:

1. Add a `Payment` class.
2. Add a `User` class with booking history.
3. Design seat holds that expire after a few minutes.
4. Add `VIPSeat` and `RegularSeat` subclasses.
5. Add a cancellation flow that releases seats again.

---

# Friendly Wrap-up

This chapter shows how a real booking system can be designed step by step:

- understand the mission
- ask smart questions
- find the core objects
- give each object the right job
- separate physical structure from booking state
- build the code skeleton
- test the design with real use cases
- think about edge cases and future upgrades

That is real Object Oriented Design.

Next, we will design another hands-on system: **Design a Vending Machine**.
