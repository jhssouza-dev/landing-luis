import { type FormEvent, useState, useRef, useEffect } from "react";

type FieldErrors = {
  name: boolean;
  email: boolean;
  projectType: boolean;
  message: boolean;
};

const PROJECT_OPTIONS = [
  { value: "residencial", label: "Residencial" },
  { value: "interiores", label: "Interiores" },
  { value: "3d", label: "Visualização 3D" },
  { value: "outro", label: "Outro" },
];

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    name: false,
    email: false,
    projectType: false,
    message: false,
  });

  // estado do select custom
  const [projectType, setProjectType] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  // fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!selectRef.current) return;
      if (!selectRef.current.contains(e.target as Node)) {
        setSelectOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const selectedProjectType = projectType.trim(); // vem do estado

    setErrorMessage(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nextErrors: FieldErrors = {
      name: !name,
      email: !email || !emailRegex.test(email || ""),
      projectType: !selectedProjectType,
      message: !message,
    };

    const hasError = Object.values(nextErrors).some(Boolean);

    if (hasError) {
      setFieldErrors(nextErrors);
      setStatus("error");

      if (nextErrors.email && email) {
        setErrorMessage("Digite um e-mail válido.");
      } else {
        setErrorMessage("Preencha todos os campos obrigatórios.");
      }

      // foco no primeiro campo com erro
      const firstInvalidField = Object.entries(nextErrors).find(
        ([, isError]) => isError
      )?.[0];

      if (firstInvalidField) {
        const invalidInput = form.querySelector(
          `[name="${firstInvalidField}"]`
        ) as HTMLElement | null;

        invalidInput?.focus();
      }

      return;
    }

    // sem erro → limpa marcações
    setFieldErrors({
      name: false,
      email: false,
      projectType: false,
      message: false,
    });

    setStatus("loading");

    // força o valor correto do select no FormData
    formData.set("projectType", selectedProjectType);
    formData.set("_subject", "Novo contato - Site Luís Fernando");
    formData.set("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jhss.telecom@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        setStatus("error");
        try {
          const data = await response.json();
          if (data?.message) {
            setErrorMessage(data.message);
          } else {
            setErrorMessage(
              "Ocorreu um erro ao enviar sua mensagem. Tente novamente."
            );
          }
        } catch {
          setErrorMessage(
            "Ocorreu um erro ao enviar sua mensagem. Tente novamente."
          );
        }
        return;
      }

      setStatus("success");
      form.reset();
      setProjectType("");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes."
      );
    }
  }

  const baseInputClasses =
    "w-full bg-transparent border-b border-slate-600 outline-none py-2 text-slate-100 transition-colors duration-200 focus:border-white";
  const errorInputClasses = "border-red-500 focus:border-red-400";

  return (
    <section
      id="contato"
      className="
        sr-section 
        relative
        bg-none
        md:bg-contain md:bg-center
        md:bg-no-repeat
        md:bg-[url('/bg02.webp')]
      "
    >
      <div
        className="
          page-container
          relative z-10
          grid gap-20
          lg:grid-cols-2
        "
      >
        {/* LADO ESQUERDO – TEXTO E FORM */}
        <div className="order-2 lg:order-1 mx-auto w-full max-w-xl">
          <p className="text-lg uppercase tracking-[0.3em] text-slate-400">
            Contato
          </p>

          <h2 className="mt-2 text-4xl lg:text-5xl font-semibold uppercase">
            Vamos falar sobre o seu projeto?
          </h2>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Envie um resumo do que você precisa — projeto residencial,
            interiores ou imagens 3D — e retornamos com os próximos passos.
          </p>

          <form className="mt-12 space-y-8" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block text-sm tracking-widest uppercase text-slate-300 mb-1">
                Nome
              </label>
              <input
                name="name"
                className={`${baseInputClasses} ${
                  fieldErrors.name ? errorInputClasses : ""
                }`}
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="block text-sm tracking-widest uppercase text-slate-300 mb-1">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                className={`${baseInputClasses} ${
                  fieldErrors.email ? errorInputClasses : ""
                }`}
                placeholder="Seu e-mail para contato"
              />
            </div>

            {/* SELECT CUSTOM DARK */}
            <div>
              <label className="block text-sm tracking-widest uppercase text-slate-300 mb-1">
                Tipo de Projeto
              </label>

              <div ref={selectRef} className="relative">
                {/* botão “fechado” */}
                <button
                  type="button"
                  onClick={() => setSelectOpen((prev) => !prev)}
                  className={`
                    w-full text-left px-0 py-2
                    border-b outline-none
                    bg-transparent
                    text-slate-100
                    transition-colors duration-200
                    ${
                      fieldErrors.projectType
                        ? "border-red-500"
                        : "border-slate-600"
                    }
                    ${
                      fieldErrors.projectType
                        ? "focus:border-red-400"
                        : "focus:border-white"
                    }
                  `}
                >
                  {projectType
                    ? PROJECT_OPTIONS.find((o) => o.value === projectType)
                        ?.label
                    : "Selecione"}
                </button>

                {/* ícone da setinha */}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-[10px] text-slate-400">
                  ▼
                </span>

                {/* dropdown */}
                {selectOpen && (
                  <ul
                    className="
                      absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto
                      rounded-md border border-slate-700
                      bg-transparent backdrop-blur-sm
                      shadow-lg z-20
                    "
                  >
                    {PROJECT_OPTIONS.map((option) => (
                      <li key={option.value}>
                        <button
                          type="button"
                          onClick={() => {
                            setProjectType(option.value);
                            setSelectOpen(false);
                            // limpar erro se estava marcado
                            setFieldErrors((prev) => ({
                              ...prev,
                              projectType: false,
                            }));
                          }}
                          className={`
                            w-full text-left px-3 py-2 text-sm
                            ${
                              projectType === option.value
                                ? "bg-white/10 text-white"
                                : "bg-black/40 text-gray-200 hover:bg-white/10"
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* hidden para o FormData pegar o valor */}
                <input type="hidden" name="projectType" value={projectType} />
              </div>
            </div>

            <div>
              <label className="block text-sm tracking-widest uppercase text-slate-300 mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={4}
                className={`${baseInputClasses} ${
                  fieldErrors.message ? errorInputClasses : ""
                }`}
                placeholder="Fale um pouco sobre seu projeto"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="
                mt-4 inline-block px-1 py-3 
                transition rounded-full cursor-pointer
                hover:text-gray-400
                disabled:opacity-60 disabled:cursor-not-allowed
                font-bold uppercase
              "
            >
              {status === "loading" ? "Loading..." : "Send"}
            </button>

            {status === "success" && (
              <p className="mt-3 text-lg text-gray-200 box-border border p-4 w-auto border-green-900">
                Mensagem enviada com sucesso! Em breve entrarei em contato.
              </p>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">
                {errorMessage ??
                  "Ocorreu um erro ao enviar sua mensagem. Tente novamente."}
              </p>
            )}
          </form>
        </div>

        {/* COLUNA DIREITA – vazia (bg cuida da imagem) */}
        <div className="order-1 lg:order-2" />
      </div>
    </section>
  );
}
