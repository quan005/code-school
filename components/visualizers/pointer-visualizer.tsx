import { Badge } from "@/components/ui/badge";

type PointerVisualizerProps = {
  length: number;
  pointers: Record<string, number>;
};

export function PointerVisualizer({
  length,
  pointers,
}: PointerVisualizerProps) {
  return (
    <div
      className="pointer-grid"
      style={{
        gridTemplateColumns: `repeat(${Math.max(length, 1)}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length }).map((_, index) => (
        <div className="pointer-slot" key={index}>
          {Object.entries(pointers)
            .filter(([, pointerIndex]) => pointerIndex === index)
            .map(([name]) => (
              <Badge key={name}>{name}</Badge>
            ))}
        </div>
      ))}
    </div>
  );
}
