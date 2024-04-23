import { Presale } from "@/components/presale";
import { Hero } from "@/components/Hero";
import { Chart } from "@/components/chart";

export default function Home() {
  return (
    <main>
      <Hero />
      <Presale />
      <Chart />
    </main>
  );
}
