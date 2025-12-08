import { useEffect, useState } from 'react'

const SECTION_IDS = ['top', 'projetos', 'sobre', 'servicos', 'contato'] as const
export type SectionId = (typeof SECTION_IDS)[number]

export function useSectionObserver() {
  const [activeSection, setActiveSection] = useState<SectionId>('top')

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // pega a seção mais visível
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections[0]) {
          const id = visibleSections[0].target.id as SectionId
          setActiveSection(id)
        }
      },
      {
        threshold: 0.3, // 30% visível já conta
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return { activeSection }
}
