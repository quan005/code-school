"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Panel } from "@/components/ui/panel";

const colorGroups = {
  brand: {
    description:
      "Bright accents with clear roles. No screen should use all of them equally.",
    items: [
      ["Brand Red", "#FF5A4F", "Compare / contrast prompts"],
      ["Brand Yellow", "#F6C744", "Hints, stars, rewards"],
      ["Brand Green", "#7ED957", "Correct and complete"],
      ["Brand Blue", "#3DA5F4", "Current, focus, info"],
      ["Brand Orange", "#FF9C3A", "Primary CTA"],
      ["Brand Purple", "#9B8AFB", "Magic and mastery"],
    ],
  },
  foundation: {
    description:
      "Keep most surfaces neutral so the active action stays obvious.",
    items: [
      ["Canvas", "#F4F4F1", "App background"],
      ["Surface", "#FFFFFF", "Cards and controls"],
      ["Panel", "#ECECE7", "Grouped UI sections"],
      ["Border Soft", "#D9D9D2", "Lines and dividers"],
      ["Text Primary", "#444444", "Main reading copy"],
      ["Text Secondary", "#6A6A6A", "Support copy"],
    ],
  },
  gradients: {
    description:
      "Use gradients sparingly for scenes, reward moments, and primary actions.",
    items: [
      ["Sky", "linear-gradient(180deg, #F9FBFF 0%, #EEF7FF 100%)", "Scene sky"],
      [
        "Meadow",
        "linear-gradient(180deg, #FFFDF7 0%, #F4F4F1 100%)",
        "Canvas tint",
      ],
      [
        "Reward",
        "linear-gradient(135deg, #F6C744 0%, #FF9C3A 100%)",
        "Completion cards",
      ],
      [
        "Action",
        "linear-gradient(135deg, #FFB158 0%, #FF8C3A 100%)",
        "Primary buttons",
      ],
    ],
  },
  semantic: {
    description:
      "Semantic aliases keep product behavior consistent across chapters.",
    items: [
      ["Action Primary", "#FF9C3A", "Start, next, check answer"],
      ["Action Secondary", "#3DA5F4", "Replay, explore, info"],
      ["Progress Complete", "#7ED957", "Finished state"],
      ["Progress Special", "#F6C744", "Stars and rewards"],
      ["Feedback Error", "#F25F5C", "Gentle correction"],
      ["Feedback Success", "#2BCB5A", "Positive confirmation"],
    ],
  },
} as const;

const typeStyles = [
  {
    sample: "Guide the fox through the map",
    scale: "56 / 60, 600",
    token: "type.display.hero",
  },
  {
    sample: "Tap the shelf slot at index 3",
    scale: "36 / 40, 600",
    token: "type.heading.screen",
  },
  {
    sample: "This scene teaches one idea at a time.",
    scale: "16 / 24, 500",
    token: "type.body.lesson",
  },
  {
    sample: "Start lesson",
    scale: "14 / 18, 700",
    token: "type.label.button",
  },
  {
    sample: "items[3] -> kiwi",
    scale: "13 / 18, 600",
    token: "type.code.inline",
  },
] as const;

const buttonVariants = [
  {
    copy: "Start lesson",
    label: "Primary CTA",
    notes: ["60px height", "Action gradient", "White text", "Main move"],
    variant: "primary" as const,
  },
  {
    copy: "Replay step",
    label: "Secondary",
    notes: ["56px height", "White fill", "Soft border", "Support action"],
    variant: "secondary" as const,
  },
  {
    copy: "Show hint",
    label: "Hint",
    notes: ["Yellow fill", "Dark text", "Reward tone", "Still readable"],
    variant: "hint" as const,
  },
  {
    copy: "You did it",
    label: "Success",
    notes: [
      "Green fill",
      "Celebrate small wins",
      "Use sparingly",
      "Good feedback",
    ],
    variant: "success" as const,
  },
] as const;

const buttonStates = [
  {
    description: "Main production appearance.",
    key: "default",
    label: "Default",
  },
  {
    description: "Small lift. No layout shift.",
    key: "hover",
    label: "Hover",
  },
  {
    description: "Pressed inward with clay depth.",
    key: "pressed",
    label: "Pressed",
  },
  {
    description: "Still readable at lower emphasis.",
    key: "disabled",
    label: "Disabled",
  },
] as const;

const tileStates = {
  completed: {
    badge: "Completed",
    className: "ds-tile-complete",
    glow: "Green badge plus tiny sparkle burst.",
    subtitle: "You earned the leaf badge and unlocked the trail.",
  },
  current: {
    badge: "Current",
    className: "ds-tile-current",
    glow: "Blue border and strongest focus ring.",
    subtitle: "This should be the loudest tile on the map.",
  },
  locked: {
    badge: "Locked",
    className: "ds-tile-locked",
    glow: "Muted artwork, visible lock, no hover bait.",
    subtitle: "Show the next path, but do not encourage taps yet.",
  },
  unlocked: {
    badge: "Unlocked",
    className: "ds-tile-unlocked",
    glow: "Clean white tile with active orange chip.",
    subtitle: "Ready to open with one obvious action.",
  },
} as const;

const mascots = {
  milo: {
    accent: "var(--ds-orange)",
    domain: "Searching, pathfinding, graph journeys",
    guide: "Curious explorer",
    helper: "Let’s follow the trail one step at a time.",
    name: "Milo the Fox",
    prop: "Soft cream scarf",
  },
  nova: {
    accent: "var(--ds-purple)",
    domain: "Trees, recursion, branching ideas",
    guide: "Wise explainer",
    helper: "Pick one branch, solve it, then come back.",
    name: "Nova the Owl",
    prop: "Tiny map scroll",
  },
  pip: {
    accent: "var(--ds-blue)",
    domain: "Arrays, sorting, organizing",
    guide: "Practical helper",
    helper: "Each shelf slot has a number called an index.",
    name: "Pip the Otter",
    prop: "Leaf satchel",
  },
  tango: {
    accent: "var(--ds-green)",
    domain: "Two pointers and calm pacing",
    guide: "Steady coach",
    helper: "Try one small move, then check what changed.",
    name: "Tango the Turtle",
    prop: "Yellow neckerchief",
  },
} as const;

const mascotMoods = [
  "Happy",
  "Thinking",
  "Encouraging",
  "Celebrating",
  "Gentle correction",
] as const;

const lessonModes = {
  desktop: {
    actions: ["Replay", "Hint", "Check answer", "Next"],
    callout: "Pip: Tap the snack in slot 3.",
    layout: "Desktop lesson shell",
    top: ["Back", "Array Orchard", "Lesson 2: Shelf Slots", "2/8 star"],
  },
  mobile: {
    actions: ["Hint", "Replay", "Check answer", "Next"],
    callout: "Pip: Tap slot 3.",
    layout: "Mobile lesson shell",
    top: ["Back", "Lesson 2", "2/8 star", "Array Orchard"],
  },
} as const;

const mapModes = {
  desktop: {
    footer: ["Previous world", "Open current lesson"],
    top: ["Home", "Code Meadow Map", "Stars 12", "Badges 3"],
  },
  mobile: {
    footer: ["World list", "Open lesson"],
    top: ["Home", "Map", "Stars 12", "5/8 lessons"],
  },
} as const;

const sampleLessons = {
  arrays: {
    action: "Tap the fruit at index 3.",
    details: [
      "Background: pale cream meadow with soft sky gradient",
      "Scene: five wooden shelf slots with labels 0 to 4",
      "Support strip: Index means position number",
      "Correct state: green pop plus Pip clap",
    ],
    flow: [
      "Pip gives the task in one short sentence.",
      "Slot labels appear before vocabulary.",
      "The child taps one fruit.",
      "The array and index words appear after success.",
    ],
    mascot: "Pip the Otter",
    title: "Pip the Otter's Snack Shelf",
  },
  graphs: {
    action: "Tap a connected hut to move Milo forward.",
    details: [
      "Background: pale green jungle map",
      "Scene: four huts and thick curved trail lines",
      "Support strip: Places are nodes. Trails are edges.",
      "Blocked huts stay muted with no hover emphasis",
    ],
    flow: [
      "Milo highlights the start hut.",
      "The learner selects a connected hut.",
      "The path animates one segment at a time.",
      "Node and edge vocabulary appears after movement.",
    ],
    mascot: "Milo the Fox",
    title: "Milo's Hut Trail Map",
  },
  stacks: {
    action: "Drag one pancake to the top, then remove the top pancake.",
    details: [
      "Background: mountain breakfast scene",
      "Scene: centered pancake tower on a blue plate",
      "Support strip: Only the top pancake can leave",
      "Wrong middle tap causes a gentle wiggle, not a harsh flash",
    ],
    flow: [
      "Tango asks for one top move.",
      "The stack compresses with a soft bounce.",
      "The child removes the top pancake.",
      "Last in, first out appears after the action works.",
    ],
    mascot: "Tango the Turtle",
    title: "Bear's Pancake Tower",
  },
} as const;

function buttonStateClass(state: (typeof buttonStates)[number]["key"]) {
  if (state === "hover") {
    return "is-hover-preview";
  }

  if (state === "pressed") {
    return "is-pressed-preview";
  }

  return "";
}

export function DesignSystemShowcase() {
  const [activeColorGroup, setActiveColorGroup] =
    useState<keyof typeof colorGroups>("foundation");
  const [activeButtonState, setActiveButtonState] =
    useState<(typeof buttonStates)[number]["key"]>("default");
  const [activeTileState, setActiveTileState] =
    useState<keyof typeof tileStates>("current");
  const [activeMascot, setActiveMascot] = useState<keyof typeof mascots>("pip");
  const [activeLessonMode, setActiveLessonMode] =
    useState<keyof typeof lessonModes>("desktop");
  const [activeMapMode, setActiveMapMode] =
    useState<keyof typeof mapModes>("desktop");
  const [activeSampleLesson, setActiveSampleLesson] =
    useState<keyof typeof sampleLessons>("arrays");

  const currentColorGroup = colorGroups[activeColorGroup];
  const currentMascot = mascots[activeMascot];
  const currentTile = tileStates[activeTileState];
  const currentLessonMode = lessonModes[activeLessonMode];
  const currentMapMode = mapModes[activeMapMode];
  const currentSampleLesson = sampleLessons[activeSampleLesson];

  return (
    <div className="ds-page">
      <section className="ds-system-hero">
        <div className="ds-system-copy">
          <p className="ds-kicker">Interactive Design System</p>
          <h1>Code Meadow system lab</h1>
          <p className="ds-lead">
            This page turns the written spec into a working local reference for
            tokens, states, layout rules, and lesson design patterns.
          </p>
          <div className="ds-hero-actions">
            <Button size="lg">Start lesson</Button>
            <Button size="lg" variant="secondary">
              Open map
            </Button>
            <Button size="lg" variant="hint">
              Show hint
            </Button>
          </div>
        </div>

        <Card className="ds-summary-card">
          <p className="ds-type-label">What this page should prove</p>
          <div className="ds-summary-grid">
            <div className="ds-summary-block">
              <strong>Tokens</strong>
              <span>Foundation, accent, semantic, gradients</span>
            </div>
            <div className="ds-summary-block">
              <strong>Components</strong>
              <span>Buttons, cards, mascot callouts, chips</span>
            </div>
            <div className="ds-summary-block">
              <strong>Layouts</strong>
              <span>Lesson shell and world-map shell</span>
            </div>
            <div className="ds-summary-block">
              <strong>Samples</strong>
              <span>Arrays, stacks, and graphs lesson blueprints</span>
            </div>
          </div>
          <div
            className="ds-ratio-bar"
            aria-label="Suggested screen color ratio"
          >
            <span className="ds-ratio-neutral">70% neutral</span>
            <span className="ds-ratio-primary">20% primary accent</span>
            <span className="ds-ratio-support">10% support accent</span>
          </div>
        </Card>
      </section>

      <section className="ds-jump-row" aria-label="Design system sections">
        <a href="#tokens">Tokens</a>
        <a href="#typography">Typography</a>
        <a href="#buttons">Buttons</a>
        <a href="#cards">Cards</a>
        <a href="#mascots">Mascots</a>
        <a href="#wireframes">Wireframes</a>
        <a href="#samples">Sample lessons</a>
      </section>

      <section className="ds-section-grid" id="tokens">
        <Panel
          actions={
            <div className="ds-chip-row">
              {(
                Object.keys(colorGroups) as Array<keyof typeof colorGroups>
              ).map((group) => (
                <button
                  className={
                    activeColorGroup === group
                      ? "ds-state-pill ds-state-pill-active"
                      : "ds-state-pill"
                  }
                  key={group}
                  onClick={() => setActiveColorGroup(group)}
                  type="button"
                >
                  {group}
                </button>
              ))}
            </div>
          }
          eyebrow="Color Tokens"
          title="System palette explorer"
        >
          <p className="ds-panel-note">{currentColorGroup.description}</p>
          <div className="ds-swatch-grid">
            {currentColorGroup.items.map(([label, value, use]) => (
              <div className="ds-swatch-card" key={label}>
                <div
                  className="ds-swatch-chip"
                  style={
                    value.startsWith("linear-gradient")
                      ? { backgroundImage: value }
                      : { backgroundColor: value }
                  }
                />
                <strong>{label}</strong>
                <span>{value}</span>
                <p>{use}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="Usage Rules" title="Color behavior">
          <ul className="ds-rule-list">
            <li>Orange is the main go button and invitation color.</li>
            <li>Blue marks focus, active progress, and current lessons.</li>
            <li>Green signals safe, complete, and correct moments.</li>
            <li>Yellow handles hints, stars, and special attention moments.</li>
            <li>Purple is reserved for mastery and magical advanced ideas.</li>
          </ul>
        </Panel>
      </section>

      <section className="ds-section-grid" id="typography">
        <Panel eyebrow="Typography" title="Named type roles">
          <div className="ds-type-grid">
            {typeStyles.map((style) => (
              <div className="ds-type-card" key={style.token}>
                <p className="ds-type-label">{style.token}</p>
                <p
                  className={
                    style.token === "type.display.hero"
                      ? "ds-type-display"
                      : style.token === "type.heading.screen"
                        ? "ds-type-heading"
                        : style.token === "type.code.inline"
                          ? "ds-type-code"
                          : style.token === "type.label.button"
                            ? "ds-type-button"
                            : "ds-type-body"
                  }
                >
                  {style.sample}
                </p>
                <span className="ds-meta-copy">{style.scale}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="Typography Rules" title="How the system should read">
          <ul className="ds-rule-list">
            <li>Use sentence case and short headings.</li>
            <li>Keep lesson copy around 45 to 60 characters wide.</li>
            <li>Introduce the picture before the technical word.</li>
            <li>Use monospace only for tiny code reveals and notation.</li>
            <li>Body text must stay calm, readable, and non-novelty.</li>
          </ul>
        </Panel>
      </section>

      <section className="ds-section-grid" id="buttons">
        <Panel
          actions={
            <div className="ds-chip-row">
              {buttonStates.map((state) => (
                <button
                  className={
                    activeButtonState === state.key
                      ? "ds-state-pill ds-state-pill-active"
                      : "ds-state-pill"
                  }
                  key={state.key}
                  onClick={() => setActiveButtonState(state.key)}
                  type="button"
                >
                  {state.label}
                </button>
              ))}
            </div>
          }
          eyebrow="Button Specs"
          title="Button lab"
        >
          <p className="ds-panel-note">
            {
              buttonStates.find((state) => state.key === activeButtonState)
                ?.description
            }
          </p>
          <div className="ds-button-grid">
            {buttonVariants.map((button) => (
              <Card className="ds-button-card" key={button.label}>
                <p className="ds-type-label">{button.label}</p>
                <Button
                  className={buttonStateClass(activeButtonState)}
                  disabled={activeButtonState === "disabled"}
                  size="lg"
                  variant={button.variant}
                >
                  {button.copy}
                </Button>
                <ul className="ds-spec-list">
                  {button.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </Card>
            ))}
            <Card className="ds-button-card">
              <p className="ds-type-label">Circular action</p>
              <button
                aria-label="Replay audio"
                className={`ds-circle-button ${buttonStateClass(activeButtonState)}`}
                disabled={activeButtonState === "disabled"}
                type="button"
              >
                ↻
              </button>
              <ul className="ds-spec-list">
                <li>72px desktop and 64px mobile target</li>
                <li>Always include an accessible label</li>
                <li>Use for replay, home, map, pause, and settings</li>
              </ul>
            </Card>
          </div>
        </Panel>

        <Panel eyebrow="Copy Rules" title="Button wording">
          <div className="ds-two-col">
            <div>
              <p className="ds-type-label">Good</p>
              <ul className="ds-rule-list">
                <li>Start lesson</li>
                <li>Try again</li>
                <li>Move left</li>
                <li>Check answer</li>
              </ul>
            </div>
            <div>
              <p className="ds-type-label">Avoid</p>
              <ul className="ds-rule-list">
                <li>Execute</li>
                <li>Confirm selection</li>
                <li>Advance to subsequent module</li>
                <li>Open pedagogical sequence</li>
              </ul>
            </div>
          </div>
        </Panel>
      </section>

      <section className="ds-section-grid" id="cards">
        <Panel
          actions={
            <div className="ds-chip-row">
              {(Object.keys(tileStates) as Array<keyof typeof tileStates>).map(
                (state) => (
                  <button
                    className={
                      activeTileState === state
                        ? "ds-state-pill ds-state-pill-active"
                        : "ds-state-pill"
                    }
                    key={state}
                    onClick={() => setActiveTileState(state)}
                    type="button"
                  >
                    {state}
                  </button>
                ),
              )}
            </div>
          }
          eyebrow="Card Specs"
          title="Lesson and support cards"
        >
          <div className="ds-card-grid">
            <article className={`ds-lesson-tile ${currentTile.className}`}>
              <div className="ds-tile-top">
                <span className="ds-lesson-number">2</span>
                <span className="ds-state-badge">{currentTile.badge}</span>
              </div>
              <div className="ds-tile-illustration">
                <div className="ds-slot-row">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div>
                <h3>Array Orchard</h3>
                <p>{currentTile.subtitle}</p>
              </div>
            </article>

            <Card className="ds-support-card">
              <p className="ds-kicker">Support card</p>
              <h3>Helpful, never punitive</h3>
              <p>
                Use a left accent stripe, one idea, and one short helper line.
              </p>
            </Card>

            <Card className="ds-reward-card">
              <p className="ds-kicker">Reward card</p>
              <h3>You earned the Tree Grove badge</h3>
              <p>Limit reward cards to one big heading and one next step.</p>
            </Card>
          </div>
        </Panel>

        <Panel eyebrow="Tile Rules" title="What the map card must communicate">
          <ul className="ds-rule-list">
            <li>
              Top-left lesson chip and top-right state badge stay consistent.
            </li>
            <li>Current tile should be the strongest visual focal point.</li>
            <li>Locked tiles stay visible but should not act tappable.</li>
            <li>{currentTile.glow}</li>
            <li>
              Never rely on color alone. Keep icon, label, and outline cues.
            </li>
          </ul>
        </Panel>
      </section>

      <section className="ds-section-grid" id="mascots">
        <Panel
          actions={
            <div className="ds-chip-row">
              {(Object.keys(mascots) as Array<keyof typeof mascots>).map(
                (mascot) => (
                  <button
                    className={
                      activeMascot === mascot
                        ? "ds-state-pill ds-state-pill-active"
                        : "ds-state-pill"
                    }
                    key={mascot}
                    onClick={() => setActiveMascot(mascot)}
                    type="button"
                  >
                    {mascots[mascot].name.split(" ")[0]}
                  </button>
                ),
              )}
            </div>
          }
          eyebrow="Mascot Rules"
          title="Guides, not decorations"
        >
          <div className="ds-mascot-panel">
            <div className="ds-mascot-stage">
              <div
                className="ds-mascot-avatar"
                style={{ "--ds-mascot-accent": currentMascot.accent } as never}
              />
              <div className="ds-mascot-bubble-inline">
                {currentMascot.helper}
              </div>
            </div>
            <div className="ds-mascot-copy">
              <h3>{currentMascot.name}</h3>
              <p>{currentMascot.domain}</p>
              <p>{currentMascot.guide}</p>
              <p>Prop: {currentMascot.prop}</p>
              <div className="ds-chip-row">
                {mascotMoods.map((mood) => (
                  <span className="ds-tone-chip" key={mood}>
                    {mood}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Panel>

        <Panel eyebrow="Behavior Rules" title="Mascot constraints">
          <ul className="ds-rule-list">
            <li>Mascots appear at decision moments, not every screen.</li>
            <li>Speech bubbles stay at one or two sentences max.</li>
            <li>No angry state and no failure-shaming body language.</li>
            <li>One primary guide per lesson. Avoid mascot crowding.</li>
            <li>Motion should stay soft: blink, wiggle, or gentle bounce.</li>
          </ul>
        </Panel>
      </section>

      <section className="ds-wireframe-grid" id="wireframes">
        <Panel
          actions={
            <div className="ds-chip-row">
              {(
                Object.keys(lessonModes) as Array<keyof typeof lessonModes>
              ).map((mode) => (
                <button
                  className={
                    activeLessonMode === mode
                      ? "ds-state-pill ds-state-pill-active"
                      : "ds-state-pill"
                  }
                  key={mode}
                  onClick={() => setActiveLessonMode(mode)}
                  type="button"
                >
                  {mode}
                </button>
              ))}
            </div>
          }
          eyebrow="Lesson Screen"
          title={currentLessonMode.layout}
        >
          <div className="ds-wireframe ds-wireframe-lesson">
            <div className="ds-wireframe-bar">
              {currentLessonMode.top.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="ds-wireframe-callout">
              {currentLessonMode.callout}
            </div>
            <div className="ds-wireframe-scene">
              <div className="ds-slot-grid">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span className="is-active">3</span>
                <span>4</span>
              </div>
            </div>
            <div className="ds-wireframe-strip">
              <span>Index = position number</span>
              <span>Task = tap slot 3</span>
            </div>
            <div className="ds-wireframe-actions">
              {currentLessonMode.actions.map((action) => (
                <span key={action}>{action}</span>
              ))}
            </div>
          </div>
        </Panel>

        <Panel
          actions={
            <div className="ds-chip-row">
              {(Object.keys(mapModes) as Array<keyof typeof mapModes>).map(
                (mode) => (
                  <button
                    className={
                      activeMapMode === mode
                        ? "ds-state-pill ds-state-pill-active"
                        : "ds-state-pill"
                    }
                    key={mode}
                    onClick={() => setActiveMapMode(mode)}
                    type="button"
                  >
                    {mode}
                  </button>
                ),
              )}
            </div>
          }
          eyebrow="Map Screen"
          title="World journey shell"
        >
          <div className="ds-wireframe ds-wireframe-map">
            <div className="ds-wireframe-bar">
              {currentMapMode.top.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="ds-map-stage">
              <svg
                aria-hidden="true"
                className="ds-map-road"
                viewBox="0 0 560 360"
              >
                <path
                  className="ds-map-road-shadow"
                  d="M140 82C210 78 256 108 314 148C354 176 366 214 336 238C298 270 232 284 194 314C174 330 160 344 146 358"
                />
                <path
                  className="ds-map-road-fill"
                  d="M140 82C210 78 256 108 314 148C354 176 366 214 336 238C298 270 232 284 194 314C174 330 160 344 146 358"
                />
              </svg>
              <div className="ds-map-node current">Array Orchard</div>
              <div className="ds-map-node complete">Stack Mountain</div>
              <div className="ds-map-node locked">Queue Station</div>
              <span className="ds-map-sprout ds-map-sprout-one" />
              <span className="ds-map-sprout ds-map-sprout-two" />
              <span className="ds-map-sprout ds-map-sprout-three" />
            </div>
            <div className="ds-wireframe-actions">
              {currentMapMode.footer.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </Panel>
      </section>

      <section className="ds-section-grid" id="samples">
        <Panel
          actions={
            <div className="ds-chip-row">
              {(
                Object.keys(sampleLessons) as Array<keyof typeof sampleLessons>
              ).map((lesson) => (
                <button
                  className={
                    activeSampleLesson === lesson
                      ? "ds-state-pill ds-state-pill-active"
                      : "ds-state-pill"
                  }
                  key={lesson}
                  onClick={() => setActiveSampleLesson(lesson)}
                  type="button"
                >
                  {lesson}
                </button>
              ))}
            </div>
          }
          eyebrow="Sample Lessons"
          title={currentSampleLesson.title}
        >
          <div className="ds-sample-grid">
            <Card className="ds-sample-card">
              <p className="ds-type-label">Primary guide</p>
              <h3>{currentSampleLesson.mascot}</h3>
              <p>{currentSampleLesson.action}</p>
            </Card>
            <Card className="ds-sample-card">
              <p className="ds-type-label">Visual details</p>
              <ul className="ds-spec-list">
                {currentSampleLesson.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Card>
            <Card className="ds-sample-card">
              <p className="ds-type-label">Interaction flow</p>
              <ol className="ds-flow-list">
                {currentSampleLesson.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </Card>
          </div>
        </Panel>

        <Panel
          eyebrow="Implementation Notes"
          title="Non-negotiable system rules"
        >
          <ul className="ds-rule-list">
            <li>Default to light mode for MVP.</li>
            <li>
              Keep scene components separate from shell layout components.
            </li>
            <li>Use semantic HTML even when the visuals feel playful.</li>
            <li>
              Respect reduced motion and keep hit targets at 44px minimum.
            </li>
            <li>
              Do not ship the page without live preview behavior and state
              examples.
            </li>
          </ul>
        </Panel>
      </section>
    </div>
  );
}
