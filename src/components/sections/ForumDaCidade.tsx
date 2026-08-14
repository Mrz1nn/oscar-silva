import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { forum } from "@/lib/content";

export function ForumDaCidade() {
  return (
    <section id="forum" className="bg-paper-dim py-24 sm:py-32">
      <Container wide className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-2xl bg-navy-tint shadow-[0_24px_60px_rgba(10,41,99,0.18)]">
              <Image
                src="/images/portrait-pointing.jpg"
                alt="Oscar Silva explicando o método do Fórum da Cidade"
                width={1200}
                height={1600}
                sizes="(min-width: 1024px) 32vw, 85vw"
                className="w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
              Fórum da Cidade
            </span>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold uppercase leading-[1.02] text-navy sm:text-5xl">
              Ouvir antes de propor. Sempre.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              {forum.intro}
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2">
            {forum.steps.map((step, i) => (
              <Reveal key={step.title} delay={0.08 + i * 0.08}>
                <li className="rounded-xl border border-line bg-paper p-6">
                  <span className="font-display text-4xl font-extrabold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
