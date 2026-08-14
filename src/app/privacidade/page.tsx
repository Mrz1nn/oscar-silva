import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { site, privacy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Como este site trata os dados enviados pelo formulário de contato.",
  robots: { index: false, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-paper pb-24 pt-36 sm:pt-40">
        <Container className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
            Privacidade
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] text-navy sm:text-5xl">
            Como tratamos seus dados
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            {privacy.intro}
          </p>

          <div className="mt-12 flex flex-col gap-8">
            {privacy.points.map((p) => (
              <div key={p.title} className="border-t border-line pt-6">
                <h2 className="font-display text-xl font-bold text-navy">
                  {p.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-ink-soft/80">
            Dúvidas sobre seus dados? Escreva para{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-blue underline"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
