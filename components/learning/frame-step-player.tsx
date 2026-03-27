"use client";

import { StepPlayer } from "@/components/learning/step-player";
import { ArrayVisualizer } from "@/components/visualizers/array-visualizer";
import { LinkedListVisualizer } from "@/components/visualizers/linked-list-visualizer";
import type { LessonFrame } from "@/lib/content/frames";

type FrameStepPlayerProps = {
  frames: LessonFrame[];
  title?: string;
};

export function FrameStepPlayer({
  frames,
  title = "Algorithm walkthrough",
}: FrameStepPlayerProps) {
  return (
    <StepPlayer
      frames={frames}
      renderFrame={(frame) => {
        if (frame.visualizer === "linked_list") {
          return (
            <LinkedListVisualizer
              highlightIndexes={frame.highlightIndexes}
              pointers={frame.pointers}
              values={frame.arrayValues}
            />
          );
        }

        return (
          <ArrayVisualizer
            highlightIndexes={frame.highlightIndexes}
            pointers={frame.pointers}
            values={frame.arrayValues}
          />
        );
      }}
      title={title}
    />
  );
}
