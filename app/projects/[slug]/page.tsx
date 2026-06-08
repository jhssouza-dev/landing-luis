import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Projeto não encontrado",
      path: `/projects/${slug}`,
    });
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    image: project.cover,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20">
      <section className="container-wide section-y pb-12">
        <Link
          href="/#projetos"
          className="inline-flex border-b border-foreground/50 pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted transition hover:text-foreground"
        >
          Voltar aos projetos
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 className="display-serif mt-5 max-w-5xl text-balance text-6xl leading-[0.92] md:text-8xl">
              {project.title}
            </h1>
          </div>

          <div className="grid gap-6 border-l border-line pl-6" data-reveal>
            <p className="text-xl leading-relaxed text-foreground/76">
              {project.description}
            </p>
            <dl className="grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="eyebrow">Ano</dt>
                <dd className="mt-2 text-foreground/78">{project.year}</dd>
              </div>
              <div>
                <dt className="eyebrow">Escopo</dt>
                <dd className="mt-2 text-foreground/78">{project.scope}</dd>
              </div>
              <div>
                <dt className="eyebrow">Local</dt>
                <dd className="mt-2 text-foreground/78">{project.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="container-wide">
        <div className="image-frame aspect-[16/9]" data-image-reveal>
          <Image
            src={project.cover}
            alt={`Imagem principal do projeto ${project.title}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="container section-y">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
          <p className="eyebrow" data-reveal>
            Narrativa
          </p>
          <p
            className="display-serif text-balance text-3xl leading-tight text-foreground/86 md:text-5xl"
            data-reveal
          >
            {project.narrative}
          </p>
        </div>
      </section>

      <section className="container-wide pb-20">
        <div className="grid gap-6">
          {project.images.map((image, index) => (
            <div
              key={image}
              className={`image-frame ${
                index % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/5] md:aspect-[3/2]"
              }`}
              data-image-reveal
            >
              <Image
                src={image}
                alt={`${project.title} - imagem ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
