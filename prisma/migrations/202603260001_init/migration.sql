CREATE TYPE "UserRole" AS ENUM ('ACCOUNT_HOLDER', 'ADMIN');
CREATE TYPE "LessonStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');
CREATE TYPE "ChapterStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'MASTERED');

CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "role" "UserRole" NOT NULL DEFAULT 'ACCOUNT_HOLDER',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "StudentProfile" (
  "id" TEXT PRIMARY KEY,
  "accountHolderId" TEXT NOT NULL,
  "displayName" TEXT NOT NULL,
  "gradeLevel" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "StudentProfile_accountHolderId_fkey"
    FOREIGN KEY ("accountHolderId")
    REFERENCES "User"("id")
    ON DELETE CASCADE
);

CREATE TABLE "LessonProgress" (
  "id" TEXT PRIMARY KEY,
  "studentProfileId" TEXT NOT NULL,
  "chapterSlug" TEXT NOT NULL,
  "lessonSlug" TEXT NOT NULL,
  "status" "LessonStatus" NOT NULL DEFAULT 'NOT_STARTED',
  "startedAt" TIMESTAMP(3),
  "completedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "LessonProgress_studentProfileId_fkey"
    FOREIGN KEY ("studentProfileId")
    REFERENCES "StudentProfile"("id")
    ON DELETE CASCADE
);

CREATE TABLE "ChapterProgress" (
  "id" TEXT PRIMARY KEY,
  "studentProfileId" TEXT NOT NULL,
  "chapterSlug" TEXT NOT NULL,
  "status" "ChapterStatus" NOT NULL DEFAULT 'NOT_STARTED',
  "progressPercent" INTEGER NOT NULL DEFAULT 0,
  "masteryScore" INTEGER NOT NULL DEFAULT 0,
  "masteredAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ChapterProgress_studentProfileId_fkey"
    FOREIGN KEY ("studentProfileId")
    REFERENCES "StudentProfile"("id")
    ON DELETE CASCADE
);

CREATE TABLE "Submission" (
  "id" TEXT PRIMARY KEY,
  "studentProfileId" TEXT NOT NULL,
  "chapterSlug" TEXT NOT NULL,
  "lessonSlug" TEXT NOT NULL,
  "codeSnapshot" TEXT NOT NULL,
  "resultSummary" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Submission_studentProfileId_fkey"
    FOREIGN KEY ("studentProfileId")
    REFERENCES "StudentProfile"("id")
    ON DELETE CASCADE
);

CREATE INDEX "StudentProfile_accountHolderId_idx" ON "StudentProfile"("accountHolderId");
CREATE UNIQUE INDEX "LessonProgress_studentProfileId_chapterSlug_lessonSlug_key"
  ON "LessonProgress"("studentProfileId", "chapterSlug", "lessonSlug");
CREATE INDEX "LessonProgress_chapterSlug_lessonSlug_idx"
  ON "LessonProgress"("chapterSlug", "lessonSlug");
CREATE UNIQUE INDEX "ChapterProgress_studentProfileId_chapterSlug_key"
  ON "ChapterProgress"("studentProfileId", "chapterSlug");
CREATE INDEX "ChapterProgress_chapterSlug_idx" ON "ChapterProgress"("chapterSlug");
CREATE INDEX "Submission_studentProfileId_chapterSlug_lessonSlug_createdAt_idx"
  ON "Submission"("studentProfileId", "chapterSlug", "lessonSlug", "createdAt" DESC);
