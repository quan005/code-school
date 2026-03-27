import type { MDXComponents } from "mdx/types";
import {
  CommonMistakesCard,
  ComplexityCard,
  HintDrawer,
  InterviewTip,
  Intuition,
  LessonFramePreview,
  ProblemStatement,
  TestCaseTable,
} from "@/components/mdx/lesson-blocks";
import { PredictionPrompt } from "@/components/learning/prediction-prompt";
import { ReflectionPrompt } from "@/components/learning/reflection-prompt";

export function getLessonMDXComponents(): MDXComponents {
  return {
    ProblemStatement,
    Intuition,
    InterviewTip,
    ComplexityCard,
    TestCaseTable,
    HintDrawer,
    CommonMistakesCard,
    LessonFramePreview,
    PredictionPrompt,
    ReflectionPrompt,
  };
}
