"use client";

import { useEffect } from "react";
import { reportClientError } from "@/lib/observability";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportClientError(error, {
      area: "app_route_error",
      metadata: {
        digest: error.digest,
      },
    });
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="status-screen">
          <p className="ui-eyebrow">Something broke</p>
          <h1>We hit a route error.</h1>
          <p>{error.message}</p>
          <button
            className="ui-button ui-button-primary ui-button-md"
            onClick={reset}
            type="button"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
