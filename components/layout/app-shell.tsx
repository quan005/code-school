"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";
import { Logo } from "@/components/layout/logo";
import { Drawer } from "@/components/ui/drawer";
import { cn } from "@/lib/cn";
import { appNav } from "@/lib/navigation";

function AppNavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Application navigation" className="app-nav">
      {appNav.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            className={cn("app-nav-link", active && "app-nav-link-active")}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Logo />
        <AppNavLinks />
      </aside>
      <div className="app-main">
        <header className="app-header">
          <button
            className="ui-icon-button mobile-only"
            onClick={() => setDrawerOpen(true)}
            type="button"
          >
            Menu
          </button>
          <div>
            <p className="ui-eyebrow">Platform Foundation</p>
            <h1>Interactive Learning App</h1>
          </div>
        </header>
        <div className="app-page">{children}</div>
      </div>
      <Drawer
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        title="Application navigation"
      >
        <AppNavLinks />
      </Drawer>
    </div>
  );
}
