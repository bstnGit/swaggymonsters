import Presale from "@/components/presale";
import Hero from "@/components/hero";
import Adventure from "@/components/emoji-music";
import Tokenomics from "@/components/tokenomics";

export default function Home() {
  return (
    <main>
      <Hero />
      <Presale />
      <Adventure />
      <Tokenomics />
    </main>
  );
}
