"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function getTranslatePos(el: Element) {
  const t = el.getAttribute("transform") ?? "";
  const m = t.match(/translate\(\s*([^,)]+)(?:,\s*([^)]+))?\s*\)/);
  return {
    x: m ? parseFloat(m[1]) : 0,
    y: m?.[2] ? parseFloat(m[2]) : 0,
  };
}

export function IntroLogo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const introBgRef = useRef<HTMLDivElement>(null);
  const lockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const introBg = introBgRef.current;
    const lockup = lockupRef.current;
    const heroBg = document.querySelector<HTMLElement>("[data-hero-bg]");

    if (!root || !introBg || !lockup) return;

    type LenisLike = { stop(): void; start(): void };
    const win = window as Window & { __lenis?: LenisLike };

    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      win.__lenis?.stop();
    };
    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      win.__lenis?.start();
    };

    const $heroBg = heroBg ? [heroBg] : [];

    gsap.set(root, { autoAlpha: 1 });
    gsap.set($heroBg, { opacity: 0 });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(root, { display: "none" });
      if (heroBg) gsap.set(heroBg, { clearProps: "opacity" });
      return;
    }

    lockScroll();

    let tl: gsap.core.Timeline | null = null;

    const runAnimation = (paths: SVGPathElement[]) => {
      // SVG viewBox: 8695 × 1460
      // y < 700 = top row (VISION), y >= 700 = bottom row (OF LUIS)
      const topRow = paths
        .filter((p) => getTranslatePos(p).y < 700)
        .sort((a, b) => getTranslatePos(a).x - getTranslatePos(b).x);

      const bottomRow = paths
        .filter((p) => getTranslatePos(p).y >= 700)
        .sort((a, b) => getTranslatePos(a).x - getTranslatePos(b).x);

      gsap.set([...topRow, ...bottomRow], { opacity: 0 });

      tl = gsap.timeline();
      tl
        .to({}, { duration: 0.2 })
        .to(topRow, {
          opacity: 1,
          duration: 0.28,
          stagger: { each: 0.09, from: "start" },
          ease: "power2.out",
        })
        .to(
          bottomRow,
          {
            opacity: 1,
            duration: 0.28,
            stagger: { each: 0.09, from: "start" },
            ease: "power2.out",
          },
          "-=0.15",
        )
        .to($heroBg, { opacity: 1, duration: 1.1, ease: "power2.out" }, "+=0.45")
        .to(introBg, { opacity: 0, duration: 1.1, ease: "power2.out" }, "<")
        .set(root, { autoAlpha: 0 })
        .call(() => {
          gsap.set(root, { display: "none" });
          if (heroBg) gsap.set(heroBg, { clearProps: "opacity" });
          unlockScroll();
        });
    };

    fetch("/images/logo/logobranco.svg")
      .then((r) => r.text())
      .then((svgText) => {
        if (!lockup) return;
        lockup.innerHTML = svgText;
        const svgEl = lockup.querySelector("svg");
        if (!svgEl) return;

        svgEl.removeAttribute("width");
        svgEl.removeAttribute("height");
        svgEl.setAttribute("viewBox", "0 0 8695 1460");
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgEl.style.cssText = "width:100%;height:auto;display:block;";

        runAnimation(Array.from(svgEl.querySelectorAll<SVGPathElement>("path")));
      })
      .catch(() => {
        lockup.innerHTML = `<img src="/images/logo/logobranco.svg" alt="" style="width:100%;height:auto;display:block;" />`;
        tl = gsap.timeline();
        tl
          .fromTo(
            lockup,
            { opacity: 0, clipPath: "inset(0 100% 0 0)" },
            { opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "power2.out" },
          )
          .to($heroBg, { opacity: 1, duration: 1.1, ease: "power2.out" }, "+=0.45")
          .to(introBg, { opacity: 0, duration: 1.1, ease: "power2.out" }, "<")
          .set(root, { autoAlpha: 0 })
          .call(() => {
            gsap.set(root, { display: "none" });
            if (heroBg) gsap.set(heroBg, { clearProps: "opacity" });
            unlockScroll();
          });
      });

    return () => {
      tl?.kill();
      unlockScroll();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="intro-logo pointer-events-none fixed inset-0 z-80 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div ref={introBgRef} className="absolute inset-0 bg-background" />
      <div ref={lockupRef} className="intro-logo__lockup relative" />
    </div>
  );
}
