type ErrorContext = {
  area: string;
  chapterSlug?: string;
  lessonSlug?: string;
  metadata?: Record<string, unknown>;
};

function serializeError(error: unknown) {
  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
      stack: error.stack,
    };
  }

  return {
    message: String(error),
    name: "UnknownError",
  };
}

function buildPayload(error: unknown, context: ErrorContext) {
  return {
    appEnv:
      process.env.NEXT_PUBLIC_APP_ENV ?? process.env.NODE_ENV ?? "unknown",
    context,
    error: serializeError(error),
    timestamp: new Date().toISOString(),
  };
}

export function reportServerError(error: unknown, context: ErrorContext) {
  console.error("[server_error]", JSON.stringify(buildPayload(error, context)));
}

export function reportClientError(error: unknown, context: ErrorContext) {
  console.error("[client_error]", JSON.stringify(buildPayload(error, context)));
}
