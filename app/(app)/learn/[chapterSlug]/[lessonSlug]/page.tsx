import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LessonFramePreview } from "@/components/mdx/lesson-blocks";
import { Panel } from "@/components/ui/panel";
import { compileLesson, getChapterBySlug } from "@/lib/curriculum";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ chapterSlug: string; lessonSlug: string }>;
}) {
  const { chapterSlug, lessonSlug } = await params;
  const chapter = await getChapterBySlug(chapterSlug);
  const compiledLesson = await compileLesson(chapterSlug, lessonSlug);

  if (
    !chapter ||
    !compiledLesson ||
    compiledLesson.lesson.lessonType !== "problem"
  ) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <Panel eyebrow={chapter.title} title={compiledLesson.lesson.title}>
        <div className="inline-cluster">
          <Badge>{compiledLesson.lesson.lessonType}</Badge>
          <Badge>{compiledLesson.lesson.difficulty}</Badge>
          <Badge>{compiledLesson.lesson.estimatedMinutes} min</Badge>
        </div>
        <div className="mdx-prose">{compiledLesson.content}</div>
      </Panel>
      {compiledLesson.frames.length > 0 ? (
        <LessonFramePreview frames={compiledLesson.frames} />
      ) : null}
    </div>
  );
}
