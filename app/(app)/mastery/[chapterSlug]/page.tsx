import { notFound } from "next/navigation";
import { ChapterProgressCard } from "@/components/progress/chapter-progress-card";
import { LessonStatusControls } from "@/components/progress/lesson-status-controls";
import { Panel } from "@/components/ui/panel";
import {
  getChapterProgressSummary,
  getLessonProgressState,
} from "@/db/progress";
import {
  compileLesson,
  getChapterBySlug,
  getLessonByType,
} from "@/lib/curriculum";

export default async function MasteryPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const chapter = await getChapterBySlug(chapterSlug);
  const masteryLesson = await getLessonByType(chapterSlug, "mastery");
  const compiledLesson = masteryLesson
    ? await compileLesson(chapterSlug, masteryLesson.slug)
    : undefined;
  const [summary, progress] = masteryLesson
    ? await Promise.all([
        getChapterProgressSummary(chapterSlug),
        getLessonProgressState(chapterSlug, masteryLesson.slug),
      ])
    : [undefined, undefined];

  if (!chapter || !compiledLesson || !masteryLesson || !summary || !progress) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <LessonStatusControls
        chapterSlug={chapterSlug}
        lessonSlug={masteryLesson.slug}
        status={progress.status}
      />
      <ChapterProgressCard summary={summary} />
      <Panel eyebrow="Mastery" title={compiledLesson.lesson.title}>
        <div className="mdx-prose">{compiledLesson.content}</div>
      </Panel>
    </div>
  );
}
