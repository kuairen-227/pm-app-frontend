"use client";

import { Suspense, use } from "react";
import { env } from "@/shared/config/env";

const mockingEnabledPromise =
  typeof window !== "undefined" && env.NEXT_PUBLIC_MOCK_ENABLED
    ? import("@/mocks/browser").then(async ({ worker }) => {
        await worker.start({
          onUnhandledRequest(request, print) {
            if (request.url.includes("_next")) {
              return;
            }
            print.warning();
          },
        });

        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export function MswBrowserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MswBrowserProviderWrapper>{children}</MswBrowserProviderWrapper>
    </Suspense>
  );
}

function MswBrowserProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);
  return children;
}
