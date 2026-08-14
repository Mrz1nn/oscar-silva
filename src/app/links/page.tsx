import type { Metadata } from "next";
import Image from "next/image";
import { site, linksConfig } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { VillaWatermark } from "@/components/ui/VillaWatermark";

export const metadata: Metadata = {
  title: "Oscar Silva",
  description: "De Ceilândia. Pelo DF.",
  robots: { index: false, follow: false },
};

const links = [
  {
    href: linksConfig.siteUrl,
    label: "Site oficial",
    detail: "Trajetória, propostas e a agenda Avança DF, na íntegra",
    external: false,
    featured: true,
  },
  ...(linksConfig.instagramUrl
    ? [
        {
          href: linksConfig.instagramUrl,
          label: "Instagram",
          detail: `@${site.instagram}`,
          external: true,
          featured: false,
        },
      ]
    : []),
  ...(linksConfig.whatsapp
    ? [
        {
          href: `https://wa.me/${linksConfig.whatsapp}`,
          label: "Fale comigo",
          detail: "Chame direto no WhatsApp",
          external: true,
          featured: false,
        },
      ]
    : []),
  {
    href: "/#feitos",
    label: "Ceasa & Procon",
    detail: "O sacolão, a linha direta com grandes empresas e mais",
    external: false,
    featured: false,
  },
  {
    href: "/#forum",
    label: "Fórum da Cidade",
    detail: "O método: ouvir antes de propor",
    external: false,
    featured: false,
  },
  {
    href: "/#avanca-df",
    label: "Avança DF",
    detail: "De Ceilândia para o Distrito Federal inteiro",
    external: false,
    featured: false,
  },
  {
    href: "/#contato",
    label: "Fale com a campanha",
    detail: "Mande sua mensagem direto pelo site",
    external: false,
    featured: false,
  },
];

function ToucanField() {
  return (
    <>
      <Image
        src="/images/psdb-toucan-only.png"
        alt=""
        aria-hidden
        width={1400}
        height={525}
        priority
        className="pointer-events-none absolute -right-[18%] -top-[6%] w-[92%] max-w-[760px] rotate-[4deg] opacity-[0.16] blur-[1.5px] sm:-right-[12%] sm:w-[70%] sm:max-w-[620px] lg:-right-[6%] lg:top-[-8%] lg:w-[46%] lg:max-w-[720px]"
      />
      <Image
        src="/images/psdb-toucan-only.png"
        alt=""
        aria-hidden
        width={1400}
        height={525}
        className="pointer-events-none absolute -left-[26%] bottom-[8%] w-[80%] max-w-[560px] rotate-[10deg] opacity-[0.09] blur-[1.5px] sm:bottom-[4%] sm:w-[58%] sm:max-w-[480px] lg:left-[-8%] lg:bottom-[2%] lg:w-[34%] lg:max-w-[460px]"
      />
    </>
  );
}

export default function LinksPage() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-navy text-paper">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)",
        }}
        aria-hidden
      />
      <ToucanField />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1100px] flex-col px-6 pb-14 pt-14 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-20">
        {/* Identidade: foto, nome, credenciais */}
        <Reveal className="w-full shrink-0 lg:max-w-[340px] lg:self-center">
          <div className="relative mx-auto aspect-[4/5] w-[72%] max-w-[300px] overflow-hidden rounded-2xl bg-navy-tint shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:w-[52%] lg:w-full lg:max-w-none">
            <Image
              src="/images/hero-oscar.jpg"
              alt="Oscar Silva, advogado e candidato a deputado federal"
              fill
              priority
              sizes="(min-width: 1024px) 340px, 72vw"
              className="object-cover object-top"
            />
          </div>

          <div className="mx-auto mt-6 max-w-[280px] text-center lg:mx-0 lg:mt-8 lg:max-w-none lg:text-left">
            <h1 className="font-display text-4xl font-extrabold uppercase leading-none text-paper lg:text-5xl">
              {site.name}
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-gold-soft">
              {site.headerRole}
            </p>
            <p className="mt-3 text-sm text-paper/60">
              {site.role} · {site.party}
            </p>
            <p className="mt-4 font-display text-lg font-bold uppercase text-paper/80">
              {site.tagline}
            </p>
          </div>
        </Reveal>

        {/* Links */}
        <nav
          className="mt-10 flex w-full flex-col gap-3 lg:mt-0"
          aria-label="Links principais"
        >
          {links.map((link, i) => (
            <Reveal key={link.label} delay={0.08 + i * 0.06}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={
                  link.featured
                    ? "group flex items-center justify-between gap-4 rounded-xl border border-gold-soft/60 bg-gold-soft/[0.08] px-6 py-5 transition-colors hover:bg-gold-soft/[0.14]"
                    : "group flex items-center justify-between gap-4 rounded-xl border border-paper/12 bg-paper/[0.03] px-6 py-5 transition-colors hover:border-paper/25 hover:bg-paper/[0.07]"
                }
              >
                <span>
                  <span className="block font-display text-xl font-bold leading-tight text-paper">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm text-paper/55">
                    {link.detail}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={
                    link.featured
                      ? "font-display text-lg text-gold-soft transition-transform group-hover:translate-x-1"
                      : "font-display text-lg text-paper/40 transition-transform group-hover:translate-x-1 group-hover:text-paper/70"
                  }
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.08 + links.length * 0.06}>
            <p className="mt-4 text-center text-[11px] leading-relaxed text-paper/35 lg:text-left">
              {site.candidacyLine}.
            </p>
          </Reveal>

          <Reveal delay={0.1 + links.length * 0.06}>
            <div className="mt-2 text-center lg:text-left">
              <VillaWatermark dark />
            </div>
          </Reveal>
        </nav>
      </div>
    </div>
  );
}
