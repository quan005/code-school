import { notFound } from "next/navigation";
import { LessonFramePreview } from "@/components/mdx/lesson-blocks";
import { Panel } from "@/components/ui/panel";
import { compileLesson } from "@/lib/curriculum";

export default async function ChapterIntroPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const compiledLesson = await compileLesson(chapterSlug, "intro");

  if (!compiledLesson) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <Panel eyebrow="Intro lesson" title={compiledLesson.lesson.title}>
        <div className="mdx-prose">{compiledLesson.content}</div>
      </Panel>
      {compiledLesson.frames.length > 0 ? (
        <LessonFramePreview frames={compiledLesson.frames} />
      ) : null}
    </div>
  );
}
