import ListTransactions from "@/components/list-transactions";
import Head from "next/head";
import Top from "@/components/top";
import Presale from "@/components/presale";
import Adventure from "@/components/adventure";
import Tokenomics from "@/components/tokenomics";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Swaggy Monsters</title>
      </Head>
      <Top />
      <Presale />
      <Adventure />
      <Tokenomics />
    </main>
  );
}
