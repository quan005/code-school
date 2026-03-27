"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PredictionPromptModel } from "@/lib/content/frames";

type PredictionPromptProps = {
  onAnswered?: (isCorrect: boolean) => void;
  prompt: PredictionPromptModel;
};

export function PredictionPrompt({
  onAnswered,
  prompt,
}: PredictionPromptProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedChoice = useMemo(
    () => prompt.choices.find((choice) => choice.id === selectedId),
    [prompt.choices, selectedId],
  );

  return (
    <Card>
      <p className="ui-eyebrow">Predict the next move</p>
      <p>{prompt.prompt}</p>
      <div className="prediction-choice-list">
        {prompt.choices.map((choice) => (
          <button
            className={
              selectedId === choice.id
                ? "prediction-choice prediction-choice-active"
                : "prediction-choice"
            }
            key={choice.id}
            onClick={() => setSelectedId(choice.id)}
            type="button"
          >
            {choice.label}
          </button>
        ))}
      </div>
      <Button
        disabled={!selectedChoice}
        onClick={() => {
          if (!selectedChoice) {
            return;
          }

          onAnswered?.(selectedChoice.isCorrect);
        }}
        size="sm"
      >
        Check answer
      </Button>
      {selectedChoice ? (
        <p
          className={
            selectedChoice.isCorrect ? "feedback-good" : "feedback-note"
          }
        >
          {selectedChoice.feedback ??
            (selectedChoice.isCorrect
              ? "Correct. That move keeps the search moving in the right direction."
              : "Not quite. Try matching the move to what the sorted order tells you.")}
        </p>
      ) : null}
    </Card>
  );
}
