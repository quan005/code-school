import Link from "next/link";
import { ChapterProgressCard } from "@/components/progress/chapter-progress-card";
import { Card } from "@/components/ui/card";
import { Panel } from "@/components/ui/panel";
import { getChapterProgressSummary } from "@/db/progress";
import { getChapters } from "@/lib/curriculum";

export default async function DashboardPage() {
  const chapters = await getChapters();
  const progressSummaries = await Promise.all(
    chapters.map(async (chapter) => ({
      chapter,
      summary: await getChapterProgressSummary(chapter.slug),
    })),
  );

  return (
    <div className="stack-lg">
      <Panel eyebrow="Dashboard" title="Welcome back">
        <p>
          Track chapter progress, mastery, and the next lesson to pick up across
          the current MVP curriculum.
        </p>
      </Panel>
      <section className="card-grid">
        {progressSummaries.map(({ chapter, summary }) => (
          <Card key={chapter.slug}>
            <h2>{chapter.title}</h2>
            <p>{chapter.summary}</p>
            {summary ? <ChapterProgressCard summary={summary} /> : null}
            <Link href={`/learn/${chapter.slug}/intro`}>Open lesson shell</Link>
          </Card>
        ))}
      </section>
    </div>
  );
}
