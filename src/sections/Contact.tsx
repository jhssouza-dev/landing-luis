export function Contact() {
  return (
    <section
      id="contato"
      className="sr-section border-t border-white/5 py-16"
    >
      <div className="page-container grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        {/* Lado esquerdo (texto) igual já feito */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Contato
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Vamos falar sobre o seu projeto?
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
            Envie um resumo do que você precisa — seja um projeto residencial,
            interiores ou apenas as imagens 3D — e retornamos com os próximos
            passos.
          </p>

          {/* ... resto do texto e botões WhatsApp / e-mail / Behance iguaizinhos ... */}
        </div>

        {/* Formulário integrado ao FormSubmit */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
          <form
            className="space-y-4"
            // SUBSTITUI AQUI PELO ENDEREÇO GERADO PELO FORMSUBMIT
            action="https://formsubmit.co/jhss.telecom@gmail.com"
            method="POST"
          >
            {/* Config extra opcional do FormSubmit */}
            <input type="hidden" name="_subject" value="Novo contato - Site Luís Fernando" />
            <input type="hidden" name="_captcha" value="false" />
            {/* redirecionar para uma página de obrigado depois */}
            {/* <input type="hidden" name="_next" value="https://seusite.com/obrigado" /> */}

            <div>
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-[0.18em] text-slate-404"
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
                placeholder="Como devo te chamar?"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
                placeholder="Seu e-mail para retorno"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Tipo de projeto
              </label>
              <select
                id="projectType"
                name="projectType"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
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
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60"
                placeholder="Conte um pouco sobre o terreno, cidade, metragem ou o tipo de imagem que você precisa."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-cyan-400 bg-cyan-400 px-6 py-2.5 text-sm font-medium text-[#050816] transition hover:scale-[1.02] hover:opacity-90"
            >
              Enviar mensagem
            </button>

            <p className="mt-2 text-[0.7rem] text-slate-500">
              Ao enviar, você concorda em ser contatado(a) por e-mail ou
              WhatsApp para continuidade do projeto.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
