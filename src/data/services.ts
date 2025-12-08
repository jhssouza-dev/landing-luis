export type Service = {
  id: string
  title: string
  description: string
  items?: string[]
}

export const services: Service[] = [
  {
    id: 'projeto-arquitetonico',
    title: 'Projeto arquitetônico',
    description:
      'Concepção e desenvolvimento de projetos residenciais contemporâneos, alinhados ao terreno, à luz natural e ao estilo de vida do cliente.',
    items: [
      'Estudo de layout e volumetria',
      'Plantas humanizadas',
      'Detalhamento para obra',
    ],
  },
  {
    id: 'interiores',
    title: 'Interiores',
    description:
      'Ambientes internos que combinam funcionalidade, conforto e estética, com foco em materiais, mobiliário e iluminação.',
    items: [
      'Conceito de interiores',
      'Definição de materiais e mobiliário',
      'Perspectivas internas em 3D',
    ],
  },
  {
    id: 'visualizacao-3d',
    title: 'Visualização 3D',
    description:
      'Imagens 3D de alta qualidade para escritórios, incorporadoras e construtoras apresentarem projetos com impacto.',
    items: [
      'Renderização fotorrealista',
      'Imagens externas e internas',
      'Suporte para material de venda',
    ],
  },
]
