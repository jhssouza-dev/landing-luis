export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "arquitetura",
    title: "Projeto arquitetonico",
    description:
      "Desenvolvimento de propostas residenciais e comerciais com leitura precisa de programa, implantacao, volumetria e rotina de uso.",
    items: ["Estudo preliminar", "Layout e volumetria", "Detalhamento para obra"],
  },
  {
    id: "interiores",
    title: "Interiores",
    description:
      "Ambientes conduzidos com criterio de proporcao, materialidade, iluminacao e continuidade entre arquitetura, mobiliario e experiencia.",
    items: ["Conceito de interiores", "Materiais e mobiliario", "Perspectivas internas"],
  },
  {
    id: "visualizacao-3d",
    title: "Visualizacao 3D",
    description:
      "Imagens de alto impacto para apresentar projetos com clareza, atmosfera e valor comercial em reunioes, concursos e lancamentos.",
    items: ["Renders externos e internos", "Narrativa visual", "Material para apresentacao"],
  },
];
