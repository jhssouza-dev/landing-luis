export function Process() {
  return (
    <section
      id="processo"
      className="
        relative
        sr-section
        min-h-screen
        py-20 md:py-24
          bg-none
    md:bg-[url('/bg05.webp')]
    md:bg-cover md:bg-no-repeat md:bg-right
    flex items-center justify-end
      "
    >
      {/* GRID – conteúdo no lado direito */}
      <div
        className="
          relative z-20
          page-container
          grid
          lg:grid-cols-2
          gap-20
        "
      >
        {/* área vazia à esquerda (para imitar o layout do Contato invertido) */}
        <div className="hidden lg:block" />

        {/* CONTEÚDO À DIREITA – exatamente como você queria */}
        <div className="order-2 lg:order-2 w-full max-w-xl ml-auto space-y-16">
          {/* Cabeçalho */}
          <div>
            <p className="text-lg uppercase tracking-[0.3em] text-(--text-soft)">
              Processo
            </p>

            <h2 className="mt-2 text-3xl md:text-5xl font-semibold text-(--text) leading-tight uppercase">
              Do conceito ao render final.
            </h2>

            <p className="mt-4 text-lg md:text-xl text-(--text-soft) leading-relaxed">
              Cada projeto é conduzido como uma narrativa visual: partimos do
              contexto, alinhamos expectativas e transformamos ideias em imagens
              que comunicam espaço, luz e materialidade com precisão.
            </p>
          </div>

          {/* Etapas */}
          <div className="grid gap-10 md:grid-cols-1">
            {/* Etapa 1 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg uppercase tracking-[0.25em] text-(--text-soft)">
                01 · Imersão
              </p>
              <h3 className="text-2xl md:text-3xl font-medium text-(--text) uppercase">
                Briefing & referências
              </h3>
              <p className="text-lg md:text-xl text-(--text-soft) leading-relaxed">
                Entendimento do programa, contexto, marca e expectativas. A
                partir disso, são definidos linguagem, enquadramentos e
                atmosfera das imagens.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg uppercase tracking-[0.25em] text-(--text-soft)">
                02 · Desenvolvimento
              </p>
              <h3 className="text-2xl md:text-3xl font-medium text-(--text) uppercase">
                Modelagem & composição
              </h3>
              <p className="text-lg md:text-xl text-(--text-soft) leading-relaxed">
                Modelagem 3D, estudo de luz, materiais e enquadramentos. Envio
                de prévias para alinhamento fino com equipe e cliente.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg uppercase tracking-[0.25em] text-(--text-soft)">
                03 · Finalização
              </p>
              <h3 className="text-2xl md:text-3xl font-medium text-(--text) uppercase">
                Render & pós-produção
              </h3>
              <p className="text-lg md:text-xl text-(--text-soft) leading-relaxed">
                Renderização em alta resolução e pós-produção focada em
                narrativa e legibilidade, pronta para apresentações, portfólios
                e materiais de venda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
