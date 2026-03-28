import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PracticePlayground } from "@/components/practice/practice-playground";

const runPracticeChallengeAction = vi.fn();

vi.mock("@/app/actions/practice", () => ({
  runPracticeChallengeAction: (input: unknown) =>
    runPracticeChallengeAction(input),
}));

describe("PracticePlayground", () => {
  it("runs visible tests and shows the latest result feedback", async () => {
    runPracticeChallengeAction.mockResolvedValue({
      extractedValues: {
        tooSmallMove: "left",
      },
      feedback: "Nice work. Your move rule matches the visible tests.",
      passedAll: true,
      passedCount: 1,
      tests: [
        {
          actual: "left",
          blankKey: "tooSmallMove",
          expected: "left",
          label: "Too small total",
          passed: true,
          scenario: "currentSum = 6, target = 10",
        },
      ],
      totalCount: 1,
    });

    render(
      <PracticePlayground
        challenge={{
          blanks: [
            {
              expectedValues: ["left"],
              key: "tooSmallMove",
              label: "Move when the sum is too small",
            },
          ],
          completionBehavior: "mark_complete",
          description:
            "Edit the code so the helper returns the correct pointer move.",
          hints: ["Use left when the sum is too small."],
          language: "javascript",
          retryMessage: "Not yet.",
          starterCode: 'const tooSmallMove = "TODO";',
          successMessage:
            "Nice work. Your move rule matches the visible tests.",
          title: "Fill in the move rule",
          visibleTests: [
            {
              blankKey: "tooSmallMove",
              expected: "left",
              label: "Too small total",
              scenario: "currentSum = 6, target = 10",
            },
          ],
        }}
        chapterSlug="two-pointers"
        history={[]}
        initialCode='const tooSmallMove = "left";'
        lessonSlug="pair-sum-sorted"
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Run tests" }));

    await waitFor(() => {
      expect(runPracticeChallengeAction).toHaveBeenCalledWith({
        chapterSlug: "two-pointers",
        codeSnapshot: 'const tooSmallMove = "left";',
        lessonSlug: "pair-sum-sorted",
      });
    });

    expect(
      await screen.findByText(
        "Nice work. Your move rule matches the visible tests.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Passed 1/1 visible tests.")).toBeInTheDocument();
  });
});
