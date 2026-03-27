import { notFound } from "next/navigation";
import { PredictionPrompt } from "@/components/learning/prediction-prompt";
import { ReflectionPrompt } from "@/components/learning/reflection-prompt";
import { PracticePlayground } from "@/components/practice/practice-playground";
import { ChapterProgressCard } from "@/components/progress/chapter-progress-card";
import { LessonStatusControls } from "@/components/progress/lesson-status-controls";
import { Panel } from "@/components/ui/panel";
import {
  getChapterProgressSummary,
  getLessonProgressState,
  getLatestSubmissionForLesson,
  getSubmissionHistoryForLesson,
} from "@/db/progress";
import { getLessonActivity } from "@/lib/content/practice";
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
  const [summary, progress, latestSubmission, submissionHistory, activity] =
    masteryLesson
      ? await Promise.all([
          getChapterProgressSummary(chapterSlug),
          getLessonProgressState(chapterSlug, masteryLesson.slug),
          getLatestSubmissionForLesson(chapterSlug, masteryLesson.slug),
          getSubmissionHistoryForLesson(chapterSlug, masteryLesson.slug),
          getLessonActivity(chapterSlug, masteryLesson.slug),
        ])
      : [undefined, undefined, undefined, [], undefined];

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
      {activity?.recapPrompt ? (
        <PredictionPrompt prompt={activity.recapPrompt} />
      ) : null}
      {activity?.reflectionPrompt ? (
        <ReflectionPrompt prompt={activity.reflectionPrompt} />
      ) : null}
      {activity?.practiceChallenge ? (
        <PracticePlayground
          challenge={activity.practiceChallenge}
          chapterSlug={chapterSlug}
          history={submissionHistory}
          initialCode={
            latestSubmission?.codeSnapshot ??
            activity.practiceChallenge.starterCode
          }
          lessonSlug={masteryLesson.slug}
        />
      ) : null}
      <Panel eyebrow="Result" title="Mastery feedback">
        <p>
          {summary.status === "mastered"
            ? "Pass. You have enough correct progress signals to mark this chapter mastered."
            : "Needs practice. Keep working through the mastery checks until your chapter status improves."}
        </p>
      </Panel>
    </div>
  );
}
