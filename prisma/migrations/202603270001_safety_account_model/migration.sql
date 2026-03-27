-- Child safety and account-model follow-up.
-- Profiles stay private by default, and a teacher-assignment join table
-- reserves room for future adult-managed classroom relationships.

ALTER TYPE "UserRole" RENAME VALUE 'ACCOUNT_HOLDER' TO 'ADULT_ACCOUNT_HOLDER';

ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'TEACHER';

ALTER TABLE "StudentProfile"
ADD COLUMN "isPublic" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE "TeacherStudentAssignment" (
    "id" TEXT NOT NULL,
    "teacherUserId" TEXT NOT NULL,
    "studentProfileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeacherStudentAssignment_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "TeacherStudentAssignment_teacherUserId_studentProfileId_key"
ON "TeacherStudentAssignment"("teacherUserId", "studentProfileId");

CREATE INDEX "TeacherStudentAssignment_studentProfileId_idx"
ON "TeacherStudentAssignment"("studentProfileId");

ALTER TABLE "TeacherStudentAssignment"
ADD CONSTRAINT "TeacherStudentAssignment_teacherUserId_fkey"
FOREIGN KEY ("teacherUserId") REFERENCES "User"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "TeacherStudentAssignment"
ADD CONSTRAINT "TeacherStudentAssignment_studentProfileId_fkey"
FOREIGN KEY ("studentProfileId") REFERENCES "StudentProfile"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
