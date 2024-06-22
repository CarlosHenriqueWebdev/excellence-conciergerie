import { useEffect, useRef, useState } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";

export default function Hero({ translations, isWhyUsInView }) {
  const { t } = useTranslation();

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [effectRan, setEffectRan] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePlayButtonClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      setEffectRan(true)
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsPlaying(false);
      videoRef.current.pause();
    } else if (isWhyUsInView && videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
    } else if (!isWhyUsInView && videoRef.current && !isMobile) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  }, [isWhyUsInView, isMobile]);

  return (
    <div
      onClick={handlePlayButtonClick}
      className="select-none cursor-pointer relative flex justify-center items-center"
    >
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
      <div className="relative z-[20] h-[75vh] flex justify-center items-center px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
        {!isPlaying && effectRan ? (
          <button
            onClick={handlePlayButtonClick}
            className="hover:brightness-75"
          >
            <img
              src="/assets/images/vector7.svg"
              alt="Play Button"
              className="w-16 h-16"
            />
          </button>
        ) : (
          <div className="font-bold uppercase flex flex-col gap-[16px] items-center">
            <div className="w-fit flex gap-[8px] items-center text-[12px] text-light-gray">
              <img
                src="/assets/images/star.png"
                alt="Star Icon"
                className="h-[14px]"
              />
              <span className="tracking-[2px] font-bold uppercase">
                {t("heroSubtitle")}
              </span>
            </div>
            <h1 className="text-[28px] text-center">{t("heroTitle")}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
