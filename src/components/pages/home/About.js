import { useEffect, useRef, useState } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";

export default function About({ translations }) {
  const { t } = useTranslation();

  return (
    <div className="px-[24px] py-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
      <div>
        <img
          src={`/assets/images/img1.jpg`}
          alt=""
          className="block h-[250px] lg:h-[280px] w-full border-solid border-[3px] border-golden-sunbeam rounded-[4px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-[16px] md:py-[16px]">
        <div className="flex flex-col gap-[16px]">
          <DetailText text={t('introductionSubtitle')} />
          <h2 className="uppercase text-[24px] font-bold">
            {t('introductionTitle')}
          </h2>
        </div>

        <div className="flex flex-col gap-[16px] text-light-gray font-medium">
          {t("introductionDescription", { returnObjects: true }).map((item, index) => (
            <p
              key={index}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
