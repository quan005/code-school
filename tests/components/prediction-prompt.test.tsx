import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PredictionPrompt } from "@/components/learning/prediction-prompt";

describe("PredictionPrompt", () => {
  it("shows feedback and emits correctness when the learner checks an answer", () => {
    const onAnswered = vi.fn();

    render(
      <PredictionPrompt
        onAnswered={onAnswered}
        prompt={{
          choices: [
            {
              feedback: "Not this move.",
              id: "wrong",
              isCorrect: false,
              label: "Move left",
            },
            {
              feedback: "Correct move.",
              id: "right",
              isCorrect: true,
              label: "Move right",
            },
          ],
          prompt: "Which pointer should move next?",
        }}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Move right" }));
    fireEvent.click(screen.getByRole("button", { name: "Check answer" }));

    expect(onAnswered).toHaveBeenCalledWith(true);
    expect(screen.getByText("Correct move.")).toBeInTheDocument();
  });
});
