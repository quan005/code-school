// @vitest-environment node

import { describe, expect, it } from "vitest";
import {
  evaluatePracticeChallenge,
  type PracticeChallenge,
} from "@/lib/content/practice";

const challenge: PracticeChallenge = {
  blanks: [
    {
      expectedValues: ["left"],
      key: "tooSmallMove",
      label: "Move when the sum is too small",
    },
    {
      expectedValues: ["right"],
      key: "tooLargeMove",
      label: "Move when the sum is too large",
    },
  ],
  completionBehavior: "mark_complete",
  description: "Fill in the move rule.",
  hints: ["Use left for too small and right for too large."],
  language: "javascript",
  retryMessage: "Try again.",
  starterCode: 'const tooSmallMove = "TODO";\nconst tooLargeMove = "TODO";\n',
  successMessage: "Nice work.",
  title: "Move rule",
  visibleTests: [
    {
      blankKey: "tooSmallMove",
      expected: "left",
      label: "Too small",
      scenario: "currentSum < target",
    },
    {
      blankKey: "tooLargeMove",
      expected: "right",
      label: "Too large",
      scenario: "currentSum > target",
    },
  ],
};

describe("evaluatePracticeChallenge", () => {
  it("passes when all blanks match expected values", () => {
    const result = evaluatePracticeChallenge(
      challenge,
      'const tooSmallMove = "left";\nconst tooLargeMove = "right";\n',
    );

    expect(result.passedAll).toBe(true);
    expect(result.passedCount).toBe(2);
    expect(result.feedback).toBe("Nice work.");
  });

  it("returns missing markers and retry feedback when blanks do not match", () => {
    const result = evaluatePracticeChallenge(
      challenge,
      'const tooSmallMove = "left";\n',
    );

    expect(result.passedAll).toBe(false);
    expect(result.feedback).toBe("Try again.");
    expect(result.tests[1]?.actual).toBe("(missing)");
    expect(result.tests[1]?.passed).toBe(false);
  });
});
