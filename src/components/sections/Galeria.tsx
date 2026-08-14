import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const gallery = [
  {
    src: "/images/portrait-energy.jpg",
    alt: "Oscar Silva com energia, candidato a deputado federal",
    span: "sm:col-span-2",
  },
  { src: "/images/gallery-1.jpg", alt: "Oscar Silva, advogado", span: "" },
  { src: "/images/gallery-2.jpg", alt: "Oscar Silva, sorrindo", span: "" },
  {
    src: "/images/gallery-3.jpg",
    alt: "Oscar Silva, confiante",
    span: "sm:col-span-2",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-paper py-24 sm:py-32">
      <Container wide>
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
            Galeria
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[1.02] text-navy sm:text-5xl">
            O homem por trás da trajetória.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08} className={item.span}>
              <div className="overflow-hidden bg-navy-tint">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
