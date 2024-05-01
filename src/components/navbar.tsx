"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header id="home">
      <nav
        className={`absolute py-5 left-1/2 transform -translate-x-1/2 text-white z-[10000] ${
          isNavOpen ? "" : "h-auto"
        }`}
      >
        {/*
        <div
          className={`absolute top-[40%] left-[5%] md:block ${
            isNavOpen ? "hidden" : ""
          }`}
        >
          <Swaggy />
        </div>
        */}
        <div
          className={`flex justify-center mx-auto cursor-pointer max-w-fit items-center mb-3 border-solid border-4 border-black rounded-md bg-black p-2`}
          onClick={toggleNav}
        >
          <FaBars className="w-10 h-10" />
        </div>

        <ul
          className={`flex cursor-pointer flex-col items-center w-fit mx-auto justify-center gap-5 min-h-10 z-20 p-[30px] rounded-xl [&_a]:text-2xl ${
            isNavOpen ? "bg-black" : "hidden"
          }`}
        >
          <Link href="#home" className="" passHref legacyBehavior>
            <a onClick={closeNav}>Home</a>
          </Link>
          <Link href="#presale" className="" passHref legacyBehavior>
            <a onClick={closeNav}>Presale</a>
          </Link>

          <Link className="" href="#adventure" passHref legacyBehavior>
            <a onClick={closeNav}>Adventure</a>
          </Link>

          <Link href="#tokenomics" className="" passHref legacyBehavior>
            <a onClick={closeNav}>Tokenomics</a>
          </Link>

          <Link href="#home" className="" passHref legacyBehavior>
            <a onClick={closeNav}>Socials</a>
          </Link>

          <Link href="#home" className="ml-auto">
            <WalletMultiButton className="!bg-[#ffa500]" />
          </Link>
        </ul>
      </nav>
      {isNavOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[5000]"
          onClick={toggleNav}
        />
      )}
    </header>
  );
}
