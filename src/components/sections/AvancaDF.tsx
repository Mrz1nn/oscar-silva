"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { avancaDF, chapa } from "@/lib/content";

export function AvancaDF() {
  const reduce = useReducedMotion();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1 },
  };

  return (
    <section id="avanca-df" className="relative overflow-hidden bg-navy py-24 text-paper sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[140%] w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-soft/40 to-transparent"
        aria-hidden
      />

      <Container wide className="relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-soft">
            De Ceilândia para o DF
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] sm:text-5xl">
            Avança DF
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-paper/85">
            {avancaDF.intro}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/70">
            {avancaDF.text}
          </p>
        </Reveal>

        <motion.svg
          viewBox="0 0 600 420"
          className="mx-auto w-full max-w-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
          aria-hidden
        >
          {/* Silhueta estilizada do avião de Brasília, três eixos das regiões administrativas */}
          <motion.line
            x1="60" y1="210" x2="540" y2="210"
            stroke="#fff" strokeOpacity="0.4" strokeWidth="2"
            variants={reduce ? undefined : draw}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M300 210 L420 330 L470 330 L340 220"
            stroke="#F4B929" strokeWidth="2" fill="none"
            variants={reduce ? undefined : draw}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M300 210 L180 90 L130 90 L260 200"
            stroke="#F4B929" strokeWidth="2" fill="none"
            variants={reduce ? undefined : draw}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.35 }}
          />
          {[
            { cx: 300, cy: 210, label: "Ceilândia" },
            { cx: 465, cy: 330, label: "Samambaia" },
            { cx: 135, cy: 90, label: "Taguatinga" },
          ].map((p, i) => (
            <motion.g
              key={p.label}
              variants={reduce ? undefined : draw}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            >
              <circle cx={p.cx} cy={p.cy} r="7" fill="#F4B929" />
              <text
                x={p.cx}
                y={p.cy - 16}
                textAnchor="middle"
                className="font-display"
                fontSize="15"
                fontWeight="700"
                fill="#fff"
                fillOpacity="0.85"
              >
                {p.label}
              </text>
            </motion.g>
          ))}
        </motion.svg>
      </Container>

      <Container wide className="relative mt-20 sm:mt-28">
        <Reveal>
          <p className="max-w-2xl text-[17px] leading-relaxed text-paper/85">
            {chapa.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chapa.candidates.map((c, i) => {
            const Wrapper = c.instagram ? "a" : "div";
            const wrapperProps = c.instagram
              ? {
                  href: `https://instagram.com/${c.instagram}`,
                  target: "_blank",
                  rel: "noreferrer",
                }
              : {};

            return (
              <Reveal key={c.name} delay={0.08 + i * 0.06}>
                <Wrapper
                  {...wrapperProps}
                  className="group block overflow-hidden rounded-xl border border-paper/15 bg-paper/[0.04] transition-colors hover:border-gold-soft/50"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-paper/[0.06]">
                    {c.photo ? (
                      <Image
                        src={c.photo}
                        alt={c.name}
                        fill
                        sizes="(min-width: 1024px) 24vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-display text-4xl font-extrabold text-paper/25">
                        {c.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-soft">
                      {c.region}
                    </span>
                    <p className="mt-2 font-display text-xl font-bold">{c.name}</p>
                    <p className="mt-1 text-xs text-paper/55">
                      {c.instagram
                        ? `@${c.instagram}`
                        : "Candidato(a) a Deputado(a) Distrital"}
                    </p>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
