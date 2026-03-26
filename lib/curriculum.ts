import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";
import { cache } from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { z } from "zod";
import { getLessonMDXComponents } from "@/lib/content/mdx-components";
import { lessonFrameSchema, type LessonFrame } from "@/lib/content/frames";

const chapterMetadataSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  order: z.number().int().positive(),
  track: z.string().min(1),
  summary: z.string().min(1),
});

const lessonMetadataSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  order: z.number().int().positive(),
  lessonType: z.enum(["intro", "problem", "review", "mastery"]),
  difficulty: z.enum(["easy", "medium", "hard"]),
  estimatedMinutes: z.number().int().positive(),
  concepts: z.array(z.string().min(1)).min(1),
  skills: z.array(z.string().min(1)).min(1),
  prerequisites: z.array(z.string().min(1)).default([]),
  summary: z.string().min(1),
});

export type ChapterMetadata = z.infer<typeof chapterMetadataSchema>;
export type LessonMetadata = z.infer<typeof lessonMetadataSchema>;

export type LessonSummary = LessonMetadata & {
  frames: LessonFrame[];
  sourcePath: string;
};

export type ChapterSummary = ChapterMetadata & {
  lessons: LessonSummary[];
};

type LessonModule = {
  content: ReactNode;
  frames: LessonFrame[];
  lesson: LessonSummary;
};

const CONTENT_ROOT = path.join(process.cwd(), "content", "chapters");

function buildLessonHref(chapterSlug: string, lesson: LessonSummary): string {
  if (lesson.lessonType === "intro") {
    return `/learn/${chapterSlug}/intro`;
  }

  if (lesson.lessonType === "review") {
    return `/review/${chapterSlug}`;
  }

  if (lesson.lessonType === "mastery") {
    return `/mastery/${chapterSlug}`;
  }

  return `/learn/${chapterSlug}/${lesson.slug}`;
}

function validateUniqueLessonOrdering(
  chapter: ChapterMetadata,
  lessons: LessonSummary[],
) {
  const slugSet = new Set<string>();
  const orderSet = new Set<number>();

  for (const lesson of lessons) {
    if (slugSet.has(lesson.slug)) {
      throw new Error(
        `Duplicate lesson slug "${lesson.slug}" found in chapter "${chapter.slug}".`,
      );
    }

    if (orderSet.has(lesson.order)) {
      throw new Error(
        `Duplicate lesson order "${lesson.order}" found in chapter "${chapter.slug}".`,
      );
    }

    slugSet.add(lesson.slug);
    orderSet.add(lesson.order);
  }

  const sortedOrders = [...orderSet].sort((left, right) => left - right);
  sortedOrders.forEach((order, index) => {
    const expected = index + 1;

    if (order !== expected) {
      throw new Error(
        `Invalid lesson ordering in chapter "${chapter.slug}". Expected lesson order ${expected} but found ${order}.`,
      );
    }
  });
}

async function readFrameSet(
  chapterSlug: string,
  lessonSlug: string,
): Promise<LessonFrame[]> {
  const framePath = path.join(
    CONTENT_ROOT,
    chapterSlug,
    "frames",
    `${lessonSlug}.json`,
  );

  try {
    const source = await readFile(framePath, "utf8");
    const parsed = JSON.parse(source) as unknown;
    return z.array(lessonFrameSchema).parse(parsed);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function readLessonSummary(
  chapterSlug: string,
  absolutePath: string,
): Promise<LessonSummary> {
  const source = await readFile(absolutePath, "utf8");
  const { data } = matter(source);
  const lesson = lessonMetadataSchema.parse(data);

  if (path.basename(absolutePath, ".mdx") !== lesson.slug) {
    throw new Error(
      `Lesson file "${absolutePath}" does not match metadata slug "${lesson.slug}".`,
    );
  }

  return {
    ...lesson,
    frames: await readFrameSet(chapterSlug, lesson.slug),
    sourcePath: absolutePath,
  };
}

const loadChapterIndex = cache(async (): Promise<ChapterSummary[]> => {
  const chapterDirs = await readdir(CONTENT_ROOT, { withFileTypes: true });
  const chapters: ChapterSummary[] = [];

  for (const entry of chapterDirs) {
    if (!entry.isDirectory()) {
      continue;
    }

    const chapterDir = path.join(CONTENT_ROOT, entry.name);
    const chapterSource = await readFile(
      path.join(chapterDir, "chapter.json"),
      "utf8",
    );
    const chapter = chapterMetadataSchema.parse(
      JSON.parse(chapterSource) as unknown,
    );
    const lessonDir = path.join(chapterDir, "lessons");
    const lessonFiles = (await readdir(lessonDir))
      .filter((fileName) => fileName.endsWith(".mdx"))
      .sort();

    const lessons = await Promise.all(
      lessonFiles.map((fileName) =>
        readLessonSummary(chapter.slug, path.join(lessonDir, fileName)),
      ),
    );

    lessons.sort((left, right) => left.order - right.order);
    validateUniqueLessonOrdering(chapter, lessons);

    chapters.push({
      ...chapter,
      lessons,
    });
  }

  const seenChapterSlugs = new Set<string>();
  const seenOrders = new Set<number>();

  chapters.sort((left, right) => left.order - right.order);

  for (const chapter of chapters) {
    if (seenChapterSlugs.has(chapter.slug)) {
      throw new Error(
        `Duplicate chapter slug "${chapter.slug}" found in content/chapters.`,
      );
    }

    if (seenOrders.has(chapter.order)) {
      throw new Error(
        `Duplicate chapter order "${chapter.order}" found in content/chapters.`,
      );
    }

    seenChapterSlugs.add(chapter.slug);
    seenOrders.add(chapter.order);
  }

  return chapters;
});

export async function getChapters(): Promise<ChapterSummary[]> {
  return loadChapterIndex();
}

export async function getChapterBySlug(
  chapterSlug: string,
): Promise<ChapterSummary | undefined> {
  const chapters = await getChapters();
  return chapters.find((chapter) => chapter.slug === chapterSlug);
}

export async function getLessonBySlug(
  chapterSlug: string,
  lessonSlug: string,
): Promise<LessonSummary | undefined> {
  const chapter = await getChapterBySlug(chapterSlug);
  return chapter?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export async function getLessonByType(
  chapterSlug: string,
  lessonType: LessonSummary["lessonType"],
): Promise<LessonSummary | undefined> {
  const chapter = await getChapterBySlug(chapterSlug);
  return chapter?.lessons.find((lesson) => lesson.lessonType === lessonType);
}

export async function getAdjacentLessons(
  chapterSlug: string,
  lessonSlug: string,
): Promise<{
  next?: LessonSummary;
  previous?: LessonSummary;
}> {
  const chapter = await getChapterBySlug(chapterSlug);

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

export async function compileLesson(
  chapterSlug: string,
  lessonSlug: string,
): Promise<LessonModule | undefined> {
  const lesson = await getLessonBySlug(chapterSlug, lessonSlug);

  if (!lesson) {
    return undefined;
  }

  const source = await readFile(lesson.sourcePath, "utf8");
  const compiled = await compileMDX<LessonMetadata>({
    source,
    components: getLessonMDXComponents(),
    options: {
      parseFrontmatter: true,
    },
  });

  const validatedFrontmatter = lessonMetadataSchema.parse(compiled.frontmatter);

  if (validatedFrontmatter.slug !== lesson.slug) {
    throw new Error(
      `Lesson metadata drift detected for "${lesson.slug}". Frontmatter does not match the indexed lesson record.`,
    );
  }

  return {
    content: compiled.content,
    frames: lesson.frames,
    lesson,
  };
}

export function getLessonHref(
  chapterSlug: string,
  lesson: LessonSummary,
): string {
  return buildLessonHref(chapterSlug, lesson);
}
