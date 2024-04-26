import { twMerge } from "tailwind-merge";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={twMerge(
        "flex justify-center bg-[#FFA500] py-5 mx-2",
        className
      )}
    >
      <div className="flex flex-col w-full text-center">
        <p className="text-xs italic">
          Swaggy Monsters is a meme coin with no intrinsic value or expectation
          of financial return. The coin is completely useless and for
          entertainment purposes only.
        </p>
        <p className="text-xs mt-5">
          © 2024 by Swaggy Monsters. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
