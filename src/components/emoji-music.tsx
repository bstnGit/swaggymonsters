"use client";

import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";

export default function EmojiMusic() {
  const [videoOpts, setVideoOpts] = useState({
    height: "480",
    width: "640",
  });
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setVideoOpts({ height: "360", width: "100%" }); // Adjust for smaller screens
      } else {
        setVideoOpts({ height: "480", width: "640" });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className="bg-[#8b8881] flex items-center w-full justify-center h-screen flex-col gap-20"
      id="adventure"
    >
      <div className="z-[2000]">
        <h1 className="text-white text-2xl font-bold tracking-wider ">
          Adventure
        </h1>

        <YouTube videoId="kK0AHd9N7dk" opts={videoOpts} />
      </div>

      <iframe
        className="absolute z-[200]"
        src="https://www.firemove.de/swag/emoji-music/1/index.html"
        title="Layer 2"
        width="100%"
        height="100%"
      />

      <iframe
        className="absolute z-[100]"
        src="https://www.firemove.de/swag/emoji-music/2/index.html"
        title="Layer 1"
        width="100%"
        height="100%"
      />

      <div className="absolute top-0 left-0 w-full h-screen z-[1000]"></div>
    </section>
  );
}
