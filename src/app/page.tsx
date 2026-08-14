import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { VideoApresentacao } from "@/components/sections/VideoApresentacao";
import { QuemEOscar } from "@/components/sections/QuemEOscar";
import { Feitos } from "@/components/sections/Feitos";
import { ForumDaCidade } from "@/components/sections/ForumDaCidade";
import { AvancaDF } from "@/components/sections/AvancaDF";
import { Identidade } from "@/components/sections/Identidade";
import { Psdb } from "@/components/sections/Psdb";
import { Galeria } from "@/components/sections/Galeria";
import { Contato } from "@/components/sections/Contato";
import { Encerramento } from "@/components/sections/Encerramento";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <VideoApresentacao />
        <QuemEOscar />
        <Feitos />
        <ForumDaCidade />
        <AvancaDF />
        <Identidade />
        <Psdb />
        <Galeria />
        <Contato />
        <Encerramento />
      </main>
      <Footer />
    </>
  );
}
