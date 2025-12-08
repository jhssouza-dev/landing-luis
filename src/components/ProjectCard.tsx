import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.behanceUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
          {project.tag}
        </p>
        <h3 className="mt-2 text-base font-medium md:text-lg">
          {project.title}
        </h3>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 text-cyan-400">
            Ver no Behance →
          </span>
        </div>
      </div>
    </a>
  )
}
