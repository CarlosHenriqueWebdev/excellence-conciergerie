import { useEffect, useRef, useState } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import ImageAnimation from "@/components/shared/ImageAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation, Loop } from "swiper/modules";
import Image from "next/image";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function Services() {
  const { t } = useTranslation();

  const containerRef = useRef(null);

  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.realIndex);
    }
  };

  const handleButtonClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  useScrollTriggerAnimation(containerRef, {
    entranceScroll: true,
    entranceScrollDuration: 2,
  });

  return (
    <div ref={containerRef}>
      <div>
        <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[16px] mb-[32px]">
          <div className="item">
            <DetailText text={t("servicesSubtitle")} />
          </div>
          <h2 className="item uppercase text-[20px] font-bold">
            {t("servicesTitle")}
          </h2>
        </div>

        <div className="item px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
          <Swiper
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={100}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
          >
            {t("services", { returnObjects: true }).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr] select-none cursor-grab">
                  <div>
                    <Image
                      src={`/assets/images/${item.image}`}
                      responsive
                      width={440}
                      height={356}
                      quality={100}
                      className="h-full object-cover border-solid border-[3px] border-golden-sunbeam rounded-[4px]"
                    />
                  </div>

                  <div className="md:py-[16px] lg:pb-[40px]">
                    <div className="flex flex-col gap-[20px] h-[300px] overflow-y-auto">
                      <div className="flex flex-col gap-[16px]">
                        <h3 className="uppercase text-[20px] font-bold">
                          {item.title}
                        </h3>

                        <div className="flex flex-col gap-[16px] text-light-gray font-medium">
                          <p>{item.description}</p>
                        </div>
                      </div>

                      <ul className="flex flex-col gap-[12px]">
                        {item.pros.map((proItem, proIndex) => (
                          <li
                            key={proIndex}
                            className="flex items-baseline gap-[8px]"
                          >
                            <Image
                              src={`/assets/images/vector16.svg`}
                              width={12}
                              height={12}
                              quality={100}
                            />
                            <p className="font-medium">{proItem.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex w-full justify-between gap-[4px] mt-[32px]">
            {t("services", { returnObjects: true }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`relative rounded-[2px] w-full bg-white-50 h-[3px] ${
                  activeIndex === index ? "!bg-lavender-haze" : ""
                }`}
              >
                <div className="h-[36px] w-full absolute top-[-16px]"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
