import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function DetailText({ text }) {
  return (
    <div className="w-fit flex gap-[8px] items-baseline text-[12px] text-light-gray">
      <Image
        src="/assets/images/star.webp"
        alt=""
        intrinsic
        width={14}
        height={14}
        quality={100}
      />
      <span className="tracking-[2px] font-bold uppercase">{text}</span>
    </div>
  );
}
