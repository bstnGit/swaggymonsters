import { Presale } from "@/components/presale";
import ListTransactions from "@/components/list-transactions";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Swaggy Monsters</title>
      </Head>
      <Hero />
      <Presale />
      <ListTransactions />
    </main>
  );
}
