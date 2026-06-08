"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsScene() {
  useEffect(() => {
    const pushScene = document.querySelector<HTMLElement>("[data-push-scene]");
    const logoLockup = document.querySelector<HTMLElement>(
      "[data-hero-logo] .intro-logo__lockup"
    );
    const panel = document.querySelector<HTMLElement>("[data-projects-panel]");
    const cards = gsap.utils.toArray<HTMLElement>("[data-catalog-card]");

    if (!pushScene || !logoLockup || !panel || cards.length < 2) return;

    const ctx = gsap.context(() => {
      // Cards 2-N start below — only card 1 visible while panel enters
      gsap.set(cards.slice(1), { y: "100vh" });

      const n = cards.length;
      // hold = extra scroll distance (in timeline units) the user must travel
      // before the next card starts — creates a brief pause on each card
      const hold = 0.2;
      // total = n phases (1 unit each) + (n-1) holds between them
      const totalDuration = n + (n - 1) * hold;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pushScene,
          start: "top top",
          end: `+=${totalDuration * 100}%`,
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
        },
      });

      // Phase 1 (t 0→1): panel covers hero from the right, logo exits left
      tl.fromTo(panel, { xPercent: 100 }, { xPercent: 0, ease: "none", duration: 1 }, 0);
      tl.to(logoLockup, { x: "-80vw", ease: "none", duration: 1 }, 0);

      // Phase 2+ (with holds): stacking catalog — gap in timeline = scrub pause
      let t = 1 + hold;
      cards.slice(1).forEach((card, i) => {
        const prev = cards[i];
        tl
          .to(card, { y: 0, ease: "none", duration: 1 }, t)
          .to(prev, { scale: 0.92, ease: "none", duration: 1 }, t);
        t += 1 + hold;
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return null;
}
