import { useEffect, useRef, useState } from "react";
import DetailText from "@/components/shared/DetailText";
import ImageAnimation from "@/components/shared/ImageAnimation";
import { useTranslation } from "next-i18next";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function About() {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  useScrollTriggerAnimation(containerRef, {
    commonScroll: true,
  });

  return (
    <div ref={containerRef} className="md:h-[200vh]">
      <div className="md:sticky md:top-0 pt-[100px] md:h-[full] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
        <div className="item">
          <ImageAnimation
            src="/assets/images/img1.webp"
            width="450"
            height="300"
            className="block w-full object-cover"
            classNameContainer="border-solid border-[3px] border-golden-sunbeam rounded-[4px] overflow-hidden"
          />
        </div>

        <div className="flex flex-col gap-[20px] md:py-[16px]">
          <div className="flex flex-col gap-[16px]">
            <div className="item">
              <DetailText text={t("introductionSubtitle")} />
            </div>

            <h2 className={`item uppercase text-[24px] font-bold`}>
              {t("introductionTitle")}
            </h2>
          </div>

          <div className="flex flex-col gap-[16px] text-light-gray font-medium">
            {t("introductionDescription", { returnObjects: true }).map(
              (item, index) => (
                <p key={index} className="item">
                  {item.text}
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
