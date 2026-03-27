import { PointerVisualizer } from "@/components/visualizers/pointer-visualizer";
import { cn } from "@/lib/cn";

type LinkedListVisualizerProps = {
  highlightIndexes?: number[];
  pointers?: Record<string, number>;
  values: Array<number | string>;
};

export function LinkedListVisualizer({
  highlightIndexes = [],
  pointers = {},
  values,
}: LinkedListVisualizerProps) {
  return (
    <div className="linked-list-visualizer">
      <PointerVisualizer length={values.length} pointers={pointers} />
      <div className="linked-list-chain">
        {values.map((value, index) => (
          <div className="linked-list-item" key={`${index}-${value}`}>
            <div
              className={cn(
                "linked-list-node",
                highlightIndexes.includes(index) &&
                  "linked-list-node-highlight",
              )}
            >
              <span className="array-index">{index}</span>
              <strong>{value}</strong>
              <span className="linked-list-next">
                {index === values.length - 1 ? "null" : "next"}
              </span>
            </div>
            {index < values.length - 1 ? (
              <span aria-hidden="true" className="linked-list-arrow">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
