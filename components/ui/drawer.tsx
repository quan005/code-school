"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type DrawerProps = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  title: string;
};

export function Drawer({ children, onClose, open, title }: DrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  return (
    <div
      aria-hidden={!open}
      className={cn("ui-drawer-root", open && "ui-drawer-open")}
    >
      <button
        aria-label="Close navigation drawer"
        className="ui-drawer-backdrop"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        type="button"
      />
      <aside
        aria-label={title}
        aria-modal="true"
        className="ui-drawer-panel"
        role="dialog"
      >
        <div className="ui-drawer-header">
          <h2>{title}</h2>
          <button className="ui-icon-button" onClick={onClose} type="button">
            Close
          </button>
        </div>
        {children}
      </aside>
    </div>
  );
}
