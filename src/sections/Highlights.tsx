import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function Highlights() {
  return (
    <section id="projetos" className="sr-section border-t border-white/5 py-16">
      <div className="page-container">
        {/* Cabeçalho da seção */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg uppercase tracking-[0.3em] text-slate-400">
              Portfólio
            </p>
          </div>
        </div>

        {/* Grid de projetos */}
        <div className="flex flex-col gap-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
        </div>
      </div>
    </section>
  );
}
