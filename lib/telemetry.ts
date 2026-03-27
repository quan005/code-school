import { z } from "zod";

const telemetryEventSchema = z.discriminatedUnion("eventName", [
  z.object({
    eventName: z.literal("lesson_status_updated"),
    chapterSlug: z.string().min(1),
    lessonSlug: z.string().min(1),
    status: z.enum(["not_started", "in_progress", "completed"]),
    studentProfileId: z.string().min(1),
  }),
  z.object({
    eventName: z.literal("practice_run"),
    chapterSlug: z.string().min(1),
    lessonSlug: z.string().min(1),
    passedAll: z.boolean(),
    passedCount: z.number().int().nonnegative(),
    studentProfileId: z.string().min(1),
    totalCount: z.number().int().nonnegative(),
  }),
]);

export type MinimalTelemetryEvent = z.infer<typeof telemetryEventSchema>;

function telemetryEnabled(): boolean {
  return process.env.ENABLE_MINIMAL_TELEMETRY === "true";
}

export function trackMinimalTelemetryEvent(input: MinimalTelemetryEvent) {
  const event = telemetryEventSchema.parse(input);

  if (!telemetryEnabled()) {
    return;
  }

  console.info("[telemetry]", JSON.stringify(event));
}

export const minimalTelemetryPolicy = {
  deniedData: [
    "chat messages",
    "student-written reflections",
    "raw code snapshots",
    "public profile views",
    "precise location data",
  ],
  eventNames: ["lesson_status_updated", "practice_run"],
  note: "Telemetry is disabled by default and only logs allowlisted learning-product events when ENABLE_MINIMAL_TELEMETRY=true.",
} as const;
