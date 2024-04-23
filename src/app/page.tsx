import Presale from "@/components/presale";
import Top from "@/components/top";
import Adventure from "@/components/adventure";
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
