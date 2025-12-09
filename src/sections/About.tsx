export function About() {
  return (
    <section
      id="sobre"
      className="sr-section  py-20 md:py-24 bg-(--bg)"
    >
      <div className="page-container grid gap-12 md:grid-cols-2 md:items-center">
        {/* FOTO */}
        <div className="order-2 md:order-1">
          <img
            src="/images/sobre/luis.jpg"
            alt="Retrato de Luís Fernando"
            className="w-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="order-1 space-y-6 md:order-2">
          <p className="text-lg uppercase tracking-[0.3em] text-slate-400">
            Sobre
          </p>

          <h2 className="text-3xl font-semibold md:text-5xl text-(--text) leading-tight uppercase">
            Arquitetura como experiência visual.
          </h2>

          <p className="text-lg md:text-xl text-(--text) leading-relaxed uppercase">
            Architect graduated from Tiradentes University...
          </p>

          <p className="text-lg md:text-xl text-(--text-soft) leading-relaxed">
            Architect graduated from Tiradentes University, working on small,
            medium and large building and interior projects. Developing projects
            from the preliminary study to the executive, with experience in
            archiving for the real estate market and architecture offices.
            Participated in architecture contests with participation in projects
            and layout of boards.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base uppercase tracking-[0.18em] text-(--text-soft)">
            <span>Arquiteto &amp; Artista 3D</span>
            <span className="h-px w-8 bg-(--border)" />
            <span>Residencial contemporâneo</span>
            <span className="h-px w-8 bg-(--border)" />
            <span>Arquitetura &amp; 3D</span>
            <span className="h-px w-8 bg-(--border)" />
          </div>
        </div>
      </div>
    </section>
  );
}
