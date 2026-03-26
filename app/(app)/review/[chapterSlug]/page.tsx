import { notFound } from "next/navigation";
import { Panel } from "@/components/ui/panel";
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

  if (!chapter || !compiledLesson) {
    notFound();
  }

  return (
    <Panel eyebrow="Review" title={compiledLesson.lesson.title}>
      <div className="mdx-prose">{compiledLesson.content}</div>
    </Panel>
  );
}
