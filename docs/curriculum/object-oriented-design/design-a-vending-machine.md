---
title: "Design a Vending Machine"
chapterSlug: "design-a-vending-machine"
order: 7
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 115
skills:
  - "Turn a vending machine into objects with clear jobs"
  - "Design a system using VendingMachine, Slot, Item, and Payment classes"
  - "Think about machine state, inventory, money, and change"
  - "Write a clean TypeScript code skeleton for a rule-based system"
---

# Design a Vending Machine

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: A vending machine is a great object-oriented system because it must track state, inventory, money, and rules at the same time.

---

# Chapter Overview

A vending machine seems simple from the outside.

A person:
- picks a snack
- inserts money
- gets the item
- maybe gets change back

But inside the machine, many rules are happening:

- Is the item in stock?
- Was enough money inserted?
- Should the item be released yet?
- How much change is owed?
- What if the machine is sold out?
- What if the user cancels?

That makes vending machines a fantastic Object Oriented Design challenge.

This chapter helps students practice:
- state
- responsibilities
- object interactions
- edge cases
- future upgrades

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

Design a vending machine system.

The system should support:
- showing available items
- letting a user select an item
- accepting money
- checking whether enough money was inserted
- dispensing the item
- returning change if needed

It should also handle:
- out-of-stock items
- cancelling a purchase
- not enough money

---

## Why this is a strong OOD challenge

A vending machine is a strong design problem because it includes:

- items and inventory
- a machine with rules
- money handling
- state changes over time
- a clear user flow
- many easy-to-imagine edge cases

It also teaches a very important design lesson:

> Some systems are really about state.  
> What the machine can do next depends on what already happened.

That makes this chapter great for middle school learners.

---

# 2. Gather Requirements

Before building, we should understand what the machine must do.

## Core requirements

Our vending machine should:

1. Store items in slots
2. Show which items are available
3. Let a user choose an item code
4. Accept inserted money
5. Track how much money has been inserted
6. Check whether enough money was given
7. Dispense the selected item
8. Return change when needed
9. Let the user cancel and get money back
10. Handle sold-out items

---

## Clarifying questions

A strong designer asks smart questions before coding.

For this system, good questions include:

- Does every item live in a slot?
- Can multiple copies of the same item be in one slot?
- Do users select items by code, like A1 or B2?
- Should the machine return exact change?
- Can a user insert money before or after choosing an item?
- Can the user cancel?
- Should the machine support different item prices?
- What happens if the machine cannot make change?

For our first version, we will choose:

- each slot holds one item type and quantity
- the user selects by slot code
- different items can have different prices
- the machine tracks inserted money
- the user may cancel and get money back
- the machine will return simple change
- we will keep change handling simple in version 1

---

## A simple use case

A user wants chips.

The system should:
1. show that slot B2 contains chips
2. let the user select B2
3. accept money
4. confirm there is enough money
5. reduce inventory
6. dispense chips
7. return change if needed

That is the core happy path.

---

## A more complex use case

Now imagine:
- the user picks soda
- the soda is sold out
- or the user inserts too little money
- or the user changes their mind and cancels

These cases help shape the design.

---

# 3. Identify Core Objects

Now let’s ask:

> What are the main things in this system?

A strong starting set is:

- `VendingMachine`
- `Slot`
- `Item`
- `PurchaseSession`

We may also add:
- `Money`
- `PaymentProcessor`
- `ChangeMaker`
- `MachineState`

But the first four are enough to build a strong first version.

---

## Object 1: VendingMachine

### The VendingMachine knows:
- all slots
- current inserted money
- selected slot
- maybe machine state

### The VendingMachine can:
- show items
- select a slot
- accept money
- cancel a purchase
- dispense an item
- return change

This is the main coordinator.

---

## Object 2: Slot

### The Slot knows:
- slot code
- item
- quantity

### The Slot can:
- report whether it is empty
- reduce quantity when an item is dispensed
- report its price

A slot owns its own inventory count.

---

## Object 3: Item

### The Item knows:
- name
- price

### The Item can:
- provide item information

This object is simple, but important.

---

## Object 4: PurchaseSession

### The PurchaseSession knows:
- selected slot
- inserted amount

### The PurchaseSession can:
- track progress of one purchase
- reset when purchase ends or is cancelled

This object is optional in some designs, but it is very helpful because it keeps the “current user action” separate from the machine’s longer-term inventory.

---

## Why these objects are strong

These objects are strong because:

- `VendingMachine` manages the overall flow
- `Slot` manages slot-specific inventory
- `Item` stores item identity and price
- `PurchaseSession` stores the current transaction state

That is much cleaner than putting all data and rules into one giant class.

---

# 4. Design the Blueprint

Now let’s sketch the system.

## Object cards

### VendingMachine
Knows:
- slots
- session

Does:
- displayItems()
- selectSlot()
- insertMoney()
- dispense()
- cancel()

### Slot
Knows:
- code
- item
- quantity

Does:
- isEmpty()
- dispenseOne()
- getPrice()

### Item
Knows:
- name
- price

Does:
- showInfo()

### PurchaseSession
Knows:
- selectedSlotCode
- insertedAmount

Does:
- addMoney()
- reset()

---

## UML-lite blueprint

```txt
VendingMachine
- slots
- session
- displayItems()
- selectSlot()
- insertMoney()
- dispense()
- cancel()

Slot
- code
- item
- quantity
- isEmpty()
- dispenseOne()
- getPrice()

Item
- name
- price
- showInfo()

PurchaseSession
- selectedSlotCode
- insertedAmount
- addMoney()
- reset()
```

---

## Relationship thinking

- A `VendingMachine` has many `Slot`s
- A `Slot` has one `Item`
- A `VendingMachine` has one current `PurchaseSession`

This is mostly **composition**:
- machine has slots
- machine has session
- slot has item

---

# 5. Make Key Design Decisions

Before coding, let’s make some smart choices.

---

## Choice 1: A slot should own quantity

This is a strong responsibility choice.

A slot should know:
- whether it is empty
- how many items remain

That makes the slot a smart object.

---

## Choice 2: The machine should coordinate the purchase flow

The machine is the best place to:
- select a slot
- accept money
- decide whether to dispense
- decide whether to return change

That is because it sees the whole transaction.

---

## Choice 3: Use a PurchaseSession object

Without a session object, the machine may become overloaded with temporary transaction details.

A session helps separate:
- permanent machine data
from
- current user transaction state

That is cleaner design.

---

## Choice 4: Keep change simple in version 1

In a real machine, exact change can get complicated.

For our first version:
- return a number for the change owed

Later we can build a real coin/bill change system.

That keeps the chapter understandable.

---

## Choice 5: Dispense only after all conditions are valid

Before dispensing:
- slot must exist
- slot must not be empty
- enough money must be inserted

That means the system should be careful and rule-based.

---

# 6. TypeScript Code Skeleton

Here is a clean first version.

```ts
class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  showInfo(): string {
    return `${this.name} - $${this.price}`;
  }
}

class Slot {
  code: string;
  item: Item;
  quantity: number;

  constructor(code: string, item: Item, quantity: number) {
    this.code = code;
    this.item = item;
    this.quantity = quantity;
  }

  isEmpty(): boolean {
    return this.quantity <= 0;
  }

  getPrice(): number {
    return this.item.price;
  }

  dispenseOne(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.quantity--;
    return true;
  }
}

class PurchaseSession {
  selectedSlotCode: string | null;
  insertedAmount: number;

  constructor() {
    this.selectedSlotCode = null;
    this.insertedAmount = 0;
  }

  addMoney(amount: number): void {
    if (amount > 0) {
      this.insertedAmount += amount;
    }
  }

  reset(): void {
    this.selectedSlotCode = null;
    this.insertedAmount = 0;
  }
}

class VendingMachine {
  slots: Slot[];
  session: PurchaseSession;

  constructor(slots: Slot[]) {
    this.slots = slots;
    this.session = new PurchaseSession();
  }

  displayItems(): string[] {
    const output: string[] = [];

    for (const slot of this.slots) {
      const stockText = slot.isEmpty() ? "Sold Out" : `Qty: ${slot.quantity}`;
      output.push(`${slot.code}: ${slot.item.showInfo()} (${stockText})`);
    }

    return output;
  }

  getSlotByCode(code: string): Slot | null {
    for (const slot of this.slots) {
      if (slot.code === code) {
        return slot;
      }
    }

    return null;
  }

  selectSlot(code: string): boolean {
    const slot = this.getSlotByCode(code);

    if (slot === null || slot.isEmpty()) {
      return false;
    }

    this.session.selectedSlotCode = code;
    return true;
  }

  insertMoney(amount: number): void {
    this.session.addMoney(amount);
  }

  getRemainingAmount(): number | null {
    if (this.session.selectedSlotCode === null) {
      return null;
    }

    const slot = this.getSlotByCode(this.session.selectedSlotCode);

    if (slot === null) {
      return null;
    }

    return Math.max(0, slot.getPrice() - this.session.insertedAmount);
  }

  dispense(): { success: boolean; itemName?: string; change?: number } {
    if (this.session.selectedSlotCode === null) {
      return { success: false };
    }

    const slot = this.getSlotByCode(this.session.selectedSlotCode);

    if (slot === null || slot.isEmpty()) {
      return { success: false };
    }

    const price = slot.getPrice();

    if (this.session.insertedAmount < price) {
      return { success: false };
    }

    const dispensed = slot.dispenseOne();

    if (!dispensed) {
      return { success: false };
    }

    const change = this.session.insertedAmount - price;
    const itemName = slot.item.name;

    this.session.reset();

    return {
      success: true,
      itemName,
      change,
    };
  }

  cancel(): number {
    const refund = this.session.insertedAmount;
    this.session.reset();
    return refund;
  }
}
```

---

# 7. Walk Through the Core Flow

Let’s simulate a vending machine.

```ts
const chips = new Item("Chips", 2);
const soda = new Item("Soda", 3);

const machine = new VendingMachine([
  new Slot("A1", chips, 5),
  new Slot("B2", soda, 2),
]);
```

---

## Happy path: buy chips

```ts
machine.selectSlot("A1");
machine.insertMoney(1);
machine.insertMoney(1);
const result = machine.dispense();
```

What should happen?

1. The machine finds slot A1
2. A1 is not empty
3. The session stores selected slot A1
4. The session stores inserted money = 2
5. The machine checks the price
6. Enough money is inserted
7. The slot quantity goes down
8. Chips are dispensed
9. Change returned is 0
10. Session resets

That is the main successful purchase flow.

---

## Another happy path: buy soda with extra money

```ts
machine.selectSlot("B2");
machine.insertMoney(5);
const result2 = machine.dispense();
```

What should happen?

- Soda costs 3
- User inserted 5
- Machine dispenses soda
- Machine returns 2 as change

That is another important flow.

---

# 8. Walk Through a Cancel Flow

Now imagine the user changes their mind.

```ts
machine.selectSlot("A1");
machine.insertMoney(2);
const refund = machine.cancel();
```

What should happen?

1. Session has slot A1 and inserted amount 2
2. User cancels
3. Machine returns 2
4. Session resets
5. No item is dispensed
6. Quantity stays the same

That is a very realistic edge case.

---

# 9. Edge Cases to Handle

Strong designers always ask:
- what can go wrong?
- what rules matter most?

---

## Edge Case 1: Sold out item

If a slot has quantity 0:
- it should not be selectable
- it should not dispense

Our design handles this because:
- `Slot.isEmpty()` checks quantity
- `selectSlot()` rejects empty slots
- `dispense()` also checks again

That double-check is a good safety habit.

---

## Edge Case 2: Not enough money

If a user inserts too little money:
- the machine should not dispense
- the system should show how much more is needed

Our design handles this with:
- `getRemainingAmount()`
- a check inside `dispense()`

---

## Edge Case 3: Invalid slot code

If the user picks:
- Z9
and no such slot exists, the machine should reject it.

Our design handles this because:
- `getSlotByCode()` returns `null`
- selection fails

---

## Edge Case 4: Cancel after partial payment

If the user inserted some money but not all:
- cancel should still return the full inserted amount

Our design handles this because:
- `cancel()` refunds everything in the session

---

## Edge Case 5: Session left over from previous purchase

A good vending machine should not accidentally reuse money or a selected slot from an old purchase.

Our design handles this because:
- successful dispense resets the session
- cancel also resets the session

That is a very important state-management lesson.

---

# 10. Machine State Thinking

This chapter is a great place to introduce state in a simple way.

At different moments, the machine may be in different states.

For example:

- waiting for selection
- waiting for enough money
- ready to dispense
- cancelled

We did not create a full `MachineState` class yet, but we are already thinking in states through the `PurchaseSession`.

That is a strong design idea.

Later, a more advanced version could use:

- `Idle`
- `SelectionMade`
- `PaymentInProgress`
- `Dispensing`

That would be an even more advanced design.

---

# 11. Upgrade Ideas

Once the basic design works, we can make it smarter.

---

## Upgrade 1: Real change maker

Right now we return a number like 2 dollars.

A more advanced version could add:
- `ChangeMaker`

This object could decide:
- how many quarters
- how many dimes
- how many bills

to return.

---

## Upgrade 2: Payment object

We could add:
- `Payment`

This could store:
- inserted coins
- inserted bills
- payment status

That would separate money tracking from the machine.

---

## Upgrade 3: Machine states

We could add:
- `MachineState`

This could make the system even cleaner by formally representing:
- waiting
- collecting money
- dispensing
- cancelled

---

## Upgrade 4: Restocking

We could add:
- `restock(slotCode, amount)`

That would make the machine manageable over time.

---

## Upgrade 5: Different item types

We could later support:
- drinks
- candy
- chips
- healthy snacks

This might lead to item subclasses if behavior becomes different.

---

## Upgrade 6: Maintenance mode

Real machines may sometimes be:
- broken
- offline
- being refilled

We could add:
- `isOnline`
- `maintenanceMode`

That would make the machine more realistic.

---

# 12. Why This Design Is Strong

This design is strong because:

- responsibilities are clearly separated
- `Slot` owns slot inventory
- `Item` owns item identity and price
- `PurchaseSession` owns current transaction state
- `VendingMachine` owns overall purchase flow
- the design handles both happy paths and tricky cases
- the system can grow later

This is what strong beginner OOD looks like:
- clear
- rule-driven
- extendable

---

# 13. Common Beginner Mistakes

## Mistake 1: One giant VendingMachine class with no helper objects

That version usually becomes too big because it tries to manage:
- inventory
- item data
- money
- state
- change
- everything else

Better:
- split the design into machine, slots, items, and session

---

## Mistake 2: Slot does not manage quantity

If slot quantity is stored somewhere else, the design becomes more confusing.

A slot should naturally know:
- what it holds
- how many remain

---

## Mistake 3: Forgetting to reset the transaction

This is a huge bug risk.

If the machine does not reset after dispense or cancel, the next user might get the wrong item or wrong balance.

---

## Mistake 4: Dispensing before checking all rules

A strong system should only dispense after:
- valid slot
- not sold out
- enough money

Rule order matters.

---

# Chapter Review

## What you learned

In this chapter, you learned how to design a vending machine as an object-oriented system.

You learned how to:

- gather requirements
- identify core objects
- separate machine flow from slot inventory and item data
- use a session object for transaction state
- build a TypeScript code skeleton
- simulate item purchase and cancel flow
- think about edge cases and upgrades

---

## Main objects in this design

### VendingMachine
Owns:
- overall purchase flow
- selection
- money checking
- dispensing
- cancelling

### Slot
Owns:
- slot inventory
- quantity
- item price access

### Item
Owns:
- item identity
- name
- price

### PurchaseSession
Owns:
- current selected slot
- current inserted money
- transaction reset

---

## Strong design lesson

This chapter teaches an important OOD lesson:

> A rule-based machine becomes easier to design  
> when we separate long-term machine data  
> from short-term transaction state.

That is a very powerful design idea.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In this design, the `Slot` owns item ________, while the `PurchaseSession` owns current transaction ________.

**Answer:** quantity, state

---

## 2. True or False

A vending machine should usually dispense an item before checking whether enough money was inserted.

**Answer:** False

It should check all rules first.

---

## 3. Short Answer

Why is `PurchaseSession` a useful object?

**Answer:** Because it keeps the current transaction state, like selected slot and inserted money, separate from the machine’s long-term inventory data.

---

## 4. Short Answer

Why is a vending machine a good OOD challenge?

**Answer:** Because it has objects, rules, inventory, money, state changes, and realistic edge cases that help teach responsibility and system flow.

---

## 5. Fill in the blank

A `VendingMachine` has many `Slot`s, so this is an example of ________.

**Answer:** composition

---

## 6. Mini Design Challenge

What object would you add if the machine had to return exact coins and bills?

One good answer:
- `ChangeMaker`

---

## 7. Mini Design Challenge

What method would you add if workers needed to refill the machine?

One good answer:
- `restock()`

---

# Practice Prompts

Try these on your own:

1. Add a `ChangeMaker` class.
2. Add a `restock()` method.
3. Add a `Payment` object for coins and bills.
4. Add `maintenanceMode`.
5. Design what happens if the machine has no change available.

---

# Friendly Wrap-up

This chapter shows how a rule-based machine can be designed step by step:

- understand the mission
- ask smart questions
- find the core objects
- give each object the right job
- separate inventory from transaction state
- build the code skeleton
- test real use cases
- improve the design with edge cases and upgrades

That is real Object Oriented Design.

Next, we will design another larger real-world system: **Design an Elevator System**.
