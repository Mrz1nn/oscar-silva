import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { identity } from "@/lib/content";

const palette = [
  { hex: "#0A2963", label: "Azul institucional" },
  { hex: "#2250A3", label: "Azul diálogo" },
  { hex: "#0867A7", label: "Azul comunicação" },
  { hex: "#F4B929", label: "Amarelo, energia e ação" },
];

export function Identidade() {
  return (
    <section id="identidade" className="bg-paper py-24 sm:py-32">
      <Container wide>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl leading-relaxed text-navy sm:text-3xl">
            {identity.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="flex justify-center rounded-2xl bg-navy-tint px-10 py-16">
              <Image
                src="/images/logo-navy.png"
                alt="Símbolo Oscar Silva: dois balões de conversa formando a letra O"
                width={600}
                height={200}
                className="h-auto w-full max-w-sm"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {palette.map((c) => (
                <li key={c.hex} className="flex flex-col gap-3">
                  <span
                    className="block aspect-square w-full rounded-lg shadow-inner"
                    style={{ background: c.hex }}
                    aria-hidden
                  />
                  <span>
                    <span className="block font-display text-sm font-bold text-navy">
                      {c.hex}
                    </span>
                    <span className="block text-xs text-ink-soft">{c.label}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-lg italic text-ink-soft">
              {identity.closing}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
