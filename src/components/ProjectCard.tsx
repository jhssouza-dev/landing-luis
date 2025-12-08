import type { Project } from "../data/projects";

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
      <div className="text-center px-6 md:px-1 mt-10 mb-10">
        <p className="text-base uppercase tracking-[0.2em] text-(--text-soft)">
          {project.tag}
        </p>

        <h3 className="mt-2 text-xl md:text-6xl font-medium text-(--text)">
          {project.title}
        </h3>
      </div>

      {/* TODAS AS IMAGENS DO PROJETO */}
      {project.images.map((src, index) => (
        <div
          key={index}
          className="w-full h-[85vh] md:h-[60vh] overflow-hidden mb-10"
        >
          <img
            src={src}
            alt={`${project.title} - imagem ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      
    </a>
  );
}
