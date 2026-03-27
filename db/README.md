# Database Notes

## Primary Stack

- Postgres
- Prisma ORM

## Files

- `prisma/schema.prisma` defines the canonical ORM schema.
- `prisma/migrations/202603260001_init/migration.sql` is the initial versioned migration.

## MVP Notes

- Lesson content stays in the repo.
- Student state lives in the database when `DATABASE_URL` is configured.
- A cookie fallback exists in development so the app still runs without a live Postgres instance.
- The schema distinguishes adult account holders from child learner profiles with minimal child data.
