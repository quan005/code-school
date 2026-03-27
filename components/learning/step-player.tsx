"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { PredictionPrompt } from "@/components/learning/prediction-prompt";
import { ReflectionPrompt } from "@/components/learning/reflection-prompt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonFrame } from "@/lib/content/frames";

type StepPlayerProps<TFrame extends LessonFrame> = {
  currentIndex?: number;
  defaultIndex?: number;
  frames: TFrame[];
  onStepChange?: (index: number) => void;
  renderFrame: (frame: TFrame, index: number) => ReactNode;
  title?: string;
};

export function StepPlayer<TFrame extends LessonFrame>({
  currentIndex,
  defaultIndex = 0,
  frames,
  onStepChange,
  renderFrame,
  title = "Walkthrough",
}: StepPlayerProps<TFrame>) {
  const isControlled = typeof currentIndex === "number";
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const resolvedIndex = isControlled ? currentIndex : internalIndex;
  const frame = frames[resolvedIndex] ?? frames[0];

  useEffect(() => {
    if (!isControlled) {
      setInternalIndex(defaultIndex);
    }
  }, [defaultIndex, isControlled]);

  const canGoBackward = resolvedIndex > 0;
  const canGoForward = resolvedIndex < frames.length - 1;

  const progressLabel = useMemo(
    () => `Step ${resolvedIndex + 1} of ${frames.length}`,
    [frames.length, resolvedIndex],
  );

  function moveTo(index: number) {
    if (index < 0 || index >= frames.length) {
      return;
    }

    if (!isControlled) {
      setInternalIndex(index);
    }

    onStepChange?.(index);
  }

  if (!frame) {
    return null;
  }

  return (
    <section
      className="step-player"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          moveTo(resolvedIndex - 1);
        }

        if (event.key === "ArrowRight") {
          moveTo(resolvedIndex + 1);
        }
      }}
      tabIndex={0}
    >
      <Card className="step-player-header">
        <div>
          <p className="ui-eyebrow">{title}</p>
          <h3>{progressLabel}</h3>
          <p>{frame.narration}</p>
        </div>
        <div className="inline-cluster">
          <Button
            disabled={!canGoBackward}
            onClick={() => moveTo(resolvedIndex - 1)}
            size="sm"
            variant="ghost"
          >
            Previous
          </Button>
          <Button
            disabled={!canGoForward}
            onClick={() => moveTo(resolvedIndex + 1)}
            size="sm"
          >
            Next
          </Button>
        </div>
      </Card>

      {renderFrame(frame, resolvedIndex)}

      {frame.callout ? (
        <Card>
          <p className="ui-eyebrow">Callout</p>
          <p>{frame.callout}</p>
        </Card>
      ) : null}

      {frame.decision ? (
        <Card>
          <p className="ui-eyebrow">Decision</p>
          <p>{frame.decision}</p>
        </Card>
      ) : null}

      {frame.predictionPrompt ? (
        <PredictionPrompt prompt={frame.predictionPrompt} />
      ) : null}

      {frame.reflectionPrompt ? (
        <ReflectionPrompt prompt={frame.reflectionPrompt} />
      ) : null}
    </section>
  );
}
