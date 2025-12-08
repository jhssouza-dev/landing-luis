import type { Project } from "../data/projects";
import { useFadeIn } from "../hooks/useFadeIn";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.behanceUrl}
      target="_blank"
      rel="noreferrer"
      className="block"
    >
      <div className="text-center px-6 md:px-1 mt-10">
              <p className="text-base uppercase tracking-[0.2em] text-(--text-soft)">
                {project.tag}
              </p>

              <h3 className="mt-2 text-xl md:text-6xl font-medium text-(--text) mb-10">
                {project.title}
              </h3>
            </div>
      {/* TODAS AS IMAGENS DO PROJETO */}
      {project.images.map((src, index) => {
        const { ref, visible } = useFadeIn();

        return (
          
          <div
            key={index}
            ref={ref}
            className={`
              w-full h-[85vh] md:h-[120vh] overflow-hidden mb-10
              transition-all duration-1200 ease-out
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            
            <img
              src={src}
              alt={`${project.title} - imagem ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        );
      })}
    </a>
  );
}
