import { useEffect, useRef, useState } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function Packs({ translations }) {
  const { t } = useTranslation();

  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] w-full">
        <div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
          <div className="item">
            <DetailText text={t("packsSubtitle")} />
          </div>
          <h2 className="item uppercase text-[20px] font-bold">
            {t("packsTitle")}
          </h2>
        </div>

        <ul className="flex flex-col gap-[24px] md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] w-full">
          {t("packs", { returnObjects: true }).map((item, index) => (
            <li
              key={index}
              className="item hover:scale-[1.02] transition-scale bg-twilight-gray rounded-[4px] flex flex-col w-full overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div
                  style={{
                    backgroundImage: `url(/assets/images/${item.pattern})`,
                  }}
                  className="scrollBackgroundAnimation flex flex-col gap-[16px] p-[24px] !bg-repeat !bg-[length:50%] md:text-center md:justify-center md:items-center"
                >
                  <Image
                    src={`/assets/images/${item.icon}`}
                    intrinsic
                    width={36}
                    height={36}
                    quality={100}
                    className="item block h-[36px] w-[36px] md:h-[49px] md:w-[49px]"
                  />

                  <div className="flex flex-col gap-[12px] font-bold uppercase">
                    <h3 className="item text-[20px]">{item.title}</h3>
                    <span className="item text-white-75 text-[16px]">
                      {item.subTitle}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-[32px] p-[24px] justify-between h-full">
                  <ul className="item flex flex-col gap-[12px]">
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

                  <ScrollLink
                    className="item btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-fit md:self-center cursor-pointer md:text-center"
                    to="contact"
                    smooth={true}
                    duration={1200}
                    offset={-120}
                  >
                    {t("packsButton")}
                  </ScrollLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
