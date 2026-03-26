"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Panel } from "@/components/ui/panel";
import type { LessonFrame } from "@/lib/content/frames";

/**
 * Shared problem block for MDX-authored lessons.
 */
export function ProblemStatement({
  children,
  title = "Problem",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <Panel eyebrow="Problem Statement" title={title}>
      <div className="mdx-prose">{children}</div>
    </Panel>
  );
}

/**
 * Shared intuition block for kid-friendly teaching notes.
 */
export function Intuition({
  children,
  title = "Intuition",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <Panel eyebrow="Intuition" title={title}>
      <div className="mdx-prose">{children}</div>
    </Panel>
  );
}

/**
 * Named to match the backlog contract, but rendered as a coaching tip in the UI.
 */
export function InterviewTip({
  children,
  title = "Coach Tip",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <Card className="tip-card">
      <p className="ui-eyebrow">{title}</p>
      <div className="mdx-prose">{children}</div>
    </Card>
  );
}

/**
 * Compact complexity summary for lesson authors.
 */
export function ComplexityCard({
  notes,
  space,
  time,
}: {
  notes?: string;
  space: string;
  time: string;
}) {
  return (
    <Card>
      <p className="ui-eyebrow">Complexity</p>
      <div className="inline-cluster">
        <Badge>Time: {time}</Badge>
        <Badge>Space: {space}</Badge>
      </div>
      {notes ? <p>{notes}</p> : null}
    </Card>
  );
}

type TestCaseRow = {
  expected: string;
  input: string;
  why?: string;
};

/**
 * Tabular test cases for sample inputs and expected outputs.
 */
export function TestCaseTable({ rows }: { rows: TestCaseRow[] }) {
  return (
    <Card>
      <p className="ui-eyebrow">Test Cases</p>
      <div className="table-wrap">
        <table className="lesson-table">
          <thead>
            <tr>
              <th>Input</th>
              <th>Expected</th>
              <th>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.input}-${row.expected}`}>
                <td>{row.input}</td>
                <td>{row.expected}</td>
                <td>{row.why ?? "General coverage"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

/**
 * Click-to-reveal hint content for guided discovery.
 */
export function HintDrawer({
  children,
  title = "Need a hint?",
}: {
  children: ReactNode;
  title?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <button
        aria-expanded={open}
        className="hint-toggle"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span>{title}</span>
        <span>{open ? "Hide" : "Show"}</span>
      </button>
      {open ? <div className="mdx-prose">{children}</div> : null}
    </Card>
  );
}

/**
 * Temporary generic preview so frame data can already be rendered before the
 * richer step player lands in the next epic.
 */
export function LessonFramePreview({ frames }: { frames: LessonFrame[] }) {
  return (
    <Panel eyebrow="Frame Data" title="Interactive sequence preview">
      <ol className="frame-preview-list">
        {frames.map((frame) => (
          <li key={frame.id}>
            <strong>{frame.id}</strong>
            <p>{frame.narration}</p>
            <div className="inline-cluster">
              {Object.entries(frame.pointers).map(([name, index]) => (
                <Badge key={name}>
                  {name}: {index}
                </Badge>
              ))}
            </div>
            {frame.decision ? <p>{frame.decision}</p> : null}
            {frame.quizPrompt ? <p>{frame.quizPrompt}</p> : null}
          </li>
        ))}
      </ol>
    </Panel>
  );
}
