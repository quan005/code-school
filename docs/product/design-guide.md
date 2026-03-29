We want borrow the **emotional system** and **interaction philosophy** of Jungle Junior (`https://www.edclub.com/library/jungle-junior`), not duplicate its exact art or characters.

What we want to capture is this:

* **gentle, cheerful, low-pressure learning**
* **storybook-style educational visuals**
* **big obvious interactions**
* **clear progress and reward**
* **concepts made physical and visual**
* **a world that feels safe, bright, and playful**

For a code school focused on **algorithms and data types**, the challenge is translating abstract CS ideas into a world that feels as concrete and friendly as Jungle Junior.

Below is a detailed design guide you can use as a north star for product, visual design, motion, and lesson UX.

---

# 1. Core creative direction

## The vibe to capture

Jungle Junior works because it feels like:

* a **children’s picture book**
* a **toy box**
* a **light educational game**
* a **rewarding progress map**
* a **guided activity**, not a tool

It does **not** feel like:

* a productivity app
* a coding IDE
* a test platform
* a dashboard-heavy SaaS product

For your school, the product should feel like:

> **A playful adventure world where algorithms are living systems and data types are objects, creatures, paths, containers, and machines.**

Instead of “learn arrays, linked lists, sorting, and recursion,” the child should feel like they are:

* organizing treasure shelves
* sending animals through a line
* stacking pancakes
* exploring branching forests
* following map routes
* sorting fruit baskets
* searching caves for hidden gems

That is the translation layer.

---

# 2. Brand positioning for this style

## Product personality

Your code school should feel:

* **kind**
* **smart but never intimidating**
* **playful without being silly**
* **structured without being stiff**
* **educational without feeling academic**

## Tone of voice

Use copy that is:

* short
* encouraging
* concrete
* action-oriented
* curiosity-driven

Good examples:

* “Let’s line them up.”
* “Nice! You found the smallest one.”
* “This stack only grows from the top.”
* “Oops, that path is blocked. Try another branch.”
* “Great job. You just used a queue.”

Avoid copy like:

* “Execute the insertion operation.”
* “This interface demonstrates LIFO semantics.”
* “Traverse the structure in depth-first order.”

That language can appear later, but only **after** the child understands the visual metaphor.

---

# 3. The visual DNA you want to emulate

Based on the Jungle Junior vibe in the screenshots you shared, the design language is built on a few very consistent pillars.

## A. Big, simple shapes

Everything is readable from far away.

* large cards
* large icons
* large buttons
* few tiny controls
* lots of empty space

This is crucial for kids and for reducing cognitive load.

## B. Soft flat vector illustration

The illustrations feel:

* flat
* geometric
* rounded
* friendly
* clean
* minimally detailed

They are not painterly.
They are not textured in a complex way.
They are not overly outlined.
They are not visually noisy.

## C. Light neutral backgrounds with bright accents

A lot of the UI sits on:

* very light gray
* pale sky blue
* white-ish surfaces

Then the visual energy comes from:

* red
* yellow
* green
* blue
* orange

This makes the interface feel colorful without becoming chaotic.

## D. A single focal action per screen

Jungle Junior screens tend to say:

* here is the thing
* here is the action
* here is your progress

That is it.

No side panels.
No complex filters.
No nested settings.
No heavy toolbar density.

## E. Positive reward signaling

Progress is visible everywhere:

* checks
* stars
* points
* completed tiles
* celebratory states

This matters a lot in educational UX.

---

# 4. Your original visual world for algorithms

Do not build a jungle clone. Build your own world with the same emotional feel.

## Recommended world concept

A strong concept would be:

# **Code Meadow** or **Algo World**

A playful learning world made of habitats where each habitat teaches a CS concept.

Example zones:

* **Array Orchard** — arrays, indexing, iteration
* **Stack Mountain** — stacks, push/pop
* **Queue Station** — queues, order, waiting
* **Linked Trail** — linked lists and pointers
* **Tree Grove** — trees, branching, traversal
* **Graph Jungle** — maps, nodes, edges, routing
* **Hash Village** — keys, values, buckets
* **Sort Market** — sorting, comparing, grouping
* **Search Caverns** — linear search, binary search
* **Recursion Ridge** — self-similar patterns, repeated calls

This gives you a world that is educational, expandable, and visually rich.

---

# 5. Art direction guide

## Illustration style

Your illustrations should be:

* flat vector
* rounded corners
* low detail
* large readable silhouettes
* minimal facial features
* warm, expressive poses
* no thin fragile lines
* no hard realism

## Character design language

Use mascots that act as guides, helpers, or examples.

Possible mascots:

* **Milo the Fox** — curious explorer, introduces searching
* **Pip the Otter** — organizes items in order, good for arrays and sorting
* **Tango the Turtle** — slow and careful, ideal for step-by-step lessons
* **Bloop the Monkey** — playful, useful for stack/queue activities
* **Nova the Owl** — wise helper for trees and recursion
* **Dot the Robot** — teaches precise logic and algorithm steps

Each character should have:

* 1 dominant shape language
* 1 or 2 accent colors
* one recognizable prop or expression
* a simple emotional range:

  * happy
  * thinking
  * cheering
  * surprised
  * encouraging

## Background art

Backgrounds should be simple and layered:

* sky / field / cave / grove / workshop
* soft clouds, leaves, stones, boxes, signs
* large decorative forms
* low-frequency visual noise

Keep backgrounds secondary. They should support the learning surface, not compete with it.

---

# 6. Color system

You want a palette that is cheerful and educational, but less random than a preschool toy catalog.

## Base neutrals

* App background: `#F4F4F1`
* Card background: `#FFFFFF`
* Soft panel: `#ECECE7`
* Border soft: `#D9D9D2`
* Text primary: `#444444`
* Text secondary: `#6A6A6A`

## Primary playful colors

* Friendly Red: `#FF5A4F`
* Sunny Yellow: `#F6C744`
* Leaf Green: `#7ED957`
* Sky Blue: `#3DA5F4`
* Orange Pop: `#FF9C3A`
* Soft Purple: `#9B8AFB`

## Support colors

* Success: `#2BCB5A`
* Warning: `#F3B63F`
* Info: `#3D8BFF`
* Error: `#F25F5C`

## Usage rules

Use colors with meaning and consistency.

For example:

* green = correct / completed / safe
* blue = active / selected / info
* yellow = attention / hint / special lesson
* red = compare / contrast / action / high energy
* purple = magic / advanced concept / special challenge

Do not overload every screen with all colors equally.
Usually pick:

* 1 neutral base
* 1 primary accent
* 1 secondary accent
* 1 success color

---

# 7. Typography system

The Jungle Junior vibe depends heavily on typography feeling friendly.

## Recommended type pairing

### Display / headings

Use a rounded, child-friendly sans:

* Fredoka
* Baloo 2
* Nunito ExtraBold
* Quicksand Bold

### Body / UI

Use something super readable:

* Nunito
* Inter
* Atkinson Hyperlegible
* Plus Jakarta Sans

### Code / algorithm notation

Use a soft monospace, but sparingly:

* JetBrains Mono
* IBM Plex Mono
* Fira Mono

Only use monospace for:

* variable labels
* code snippets
* index numbers
* step labels
* mini examples

The interface itself should mostly use the rounded UI font.

## Typography behavior

* Use short headings
* Use sentence case
* Keep line length short
* Avoid dense paragraphs
* Prioritize labels over explanations

Good:

* “Build the queue”
* “What comes next?”
* “Find the smallest one”

Not ideal:

* “Introduction to stable and unstable sorting paradigms”

---

# 8. Layout principles

## Screen density

Keep density low.

Children should never feel like they are looking at a spreadsheet or dashboard.

## Use a three-layer layout model

### 1. Top layer: progress and navigation

* back button
* lesson title
* world/zone name
* progress chip
* reward counters

### 2. Middle layer: primary interactive scene

This is the hero area.
It should take the most space.

Examples:

* sorting fruit on shelves
* guiding a fox through a branching path
* stacking boxes
* moving nodes along ropes
* placing cards in order

### 3. Bottom layer: action controls

* next
* replay
* hint
* try again
* drag items
* step controls
* answer buttons

## Spacing rhythm

Use generous spacing.

Recommended rhythm:

* 8px micro spacing
* 16px standard spacing
* 24px section spacing
* 32px screen block spacing
* 48px breathing space around major scenes

Kids’ interfaces need air.

---

# 9. Core component library

## 1. Lesson world tile

Inspired by the level grid feel.

Structure:

* rounded rectangular card
* lesson number or symbol in top-left
* big illustration in center
* small completion badge
* lesson title at bottom

Examples:

* “Array 1”
* “Stack 2”
* “Queue Line”
* “Tree Branches”

States:

* locked
* unlocked
* completed
* current
* bonus challenge

## 2. Big circular action buttons

Use large icon-first buttons for:

* home
* replay
* next
* hint
* pause

These should feel like toy buttons.

## 3. Progress chips

Small pill components:

* `24% complete`
* `3 stars`
* `120 gems`
* `4-day streak`

These should be lightweight and visually calm.

## 4. Mascot speech bubble

A guide component that explains the next step.
Should be:

* short
* optional to replay with audio
* dismissible
* positioned near the mascot or lesson scene

## 5. Interactive object cards

These are draggable or tappable objects used inside lessons:

* number fruits
* node stones
* algorithm cards
* labeled boxes
* path pieces
* key-value tags

## 6. Success badge

On completion:

* star burst
* check icon
* smiling mascot
* phrase like “You did it!”

## 7. Hint card

Should feel helpful, not punitive.
Use:

* “Watch the first step”
* “Try the left branch”
* “The stack grows upward”

---

# 10. Signature motion style

Motion is a huge part of the vibe.

## Motion personality

Use motion that feels:

* soft
* springy
* slightly bouncy
* reassuring
* readable

Avoid motion that feels:

* sharp
* fast
* techy
* physics-heavy
* overstimulating

## Motion rules

### Enter transitions

* fade + slight upward move
* scale from 0.96 to 1
* duration around 250–400ms

### Success moments

* gentle bounce
* checkmark pop
* stars burst outward
* mascot clap/wiggle

### Drag interactions

* objects lift with a slight scale-up
* soft shadow appears
* drop zones glow

### Algorithm simulation

* movement should clearly show sequence
* one item should move at a time unless the lesson is advanced
* use pauses between steps

That pause is crucial for learning.

---

# 11. UX philosophy for teaching algorithms

This is the most important adaptation piece.

A typing product teaches motor memory.
Your product teaches abstract systems.

So your UX must make invisible concepts visible.

## Core rule

# Every algorithm or data type should be taught as a physical behavior first.

Before saying “queue,” show a line.
Before saying “stack,” show piling.
Before saying “tree traversal,” show branching paths.

## Teaching order for each concept

### Step 1. Story metaphor

“Animals are lining up for the slide.”

### Step 2. Physical rule

“The first one in line goes first.”

### Step 3. Interactive play

Drag animals into line and send them through the gate.

### Step 4. Name the concept

“This is called a queue.”

### Step 5. Formal vocabulary

“Queues are First In, First Out.”

### Step 6. Mini symbolic representation

Show a simplified labeled version.

### Step 7. Challenge

Ask the learner to apply it.

This order matters a lot.

---

# 12. Visual metaphors for data types

These metaphors will make or break the product.

## Arrays

Visual metaphor:

* shelf slots
* train cars
* cubbies
* stepping stones

Teaches:

* index
* position
* replace
* iterate
* fixed order

Best scene:
A fruit shelf with numbered slots.

## Stack

Visual metaphor:

* pancake stack
* toy boxes
* blocks piled vertically
* books on a pile

Teaches:

* push
* pop
* top item only
* LIFO

Best scene:
A bear stacking snack boxes.

## Queue

Visual metaphor:

* animals lining up
* train boarding line
* slide entrance queue
* ticket booth line

Teaches:

* front
* back
* enqueue
* dequeue
* FIFO

Best scene:
A playground slide queue.

## Linked List

Visual metaphor:

* stepping stones
* connected train cars
* caterpillar body segments
* lanterns connected by rope

Teaches:

* node
* next
* traversal
* insertion between nodes

Best scene:
A caterpillar made of connected labeled segments.

## Tree

Visual metaphor:

* branching path
* family tree
* orchard branches
* cave tunnel splits

Teaches:

* root
* children
* leaves
* traversal

Best scene:
An apple tree where each branch holds choices.

## Graph

Visual metaphor:

* jungle map
* island paths
* city map
* bridges between places

Teaches:

* nodes
* edges
* routes
* connectivity
* shortest path basics

Best scene:
A map with huts connected by trails.

## Hash Map

Visual metaphor:

* mailbox village
* cubby wall
* labeled drawers
* key-to-home matching

Teaches:

* key
* value
* lookup
* grouping

Best scene:
A village of little mailboxes where each key opens one home.

## Recursion

Visual metaphor:

* nested boxes
* cave echoes
* smaller copies of a pattern
* mirrors or dollhouses

Teaches:

* solve small version of same problem
* base case
* return

Best scene:
A set of boxes inside boxes or a staircase of smaller caves.

---

# 13. Visual metaphors for algorithms

## Linear Search

Theme:
Searching along a row of bushes or shelf items one by one.

## Binary Search

Theme:
Treasure search where the explorer cuts the map in half each time.

## Bubble Sort

Theme:
Bubbles rising in order or animals swapping places in a line.

## Selection Sort

Theme:
Pick the smallest fruit and place it first.

## Insertion Sort

Theme:
Place a new toy into the correct spot in a tidy row.

## Breadth-First Search

Theme:
Explore nearby huts first, ring by ring.

## Depth-First Search

Theme:
Keep following one path deep into the forest before backtracking.

## Pathfinding

Theme:
Help the fox reach the camp using the shortest safe trail.

## Recursion

Theme:
A helper solving smaller and smaller versions of the same puzzle.

---

# 14. Course map design

The Jungle Junior level map vibe is one of the strongest things worth adapting.

## Your version should include

* world grid or scrollable map
* lesson tiles
* clear progression
* locked/unlocked states
* reward markers
* chapter gates

## Make the structure feel like a world journey

Example:

### World 1 — Organizing Things

* Slots and order
* Arrays
* Indices
* Updating values

### World 2 — Adding and Removing

* Stacks
* Queues
* Rules of order

### World 3 — Connected Paths

* Linked lists
* Trees
* Graphs

### World 4 — Smart Problem Solving

* Searching
* Sorting
* Recursion

Each lesson tile should visually preview the metaphor used inside.

---

# 15. Lesson screen blueprint

## A strong lesson screen has 5 zones

### 1. Header

* back
* lesson title
* tiny world icon
* progress
* optional audio replay

### 2. Story/scene area

The biggest part of the screen.
This is where the concept lives visually.

### 3. Concept support strip

A small zone for:

* labels
* highlighted rules
* index markers
* algorithm steps

### 4. Interaction zone

* drag
* tap
* choose
* simulate
* step forward

### 5. Navigation zone

* replay
* hint
* next
* check answer

## One-screen-one-goal rule

Never ask the child to:

* read a paragraph
* inspect a diagram
* drag four items
* memorize vocabulary
* answer a question

all at once.

Each screen should do one thing.

---

# 16. “Finger Gym” equivalent for code school

This is a great opportunity.

You want a repeated exercise format that trains intuition the same way Finger Gym trains movement.

Call it something like:

* **Brain Gym**
* **Logic Warm-Up**
* **Pattern Practice**
* **Code Stretch**
* **Think & Tap**

## What these do

Short activities that isolate one concept:

* sequence
* compare
* next pointer
* left/right branch
* match index to value
* front vs back of queue
* top vs bottom of stack

These should be short, satisfying, and repeatable.

Examples:

### Brain Gym: Index Tap

Tap the item at index 3.

### Brain Gym: Stack Top

Tap the item that can be removed next.

### Brain Gym: Queue Front

Who goes next?

### Brain Gym: Tree Path

Follow left, then right.

### Brain Gym: Smallest First

Choose the smallest fruit.

These can become your equivalent of muscle-memory drills.

---

# 17. Results / completion screen design

The results screen should feel celebratory and gentle.

## Include

* large mascot scene
* short praise headline
* 1–3 reward stats
* replay button
* next lesson button
* optional “try challenge” bonus button

## Visual behaviors

* stars pop in
* mascot animates
* completed concept badge appears
* screen uses one big illustration, not a data-heavy report

Children do not need analytics first.
They need encouragement first.

---

# 18. Gamification system

Use light gamification, not casino gamification.

## Good reward types

* stars
* stickers
* habitat badges
* new mascot outfits
* collectible map items
* chapter medals
* “helper” tools unlocked

## Great reward framing

Tie rewards to worlds.

Examples:

* unlocked the Queue Station whistle
* earned the Tree Grove leaf badge
* got the Sort Market ribbon
* found a Graph Jungle map piece

## Avoid

* endless currencies
* pressure-heavy streak loss
* complex shop mechanics
* leaderboards for young learners

---

# 19. Sound and audio direction

If you use sound, keep it soft and toy-like.

## Good sounds

* soft pops
* happy chimes
* light wood taps
* tiny whooshes
* warm success bells

## Audio use cases

* correct answer
* wrong try
* item placed
* next step
* reward earned
* mascot voice line

## Important

Allow:

* mute
* reduced sound mode
* captions for narration

---

# 20. Accessibility guide

This is non-negotiable for an educational product.

## Visual accessibility

* do not rely on color alone
* pair color with shape or icon
* maintain strong contrast for text
* allow larger text sizes
* use obvious focus states
* keep hit targets large

## Cognitive accessibility

* one concept per screen
* minimal instructions
* repeatable patterns
* optional replay
* consistent interaction models

## Motor accessibility

* big buttons
* forgiving drag zones
* keyboard navigation support
* tap alternatives where possible

## Neurodiversity support

* reduced motion mode
* low stimulation mode
* narration replay
* slower simulation speed option

## Learning support

* every lesson should support:

  * audio
  * visual
  * step-by-step interaction
  * repetition
  * concrete metaphor

---

# 21. Art and UI rules to keep the style coherent

## Do this

* use large rounded cards
* keep backgrounds soft and low-detail
* use original mascots and habitats
* make concepts physical and visible
* use short labels
* make every state feel friendly
* add gentle shadows and layered depth sparingly
* celebrate completion often

## Do not do this

* dark hacker aesthetic
* terminal-first interface
* tiny typography
* heavy code on first exposure
* abstract node diagrams with no metaphor
* dense settings
* overly gamified clutter
* too many simultaneous visual effects

---

# 22. Suggested design tokens

These will help your UI feel systematized.

## Radius

* buttons: 999px
* cards: 20px
* small chips: 14px
* panels: 24px

## Shadows

Use very soft shadows:

* `0 4px 12px rgba(0,0,0,0.08)`
* `0 2px 6px rgba(0,0,0,0.06)`

## Borders

* light gray borders
* 1–2px max
* no harsh black outlines for UI chrome

## Button sizing

* primary circular button: 72–88px
* primary CTA height: 56–64px
* tile minimum height: 160–220px depending on layout

## Icon style

* simple
* chunky
* rounded
* high contrast
* minimal detail

---

# 23. Example lesson adaptations

## Arrays lesson example

### Theme

Pip the Otter’s snack shelf

### Goal

Learn that items in an array have positions.

### Visual

A shelf with 5 slots, each labeled with a number.

### Interaction

The learner taps:

* the snack in slot 0
* the snack in slot 3
* then drags a new snack into slot 2

### Vocabulary reveal

“These slots are in an array.”
“Each slot has an index.”

### Challenge

“Put the apple at index 4.”

---

## Stack lesson example

### Theme

Bear’s pancake tower

### Goal

Learn push and pop.

### Visual

A stack of pancakes on a plate.

### Interaction

* drag a pancake to the top
* remove the top pancake
* try tapping a middle pancake and see gentle feedback: “Not that one. Only the top pancake can leave.”

### Vocabulary reveal

“This is a stack.”
“Last in, first out.”

---

## Queue lesson example

### Theme

Animals waiting for the slide

### Goal

Learn enqueue and dequeue.

### Visual

A line of animals.

### Interaction

* add one to the back
* send one from the front
* predict who goes next

### Vocabulary reveal

“This is a queue.”
“First in, first out.”

---

## Tree lesson example

### Theme

Apple Tree Paths

### Goal

Learn parent, child, and leaves.

### Visual

A tree with branching apples.

### Interaction

Tap:

* the root
* a child node
* a leaf

Then guide a character through the branches.

---

## Binary search lesson example

### Theme

Treasure Map Halves

### Goal

Learn “cut the search space in half.”

### Visual

A row of treasure chests or a long map strip.

### Interaction

The learner picks the middle chest each time.

### Support

Show the remaining range dimming away.

---

# 24. Content architecture for the full curriculum

## Beginner layer

No code yet.
Only interaction, metaphor, naming.

## Early symbolic layer

Introduce:

* labels
* arrows
* small notation
* index numbers
* step cards

## Hybrid layer

Show mini pseudocode beside the visual.

## Intro code layer

Very small real code snippets tied directly to the visual behavior.

Example:

* array index access
* push/pop
* enqueue/dequeue
* loop through items

The child should always be able to map the code back to the scene.

---

# 25. Design system naming suggestions

To make the system feel cohesive, name the components and patterns in-world.

Examples:

* Lesson Tiles → `Adventure Cards`
* Progress Chips → `Trail Markers`
* Hint Cards → `Helper Notes`
* Practice Modules → `Brain Gyms`
* Rewards → `Badges` or `Explorer Stickers`
* Units → `Worlds`
* Challenges → `Mini Missions`
* Final quiz → `Camp Challenge`

---

# 26. What makes this style succeed

If you only remember five things, remember these:

## 1. Make the abstract physical

Every CS idea must become an object, place, or motion.

## 2. Keep one clear action per screen

Do not overload the child.

## 3. Use a warm visual world

Friendly illustrations reduce intimidation.

## 4. Reward constantly but gently

Progress should always feel visible.

## 5. Teach with metaphor first, vocabulary second

That is the core magic.

---

# 27. Best one-sentence design brief

Here is a strong internal brief you could give your team:

> Build a playful storybook coding school where algorithms feel like physical systems, data types feel like familiar objects, and every lesson is a bright, low-pressure mini adventure designed for kids.

---
