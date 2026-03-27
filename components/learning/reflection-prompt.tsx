"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import type { ReflectionPromptModel } from "@/lib/content/frames";

type ReflectionPromptProps = {
  prompt: ReflectionPromptModel;
};

export function ReflectionPrompt({ prompt }: ReflectionPromptProps) {
  const [response, setResponse] = useState("");

  return (
    <Card>
      <p className="ui-eyebrow">Reflection</p>
      <label className="reflection-label">
        <span>{prompt.prompt}</span>
        <textarea
          className="reflection-input"
          onChange={(event) => setResponse(event.target.value)}
          placeholder={prompt.placeholder ?? "Write a short thought here."}
          rows={4}
          value={response}
        />
      </label>
      <p>
        {response
          ? "Nice. You have a saved draft in this session."
          : "Your response stays local for now."}
      </p>
    </Card>
  );
}
