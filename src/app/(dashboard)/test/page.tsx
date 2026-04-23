import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { HealthCheck } from "./health-check";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function TesPage() {
  prefetch(trpc.health.queryOptions());
  return (
    <div>
      <HydrateClient>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-2xl font-bold">TRPC TEST PAGE</h1>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense fallback={<div>LOADING...</div>}>
              <HealthCheck />
            </Suspense>
          </ErrorBoundary>
        </div>
      </HydrateClient>
    </div>
  );
}
