import { z } from "zod";

export const pointerNameSchema = z.enum([
  "left",
  "right",
  "slow",
  "fast",
  "current",
]);

const promptChoiceSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  feedback: z.string().optional(),
  isCorrect: z.boolean(),
});

export const predictionPromptSchema = z.object({
  prompt: z.string().min(1),
  choices: z.array(promptChoiceSchema).min(2),
});

export const reflectionPromptSchema = z.object({
  prompt: z.string().min(1),
  placeholder: z.string().optional(),
});

export const lessonFrameSchema = z.object({
  id: z.string().min(1),
  narration: z.string().min(1),
  arrayValues: z.array(z.union([z.number(), z.string()])).default([]),
  callout: z.string().optional(),
  decision: z.string().optional(),
  highlightIndexes: z.array(z.number().int().nonnegative()).default([]),
  pointers: z
    .record(pointerNameSchema, z.number().int().nonnegative())
    .default({}),
  predictionPrompt: predictionPromptSchema.optional(),
  reflectionPrompt: reflectionPromptSchema.optional(),
});

export type PointerName = z.infer<typeof pointerNameSchema>;
export type PredictionPromptModel = z.infer<typeof predictionPromptSchema>;
export type ReflectionPromptModel = z.infer<typeof reflectionPromptSchema>;
export type LessonFrame = z.infer<typeof lessonFrameSchema>;
