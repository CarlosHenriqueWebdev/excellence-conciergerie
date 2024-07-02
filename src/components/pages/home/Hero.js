import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function Hero() {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
    if (isVideoReady) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  }, [isVideoReady]);

  const handleLoadedData = () => {
    setIsVideoReady(true);
  };

  useScrollTriggerAnimation(containerRef, {
    panelScroll: true,
  });

  return (
    <div ref={containerRef} onClick={handlePlayButtonClick}>
      <div className="bg-[url('/assets/images/img9.webp')] bg-cover lg:bg-none panel select-none lg:cursor-pointer relative flex justify-center items-center">
        <video
          ref={videoRef}
          className="hidden lg:block absolute top-0 left-0 object-cover w-full h-full"
          loop
          muted
          preload="metadata"
          onLoadedData={handleLoadedData}
        >
          <source src="/assets/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-[20] py-[120px] lg:py-[0] lg:h-[75vh] justify-center items-center px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col w-full">
          <div className="font-bold uppercase flex flex-col gap-[16px] items-center">
            <DetailText text={t("heroSubtitle")} />
            <h1 className="text-[1.75rem] text-center">{t("heroTitle")}</h1>
          </div>

          <div className="hidden lg:block hover:brightness-75 absolute z-[20] bottom-[12px] left-0 px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] opacity-[0.8]">
            <Image
              src={
                isPlaying
                  ? "/assets/images/vector21.svg"
                  : "/assets/images/vector20.svg"
              }
              intrinsic="true"
              alt="play and pause button"
              width={20}
              height={20}
              quality={100}
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
