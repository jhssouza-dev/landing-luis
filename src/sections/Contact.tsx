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
              aria-label="WhatsApp"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-gray-900 transition hover:bg-gray-400"
            >
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12.04 2a9.95 9.95 0 0 0-8.56 14.98L2 22l5.14-1.47A9.95 9.95 0 1 0 12.04 2Zm0 1.8a8.14 8.14 0 0 1 6.16 13.39.9.9 0 0 0-.2.46l-.35 2.64-2.5-.73a.9.9 0 0 0-.56.03 8.14 8.14 0 0 1-8.58-12.8A8.12 8.12 0 0 1 12.04 3.8ZM7.5 7.8c-.2 0-.4.08-.55.23-.53.53-1.02 1.39.18 3.63 1.4 2.68 3.38 3.77 4.94 4.31.76.27 1.56.1 2.04-.38.2-.2.3-.47.08-.9l-.7-1.4a.68.68 0 0 0-.78-.36l-.8.2c-.15.04-.3 0-.4-.1-.23-.2-.73-.56-1.39-1.22-.64-.64-.98-1.12-1.18-1.35-.1-.1-.14-.25-.1-.4l.2-.79a.68.68 0 0 0-.36-.78L8.1 7.9a.67.67 0 0 0-.6-.1Z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
            <a
              href="mailto:contato@visionofluis.com"
              aria-label="E-mail"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-100 transition hover:bg-slate-700"
            >
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm0 2v.28l8 4.67 8-4.67V7H4Zm0 2.52V17h16v-7.48l-7.57 4.42a1.2 1.2 0 0 1-1.2 0L4 9.52Z" />
              </svg>
              <span className="sr-only">E-mail</span>
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
