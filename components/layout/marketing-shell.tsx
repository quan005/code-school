import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/layout/logo";
import { buttonStyles } from "@/components/ui/button";
import { marketingNav } from "@/lib/navigation";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-shell">
      <header className="marketing-header">
        <Logo />
        <nav aria-label="Marketing navigation" className="top-nav">
          {marketingNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className={buttonStyles("secondary", "sm")} href="/chapters">
          Start Learning
        </Link>
      </header>
      <main>{children}</main>
      <footer className="marketing-footer">
        <p>Built for content-first learning, chapter by chapter.</p>
      </footer>
    </div>
  );
}
