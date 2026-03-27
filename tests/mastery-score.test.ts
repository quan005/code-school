import assert from "node:assert/strict";
import test from "node:test";
import { computeMasteryResult } from "../db/mastery.ts";

test("returns not_started when no learning signal exists", () => {
  assert.deepEqual(
    computeMasteryResult({
      codeAccuracy: 0,
      completionRatio: 0,
      hintUsageCount: 0,
      quizAccuracy: 0,
      retryCount: 0,
    }),
    {
      score: 0,
      state: "not_started",
    },
  );
});

test("returns mastered when strong completion, quiz, and code signals exist", () => {
  const result = computeMasteryResult({
    codeAccuracy: 1,
    completionRatio: 1,
    hintUsageCount: 1,
    quizAccuracy: 0.9,
    retryCount: 1,
  });

  assert.equal(result.state, "mastered");
  assert.ok(result.score >= 75);
});

test("drops to needs_practice when retries and hints pull the score down", () => {
  const result = computeMasteryResult({
    codeAccuracy: 0.5,
    completionRatio: 0.75,
    hintUsageCount: 3,
    quizAccuracy: 0.5,
    retryCount: 4,
  });

  assert.equal(result.state, "needs_practice");
  assert.ok(result.score < 75);
});
