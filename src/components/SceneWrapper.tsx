"use client";

import { Suspense, lazy } from "react";

const GlobalScene = lazy(() => import("@/components/GlobalScene"));

export default function SceneWrapper() {
  return (
    <Suspense fallback={null}>
      <GlobalScene />
    </Suspense>
  );
}
