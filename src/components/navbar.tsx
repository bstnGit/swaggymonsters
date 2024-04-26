"use client";

import { useState } from "react";
import Link from "next/link";
import { Hamburger } from "../../public/hamburger";
import { FaBars } from "react-icons/fa6";

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
        className={`fixed md:h-auto top-0 left-0 py-2 w-full mx-auto flex items-center text-white min-h-[4rem]${
          isNavOpen ? "flex flex-col gap-4" : "h-auto"
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
          className={`flex justify-center mx-auto aspect-square rounded-sm cursor-pointer min-h-10 items-center`}
          onClick={toggleNav}
        >
          <FaBars className="w-10 h-10 mt-2" />
        </div>
        <ul
          className={`flex md:flex-row cursor-pointer flex-col md:space-y-0 space-y-2 items-center w-fit mx-auto justify-center gap-8 xl:gap-12 min-h-10 ${
            isNavOpen ? "h-screen md:h-auto flex-col flex" : "hidden"
          }`}
        >
          <Link href="#home" passHref legacyBehavior>
            <a className="md:h-auto md:text-xl text-4xl" onClick={closeNav}>
              Home
            </a>
          </Link>
          <Link href="#presale" passHref legacyBehavior>
            <a className="md:text-xl text-4xl" onClick={closeNav}>
              Presale
            </a>
          </Link>

          <Link href="#adventure" passHref legacyBehavior>
            <a className="md:text-xl text-4xl" onClick={closeNav}>
              Adventure
            </a>
          </Link>

          <Link href="#tokenomics" passHref legacyBehavior>
            <a className="md:text-xl text-4xl" onClick={closeNav}>
              Tokenomics
            </a>
          </Link>

          <Link href="#home" passHref legacyBehavior>
            <a
              className="transition-all md:text-xl text-4xl"
              onClick={closeNav}
            >
              Socials
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
