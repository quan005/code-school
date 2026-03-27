import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { z } from "zod";
import {
  predictionPromptSchema,
  reflectionPromptSchema,
} from "@/lib/content/frames";

const practiceBlankSchema = z.object({
  expectedValues: z.array(z.string().min(1)).min(1),
  helperText: z.string().optional(),
  key: z.string().min(1),
  label: z.string().min(1),
});

const practiceTestSchema = z.object({
  blankKey: z.string().min(1),
  expected: z.string().min(1),
  label: z.string().min(1),
  scenario: z.string().min(1),
});

export const practiceChallengeSchema = z.object({
  completionBehavior: z
    .enum(["mark_complete", "none"])
    .default("mark_complete"),
  description: z.string().min(1),
  hints: z.array(z.string().min(1)).default([]),
  language: z.literal("javascript").default("javascript"),
  retryMessage: z.string().min(1),
  starterCode: z.string().min(1),
  successMessage: z.string().min(1),
  title: z.string().min(1),
  visibleTests: z.array(practiceTestSchema).min(1),
  blanks: z.array(practiceBlankSchema).min(1),
});

export const lessonActivitySchema = z.object({
  practiceChallenge: practiceChallengeSchema.optional(),
  recapPrompt: predictionPromptSchema.optional(),
  reflectionPrompt: reflectionPromptSchema.optional(),
});

export type PracticeBlank = z.infer<typeof practiceBlankSchema>;
export type PracticeTestCase = z.infer<typeof practiceTestSchema>;
export type PracticeChallenge = z.infer<typeof practiceChallengeSchema>;
export type LessonActivity = z.infer<typeof lessonActivitySchema>;

export type PracticeRunResult = {
  extractedValues: Record<string, string | undefined>;
  feedback: string;
  passedAll: boolean;
  passedCount: number;
  tests: Array<PracticeTestCase & { actual: string; passed: boolean }>;
  totalCount: number;
};

const ACTIVITY_ROOT = path.join(process.cwd(), "content", "chapters");

function normalizeValue(value: string): string {
  return value
    .trim()
    .replace(/^['"`]|['"`]$/g, "")
    .trim()
    .toLowerCase();
}

function extractBlankValue(
  codeSnapshot: string,
  blankKey: string,
): string | undefined {
  const patterns = [
    new RegExp(`const\\s+${blankKey}\\s*=\\s*["'\`]([^"'\`]+)["'\`]`, "i"),
    new RegExp(`let\\s+${blankKey}\\s*=\\s*["'\`]([^"'\`]+)["'\`]`, "i"),
    new RegExp(`var\\s+${blankKey}\\s*=\\s*["'\`]([^"'\`]+)["'\`]`, "i"),
  ];

  for (const pattern of patterns) {
    const match = codeSnapshot.match(pattern);

    if (match?.[1]) {
      return match[1].trim();
    }
  }

  return undefined;
}

export function evaluatePracticeChallenge(
  challenge: PracticeChallenge,
  codeSnapshot: string,
): PracticeRunResult {
  const extractedValues = Object.fromEntries(
    challenge.blanks.map((blank) => [
      blank.key,
      extractBlankValue(codeSnapshot, blank.key),
    ]),
  );

  const tests = challenge.visibleTests.map((testCase) => {
    const actual = extractedValues[testCase.blankKey] ?? "(missing)";
    const expectedValues =
      challenge.blanks.find((blank) => blank.key === testCase.blankKey)
        ?.expectedValues ?? [];
    const passed = expectedValues.some(
      (expectedValue) =>
        normalizeValue(actual) === normalizeValue(expectedValue),
    );

    return {
      ...testCase,
      actual,
      passed,
    };
  });

  const passedCount = tests.filter((testCase) => testCase.passed).length;
  const passedAll = passedCount === tests.length;

  return {
    extractedValues,
    feedback: passedAll ? challenge.successMessage : challenge.retryMessage,
    passedAll,
    passedCount,
    tests,
    totalCount: tests.length,
  };
}

export const getLessonActivity = cache(
  async (
    chapterSlug: string,
    lessonSlug: string,
  ): Promise<LessonActivity | undefined> => {
    const activityPath = path.join(
      ACTIVITY_ROOT,
      chapterSlug,
      "activities",
      `${lessonSlug}.json`,
    );

    try {
      const source = await readFile(activityPath, "utf8");
      return lessonActivitySchema.parse(JSON.parse(source) as unknown);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        return undefined;
      }

      throw error;
    }
  },
);
