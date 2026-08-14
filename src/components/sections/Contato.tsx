import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { contact, site } from "@/lib/content";

export function Contato() {
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

          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-navy transition-transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-navy" aria-hidden>
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.4-.71-2.88-1.15-4.72-4.08-4.87-4.27-.14-.19-1.17-1.56-1.17-2.98s.74-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.19-.15.31-.3.48-.14.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
