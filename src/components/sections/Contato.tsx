"use client";

import { FormEvent, useState } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { contact, site } from "@/lib/content";

export function Contato() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Contato pelo site — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contato" className="bg-paper-dim py-24 sm:py-32">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
            Fale com a campanha
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] text-navy sm:text-5xl">
            Sua voz também entra nessa
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            {contact.intro}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-4 rounded-2xl border border-line bg-paper p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-navy">
                Nome
                <input
                  name="name"
                  type="text"
                  required
                  className="rounded-lg border border-line bg-paper-dim px-4 py-3 text-ink outline-none transition-colors focus:border-blue"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-navy">
                E-mail
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border border-line bg-paper-dim px-4 py-3 text-ink outline-none transition-colors focus:border-blue"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-navy">
              Mensagem
              <textarea
                name="message"
                required
                rows={5}
                className="resize-none rounded-lg border border-line bg-paper-dim px-4 py-3 text-ink outline-none transition-colors focus:border-blue"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy transition-transform hover:-translate-y-0.5"
            >
              Enviar mensagem
            </button>

            {sent && (
              <p className="text-center text-sm text-ink-soft">
                Seu app de e-mail deve abrir para concluir o envio. Se não
                abrir, escreva direto para{" "}
                <a href={`mailto:${site.contactEmail}`} className="font-medium text-blue underline">
                  {site.contactEmail}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
