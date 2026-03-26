import Link from "next/link";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { chapters } from "@/lib/curriculum";

export default function HomePage() {
  return (
    <div className="marketing-home">
      <section className="hero-panel">
        <p className="ui-eyebrow">MVP Foundation</p>
        <h1>Build one complete learning chapter with room to grow.</h1>
        <p>
          This scaffold covers the marketing shell, app routes, lesson
          experience shell, and a starter design system for the interactive
          learning app.
        </p>
        <div className="hero-actions">
          <Link className={buttonStyles("primary", "lg")} href="/chapters">
            Explore chapters
          </Link>
          <Link className={buttonStyles("secondary", "lg")} href="/dashboard">
            Open dashboard
          </Link>
        </div>
      </section>

      <section className="card-grid">
        {chapters.map((chapter) => (
          <Card key={chapter.slug}>
            <p className="ui-eyebrow">{chapter.track}</p>
            <h2>{chapter.title}</h2>
            <p>{chapter.summary}</p>
            <Link
              className={buttonStyles("ghost", "sm")}
              href={`/chapters/${chapter.slug}`}
            >
              View chapter
            </Link>
          </Card>
        ))}
      </section>
    </div>
  );
}
