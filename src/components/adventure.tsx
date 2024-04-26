"use client";
import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";

export default function Adventure() {
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
    handleResize(); // Call once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <div></div>;
}
