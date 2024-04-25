"use client";

import YouTube from "react-youtube";
import React from "react";

export default function Adventure() {
  return (
    <section
      className="bg-[#8b8881] flex items-center w-full justify-center h-screen flex-col gap-20"
      id="adventure"
    >
      <h1 className="text-white text-2xl font-bold tracking-wider ">
        Adventure
      </h1>

      <YouTube videoId="kK0AHd9N7dk" />
    </section>
  );
}
