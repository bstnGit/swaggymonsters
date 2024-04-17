import { Swaggy } from "@/assets/swaggymonster";
import classNames from "classnames";

export default function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={classNames(
        "bg-[#EC0203]  py-4  w-full mx-auto flex items-center border-b-4 text-white font-semibold border-[#FFC919]",
        className
      )}
    >
      <div className="absolute top-[40%] left-[20%]">
        <Swaggy />
      </div>
      <ul className="flex items-center w-full justify-center gap-12  [&_a:hover]:text-blue-500">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Presale</a>
        </li>
        <li>
          <a href="">Tokenomics</a>
        </li>
        <li>
          <a href="">Swagger</a>
        </li>
        <li>
          <a href="">Kontakt</a>
        </li>
      </ul>
    </header>
  );
}
