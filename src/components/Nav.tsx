"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { site } from "@/lib/content";

const links = [
  { href: "#quem-e", label: "Quem é" },
  { href: "#feitos", label: "Ceasa & Procon" },
  { href: "#forum", label: "Fórum da Cidade" },
  { href: "#avanca-df", label: "Avança DF" },
  { href: "#identidade", label: "Identidade" },
  { href: "#psdb", label: "PSDB" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mede a altura real do header em vez de assumir um valor fixo,
  // para o painel do menu sempre começar exatamente onde o header termina.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Trava de scroll robusta para Safari no iPhone: overflow hidden isolado
  // não é suficiente lá, então fixamos o body na posição atual.
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      width: style.width,
      overflow: style.overflow,
    };

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.width = previous.width;
      style.overflow = previous.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(
          "fixed inset-x-0 top-0 isolate z-[100] transition-colors duration-300",
          scrolled || open
            ? "bg-paper border-b border-line"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 sm:px-8 lg:px-12"
          style={{ paddingTop: "calc(0.75rem + env(safe-area-inset-top))" }}
        >
          <a
            href={isHome ? "#topo" : "/"}
            onClick={handleLinkClick}
            className="flex items-center gap-3"
          >
            <span className="relative h-10 w-[140px] shrink-0 sm:h-10 sm:w-[145px]">
              <Image
                src={scrolled || open ? "/images/logo-navy.png" : "/images/logo-white.png"}
                alt="Oscar Silva"
                fill
                priority
                sizes="145px"
                className="object-contain object-left"
              />
            </span>
            <span
              className={clsx(
                "hidden whitespace-nowrap text-[9px] font-medium uppercase leading-tight tracking-[0.14em] sm:block sm:text-[10px] sm:tracking-[0.18em]",
                scrolled || open ? "text-ink-soft" : "text-paper/70"
              )}
            >
              {site.headerRole}
            </span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={
                    link.href.startsWith("#") && !isHome
                      ? `/${link.href}`
                      : link.href
                  }
                  className={clsx(
                    "text-sm font-medium tracking-wide transition-colors hover:text-gold",
                    scrolled ? "text-ink-soft" : "text-paper/90"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={clsx(
                "block h-px w-6 transition-all duration-300",
                open
                  ? "translate-y-[3.5px] rotate-45 bg-navy"
                  : scrolled
                    ? "bg-navy"
                    : "bg-paper"
              )}
            />
            <span
              className={clsx(
                "block h-px w-6 transition-all duration-300",
                open
                  ? "-translate-y-[3.5px] -rotate-45 bg-navy"
                  : scrolled
                    ? "bg-navy"
                    : "bg-paper"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Painel do menu mobile: camada própria, opaca, isolada do resto da página. */}
      <div
        id="menu-mobile"
        aria-hidden={!open}
        style={{ top: headerHeight, height: `calc(100dvh - ${headerHeight}px)` }}
        className={clsx(
          "fixed inset-x-0 isolate z-[90] bg-navy transition-opacity duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex h-full flex-col overflow-y-auto px-6 py-8">
          {links.map((link) => (
            <li key={link.href} className="border-b border-paper/15">
              <a
                href={
                  link.href.startsWith("#") && !isHome
                    ? `/${link.href}`
                    : link.href
                }
                onClick={handleLinkClick}
                className="block py-4 font-display text-2xl text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
