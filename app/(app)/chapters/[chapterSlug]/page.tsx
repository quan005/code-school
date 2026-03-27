import Link from "next/link";
import { notFound } from "next/navigation";
import { ChapterProgressCard } from "@/components/progress/chapter-progress-card";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getChapterProgressSummary } from "@/db/progress";
import { getChapterBySlug, getLessonHref } from "@/lib/curriculum";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const chapter = await getChapterBySlug(chapterSlug);
  const summary = await getChapterProgressSummary(chapterSlug);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <Panel eyebrow={chapter.track} title={chapter.title}>
        <p>{chapter.summary}</p>
        <div className="inline-cluster">
          <Badge>{chapter.lessons.length} lesson routes</Badge>
          {summary ? <Badge>{summary.percentComplete}% complete</Badge> : null}
          {summary ? (
            <Badge>Mastery score: {summary.mastery.score}</Badge>
          ) : null}
        </div>
      </Panel>
      {summary ? <ChapterProgressCard summary={summary} /> : null}
      <ul className="chapter-outline">
        {chapter.lessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link href={getLessonHref(chapter.slug, lesson)}>
              <strong>{lesson.title}</strong>
              <span>{lesson.summary}</span>
              {summary ? (
                <span>
                  Status:{" "}
                  {summary.lessonStatuses[lesson.slug]?.status.replaceAll(
                    "_",
                    " ",
                  )}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
