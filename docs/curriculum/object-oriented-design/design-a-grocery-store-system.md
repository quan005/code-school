---
title: "Design a Grocery Store System"
chapterSlug: "design-a-grocery-store-system"
order: 9
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 125
skills:
  - "Turn a grocery store into objects with clear responsibilities"
  - "Design a system using Product, Cart, Store, Checkout, and Receipt classes"
  - "Think about inventory, pricing, checkout flow, and receipts"
  - "Write a clean TypeScript code skeleton for a multi-object shopping system"
---

# Design a Grocery Store System

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: A grocery store system becomes much easier to design when we separate products, inventory, carts, checkout, and receipts into objects with clear jobs.

---

# Chapter Overview

A grocery store seems simple when you are just shopping.

You:
- pick items
- put them in a cart
- go to checkout
- pay
- get a receipt

But underneath, the system has to manage a lot:

- products
- prices
- inventory
- shopping carts
- checkout
- totals
- receipts
- sold-out items
- quantity changes

That makes a grocery store a fantastic Object Oriented Design challenge.

This chapter helps students practice:
- working with many related objects
- inventory tracking
- user flow
- separating store data from checkout logic
- thinking about upgrades like discounts and loyalty systems

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

Design a grocery store system.

The system should support:
- products in the store
- inventory amounts
- shopping carts
- adding items to a cart
- checkout
- calculating totals
- printing a receipt

For a first version, we want the system to allow a user to:

1. browse products
2. add products to a cart
3. remove products from a cart
4. checkout
5. reduce store inventory
6. generate a receipt

---

## Why this is a strong OOD challenge

This is a strong design problem because it includes:

- many everyday objects
- inventory that changes over time
- a shopping flow
- money totals
- multiple responsibilities that should stay separate

It also teaches a very important lesson:

> A system can have one big real-world goal,  
> but still need many smaller objects working together.

That makes grocery stores a great OOD challenge.

---

# 2. Gather Requirements

Before building, we should understand the rules.

## Core requirements

Our grocery store system should:

1. Store products and prices
2. Track product inventory
3. Let a customer add items to a cart
4. Let a customer remove items from a cart
5. Show the current cart total
6. Checkout the cart
7. Reduce store inventory after checkout
8. Generate a receipt

---

## Clarifying questions

A strong designer asks smart questions before coding.

For this system, good questions include:

- Does each product have a name, price, and quantity in stock?
- Can a customer buy more than one of the same item?
- Should the cart store quantities?
- When should inventory be reduced: when added to the cart or at checkout?
- Should the system support discounts in version 1?
- Should we support tax in version 1?
- Should the receipt list each item and total price?

For our chapter, we will choose:

- each product has a product id, name, price, and stock count
- carts should store quantities
- inventory is reduced at checkout, not when added to cart
- version 1 uses simple totals without tax
- receipts list purchased items and total price
- discounts will be a future upgrade

---

## A simple use case

A student named Maya wants to buy:
- 2 apples
- 1 loaf of bread

The system should:
1. show the products
2. let Maya add them to the cart
3. calculate the cart total
4. checkout
5. reduce the store inventory
6. generate a receipt

That is the main happy path.

---

## A more complex use case

Now imagine:
- Maya adds 10 milk cartons
- but only 4 are in stock

The system must:
- notice that the requested quantity is too high
- stop the bad purchase
- keep inventory correct

That helps shape the design.

---

# 3. Identify Core Objects

Now let’s ask:

> What are the main things in this system?

A strong starting set is:

- `Store`
- `Product`
- `Cart`
- `CartItem`
- `Checkout`
- `Receipt`

We may also add:
- `Customer`
- `Payment`
- `DiscountRule`
- `InventoryManager`

But the six above are the backbone.

---

## Object 1: Store

### The Store knows:
- all products
- inventory amounts

### The Store can:
- list products
- find a product
- check stock
- reduce stock after checkout

The Store is the main owner of product inventory.

---

## Object 2: Product

### The Product knows:
- product id
- name
- price

### The Product can:
- provide product information

This is a simple but important object.

---

## Object 3: Cart

### The Cart knows:
- items selected by the customer

### The Cart can:
- add product quantities
- remove product quantities
- calculate subtotal
- clear itself

The Cart represents the customer’s current shopping choices.

---

## Object 4: CartItem

### The CartItem knows:
- product
- quantity

### The CartItem can:
- calculate its line total

This object is useful because a cart often needs both:
- which product
- how many of it

That is cleaner than storing raw numbers everywhere.

---

## Object 5: Checkout

### The Checkout knows:
- the store
- the cart being purchased

### The Checkout can:
- validate stock
- calculate totals
- reduce inventory
- create a receipt

This keeps checkout logic separate from the cart itself.

---

## Object 6: Receipt

### The Receipt knows:
- purchased items
- total amount

### The Receipt can:
- display a purchase summary

This gives the system a final result object after checkout.

---

# 4. Design the Blueprint

Now let’s sketch the system.

## Object cards

### Store
Knows:
- products
- stockByProductId

Does:
- addProduct()
- getProduct()
- getStock()
- reduceStock()

### Product
Knows:
- id
- name
- price

Does:
- showInfo()

### Cart
Knows:
- cartItems

Does:
- addItem()
- removeItem()
- getSubtotal()
- clear()

### CartItem
Knows:
- product
- quantity

Does:
- getLineTotal()

### Checkout
Knows:
- store
- cart

Does:
- validateStock()
- completePurchase()

### Receipt
Knows:
- purchasedItems
- totalAmount

Does:
- displaySummary()

---

## UML-lite blueprint

```txt
Store
- products
- stockByProductId
- addProduct()
- getProduct()
- getStock()
- reduceStock()

Product
- id
- name
- price
- showInfo()

Cart
- cartItems
- addItem()
- removeItem()
- getSubtotal()
- clear()

CartItem
- product
- quantity
- getLineTotal()

Checkout
- store
- cart
- validateStock()
- completePurchase()

Receipt
- purchasedItems
- totalAmount
- displaySummary()
```

---

## Relationship thinking

- A `Store` has many `Product`s
- A `Cart` has many `CartItem`s
- A `CartItem` has one `Product`
- A `Checkout` uses one `Store` and one `Cart`
- A `Receipt` is created after successful checkout

This is mostly **composition** and **association**:
- cart has cart items
- cart item has product
- checkout uses store and cart

---

# 5. Make Key Design Decisions

Before coding, let’s make some smart choices.

---

## Choice 1: Keep inventory in the Store

A strong first choice is:
- the `Store` owns inventory

That means:
- the store knows how many of each product are available
- the cart does not own stock data

This makes sense because the cart is only a shopping plan, not the real inventory manager.

---

## Choice 2: Let Cart store CartItems, not raw product ids

This is a cleaner design because each cart item can own:
- the product
- the quantity
- its line total

That makes cart logic easier to understand.

---

## Choice 3: Reduce stock at checkout, not when added to cart

This is a beginner-friendly design choice.

Why?

Because adding something to a cart does not always mean the customer will buy it.
Maybe they remove it later.
Maybe they close the app.

So the real stock change happens at checkout.

---

## Choice 4: Keep checkout logic in its own object

The cart should not do everything.

The cart should track:
- what the customer wants

The checkout should handle:
- stock validation
- final purchase
- receipt creation

That is a strong responsibility split.

---

## Choice 5: Keep payment simple in version 1

In our first version:
- checkout succeeds if stock is valid
- receipt is created

Later we can add a real `Payment` object.

That keeps the chapter understandable.

---

# 6. TypeScript Code Skeleton

Here is a clean first version.

```ts
class Product {
  id: string;
  name: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  showInfo(): string {
    return `${this.name} - $${this.price}`;
  }
}

class CartItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  getLineTotal(): number {
    return this.product.price * this.quantity;
  }
}

class Cart {
  cartItems: CartItem[];

  constructor() {
    this.cartItems = [];
  }

  addItem(product: Product, quantity: number): void {
    if (quantity <= 0) {
      return;
    }

    for (const item of this.cartItems) {
      if (item.product.id === product.id) {
        item.quantity += quantity;
        return;
      }
    }

    this.cartItems.push(new CartItem(product, quantity));
  }

  removeItem(productId: string, quantity: number): void {
    for (let i = 0; i < this.cartItems.length; i++) {
      const item = this.cartItems[i];

      if (item.product.id === productId) {
        item.quantity -= quantity;

        if (item.quantity <= 0) {
          this.cartItems.splice(i, 1);
        }

        return;
      }
    }
  }

  getSubtotal(): number {
    let total = 0;

    for (const item of this.cartItems) {
      total += item.getLineTotal();
    }

    return total;
  }

  clear(): void {
    this.cartItems = [];
  }
}

class Store {
  products: Map<string, Product>;
  stockByProductId: Map<string, number>;

  constructor() {
    this.products = new Map();
    this.stockByProductId = new Map();
  }

  addProduct(product: Product, stock: number): void {
    this.products.set(product.id, product);
    this.stockByProductId.set(product.id, stock);
  }

  getProduct(productId: string): Product | null {
    return this.products.get(productId) ?? null;
  }

  getStock(productId: string): number {
    return this.stockByProductId.get(productId) ?? 0;
  }

  reduceStock(productId: string, quantity: number): boolean {
    const currentStock = this.getStock(productId);

    if (quantity > currentStock) {
      return false;
    }

    this.stockByProductId.set(productId, currentStock - quantity);
    return true;
  }

  listProducts(): string[] {
    const output: string[] = [];

    for (const [id, product] of this.products.entries()) {
      const stock = this.getStock(id);
      output.push(`${product.showInfo()} (Stock: ${stock})`);
    }

    return output;
  }
}

class Receipt {
  purchasedItems: CartItem[];
  totalAmount: number;

  constructor(purchasedItems: CartItem[], totalAmount: number) {
    this.purchasedItems = purchasedItems;
    this.totalAmount = totalAmount;
  }

  displaySummary(): string[] {
    const lines: string[] = [];

    for (const item of this.purchasedItems) {
      lines.push(
        `${item.product.name} x${item.quantity} = $${item.getLineTotal()}`
      );
    }

    lines.push(`Total = $${this.totalAmount}`);
    return lines;
  }
}

class Checkout {
  store: Store;
  cart: Cart;

  constructor(store: Store, cart: Cart) {
    this.store = store;
    this.cart = cart;
  }

  validateStock(): boolean {
    for (const item of this.cart.cartItems) {
      if (this.store.getStock(item.product.id) < item.quantity) {
        return false;
      }
    }

    return true;
  }

  completePurchase(): Receipt | null {
    if (!this.validateStock()) {
      return null;
    }

    for (const item of this.cart.cartItems) {
      const reduced = this.store.reduceStock(item.product.id, item.quantity);

      if (!reduced) {
        return null;
      }
    }

    const purchasedItems = this.cart.cartItems.map(
      item => new CartItem(item.product, item.quantity)
    );

    const total = this.cart.getSubtotal();
    const receipt = new Receipt(purchasedItems, total);

    this.cart.clear();
    return receipt;
  }
}
```

---

# 7. Walk Through the Core Flow

Let’s simulate a grocery store.

```ts
const store = new Store();

const apples = new Product("P1", "Apple", 1);
const bread = new Product("P2", "Bread", 3);
const milk = new Product("P3", "Milk", 4);

store.addProduct(apples, 20);
store.addProduct(bread, 10);
store.addProduct(milk, 4);

const cart = new Cart();
```

Now Maya shops.

```ts
cart.addItem(apples, 2);
cart.addItem(bread, 1);
```

What happens?

1. The cart stores 2 apples
2. The cart stores 1 bread
3. The cart subtotal becomes:
   - apples: 2 x 1 = 2
   - bread: 1 x 3 = 3
   - subtotal = 5

That is the shopping flow.

---

## Then Maya checks out

```ts
const checkout = new Checkout(store, cart);
const receipt = checkout.completePurchase();
```

What should happen?

1. The checkout checks whether apples and bread are in stock
2. The store reduces apple stock by 2
3. The store reduces bread stock by 1
4. A receipt is created
5. The cart is cleared

That is the happy path.

---

## What does the receipt show?

If checkout succeeds, the receipt can show lines like:

```txt
Apple x2 = $2
Bread x1 = $3
Total = $5
```

That is a clean first version.

---

# 8. Walk Through a Stock Problem

Now imagine Maya wants too much milk.

```ts
cart.addItem(milk, 10);
const badCheckout = new Checkout(store, cart);
const badReceipt = badCheckout.completePurchase();
```

Suppose only 4 milk cartons are in stock.

What should happen?

1. `validateStock()` checks the cart
2. It sees that 10 is greater than 4
3. Checkout fails
4. No inventory is reduced
5. The system returns `null`

That is exactly what we want.

This shows why checkout validation is an important separate step.

---

# 9. Edge Cases to Handle

Strong designers ask:
- what can go wrong?
- what rules matter most?

---

## Edge Case 1: Product does not exist

If someone tries to use a product id the store does not know, the system should reject it.

A stronger full system would validate this earlier in the shopping flow.

---

## Edge Case 2: Cart is empty at checkout

If there are no items in the cart:
- checkout should likely fail
- or return an empty result

That would be a good small improvement.

---

## Edge Case 3: Stock changed before checkout

A product might have been in stock when added to the cart, but not when checkout happens.

That is exactly why validating stock at checkout is important.

---

## Edge Case 4: Remove too many items from the cart

If the customer removes more than the cart contains:
- the system should not go negative in a strange way

Our current version removes the cart item completely if quantity becomes 0 or less.
That is a simple and reasonable rule.

---

## Edge Case 5: One bad item in a big cart

If one product in the cart is out of stock, the system should not half-complete the purchase unless that behavior is clearly supported.

Our version rejects the whole checkout.
That keeps the design clean.

---

# 10. Upgrade Ideas

Once the basic design works, we can make it smarter.

---

## Upgrade 1: Customer object

Add:
- `Customer`

This could support:
- name
- loyalty points
- purchase history

---

## Upgrade 2: Payment object

Add:
- `Payment`

This could track:
- amount
- payment method
- payment success or failure

That would make checkout more realistic.

---

## Upgrade 3: Discount rules

Add:
- `DiscountRule`

This could support:
- buy one get one free
- percentage discounts
- member discounts

That would make pricing logic much richer.

---

## Upgrade 4: Tax calculation

We could add:
- tax rules
- subtotal vs tax vs final total

That would make receipts more realistic.

---

## Upgrade 5: Inventory manager

If the system becomes larger, we might add:
- `InventoryManager`

This could handle:
- restocking
- low-stock alerts
- inventory reports

---

## Upgrade 6: Different product types

We could later support:
- produce sold by weight
- drinks sold by count
- frozen items
- special age-restricted items

That would make the product system more advanced.

---

# 11. Why This Design Is Strong

This design is strong because:

- responsibilities are clearly separated
- `Store` owns inventory
- `Cart` owns selected items
- `CartItem` owns product + quantity
- `Checkout` owns validation and purchase flow
- `Receipt` owns purchase summary
- the design supports real shopping behavior
- future upgrades fit naturally

This is what strong beginner OOD looks like:
- clear
- practical
- extendable

---

# 12. Common Beginner Mistakes

## Mistake 1: Letting Cart own store inventory

That is not a good responsibility split.

The cart should represent:
- what the customer wants

The store should represent:
- what is actually available

---

## Mistake 2: No CartItem object

Without `CartItem`, the cart often becomes messy because it must manage:
- products
- quantities
- line totals
all in weaker ways

`CartItem` makes the design cleaner.

---

## Mistake 3: Reducing stock too early

If stock changes as soon as an item is added to the cart, that can be messy when:
- the user removes it
- the user abandons the cart

That is why our beginner version reduces stock at checkout.

---

## Mistake 4: Checkout logic spread everywhere

A strong design keeps checkout logic together.
That is why `Checkout` is useful.

---

# Chapter Review

## What you learned

In this chapter, you learned how to design a grocery store system as an object-oriented system.

You learned how to:

- gather requirements
- identify core objects
- separate inventory from the cart
- use cart items to track quantities cleanly
- build a TypeScript code skeleton
- simulate shopping and checkout
- think about stock validation and upgrade ideas

---

## Main objects in this design

### Store
Owns:
- products
- inventory

### Product
Owns:
- product identity
- name
- price

### Cart
Owns:
- selected cart items

### CartItem
Owns:
- product + quantity pair

### Checkout
Owns:
- stock validation
- purchase completion

### Receipt
Owns:
- final purchase summary

---

## Strong design lesson

This chapter teaches an important OOD lesson:

> Shopping state and inventory state  
> are related, but they should not be mixed carelessly.

That is a very important design idea.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In this design, the `Store` owns product ________, while the `Cart` owns the customer’s selected ________.

**Answer:** inventory, items

---

## 2. True or False

The cart should usually reduce store stock immediately every time a user adds an item.

**Answer:** False

In this design, stock changes at checkout.

---

## 3. Short Answer

Why is `CartItem` useful?

**Answer:** Because it cleanly stores both the product and the quantity together, which makes cart logic easier to design.

---

## 4. Short Answer

Why is a grocery store a good OOD challenge?

**Answer:** Because it has products, inventory, carts, checkout, receipts, changing state, and lots of natural upgrade ideas.

---

## 5. Fill in the blank

A `Cart` has many `CartItem`s, which is an example of ________.

**Answer:** composition

---

## 6. Mini Design Challenge

What object would you add if customers needed to pay by card or wallet?

One good answer:
- `Payment`

---

## 7. Mini Design Challenge

What object would you add if the store wanted coupons or sales?

One good answer:
- `DiscountRule`

---

# Practice Prompts

Try these on your own:

1. Add a `Customer` class.
2. Add a `Payment` class.
3. Add taxes to the receipt.
4. Add discounts or coupons.
5. Add produce sold by weight instead of by count.

---

# Friendly Wrap-up

This chapter shows how a real shopping system can be designed step by step:

- understand the mission
- ask smart questions
- find the core objects
- separate inventory from cart behavior
- build the blueprint
- create the code skeleton
- test real shopping flows
- improve the design with edge cases and upgrades

That is real Object Oriented Design.

Next, we will design another real-world system: **Design an ATM System**.
