import React, { useState, useEffect, useRef } from "react";

export default function DetailImage({ src, className, delay }) {
  const [overlayTop, setOverlayTop] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOverlayTop(100);
          observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      {
        threshold: 0.5,
      },
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
    <div ref={targetRef} className="relative">
      <div
        className={`w-full absolute bottom-0 z-[1] bg-midnight-blue ${delay}`}
        style={{
          top: `${overlayTop}%`,
          width: "100%",
          transition: `top 0.5s ease-in`,
        }}
      ></div>
      <img
        className={className}
        src={src}
        alt=""
      />
    </div>
  );
}
