export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  scope: string;
  location: string;
  cover: string;
  images: string[];
  description: string;
  narrative: string;
};

export const projects: Project[] = [
  {
    slug: "mirror-house",
    title: "The Mirror House",
    eyebrow: "Residencial contemporaneo",
    year: "2025",
    scope: "Arquitetura, interiores e visualizacao 3D",
    location: "Brasil",
    cover: "/images/projetos/mirror/01.webp",
    images: [
      "/images/projetos/mirror/01.webp",
      "/images/projetos/mirror/02.webp",
      "/images/projetos/mirror/03.webp",
    ],
    description:
      "Estudo residencial marcado por reflexos, planos horizontais e uma relacao precisa entre interior, paisagem e luz natural.",
    narrative:
      "O projeto trabalha a casa como uma sequencia de enquadramentos. Materiais sobrios, volumes limpos e grandes aberturas ajudam a construir uma presenca silenciosa, com foco na experiencia espacial e na leitura das proporcoes.",
  },
  {
    slug: "the-cabin",
    title: "The Cabin",
    eyebrow: "Arquitetura de refugio",
    year: "2025",
    scope: "Conceito arquitetonico e imagens finais",
    location: "Brasil",
    cover: "/images/projetos/cabin/01.webp",
    images: [
      "/images/projetos/cabin/01.webp",
      "/images/projetos/cabin/02.webp",
      "/images/projetos/cabin/03.webp",
    ],
    description:
      "Uma proposta de refugio compacta e atmosferica, desenhada para valorizar escala humana, textura e contato direto com o entorno.",
    narrative:
      "A linguagem combina estrutura aparente, tons naturais e composicoes de luz que reforcam a ideia de abrigo. A visualizacao foi conduzida para comunicar conforto, silencio e permanencia.",
  },
  {
    slug: "na-mata",
    title: "Na Mata",
    eyebrow: "Casa e paisagem",
    year: "2025",
    scope: "Arquitetura, atmosfera e visualizacao",
    location: "Brasil",
    cover: "/images/projetos/namata/01.webp",
    images: [
      "/images/projetos/namata/01.webp",
      "/images/projetos/namata/02.webp",
      "/images/projetos/namata/03.webp",
    ],
    description:
      "Projeto integrado ao verde, com volumes discretos e uma narrativa visual voltada para sombra, profundidade e materialidade.",
    narrative:
      "A implantacao valoriza a relacao entre arquitetura e vegetacao. Nas imagens, a luz filtrada e a presenca da paisagem ajudam a apresentar uma arquitetura mais sensorial, menos impositiva e mais conectada ao lugar.",
  },
  {
    slug: "yard",
    title: "Yard House",
    eyebrow: "Residencia terrea",
    year: "2025",
    scope: "Projeto residencial e renderizacao",
    location: "Brasil",
    cover: "/images/projetos/yard/01.webp",
    images: [
      "/images/projetos/yard/01.webp",
      "/images/projetos/yard/02.webp",
      "/images/projetos/yard/03.webp",
    ],
    description:
      "Casa organizada em torno do vazio, com areas de convivencia abertas e uma composicao que privilegia fluidez e permanencia.",
    narrative:
      "O patio assume papel central na experiencia do projeto. A leitura visual destaca percursos, areas de estar e continuidade entre dentro e fora, com uma atmosfera clara e institucional.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
