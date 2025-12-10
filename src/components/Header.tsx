import { useState } from "react";
import type { SectionId } from "../hooks/useSectionObserver";
import { projects } from "../features/components/data/projects";

type HeaderProps = {
  activeSection: SectionId;
};

export function Header({ activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const scrollToProject = (projectId: string) => {
    const el = document.getElementById(`project-${projectId}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  // HAMBURGER + X PERFEITO
  const Hamburger = ({ white = false }) => (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Menu"
      className="relative w-8 h-8 flex items-center justify-center"
    >
      {/* Linha 1 */}
      <span
        className={`
        absolute block h-0.5 w-6 rounded
        transition-all duration-500 ease-in-out
        ${white ? "bg-white" : "bg-slate-100"}
        ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
      `}
      />

      {/* Linha 2 */}
      <span
        className={`
        absolute block h-0.5 w-6 rounded 
        transition-all duration-300 ease-in-out
        ${white ? "bg-white" : "bg-slate-100"}
        ${menuOpen ? "opacity-0" : "opacity-100"}
      `}
      />

      {/* Linha 3 */}
      <span
        className={`
        absolute block h-0.5 w-6 rounded
        transition-all duration-500 ease-in-out
        ${white ? "bg-white" : "bg-slate-100"}
        ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
      `}
      />
    </button>
  );

  return (
    <>
      {/* HEADER FIXO */}
      <header className="fixed inset-x-0 top-2 md:top-4 lg:top-6 z-50 h-14 pointer-events-none">
        <div className="pointer-events-auto flex h-full items-center justify-between px-4 sm:px-6 md:px-10">
          {/* LOGO */}
          <button onClick={() => scrollToSection("top")}>
            <div className="flex h-32 w-32 items-center justify-center">
              <img
                src="/images/logo/logobranco.svg"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </button>

          {/* HAMBURGER */}
          <Hamburger white />
        </div>
      </header>

      {/* MENU FULLSCREEN */}
      <div
        className={
          "fixed inset-0 z-60 bg-[#050505]/95 backdrop-blur-xl transition-opacity duration-500 " +
          (menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
      >
        <div className="flex h-full flex-col">
          {/* TOPO DO OVERLAY — AGORA 100% IGUAL AO HEADER */}
          <div className="fixed inset-x-0 top-2 md:top-4 lg:top-6 h-14 z-60 flex items-center justify-between px-4 sm:px-6 md:px-10">
            {/* LOGO */}
            <button onClick={() => scrollToSection("top")}>
              <div className="flex h-32 w-32 items-center justify-center">
                <img
                  src="/images/logo/logobranco.svg"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </button>

            {/* X (Hamburger aberto) */}
            <Hamburger white />
          </div>

          {/* NAV */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-3xl md:text-4xl mt-14">
            {/* PROJETOS */}
            <div className="flex flex-col items-center gap-3">
              <button
                className={`uppercase transition-colors ${
                  activeSection === "projetos"
                    ? "text-gray-400"
                    : "text-slate-100 hover:text-gray-400"
                }`}
                onClick={() => scrollToSection("projetos")}
              >
                Projetos
              </button>

              <div className="flex flex-col gap-2 text-base md:text-lg text-slate-400">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => scrollToProject(project.id)}
                    className="uppercase tracking-[0.18em] hover:text-gray-200 transition-colors"
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>

            {/* RESTO DOS LINKS */}
            {["sobre", "processo", "depoimentos", "servicos", "contato"].map(
              (id) => (
                <button
                  key={id}
                  className={`uppercase transition-colors ${
                    activeSection === id
                      ? "text-gray-400"
                      : "text-slate-100 hover:text-gray-400"
                  }`}
                  onClick={() => scrollToSection(id as SectionId)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              )
            )}
          </nav>

          {/* FOOTER DO MENU */}
          <div className="flex items-center justify-between px-6 py-6 text-[0.7rem] text-slate-500">
            <span>© {new Date().getFullYear()} Luís Fernando</span>
            <span className="hidden md:inline">
              Arquitetura, interiores & visualização 3D
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
