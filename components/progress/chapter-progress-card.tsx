import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ChapterProgressSummary } from "@/db/progress";

export function ChapterProgressCard({
  summary,
}: {
  summary: ChapterProgressSummary;
}) {
  return (
    <Card>
      <p className="ui-eyebrow">Chapter Progress</p>
      <div className="inline-cluster">
        <Badge>{summary.percentComplete}% complete</Badge>
        <Badge>
          {summary.completedLessons}/{summary.totalLessons} lessons
        </Badge>
        <Badge>Mastery score: {summary.mastery.score}</Badge>
      </div>
      <p>
        Current state: <strong>{summary.status.replaceAll("_", " ")}</strong>
      </p>
    </Card>
  );
}
