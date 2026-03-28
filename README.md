# Code School

Next.js App Router foundation for an interactive learning app.

## Scripts

- `npm run dev` starts local development
- `npm run build` creates a production build
- `npm run lint` checks the codebase with ESLint
- `npm run typecheck` runs TypeScript in strict mode
- `npm run format:check` verifies Prettier formatting
- `npm run test` runs unit and component tests with Vitest
- `npm run test:e2e` runs Playwright end-to-end coverage against a started app
- `npm run test:e2e:install` installs the Chromium browser used by Playwright

## Environment

Copy `.env.example` to `.env.local` when you want to set local environment variables.

- `DATABASE_URL` enables Prisma-backed persistence
- `ENABLE_MINIMAL_TELEMETRY` enables coarse lesson-progress and practice-run telemetry
- `NEXT_PUBLIC_APP_ENV` labels structured error logs by environment

## Quality Workflow

Local MVP quality checks:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`
5. `npm run test:e2e`

CI automation for the same workflow lives in `.github/workflows/quality.yml`.

## Safety Notes

- Child learner profiles are private by default and live under adult-managed accounts.
- MVP telemetry is intentionally minimal and disabled unless `ENABLE_MINIMAL_TELEMETRY=true`.
- Allowed telemetry is limited to coarse lesson-progress and practice-run product signals.
- See `docs/product/child-safety-account-model.md` and `docs/product/mvp-privacy-checklist.md`.

## Deployment

The MVP target environment is Vercel. See `docs/product/deployment-runbook.md` for deployment steps, required environment variables, and observability notes.
