# Midjourney Mascot Prompt Guide

This guide turns the mascot system into reusable Midjourney prompts.

Use it with:

- [mascot-design-guide.md](/Users/daquanfreeman/Documents/Code%20School/code-school/docs/product/mascot-design-guide.md)
- [design-system.md](/Users/daquanfreeman/Documents/Code%20School/code-school/docs/product/design-system.md)

The goal is not perfect model-lock consistency. Midjourney will always vary details. The goal is strong practical consistency: same silhouette, same palette, same prop, same emotional role, and same illustration language across repeated generations.

## How To Get Consistent Results

### Rules That Matter Most

- Reuse the exact same mascot prompt every time.
- Keep the same `--ar`, `--stylize`, and `--v` settings for a mascot family.
- Pick one `--seed` per mascot and keep reusing it.
- Use `--style raw` to reduce extra interpretation.
- Keep the background simple or transparent-looking so the mascot stays reusable in product mockups.
- Generate a neutral full-body “base sheet” first, then use that image as an image reference for future poses.

### Recommended Midjourney Settings

Use these as the default starting point:

```txt
--v 7 --style raw --ar 1:1 --stylize 80
```

For full-body character sheets:

```txt
--v 7 --style raw --ar 3:4 --stylize 60
```

For UI-ready mascot cutouts:

```txt
--v 7 --style raw --ar 1:1 --stylize 80
```

### Recommended Workflow Per Mascot

1. Generate the neutral base mascot with the locked prompt.
2. Upscale the strongest result.
3. Reuse that image as a character reference for all later prompts.
4. Only change:
   - pose
   - expression
   - prop interaction
   - camera framing
5. Never change:
   - species
   - palette
   - signature prop
   - silhouette language
   - illustration style descriptors

### Global Negative Guidance

Append some version of this to every mascot prompt:

```txt
clean white or very light background, isolated character, no scene clutter, no realistic fur, no painterly texture, no dramatic lighting, no sharp teeth emphasis, no angry expression, no horror, no anime style, no photorealism, no extra limbs, no duplicate props, no text, no watermark
```

## Master Style Prompt

Use this style block in every mascot prompt:

```txt
children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, soft pastel palette, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, modern edtech illustration, isolated on light background
```

## Prompt Template

Use this template for new poses once you have a mascot reference image:

```txt
[CHARACTER REFERENCE IMAGE URL OR UPLOADED IMAGE]
[mascot name], [species], [locked silhouette and palette details], [core personality], [pose / emotion], [specific prop action], children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, polished character design, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed [MASCOT SEED]
```

## Shared Pose Prompts

Once the base version of a mascot is approved, generate these reusable states:

- neutral standing
- pointing left
- pointing right
- thinking
- encouraging
- celebrating
- gentle correction
- holding lesson blank card
- tiny sticker / badge reward pose

## Tango the Turtle

### Locked Character Prompt

```txt
Tango the Turtle, friendly green turtle mascot for a children's coding app, rounded dome shell, moss green body, warm cream belly, soft yellow neckerchief, rounded cheeks, slightly extended neck, calm patient expression, oval feet, simple tidy shell pattern, gentle and reassuring personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no realistic reptile texture, no aggressive pose, no sharp claws --v 7 --style raw --ar 3:4 --stylize 60 --seed 1201
```

### Reusable Variant Prompt

```txt
Tango the Turtle, same character design, same moss green body, cream belly, yellow neckerchief, rounded dome shell, calm turtle mascot, gently pointing at two stepping stones with one foot lifted, thoughtful teaching pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1201
```

### Consistency Notes

- Keep Tango slower and calmer than the other mascots.
- Neck stretch and shell bob are more important than dramatic arm poses.
- Never make Tango athletic or hyperactive.

## Pico the Fox

### Locked Character Prompt

```txt
Pico the Fox, bright orange fox mascot for a children's coding app, compact body, rounded muzzle, pointed ears, tidy curled tail, cream chest, berry red satchel, soft amber accents, clever observant friendly expression, neat organized personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no sly villain look, no sharp aggressive teeth --v 7 --style raw --ar 3:4 --stylize 60 --seed 1202
```

### Reusable Variant Prompt

```txt
Pico the Fox, same character design, same orange fur, cream chest, berry red satchel, tidy curled tail, happily placing a label card into a cubby, upbeat teaching pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1202
```

### Consistency Notes

- Keep Pico tidy and helpful, not mischievous-chaotic.
- The satchel or label-card cue should appear often.

## Dash the Rabbit

### Locked Character Prompt

```txt
Dash the Rabbit, cheerful white rabbit mascot for a children's coding app, springy body, long upright ears, rounded paws, forward-leaning silhouette, sky blue vest, sunny gold accents, peach nose, focused energetic expression, precise but friendly personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no frantic motion blur, no realistic fur texture --v 7 --style raw --ar 3:4 --stylize 60 --seed 1203
```

### Reusable Variant Prompt

```txt
Dash the Rabbit, same character design, same white fur, blue vest, gold accents, long ears, quick but friendly rabbit mascot, pointing to a moving window frame on a row of tiles, focused teaching pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1203
```

### Consistency Notes

- Dash should feel quick, not chaotic.
- Preserve the long-ear silhouette in every generation.

## Pip the Bluebird

### Locked Character Prompt

```txt
Pip the Bluebird, small robin-blue bird mascot for a children's coding app, round bird body, cream belly, sunflower yellow beak, tiny crest, compact wings, short tail, navy eye accents, friendly alert expression, chirpy neat personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no detailed feathers, no realistic bird anatomy --v 7 --style raw --ar 3:4 --stylize 60 --seed 1204
```

### Reusable Variant Prompt

```txt
Pip the Bluebird, same character design, same robin blue feathers, cream belly, yellow beak, tiny crest, hovering beside a stack of plates and pointing to the top item with one wing, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1204
```

### Consistency Notes

- Pip should stay compact and perch-sized.
- Use hover or perch poses, not large flight spreads.

## Milo the Owl

### Locked Character Prompt

```txt
Milo the Owl, thoughtful brown owl mascot for a children's coding app, wide circular eyes, chestnut feathers, warm cream face and belly, soft purple scarf, muted gold eyes, layered wing shapes, stout perch-friendly posture, wise warm expression, clear gentle personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no scary owl look, no intense realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1205
```

### Reusable Variant Prompt

```txt
Milo the Owl, same character design, same chestnut and cream feathers, purple scarf, large circular eyes, calmly pointing one wing toward a tree branch choice, wise teaching pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1205
```

### Consistency Notes

- Keep Milo grounded and gentle.
- Avoid making Milo mystical, dark, or stern.

## Mabel the Mouse

### Locked Character Prompt

```txt
Mabel the Mouse, tiny gray mouse mascot for a children's coding app, soft gray fur, round ears, bean-shaped body, berry pink ears, butter yellow apron, sage green accents, tiny sorting paws, cheerful practical expression, organized and helpful personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no realistic mouse texture, no messy clutter --v 7 --style raw --ar 3:4 --stylize 60 --seed 1206
```

### Reusable Variant Prompt

```txt
Mabel the Mouse, same character design, same gray fur, yellow apron, tiny sorting paws, carefully holding a small prize card over a neat priority pile, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1206
```

### Consistency Notes

- Scale Mabel smaller than most mascots.
- Keep sorting props neat and minimal.

## Gizmo the Goat

### Locked Character Prompt

```txt
Gizmo the Goat, friendly cream goat mascot for a children's coding app, sturdy body, rounded horn spirals, cocoa patches, orange harness, green bell accent, stable hooves, confident but playful stance, practical helpful expression, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no sharp intimidating horns, no farm realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1207
```

### Reusable Variant Prompt

```txt
Gizmo the Goat, same character design, same cream fur, rounded horn spirals, orange harness, green bell accent, standing beside overlapping ribbon strips and pointing with one hoof, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1207
```

### Consistency Notes

- Horns must stay rounded and soft.
- Keep timeline or ribbon props horizontal and simple.

## Tilda the Deer

### Locked Character Prompt

```txt
Tilda the Deer, gentle tan deer mascot for a children's coding app, warm tan fur, cream spots, rounded muzzle, leaf-like ear shapes, moss green scarf, pale gold accents, elegant posture, thoughtful and calm expression, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no realistic antlers, no forest realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1208
```

### Reusable Variant Prompt

```txt
Tilda the Deer, same character design, same tan fur, cream spots, green scarf, gracefully tracing a running total path with one hoof, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1208
```

### Consistency Notes

- Keep Tilda elegant but still simple and child-friendly.
- Avoid long realistic anatomy.

## Birch the Owl

### Locked Character Prompt

```txt
Birch the Owl, scholarly tawny owl mascot for a children's coding app, round eyes, parchment cream face, tawny brown feathers, pine green sash, plum detail accents, tidy feather tufts, smaller bookish silhouette, kind attentive expression, word-loving personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no dark fantasy owl look, no realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1209
```

### Reusable Variant Prompt

```txt
Birch the Owl, same character design, same tawny feathers, cream face, green sash, holding a word card and pointing down a branching letter path, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1209
```

### Consistency Notes

- Birch should feel more literary and academic than Milo.
- Keep the silhouette smaller and tidier than Milo’s.

## Luma the Firefly

### Locked Character Prompt

```txt
Luma the Firefly, glowing firefly mascot for a children's coding app, tiny round head, warm yellow glowing teardrop abdomen, mint-tinted wings, deep charcoal body, aqua spark accents, friendly curious expression, lightly magical but simple design, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no heavy glow bloom, no sci-fi realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1210
```

### Reusable Variant Prompt

```txt
Luma the Firefly, same character design, same glowing yellow abdomen, mint wings, tiny charcoal body, hovering between connected map dots and leaving a soft glowing trail, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1210
```

### Consistency Notes

- Keep glow controlled and readable.
- Never let effects overpower the character silhouette.

## Nova the Fox

### Locked Character Prompt

```txt
Nova the Fox, adventurous fox mascot for a children's coding app, ember orange fur, cream chest, pointed ears, curved tail, forest green satchel, soft berry accents, nimble alert body, optimistic expression, branching-path explorer personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no sly villain look, no realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1211
```

### Reusable Variant Prompt

```txt
Nova the Fox, same character design, same ember orange fur, cream chest, green satchel, curved tail, standing at a forked trail and gesturing toward two choices, hopeful teaching pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1211
```

### Consistency Notes

- Nova should feel exploratory, not chaotic.
- Use fork, maze, or branching props repeatedly.

## Scout the Rabbit

### Locked Character Prompt

```txt
Scout the Rabbit, methodical rabbit mascot for a children's coding app, soft gray-white fur, mint vest, coral tool belt, butter-yellow markers, long ears, compact build, builder-like posture, bright thoughtful expression, problem-solving personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no frantic speed effects, no realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1212
```

### Reusable Variant Prompt

```txt
Scout the Rabbit, same character design, same gray-white fur, mint vest, coral tool belt, placing a block onto a small answer ladder, cheerful builder pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1212
```

### Consistency Notes

- Scout should feel constructed and methodical, not speedy like Dash.
- Tool-belt cues help separate Scout from the other rabbit mascot.

## Dot the Beaver

### Locked Character Prompt

```txt
Dot the Beaver, practical beaver mascot for a children's coding app, warm brown fur, cream muzzle, paddle tail, teal vest, orange builder cap accent, rounded torso, friendly confident expression, resourceful personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no sharp teeth focus, no realistic animal texture --v 7 --style raw --ar 3:4 --stylize 60 --seed 1213
```

### Reusable Variant Prompt

```txt
Dot the Beaver, same character design, same warm brown fur, teal vest, orange builder cap accent, pointing at the best next plank choice on a path, practical teaching pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1213
```

### Consistency Notes

- Dot should feel decisive and constructive.
- Tail shape is a key recognizer. Keep it visible.

## Sunny the Raccoon

### Locked Character Prompt

```txt
Sunny the Raccoon, playful raccoon mascot for a children's coding app, silver gray fur, navy eye mask, marigold scarf, ringed tail, cream belly, dexterous paws, low crouch scanning posture, focused but friendly expression, tidy organizer personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no chaotic raccoon mischief, no realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1214
```

### Reusable Variant Prompt

```txt
Sunny the Raccoon, same character design, same silver gray fur, navy mask, marigold scarf, ringed tail, sliding a card into sorted order on a shelf, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1214
```

### Consistency Notes

- Sunny should feel focused and tidy, not chaotic.
- Use shelves, cards, and sort bins as recurring cues.

## Piper the Otter

### Locked Character Prompt

```txt
Piper the Otter, playful otter mascot for a children's coding app, river brown fur, cream face and belly, electric blue scarf, lime glow accents, sleek oval body, rounded paws, smooth tail, bright curious expression, precise playful personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no realistic wet fur, no realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1215
```

### Reusable Variant Prompt

```txt
Piper the Otter, same character design, same brown fur, cream face, electric blue scarf, lime glow accents, tapping a row of glowing on-off switches with one paw, cheerful teaching pose, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1215
```

### Consistency Notes

- Keep Piper tactile and switch-focused.
- Avoid turning the otter into a water-scene character unless that scene is required.

## Blinky the Robot

### Locked Character Prompt

```txt
Blinky the Robot, rounded robot mascot for a children's coding app, powder blue body, white face panel, orange indicator lights, navy outline accents, rounded square head, capsule arms, tiny antenna nub, cheerful reliable expression, precise but warm personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no metallic realism, no intimidating sci-fi style --v 7 --style raw --ar 3:4 --stylize 60 --seed 1216
```

### Reusable Variant Prompt

```txt
Blinky the Robot, same character design, same powder blue body, white face panel, orange indicator lights, gently projecting a midpoint scan beam over a row of cards, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1216
```

### Consistency Notes

- Keep Blinky rounded and warm.
- No hard-edged sci-fi rendering.

## Poppy the Squirrel

### Locked Character Prompt

```txt
Poppy the Squirrel, celebratory squirrel mascot for a children's coding app, chestnut fur, cream belly, fluffy curled tail, rounded cheeks, leaf green accents, golden acorn satchel, upright posture, bright encouraging expression, recap-host personality, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, simple shading, polished character design, full-body mascot, readable at small size, isolated on light background, no chaotic cartoon exaggeration, no realism --v 7 --style raw --ar 3:4 --stylize 60 --seed 1217
```

### Reusable Variant Prompt

```txt
Poppy the Squirrel, same character design, same chestnut fur, cream belly, golden acorn satchel, fluffy curled tail, holding a recap badge and giving a warm celebratory nod, children's educational app mascot, friendly flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, simple shading, isolated on light background --v 7 --style raw --ar 1:1 --stylize 80 --seed 1217
```

### Consistency Notes

- Use Poppy for recap and mastery moments, not the main teaching flow.
- Tail curl and acorn satchel should remain consistent.

## Best Practices For Reuse

### If You Need Many Consistent Poses

Generate these first for each mascot:

- base front pose
- three-quarter pose
- pointing pose
- thinking pose
- celebration pose

Then reuse the same base image reference in future prompts.

### If You Need Transparent-Like Assets

Ask for:

```txt
isolated on pure white background, clean cutout composition, no environment
```

Then remove the background after generation in your asset workflow.

### If You Need Lesson Mockups

Do not ask Midjourney to design the full UI and the mascot at the same time unless the goal is exploration only.

Instead:

1. generate mascot cutouts first
2. pick a canonical mascot render
3. place it into product screens manually

That will keep the character more consistent across lessons.

## Quick Copy Block

If you just want the shortest reusable prompt structure, use:

```txt
[MASCOT NAME], [SPECIES], same character design every time, [LOCKED PALETTE], [LOCKED PROP], [LOCKED SHAPE LANGUAGE], friendly children's coding app mascot, flat vector illustration, soft clay storybook feel, rounded silhouette, low-detail face, clean shape design, subtle depth, isolated on light background, no realism, no extra props --v 7 --style raw --ar 1:1 --stylize 80 --seed [LOCKED SEED]
```
