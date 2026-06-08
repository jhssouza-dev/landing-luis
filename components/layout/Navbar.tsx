"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/#projetos", label: "Projetos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#processo", label: "Processo" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#contato", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/") {
    return null;
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-background/76 to-transparent">
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Ir para o início"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo/logoheaderbranco.svg"
            alt="Luis Fernando"
            width={34}
            height={34}
            className="object-contain opacity-78 transition group-hover:opacity-100"
          />
          <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-foreground/54 sm:block">
            Vision of Luis
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-foreground/46 transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative h-9 w-9 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span
            className={`absolute left-2 top-4 h-px w-5 bg-foreground transition ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2 top-6 h-px w-5 bg-foreground transition ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden ${
          open ? "max-h-[30rem] border-t border-line" : "max-h-0"
        } overflow-hidden bg-background/96 transition-[max-height] duration-500`}
      >
        <nav className="container-wide flex flex-col py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-line py-4 text-lg uppercase tracking-[0.2em] text-foreground/82"
            >
              {item.label}
            </Link>
          ))}
          {pathname !== "/" && (
            <Link
              href="/"
              onClick={closeMenu}
              className="pt-5 text-xs uppercase tracking-[0.24em] text-muted"
            >
              Voltar para a página inicial
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
