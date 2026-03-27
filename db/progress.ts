import {
  ChapterStatus,
  LessonStatus as PrismaLessonStatus,
} from "@prisma/client";
import { cookies } from "next/headers";
import { z } from "zod";
import { prisma } from "@/db/client";
import { computeMasteryResult } from "@/db/mastery";
import { getChapterBySlug } from "@/lib/curriculum";

export const lessonStatusSchema = z.enum([
  "not_started",
  "in_progress",
  "completed",
]);

export type LessonStatus = z.infer<typeof lessonStatusSchema>;

type ActiveStudentContext = {
  accountHolderId: string;
  displayName: string;
  studentProfileId: string;
};

type CookieProgressState = {
  lessonProgress: Record<
    string,
    {
      completedAt?: string;
      startedAt?: string;
      status: LessonStatus;
      updatedAt: string;
    }
  >;
  submissions: Record<
    string,
    {
      codeSnapshot: string;
      resultSummary: string;
      updatedAt: string;
    }
  >;
};

type LessonProgressSummary = {
  status: LessonStatus;
  updatedAt?: string;
};

export type ChapterProgressSummary = {
  completedLessons: number;
  lessonStatuses: Record<string, LessonProgressSummary>;
  mastery: ReturnType<typeof computeMasteryResult>;
  percentComplete: number;
  status: "completed" | "in_progress" | "mastered" | "not_started";
  totalLessons: number;
};

const DEMO_ACCOUNT_EMAIL = "demo@codeschool.local";
const DEMO_PROGRESS_COOKIE = "code-school-progress";

function mapPrismaLessonStatus(status: PrismaLessonStatus): LessonStatus {
  switch (status) {
    case PrismaLessonStatus.COMPLETED:
      return "completed";
    case PrismaLessonStatus.IN_PROGRESS:
      return "in_progress";
    default:
      return "not_started";
  }
}

function mapLessonStatus(status: LessonStatus): PrismaLessonStatus {
  switch (status) {
    case "completed":
      return PrismaLessonStatus.COMPLETED;
    case "in_progress":
      return PrismaLessonStatus.IN_PROGRESS;
    default:
      return PrismaLessonStatus.NOT_STARTED;
  }
}

function progressKey(chapterSlug: string, lessonSlug: string): string {
  return `${chapterSlug}:${lessonSlug}`;
}

function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

async function readCookieState(): Promise<CookieProgressState> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(DEMO_PROGRESS_COOKIE)?.value;

  if (!raw) {
    return {
      lessonProgress: {},
      submissions: {},
    };
  }

  try {
    return JSON.parse(raw) as CookieProgressState;
  } catch {
    return {
      lessonProgress: {},
      submissions: {},
    };
  }
}

async function writeCookieState(nextState: CookieProgressState) {
  const cookieStore = await cookies();
  cookieStore.set(DEMO_PROGRESS_COOKIE, JSON.stringify(nextState), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
}

export async function getActiveStudentContext(): Promise<ActiveStudentContext> {
  if (!isDatabaseConfigured()) {
    return {
      accountHolderId: "demo-account-holder",
      displayName: "Avery",
      studentProfileId: "demo-student",
    };
  }

  const accountHolder = await prisma.user.upsert({
    where: {
      email: DEMO_ACCOUNT_EMAIL,
    },
    update: {},
    create: {
      email: DEMO_ACCOUNT_EMAIL,
      studentProfiles: {
        create: {
          displayName: "Avery",
          gradeLevel: 4,
        },
      },
    },
    include: {
      studentProfiles: true,
    },
  });

  const studentProfile =
    accountHolder.studentProfiles[0] ??
    (await prisma.studentProfile.create({
      data: {
        accountHolderId: accountHolder.id,
        displayName: "Avery",
        gradeLevel: 4,
      },
    }));

  return {
    accountHolderId: accountHolder.id,
    displayName: studentProfile.displayName,
    studentProfileId: studentProfile.id,
  };
}

export async function getLessonProgressState(
  chapterSlug: string,
  lessonSlug: string,
): Promise<LessonProgressSummary> {
  if (!isDatabaseConfigured()) {
    const state = await readCookieState();
    const progress = state.lessonProgress[progressKey(chapterSlug, lessonSlug)];

    return {
      status: progress?.status ?? "not_started",
      updatedAt: progress?.updatedAt,
    };
  }

  const activeStudent = await getActiveStudentContext();
  const progress = await prisma.lessonProgress.findUnique({
    where: {
      studentProfileId_chapterSlug_lessonSlug: {
        studentProfileId: activeStudent.studentProfileId,
        chapterSlug,
        lessonSlug,
      },
    },
  });

  return {
    status: progress ? mapPrismaLessonStatus(progress.status) : "not_started",
    updatedAt: progress?.updatedAt.toISOString(),
  };
}

export async function getLatestSubmissionForLesson(
  chapterSlug: string,
  lessonSlug: string,
): Promise<
  { codeSnapshot: string; resultSummary: string; updatedAt: string } | undefined
> {
  if (!isDatabaseConfigured()) {
    const state = await readCookieState();
    return state.submissions[progressKey(chapterSlug, lessonSlug)];
  }

  const activeStudent = await getActiveStudentContext();
  const submission = await prisma.submission.findFirst({
    where: {
      chapterSlug,
      lessonSlug,
      studentProfileId: activeStudent.studentProfileId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return submission
    ? {
        codeSnapshot: submission.codeSnapshot,
        resultSummary: submission.resultSummary,
        updatedAt: submission.createdAt.toISOString(),
      }
    : undefined;
}

export async function recordSubmission(input: {
  chapterSlug: string;
  codeSnapshot: string;
  lessonSlug: string;
  resultSummary: string;
}) {
  const lesson = await getChapterBySlug(input.chapterSlug);

  if (!lesson?.lessons.some((entry) => entry.slug === input.lessonSlug)) {
    throw new Error(
      "Cannot record a submission for a lesson that does not exist.",
    );
  }

  if (!isDatabaseConfigured()) {
    const state = await readCookieState();
    state.submissions[progressKey(input.chapterSlug, input.lessonSlug)] = {
      codeSnapshot: input.codeSnapshot,
      resultSummary: input.resultSummary,
      updatedAt: new Date().toISOString(),
    };
    await writeCookieState(state);
    return;
  }

  const activeStudent = await getActiveStudentContext();
  await prisma.submission.create({
    data: {
      chapterSlug: input.chapterSlug,
      codeSnapshot: input.codeSnapshot,
      lessonSlug: input.lessonSlug,
      resultSummary: input.resultSummary,
      studentProfileId: activeStudent.studentProfileId,
    },
  });
}

export async function setLessonStatus(input: {
  chapterSlug: string;
  lessonSlug: string;
  status: LessonStatus;
}) {
  const chapter = await getChapterBySlug(input.chapterSlug);
  const lesson = chapter?.lessons.find(
    (entry) => entry.slug === input.lessonSlug,
  );

  if (!chapter || !lesson) {
    throw new Error("Cannot update progress for a lesson that does not exist.");
  }

  const now = new Date().toISOString();

  if (!isDatabaseConfigured()) {
    const state = await readCookieState();
    state.lessonProgress[progressKey(input.chapterSlug, input.lessonSlug)] = {
      completedAt: input.status === "completed" ? now : undefined,
      startedAt: input.status === "not_started" ? undefined : now,
      status: input.status,
      updatedAt: now,
    };
    await writeCookieState(state);
    return;
  }

  const activeStudent = await getActiveStudentContext();
  await prisma.lessonProgress.upsert({
    where: {
      studentProfileId_chapterSlug_lessonSlug: {
        studentProfileId: activeStudent.studentProfileId,
        chapterSlug: input.chapterSlug,
        lessonSlug: input.lessonSlug,
      },
    },
    update: {
      completedAt: input.status === "completed" ? new Date(now) : null,
      startedAt: input.status === "not_started" ? null : new Date(now),
      status: mapLessonStatus(input.status),
    },
    create: {
      chapterSlug: input.chapterSlug,
      completedAt: input.status === "completed" ? new Date(now) : null,
      lessonSlug: input.lessonSlug,
      startedAt: input.status === "not_started" ? null : new Date(now),
      status: mapLessonStatus(input.status),
      studentProfileId: activeStudent.studentProfileId,
    },
  });
}

export async function getChapterProgressSummary(
  chapterSlug: string,
): Promise<ChapterProgressSummary | undefined> {
  const chapter = await getChapterBySlug(chapterSlug);

  if (!chapter) {
    return undefined;
  }

  let lessonStatuses: Record<string, LessonProgressSummary> = {};
  let retryCount = 0;

  if (!isDatabaseConfigured()) {
    const state = await readCookieState();
    lessonStatuses = Object.fromEntries(
      chapter.lessons.map((lesson) => {
        const saved =
          state.lessonProgress[progressKey(chapter.slug, lesson.slug)];
        return [
          lesson.slug,
          {
            status: saved?.status ?? "not_started",
            updatedAt: saved?.updatedAt,
          },
        ];
      }),
    );
    retryCount = Object.keys(state.submissions).filter((key) =>
      key.startsWith(`${chapter.slug}:`),
    ).length;
  } else {
    const activeStudent = await getActiveStudentContext();
    const [progressRecords, submissionCount] = await Promise.all([
      prisma.lessonProgress.findMany({
        where: {
          chapterSlug,
          studentProfileId: activeStudent.studentProfileId,
        },
      }),
      prisma.submission.count({
        where: {
          chapterSlug,
          studentProfileId: activeStudent.studentProfileId,
        },
      }),
    ]);

    lessonStatuses = Object.fromEntries(
      chapter.lessons.map((lesson) => {
        const record = progressRecords.find(
          (entry) => entry.lessonSlug === lesson.slug,
        );
        return [
          lesson.slug,
          {
            status: record
              ? mapPrismaLessonStatus(record.status)
              : "not_started",
            updatedAt: record?.updatedAt.toISOString(),
          },
        ];
      }),
    );
    retryCount = Math.max(0, submissionCount - 1);
  }

  const totalLessons = chapter.lessons.length;
  const completedLessons = Object.values(lessonStatuses).filter(
    (lesson) => lesson.status === "completed",
  ).length;
  const percentComplete =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons / totalLessons) * 100);
  const problemLessons = chapter.lessons.filter(
    (lesson) => lesson.lessonType === "problem",
  );
  const completedProblemLessons = problemLessons.filter(
    (lesson) => lessonStatuses[lesson.slug]?.status === "completed",
  ).length;
  const reviewLesson = chapter.lessons.find(
    (lesson) => lesson.lessonType === "review",
  );
  const mastery = computeMasteryResult({
    codeAccuracy:
      problemLessons.length === 0
        ? 0
        : completedProblemLessons / problemLessons.length,
    completionRatio: totalLessons === 0 ? 0 : completedLessons / totalLessons,
    hintUsageCount: 0,
    quizAccuracy:
      reviewLesson && lessonStatuses[reviewLesson.slug]?.status === "completed"
        ? 1
        : 0,
    retryCount,
  });

  const status: ChapterProgressSummary["status"] =
    mastery.state === "mastered"
      ? "mastered"
      : completedLessons === 0
        ? "not_started"
        : completedLessons === totalLessons
          ? "completed"
          : "in_progress";

  if (isDatabaseConfigured()) {
    const activeStudent = await getActiveStudentContext();
    await prisma.chapterProgress.upsert({
      where: {
        studentProfileId_chapterSlug: {
          studentProfileId: activeStudent.studentProfileId,
          chapterSlug,
        },
      },
      update: {
        masteredAt: mastery.state === "mastered" ? new Date() : null,
        masteryScore: mastery.score,
        progressPercent: percentComplete,
        status:
          status === "mastered"
            ? ChapterStatus.MASTERED
            : status === "completed"
              ? ChapterStatus.COMPLETED
              : status === "in_progress"
                ? ChapterStatus.IN_PROGRESS
                : ChapterStatus.NOT_STARTED,
      },
      create: {
        chapterSlug,
        masteredAt: mastery.state === "mastered" ? new Date() : null,
        masteryScore: mastery.score,
        progressPercent: percentComplete,
        status:
          status === "mastered"
            ? ChapterStatus.MASTERED
            : status === "completed"
              ? ChapterStatus.COMPLETED
              : status === "in_progress"
                ? ChapterStatus.IN_PROGRESS
                : ChapterStatus.NOT_STARTED,
        studentProfileId: activeStudent.studentProfileId,
      },
    });
  }

  return {
    completedLessons,
    lessonStatuses,
    mastery,
    percentComplete,
    status,
    totalLessons,
  };
}
