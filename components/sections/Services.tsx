import { services } from "@/lib/services";

export function Services() {
  return (
    <section
      id="servicos"
      className="section-scene"
      data-section="services"
      data-scene
    >
      <div className="container-wide scene-grid lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
        <div data-reveal>
          <p className="eyebrow">Serviços</p>
          <h2 className="display-type mt-5 max-w-3xl text-balance text-5xl uppercase leading-[0.92] md:text-7xl">
            Arquitetura, interiores e imagem.
          </h2>
        </div>

        <div className="grid border-t border-line md:grid-cols-3" data-reveal>
          {services.map((service, index) => (
            <article
              key={service.id}
              className="border-b border-line py-8 pr-8 md:border-b-0 md:border-r md:pl-8 md:last:border-r-0 md:first:pl-0"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-8 text-2xl uppercase tracking-[-0.03em]">
                {service.title}
              </h3>
              <p className="mt-5 text-sm uppercase leading-relaxed tracking-[0.14em] text-muted">
                {service.items.slice(0, 2).join(" / ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
