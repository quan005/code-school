# Deployment Runbook

## Target Environment

The MVP deployment target is `Vercel`, which matches the current `Next.js App Router` setup without extra server packaging work.

## Required Environment Variables

- `DATABASE_URL`
  Use a Postgres connection string when you want real persisted learner progress. If this is missing, the app falls back to cookie-backed demo progress.
- `ENABLE_MINIMAL_TELEMETRY`
  Set to `true` only when you want coarse lesson-progress and practice-run telemetry logs.
- `NEXT_PUBLIC_APP_ENV`
  Use values like `local`, `preview`, `production`, or `ci` so structured logs identify where an error came from.

## Repeatable Deployment Steps

1. Run `npm ci`.
2. Run `npm run lint`.
3. Run `npm run typecheck`.
4. Run `npm run test`.
5. Run `npm run build`.
6. If you want browser-level verification locally, run `npm run test:e2e:install` once, then `npm run test:e2e`.
7. Deploy the repo to Vercel with the environment variables above.

## Observability Basics

- Route-level client errors are logged from `app/error.tsx`.
- Server Action failures in progress and practice flows are logged through `lib/observability.ts`.
- Prisma already emits `warn` and `error` logs in development.
- Minimal product telemetry remains opt-in and never logs raw child reflections or raw code into analytics streams.

## Operational Notes

- The app can boot without `DATABASE_URL`, but that is demo-only behavior.
- A production deployment should use a managed Postgres database before learner progress is considered durable.
- Playwright e2e tests assume the app is already built and started on port `3000`.
