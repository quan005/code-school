import { notFound } from "next/navigation";
import { LessonStatusControls } from "@/components/progress/lesson-status-controls";
import { Panel } from "@/components/ui/panel";
import { getLessonProgressState } from "@/db/progress";
import {
  compileLesson,
  getChapterBySlug,
  getLessonByType,
} from "@/lib/curriculum";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const chapter = await getChapterBySlug(chapterSlug);
  const reviewLesson = await getLessonByType(chapterSlug, "review");
  const compiledLesson = reviewLesson
    ? await compileLesson(chapterSlug, reviewLesson.slug)
    : undefined;
  const progress = reviewLesson
    ? await getLessonProgressState(chapterSlug, reviewLesson.slug)
    : undefined;

  if (!chapter || !compiledLesson || !reviewLesson || !progress) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <LessonStatusControls
        chapterSlug={chapterSlug}
        lessonSlug={reviewLesson.slug}
        status={progress.status}
      />
      <Panel eyebrow="Review" title={compiledLesson.lesson.title}>
        <div className="mdx-prose">{compiledLesson.content}</div>
      </Panel>
    </div>
  );
}
