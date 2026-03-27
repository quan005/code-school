export type MasteryInputs = {
  codeAccuracy: number;
  completionRatio: number;
  hintUsageCount: number;
  quizAccuracy: number;
  retryCount: number;
};

export type MasteryResult = {
  score: number;
  state: "mastered" | "needs_practice" | "not_started";
};

function clamp(value: number): number {
  return Math.max(0, Math.min(1, value));
}

export function computeMasteryResult(inputs: MasteryInputs): MasteryResult {
  const completionRatio = clamp(inputs.completionRatio);
  const quizAccuracy = clamp(inputs.quizAccuracy);
  const codeAccuracy = clamp(inputs.codeAccuracy);
  const hintPenalty = Math.min(inputs.hintUsageCount * 4, 16);
  const retryPenalty = Math.min(inputs.retryCount * 3, 15);

  const weightedScore =
    completionRatio * 35 +
    quizAccuracy * 30 +
    codeAccuracy * 35 -
    hintPenalty -
    retryPenalty;
  const score = Math.max(0, Math.round(weightedScore));

  if (
    score === 0 &&
    completionRatio === 0 &&
    quizAccuracy === 0 &&
    codeAccuracy === 0
  ) {
    return {
      score,
      state: "not_started",
    };
  }

  return {
    score,
    state: score >= 75 ? "mastered" : "needs_practice",
  };
}
