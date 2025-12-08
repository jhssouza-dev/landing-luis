export function About() {
  return (
    <section id="sobre" className="sr-section border-t border-white/5 py-16">
      <div className="page-container grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-start">
        {/* Texto principal */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Sobre
          </p>

          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Arquitetura como experiência visual.
          </h2>

          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Architect graduated from Tiradentes University, working on small,
            medium and large building and interior projects. Developing projects
            from the preliminary study to the executive, with experience in
            archiving for the real estate market and architecture offices.
            Participated in architecture contests with participation in projects
            and layout of boards.
          </p>

          <p className="mt-3 text-sm text-slate-400 md:text-base">
            Além de projetos autorais, desenvolve imagens 3D para escritórios,
            construtoras e incorporadoras que precisam comunicar seus projetos
            com clareza e impacto, seja em apresentações internas ou materiais
            de venda.
          </p>

          <p className="mt-3 text-sm text-slate-400 md:text-base">
            O resultado são arquiteturas e representações visuais que alinham
            conceito, função e emoção — da primeira ideia ao render final.
          </p>
        </div>

        {/* “Ficha técnica” / stats */}
        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Perfil
            </p>
            <p className="mt-2 text-sm font-medium text-slate-200">
              Arquiteto & Artista 3D
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Projetos autorais, interiores e visualização 3D.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Foco
              </p>
              <p className="mt-1 text-sm text-slate-100">
                Residencial contemporâneo
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Atuação
              </p>
              <p className="mt-1 text-sm text-slate-100">
                Arquitetura & 3D para escritórios e incorporadoras
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Entregas
              </p>
              <p className="mt-1 text-sm text-slate-100">
                Projetos, interiores, renders fotorrealistas
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                Formato
              </p>
              <p className="mt-1 text-sm text-slate-100">
                Projetos autorais e parcerias B2B
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Softwares
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem]">
              <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
                Modelagem 3D
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
                Renderização fotorrealista
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
                Pós-produção
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
