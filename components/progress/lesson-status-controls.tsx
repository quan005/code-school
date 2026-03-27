"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { updateLessonProgressAction } from "@/app/actions/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { LessonStatus } from "@/db/progress";

const STATUSES: LessonStatus[] = ["not_started", "in_progress", "completed"];

export function LessonStatusControls({
  chapterSlug,
  lessonSlug,
  status,
}: {
  chapterSlug: string;
  lessonSlug: string;
  status: LessonStatus;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="status-control-row">
      <Badge>Current status: {status.replaceAll("_", " ")}</Badge>
      <div className="inline-cluster">
        {STATUSES.map((nextStatus) => (
          <Button
            disabled={isPending || nextStatus === status}
            key={nextStatus}
            onClick={() => {
              startTransition(async () => {
                await updateLessonProgressAction({
                  chapterSlug,
                  lessonSlug,
                  status: nextStatus,
                });
                router.refresh();
              });
            }}
            size="sm"
            variant={nextStatus === status ? "secondary" : "ghost"}
          >
            {nextStatus.replaceAll("_", " ")}
          </Button>
        ))}
      </div>
    </div>
  );
}
