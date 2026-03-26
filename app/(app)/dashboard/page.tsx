import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Panel } from "@/components/ui/panel";
import { chapters } from "@/lib/curriculum";

export default function DashboardPage() {
  return (
    <div className="stack-lg">
      <Panel eyebrow="Dashboard" title="Welcome back">
        <p>
          Track what is live in the app shell today and jump back into the
          current MVP chapter.
        </p>
      </Panel>
      <section className="card-grid">
        {chapters.map((chapter) => (
          <Card key={chapter.slug}>
            <h2>{chapter.title}</h2>
            <p>{chapter.lessons.length} lesson routes scaffolded</p>
            <Link href={`/learn/${chapter.slug}/intro`}>Open lesson shell</Link>
          </Card>
        ))}
      </section>
    </div>
  );
}
