"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  getActiveStudentContext,
  recordSubmission,
  setLessonStatus,
} from "@/db/progress";
import {
  evaluatePracticeChallenge,
  getLessonActivity,
} from "@/lib/content/practice";
import { trackMinimalTelemetryEvent } from "@/lib/telemetry";

const runPracticeChallengeSchema = z.object({
  chapterSlug: z.string().min(1),
  codeSnapshot: z.string().min(1),
  lessonSlug: z.string().min(1),
});

export async function runPracticeChallengeAction(input: {
  chapterSlug: string;
  codeSnapshot: string;
  lessonSlug: string;
}) {
  const parsed = runPracticeChallengeSchema.parse(input);
  const activeStudent = await getActiveStudentContext();
  const activity = await getLessonActivity(
    parsed.chapterSlug,
    parsed.lessonSlug,
  );

  if (!activity?.practiceChallenge) {
    throw new Error("This lesson does not have a practice challenge.");
  }

  const result = evaluatePracticeChallenge(
    activity.practiceChallenge,
    parsed.codeSnapshot,
  );

  await recordSubmission({
    chapterSlug: parsed.chapterSlug,
    codeSnapshot: parsed.codeSnapshot,
    lessonSlug: parsed.lessonSlug,
    resultSummary: JSON.stringify({
      feedback: result.feedback,
      passedAll: result.passedAll,
      passedCount: result.passedCount,
      totalCount: result.totalCount,
    }),
  });
  trackMinimalTelemetryEvent({
    eventName: "practice_run",
    chapterSlug: parsed.chapterSlug,
    lessonSlug: parsed.lessonSlug,
    passedAll: result.passedAll,
    passedCount: result.passedCount,
    studentProfileId: activeStudent.studentProfileId,
    totalCount: result.totalCount,
  });

  if (
    result.passedAll &&
    activity.practiceChallenge.completionBehavior === "mark_complete"
  ) {
    await setLessonStatus({
      chapterSlug: parsed.chapterSlug,
      lessonSlug: parsed.lessonSlug,
      status: "completed",
    });
  }

  revalidatePath(`/chapters/${parsed.chapterSlug}`);
  revalidatePath(`/learn/${parsed.chapterSlug}/${parsed.lessonSlug}`);
  revalidatePath(`/review/${parsed.chapterSlug}`);
  revalidatePath(`/mastery/${parsed.chapterSlug}`);
  revalidatePath("/dashboard");

  return result;
}
