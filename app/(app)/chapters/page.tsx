import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getChapterProgressSummary } from "@/db/progress";
import { getChapters } from "@/lib/curriculum";

export default async function ChaptersPage() {
  const chapters = await getChapters();
  const progressSummaries = await Promise.all(
    chapters.map(async (chapter) => ({
      chapter,
      summary: await getChapterProgressSummary(chapter.slug),
    })),
  );

  return (
    <div className="stack-lg">
      <header className="section-header">
        <div>
          <p className="ui-eyebrow">Chapter Browser</p>
          <h1>Browse scaffolded learning tracks</h1>
        </div>
      </header>
      <section className="card-grid">
        {progressSummaries.map(({ chapter, summary }) => (
          <Card key={chapter.slug}>
            <div className="inline-cluster">
              <Badge>{chapter.track}</Badge>
              <Badge>{chapter.lessons.length} lessons</Badge>
              {summary ? (
                <Badge>{summary.percentComplete}% complete</Badge>
              ) : null}
              {summary ? (
                <Badge>{summary.status.replaceAll("_", " ")}</Badge>
              ) : null}
            </div>
            <h2>{chapter.title}</h2>
            <p>{chapter.summary}</p>
            <div className="inline-cluster">
              <Link href={`/chapters/${chapter.slug}`}>Chapter page</Link>
              <Link href={`/learn/${chapter.slug}/intro`}>Start intro</Link>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
