import React, { useState, useEffect, useRef } from "react";

export default function DetailImage({ src, className, delay }) {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <div ref={targetRef}>
      <img
        className={`${className} animation-setup ${isVisible ? 'img-animation' : ''}`}
        src={src}
        alt=""
      />
    </div>
  );
}
