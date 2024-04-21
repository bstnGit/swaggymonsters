import { Connection, PublicKey } from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
export default async function ListTransactions() {
  const network = "https://api.mainnet-beta.solana.com";
  const LAMPORTS_PER_SOL = 1000000000;
  const walletAddress = "KKKKBPfGXhp3MjbP6q7eUK1tfQ822jGBSAayRX8wHgr";

  try {
    const connection = new Connection(network, "confirmed");
    const publicKey = new PublicKey(walletAddress);

    // Fetch account info
    const account = await connection.getAccountInfo(publicKey);

    // Fetch transaction history
    const transactions = await connection.getConfirmedSignaturesForAddress2(
      publicKey,
      {
        limit: 10,
      }
    );

    console.log(transactions);
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
  }

  return <div></div>;
}
