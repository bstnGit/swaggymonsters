import Presale from "@/components/presale";
import Top from "@/components/hero";
import Adventure from "@/components/emoji-music";
import Tokenomics from "@/components/tokenomics";

export default function Home() {
  return (
    <main>
      <Top />
      <Presale />
      <Adventure />
      <Tokenomics />
    </main>
  );
}
