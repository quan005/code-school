---
title: "Design an ATM System"
chapterSlug: "design-an-atm-system"
order: 10
audience: "Middle school students (Grades 6–8)"
estimatedMinutes: 125
skills:
  - "Turn an ATM into objects with clear responsibilities"
  - "Design a system using ATM, Account, Card, Session, and Transaction classes"
  - "Think about authentication, withdrawals, deposits, balances, and receipts"
  - "Write a clean TypeScript code skeleton for a transaction-based system"
---

# Design an ATM System

> Audience: Middle school students (Grades 6–8)  
> Language used in code examples: TypeScript  
> Big idea: An ATM system becomes much easier to design when we separate cards, accounts, sessions, transactions, and the machine itself into objects with clear jobs.

---

# Chapter Overview

An ATM seems simple when you use it.

You:
- insert a card
- enter a PIN
- choose an action
- maybe withdraw cash
- maybe deposit money
- maybe check your balance
- take your card back

But underneath, the system has to manage a lot:

- card reading
- account lookup
- PIN checking
- current user session
- deposits
- withdrawals
- cash inside the machine
- receipts
- invalid actions
- security rules

That makes an ATM a fantastic Object Oriented Design challenge.

This chapter helps students practice:
- authentication
- state and sessions
- transaction flow
- responsibility design
- safety and edge cases

In this chapter, we will learn:

1. **Understand the Mission**
2. **Gather Requirements**
3. **Identify Core Objects**
4. **Design the Blueprint**
5. **Make Key Design Decisions**
6. **Build the TypeScript Code Skeleton**
7. **Walk Through Core Use Cases**
8. **Handle Edge Cases**
9. **Think About Security at a Kid-Friendly Level**
10. **Upgrade the System**
11. **Chapter Review**
12. **Mastery Check**

---

# 1. Understand the Mission

## The design challenge

Design an ATM system.

The system should support:
- inserting a card
- entering a PIN
- checking balance
- withdrawing money
- depositing money
- printing a receipt
- ending the session

For a first version, we want the system to allow a user to:

1. insert a card
2. authenticate with a PIN
3. choose an action
4. complete a transaction
5. safely end the session

---

## Why this is a strong OOD challenge

An ATM is a strong design problem because it includes:

- identity and account access
- machine state
- financial transactions
- security rules
- physical cash handling
- receipts
- strong edge cases

It also teaches a powerful design lesson:

> Some systems are not just about doing actions.  
> They must also protect important rules and sensitive data.

That makes ATM systems a great OOD challenge.

---

# 2. Gather Requirements

Before building, we should understand the mission clearly.

## Core requirements

Our ATM system should:

1. Accept a card
2. Verify a PIN
3. Start a session after successful authentication
4. Let the user check balance
5. Let the user withdraw money
6. Let the user deposit money
7. Print a receipt
8. Return the card when finished

---

## Clarifying questions

A strong designer asks smart questions before coding.

For this system, good questions include:

- Does each card connect to one account?
- Does the ATM support checking balance, deposit, and withdrawal?
- Should the machine track how much cash it contains?
- What happens if the PIN is wrong?
- What happens if there is not enough money in the account?
- What happens if there is not enough cash in the ATM?
- Should the session end after the card is ejected?
- Should we store transaction history?

For our chapter, we will choose:

- each card connects to one account
- the ATM supports balance check, deposit, and withdrawal
- the ATM tracks how much cash it currently has
- wrong PIN blocks access
- withdrawals fail if the account balance is too low
- withdrawals fail if the ATM does not have enough cash
- the session ends when the card is ejected
- simple transaction history will be included as a possible extension

---

## A simple use case

Maya uses the ATM.

The system should:
1. accept Maya’s card
2. ask for a PIN
3. verify the PIN
4. allow Maya to withdraw $20
5. reduce Maya’s account balance
6. reduce the ATM’s cash
7. print a receipt
8. return the card

That is the main happy path.

---

## A more complex use case

Now imagine:
- Maya enters the wrong PIN
- or tries to withdraw more money than is in her account
- or the ATM does not have enough cash left

The system must:
- reject the bad action
- protect the account
- keep the ATM state correct

That makes the design more interesting.

---

# 3. Identify Core Objects

Now let’s ask:

> What are the main things in this system?

A strong starting set is:

- `ATM`
- `Card`
- `Account`
- `Session`
- `Transaction`
- `Receipt`

We may also add:
- `Bank`
- `CashDispenser`
- `CardReader`
- `DepositSlot`

But the first six are enough for a strong first version.

---

## Object 1: ATM

### The ATM knows:
- how much cash it contains
- the current session
- maybe the available actions

### The ATM can:
- accept a card
- authenticate a user
- check balance
- withdraw
- deposit
- eject a card
- print a receipt

The ATM coordinates the whole machine flow.

---

## Object 2: Card

### The Card knows:
- card number
- linked account id
- card holder name

### The Card can:
- provide card information

The card represents the physical thing inserted into the machine.

---

## Object 3: Account

### The Account knows:
- account id
- owner name
- current balance
- PIN

### The Account can:
- verify a PIN
- deposit money
- withdraw money
- report balance

The account is the object that owns the real money balance.

---

## Object 4: Session

### The Session knows:
- current card
- current account
- whether authentication succeeded

### The Session can:
- start
- authenticate
- end
- report whether the user is currently allowed to perform actions

This object is very helpful because ATM actions should only happen inside an active, authenticated session.

---

## Object 5: Transaction

### The Transaction knows:
- type
- amount
- success or failure
- maybe a timestamp

### The Transaction can:
- describe what happened

This object helps represent one action like a withdrawal or deposit.

---

## Object 6: Receipt

### The Receipt knows:
- transaction summary
- current balance after the action

### The Receipt can:
- display a summary

This gives the system a final result object for the user.

---

# 4. Design the Blueprint

Now let’s sketch the system.

## Object cards

### ATM
Knows:
- cashAvailable
- session

Does:
- insertCard()
- enterPin()
- checkBalance()
- withdraw()
- deposit()
- ejectCard()

### Card
Knows:
- cardNumber
- accountId
- holderName

Does:
- showInfo()

### Account
Knows:
- accountId
- ownerName
- pin
- balance

Does:
- verifyPin()
- getBalance()
- deposit()
- withdraw()

### Session
Knows:
- currentCard
- currentAccount
- authenticated

Does:
- start()
- authenticate()
- end()
- isActive()

### Transaction
Knows:
- type
- amount
- success
- message

Does:
- describe()

### Receipt
Knows:
- transaction
- balanceAfter

Does:
- displaySummary()

---

## UML-lite blueprint

```txt
ATM
- cashAvailable
- session
- insertCard()
- enterPin()
- checkBalance()
- withdraw()
- deposit()
- ejectCard()

Card
- cardNumber
- accountId
- holderName
- showInfo()

Account
- accountId
- ownerName
- pin
- balance
- verifyPin()
- getBalance()
- deposit()
- withdraw()

Session
- currentCard
- currentAccount
- authenticated
- start()
- authenticate()
- end()
- isActive()

Transaction
- type
- amount
- success
- message
- describe()

Receipt
- transaction
- balanceAfter
- displaySummary()
```

---

## Relationship thinking

- An `ATM` has one current `Session`
- A `Session` has one `Card` and one `Account` while active
- A `Card` links to an `Account`
- A `Transaction` belongs to one action in the session
- A `Receipt` is created from a transaction result

This is a strong mix of composition and association.

---

# 5. Make Key Design Decisions

Before coding, let’s make a few smart choices.

---

## Choice 1: Keep account balance inside Account

A strong design says:
- the `Account` owns the balance

That means:
- deposits and withdrawals change the balance there
- the ATM does not directly own or control the money in the account

This is a very important responsibility choice.

---

## Choice 2: Keep the PIN inside Account

The PIN belongs with the account’s security rules.

That means:
- the account verifies the PIN
- the ATM asks the account whether it is correct

This is a good example of encapsulation.

---

## Choice 3: Use a Session object

This is one of the most important design choices in the chapter.

Without a session object, the ATM would have to store lots of temporary state in messy ways.

A `Session` helps keep track of:
- current card
- current account
- whether authentication succeeded

That makes the design much cleaner.

---

## Choice 4: Keep the ATM’s physical cash separate from account balance

This is a very important real-world distinction.

The ATM’s machine cash is:
- how much cash is physically inside the ATM

The account balance is:
- how much money the user has in their bank account

These are not the same thing.

A withdrawal should only succeed if:
- the account has enough money
- and the ATM has enough cash

That is a powerful system-design idea.

---

## Choice 5: Keep the first version simple

For a beginner-friendly version:
- one card maps to one account
- PIN verification is simple
- receipt is simple
- no transfer-between-accounts yet

This keeps the chapter understandable.

---

# 6. TypeScript Code Skeleton

Here is a clean first version.

```ts
enum TransactionType {
  BalanceInquiry = "balance_inquiry",
  Withdrawal = "withdrawal",
  Deposit = "deposit",
}

class Card {
  cardNumber: string;
  accountId: string;
  holderName: string;

  constructor(cardNumber: string, accountId: string, holderName: string) {
    this.cardNumber = cardNumber;
    this.accountId = accountId;
    this.holderName = holderName;
  }

  showInfo(): string {
    return `${this.holderName} - ${this.cardNumber}`;
  }
}

class Account {
  accountId: string;
  ownerName: string;
  private pin: string;
  private balance: number;

  constructor(accountId: string, ownerName: string, pin: string, balance: number) {
    this.accountId = accountId;
    this.ownerName = ownerName;
    this.pin = pin;
    this.balance = balance;
  }

  verifyPin(inputPin: string): boolean {
    return this.pin === inputPin;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): boolean {
    if (amount <= 0) {
      return false;
    }

    this.balance += amount;
    return true;
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
}

class Session {
  currentCard: Card | null;
  currentAccount: Account | null;
  authenticated: boolean;

  constructor() {
    this.currentCard = null;
    this.currentAccount = null;
    this.authenticated = false;
  }

  start(card: Card, account: Account): void {
    this.currentCard = card;
    this.currentAccount = account;
    this.authenticated = false;
  }

  authenticate(pin: string): boolean {
    if (this.currentAccount === null) {
      return false;
    }

    this.authenticated = this.currentAccount.verifyPin(pin);
    return this.authenticated;
  }

  isActive(): boolean {
    return this.currentCard !== null && this.currentAccount !== null && this.authenticated;
  }

  end(): void {
    this.currentCard = null;
    this.currentAccount = null;
    this.authenticated = false;
  }
}

class Transaction {
  type: TransactionType;
  amount: number;
  success: boolean;
  message: string;

  constructor(type: TransactionType, amount: number, success: boolean, message: string) {
    this.type = type;
    this.amount = amount;
    this.success = success;
    this.message = message;
  }

  describe(): string {
    return `${this.type}: ${this.message}`;
  }
}

class Receipt {
  transaction: Transaction;
  balanceAfter: number;

  constructor(transaction: Transaction, balanceAfter: number) {
    this.transaction = transaction;
    this.balanceAfter = balanceAfter;
  }

  displaySummary(): string[] {
    return [
      this.transaction.describe(),
      `Balance after transaction: $${this.balanceAfter}`,
    ];
  }
}

class ATM {
  cashAvailable: number;
  session: Session;
  accountsById: Map<string, Account>;

  constructor(cashAvailable: number, accounts: Account[]) {
    this.cashAvailable = cashAvailable;
    this.session = new Session();
    this.accountsById = new Map();

    for (const account of accounts) {
      this.accountsById.set(account.accountId, account);
    }
  }

  insertCard(card: Card): boolean {
    const account = this.accountsById.get(card.accountId);

    if (!account) {
      return false;
    }

    this.session.start(card, account);
    return true;
  }

  enterPin(pin: string): boolean {
    return this.session.authenticate(pin);
  }

  checkBalance(): Receipt | null {
    if (!this.session.isActive() || this.session.currentAccount === null) {
      return null;
    }

    const transaction = new Transaction(
      TransactionType.BalanceInquiry,
      0,
      true,
      "Balance checked successfully"
    );

    return new Receipt(transaction, this.session.currentAccount.getBalance());
  }

  withdraw(amount: number): Receipt | null {
    if (!this.session.isActive() || this.session.currentAccount === null) {
      return null;
    }

    if (amount <= 0) {
      const badTransaction = new Transaction(
        TransactionType.Withdrawal,
        amount,
        false,
        "Invalid withdrawal amount"
      );
      return new Receipt(badTransaction, this.session.currentAccount.getBalance());
    }

    if (amount > this.cashAvailable) {
      const cashTransaction = new Transaction(
        TransactionType.Withdrawal,
        amount,
        false,
        "ATM does not have enough cash"
      );
      return new Receipt(cashTransaction, this.session.currentAccount.getBalance());
    }

    const success = this.session.currentAccount.withdraw(amount);

    if (!success) {
      const failedTransaction = new Transaction(
        TransactionType.Withdrawal,
        amount,
        false,
        "Account does not have enough balance"
      );
      return new Receipt(failedTransaction, this.session.currentAccount.getBalance());
    }

    this.cashAvailable -= amount;

    const transaction = new Transaction(
      TransactionType.Withdrawal,
      amount,
      true,
      `Withdrew $${amount}`
    );

    return new Receipt(transaction, this.session.currentAccount.getBalance());
  }

  deposit(amount: number): Receipt | null {
    if (!this.session.isActive() || this.session.currentAccount === null) {
      return null;
    }

    const success = this.session.currentAccount.deposit(amount);

    if (!success) {
      const failedTransaction = new Transaction(
        TransactionType.Deposit,
        amount,
        false,
        "Invalid deposit amount"
      );
      return new Receipt(failedTransaction, this.session.currentAccount.getBalance());
    }

    this.cashAvailable += amount;

    const transaction = new Transaction(
      TransactionType.Deposit,
      amount,
      true,
      `Deposited $${amount}`
    );

    return new Receipt(transaction, this.session.currentAccount.getBalance());
  }

  ejectCard(): void {
    this.session.end();
  }
}
```

---

# 7. Walk Through the Core Flow

Let’s simulate an ATM.

```ts
const mayaAccount = new Account("A1", "Maya", "1234", 200);
const atm = new ATM(1000, [mayaAccount]);
const mayaCard = new Card("CARD-1", "A1", "Maya");
```

Now Maya inserts her card.

```ts
atm.insertCard(mayaCard);
const authenticated = atm.enterPin("1234");
```

What should happen?

1. The ATM finds Maya’s account
2. The session starts
3. The session checks the PIN
4. Authentication succeeds
5. Maya can now use ATM actions

That is the start of the happy path.

---

## Then Maya checks her balance

```ts
const balanceReceipt = atm.checkBalance();
```

What should happen?

1. The ATM checks whether the session is active
2. The ATM creates a balance inquiry transaction
3. The receipt shows Maya’s current balance

That is a simple ATM action.

---

## Then Maya withdraws money

```ts
const withdrawReceipt = atm.withdraw(20);
```

What should happen?

1. The ATM checks session status
2. The ATM checks whether Maya’s account has at least $20
3. The ATM checks whether the machine has at least $20 cash
4. The account balance drops by $20
5. The ATM cash drops by $20
6. A receipt is created

That is the main withdrawal flow.

---

# 8. Walk Through a Deposit Flow

Now suppose Maya deposits $50.

```ts
const depositReceipt = atm.deposit(50);
```

What should happen?

1. The ATM checks session status
2. The ATM sends the deposit to the account
3. The account balance increases by $50
4. The ATM cash increases by $50 in this beginner model
5. A receipt is created

That is the main deposit flow.

---

# 9. Handle Edge Cases

Strong designers always ask:
- what can go wrong?
- what rules matter most?

---

## Edge Case 1: Wrong PIN

If Maya enters the wrong PIN:
- authentication should fail
- ATM actions should remain blocked

Our design handles this because:
- `Session.authenticate()` sets `authenticated` only if the PIN matches

---

## Edge Case 2: Not enough account balance

If Maya tries to withdraw more than her account has:
- the withdrawal should fail
- the account balance should not change
- the ATM cash should not change

Our design handles this because:
- `Account.withdraw()` returns false if the balance is too low

---

## Edge Case 3: Not enough ATM cash

If the ATM physically does not have enough bills:
- the withdrawal should fail even if the account has enough money

This is a key real-world rule.

Our design handles this because:
- the ATM checks `cashAvailable` before completing the withdrawal

---

## Edge Case 4: No active authenticated session

If someone tries to use the ATM before entering a correct PIN:
- the action should fail

Our design handles this because:
- ATM actions check `session.isActive()`

---

## Edge Case 5: Invalid deposit or withdrawal amounts

If the amount is 0 or negative:
- the action should fail

Our design handles this with validation inside the account and ATM methods.

---

## Edge Case 6: End of session

When the card is ejected:
- the session should fully reset

That is important because the next user should not inherit the last user’s state.

Our design handles this through:
- `session.end()`

---

# 10. Think About Security at a Kid-Friendly Level

ATM systems are a good place to introduce security thinking in a simple way.

## Why security matters

ATMs deal with:
- identity
- money
- account access

That means the system must protect important information.

---

## Kid-friendly security ideas

A strong beginner should understand:

- the PIN should not be changed carelessly from outside
- a user should not do ATM actions before authentication
- the session should reset after the card is removed
- the ATM should not give money unless both account rules and machine rules are satisfied

That is already strong security thinking for this level.

---

## Encapsulation example

Notice how the `Account` keeps:
- `pin`
- `balance`

private from careless outside changes.

That is a great example of using encapsulation for safety.

---

# 11. Upgrade Ideas

Once the core design works, we can improve it.

---

## Upgrade 1: Real bank object

Add:
- `Bank`

This could manage:
- many accounts
- account lookup
- bank-wide rules

That would make the ATM less responsible for account storage.

---

## Upgrade 2: Transaction history

Add:
- a list of past transactions

This could let users:
- view recent activity
- print mini statements

---

## Upgrade 3: Transfer between accounts

We could add:
- transfer from checking to savings

That would make the system more realistic.

---

## Upgrade 4: Cash dispenser object

Add:
- `CashDispenser`

This could handle:
- physical bill availability
- dispensing logic

That would make the ATM design even cleaner.

---

## Upgrade 5: Card reader and deposit slot

Add:
- `CardReader`
- `DepositSlot`

This would separate the machine’s physical parts more clearly.

---

## Upgrade 6: PIN retry limits

A real ATM might:
- allow only 3 bad PIN tries
- lock the session or card afterward

That would be a strong future upgrade for security.

---

# 12. Why This Design Is Strong

This design is strong because:

- responsibilities are clearly separated
- `Account` owns balance and PIN verification
- `Session` owns authentication state
- `ATM` owns machine flow and cash availability
- `Transaction` describes each action
- `Receipt` gives a clean result object
- the design handles both happy paths and important failure cases
- future upgrades fit naturally

This is what strong beginner OOD looks like:
- clear
- safe
- extendable

---

# 13. Common Beginner Mistakes

## Mistake 1: Letting ATM directly control everything about account money

The account should own:
- balance
- withdrawal rules
- deposit rules

The ATM should coordinate, not steal all those responsibilities.

---

## Mistake 2: No session object

Without a session, the ATM can become messy because it must store:
- current card
- current account
- PIN success state
- whether a user is active

The `Session` object keeps this much cleaner.

---

## Mistake 3: Mixing ATM cash with account balance

These are different things.

- account balance = the user’s money in the bank
- ATM cash = the physical money in the machine

A strong design must keep them separate.

---

## Mistake 4: Ignoring security rules

If a design allows:
- actions before PIN verification
- careless access to PIN or balance
- sessions that never reset

then the design is weak.

ATM systems are a great place to practice safe system thinking.

---

# Chapter Review

## What you learned

In this chapter, you learned how to design an ATM system as an object-oriented system.

You learned how to:

- gather requirements
- identify core objects
- separate account data from machine data
- use a session object for authentication state
- build a TypeScript code skeleton
- simulate withdrawals, deposits, and balance checks
- think about security and edge cases
- plan realistic upgrade ideas

---

## Main objects in this design

### ATM
Owns:
- machine flow
- cash availability
- active session

### Card
Owns:
- card identity
- linked account id

### Account
Owns:
- balance
- PIN
- deposit and withdrawal rules

### Session
Owns:
- active user context
- authentication state

### Transaction
Owns:
- action summary

### Receipt
Owns:
- final user-facing result

---

## Strong design lesson

This chapter teaches an important OOD lesson:

> Systems that handle important resources  
> must separate identity, state, and action very carefully.

That is a powerful design idea.

---

# Mastery Check

Try these before looking at the answers.

## 1. Fill in the blank

In this design, the `Account` owns the user’s ________, while the `ATM` owns the machine’s available ________.

**Answer:** balance, cash

---

## 2. True or False

A user should be able to withdraw money before entering the correct PIN.

**Answer:** False

The session must be authenticated first.

---

## 3. Short Answer

Why is `Session` a useful object in an ATM design?

**Answer:** Because it keeps track of the current card, account, and whether the user has successfully authenticated, which makes ATM flow cleaner and safer.

---

## 4. Short Answer

Why is an ATM a good OOD challenge?

**Answer:** Because it combines identity, money, transactions, machine state, and security rules in one system.

---

## 5. Fill in the blank

An `ATM` has a `Session`, which is an example of ________.

**Answer:** composition

---

## 6. Mini Design Challenge

What object would you add if the ATM needed to physically count and dispense bills?

One good answer:
- `CashDispenser`

---

## 7. Mini Design Challenge

What upgrade would you add if users needed to move money between two accounts?

One good answer:
- transfer support, or a `TransferTransaction`

---

# Practice Prompts

Try these on your own:

1. Add a `Bank` class.
2. Add transaction history.
3. Add transfer between two accounts.
4. Add a PIN retry limit.
5. Add a `CashDispenser` object.

---

# Friendly Wrap-up

This chapter shows how a real financial machine can be designed step by step:

- understand the mission
- ask smart questions
- find the core objects
- separate account rules from machine rules
- build the blueprint
- create the code skeleton
- test real transaction flows
- improve the design with security and upgrade ideas

That is real Object Oriented Design.

This chapter also completes the first full set of OOD system design challenges in this curriculum stage.
