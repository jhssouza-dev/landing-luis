export type Project = {
  description: any;
  id: string;
  title: string;
  tag: string;
  images: string[];
  behanceUrl: string;
};

export const projects: Project[] = [
  {
    id: "mirror-house",
    title: "THE MIRROR HOUSE",
    tag: "Arquitetura & Visualização 3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/images/projetos/mirror/01.webp",
      "/images/projetos/mirror/02.webp",
      "/images/projetos/mirror/03.webp",
    ],
    behanceUrl: "https://www.behance.net/visionofluis", // troca pelo link específico
  },
  {
    id: "the-cabin",
    title: "THE CABIN",
    tag: "Arquitetura & Visualização 3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/images/projetos/cabin/01.webp",
      "/images/projetos/cabin/02.webp",
      "/images/projetos/cabin/03.webp",
    ],
    behanceUrl: "https://www.behance.net/visionofluis",
  },
  {
    id: "na-mata",
    title: "NA MATA",
    tag: "Arquitetura & Visualização 3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     images: [
      "/images/projetos/namata/01.webp",
      "/images/projetos/namata/02.webp",
      "/images/projetos/namata/03.webp",
    ],
    behanceUrl: "https://www.behance.net/visionofluis",
  },
  {
    id: "yard",
    title: "YARD HOUSE",
    tag: "Arquitetura & Visualização 3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
     images: [
      "/images/projetos/yard/01.webp",
      "/images/projetos/yard/02.webp",
      "/images/projetos/yard/03.webp",
    ],
    behanceUrl: "https://www.behance.net/visionofluis",
  },
];
