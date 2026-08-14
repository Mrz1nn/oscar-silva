import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollRestore } from "@/components/ui/ScrollRestore";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/content";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oscarsilva.com.br"),
  title: {
    default: "Oscar Silva | Candidato a Deputado Federal pelo PSDB-DF",
    template: "%s | Oscar Silva",
  },
  description:
    "Advogado, professor e ex-diretor da Ceasa e do Procon-DF. De Ceilândia, pelo Distrito Federal. Avança DF.",
  openGraph: {
    title: "Oscar Silva",
    description:
      "Advogado, professor e ex-diretor da Ceasa e do Procon-DF. De Ceilândia, pelo Distrito Federal.",
    locale: "pt_BR",
    type: "website",
    images: ["/images/hero-oscar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.headerRole,
  affiliation: {
    "@type": "PoliticalParty",
    name: site.party,
  },
  url: `https://${site.domain}`,
  image: `https://${site.domain}/images/hero-oscar.jpg`,
  ...(site.instagram
    ? { sameAs: [`https://instagram.com/${site.instagram}`] }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ScrollRestore />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
