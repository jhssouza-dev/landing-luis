"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const steps = gsap.utils.toArray<HTMLElement>(
        "[data-about-step]",
        section
      );
      if (steps.length < 2) return;

      const n = steps.length;
      const hold = 0.4;
      // (n-1) transitions + extra hold at end so last step breathes
      const totalDuration = (n - 1) * (1 + hold) + hold;

      gsap.set(steps.slice(1), { autoAlpha: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalDuration * 100}%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      // Each transition: current step exits up, next step enters from below
      let t = hold;
      steps.forEach((step, i) => {
        if (i < n - 1) {
          const next = steps[i + 1];
          tl.to(step, { autoAlpha: 0, y: -36, ease: "none", duration: 0.65 }, t);
          tl.fromTo(
            next,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, ease: "none", duration: 0.7 },
            t + 0.2
          );
          t += 1 + hold;
        }
      });

      ScrollTrigger.refresh();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative bg-surface"
      data-section="about"
      data-scene
    >
      {/* ── Desktop: pinned editorial scroll ── */}
      <div className="hidden h-svh overflow-hidden lg:flex">
        {/* Left column: image fixed while section is pinned */}
        <div
          className="relative h-full shrink-0"
          style={{ width: "40%" }}
        >
          {/* Image with right-edge fade via mask */}
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 58%, transparent 94%)",
              maskImage:
                "linear-gradient(to right, black 58%, transparent 94%)",
            }}
          >
            <Image
              src="/images/sobre/luis.jpg"
              alt="Retrato de Luis Fernando"
              fill
              sizes="40vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Bottom fade overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-60"
            style={{
              background: "linear-gradient(to bottom, transparent, #13161a)",
            }}
          />
        </div>

        {/* Right column: absolute-stacked text steps */}
        <div className="relative flex-1">
          {/* Step 1 – Intro */}
          <div
            data-about-step
            className="absolute inset-0 flex items-center px-14 xl:px-20"
          >
            <div className="max-w-lg">
              <p className="eyebrow">Sobre</p>
              <h2 className="display-type mt-6 text-6xl uppercase leading-[0.92] xl:text-7xl">
                Conceito,
                <br />
                Proporção
                <br />e Presença.
              </h2>
              <p className="mt-8 text-sm uppercase leading-relaxed tracking-[0.18em] text-muted">
                Arquitetura e imagem conduzidas com clareza, silêncio e
                precisão.
              </p>
            </div>
          </div>

          {/* Step 2 – Formação */}
          <div
            data-about-step
            className="absolute inset-0 flex items-center px-14 xl:px-20"
          >
            <div className="max-w-lg">
              <p className="eyebrow mb-8">Formação</p>
              <p className="display-type text-[2rem] leading-tight xl:text-[2.5rem]">
                Arquiteto formado pela Universidade Tiradentes, atuando em
                projetos de edificação e interiores de pequeno, médio e grande
                porte.
              </p>
            </div>
          </div>

          {/* Step 3 – Atuação */}
          <div
            data-about-step
            className="absolute inset-0 flex items-center px-14 xl:px-20"
          >
            <div className="max-w-lg">
              <p className="eyebrow mb-8">Atuação</p>
              <p className="display-type text-[2rem] leading-tight xl:text-[2.5rem]">
                Desenvolve projetos desde o estudo preliminar até o executivo,
                com experiência em documentação para o mercado imobiliário e
                escritórios de arquitetura.
              </p>
            </div>
          </div>

          {/* Step 4 – Experiência */}
          <div
            data-about-step
            className="absolute inset-0 flex items-center px-14 xl:px-20"
          >
            <div className="max-w-lg">
              <p className="eyebrow mb-8">Experiência</p>
              <p className="display-type text-[2rem] leading-tight xl:text-[2.5rem]">
                Participante de concursos de arquitetura, com envolvimento no
                desenvolvimento de projetos e diagramação de pranchas.
              </p>
            </div>
          </div>

          {/* Step 5 – Áreas de atuação */}
          <div
            data-about-step
            className="absolute inset-0 flex items-center px-14 xl:px-20"
          >
            <div>
              <p className="eyebrow mb-10">Áreas de Atuação</p>
              <div className="flex flex-col gap-5">
                {["Arquitetura", "Interiores", "Visualização 3D"].map(
                  (area) => (
                    <span
                      key={area}
                      className="display-type text-5xl uppercase leading-none xl:text-6xl"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: stacked, no pin ── */}
      <div className="section-y container-wide lg:hidden">
        <div
          className="image-frame mb-12 aspect-4/5 max-h-[70svh]"
          data-image-reveal
        >
          <Image
            src="/images/sobre/luis.jpg"
            alt="Retrato de Luis Fernando"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div data-reveal>
          <p className="eyebrow">Sobre</p>
          <h2 className="display-type mt-5 text-4xl uppercase leading-[0.95] sm:text-5xl">
            Conceito,
            <br />
            Proporção
            <br />e Presença.
          </h2>
          <p className="mt-6 text-sm uppercase leading-relaxed tracking-[0.18em] text-muted">
            Arquitetura e imagem conduzidas com clareza, silêncio e precisão.
          </p>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted/80">
            <p>
              Arquiteto formado pela Universidade Tiradentes, atuando em
              projetos de edificação e interiores de pequeno, médio e grande
              porte.
            </p>
            <p>
              Desenvolve projetos desde o estudo preliminar até o executivo,
              com experiência em documentação para o mercado imobiliário e
              escritórios de arquitetura.
            </p>
            <p>
              Participante de concursos de arquitetura, com envolvimento no
              desenvolvimento de projetos e diagramação de pranchas.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-[0.68rem] uppercase tracking-[0.26em] text-foreground/58">
            <span>Arquitetura</span>
            <span>Interiores</span>
            <span>Visualização 3D</span>
          </div>
        </div>
      </div>
    </section>
  );
}
