import { useEffect, useState } from "react";
import type { SectionId } from "../hooks/useSectionObserver";
import { projects } from "../features/components/data/projects";

// Header agora aceita a prop activeSection
type HeaderProps = {
  activeSection: SectionId;
};

export function Header({ activeSection }: HeaderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    }
  }, []);

  // Header aparece quando:
  const headerVisible = isMobile || isHovered || menuOpen;

  const scrollToSection = (id: SectionId) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // FECHAR MENU
  setMenuOpen(false);
  setIsHovered(false);
};

const scrollToProject = (projectId: string) => {
  const el = document.getElementById(`project-${projectId}`);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // FECHAR MENU imediatamente
  setMenuOpen(false);
  setIsHovered(false);
};

  return (
    <>
      {/* HEADER  */}
      <header
        className="fixed inset-x-0 top-0 z-56 h-14 pointer-events-auto"
        onMouseEnter={() => {
          if (!isMobile) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (!menuOpen && !isMobile) setIsHovered(false);
        }}
      >
        <div
          className={
            "flex h-full items-center justify-between px-4 md:px-8 transition-all duration-600 " +
            (headerVisible
              ? "bg-gray-50/80 backdrop-blur-md opacity-100"
              : "bg-transparent opacity-0")
          }
        >
          {/* Logo / nome */}
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-2"
          >
            <div className="flex h-28 w-28 items-center justify-center">
              <img
                src="/images/logo/logopreto.svg"
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>
          </button>

          {/* Botão hambúrguer */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-black/70 text-slate-100 transition hover:border-slate-400"
          >
            <span
              className={
                "absolute h-[1.5px] w-5 bg-slate-100 transition-transform duration-400 " +
                (menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2")
              }
            />
            <span
              className={
                "absolute h-[1.5px] w-5 bg-slate-100 transition-opacity duration-300 " +
                (menuOpen ? "opacity-0" : "opacity-100")
              }
            />
            <span
              className={
                "absolute h-[1.5px] w-5 bg-slate-100 transition-transform duration-400 " +
                (menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2")
              }
            />
          </button>
        </div>
      </header>

      {/* OVERLAY FULLSCREEN DO MENU */}
      <div
        className={
          "fixed inset-0 z-60 bg-[#050505]/95 backdrop-blur-xl transition-opacity duration-800 " +
          (menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
      >
        <div className="flex h-full flex-col">
          {/* topo do overlay */}
          <div className="flex h-14 items-center justify-between px-4 md:px-8">
            <button
              onClick={() => scrollToSection("top")}
              className="flex items-center gap-3"
            >
              <div className="flex h-28 w-28 items-center justify-center">
                <img
                  src="/images/logo/logobranco.svg"
                  alt="logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-slate-100"
            >
              Fechar
            </button>
          </div>

          {/* links do menu (tela cheia) */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-3xl md:text-4xl">
            {/* PROJETOS + SUBLISTA */}
            <div className="flex flex-col items-center gap-3">
              {/* Botão principal PROJETOS */}
              <button
                className={
                  "text-left uppercase transition-colors " +
                  (activeSection === "projetos"
                    ? "text-gray-400"
                    : "text-slate-100 hover:text-gray-400")
                }
                onClick={() => scrollToSection("projetos")}
              >
                Projetos
              </button>

              {/* SUBLISTA com título de cada PROJETO */}
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

            {/* SOBRE */}
            <button
              className={
                "text-left uppercase transition-colors " +
                (activeSection === "sobre"
                  ? "text-gray-400"
                  : "text-slate-100 hover:text-gray-400")
              }
              onClick={() => scrollToSection("sobre")}
            >
              Sobre
            </button>

            {/* PROCESSO */}
            <button
              className={
                "text-left uppercase transition-colors " +
                (activeSection === "processo"
                  ? "text-gray-400"
                  : "text-slate-100 hover:text-gray-400")
              }
              onClick={() => scrollToSection("processo")}
            >
              Processo
            </button>

            {/* DEPOIMENTOS */}
            <button
              className={
                "text-left uppercase transition-colors " +
                (activeSection === "depoimentos"
                  ? "text-gray-400"
                  : "text-slate-100 hover:text-gray-400")
              }
              onClick={() => scrollToSection("depoimentos")}
            >
              Depoimentos
            </button>

            {/* SERVIÇOS */}
            <button
              className={
                "text-left uppercase transition-colors " +
                (activeSection === "servicos"
                  ? "text-gray-400"
                  : "text-slate-100 hover:text-gray-400")
              }
              onClick={() => scrollToSection("servicos")}
            >
              Serviços
            </button>

            {/* CONTATO */}
            <button
              className={
                "text-left uppercase transition-colors " +
                (activeSection === "contato"
                  ? "text-gray-400"
                  : "text-slate-100 hover:text-gray-400")
              }
              onClick={() => scrollToSection("contato")}
            >
              Contato
            </button>
          </nav>

          {/* rodapé do overlay */}
          <div className="flex items-center justify-between px-8 py-6 text-[0.7rem] text-slate-500">
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
