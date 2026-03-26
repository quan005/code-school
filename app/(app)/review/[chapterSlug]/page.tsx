import { notFound } from "next/navigation";
import { Panel } from "@/components/ui/panel";
import { getChapterBySlug } from "@/lib/curriculum";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);

  if (!chapter) {
    notFound();
  }

  return (
    <Panel eyebrow="Review" title={`${chapter.title} review`}>
      <p>
        This route scaffold is ready for review cards, recall prompts, and
        spaced practice.
      </p>
    </Panel>
  );
}
