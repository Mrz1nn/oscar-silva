export function VillaWatermark({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="https://www.instagram.com/villamasterperformance/"
      target="_blank"
      rel="noreferrer"
      className={
        dark
          ? "block text-center text-[11px] tracking-wide text-paper/35 transition-colors hover:text-paper/70"
          : "block text-center text-[11px] tracking-wide text-ink-soft/50 transition-colors hover:text-ink-soft"
      }
    >
      Feito por Vila Master Performance
    </a>
  );
}
