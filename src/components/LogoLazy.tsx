import { Suspense, lazy } from "react";

const LogoSvg = lazy(() => import("./LogoSvg"));

export function LogoLazy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Suspense fallback={<div style={{ width: 100, height: 40 }}>...</div>}>
      <LogoSvg {...props} />
    </Suspense>
  );
}