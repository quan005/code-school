import { notFound } from "next/navigation";
import { Panel } from "@/components/ui/panel";
import { getChapterBySlug } from "@/lib/curriculum";

export default async function MasteryPage({
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
    <Panel eyebrow="Mastery" title={`${chapter.title} mastery`}>
      <p>
        This route scaffold is ready for mastery checks and unlock logic in
        later epics.
      </p>
    </Panel>
  );
}
