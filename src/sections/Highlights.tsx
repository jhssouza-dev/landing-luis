import { projects } from "../features/components/data/projects";
import { ProjectCard } from "../features/components/ProjectCard";

export function Highlights() {
  return (
    <section id="projetos" className=" py-16">
      {/* Cabeçalho */}
      <div className="page-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="text-lg uppercase tracking-[0.3em] text-slate-400">
            Portfólio
          </p>
        </div>
      </div>

      {/* TODOS OS PROJETOS, CADA IMAGEM = TELA INTEIRA */}
      <div className="flex flex-col">
        
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
         <div className="pointer-events-none absolute inset-0 bg-black/20" />
      </div>
      
    </section>
  );
}
