type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Estúdio A+Arquitetura",
    role: "Escritório parceiro",
    text: "O Luís entende muito bem o que o arquiteto precisa comunicar. As imagens chegam prontas para o cliente final, com leitura clara de volumetria, luz e materialidade.",
  },
  {
    id: "2",
    name: "Construtora Horizonte",
    role: "Incorporadora",
    text: "Os renders elevaram o padrão das nossas apresentações comerciais. O nível de detalhe e realismo ajudou diretamente na tomada de decisão dos investidores.",
  },
  {
    id: "3",
    name: "Mariana Costa",
    role: "Arquiteta",
    text: "Processo muito organizado, prazos cumpridos e muita sensibilidade estética. É como ter uma extensão do escritório cuidando da visualização 3D.",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="sr-section border-t border-(--border) py-20 md:py-24 bg-(--bg)"
    >
      <div className="page-container space-y-12">
        <div className="max-w-2xl">
          <p className="text-lg uppercase tracking-[0.3em] text-(--text-soft)">
            Depoimentos
          </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-semibold text-(--text) leading-tight uppercase">
            Parcerias que viram projetos construídos.
          </h2>

          <p className="mt-4 text-lg md:text-xl text-(--text-soft) leading-relaxed">
            Uma rede de escritórios, construtoras e incorporadoras que confiam no processo — da primeira prévia ao render final.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-(--border) bg-(--bg-soft)/70 p-8 backdrop-blur-sm"
            >
              <blockquote className="text-lg md:text-xl text-(--text-soft) leading-relaxed">
                “{item.text}”
              </blockquote>

              <figcaption className="mt-8">
                <p className="text-xl font-medium text-(--text)">
                  {item.name}
                </p>
                <p className="mt-1 text-base uppercase tracking-[0.16em] text-(--text-soft)">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
