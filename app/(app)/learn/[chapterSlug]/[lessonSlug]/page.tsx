import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getChapterBySlug, getLessonBySlug } from "@/lib/curriculum";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ chapterSlug: string; lessonSlug: string }>;
}) {
  const { chapterSlug, lessonSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);
  const lesson = getLessonBySlug(chapterSlug, lessonSlug);

  if (!chapter || !lesson || lesson.slug === "intro") {
    notFound();
  }

  return (
    <div className="stack-lg">
      <Panel eyebrow={chapter.title} title={lesson.title}>
        <div className="inline-cluster">
          <Badge>{lesson.kind}</Badge>
          <Badge>{lesson.difficulty}</Badge>
          <Badge>{lesson.estimatedMinutes} min</Badge>
        </div>
        <p>{lesson.summary}</p>
        <p>
          This route is ready for MDX lesson content later without changing the
          surrounding shell.
        </p>
      </Panel>
    </div>
  );
}
