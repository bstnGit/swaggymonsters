import Presale from "@/components/presale";
import Top from "@/components/top";
import Adventure from "@/components/emoji-music";
import Tokenomics from "@/components/tokenomics";
import Roadmap from "@/components/roadmap";

export default function Home() {
  return (
    <main>
      <Top />
      <Presale />
      <Adventure />
      <Tokenomics />
      <Roadmap />
    </main>
  );
}
