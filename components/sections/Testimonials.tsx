const quotes = [
  "Clareza de volumetria, luz e materialidade.",
  "Apresentações mais seguras e consistentes.",
  "Processo organizado, sensível e preciso.",
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section-scene bg-surface"
      data-section="testimonials"
      data-scene
    >
      <div className="container-wide scene-grid lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
        <div data-reveal>
          <p className="eyebrow">Confiança</p>
          <h2 className="display-type mt-5 max-w-xl text-balance text-5xl uppercase leading-[0.95] md:text-7xl">
            Relações consistentes.
          </h2>
        </div>

        <div className="grid border-t border-line md:grid-cols-3" data-reveal>
          {quotes.map((quote, index) => (
            <figure
              key={quote}
              className="border-b border-line py-8 pr-8 md:border-b-0 md:border-r md:pl-8 md:last:border-r-0 md:first:pl-0"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
                0{index + 1}
              </p>
              <blockquote className="mt-8 text-2xl uppercase leading-tight tracking-[-0.03em] text-foreground/84">
                {quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
