import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getChapterBySlug, getLessonHref } from "@/lib/curriculum";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const chapter = await getChapterBySlug(chapterSlug);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="stack-lg">
      <Panel eyebrow={chapter.track} title={chapter.title}>
        <p>{chapter.summary}</p>
        <div className="inline-cluster">
          <Badge>{chapter.lessons.length} lesson routes</Badge>
          <Badge>Chapter shell ready</Badge>
        </div>
      </Panel>
      <ul className="chapter-outline">
        {chapter.lessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link href={getLessonHref(chapter.slug, lesson)}>
              <strong>{lesson.title}</strong>
              <span>{lesson.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
