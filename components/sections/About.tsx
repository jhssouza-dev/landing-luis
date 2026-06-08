import Image from "next/image";

export function About() {
  return (
    <section
      id="sobre"
      className="section-scene bg-surface"
      data-section="about"
      data-scene
    >
      <div className="container-wide scene-grid lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="image-frame aspect-[4/5] max-h-[76svh]" data-image-reveal>
          <Image
            src="/images/sobre/luis.jpg"
            alt="Retrato de Luis Fernando"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">Sobre</p>
          <h2 className="display-type mt-5 text-balance text-5xl uppercase leading-[0.95] md:text-7xl">
            Conceito, proporção e presença.
          </h2>
          <p className="mt-8 max-w-lg text-base uppercase leading-relaxed tracking-[0.16em] text-muted">
            Arquitetura e imagem conduzidas com clareza, silêncio e precisão.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-[0.68rem] uppercase tracking-[0.26em] text-foreground/58">
            <span>Arquitetura</span>
            <span>Interiores</span>
            <span>Visualização 3D</span>
          </div>
        </div>
      </div>
    </section>
  );
}
