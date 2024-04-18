import { Presale } from "@/components/presale";
import Hero from "@/components/hero";
import ListTransactions from "@/components/list-transactions";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Presale />
      <ListTransactions />
    </main>
  );
}
