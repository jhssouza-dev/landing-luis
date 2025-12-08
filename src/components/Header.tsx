import { useEffect, useState } from "react";

type SectionId = "top" | "projetos" | "sobre" | "servicos" | "contato";

export function Header() {
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
    setMenuOpen(false);
  };

  return (
    <>
      {/* HEADER fixo, colado no topo */}
      <header
        className="fixed inset-x-0 top-0 z-[56] h-14 pointer-events-auto"
        onMouseEnter={() => {
          if (!isMobile) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (!menuOpen && !isMobile) setIsHovered(false);
        }}
      >
        <div
          className={
            "flex h-full items-center justify-between px-4 md:px-8 transition-all duration-300 " +
            (headerVisible
              ? "bg-black/60 backdrop-blur-md opacity-100"
              : "bg-transparent opacity-0")
          }
        >
          {/* Logo / nome */}
          <button
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-2"
          >
            {/* BOLINHA COM IMAGEM DENTRO 
            <div className="flex h-21 w-21 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-300">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-sm font-medium text-white">
              Luís Fernando
            </span>*/}
          </button>

          {/* Botão hambúrguer */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-black/70 text-slate-100 transition hover:border-slate-400"
          >
            {/* ícone hamburguer animado */}
            <span
              className={
                "absolute h-[1.5px] w-5 bg-slate-100 transition-transform duration-200 " +
                (menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2")
              }
            />
            <span
              className={
                "absolute h-[1.5px] w-5 bg-slate-100 transition-opacity duration-150 " +
                (menuOpen ? "opacity-0" : "opacity-100")
              }
            />
            <span
              className={
                "absolute h-[1.5px] w-5 bg-slate-100 transition-transform duration-200 " +
                (menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2")
              }
            />
          </button>
        </div>
      </header>

      {/* OVERLAY FULLSCREEN DO MENU */}
      <div
        className={
          "fixed inset-0 z-[60] bg-[#050816]/95 backdrop-blur-xl transition-opacity duration-300 " +
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
              className="flex items-center gap-2"
            >
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-300" />
              <span className="text-sm font-medium text-white">
                Luís Fernando
              </span>
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
          <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-3xl font-medium text-slate-100 md:text-4xl">
            <button
              className="mb-4 text-left hover:text-cyan-400"
              onClick={() => scrollToSection("projetos")}
            >
              Projetos
            </button>
            <button
              className="mb-4 text-left hover:text-cyan-400"
              onClick={() => scrollToSection("sobre")}
            >
              Sobre
            </button>
            <button
              className="mb-4 text-left hover:text-cyan-400"
              onClick={() => scrollToSection("servicos")}
            >
              Serviços
            </button>
            <button
              className="mb-4 text-left hover:text-cyan-400"
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
