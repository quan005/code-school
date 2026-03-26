import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getChapters } from "@/lib/curriculum";

export default async function ChaptersPage() {
  const chapters = await getChapters();

  return (
    <div className="stack-lg">
      <header className="section-header">
        <div>
          <p className="ui-eyebrow">Chapter Browser</p>
          <h1>Browse scaffolded learning tracks</h1>
        </div>
      </header>
      <section className="card-grid">
        {chapters.map((chapter) => (
          <Card key={chapter.slug}>
            <div className="inline-cluster">
              <Badge>{chapter.track}</Badge>
              <Badge>{chapter.lessons.length} lessons</Badge>
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
