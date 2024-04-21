"use client";
import { Swaggy } from "../../public/swaggymonster";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default async function Navbar({ className }: { className?: string }) {
  return (
    <header>
      <nav
        className={twMerge(
          "relative top-0  left-0 bg-[#EC0203] py-4 w-full mx-auto flex items-center border-b-4 text-white border-[#FFC919]",
          className
        )}
      >
        <div className="absolute top-[40%] left-[15%]">
          <Swaggy />
        </div>
        <ul className="flex items-center w-fit mx-auto justify-center gap-12">
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              Presale
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              Swagger
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              Kontakt
            </Link>
          </li>

          <li className="ml-auto">
            <WalletMultiButton className="!bg-[#ffa500]" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
