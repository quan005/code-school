import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Code School",
    template: "%s | Code School",
  },
  description:
    "Interactive learning app foundation for kid-friendly algorithm lessons.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const globalStyles = readFileSync(
    path.join(process.cwd(), "app", "globals.css"),
    "utf8",
  );

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
