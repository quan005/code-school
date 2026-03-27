import Link from "next/link";
import { notFound } from "next/navigation";
import { PredictionPrompt } from "@/components/learning/prediction-prompt";
import { LessonStatusControls } from "@/components/progress/lesson-status-controls";
import { Panel } from "@/components/ui/panel";
import { getLessonProgressState } from "@/db/progress";
import { getLessonActivity } from "@/lib/content/practice";
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
  const activity = reviewLesson
    ? await getLessonActivity(chapterSlug, reviewLesson.slug)
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
      {activity?.recapPrompt ? (
        <PredictionPrompt prompt={activity.recapPrompt} />
      ) : null}
      <Panel eyebrow="Next Step" title="Ready for mastery?">
        <p>
          If the move rules feel clear, head into the mastery check and solve
          the last challenge without the walkthrough.
        </p>
        <Link href={`/mastery/${chapterSlug}`}>Open mastery check</Link>
      </Panel>
    </div>
  );
}
