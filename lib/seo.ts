import type { Metadata } from "next";

export const site = {
  name: "Luis Fernando Arquitetura",
  url: "https://visionofluis.com.br",
  description:
    "Arquitetura, interiores e visualizacao 3D para projetos residenciais, comerciais e apresentacoes institucionais.",
};

type SeoInput = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = site.description,
  image = "/images/hero/hero2.webp",
  path = "/",
}: SeoInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.name}` : site.name;
  const url = `${site.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
  };
}
