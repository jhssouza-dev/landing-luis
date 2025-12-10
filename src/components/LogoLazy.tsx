import { Suspense, lazy, useEffect, useState } from "react";

const LogoSvg = lazy(() => import("./LogoSvg"));

// tempo total de um ciclo (animação + pausa) em ms
// pode ajustar esse valor se sua animação for mais longa
const LOOP_INTERVAL_MS = 7000; // 3 segundos

export function LogoLazy(props: React.SVGProps<SVGSVGElement>) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // força o remount do LogoSvg → animação do Framer Motion recomeça
      setKey((prev) => prev + 1);
    }, LOOP_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <Suspense fallback={null}>
      <LogoSvg key={key} {...props} />
    </Suspense>
  );
}
