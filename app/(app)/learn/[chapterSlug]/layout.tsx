import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LessonShell } from "@/components/layout/lesson-shell";
import { getAdjacentLessons, getChapterBySlug } from "@/lib/curriculum";

export default async function LearnChapterLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ chapterSlug: string; lessonSlug?: string }>;
}) {
  const { chapterSlug, lessonSlug } = await params;
  const chapter = await getChapterBySlug(chapterSlug);

  if (!chapter) {
    notFound();
  }

  const currentLessonSlug = lessonSlug ?? "intro";
  const { next, previous } = await getAdjacentLessons(
    chapterSlug,
    currentLessonSlug,
  );

  return (
    <LessonShell
      chapter={chapter}
      currentLessonSlug={currentLessonSlug}
      nextLesson={next}
      previousLesson={previous}
    >
      {children}
    </LessonShell>
  );
}
