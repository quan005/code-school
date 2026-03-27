import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getActiveStudentContext } from "@/db/progress";

export default async function ProfilePage() {
  const activeStudent = await getActiveStudentContext();

  return (
    <div className="stack-lg">
      <Panel eyebrow="Profile" title="Learner profile">
        <p>
          This active learner context is what lesson progress and mastery
          updates are scoped to in the MVP.
        </p>
        <div className="inline-cluster">
          <Badge>{activeStudent.displayName}</Badge>
          <Badge>Student view</Badge>
          <Badge>Safety-ready foundation</Badge>
        </div>
      </Panel>
    </div>
  );
}
