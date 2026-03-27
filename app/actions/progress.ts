"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  getActiveStudentContext,
  lessonStatusSchema,
  setLessonStatus,
} from "@/db/progress";
import { trackMinimalTelemetryEvent } from "@/lib/telemetry";

const updateLessonProgressSchema = z.object({
  chapterSlug: z.string().min(1),
  lessonSlug: z.string().min(1),
  status: lessonStatusSchema,
});

export async function updateLessonProgressAction(input: {
  chapterSlug: string;
  lessonSlug: string;
  status: z.infer<typeof lessonStatusSchema>;
}) {
  const parsed = updateLessonProgressSchema.parse(input);
  const activeStudent = await getActiveStudentContext();

  await setLessonStatus(parsed);
  trackMinimalTelemetryEvent({
    eventName: "lesson_status_updated",
    chapterSlug: parsed.chapterSlug,
    lessonSlug: parsed.lessonSlug,
    status: parsed.status,
    studentProfileId: activeStudent.studentProfileId,
  });

  revalidatePath("/dashboard");
  revalidatePath("/chapters");
  revalidatePath(`/chapters/${parsed.chapterSlug}`);
  revalidatePath(`/learn/${parsed.chapterSlug}/intro`);
  revalidatePath(`/learn/${parsed.chapterSlug}/${parsed.lessonSlug}`);
  revalidatePath(`/review/${parsed.chapterSlug}`);
  revalidatePath(`/mastery/${parsed.chapterSlug}`);
}
