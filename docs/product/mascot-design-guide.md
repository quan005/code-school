# Mascot Design Guide

This guide defines the canonical mascot system for Code School.

Use it with [design-system.md](/Users/daquanfreeman/Documents/Code%20School/code-school/docs/product/design-system.md). The design system explains how mascots fit into product screens. This guide explains how each mascot should look, move, speak, and behave.

## Purpose

Mascots are teaching guides, not decoration.

Each mascot should help a child do one of these things:

- notice the most important part of the screen
- understand the current rule
- feel calm after a mistake
- feel excited about the next step

Mascots should never make the interface louder than the lesson itself.

## System Rules

### Core Principles

- One primary mascot per lesson.
- A mascot should appear at decision moments, transitions, hints, celebrations, and gentle corrections.
- Mascots should not stay on screen all the time if they are not helping with the next action.
- Speech should be short, concrete, and action-focused.
- Mascots should never shame, tease, or dramatize mistakes.

### Visual Style

- Flat vector illustration only.
- Rounded silhouettes.
- Friendly, readable proportions.
- Low-detail faces with strong eye direction.
- One signature prop maximum.
- Soft clay / storybook feeling, not high-detail cartoon rendering.
- No aggressive poses, sharp teeth emphasis, or chaotic motion lines.

### Shared Proportions

- Head-to-body ratio should feel slightly oversized for friendliness.
- Limbs should stay simple and readable at small sizes.
- Eyes should remain visible even at badge or helper-chip scale.
- Hands, paws, wings, or feet should support pointing and guiding gestures.

### Expression Set

Every mascot should support these states:

- `happy`
- `thinking`
- `encouraging`
- `celebrating`
- `gentle correction`

Do not use:

- angry
- mocking
- embarrassed
- panicked
- disappointed-in-you

### Motion Rules

- Idle motion: blink, bob, soft sway, tiny tail or scarf bounce.
- Success motion: one bounce, sparkle, or nod.
- Thinking motion: head tilt, brow lift, paw-to-chin, slow hover.
- Correction motion: calm pause plus a small pointing gesture.
- Motion should be soft and brief, never frantic.

### Speech Rules

- Keep bubbles to 1 or 2 short sentences.
- Use direct language.
- Name the next action when possible.
- Prefer “Let’s try this” over “Wrong.”
- Prefer “Look here” over “Pay attention.”

### Placement Rules

- Default placement is upper-left or upper-right of the lesson frame.
- Never cover the active problem object.
- On mobile, anchor mascots above the support strip or tucked beside it.
- On map screens, mascots may appear as world residents, but one guide should remain primary.

## Canonical Mascot Roster

The curriculum docs are now the source of truth for mascot assignment. This roster replaces the older placeholder core set in the design system.

## Tango the Turtle

- Chapter fit: Two Pointers, Linked Lists, Fast and Slow Pointers
- Role: patient guide for step-by-step movement and pointer logic
- Personality: calm, steady, reassuring, never rushed
- Shape language: dome shell, oval feet, rounded cheeks, slightly extended neck for “looking ahead”
- Palette: leafy green shell, moss body, soft yellow neckerchief, warm cream belly
- Signature prop: tiny trail map tag or neckerchief knot
- Best expressions: thinking, encouraging, gentle correction
- Motion style: slow nod, shell bob, one-foot step, head tilt toward the active pointer
- Speech tone: “Move one marker at a time.” “Let’s watch what changes next.”
- Best screen use: pointer lessons, linked chains, sequence tracking, mirrored movement
- Do: use Tango to make pacing feel safe and deliberate
- Don’t: use Tango for fast chaotic scenes or high-energy celebration-first moments

## Pico the Fox

- Chapter fit: Hash Maps and Sets
- Role: quick collector and organizer of “seen” information
- Personality: clever, upbeat, tidy, observant
- Shape language: pointed ears, rounded muzzle, tidy tail curl, compact stance
- Palette: orange fur, cream chest, berry-red satchel or cubby tag, soft amber highlights
- Signature prop: card pouch, sticker stack, or label tag
- Best expressions: happy, thinking, celebrating
- Motion style: tail flick, quick lean toward labels, light paw tap on a cubby or card
- Speech tone: “We’ve seen this already.” “This box remembers extra details.”
- Best screen use: matching, counting, grouping, duplicate checks, lookup tasks
- Do: show Pico near storage objects like cubbies, trays, labels, or note cards
- Don’t: make Pico feel sneaky or trickster-like

## Dash the Rabbit

- Chapter fit: Sliding Windows, Binary Search
- Role: speed guide for moving ranges and narrowing spaces
- Personality: energetic, focused, upbeat, precise
- Shape language: long ears, rounded paws, springy body, forward-leaning silhouette
- Palette: cloud white fur, sky blue vest or sash, peach nose, sunny gold accents
- Signature prop: ribbon marker, measuring band, or tiny flag
- Best expressions: happy, thinking, encouraging
- Motion style: short hop, ear perk, quick glance left-right, pointer-like paw gesture
- Speech tone: “Slide the window one step.” “Cut the search space in half.”
- Best screen use: windows, ranges, narrowing bounds, quick comparisons
- Do: use Dash when the lesson involves visible movement across a row
- Don’t: use speed effects that make the lesson feel stressful

## Pip the Bluebird

- Chapter fit: Stacks
- Role: helper for vertical order, top-of-stack focus, and bracket matching
- Personality: chirpy, neat, encouraging, alert
- Shape language: round bird body, tiny crest, compact wings, short tail
- Palette: robin blue feathers, cream belly, sunflower beak, navy eye accents
- Signature prop: ribbon bookmark or tiny tray card
- Best expressions: happy, thinking, gentle correction
- Motion style: flap-hover, tiny perch bounce, wing-tip point at the top item
- Speech tone: “Only the top one moves.” “Let’s check the last thing we added.”
- Best screen use: stacked objects, top markers, bracket pairs, layer-by-layer actions
- Do: keep Pip close to the top of piles or towers
- Don’t: place Pip in scenes where wings would cover key stack elements

## Milo the Owl

- Chapter fit: Trees
- Role: wise explainer for branches, levels, and careful search
- Personality: thoughtful, clear, warm, grounded
- Shape language: wide circular eyes, layered wing feathers, stout perch posture
- Palette: chestnut brown, warm cream, soft purple scarf or feather band, muted gold eyes
- Signature prop: tiny lantern or leaf pointer
- Best expressions: thinking, encouraging, gentle correction
- Motion style: blink, head swivel, one-wing point, soft feather puff
- Speech tone: “Start at the root.” “Which branch should we check next?”
- Best screen use: canopy scenes, branching decisions, level order, mirror checks
- Do: use Milo to slow down and clarify structure
- Don’t: make Milo overly mystical or distant

## Mabel the Mouse

- Chapter fit: Heaps
- Role: organizer of priority piles and top-k choices
- Personality: careful, practical, cheerful, a little busy
- Shape language: round ears, small bean-shaped body, tiny paws for sorting
- Palette: soft gray fur, butter-yellow apron, berry pink ears, sage details
- Signature prop: seed bag, prize card, or sorting scoop
- Best expressions: happy, thinking, celebrating
- Motion style: quick paw sort, tiny step shuffle, ear lift when a new priority arrives
- Speech tone: “Keep the most important ones close.” “This top spot matters most.”
- Best screen use: prize piles, min/max comparisons, ranking tasks
- Do: show Mabel managing a small organized heap of objects
- Don’t: turn the heap into a messy pile that fights the teaching goal

## Gizmo the Goat

- Chapter fit: Intervals
- Role: guide for overlap, schedule lanes, and meeting-room logic
- Personality: sturdy, practical, playful, good at lining things up
- Shape language: rounded horn spirals, sturdy torso, stable hooves, confident chest-forward stance
- Palette: cream fur, cocoa patches, orange harness, green bell or ribbon accent
- Signature prop: clipboard, ribbon strip, or schedule bell
- Best expressions: thinking, encouraging, happy
- Motion style: hoof tap, chin lift, gentle sidestep along a timeline
- Speech tone: “These two parts overlap.” “Let’s merge the time that touches.”
- Best screen use: ribbons, bridges, calendars, room charts, schedule lanes
- Do: use Gizmo beside clear horizontal timelines
- Don’t: make the horn shapes feel sharp or intimidating

## Tilda the Deer

- Chapter fit: Prefix Sums
- Role: guide for running totals, balance checks, and range subtraction
- Personality: gentle, elegant, thoughtful, softly mathematical
- Shape language: long legs, rounded muzzle, leaf-like ear shapes, smooth posture
- Palette: warm tan fur, cream spots, moss green scarf, pale gold accents
- Signature prop: bead strand, tally ribbon, or acorn counter band
- Best expressions: thinking, encouraging, celebrating
- Motion style: graceful head dip, hoof point to totals, soft step along number paths
- Speech tone: “Keep the total as you go.” “Use the earlier total to help now.”
- Best screen use: trails, balances, altitudes, subtotal paths
- Do: let Tilda visually trace the accumulation path
- Don’t: overload the scene with too many decorative forest details

## Birch the Owl

- Chapter fit: Tries
- Role: word-path guide for shared beginnings and branching letters
- Personality: attentive, bookish, kind, quietly excited by words
- Shape language: round eyes, tidy feather tufts, smaller scholar-like silhouette than Milo
- Palette: tawny brown, parchment cream, pine green sash, plum detail accents
- Signature prop: word card, bookmark ribbon, or tiny lantern letter tile
- Best expressions: thinking, happy, gentle correction
- Motion style: page-turn wing motion, blink, peck-like point to letter branches
- Speech tone: “These words share the same start.” “Follow the letters one step at a time.”
- Best screen use: letter paths, prefix trees, autocomplete scenes, wildcard branching
- Do: keep Birch near visible path choices in the word tree
- Don’t: make Birch interchangeable with Milo; Birch should feel more literary and less woodland-guide

## Luma the Firefly

- Chapter fit: Graphs
- Role: connection guide for paths, components, and network exploration
- Personality: bright, curious, inviting, lightly magical
- Shape language: glowing teardrop abdomen, soft round head, tiny wings, dotted path trails
- Palette: warm yellow glow, mint wing tint, deep charcoal body, aqua spark accents
- Signature prop: glow trail or connection beam
- Best expressions: happy, thinking, celebrating
- Motion style: hover, pulse glow, short arc flight between connected nodes
- Speech tone: “These places are connected.” “Can you find a path from here to there?”
- Best screen use: node maps, island groups, path checks, component discovery
- Do: use Luma’s glow to reinforce connected nodes
- Don’t: let glow effects overpower accessibility or readability

## Nova the Fox

- Chapter fit: Backtracking
- Role: branching-choice guide for choose, explore, undo
- Personality: adventurous, clever, optimistic, never reckless
- Shape language: pointed ears, curved tail, nimble body, alert stance
- Palette: ember orange, cream chest, forest green satchel, soft berry accents
- Signature prop: trail ribbon, clue pouch, or branching twig wand
- Best expressions: thinking, encouraging, celebrating
- Motion style: paw to fork in the path, step back, tail sweep toward alternate routes
- Speech tone: “Try this choice.” “If it does not work, we can step back.”
- Best screen use: mazes, choice trees, branching paths, permutations and combinations
- Do: show Nova at forks, not at the final answer only
- Don’t: frame backtracking as failure; it should read as smart exploration

## Scout the Rabbit

- Chapter fit: Dynamic Programming
- Role: builder-guide for saved answers and step-by-step solution tables
- Personality: bright, methodical, encouraging, inventive
- Shape language: long ears, compact body, tool-belt silhouette, neat forward posture
- Palette: soft gray-white fur, mint vest, coral tool belt, butter-yellow markers
- Signature prop: blueprint card, block set, or chalk pointer
- Best expressions: thinking, encouraging, celebrating
- Motion style: place-a-block motion, ear tilt, tap on finished cells or steps
- Speech tone: “We already solved that piece.” “Build the big answer from small answers.”
- Best screen use: ladders, grids, paths, counting tables, minimum-cost steps
- Do: use Scout around visible construction or table-building metaphors
- Don’t: let DP explanations drift into abstract formulas without a concrete build-up scene

## Dot the Beaver

- Chapter fit: Greedy
- Role: “best next move” guide for immediate practical choices
- Personality: decisive, resourceful, upbeat, grounded
- Shape language: buck teeth softened into a smile, paddle tail, strong round torso
- Palette: warm brown fur, teal vest, orange builder cap or strap, cream muzzle
- Signature prop: measuring stick, cookie basket, or plank token
- Best expressions: thinking, happy, encouraging
- Motion style: tail tap, quick point to the best current choice, one confident nod
- Speech tone: “This is the best move right now.” “Choose the option that keeps the most room later.”
- Best screen use: cookies, gas, jump distance, label partitions, local-choice scenes
- Do: keep Dot practical and constructive
- Don’t: make greedy choices feel selfish or careless

## Sunny the Raccoon

- Chapter fit: Sort and Search
- Role: shelf-and-card organizer for ordering and finding
- Personality: playful, focused, tidy, a little mischievous in a safe way
- Shape language: rounded mask markings, ringed tail, dexterous paws, low crouch posture for scanning shelves
- Palette: silver-gray fur, navy mask, marigold scarf, berry crate accents
- Signature prop: sorting card, shelf label, or flashlight pointer
- Best expressions: happy, thinking, celebrating
- Motion style: scan left-to-right, slide a card into place, tiny tail flick
- Speech tone: “Let’s put these in order first.” “Now the search gets easier.”
- Best screen use: shelves, cabinets, cards, bins, rotated arrays, merge areas
- Do: use Sunny around visible objects that can be rearranged
- Don’t: make the raccoon energy too chaotic or distracting

## Piper the Otter

- Chapter fit: Bit Manipulation
- Role: switchboard guide for on/off thinking and bit patterns
- Personality: playful, curious, surprisingly precise
- Shape language: sleek oval body, rounded paws, smooth tail, bright eyes
- Palette: river brown fur, cream face, electric blue scarf, lime glow accents
- Signature prop: switch wand, light panel, or tiny circuit badge
- Best expressions: thinking, happy, celebrating
- Motion style: tap-to-toggle, float-and-point, small tail swish near glowing bits
- Speech tone: “This switch is on.” “Matching pairs cancel, so one stays behind.”
- Best screen use: toggle boards, light paths, 0/1 switches, bit counters
- Do: keep the explanation tactile and visible
- Don’t: drown the lesson in jargon like XOR without a physical analogy beside it

## Blinky the Robot

- Chapter fit: Binary Search
- Role: narrowing-range helper for exact, rule-based search
- Personality: precise, cheerful, dependable, not cold
- Shape language: rounded square head, antenna nub, capsule arms, simple screen face
- Palette: powder blue metal, white panel face, orange indicator lights, navy outline accents
- Signature prop: scanner beam, midpoint visor, or signal panel
- Best expressions: happy, thinking, gentle correction
- Motion style: scan sweep, tiny bounce on result, side-to-side visor flash at midpoint
- Speech tone: “Check the middle first.” “We can safely ignore this half now.”
- Best screen use: sorted rows, midpoint checks, insert positions, guessed ranges
- Do: emphasize Blinky’s reliability and clarity
- Don’t: make Blinky feel sterile or emotionally flat

## Poppy the Squirrel

- Chapter fit: General review and mastery moments where quick recall and pattern grouping matter
- Role: recap guide for collecting clues, badges, and memory checks
- Personality: bright, celebratory, encouraging, a little bouncy
- Shape language: fluffy tail, rounded cheeks, upright posture, small collecting paws
- Palette: chestnut fur, cream belly, golden acorn satchel, leaf green accents
- Signature prop: badge pouch, acorn token, or recap card
- Best expressions: happy, celebrating, encouraging
- Motion style: bounce, tail curl, hold up a recap token, quick nod
- Speech tone: “You already know the clues.” “Pick the rule that fits this one.”
- Best screen use: review boards, mastery gates, recap cards, badge moments
- Do: use Poppy when the child is gathering and applying patterns they already learned
- Don’t: let Poppy replace the chapter’s primary guide during the main teaching sequence

## Screen Behavior Patterns

### Intro Screens

- Mascot enters with a welcoming pose.
- Bubble explains the chapter metaphor in one sentence.
- Mascot points to the main scene object.

### Practice Screens

- Mascot shifts to side support.
- Bubble gives one strategy reminder, not a full explanation.
- Mascot reacts after the learner acts, not before every tap.

### Hint States

- Mascot should point to the important object, not just restate the question.
- Bubble should reveal one clue only.
- Hint posture should feel calm, never urgent.

### Error Recovery

- Use `gentle correction`.
- Bubble formula:
  - name what to re-check
  - suggest one next move
- Example:
  - “Check the middle card again. Then decide which half can go away.”

### Success States

- Keep celebration small and warm.
- One bounce, sparkle, or nod is enough.
- Bubble should connect the success back to the rule.

## Mascot Pairing Rules

- One lesson, one primary guide.
- Review and mastery screens may feature `Poppy the Squirrel` as the recap host while preserving the chapter mascot in the scene.
- Map screens may show resident mascots in the world, but the active lesson card should still name the primary guide.
- Do not put multiple speaking mascots on the same lesson screen.

## Copy Examples

### Good

- “Move the left marker one step.”
- “These words share the same beginning.”
- “Save this small answer. We will need it again.”
- “This top spot matters most.”

### Bad

- “Incorrect.”
- “That was easy.”
- “You should remember this by now.”
- “Try harder.”

## Implementation Checklist

Before adding or revising a mascot, verify:

- silhouette is readable at small size
- one prop maximum is respected
- expression set supports all five core lesson states
- speech is short and supportive
- placement does not cover lesson content
- mascot motion is subtle
- chapter fit is obvious from palette, prop, and posture

## Recommendation

Keep this document as the canonical mascot reference. The shorter mascot section in the main design system should remain a summary and link back here instead of defining a separate competing roster.
