"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { FiCopy as Copy } from "react-icons/fi";
import { FaCheck as Check } from "react-icons/fa6";

export default function Presale() {
  const [isCopied, setCopied] = useState<boolean>(false);

  const walletAdress = "FPjsfF8wSyLaxVbfPKxmgKjiXyqr8U1zbUc5kx7QBvGu";

  return (
    <section
      className="bg-[#333333] flex flex-col md:gap-8 items-center justify-center py-16"
      id="presale"
    >
      <div className="z-[1000]">
        <div className="flex items-center justify-center flex-col mb-5">
          <h1 className="font-bold text-3xl md:text-5xl text-white">Presale</h1>
          <p className="text-white">102.98 SOL has already been collected!</p>
        </div>
        <div className="w-full md:w-fit flex flex-col gap-12 mx-auto">
          <div className="bg-[#FFE6BA] w-full h-auto py-4 md:py-8 gap-4 px-12 items-center flex rounded-sm flex-col">
            <h1 className="font-bold">Copy & Send SOL</h1>
            <div className="flex md:flex-row flex-col items-center gap-4">
              <Button className="bg-[#FFA500] hover:bg-[#fcac19] text-[#000] text-xs">
                {walletAdress}
              </Button>
              <div className="w-full flex justify-end">
                <Button
                  className="bg-[#FFA500] hover:bg-[#fcac19] text-[#000]"
                  onClick={() => {
                    navigator.clipboard.writeText(walletAdress);
                    setCopied(true);

                    setTimeout(() => {
                      setCopied(false);
                    }, 1000);
                  }}
                >
                  {!isCopied && <Copy className="h-4 w-4" />}
                  {isCopied && <Check className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-[#FFE6BA] w-full h-auto pb-8 pt-4 md:pb-12 md:pt-8 gap-4 px-12 items-center flex rounded-sm flex-col">
            <h1 className="font-bold">Connect your wallet now!</h1>
            <Button className="py-4 md:py-6 rounded-sm px-4 bg-[#FFA500] hover:bg-[#fcac19] text-[#000]">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
      <iframe
        className="absolute z-[100]"
        src="https://www.firemove.de/swag/presale/3/index.html"
        title="Layer 1"
        width="100%"
        height="100%"
      />
    </section>
  );
}
