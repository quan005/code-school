import { cn } from "@/lib/cn";

type TreeVisualizerProps = {
  highlightIndexes?: number[];
  pointers?: Record<string, number>;
  values: Array<number | string | null>;
};

function chunkLevels(values: Array<number | string | null>) {
  const levels: Array<Array<number | string | null>> = [];
  let width = 1;
  let index = 0;

  while (index < values.length) {
    levels.push(values.slice(index, index + width));
    index += width;
    width *= 2;
  }

  return levels;
}

function pointerLabelForIndex(
  index: number,
  pointers: Record<string, number>,
): string | undefined {
  const matches = Object.entries(pointers)
    .filter(([, pointerIndex]) => pointerIndex === index)
    .map(([name]) => name);

  if (matches.length === 0) {
    return undefined;
  }

  return matches.join(", ");
}

export function TreeVisualizer({
  highlightIndexes = [],
  pointers = {},
  values,
}: TreeVisualizerProps) {
  const levels = chunkLevels(values);
  let absoluteIndex = 0;

  return (
    <div className="tree-visualizer">
      {levels.map((level, levelIndex) => (
        <div className="tree-level" key={`level-${levelIndex}`}>
          {level.map((value) => {
            const index = absoluteIndex++;
            const pointerLabel = pointerLabelForIndex(index, pointers);
            const isEmpty = value === null;

            return (
              <div className="tree-node-slot" key={`node-${index}`}>
                {pointerLabel ? (
                  <span className="tree-node-pointer">{pointerLabel}</span>
                ) : (
                  <span className="tree-node-pointer tree-node-pointer-empty" />
                )}
                <div
                  className={cn(
                    "tree-node",
                    isEmpty && "tree-node-empty",
                    highlightIndexes.includes(index) && "tree-node-highlight",
                  )}
                >
                  {!isEmpty ? <strong>{value}</strong> : null}
                </div>
                <span className="tree-node-index">{index}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
