import { notFound } from "next/navigation";
import { ArrayStepPlayer } from "@/components/learning/array-step-player";
import { LessonStatusControls } from "@/components/progress/lesson-status-controls";
import { Panel } from "@/components/ui/panel";
import { getLessonProgressState } from "@/db/progress";
import { compileLesson } from "@/lib/curriculum";

export default async function ChapterIntroPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const compiledLesson = await compileLesson(chapterSlug, "intro");
  const progress = await getLessonProgressState(chapterSlug, "intro");

  if (!compiledLesson) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <LessonStatusControls
        chapterSlug={chapterSlug}
        lessonSlug="intro"
        status={progress.status}
      />
      <Panel eyebrow="Intro lesson" title={compiledLesson.lesson.title}>
        <div className="mdx-prose">{compiledLesson.content}</div>
      </Panel>
      {compiledLesson.frames.length > 0 ? (
        <ArrayStepPlayer
          frames={compiledLesson.frames}
          title="Two-pointer strategy tour"
        />
      ) : null}
    </div>
  );
}
