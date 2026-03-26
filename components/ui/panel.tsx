import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title?: string;
  actions?: ReactNode;
};

export function Panel({
  actions,
  children,
  className,
  eyebrow,
  title,
  ...props
}: PanelProps) {
  return (
    <section className={cn("ui-panel", className)} {...props}>
      {eyebrow || title || actions ? (
        <header className="ui-panel-header">
          <div>
            {eyebrow ? <p className="ui-eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
          </div>
          {actions ? <div>{actions}</div> : null}
        </header>
      ) : null}
      <div>{children}</div>
    </section>
  );
}
