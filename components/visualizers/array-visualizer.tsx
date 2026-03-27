import { PointerVisualizer } from "@/components/visualizers/pointer-visualizer";
import { cn } from "@/lib/cn";

type ArrayVisualizerProps = {
  highlightIndexes?: number[];
  pointers?: Record<string, number>;
  values: Array<number | string>;
};

export function ArrayVisualizer({
  highlightIndexes = [],
  pointers = {},
  values,
}: ArrayVisualizerProps) {
  return (
    <div className="array-visualizer">
      <PointerVisualizer length={values.length} pointers={pointers} />
      <div
        className="array-grid"
        style={{
          gridTemplateColumns: `repeat(${Math.max(values.length, 1)}, minmax(0, 1fr))`,
        }}
      >
        {values.map((value, index) => (
          <div
            className={cn(
              "array-cell",
              highlightIndexes.includes(index) && "array-cell-highlight",
            )}
            key={`${index}-${value}`}
          >
            <span className="array-index">{index}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
