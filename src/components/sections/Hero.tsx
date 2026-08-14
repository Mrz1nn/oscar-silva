"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../ui/Container";
import { site } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy pt-24"
    >
      {/* O símbolo da marca, os dois balões de diálogo, ampliado e discreto ao fundo */}
      <svg
        className="pointer-events-none absolute -right-[10%] top-[8%] h-[85%] w-auto opacity-[0.07] sm:-right-[4%] lg:right-[2%] lg:top-[4%]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <path
          d="M200 40C122 40 60 102 60 180c0 40 16 76 43 102l-9 58 58-22c14 4 30 6 48 6 78 0 140-62 140-144S278 40 200 40Z"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle cx="200" cy="180" r="80" stroke="#F4B929" strokeWidth="2" />
      </svg>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] w-full opacity-[0.08]"
        viewBox="0 0 1400 400"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden
      >
        <line x1="0" y1="340" x2="1400" y2="340" stroke="#fff" strokeWidth="1" />
        <line x1="0" y1="380" x2="1400" y2="300" stroke="#fff" strokeWidth="1" />
      </svg>

      <Container wide className="relative z-10 flex flex-1 flex-col justify-center py-8 sm:py-14">
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-4 mt-5 max-w-md text-xs font-medium uppercase tracking-[0.15em] text-gold-soft sm:text-sm lg:order-none lg:mb-8 lg:mt-0"
        >
          {site.candidacyLine}
        </motion.p>

        <div className="grid w-full items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="order-2 flex flex-col lg:order-none">
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="order-1 font-display text-6xl font-extrabold uppercase leading-[0.92] text-paper sm:text-7xl lg:text-[5.5rem] xl:text-8xl"
            >
              Oscar
              <br />
              <span className="text-gold-soft">Silva</span>
            </motion.h1>

            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="order-2 mt-5 max-w-md text-lg leading-relaxed text-paper/85 sm:text-xl lg:mt-7"
            >
              Advogado, professor e ex-diretor da Ceasa e do Procon-DF.
              Décadas de serviço público em Ceilândia, pelo {site.party}.
            </motion.p>

            <motion.p
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="order-3 mt-6 font-display text-2xl font-extrabold uppercase tracking-tight text-gold sm:text-3xl lg:mt-9"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="order-4 mt-8 flex flex-wrap items-center gap-3 lg:mt-10"
            >
              <a
                href="#quem-e"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy transition-transform hover:-translate-y-0.5"
              >
                Conhecer a trajetória
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#avanca-df"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-paper/60"
              >
                Avança DF
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto w-full max-w-[320px] lg:order-none lg:mx-0 lg:ml-auto lg:max-w-[460px]"
          >
            <div
              className="absolute -inset-8 rounded-[2rem] bg-gold/10 blur-3xl"
              aria-hidden
            />
            <div className="absolute -inset-1 rounded-2xl border-2 border-gold/30" aria-hidden />

            <div className="relative overflow-hidden rounded-2xl bg-navy shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hero-oscar.jpg"
                alt="Oscar Silva, advogado e candidato a deputado federal"
                width={1400}
                height={2100}
                priority
                sizes="(min-width: 1024px) 460px, 320px"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Indicador de rolagem, apenas visual */}
      <div
        aria-hidden
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-paper/60"
      >
        <span className="h-9 w-[1px] overflow-hidden bg-paper/20">
          <motion.span
            className="block h-3 w-full bg-gold-soft"
            initial={{ y: -12 }}
            animate={reduce ? undefined : { y: 36 }}
            transition={
              reduce
                ? undefined
                : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </span>
      </div>
    </section>
  );
}
