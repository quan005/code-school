import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Panel } from "@/components/ui/panel";
import type { ChapterSummary, LessonSummary } from "@/lib/curriculum";

type LessonShellProps = {
  chapter: ChapterSummary;
  currentLessonSlug: string;
  children: ReactNode;
  nextLesson?: LessonSummary;
  previousLesson?: LessonSummary;
};

export function LessonShell({
  chapter,
  children,
  currentLessonSlug,
  nextLesson,
  previousLesson,
}: LessonShellProps) {
  return (
    <div className="lesson-shell">
      <aside className="lesson-sidebar">
        <Panel eyebrow={chapter.track} title={chapter.title}>
          <ul className="lesson-list">
            {chapter.lessons.map((lesson, index) => {
              const active = lesson.slug === currentLessonSlug;
              const href =
                lesson.kind === "intro"
                  ? `/learn/${chapter.slug}/intro`
                  : `/learn/${chapter.slug}/${lesson.slug}`;

              return (
                <li key={lesson.slug}>
                  <Link
                    className={
                      active ? "lesson-link lesson-link-active" : "lesson-link"
                    }
                    href={href}
                  >
                    <span>{index + 1}</span>
                    <span>{lesson.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Panel>
      </aside>
      <div className="lesson-content">
        <Card className="progress-hero">
          <div>
            <p className="ui-eyebrow">Lesson Progress</p>
            <h2>{chapter.title}</h2>
            <p>{chapter.summary}</p>
          </div>
          <div className="progress-meta">
            <Badge>6 lessons</Badge>
            <Badge>Chapter 1 of MVP</Badge>
          </div>
        </Card>
        {children}
        <div className="lesson-pagination">
          {previousLesson ? (
            <Link
              href={
                previousLesson.kind === "intro"
                  ? `/learn/${chapter.slug}/intro`
                  : `/learn/${chapter.slug}/${previousLesson.slug}`
              }
            >
              Previous: {previousLesson.title}
            </Link>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <Link
              href={
                nextLesson.kind === "intro"
                  ? `/learn/${chapter.slug}/intro`
                  : `/learn/${chapter.slug}/${nextLesson.slug}`
              }
            >
              Next: {nextLesson.title}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
