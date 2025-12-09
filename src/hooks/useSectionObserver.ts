import { useEffect, useState } from "react";

const SECTION_IDS = [
  "top",
  "projetos",
  "sobre",
  "processo",
  "depoimentos",
  "servicos",
  "contato",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useSectionObserver() {
  const [activeSection, setActiveSection] = useState<SectionId>("top");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;

        // pega a que está mais "alta" dentro da área observada
        const closestToTop = visible.reduce((prev, curr) => {
          const prevTop = prev.boundingClientRect.top;
          const currTop = curr.boundingClientRect.top;
          return currTop < prevTop ? curr : prev;
        });

        const id = closestToTop.target.id as SectionId;
        setActiveSection(id);
      },
      {
        threshold: 0, // qualquer interseção
        // faixa de 50% no meio da tela: quando a seção cruza essa faixa, ela vira ativa
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return { activeSection };
}
