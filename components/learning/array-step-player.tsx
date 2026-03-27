"use client";

import { StepPlayer } from "@/components/learning/step-player";
import { ArrayVisualizer } from "@/components/visualizers/array-visualizer";
import type { LessonFrame } from "@/lib/content/frames";

type ArrayStepPlayerProps = {
  frames: LessonFrame[];
  title?: string;
};

export function ArrayStepPlayer({
  frames,
  title = "Algorithm walkthrough",
}: ArrayStepPlayerProps) {
  return (
    <StepPlayer
      frames={frames}
      renderFrame={(frame) => (
        <ArrayVisualizer
          highlightIndexes={frame.highlightIndexes}
          pointers={frame.pointers}
          values={frame.arrayValues}
        />
      )}
      title={title}
    />
  );
}
