"use client";

import { StepPlayer } from "@/components/learning/step-player";
import { ArrayVisualizer } from "@/components/visualizers/array-visualizer";
import { GraphVisualizer } from "@/components/visualizers/graph-visualizer";
import { LinkedListVisualizer } from "@/components/visualizers/linked-list-visualizer";
import { TreeVisualizer } from "@/components/visualizers/tree-visualizer";
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

        if (frame.visualizer === "tree") {
          return (
            <TreeVisualizer
              highlightIndexes={frame.highlightIndexes}
              pointers={frame.pointers}
              values={frame.treeValues}
            />
          );
        }

        if (frame.visualizer === "graph") {
          return (
            <GraphVisualizer
              edges={frame.graphEdges}
              highlightIndexes={frame.highlightIndexes}
              pointers={frame.pointers}
              values={frame.graphNodes}
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
