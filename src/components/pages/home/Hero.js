import { useEffect, useRef, useState } from 'react';
import DetailText from '@/components/shared/DetailText';
import { useTranslation } from 'next-i18next';

export default function Hero({ translations }) {
  const { t } = useTranslation();

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [effectRan, setEffectRan] = useState(false); // Add a state to track if useEffect has run

  const handlePlayButtonClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      } else if (window.innerWidth >= 768 && isPlaying === false) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    };

    // Initial check
    if (window.innerWidth >= 768) {
      videoRef.current.play();
      setIsPlaying(true);
    }

    setEffectRan(true); // Set effectRan to true after the initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying]);

  return (
    <div className="relative flex justify-center items-center">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 object-cover w-full h-full"
        loop
        muted
      >
        <source src="/assets/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <div className="relative z-[20] py-[160px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
        {effectRan && !isPlaying ? ( // Render only if effectRan is true
          <button
            onClick={handlePlayButtonClick}
            className="hover:brightness-75"
          >
            <img src="/assets/images/vector7.svg" alt="Play Button" className="w-16 h-16" />
          </button>
        ) : (
          effectRan && ( // Render only if effectRan is true
          <div className="font-bold uppercase flex flex-col gap-[16px] items-center">
            <DetailText text={t('heroSubtitle')} />
            <h1 className="text-[28px] text-center">{t('heroTitle')}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
