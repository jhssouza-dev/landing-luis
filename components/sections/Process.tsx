const steps = [
  ["01", "Imersão"],
  ["02", "Desenho"],
  ["03", "Imagem"],
];

export function Process() {
  return (
    <section
      id="processo"
      className="section-scene"
      data-section="process"
      data-scene
    >
      <div className="container-wide scene-grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div data-reveal>
          <p className="eyebrow">Processo</p>
          <h2 className="display-type mt-5 max-w-4xl text-balance text-5xl uppercase leading-[0.92] md:text-7xl">
            Processo claro. Decisões precisas.
          </h2>
        </div>

        <div className="grid border-t border-line" data-reveal>
          {steps.map(([number, title]) => (
            <div
              key={number}
              className="grid grid-cols-[4rem_1fr] items-center border-b border-line py-7 md:grid-cols-[8rem_1fr]"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-accent">
                {number}
              </span>
              <span className="display-type text-4xl uppercase tracking-[-0.04em] md:text-6xl">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
