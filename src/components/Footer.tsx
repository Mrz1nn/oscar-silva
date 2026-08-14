import Image from "next/image";
import { site, legalNotice } from "@/lib/content";
import { VillaWatermark } from "@/components/ui/VillaWatermark";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy py-14 text-paper/70">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Oscar Silva"
              width={200}
              height={67}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-3 text-sm">{site.role} · {site.party}</p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href="/links"
              className="text-sm font-medium tracking-wide text-gold-soft transition-colors hover:text-paper"
            >
              Todos os links →
            </a>
            <a
              href="#contato"
              className="text-sm font-medium tracking-wide text-paper/70 transition-colors hover:text-paper"
            >
              Fale com a campanha
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs leading-relaxed text-paper/50">
          <p>{legalNotice}</p>
          <p>
            © {year} {site.name}. Todos os direitos reservados. ·{" "}
            <a href="/privacidade" className="underline hover:text-paper/80">
              Privacidade
            </a>
          </p>
          <div className="pt-1">
            <VillaWatermark dark />
          </div>
        </div>
      </div>
    </footer>
  );
}
