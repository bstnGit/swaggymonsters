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
          className={`flex justify-center mx-auto cursor-pointer items-center`}
          onClick={toggleNav}
        >
          <FaBars className="w-10 h-10" />
        </div>

        <ul
          className={`flex cursor-pointer flex-col items-center w-fit mx-auto justify-center gap-5 min-h-10 z-20 p-[30px] rounded-xl [&_a]:text-2xl ${
            isNavOpen ? "bg-black" : "hidden"
          }`}
        >
          <Link href="#home" passHref legacyBehavior>
            <a className="" onClick={closeNav}>
              Home
            </a>
          </Link>
          <Link href="#presale" passHref legacyBehavior>
            <a className="" onClick={closeNav}>
              Presale
            </a>
          </Link>

          <Link href="#adventure" passHref legacyBehavior>
            <a className="" onClick={closeNav}>
              Adventure
            </a>
          </Link>

          <Link href="#tokenomics" passHref legacyBehavior>
            <a className="" onClick={closeNav}>
              Tokenomics
            </a>
          </Link>

          <Link href="#home" passHref legacyBehavior>
            <a className="" onClick={closeNav}>
              Socials
            </a>
          </Link>
        </ul>
      </nav>
      {isNavOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-10"
          onClick={toggleNav}
        />
      )}
    </header>
  );
}
