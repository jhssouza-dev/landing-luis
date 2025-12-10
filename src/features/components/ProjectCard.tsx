// src/features/components/ProjectCard.tsx
import type { Project } from "./data/projects";
import { ProjectSlide } from "./ProjectSlide";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  if (!project.images.length) return null;

  return (
    <ProjectSlide
      project={project}
      src={project.images[0]}      // só a primeira imagem no highlight
      index={0}
      anchorId={`project-${project.id}`}  
    />
  );
}