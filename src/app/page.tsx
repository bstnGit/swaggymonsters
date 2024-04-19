import { Presale } from "@/components/presale";
import ListTransactions from "@/components/list-transactions";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Presale />
      <ListTransactions />
    </main>
  );
}
