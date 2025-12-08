import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

export function Highlights() {
  return (
    <section
      id="projetos"
      className="sr-section border-t border-white/5 py-16"
    >
      <div className="page-container">
        {/* Cabeçalho da seção */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Portfólio
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Projetos em destaque
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-base">
              Uma seleção de projetos autorais e visualizações 3D desenvolvidos
              por Luís Fernando.
            </p>
          </div>

          <a
            href="https://www.behance.net/visionofluis"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800/70"
          >
            Ver portfólio completo
          </a>
        </div>

        {/* Grid de projetos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
