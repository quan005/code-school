# Interactive Learning App Jira Backlog

## Scope
This backlog covers the MVP plan for a content-first, interactive learning app built with Next.js App Router, MDX-authored curriculum, a persisted student progress model, and a full `Two Pointers` reference chapter.

## Planning Assumptions
- Story points use a Fibonacci scale: `1, 2, 3, 5, 8, 13`.
- MVP goal: ship one complete chapter end to end with reusable platform primitives.
- Lesson content lives in the repo, while student/app state lives in the database.
- Parent/teacher-managed child account architecture is included at the foundation level, but not all parent/teacher features are in MVP.

## Epic Summary

| Epic ID | Epic | Goal | Points |
| --- | --- | --- | --- |
| `EPIC-1` | Platform Foundation | Establish the app shell, routing, and frontend foundation | `13` |
| `EPIC-2` | Curriculum Content System | Build the MDX-driven content model and lesson schema | `13` |
| `EPIC-3` | Learning Experience Components | Build reusable lesson and visualization primitives | `21` |
| `EPIC-4` | Progress and Mastery | Persist student state and mastery logic | `13` |
| `EPIC-5` | Practice and Review | Support coding, review, and mastery check flows | `13` |
| `EPIC-6` | Two Pointers Chapter | Deliver the full reference chapter content | `13` |
| `EPIC-7` | Child Safety and Account Model | Establish privacy-safe child-directed account constraints | `8` |
| `EPIC-8` | Quality and Delivery | Add testing and launch readiness | `8` |

Total planned points: `102`

---

## EPIC-1: Platform Foundation

### `APP-1` Initialize Next.js App Router Platform
**Story Points:** `5`

**Description**  
Set up the base application using Next.js App Router, TypeScript, linting, formatting, and a scalable directory structure that can support marketing pages, authenticated app routes, MDX content, and backend endpoints.

**Acceptance Criteria**
- A Next.js App Router app exists and boots successfully in local development.
- TypeScript is enabled with strict settings.
- Shared directories exist for `app`, `components`, `content`, `lib`, and `db`.
- Linting and formatting scripts run successfully.
- Root layout, loading, error, and not-found conventions are scaffolded.

**Technical Details**
- Use App Router, not Pages Router.
- Add route groups for `(marketing)` and `(app)` at the filesystem level.
- Set up project scripts for development, linting, and testing.
- Establish global styles and metadata scaffolding.

**Out of Scope**
- Authentication flows.
- Database integration.
- Production deployment.

### `APP-2` Define Route Architecture and Navigation Shell
**Story Points:** `5`

**Description**  
Create the top-level route structure and page scaffolds for chapter browsing, lesson reading, review, mastery, dashboard, and profile experiences.

**Acceptance Criteria**
- The following routes are scaffolded and render successfully:
  - `/`
  - `/chapters`
  - `/chapters/[chapterSlug]`
  - `/learn/[chapterSlug]/intro`
  - `/learn/[chapterSlug]/[lessonSlug]`
  - `/review/[chapterSlug]`
- `/mastery/[chapterSlug]`
- `/dashboard`
- `/profile`
- Marketing and app route groups render distinct layouts.
- Unknown routes return a useful not-found page.

**Technical Details**
- Use nested layouts for app shell reuse.
- Keep lesson shell concerns separate from chapter landing concerns.
- Build navigation configuration as data rather than hardcoding links throughout components.

**Out of Scope**
- Lesson content rendering.
- Progress persistence.
- Parent/teacher/admin behavior.

### `APP-3` Establish Design System Foundations
**Story Points:** `3`

**Description**  
Build the foundational UI layer for a kid-friendly learning experience, including shared tokens and reusable primitives.

**Acceptance Criteria**
- Global design tokens exist for typography, spacing, radius, shadows, and color.
- Reusable primitives exist for buttons, cards, badges, panels, and drawers.
- Focus states and keyboard accessibility are present.
- Layout works on desktop and tablet, with usable mobile fallback.

**Technical Details**
- Use CSS variables for theming and consistency.
- Keep primitives lightweight and composable.
- Build shared components under `components/ui`.

**Out of Scope**
- Final marketing polish.
- Large component library expansion.
- Gamification visuals.

---

## EPIC-2: Curriculum Content System

### `CONTENT-1` Define Chapter and Lesson Metadata Schema
**Story Points:** `3`

**Description**  
Define the typed metadata contract for chapters and lessons so curriculum files can be validated and consistently rendered.

**Acceptance Criteria**
- Chapter and lesson metadata interfaces are defined in TypeScript.
- Lesson metadata supports slug, order, lesson type, difficulty, estimated time, concepts, skills, and prerequisites.
- Invalid metadata fails validation with clear errors.
- Duplicate slugs and invalid ordering are detected.

**Technical Details**
- Use TypeScript types plus a runtime validator such as Zod.
- Support lesson types `intro`, `problem`, `review`, and `mastery`.
- Keep the contract aligned with exported MDX metadata.

**Out of Scope**
- User progress schema.
- Content editing UI.
- Localization.

### `CONTENT-2` Build MDX Content Loader and Indexer
**Story Points:** `5`

**Description**  
Implement the content pipeline that discovers lesson files from the repo, parses metadata, computes ordering, and exposes chapter/lesson query helpers.

**Acceptance Criteria**
- Chapters and lessons are loaded from `content/chapters`.
- Chapter pages can list ordered lessons.
- Lesson pages can resolve content by chapter slug and lesson slug.
- Previous and next lesson relationships are computed.
- Build-time errors are raised for invalid content state.

**Technical Details**
- Use Next.js MDX support in App Router.
- Add query helpers for chapter lists, chapter lookups, lesson lookups, and ordered lesson resolution.
- Prefer file-based indexing over runtime filesystem crawling in the client.

**Out of Scope**
- CMS integration.
- Authoring dashboard.
- Remote curriculum storage.

### `CONTENT-3` Define Reusable MDX Component Contract
**Story Points:** `3`

**Description**  
Create the set of allowed MDX lesson components so curriculum authors can compose lessons with predictable instructional blocks.

**Acceptance Criteria**
- MDX supports reusable blocks including:
  - `ProblemStatement`
  - `Intuition`
  - `InterviewTip`
  - `ComplexityCard`
  - `TestCaseTable`
  - `HintDrawer`
- A sample lesson using the component set compiles successfully.
- Component prop contracts are typed and documented.

**Technical Details**
- Register a shared MDX component mapping.
- Keep authoring conventions explicit and stable.
- Favor prop shapes that can be reused across multiple pattern families.

**Out of Scope**
- WYSIWYG editing.
- Arbitrary JSX in authored content without review.
- Lesson analytics.

### `CONTENT-4` Define Lesson Frame Schema for Interactive Sequences
**Story Points:** `2`

**Description**  
Define a generic lesson-frame data model that powers step-by-step visual explanations across algorithm lessons.

**Acceptance Criteria**
- A `LessonFrame` type exists.
- Frames support narration, highlights, pointer state, decision text, and optional quiz prompts.
- A sample frame set exists for a Two Pointers lesson.
- Frame data can be consumed by a generic player component.

**Technical Details**
- Support multiple pointer types such as `left`, `right`, `slow`, `fast`, and `current`.
- Keep frame data serializable and easy to author alongside lesson content.
- Avoid tying the frame model to only one algorithm pattern.

**Out of Scope**
- Animation engine implementation.
- Frame authoring GUI.
- AI-generated frames.

---

## EPIC-3: Learning Experience Components

### `LEARN-1` Build Lesson Shell and Progress Header
**Story Points:** `5`

**Description**  
Create the shared lesson layout with chapter context, lesson navigation, progress presentation, and responsive structure.

**Acceptance Criteria**
- Lessons render in a shared shell with a consistent layout.
- Progress header shows lesson and chapter context.
- Sidebar lists chapter lessons in order.
- Previous and next lesson navigation works.
- Layout remains usable on tablet and mobile screens.

**Technical Details**
- Use Server Components for shell composition where possible.
- Keep shell reusable across intro, problem, review, and mastery content.
- Structure shell to support future progress and mastery indicators.

**Out of Scope**
- Persisted progress updates.
- Parent-specific overlays.
- Advanced unlock animations.

### `LEARN-2` Build Generic StepPlayer
**Story Points:** `5`

**Description**  
Implement a generic, reusable step player for frame-based algorithm walkthroughs.

**Acceptance Criteria**
- StepPlayer renders a frame sequence and updates as users move forward or backward.
- Frame narration, callouts, and optional quizzes render correctly.
- Keyboard controls support step navigation.
- Step state is preserved during page interaction.

**Technical Details**
- Implement as a Client Component.
- Support controlled and uncontrolled playback state.
- Make it generic enough for reuse across multiple pattern families.

**Out of Scope**
- Persisting frame-by-frame progress.
- Voice narration.
- Adaptive sequencing.

### `LEARN-3` Build ArrayVisualizer and PointerVisualizer
**Story Points:** `5`

**Description**  
Build the core visual widgets for array-based lessons, including pointer positions and highlighted comparisons.

**Acceptance Criteria**
- Arrays render as visual cards or blocks.
- Pointers can be displayed and labeled.
- Active elements and comparisons can be highlighted.
- Visual state updates correctly from StepPlayer frame data.
- Supports common Two Pointers use cases.

**Technical Details**
- Build under `components/visualizers`.
- Keep visuals deterministic and lightweight.
- Handle negative values, duplicate values, and varying array lengths.

**Out of Scope**
- Tree, graph, or grid visualizers.
- Canvas-heavy animations.
- Custom student-entered visual data.

### `LEARN-4` Build PredictionPrompt and Reflection Widgets
**Story Points:** `3`

**Description**  
Add reusable widgets for asking students to predict the next move or explain reasoning at key moments in a lesson.

**Acceptance Criteria**
- Multiple-choice prediction prompts work.
- Immediate correct/incorrect feedback is displayed.
- Reflection prompts can be embedded in lessons and step sequences.
- Widget results can later be wired into progress/mastery scoring.

**Technical Details**
- Build as a Client Component with typed prompt models.
- Emit events or callbacks for future analytics/progress integration.
- Support accessibility and keyboard interaction.

**Out of Scope**
- Free-form writing evaluation.
- AI grading.
- Peer discussion.

### `LEARN-5` Build Complexity, Test Case, and Common Mistakes Blocks
**Story Points:** `3`

**Description**  
Create reusable instructional support blocks for complexity, test cases, and common student mistakes.

**Acceptance Criteria**
- Complexity block supports time and space notation.
- Test case table supports visible input/output examples.
- Common mistakes card supports multiple warnings and examples.
- All blocks render inside MDX lessons.

**Technical Details**
- Build as MDX-compatible React components.
- Keep props strongly typed.
- Optimize for concise, kid-friendly presentation.

**Out of Scope**
- Auto-generated explanations.
- Hidden test execution.
- Personalized remediation.

---

## EPIC-4: Progress and Mastery

### `PROGRESS-1` Design Database Schema for User Progress
**Story Points:** `5`

**Description**  
Design and implement the MVP database schema for users, student profiles, lesson progress, chapter progress, and submissions.

**Acceptance Criteria**
- Tables exist for users, student profiles, lesson progress, and submissions.
- Lesson statuses can be persisted and queried.
- Migrations are versioned and documented.
- ORM models/types are generated and usable by the app.

**Technical Details**
- Use Postgres with Prisma or Drizzle.
- Keep lesson content in repo and student state in DB.
- Reserve room for adult-managed child profiles and future parent/teacher relationships.

**Out of Scope**
- Billing.
- Messaging.
- Advanced analytics warehousing.

### `PROGRESS-2` Implement Lesson Completion and Progress Sync
**Story Points:** `5`

**Description**  
Allow a student’s lesson status to persist across sessions and power chapter-level progress indicators.

**Acceptance Criteria**
- Students can transition lessons from `not_started` to `in_progress` to `completed`.
- Reloading the app reflects persisted status.
- Chapter pages display current lesson progress accurately.
- Mutations are secured to the active student context.

**Technical Details**
- Use Server Actions or Route Handlers for mutations.
- Expose progress data to Server Components for initial render.
- Validate chapter and lesson existence before writes.

**Out of Scope**
- Mastery scoring.
- Parent reports.
- Retry analytics.

### `PROGRESS-3` Implement Mastery Check Scoring Model
**Story Points:** `3`

**Description**  
Implement the initial mastery scoring logic for chapter completion and mastery evaluation.

**Acceptance Criteria**
- A deterministic scoring model exists.
- Chapter mastery state can be computed from progress data.
- Mastery result can be shown on chapter and mastery pages.
- Scoring logic is covered by tests.

**Technical Details**
- Use pure functions for score calculation.
- Include completion, quiz performance, code correctness, hint usage, and retry count in the model.
- Keep scoring extensible for future mastery tiers.

**Out of Scope**
- AI evaluation of explanations.
- Adaptive recommendation engine.
- Rewards economy.

---

## EPIC-5: Practice and Review

### `PRACTICE-1` Build Safe MVP Code Playground
**Story Points:** `5`

**Description**  
Create the MVP browser-based coding experience for lesson implementation tasks using starter code and constrained evaluation patterns.

**Acceptance Criteria**
- Problem lessons can render starter code.
- Students can edit code in-browser.
- Visible tests can be run through the MVP evaluation path.
- Fill-in-the-blank or short-function tasks are supported.
- UI clearly distinguishes code, tests, output, and hints.

**Technical Details**
- Start with constrained problem templates rather than arbitrary execution.
- Build with future sandboxed execution service integration in mind.
- Keep language support intentionally narrow in MVP.

**Out of Scope**
- General sandboxed execution.
- Multi-language support.
- Long-running code jobs.

### `PRACTICE-2` Persist Submissions and Attempt History
**Story Points:** `3`

**Description**  
Record student submission attempts so progress and mastery logic can reflect actual practice behavior.

**Acceptance Criteria**
- Each code run or submission can be stored.
- Stored data includes lesson, code snapshot, result summary, and timestamp.
- Latest attempt state can be restored when revisiting a lesson.
- Attempt history is queryable per lesson and student.

**Technical Details**
- Persist through the progress/submission schema.
- Keep payloads lean and focused on MVP needs.
- Use secure write paths only.

**Out of Scope**
- Replayable editor timelines.
- Benchmarking.
- Plagiarism detection.

### `PRACTICE-3` Build Chapter Review Experience
**Story Points:** `2`

**Description**  
Create a chapter review page that revisits the key ideas, patterns, and common mistakes before mastery.

**Acceptance Criteria**
- Review page exists for `Two Pointers`.
- Review summarizes chapter strategies and common traps.
- Review naturally leads into mastery.
- Review content is authored through the content system.

**Technical Details**
- Support `review` lesson type or a dedicated review route.
- Allow a mix of MDX summary blocks and lightweight interactive recap components.

**Out of Scope**
- Personalized review generation.
- Printable review worksheets.
- Cross-chapter recap.

### `PRACTICE-4` Build Mastery Check Experience
**Story Points:** `3`

**Description**  
Create the chapter-end mastery flow combining quizzes, reasoning checks, and implementation tasks.

**Acceptance Criteria**
- Mastery page exists and is routable.
- Students can complete the mastery flow end to end.
- Results update chapter mastery state.
- Clear pass/needs-practice feedback is shown.

**Technical Details**
- Compose from reusable quiz, prompt, and practice components.
- Store result summaries for later reporting.
- Keep content-driven, not hardcoded in page logic.

**Out of Scope**
- Certificates.
- Parent sign-off workflows.
- Adaptive remediation.

---

## EPIC-6: Two Pointers Chapter

Source of truth for chapter sequencing and instructional content:
- `docs/curriculum/code-patterns/two-pointers-chapter.md`

### `CONTENT-TP-1` Author Chapter Landing and Intro Lesson
**Story Points:** `3`

**Description**  
Author the `Two Pointers` chapter landing page and intro lesson that establish the intuition, strategies, and chapter roadmap.
Pull the lesson structure, concepts, and kid-facing explanations from `docs/curriculum/code-patterns/two-pointers-chapter.md`.

**Acceptance Criteria**
- Chapter landing page includes summary, lesson list, and entry point.
- Intro lesson covers intuition, strategies, when to use the pattern, and a real-world example.
- Intro lesson includes a mini checkpoint.
- Content uses the standard MDX and lesson shell system.

**Technical Details**
- Author under `content/chapters/two-pointers`.
- Use `docs/curriculum/code-patterns/two-pointers-chapter.md` as the source document for chapter goals, outline, and intro lesson content.
- Include at least one interactive visual block.
- Export typed metadata.

**Out of Scope**
- Other chapters.
- Teacher-facing lesson variants.
- Localization.

### `CONTENT-TP-2` Author Problem Lesson - Pair Sum Sorted
**Story Points:** `5`

**Description**  
Create the canonical `Pair Sum - Sorted` lesson as the reference implementation for problem-based lessons in the app.
Use `docs/curriculum/code-patterns/two-pointers-chapter.md` as the source for lesson intent, examples, and teaching language.

**Acceptance Criteria**
- Lesson includes statement, examples, constraints, brute force comparison, optimized intuition, walkthrough, implementation, complexity, tests, and reflection.
- Uses StepPlayer and pointer visualization meaningfully.
- Includes at least one prediction prompt.
- Includes a coding or constrained implementation task.

**Technical Details**
- Co-locate frame data and sample data with the MDX lesson.
- Adapt the `Pair Sum - Sorted` material from `docs/curriculum/code-patterns/two-pointers-chapter.md` into the app lesson format.
- Use metadata for concepts and skills.
- Treat this lesson as the baseline authoring pattern for later lessons.

**Out of Scope**
- Multiple alternative solutions.
- Multi-language implementations.
- Teacher answer views.

### `CONTENT-TP-3` Author Remaining Two Pointers Problem Lessons
**Story Points:** `5`

**Description**  
Author the remaining MVP problem lessons for `Two Pointers`:
- `Triplet Sum`
- `Largest Container`
- `Is Palindrome Valid`
- `Shift Zeros to the End`
- `Next Lexicographical Sequence`
Use `docs/curriculum/code-patterns/two-pointers-chapter.md` as the source list and teaching sequence for these lessons.

**Acceptance Criteria**
- Each lesson is authored in MDX with complete metadata.
- Each lesson follows the standard problem lesson structure.
- Each lesson includes at least one interactive visual or walkthrough.
- All lessons appear in the correct chapter order and are navigable.

**Technical Details**
- Reuse lesson frame schema and visualizer components.
- Pull each lesson's core explanation, examples, and progression from `docs/curriculum/code-patterns/two-pointers-chapter.md`.
- Keep reading density low and visuals prominent.
- Ensure chapter progression increases complexity coherently.

**Out of Scope**
- Non-MVP challenge problems.
- Other pattern families.
- Audio narration.

### `CONTENT-TP-4` Author Chapter Review and Mastery Content
**Story Points:** `2`

**Description**  
Author the review and mastery content needed to complete the `Two Pointers` chapter end to end.
Source both from the `Chapter Review` and `Mastery Check` sections in `docs/curriculum/code-patterns/two-pointers-chapter.md`.

**Acceptance Criteria**
- Review content exists and is reachable from chapter flow.
- Mastery content exists and is reachable after review.
- Both content types follow the chapter metadata conventions.
- Chapter flow is complete from intro through mastery.

**Technical Details**
- Use `review` and `mastery` lesson/content conventions.
- Adapt the review and mastery prompts from `docs/curriculum/code-patterns/two-pointers-chapter.md` into MDX and activity configs.
- Include recap prompts, concept summaries, and chapter-end evaluation content.

**Out of Scope**
- Adaptive mastery branching.
- Printable packets.
- Subsequent chapters.

---

## EPIC-7: Child Safety and Account Model

### `SAFETY-1` Design Adult-Managed Child Account Model
**Story Points:** `5`

**Description**  
Design the account and profile model so children use profiles under adult-managed accounts with minimal data collection and privacy-safe defaults.

**Acceptance Criteria**
- Data model distinguishes adult account holders from child learner profiles.
- Child profiles require minimal personal information.
- Model supports future parent and teacher relationships.
- Privacy assumptions are documented.

**Technical Details**
- Prefer internal identifiers and limited profile data for children.
- Keep architecture compatible with future COPPA workflows.
- Reflect the model in app auth and DB planning.

**Out of Scope**
- Full consent workflow implementation.
- Messaging permissions.
- Public profile system.

### `SAFETY-2` Add MVP Privacy and Safety Guardrails
**Story Points:** `3`

**Description**  
Implement baseline product restrictions so the MVP avoids unsafe child-directed behaviors and unnecessary data collection.

**Acceptance Criteria**
- No public student profile pages exist.
- No open chat or user-to-user messaging exists.
- Analytics collection is minimal and documented.
- Privacy checklist is included for MVP launch readiness.

**Technical Details**
- Review route exposure and default visibility settings.
- Limit event collection to learning/product telemetry needed for MVP.
- Document child-data boundaries for the team.

**Out of Scope**
- Legal policy authoring.
- Moderation tooling.
- Automated parental consent.

---

## EPIC-8: Quality and Delivery

### `QUALITY-1` Add Test Strategy for App Router Platform
**Story Points:** `5`

**Description**  
Set up the testing foundation for logic, interactive widgets, and critical end-to-end flows.

**Acceptance Criteria**
- Unit tests exist for pure logic.
- Component tests exist for core client widgets.
- End-to-end tests exist for:
  - chapter navigation
  - lesson rendering
  - progress update
  - mastery flow
- Tests run in CI or a documented local workflow.

**Technical Details**
- Use Vitest for pure logic.
- Use React Testing Library for client components.
- Use Playwright for end-to-end coverage of async App Router flows.

**Out of Scope**
- Full visual regression testing.
- Load testing.
- Security penetration testing.

### `QUALITY-2` Launch MVP Deployment and Observability Basics
**Story Points:** `3`

**Description**  
Prepare the MVP for deployment with environment management, structured error visibility, and basic operational readiness.

**Acceptance Criteria**
- App can be deployed to a target environment.
- Required environment variables are documented.
- Error handling and monitoring/logging exist for key failure paths.
- Deployment steps are repeatable.

**Technical Details**
- Configure deployment target appropriate for Next.js App Router.
- Add server and client error reporting hooks or structured logs.
- Document operational prerequisites for DB and auth.

**Out of Scope**
- Multi-region deployment.
- Autoscaling optimization.
- Full SRE dashboards.

---

## Suggested MVP Sprint Order

### Sprint 1
- `APP-1`
- `APP-2`
- `CONTENT-1`
- `CONTENT-2`

### Sprint 2
- `APP-3`
- `CONTENT-3`
- `CONTENT-4`
- `LEARN-1`

### Sprint 3
- `LEARN-2`
- `LEARN-3`
- `LEARN-4`
- `LEARN-5`

### Sprint 4
- `PROGRESS-1`
- `PROGRESS-2`
- `PRACTICE-1`
- `PRACTICE-2`

### Sprint 5
- `PRACTICE-3`
- `PRACTICE-4`
- `CONTENT-TP-1`
- `CONTENT-TP-2`

### Sprint 6
- `CONTENT-TP-3`
- `CONTENT-TP-4`
- `PROGRESS-3`
- `QUALITY-1`

### Sprint 7
- `SAFETY-1`
- `SAFETY-2`
- `QUALITY-2`

---

## MVP-Critical Stories
- `APP-1`
- `APP-2`
- `CONTENT-1`
- `CONTENT-2`
- `CONTENT-3`
- `LEARN-1`
- `LEARN-2`
- `LEARN-3`
- `PROGRESS-1`
- `PROGRESS-2`
- `PRACTICE-1`
- `PRACTICE-3`
- `PRACTICE-4`
- `CONTENT-TP-1`
- `CONTENT-TP-2`
- `CONTENT-TP-3`
- `CONTENT-TP-4`
- `QUALITY-1`
