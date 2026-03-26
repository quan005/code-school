import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getChapterBySlug } from "@/lib/curriculum";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);

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
            <Link
              href={
                lesson.kind === "intro"
                  ? `/learn/${chapter.slug}/intro`
                  : `/learn/${chapter.slug}/${lesson.slug}`
              }
            >
              <strong>{lesson.title}</strong>
              <span>{lesson.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
