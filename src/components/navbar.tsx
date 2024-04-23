"use client";

import { useState } from "react";
import { Swaggy } from "../../public/swaggymonster";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Hamburger } from "../../public/hamburger";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("Yes");
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header id="home">
      <nav
        className={`fixed md:h-auto top-0 left-0 bg-[#EC0203] py-2 w-full mx-auto flex items-center border-b-4 text-white border-[#FFC919] ${
          isNavOpen ? "h-screen" : "h-auto"
        }`}
      >
        <div
          className={`absolute top-[40%] left-[5%] md:block ${
            isNavOpen ? "hidden" : ""
          }`}
        >
          <Swaggy />
        </div>
        <div
          className={`inline-block md:hidden ml-auto right-0 px-6  cursor-pointer min-h-10 ${
            isNavOpen ? "absolute top-2 " : ""
          }`}
          onClick={toggleNav}
        >
          <Hamburger />
        </div>
        <ul
          className={`md:flex md:flex-row flex-col md:space-y-0 space-y-2 items-center w-fit mx-auto justify-center gap-8 xl:gap-12 min-h-10 ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          <li>
            <Link href="#home" passHref legacyBehavior>
              <a
                className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all md:text-xl text-4xl"
                onClick={closeNav}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="#presale" passHref legacyBehavior>
              <a
                className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all md:text-xl text-4xl"
                onClick={closeNav}
              >
                Presale
              </a>
            </Link>
          </li>
          <li>
            <Link href="#adventure" passHref legacyBehavior>
              <a
                className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all md:text-xl text-4xl"
                onClick={closeNav}
              >
                Adventure
              </a>
            </Link>
          </li>
          <li>
            <Link href="#tokenomics" passHref legacyBehavior>
              <a
                className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all md:text-xl text-4xl"
                onClick={closeNav}
              >
                Tokenomics
              </a>
            </Link>
          </li>
          <li>
            <Link href="#home" passHref legacyBehavior>
              <a
                className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all md:text-xl text-4xl"
                onClick={closeNav}
              >
                Socials
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
