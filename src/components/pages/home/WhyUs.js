import { useState, useRef } from "react";
import DetailText from "@/components/shared/DetailText";
import ImageAnimation from "@/components/shared/ImageAnimation";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function WhyUs() {
  const { t } = useTranslation();

  const containerRef = useRef(null);

  const reasons = t("whyUsReasons", { returnObjects: true });
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  useScrollTriggerAnimation(containerRef, {
    entranceScroll: true,
    entranceScrollDuration: 2,
  });

  return (
    <div ref={containerRef}>
      <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
        <div className="item md:order-[1]">
          <ImageAnimation
            src="/assets/images/img2.webp"
            width="630"
            height="440"
            className="block w-full object-cover"
            classNameContainer="border-solid border-[3px] border-golden-sunbeam rounded-[4px] overflow-hidden"
          />
        </div>

        <div className="flex flex-col gap-[24px] md:py-[16px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <div className="item">
                <DetailText text={t("whyUsSubtitle")} />
              </div>
              <h2 className="item uppercase text-[24px] font-bold">
                {t("whyUsTitle")}
              </h2>
            </div>

            <div className="item flex flex-col gap-[16px] text-light-gray font-medium">
              <p>{t("whyUsDescription")}</p>
            </div>
          </div>

          <ul className="item flex flex-col gap-[16px]">
            {reasons.map((item, index) => (
              <li
                key={index}
                onClick={() => toggleFaq(index)}
                className={`item hover:brightness-90 cursor-pointer font-semibold bg-graphite-gray rounded-[4px] px-[16px] py-[16px] flex flex-col`}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex items-center gap-[8px]">
                    <Image
                      src={`/assets/images/${item.icon}`}
                      width={16}
                      height={16}
                      quality={100}
                      className={`${openIndexes.includes(index) ? "heartbeat" : ""}`}
                    />
                    <h3>{item.title}</h3>
                  </div>
                  <Image
                    src="/assets/images/vector4.svg"
                    width={16}
                    height={16}
                    quality={100}
                    className={`transition-transform ${openIndexes.includes(index) ? "rotate-180" : ""}`}
                  />
                </div>

                <div
                  className={`overflow-hidden ${openIndexes.includes(index) ? "transition-max-height max-h-[500px]" : "transition-max-height-closed max-h-[0px]"}`}
                >
                  <p className="font-medium text-light-gray pt-[16px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
