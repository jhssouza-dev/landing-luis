// src/pages/ProjectPage.tsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../features/components/data/projects";
import type { Project } from "../features/components/data/projects";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

type RouteParams = {
  id?: string;
};

export function ProjectPage() {
  const { id } = useParams<RouteParams>();

  // garantir que a página sempre abra no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project: Project | undefined = projects.find(
    (project) => project.id === id
  );

  // caso não encontre o projeto
  if (!project) {
    return (
      <div className="min-h-screen bg-(--bg) text-(--text) flex flex-col">
        <header>
          <div className="page-container flex items-center justify-between py-4 text-xs md:text-sm text-(--text-soft)">
            <Link to="/" className="hover:text-(--accent)">
              ← Voltar para o site
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold">Projeto não encontrado.</p>
            <Link
              to="/"
              className="text-sm text-(--accent) underline underline-offset-4"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // 🔥 GERAR LINHAS DINÂMICAS: 2 imagens → 1 imagem → 2 → 1 → ...
  const imageRows: { type: "pair" | "single"; images: string[] }[] = [];
  if (project.images && project.images.length > 0) {
    let i = 0;
    let usePair = true;

    while (i < project.images.length) {
      if (usePair && i + 1 < project.images.length) {
        imageRows.push({
          type: "pair",
          images: [project.images[i], project.images[i + 1]],
        });
        i += 2;
      } else {
        imageRows.push({
          type: "single",
          images: [project.images[i]],
        });
        i += 1;
      }
      usePair = !usePair;
    }
  }

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) flex flex-col">
      {/* topo simples da página de projeto */}
      <header className="fixed inset-x-0 top-2 md:top-4 lg:top-6 z-50 h-14 pointer-events-none">
        <div className="pointer-events-auto flex h-full items-center justify-between px-4 sm:px-6 md:px-10">
          <Link
            to="/"
            className="flex h-16 w-16 items-center justify-center cursor-pointer"
          >
            <img
              src="/images/logo/logoheaderbranco.svg"
              className="h-full w-full object-contain"
              alt=""
            />
          </Link>

          <Link
            to="/#projetos"
            className="
    text-white/80 hover:text-white 
    text-xs md:text-sm
    uppercase tracking-[0.25em]
    flex items-center gap-2
  "
          >
            <span className="text-white text-base"></span>
            Back
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* bloco de texto do projeto */}
        <section className="w-full px-6 md:px-16 lg:px-24 pt-20 md:pt-28 pb-10 ">
          <div className="max-w-4xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-(--text-soft)">
              {project.tag}
            </p>

            <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-(--text)">
              {project.title}
            </h1>

            {project.description && (
              <p className="mt-6 text-base md:text-lg text-(--text-soft)">
                {project.description}
              </p>
            )}
          </div>
        </section>

        {/* 🔥 GALERIA DE IMAGENS DINÂMICA */}
        <section className="w-full px-6 md:px-16 lg:px-24 pb-16 space-y-6 md:space-y-10">
          {imageRows.map((row, rowIndex) => {
            if (row.type === "pair") {
              return (
                <div key={rowIndex} className="grid gap-6 md:grid-cols-2">
                  {row.images.map((src, i) => (
                    <div key={src + i} className="w-full overflow-hidden ">
                      <img
                        src={src}
                        alt={`${project.title} - imagem ${rowIndex + 1}.${
                          i + 1
                        }`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              );
            }

            return row.images.map((src, i) => (
              <div key={src + i} className="w-full overflow-hidden ">
                <img
                  src={src}
                  alt={`${project.title} - imagem ${rowIndex + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ));
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
