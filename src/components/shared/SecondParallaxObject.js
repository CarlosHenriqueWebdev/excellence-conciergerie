import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

export default function SecondParallaxObject() {
  return (
    <Parallax translateY={[-0, 0]} translateX={[800, -200]} className="hidden md:block opacity-[1] w-fit absolute z-[2] top-[-110px] pointer-events-none">
      <img
        src="/assets/images/detail2.png"
        alt=""
        className="h-[120px] w-full"
      />
    </Parallax>
  );
}
