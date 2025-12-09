export function Contact() {
  return (
    <section
      id="contato"
      className="sr-section border-t border-white/5 py-16"
    >
      <div className="page-container grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        {/* Lado esquerdo (texto) */}
        <div>
          <p className="text-lg uppercase tracking-[0.3em] text-slate-400">
            Contato
          </p>

          <h2 className="mt-2 text-3xl font-semibold md:text-5xl uppercase">
            Vamos falar sobre o seu projeto?
          </h2>

          <p className="mt-3 max-w-xl text-lg md:text-xl text-slate-300 leading-relaxed">
            Envie um resumo do que você precisa — seja um projeto residencial,
            interiores ou apenas as imagens 3D — e retornamos com os próximos
            passos.
          </p>

          {/* Botões rápidos */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-400"
            >
              WhatsApp
            </a>
            <a
              href="mailto:contato@visionofluis.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-400"
            >
              E-mail
            </a>
          </div>

          {/* ... resto do texto e botões WhatsApp / e-mail / Behance iguaizinhos ... */}
        </div>

        {/* Formulário integrado ao FormSubmit */}
        <div className="rounded-2xl border border-(--border) bg-(--bg-soft)/80 p-6 backdrop-blur-sm">
          <form
            className="space-y-4"
            action="https://formsubmit.co/jhss.telecom@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="Novo contato - Site Luís Fernando"
            />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label
                htmlFor="name"
                className="text-sm md:text-base font-medium uppercase tracking-[0.18em] text-slate-404"
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition focus:border-gray-400 focus:ring-1 focus:gray-cyan-400/60"
                placeholder="Como devo te chamar?"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm md:text-base font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition focus:border-gray-400 focus:ring-1 focus:gray-cyan-400/60"
                placeholder="Seu e-mail para retorno"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="text-sm md:text-base font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Tipo de projeto
              </label>
              <select
                id="projectType"
                name="projectType"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition focus:border-gray-400 focus:ring-1 focus:ring-gray-400/60"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="residencial">Residencial</option>
                <option value="interiores">Interiores</option>
                <option value="visualizacao-3d">Visualização 3D</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="text-sm md:text-base font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Faixa de orçamento
              </label>
              <select
                id="budget"
                name="budget"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition focus:border-gray-400 focus:ring-1 focus:ring-gray-400/60"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="a-definir">A definir</option>
                <option value="ate-5k">Até R$ 5 mil</option>
                <option value="5-10k">R$ 5k – 10k</option>
                <option value="10-20k">R$ 10k – 20k</option>
                <option value="20k-plus">Acima de R$ 20k</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm md:text-base font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-base text-slate-100 outline-none ring-0 transition focus:border-gray-400 focus:ring-1 focus:gray-cyan-400/60"
                placeholder="Conte um pouco sobre o terreno, cidade, metragem ou o tipo de imagem que você precisa."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-gray-400 bg-gray-400 px-6 py-2.5 text-base font-medium text-[#050816] transition hover:bg-gray-600 cursor-pointer"
            >
              Enviar mensagem
            </button>

            <p className="mt-2 text-xs md:text-sm text-slate-500">
              Ao enviar, você concorda em ser contatado(a) por e-mail ou
              WhatsApp para continuidade do projeto.
            </p>
            <p className="text-xs text-slate-500">
              Seus dados são usados somente para retorno comercial. Não
              compartilhamos com terceiros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
