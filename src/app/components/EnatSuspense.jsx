import { Suspense } from "react";
import { EnatLoading } from "app/components";

export default function EnatSuspense({ children }) {
  return <Suspense fallback={<EnatLoading />}>{children}</Suspense>;
}
