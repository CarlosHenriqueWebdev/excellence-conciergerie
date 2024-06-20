import React, { useState, useEffect } from 'react';

export default function Test() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const overlayOpacity = Math.min(0.3, scrollOffset / 100);

  return (
    <div className="relative">
      <div className="bg-blue-500 h-20">Header</div>
      <div className="bg-green-500 h-60 sticky top-0 overflow-hidden relative">
        <div
          className="h-full w-full absolute top-0 left-0"
          style={{
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1718204436526-277f9f34607c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: `blur(${scrollOffset / 5}px)`,
            transform: `scale(${1 + scrollOffset / 10000})`,
          }}
        />
        <div
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
          className="h-full w-full absolute top-0 left-0"
        />
        Hero
      </div>
      <div className="bg-red-500 h-screen relative" style={{ boxShadow: '0 -20px 40px rgba(0, 0, 0, 0.5)' }}>
        <div className="">Content</div>
      </div>
    </div>
  );
}
