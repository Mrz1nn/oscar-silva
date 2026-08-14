"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { feats } from "@/lib/content";

const images = ["/images/portrait-shirt-serious.jpg", "/images/portrait-shirt-confident.jpg"];

export function Feitos() {
  const reduce = useReducedMotion();

  return (
    <section id="feitos" className="relative overflow-hidden bg-navy py-24 text-paper sm:py-32">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.05]"
        aria-hidden
      >
        <div className="h-full font-display text-[13px] font-bold uppercase leading-[1.5] tracking-wide">
          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i} className="whitespace-nowrap">
              CEASA · SACOLÃO · PROCON · GESTÃO PÚBLICA · SERVIÇO REAL ·
            </p>
          ))}
        </div>
      </div>

      <Container wide className="relative">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-soft">
            Feitos, não promessas
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[1.02] sm:text-5xl">
            Gestão pública com resultado que ainda funciona hoje.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {feats.map((feat, i) => (
            <Reveal key={feat.id} delay={i * 0.12}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.03]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-tint">
                  <Image
                    src={images[i]}
                    alt={feat.title}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-soft">
                    {feat.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-snug sm:text-3xl">
                    {feat.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-paper/80">
                    {feat.text}
                  </p>

                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, y: 10 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-7 flex items-baseline gap-3 border-t border-paper/15 pt-6"
                  >
                    <span className="font-display text-3xl font-extrabold text-gold">
                      {feat.stat}
                    </span>
                    <span className="text-sm text-paper/65">{feat.statLabel}</span>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
