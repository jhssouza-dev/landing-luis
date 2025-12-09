import type { Project } from "./data/projects";
import { ProjectSlide } from "./ProjectSlide";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      {project.images.map((src, index) => (
        <ProjectSlide
          key={index}
          project={project}
          src={src}
          index={index}
        />
      ))}
    </>
  );
}
