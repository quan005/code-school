// @vitest-environment node

import { describe, expect, it } from "vitest";
import { computeMasteryResult } from "@/db/mastery";

describe("computeMasteryResult", () => {
  it("returns not_started when no learning signal exists", () => {
    expect(
      computeMasteryResult({
        codeAccuracy: 0,
        completionRatio: 0,
        hintUsageCount: 0,
        quizAccuracy: 0,
        retryCount: 0,
      }),
    ).toEqual({
      score: 0,
      state: "not_started",
    });
  });

  it("returns mastered when strong completion, quiz, and code signals exist", () => {
    const result = computeMasteryResult({
      codeAccuracy: 1,
      completionRatio: 1,
      hintUsageCount: 1,
      quizAccuracy: 0.9,
      retryCount: 1,
    });

    expect(result.state).toBe("mastered");
    expect(result.score).toBeGreaterThanOrEqual(75);
  });

  it("drops to needs_practice when retries and hints pull the score down", () => {
    const result = computeMasteryResult({
      codeAccuracy: 0.5,
      completionRatio: 0.75,
      hintUsageCount: 3,
      quizAccuracy: 0.5,
      retryCount: 4,
    });

    expect(result.state).toBe("needs_practice");
    expect(result.score).toBeLessThan(75);
  });
});
