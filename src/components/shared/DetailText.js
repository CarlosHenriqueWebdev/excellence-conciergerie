import React, { useState, useEffect, useRef } from "react";

export default function DetailText({ text }) {
  const [overlayLeft, setOverlayLeft] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOverlayLeft(100);
          observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef} className="relative w-fit overflow-hidden">
      <div
        className="absolute top-0 bottom-0 bg-midnight-blue z-[1]"
        style={{
          left: `${overlayLeft}%`,
          width: "100%",
          transition: "left 0.5s ease-in",
        }}
      ></div>
      <div className="w-fit flex gap-[8px] items-center text-[12px] text-light-gray">
        <img src="/assets/images/star.png" alt="Star Icon" className="h-[14px]" />
        <span className="tracking-[2px] font-bold uppercase">{text}</span>
      </div>
    </div>
  );
}
