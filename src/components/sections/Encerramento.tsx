import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { site } from "@/lib/content";

export function Encerramento() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 text-paper sm:py-36">
      <Image
        src="/images/portrait-suit-side.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover object-top opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-navy/80" aria-hidden />

      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-display text-3xl font-extrabold uppercase leading-snug sm:text-4xl">
            Ceilândia só teve um morador presidente da cidade. Imagine se
            tivesse um deputado federal.
          </p>
          <p className="mt-8 text-[17px] leading-relaxed text-paper/75">
            Uma vida inteira de serviço público, sem nunca depender dele para
            viver. Agora, Oscar Silva coloca essa experiência à disposição de
            quem mora nas regiões administrativas do Distrito Federal.
          </p>
          <p className="mt-10 font-display text-2xl font-extrabold uppercase tracking-tight text-gold-soft">
            {site.territory}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
