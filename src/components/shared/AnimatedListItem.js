import React, { useState, useEffect, useRef } from "react";

function AnimatedListItem({ children, index, onClick, isOpen }) {
  const itemRef = useRef(null);
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
        threshold: 1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <li
      ref={itemRef}
      onClick={() => onClick(index)}
      className={`hover:brightness-90 cursor-pointer font-semibold bg-graphite-gray rounded-[4px] px-[16px] py-[16px] flex flex-col animation-setup ${isVisible ? 'list-animation' : ''}`}
    >
      {children}
    </li>
  );
}

export default AnimatedListItem;
