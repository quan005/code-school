import { notFound } from "next/navigation";
import { FrameStepPlayer } from "@/components/learning/frame-step-player";
import { PracticePlayground } from "@/components/practice/practice-playground";
import { LessonStatusControls } from "@/components/progress/lesson-status-controls";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import {
  getLatestSubmissionForLesson,
  getLessonProgressState,
  getSubmissionHistoryForLesson,
} from "@/db/progress";
import { getLessonActivity } from "@/lib/content/practice";
import { compileLesson, getChapterBySlug } from "@/lib/curriculum";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ chapterSlug: string; lessonSlug: string }>;
}) {
  const { chapterSlug, lessonSlug } = await params;
  const chapter = await getChapterBySlug(chapterSlug);
  const compiledLesson = await compileLesson(chapterSlug, lessonSlug);
  const [progress, latestSubmission, submissionHistory, activity] =
    await Promise.all([
      getLessonProgressState(chapterSlug, lessonSlug),
      getLatestSubmissionForLesson(chapterSlug, lessonSlug),
      getSubmissionHistoryForLesson(chapterSlug, lessonSlug),
      getLessonActivity(chapterSlug, lessonSlug),
    ]);

  if (
    !chapter ||
    !compiledLesson ||
    compiledLesson.lesson.lessonType !== "problem"
  ) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <LessonStatusControls
        chapterSlug={chapterSlug}
        lessonSlug={lessonSlug}
        status={progress.status}
      />
      <Panel eyebrow={chapter.title} title={compiledLesson.lesson.title}>
        <div className="inline-cluster">
          <Badge>{compiledLesson.lesson.lessonType}</Badge>
          <Badge>{compiledLesson.lesson.difficulty}</Badge>
          <Badge>{compiledLesson.lesson.estimatedMinutes} min</Badge>
          <Badge>Status: {progress.status.replaceAll("_", " ")}</Badge>
        </div>
        <div className="mdx-prose">{compiledLesson.content}</div>
        {latestSubmission ? (
          <div className="inline-cluster">
            <Badge>Latest submission saved</Badge>
            <Badge>
              {new Date(latestSubmission.updatedAt).toLocaleDateString()}
            </Badge>
          </div>
        ) : null}
      </Panel>
      {compiledLesson.frames.length > 0 ? (
        <FrameStepPlayer
          frames={compiledLesson.frames}
          title="Algorithm walkthrough"
        />
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
          lessonSlug={lessonSlug}
        />
      ) : null}
    </div>
  );
}
