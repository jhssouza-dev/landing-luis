"use client";

import { type FormEvent, useState } from "react";

const projectTypes = [
  "Projeto residencial",
  "Interiores",
  "Visualização 3D",
  "Projeto comercial",
  "Outro",
];

const contactEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  "https://formsubmit.co/ajax/jhss.telecom@gmail.com";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");
    formData.set("_subject", "Novo contato - Site Luis Fernando");
    formData.set("_captcha", "false");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setStatus("success");
      setMessage("Mensagem enviada. Em breve retornaremos.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Não foi possível enviar agora. Tente novamente.");
    }
  }

  return (
    <section
      id="contato"
      className="section-scene bg-surface"
      data-section="contact"
      data-scene
    >
      <div className="container-wide scene-grid lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div data-reveal>
          <p className="eyebrow">Contato</p>
          <h2 className="display-type mt-5 max-w-3xl text-balance text-5xl uppercase leading-[0.92] md:text-7xl">
            Um projeto começa por uma conversa.
          </h2>
        </div>

        <form
          className="grid gap-6 border-t border-line pt-8"
          onSubmit={handleSubmit}
          data-reveal
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="eyebrow">Nome</span>
              <input
                name="name"
                required
                className="border-b border-line bg-transparent py-3 text-base outline-none transition placeholder:text-muted/45 focus:border-accent"
                placeholder="Seu nome"
              />
            </label>

            <label className="grid gap-2">
              <span className="eyebrow">E-mail</span>
              <input
                name="email"
                type="email"
                required
                className="border-b border-line bg-transparent py-3 text-base outline-none transition placeholder:text-muted/45 focus:border-accent"
                placeholder="seu@email.com"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="eyebrow">Tipo de projeto</span>
            <select
              name="projectType"
              required
              defaultValue=""
              className="border-b border-line bg-background py-3 text-base outline-none transition focus:border-accent"
            >
              <option value="" disabled>
                Selecione
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="eyebrow">Mensagem</span>
            <textarea
              name="message"
              required
              rows={4}
              className="resize-none border-b border-line bg-transparent py-3 text-base outline-none transition placeholder:text-muted/45 focus:border-accent"
              placeholder="Contexto, objetivo e momento do projeto."
            />
          </label>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-fit border-b border-foreground/50 pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-foreground/78 transition hover:text-foreground disabled:cursor-not-allowed disabled:opacity-55"
            >
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>

            {message && (
              <p
                className={`text-sm ${
                  status === "error" ? "text-red-300" : "text-foreground/62"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
