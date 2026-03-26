import type { MDXComponents } from "mdx/types";
import {
  ComplexityCard,
  HintDrawer,
  InterviewTip,
  Intuition,
  LessonFramePreview,
  ProblemStatement,
  TestCaseTable,
} from "@/components/mdx/lesson-blocks";

export function getLessonMDXComponents(): MDXComponents {
  return {
    ProblemStatement,
    Intuition,
    InterviewTip,
    ComplexityCard,
    TestCaseTable,
    HintDrawer,
    LessonFramePreview,
  };
}
