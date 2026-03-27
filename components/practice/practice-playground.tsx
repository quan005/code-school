"use client";

import { useMemo, useState, useTransition } from "react";
import { runPracticeChallengeAction } from "@/app/actions/practice";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LessonSubmissionSummary } from "@/db/progress";
import type {
  PracticeChallenge,
  PracticeRunResult,
} from "@/lib/content/practice";

function parseStoredSummary(summary: string):
  | {
      feedback?: string;
      passedAll?: boolean;
      passedCount?: number;
      totalCount?: number;
    }
  | undefined {
  try {
    return JSON.parse(summary) as {
      feedback?: string;
      passedAll?: boolean;
      passedCount?: number;
      totalCount?: number;
    };
  } catch {
    return undefined;
  }
}

export function PracticePlayground({
  challenge,
  chapterSlug,
  history,
  initialCode,
  lessonSlug,
}: {
  challenge: PracticeChallenge;
  chapterSlug: string;
  history: LessonSubmissionSummary[];
  initialCode: string;
  lessonSlug: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [latestResult, setLatestResult] = useState<PracticeRunResult | null>(
    null,
  );
  const [isPending, startTransition] = useTransition();

  const latestStoredSummary = useMemo(
    () =>
      history[0] ? parseStoredSummary(history[0].resultSummary) : undefined,
    [history],
  );

  return (
    <div className="stack-lg">
      <Card>
        <p className="ui-eyebrow">Practice Task</p>
        <h3>{challenge.title}</h3>
        <p>{challenge.description}</p>
      </Card>

      <div className="practice-grid">
        <Card className="practice-column">
          <div className="practice-section-header">
            <div>
              <p className="ui-eyebrow">Code</p>
              <h3>Starter code</h3>
            </div>
            <div className="inline-cluster">
              <Button
                disabled={isPending}
                onClick={() => setCode(challenge.starterCode)}
                size="sm"
                variant="ghost"
              >
                Reset
              </Button>
              <Button
                disabled={isPending}
                onClick={() => {
                  startTransition(async () => {
                    const result = await runPracticeChallengeAction({
                      chapterSlug,
                      codeSnapshot: code,
                      lessonSlug,
                    });
                    setLatestResult(result);
                  });
                }}
                size="sm"
              >
                {isPending ? "Running..." : "Run tests"}
              </Button>
            </div>
          </div>
          <textarea
            className="code-editor"
            onChange={(event) => setCode(event.target.value)}
            spellCheck={false}
            value={code}
          />
        </Card>

        <div className="practice-column stack-lg">
          <Card>
            <p className="ui-eyebrow">Visible Tests</p>
            <ul className="practice-test-list">
              {challenge.visibleTests.map((testCase) => {
                const testResult = latestResult?.tests.find(
                  (entry) => entry.label === testCase.label,
                );

                return (
                  <li key={testCase.label}>
                    <strong>{testCase.label}</strong>
                    <p>{testCase.scenario}</p>
                    <p>Expected output: {testCase.expected}</p>
                    {testResult ? (
                      <p
                        className={
                          testResult.passed ? "feedback-good" : "feedback-note"
                        }
                      >
                        {testResult.passed
                          ? `Pass. Your code returned ${testResult.actual}.`
                          : `Not yet. Your code returned ${testResult.actual}.`}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card>
            <p className="ui-eyebrow">Output</p>
            {latestResult ? (
              <div className="stack-lg">
                <p
                  className={
                    latestResult.passedAll ? "feedback-good" : "feedback-note"
                  }
                >
                  {latestResult.feedback}
                </p>
                <p>
                  Passed {latestResult.passedCount}/{latestResult.totalCount}{" "}
                  visible tests.
                </p>
              </div>
            ) : latestStoredSummary ? (
              <div className="stack-lg">
                <p
                  className={
                    latestStoredSummary.passedAll
                      ? "feedback-good"
                      : "feedback-note"
                  }
                >
                  {latestStoredSummary.feedback ??
                    "Latest saved result loaded."}
                </p>
                <p>
                  Last saved run: {latestStoredSummary.passedCount ?? 0}/
                  {latestStoredSummary.totalCount ?? 0} tests passed.
                </p>
              </div>
            ) : (
              <p>Run the visible tests to see feedback here.</p>
            )}
          </Card>

          <Card>
            <p className="ui-eyebrow">Hints</p>
            <ul className="practice-hint-list">
              {challenge.hints.map((hint) => (
                <li key={hint}>{hint}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <p className="ui-eyebrow">Attempt History</p>
            {history.length > 0 ? (
              <ul className="practice-history-list">
                {history.map((attempt) => {
                  const storedSummary = parseStoredSummary(
                    attempt.resultSummary,
                  );

                  return (
                    <li key={`${attempt.updatedAt}-${attempt.resultSummary}`}>
                      <strong>
                        {new Date(attempt.updatedAt).toLocaleString()}
                      </strong>
                      <p>
                        {storedSummary?.feedback ??
                          "Saved result summary available."}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No saved attempts yet.</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
