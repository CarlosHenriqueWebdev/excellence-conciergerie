import React from "react";
import Image from "next/image";

export default function DetailText({ text }) {
  return (
    <div
      aria-hidden={true}
      className="w-fit flex gap-[8px] items-baseline text-[0.75rem] text-light-gray"
    >
      <Image
        aria-hidden={true}
        src="/assets/images/star.webp"
        alt="golden star detail"
        intrinsic="true"
        width={14}
        height={14}
        quality={100}
      />
      <span className="tracking-[2px] font-bold uppercase">{text}</span>
    </div>
  );
}
