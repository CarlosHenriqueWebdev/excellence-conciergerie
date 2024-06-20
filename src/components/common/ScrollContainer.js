// ScrollContainer.js
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        // Add any other options you need
      });
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollContainer;
