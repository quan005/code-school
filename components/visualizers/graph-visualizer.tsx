import { cn } from "@/lib/cn";

type GraphVisualizerProps = {
  edges: Array<[number, number]>;
  highlightIndexes?: number[];
  pointers?: Record<string, number>;
  values: Array<number | string>;
};

const STAGE_SIZE = 280;
const CENTER = STAGE_SIZE / 2;
const RADIUS = 92;

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

function positionForIndex(index: number, total: number) {
  if (total <= 1) {
    return { x: CENTER, y: CENTER };
  }

  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;

  return {
    x: CENTER + Math.cos(angle) * RADIUS,
    y: CENTER + Math.sin(angle) * RADIUS,
  };
}

export function GraphVisualizer({
  edges,
  highlightIndexes = [],
  pointers = {},
  values,
}: GraphVisualizerProps) {
  const positions = values.map((_, index) =>
    positionForIndex(index, values.length),
  );

  return (
    <div className="graph-visualizer">
      <div
        className="graph-stage"
        style={{ height: `${STAGE_SIZE}px`, width: `${STAGE_SIZE}px` }}
      >
        <svg
          aria-hidden="true"
          className="graph-svg"
          viewBox={`0 0 ${STAGE_SIZE} ${STAGE_SIZE}`}
        >
          {edges.map(([from, to], edgeIndex) => {
            const start = positions[from];
            const end = positions[to];

            if (!start || !end) {
              return null;
            }

            return (
              <line
                className="graph-edge"
                key={`edge-${edgeIndex}`}
                x1={start.x}
                x2={end.x}
                y1={start.y}
                y2={end.y}
              />
            );
          })}
        </svg>

        {values.map((value, index) => {
          const position = positions[index];
          const pointerLabel = pointerLabelForIndex(index, pointers);

          return (
            <div
              className="graph-node-slot"
              key={`node-${index}`}
              style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
              {pointerLabel ? (
                <span className="graph-node-pointer">{pointerLabel}</span>
              ) : (
                <span className="graph-node-pointer graph-node-pointer-empty" />
              )}
              <div
                className={cn(
                  "graph-node",
                  highlightIndexes.includes(index) && "graph-node-highlight",
                )}
              >
                <strong>{value}</strong>
              </div>
              <span className="graph-node-index">{index}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
