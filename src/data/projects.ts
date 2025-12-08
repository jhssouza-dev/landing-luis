export type Project = {
  id: string
  title: string
  tag: string
  imageUrl: string
  behanceUrl: string
}

export const projects: Project[] = [
  {
    id: 'mirror-house',
    title: 'THE MIRROR HOUSE',
    tag: 'Arquitetura & Visualização 3D',
    imageUrl: '/images/mirror-house.jpg',
    behanceUrl: 'https://www.behance.net/visionofluis', // troca pelo link específico
  },
  {
    id: 'the-cabin',
    title: 'THE CABIN',
    tag: 'Arquitetura & Visualização 3D',
    imageUrl: '/images/the-cabin.jpg',
    behanceUrl: 'https://www.behance.net/visionofluis',
  },
  {
    id: 'na-mata',
    title: 'NA MATA',
    tag: 'Arquitetura & Visualização 3D',
    imageUrl: '/images/na-mata.jpg',
    behanceUrl: 'https://www.behance.net/visionofluis',
  },
  {
    id: 'villa',
    title: 'THE VILLA',
    tag: 'Arquitetura & Visualização 3D',
    imageUrl: '/images/villa.jpg',
    behanceUrl: 'https://www.behance.net/visionofluis',
  },
]
