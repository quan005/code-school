import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getActiveStudentContext } from "@/db/progress";

export default async function ProfilePage() {
  const activeStudent = await getActiveStudentContext();

  return (
    <div className="stack-lg">
      <Panel eyebrow="Private learner context" title="Learner settings">
        <p>
          This page is only an internal app view for the active learner context.
          The MVP does not expose public student profile pages.
        </p>
        <div className="inline-cluster">
          <Badge>{activeStudent.displayName}</Badge>
          <Badge>Adult-managed learner</Badge>
          <Badge>Private by default</Badge>
        </div>
      </Panel>
      <Panel eyebrow="Safety notes" title="MVP guardrails">
        <p>
          Progress, submissions, and mastery updates stay scoped to this learner
          only. No chat, public sharing, or open student discovery exists in the
          MVP.
        </p>
        <div className="inline-cluster">
          <Badge>No public profiles</Badge>
          <Badge>No messaging</Badge>
          <Badge>Minimal telemetry only</Badge>
        </div>
      </Panel>
    </div>
  );
}
