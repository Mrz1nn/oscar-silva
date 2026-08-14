import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { timeline } from "@/lib/content";

export function QuemEOscar() {
  return (
    <section id="quem-e" className="bg-paper py-24 sm:py-32">
      <Container wide>
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
            Quem é Oscar Silva
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[1.02] text-navy sm:text-5xl">
            Uma trajetória construída antes da política, não por causa dela.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-sm bg-navy-tint">
                <Image
                  src="/images/portrait-smile-suit.jpg"
                  alt="Oscar Silva, advogado e professor"
                  width={1200}
                  height={1500}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </div>
              <p className="mt-5 text-lg font-medium leading-snug text-navy">
                Advogado, professor universitário, ex-diretor-presidente da
                Ceasa e ex-diretor-geral do Procon-DF.
              </p>
              <p className="mt-5 border-l-2 border-gold py-1 pl-5 font-display text-lg italic leading-snug text-ink-soft">
                Um dos fundadores do MDB no DF. O primeiro filiado do PL em
                Ceilândia. Nunca precisou da política para viver dela.
              </p>
            </div>
          </Reveal>

          <ol className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.05, 0.3)}>
                <li className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-line pt-6">
                  <span className="col-span-2 font-display text-sm font-bold uppercase tracking-[0.1em] text-blue sm:col-span-1">
                    {item.year}
                  </span>
                  <div className="col-span-2 sm:col-span-1">
                    <h3 className="font-display text-2xl font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
