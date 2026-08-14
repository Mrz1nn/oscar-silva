import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { identity } from "@/lib/content";

export function Identidade() {
  return (
    <section id="identidade" className="bg-paper py-24 sm:py-32">
      <Container wide>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
            A marca
          </span>
          <p className="mt-4 font-display text-2xl leading-relaxed text-navy sm:text-3xl">
            {identity.intro}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-8 rounded-2xl bg-navy-tint px-10 py-16 text-center">
            <Image
              src="/images/logo-navy.png"
              alt="Símbolo Oscar Silva: dois balões de conversa formando a letra O"
              width={600}
              height={200}
              className="h-auto w-full max-w-sm"
            />
            <p className="font-display text-lg italic text-ink-soft">
              {identity.closing}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
