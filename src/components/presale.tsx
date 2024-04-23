"use client";

import { BiCopy as CopyIcon } from "react-icons/bi";
import { BiCheck as CheckIcon } from "react-icons/bi";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export const Presale = () => {
  const [isCopied, setCopied] = useState<boolean>(false);

  const token = "FPjsfF8wSyLaxVbfPKxmgKjiXyqr8U1zbUc5kx7QBvGu";

  return (
    <section className="bg-[#FBD38D] h-screen flex-col gap-8 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold text-[3rem]">Presale</h1>
        <p>102.98 SOL has already been collected!</p>
      </div>
      <div className="w-fit flex flex-col gap-12 mx-auto">
        <div className="bg-[#FFE6BA] w-full h-auto  py-4 gap-4 px-12 items-center flex rounded-sm flex-col">
          <h1 className="font-bold">Copy & Send SOL</h1>
          <div className="flex items-center gap-4">
            <div>
              <Button className="bg-[#FFA500] hover:bg-[#fcac19] text-[#000]">
                {token}
              </Button>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className="bg-[#FFA500] hover:bg-[#fcac19] text-[#000]"
                    onClick={() => {
                      navigator.clipboard.writeText(token);
                      setCopied(true);

                      setTimeout(() => {
                        setCopied(false);
                      }, 1000);
                    }}
                  >
                    {!isCopied && <CopyIcon className="h-4 w-4" />}
                    {isCopied && <CheckIcon className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to Clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="bg-[#FFE6BA] w-full h-auto pb-8 pt-4 gap-4 px-12 items-center flex rounded-sm flex-col">
          <h1 className="font-bold">Connect your wallet now!</h1>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button className="py-4 rounded-sm px-4 bg-[#FFA500] hover:bg-[#fcac19] text-[#000]">
                  Connect Wallet
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Secure and easy!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};
