"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { lessonStatusSchema, setLessonStatus } from "@/db/progress";

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

  await setLessonStatus(parsed);

  revalidatePath("/dashboard");
  revalidatePath("/chapters");
  revalidatePath(`/chapters/${parsed.chapterSlug}`);
  revalidatePath(`/learn/${parsed.chapterSlug}/intro`);
  revalidatePath(`/learn/${parsed.chapterSlug}/${parsed.lessonSlug}`);
  revalidatePath(`/review/${parsed.chapterSlug}`);
  revalidatePath(`/mastery/${parsed.chapterSlug}`);
}
