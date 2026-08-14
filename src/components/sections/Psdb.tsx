import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { psdb, recognition, paulaBelmonte } from "@/lib/content";

export function Psdb() {
  return (
    <section id="psdb" className="relative overflow-hidden bg-paper-dim py-24 sm:py-32">
      <Image
        src="/images/psdb-toucan-only.png"
        alt=""
        aria-hidden
        width={1400}
        height={525}
        className="pointer-events-none absolute -right-[16%] -top-[8%] w-[80%] max-w-[640px] rotate-[4deg] opacity-[0.12] sm:-right-[8%] lg:right-[-2%] lg:top-[-10%] lg:w-[42%]"
      />

      <Container wide className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
              PSDB-DF
            </span>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold uppercase leading-[1.02] text-navy sm:text-5xl">
              Um projeto coletivo, ao lado de Paula Belmonte.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              {psdb.intro}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft/85">
              {psdb.text}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <a
            href={paulaBelmonte.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-blue/25 bg-navy p-8 text-paper shadow-[0_20px_50px_rgba(10,41,99,0.18)] transition-colors hover:border-gold/50"
          >
            <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold-soft">
              Candidata a governadora
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold">
              {paulaBelmonte.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">
              {paulaBelmonte.role}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-gold-soft">
              @{paulaBelmonte.instagram}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          <div className="rounded-2xl border border-gold/30 bg-paper p-8 shadow-[0_20px_50px_rgba(10,41,99,0.1)]">
            <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold">
              Reconhecimento
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-navy">
              {recognition.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {recognition.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
