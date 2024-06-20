import React, { useState, useEffect, useRef } from "react";

export default function AnimationText() {
  const [overlayWidth, setOverlayWidth] = useState(100);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the target element enters the viewport
          setOverlayWidth(0);
          // Optionally, you can disconnect the observer if you only want the animation to play once
          observer.disconnect();
        }
      },
      {
        // Set the threshold to trigger the animation when 50% of the target element is visible
        threshold: 0.5,
      }
    );

    // Start observing the target element
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup function
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="pb-[600px] bg-pink-100"></div>
      <div
        ref={targetRef}
        className="bg-midnight-blue h-[500px] flex justify-center items-center relative"
      >
        <div>
          <h1 className="text-[32px] font-bold">My Very Long Text Here</h1>
          <h2 className="text-[24px] font-bold">My Very Long Text Here</h2>
          <div
            className="absolute top-0 left-0 bottom-0 bg-midnight-blue z-[1]"
            style={{
              width: `${overlayWidth}%`,
              transition: "width 2s",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
