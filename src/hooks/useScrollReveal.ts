import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 900,
      easing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      origin: "bottom",
      reset: false,
      viewFactor: 0.01,
    });

    sr.reveal(".sr-section", {
      interval: 120,
    });

    return () => {
      sr.destroy();
    };
  }, []);
}
