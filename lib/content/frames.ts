import { z } from "zod";

export const pointerNameSchema = z.enum([
  "left",
  "right",
  "slow",
  "fast",
  "current",
]);

export const lessonFrameSchema = z.object({
  id: z.string().min(1),
  narration: z.string().min(1),
  decision: z.string().optional(),
  quizPrompt: z.string().optional(),
  highlightIndexes: z.array(z.number().int().nonnegative()).default([]),
  pointers: z
    .record(pointerNameSchema, z.number().int().nonnegative())
    .default({}),
});

export type PointerName = z.infer<typeof pointerNameSchema>;
export type LessonFrame = z.infer<typeof lessonFrameSchema>;
