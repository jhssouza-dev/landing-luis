export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="page-container flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Luís Fernando — Arquiteto & Artista 3D</p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.behance.net/visionofluis"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            Behance
          </a>
          {/* Adicione Instagram, e-mail, etc */}
        </div>
      </div>
    </footer>
  )
}
