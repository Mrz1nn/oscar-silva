"use client";

import { useRef, useState } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { video } from "@/lib/content";

export function VideoApresentacao() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-paper sm:py-32">
      <Container wide className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[300px]">
            <div
              className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-3xl"
              aria-hidden
            />
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pausar vídeo" : "Assistir vídeo"}
              className="group relative block w-full overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            >
              <video
                ref={ref}
                src={video.src}
                poster={video.poster}
                playsInline
                controls={playing}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                className="aspect-[9/16] w-full bg-black object-cover"
              />
              {!playing && (
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-navy/20 transition-colors group-hover:bg-navy/10"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold shadow-lg transition-transform group-hover:scale-105">
                    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-navy">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              )}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-soft">
            Vídeo de apresentação
          </span>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold uppercase leading-[1.02] sm:text-5xl">
            {video.title}
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-paper/80">
            {video.text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
