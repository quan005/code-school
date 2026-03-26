import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";

export default function ProfilePage() {
  return (
    <div className="stack-lg">
      <Panel eyebrow="Profile" title="Learner profile">
        <p>
          This placeholder route is ready for child-safe account settings and
          progress snapshots.
        </p>
        <div className="inline-cluster">
          <Badge>Student view</Badge>
          <Badge>Safety-ready foundation</Badge>
        </div>
      </Panel>
    </div>
  );
}
