import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function Hero() {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

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
    };
  }, []);

  useEffect(() => {
    if (isVideoReady) {
      if (isMobile) {
        setIsPlaying(false);
        videoRef.current.pause();
      } else {
        setIsPlaying(true);
        videoRef.current.play();
      }
    }
  }, [isMobile, isVideoReady]);

  const handleLoadedData = () => {
    setIsVideoReady(true);
  };

  useScrollTriggerAnimation(containerRef, false, true);

  return (
    <div ref={containerRef} onClick={handlePlayButtonClick}>
      <div className="panel select-none cursor-pointer relative flex justify-center items-center">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 object-cover w-full h-full"
          loop
          muted
          preload="metadata"
          onLoadedData={handleLoadedData}
        >
          <source src="/assets/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-[20] h-[75vh] flex justify-center items-center px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col w-full">
          <div className="font-bold uppercase flex flex-col gap-[16px] items-center">
            <DetailText text={t("heroSubtitle")} />
            <h1 className="text-[28px] text-center">{t("heroTitle")}</h1>
          </div>

          <button className="hover:brightness-75 absolute z-[9999] bottom-[12px] left-0 px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] opacity-[0.8]">
            <Image
              src={
                isPlaying
                  ? "/assets/images/vector21.svg"
                  : "/assets/images/vector20.svg"
              }
              intrinsic
              width={20}
              height={20}
              quality={100}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
