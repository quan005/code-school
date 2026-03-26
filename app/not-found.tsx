import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="status-screen">
      <p className="ui-eyebrow">Not Found</p>
      <h1>That page is not in this lesson map.</h1>
      <p>Try jumping back to the chapter browser or dashboard.</p>
      <div className="status-actions">
        <Link className={buttonStyles("primary")} href="/chapters">
          Browse chapters
        </Link>
        <Link className={buttonStyles("ghost")} href="/dashboard">
          Open dashboard
        </Link>
      </div>
    </main>
  );
}
