export type LessonSummary = {
  slug: string;
  title: string;
  kind: "intro" | "problem" | "review" | "mastery";
  difficulty: "easy" | "medium";
  estimatedMinutes: number;
  summary: string;
};

export type ChapterSummary = {
  slug: string;
  title: string;
  track: string;
  accent: "sunrise" | "sky" | "mint";
  summary: string;
  lessons: LessonSummary[];
};

export const chapters: ChapterSummary[] = [
  {
    slug: "two-pointers",
    title: "Two Pointers",
    track: "Code Patterns",
    accent: "sunrise",
    summary:
      "Learn how two moving positions can scan arrays faster than checking every pair.",
    lessons: [
      {
        slug: "intro",
        title: "Introduction",
        kind: "intro",
        difficulty: "easy",
        estimatedMinutes: 8,
        summary:
          "Meet left and right pointers and learn when moving them saves time.",
      },
      {
        slug: "pair-sum-sorted",
        title: "Pair Sum - Sorted",
        kind: "problem",
        difficulty: "easy",
        estimatedMinutes: 12,
        summary: "Use sorted order to decide which pointer should move.",
      },
      {
        slug: "triplet-sum",
        title: "Triplet Sum",
        kind: "problem",
        difficulty: "medium",
        estimatedMinutes: 15,
        summary: "Lock one number and use two pointers for the other two.",
      },
      {
        slug: "largest-container",
        title: "Largest Container",
        kind: "problem",
        difficulty: "medium",
        estimatedMinutes: 14,
        summary:
          "Compare widths and heights while squeezing the window inward.",
      },
      {
        slug: "review",
        title: "Review",
        kind: "review",
        difficulty: "easy",
        estimatedMinutes: 10,
        summary: "Recap the pointer patterns and common move rules.",
      },
      {
        slug: "mastery-check",
        title: "Mastery Check",
        kind: "mastery",
        difficulty: "medium",
        estimatedMinutes: 12,
        summary:
          "Check whether you can choose the right pointer move on your own.",
      },
    ],
  },
  {
    slug: "linked-lists",
    title: "Linked Lists",
    track: "Code Patterns",
    accent: "sky",
    summary:
      "Follow boxes and arrows through lists, then learn to reconnect them safely.",
    lessons: [
      {
        slug: "intro",
        title: "Introduction",
        kind: "intro",
        difficulty: "easy",
        estimatedMinutes: 8,
        summary: "See how nodes and next pointers form a chain.",
      },
      {
        slug: "traverse",
        title: "Traverse a Linked List",
        kind: "problem",
        difficulty: "easy",
        estimatedMinutes: 10,
        summary: "Walk one node at a time from head to null.",
      },
    ],
  },
  {
    slug: "sliding-windows",
    title: "Sliding Windows",
    track: "Code Patterns",
    accent: "mint",
    summary:
      "Track a moving window and update the answer without restarting each time.",
    lessons: [
      {
        slug: "intro",
        title: "Introduction",
        kind: "intro",
        difficulty: "easy",
        estimatedMinutes: 9,
        summary: "Use a moving frame to watch part of an array at a time.",
      },
    ],
  },
];

export function getChapters(): ChapterSummary[] {
  return chapters;
}

export function getChapterBySlug(
  chapterSlug: string,
): ChapterSummary | undefined {
  return chapters.find((chapter) => chapter.slug === chapterSlug);
}

export function getLessonBySlug(
  chapterSlug: string,
  lessonSlug: string,
): LessonSummary | undefined {
  const chapter = getChapterBySlug(chapterSlug);
  return chapter?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getAdjacentLessons(
  chapterSlug: string,
  lessonSlug: string,
): {
  previous?: LessonSummary;
  next?: LessonSummary;
} {
  const chapter = getChapterBySlug(chapterSlug);

  if (!chapter) {
    return {};
  }

  const index = chapter.lessons.findIndex(
    (lesson) => lesson.slug === lessonSlug,
  );

  if (index === -1) {
    return {};
  }

  return {
    previous: chapter.lessons[index - 1],
    next: chapter.lessons[index + 1],
  };
}
