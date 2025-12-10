// src/features/components/ProjectCard.tsx
import { ProjectSlide } from "./ProjectSlide";
import type { Project } from "./data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="w-full">
      {/* Apenas UMA imagem no destaque */}
      {project.images.length > 0 && (
        <ProjectSlide
          project={project}
          src={project.images[0]}
          index={0}
        />
      )}
    </div>
  );
}