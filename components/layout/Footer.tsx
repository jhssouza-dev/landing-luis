export function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="container-wide grid gap-8 py-10 text-sm text-muted md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow">Luis Fernando</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/70">
            Arquitetura, interiores e visualização 3D para projetos que precisam
            ser compreendidos, apresentados e lembrados.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em]">
          <a
            href="https://www.behance.net/visionofluis"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-foreground"
          >
            Behance
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
