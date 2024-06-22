import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

export default function FirstParallaxObject() {
  return (
    <Parallax translateY={[-200, 0]} translateX={[800, -200]} className="hidden md:block opacity-[1] w-fit absolute z-[2] pointer-events-none hover:opacity-[0.2]">
      <img
        src="/assets/images/detail1.png"
        alt=""
        className="h-[120px] w-[120px]"
      />
    </Parallax>
  );
}
