import { notFound } from "next/navigation";
import { Panel } from "@/components/ui/panel";
import { getChapterBySlug, getLessonBySlug } from "@/lib/curriculum";

export default async function ChapterIntroPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);
  const introLesson = getLessonBySlug(chapterSlug, "intro");

  if (!chapter || !introLesson) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <Panel eyebrow="Intro lesson" title={introLesson.title}>
        <p>{introLesson.summary}</p>
        <p>
          This nested lesson layout is separate from chapter landing pages so
          the app can reuse a focused reading shell for all lesson types.
        </p>
      </Panel>
    </div>
  );
}
