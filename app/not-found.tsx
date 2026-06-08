import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center pt-20">
      <section className="container">
        <p className="eyebrow">Página não encontrada</p>
        <h1 className="display-serif mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">
          O endereço solicitado não faz parte desta apresentação.
        </h1>
        <Link
          href="/"
          className="mt-10 inline-flex border-b border-foreground/50 pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted transition hover:text-foreground"
        >
          Voltar para a página inicial
        </Link>
      </section>
    </main>
  );
}
