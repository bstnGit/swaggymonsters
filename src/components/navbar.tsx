import { Swaggy } from "../../public/swaggymonster";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";

export default async function Navbar({ className }: { className?: string }) {
  return (
    <header className="[&_p]:text-lg [&_p]:lg:block [&_p]:hidden">
      <nav
        className={twMerge(
          "relative top-0 left-0 bg-[#EC0203] py-4 w-full mx-auto flex items-center border-b-4 text-white border-[#FFC919] min-h-22",
          className
        )}
      >
        <div className="absolute top-[40%] left-[15%]">
          <Swaggy />
        </div>

        <ul className="flex items-center w-fit mx-auto justify-center gap-12">
          <li>
            <Link href="#">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              <p>Presale</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              <p>Tokenomics</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              <p>Roadmap</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b-2 border-transparent hover:border-[#FFC919] hover:font-semibold transition-all"
            >
              <p>Kontakt</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
