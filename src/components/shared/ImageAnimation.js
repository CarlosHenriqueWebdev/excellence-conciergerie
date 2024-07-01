import React, { useState } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function DetailImage({
  src,
  className,
  classNameContainer,
  width,
  height,
}) {
  return (
    <div className={`${classNameContainer}`}>
      <Image
        className={`${className}`}
        src={src}
        alt=""
        responsive
        width={width}
        height={height}
        quality={100}
      />
    </div>
  );
}
