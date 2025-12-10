// src/features/components/ProjectSlide.tsx
import type { Project } from "./data/projects";
import { useFadeIn } from "../../hooks/useFadeIn";
import { Link } from "react-router-dom"; //

type ProjectSlideProps = {
  project: Project;
  src: string;
  index: number;
  anchorId?: string;
};

export function ProjectSlide({
  project,
  src,
  index,
  anchorId,
}: ProjectSlideProps) {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      id={anchorId}
      className={`
        w-full min-h-screen
        flex flex-col md:flex-row
        items-center
        px-6 md:px-16 lg:px-24
        pt-16 pb-0
        gap-10 md:gap-20
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* COLUNA ESQUERDA – IMAGEM (CLIQUE LEVA PRO BEHANCE) */}
      <Link
        to={`/projetos/${project.id}`}
        className="block w-full md:w-1/2 h-[50vh] md:h-[80vh] overflow-hidden"
      >
        <img
          src={src}
          alt={`${project.title} - imagem ${index + 1}`}
          className="w-full h-full object-cover object-center"
        />
      </Link>

      {/* COLUNA DIREITA – TEXTO */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
        <p className="mb-6 text-sm md:text-base uppercase tracking-[0.25em] text-(--text-soft)">
          {project.tag}
        </p>

        <h3 className="text-2xl md:text-4xl lg:text-5xl leading-tight text-(--text)">
          {project.title}
        </h3>

        {project.description && (
          <p className="mt-8 text-base md:text-lg text-(--text-soft)">
            {project.description}
          </p>
        )}
        <Link
          to={`/projetos/${project.id}`}
          className="
      mt-6 inline-block
      text-xs md:text-sm uppercase tracking-[0.25em]
      text-gray-200
      hover:text-gray-400
      font-semibold
    "
        >
          Ver projeto
        </Link>
      </div>
    </section>
  );
}
