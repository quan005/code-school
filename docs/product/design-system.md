# Code School Design System

This system translates the product direction in [docs/product/design-guide.md](/Users/daquanfreeman/Documents/Code%20School/code-school/docs/product/design-guide.md) into a concrete UI spec for the learning app.

It is intentionally not a dashboard system. It is a child-first educational world system for algorithm lessons, map progression, and guided interaction.

## Source Inputs

- Primary source: `docs/product/design-guide.md`
- Supporting design search: `ui-ux-pro-max`
- Product mood: gentle, cheerful, low-pressure, storybook, physical, safe

## Design Principle Summary

- Make abstract CS ideas feel physical before they feel technical.
- Keep one focal action per screen.
- Use large shapes, low density, and strong contrast.
- Reward progress often, but keep reward systems calm.
- Build for grades 1 through 5, not for adults pretending to be kids.

## Visual Direction

The right style is `storybook play + soft clay depth`, not flat enterprise SaaS and not heavy skeuomorphism.

Recommended synthesis:

- Base structure: soft neutral educational surfaces from the product guide
- Interaction feel: light claymorphism for buttons, tiles, and mascot callouts
- Layout discipline: bento-like modular cards only where they support map browsing or progress grouping

Avoid:

- dark mode as the default experience
- hacker / terminal visuals
- thin-line abstract diagrams with no metaphor
- purple-heavy palettes dominating the system
- tiny controls, tiny copy, or dashboard density

---

## Color Tokens

The guide already provides the strongest palette for the product, so this system keeps those values as the source of truth and adds semantic aliases.

### Foundation Tokens

```txt
--color-bg-canvas: #F4F4F1
--color-bg-surface: #FFFFFF
--color-bg-panel: #ECECE7
--color-border-soft: #D9D9D2
--color-text-primary: #444444
--color-text-secondary: #6A6A6A
```

### Brand Accent Tokens

```txt
--color-brand-red: #FF5A4F
--color-brand-yellow: #F6C744
--color-brand-green: #7ED957
--color-brand-blue: #3DA5F4
--color-brand-orange: #FF9C3A
--color-brand-purple: #9B8AFB
```

### Semantic Tokens

```txt
--color-action-primary: #FF9C3A
--color-action-primary-hover: #F18822
--color-action-secondary: #3DA5F4
--color-action-secondary-hover: #258FDE

--color-progress-active: #3DA5F4
--color-progress-complete: #7ED957
--color-progress-special: #F6C744
--color-progress-advanced: #9B8AFB

--color-feedback-success: #2BCB5A
--color-feedback-warning: #F3B63F
--color-feedback-info: #3D8BFF
--color-feedback-error: #F25F5C
```

### Accent Usage Rules

- Orange is the primary CTA and “let’s go” color.
- Blue is for active selection, current lesson, focus, and info.
- Green is for correct, complete, safe, and unlocked.
- Yellow is for hints, rewards, stars, and special “pay attention” moments.
- Red is for compare / contrast / energetic prompts, not failure-heavy screens.
- Purple is reserved for magic, advanced ideas, and mastery or challenge moments.

### Screen Color Ratios

- 70% neutral base
- 20% primary accent
- 10% support accent

No screen should try to use all six bright colors equally.

### Recommended Gradients

```txt
--gradient-sky: linear-gradient(180deg, #F9FBFF 0%, #EEF7FF 100%)
--gradient-meadow: linear-gradient(180deg, #FFFDF7 0%, #F4F4F1 100%)
--gradient-reward: linear-gradient(135deg, #F6C744 0%, #FF9C3A 100%)
--gradient-action: linear-gradient(135deg, #FFB158 0%, #FF8C3A 100%)
```

---

## Typography Styles

The guide recommends rounded, child-friendly headings with highly readable body copy. The skill search suggested `Baloo 2 + Comic Neue`, but that is slightly too novelty-forward for a long learning product. The stronger system for Code School is:

- Heading family: `Fredoka`
- Body family: `Nunito`
- Mono family: `JetBrains Mono`

This keeps the app playful without drifting into parody.

### Font Roles

```txt
--font-heading: "Fredoka", "Baloo 2", "Nunito", sans-serif
--font-body: "Nunito", "Atkinson Hyperlegible", sans-serif
--font-mono: "JetBrains Mono", "IBM Plex Mono", monospace
```

### Type Scale

```txt
Display XL: 56/60, weight 600
Display L: 44/48, weight 600
Heading 1: 36/40, weight 600
Heading 2: 28/32, weight 600
Heading 3: 22/28, weight 600
Heading 4: 18/24, weight 600
Body L: 18/28, weight 500
Body M: 16/24, weight 500
Body S: 14/20, weight 500
Label L: 16/20, weight 700
Label M: 14/18, weight 700
Caption: 12/16, weight 700
Mono S: 13/18, weight 600
```

### Style Rules

- Sentence case only
- Short headings
- Max paragraph width around 45 to 60 characters in lesson copy
- Monospace only for indices, variables, examples, and tiny code reveals
- Never use monospace for global navigation or main educational narration

### Named Typography Styles

```txt
type.display.hero
type.heading.screen
type.heading.card
type.heading.lesson
type.body.lesson
type.body.ui
type.label.button
type.label.chip
type.label.map-tile
type.code.inline
type.code.snippet
```

---

## Spacing, Radius, and Shadow Tokens

### Spacing

```txt
--space-1: 8px
--space-2: 12px
--space-3: 16px
--space-4: 24px
--space-5: 32px
--space-6: 48px
--space-7: 64px
```

### Radius

```txt
--radius-chip: 14px
--radius-card: 20px
--radius-panel: 24px
--radius-button-pill: 999px
--radius-object: 18px
--radius-scene: 28px
```

### Shadows

```txt
--shadow-soft-1: 0 2px 6px rgba(0, 0, 0, 0.06)
--shadow-soft-2: 0 4px 12px rgba(0, 0, 0, 0.08)
--shadow-soft-3: 0 10px 24px rgba(61, 165, 244, 0.10)
--shadow-clay-press: inset 0 -2px 0 rgba(0, 0, 0, 0.08)
```

---

## Button Specs

Buttons should feel like toy controls, not small utility chrome.

### Primary CTA Button

- Use for `Next`, `Start lesson`, `Check answer`, `Try again`
- Height: `60px`
- Min width: `164px`
- Padding: `0 24px`
- Radius: `999px`
- Fill: `--gradient-action`
- Text: white
- Shadow: `--shadow-soft-2` + `--shadow-clay-press`
- Hover: raise 1px, brighten slightly
- Active: small press inward

### Secondary Button

- Use for `Replay`, `Back`, `Watch again`, `See hint`
- Height: `56px`
- Min width: `136px`
- Background: `#FFFFFF`
- Border: `1.5px solid --color-border-soft`
- Text: `--color-text-primary`

### Circular Action Button

- Use for icon-first controls: home, replay audio, map, settings, pause
- Size: `72px` desktop, `64px` mobile
- Fill: `#FFFFFF`
- Border: `2px solid --color-border-soft`
- Icon size: `28px`
- Always requires accessible label

### Button States

- Disabled: 50% opacity, no shadow lift, still readable
- Focus: thick blue outer ring using `--color-progress-active`
- Success variant: green fill for reward actions
- Hint variant: yellow fill with dark text

### Button Copy Rules

- Verb-first
- 1 to 3 words
- Concrete language

Good:

- `Start lesson`
- `Try again`
- `Move left`
- `Check answer`

Avoid:

- `Execute`
- `Confirm selection`
- `Advance to subsequent module`

---

## Card Specs

### Lesson World Tile

- Purpose: map / chapter progression
- Size: `min-height 180px`, ideal `200px to 220px`
- Radius: `20px`
- Layout:
  - top-left lesson number chip
  - top-right state badge
  - center illustration
  - bottom title + 1-line subtitle
- States:
  - locked: muted surface, low-saturation illustration
  - unlocked: white tile with active border
  - current: blue border + light blue glow
  - completed: green badge + check sparkle
  - bonus: purple ribbon

### Scene Card

- Purpose: holds the main lesson interaction area
- Radius: `28px`
- Padding: `24px`
- Background: white or very pale sky/meadow tint
- Border: `1px solid --color-border-soft`
- Must feel roomy, never cramped

### Support Card

- Purpose: hint, rule, explanation, mascot speech
- Radius: `20px`
- Padding: `20px`
- Accent stripe or icon on the left

### Reward Card

- Purpose: completion moment
- Radius: `24px`
- Background: reward gradient
- Includes:
  - big positive heading
  - mascot celebration
  - 1 to 3 stats only
  - next lesson button

---

## Mascot Rules

Mascots are guides, not decorations.

### Core Mascot Set

- `Pip the Otter`
  - Domain: arrays, sorting, organizing
  - Shape language: rounded oval body, tidy paws
  - Accent colors: sky blue scarf + leaf green satchel
  - Emotional role: practical helper

- `Milo the Fox`
  - Domain: searching, pathfinding, graph journeys
  - Shape language: triangle ears, rounded muzzle, sweeping tail
  - Accent colors: orange pop + soft cream
  - Emotional role: curious explorer

- `Tango the Turtle`
  - Domain: step-by-step lessons, two pointers, patience
  - Shape language: dome shell, stable oval feet
  - Accent colors: leafy green shell + yellow neckerchief
  - Emotional role: calm pacing guide

- `Nova the Owl`
  - Domain: trees, recursion, branching ideas
  - Shape language: wide circular eyes, layered wing shapes
  - Accent colors: soft purple + warm brown
  - Emotional role: wise explainer

### Mascot Behavior Rules

- Mascot appears at decision moments, not every single screen
- Mascot speech bubbles should be 1 to 2 sentences max
- Mascot copy should always help the child do the next action
- Mascot should never block the scene or cover important objects
- Each lesson gets one primary guide; avoid mascot crowding

### Mascot Emotional States

- `happy`
- `thinking`
- `encouraging`
- `celebrating`
- `gentle correction`

No angry state. No failure-shaming body language.

### Mascot Illustration Rules

- Flat vector
- Rounded silhouettes
- Low-detail faces
- No complex textures
- One prop maximum per mascot
- Motion is soft wiggle / blink / bounce only

---

## Lesson Screen Wireframe

This follows the guide’s five-zone lesson blueprint.

### Primary Lesson Screen

```txt
┌──────────────────────────────────────────────────────────────────────┐
│ Back     World: Array Orchard     Lesson 2: Shelf Slots     2/8 ★   │
│                                              [Replay Audio]          │
├──────────────────────────────────────────────────────────────────────┤
│ Mascot bubble: "Let’s find the snack in slot 3."                    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SCENE AREA                                                          │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │ Sky / habitat background                                      │  │
│  │                                                                │  │
│  │   [0] [1] [2] [3] [4]                                         │  │
│  │   🍎  🍐  🍌  🥝  🍊                                           │  │
│  │                                                                │  │
│  │  Highlight slot 3                                              │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ RULE STRIP                                                           │
│ Index = position number          Current task = tap slot 3           │
├──────────────────────────────────────────────────────────────────────┤
│ ACTION AREA                                                          │
│ [Tap slot 3]   [Watch hint]   [Replay step]                          │
├──────────────────────────────────────────────────────────────────────┤
│ NAVIGATION                                                           │
│ [Back]                                [Check answer]   [Next]        │
└──────────────────────────────────────────────────────────────────────┘
```

### Lesson Layout Rules

- The scene must take at least 50% of vertical attention
- There should be one active task only
- The rule strip should reinforce the current concept, not add a new one
- Navigation should always stay visually anchored

### Mobile Lesson Screen

```txt
┌──────────────────────────────┐
│ Back   Lesson 2      2/8 ★   │
│ Array Orchard                │
├──────────────────────────────┤
│ Pip: "Tap slot 3."           │
├──────────────────────────────┤
│                              │
│   [0] [1] [2] [3] [4]        │
│   🍎  🍐  🍌  🥝  🍊          │
│                              │
├──────────────────────────────┤
│ Index = position number      │
├──────────────────────────────┤
│ [Hint] [Replay]              │
│ [Check answer]               │
│ [Next]                       │
└──────────────────────────────┘
```

---

## Map Screen Wireframe

The map should feel like a world journey, not a lesson table.

### World Map Screen

```txt
┌──────────────────────────────────────────────────────────────────────┐
│ Home      Code Meadow Map                       Stars 12   Badges 3  │
├──────────────────────────────────────────────────────────────────────┤
│ World ribbon: Organizing Things         Progress: 5/8 lessons        │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│     [Start]                                                          │
│       │                                                              │
│   ┌──────────────┐                                                   │
│   │ Array Orchard│  current                                          │
│   │  Lesson 1    │───────────┐                                       │
│   └──────────────┘           │                                       │
│                              ▼                                       │
│                        ┌──────────────┐                              │
│                        │ Stack Mt.    │ completed                    │
│                        │  Lesson 2    │                              │
│                        └──────────────┘                              │
│                              │                                       │
│                              ▼                                       │
│                        ┌──────────────┐                              │
│                        │ Queue Station│ locked                       │
│                        │  Lesson 3    │                              │
│                        └──────────────┘                              │
│                                                                      │
│    side collectibles: badge leaves / stickers / map pieces          │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ [Previous world]                         [Open current lesson]       │
└──────────────────────────────────────────────────────────────────────┘
```

### Map Tile Rules

- Show one clear habitat metaphor per tile
- Show state through icon + color + outline, not color alone
- Keep connectors playful: dotted trail, stepping stones, path rope
- Current tile should always be the strongest visual focal point

### Tile State Spec

- Locked
  - muted panel
  - grayscale illustration
  - small lock icon
- Unlocked
  - white card
  - orange CTA chip
- Current
  - blue glow
  - animated bounce ring
- Completed
  - green badge
  - tiny star burst
- Bonus
  - purple sparkle chip

---

## Three Fully Designed Sample Lessons

These are not just themes. They are concrete screen designs with scene, interaction, support language, and component usage.

### Sample Lesson 1: Arrays

#### Lesson Name

`Pip the Otter’s Snack Shelf`

#### Learning Goal

Teach that an array is an ordered row of slots, and each slot has an index.

#### Habitat

`Array Orchard`

#### Primary Mascot

`Pip the Otter`

#### Screen Composition

```txt
Header:
- Back
- Array Orchard
- Lesson title: Snack Shelf
- Progress chip: 1/6

Scene:
- Five wooden shelf slots
- Slot labels 0 to 4
- Fruit in each slot
- One target slot pulsing gently

Support strip:
- "Index means position number."
- Tiny code chip: items[3]

Action zone:
- Tap the fruit at index 3

Navigation:
- Replay
- Hint
- Check answer
```

#### Visual Details

- Background: pale cream meadow with sky blue top gradient
- Shelf: warm soft wood, flat vector, low texture
- Slot number chips: blue with white text
- Active slot: orange halo
- Correct answer state: green pop + Pip clap

#### Interaction Flow

1. Pip says, "Let’s find the snack in slot 3."
2. Slot labels appear first.
3. Child taps a fruit.
4. If correct:
   - fruit bounces
   - green success badge
   - copy: "Nice. Slot 3 holds the kiwi."
5. Vocabulary reveal:
   - "This row is an array."
   - "The slot number is the index."

#### Component Usage

- Scene Card
- Mascot speech bubble
- Progress chip
- Primary CTA button
- Success badge

---

### Sample Lesson 2: Stack

#### Lesson Name

`Bear’s Pancake Tower`

#### Learning Goal

Teach `push`, `pop`, and that only the top item can be removed.

#### Habitat

`Stack Mountain`

#### Primary Mascot

`Tango the Turtle` as calm helper

#### Screen Composition

```txt
Header:
- Back
- Stack Mountain
- Lesson title: Pancake Tower
- Progress chip: 2/6

Scene:
- Large plate at bottom
- Pancake stack centered
- One extra pancake waiting to be dragged

Support strip:
- "A stack grows from the top."
- "Only the top pancake can leave."

Action zone:
- Drag pancake onto the top
- Then remove the top pancake

Navigation:
- Replay
- Hint
- Next
```

#### Visual Details

- Background: mountain breakfast scene with low-detail clouds
- Pancakes: chunky rounded discs with syrup dots
- Plate: wide soft blue circle
- Top pancake has subtle glow when interactable
- Invalid middle pancake tap triggers soft wiggle, not error flash

#### Interaction Flow

1. Tango says, "Add one pancake to the top."
2. Child drags pancake to stack.
3. Stack compresses with soft bounce.
4. Tango says, "Now remove the one on top."
5. Child taps top pancake.
6. If child taps middle pancake:
   - gentle shake
   - helper text: "Not that one. Start from the top."
7. Vocabulary reveal:
   - "This is a stack."
   - "Last in, first out."

#### Component Usage

- Scene Card
- Draggable object card
- Hint card
- Circular replay button
- Completion badge with pancake star

---

### Sample Lesson 3: Graphs

#### Lesson Name

`Milo’s Hut Trail Map`

#### Learning Goal

Teach that graphs are places connected by paths, and that nodes and edges describe those connections.

#### Habitat

`Graph Jungle`

#### Primary Mascot

`Milo the Fox`

#### Screen Composition

```txt
Header:
- Back
- Graph Jungle
- Lesson title: Hut Trail Map
- Progress chip: 3/6

Scene:
- Four huts on a playful jungle map
- Curved trails connecting huts
- Start hut highlighted
- Goal hut glowing

Support strip:
- "Places are nodes."
- "Trails are edges."

Action zone:
- Tap a connected hut to move
- Then answer: which hut can Milo reach next?

Navigation:
- Replay
- Hint
- Check answer
```

#### Visual Details

- Background: pale green jungle paper map
- Huts: rounded triangle roofs, warm orange walls
- Paths: thick curved beige lines
- Active reachable hut: blue ring
- Blocked hut: muted with no hover emphasis

#### Interaction Flow

1. Milo says, "Let’s follow the trails from this hut."
2. Start hut pulses.
3. Child taps a connected hut.
4. Milo walks along the path one segment at a time.
5. Rule strip updates:
   - "Connected means there is a trail between them."
6. Vocabulary reveal:
   - "Huts are nodes."
   - "Trails are edges."
7. Mini challenge:
   - "Which hut can Milo reach in one move?"

#### Component Usage

- Scene Card
- Map node objects
- Mascot speech bubble
- Hint card
- Success badge with map-piece reward

---

## Accessibility Rules

These are mandatory for the system.

- Icon-only buttons require accessible labels
- Keyboard order must follow visual order
- Color is never the only state signal
- Hit targets should stay at or above `44px`, preferred `56px+`
- Motion should respect `prefers-reduced-motion`
- Provide low-stimulation and replayable guidance patterns

---

## Implementation Notes For Next.js

- Default to light mode for MVP
- Prefer CSS variables for all core tokens
- Keep interactive scene components isolated from shell layout components
- Use semantic HTML in lesson pages even when visuals are playful
- Use SVG icons, not emojis
- Use real focus states on all action buttons and map tiles

---

## Next Deliverables

This design system is ready to support:

1. token implementation in `app/globals.css`
2. shared UI primitives refresh under `components/ui`
3. chapter map screen redesign
4. lesson-shell redesign
5. mascot illustration briefs
6. polished sample lesson mocks in code or Figma
