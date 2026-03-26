import { notFound } from "next/navigation";
import { Panel } from "@/components/ui/panel";
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

  if (!chapter || !compiledLesson) {
    notFound();
  }

  return (
    <Panel eyebrow="Mastery" title={compiledLesson.lesson.title}>
      <div className="mdx-prose">{compiledLesson.content}</div>
    </Panel>
  );
}
