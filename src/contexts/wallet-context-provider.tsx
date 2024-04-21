"use client";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import * as web3 from "@solana/web3.js";
import React, { ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

type WalletContextProviderProps = {
  children?: ReactNode;
};

const WalletContextProvider: React.FC<WalletContextProviderProps> = ({
  children,
}) => {
  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
