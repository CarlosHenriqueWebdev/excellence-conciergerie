import { useEffect, useRef, useState } from "react";
import DetailText from "@/components/shared/DetailText";
import ImageAnimation from "@/components/shared/ImageAnimation";
import { useTranslation } from "next-i18next";
import Sparkle from 'react-sparkle'

export default function Message({ translations }) {
  const { t } = useTranslation();

  return (
    <div className={`py-[100px] bg-cover bg-fixed bg-[url('/assets/images/img3.jpg')] border-solid border-y-[8px] border-[#020201]`}>
      <div className="bg-deep-night py-[56px]">
        <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px] md:justify-center md:items-center md:text-center">
          <div className="relative w-fit">
            <img
              src="/assets/images/she1.jpg"
              alt=""
              className="block border-solid border-[1px] border-golden-sunbeam rounded-[100%] object-cover h-[50px] w-[50px]"
            />
            <Sparkle count={7} color={'#E7E3E7'} fadeOutSpeed={15} />
          </div>

          <div className="flex flex-col gap-[20px] md:justify-center md:items-center">
            <div className="flex flex-col gap-[16px] md:justify-center md:items-center">
              <DetailText text={t("introductionSubtitle")} />
              <h2 className="uppercase text-[24px] font-bold">
                {t("introductionTitle")}
              </h2>
            </div>

            <div className="flex flex-col gap-[16px] text-light-gray font-medium">
              <p className="md:max-w-[800px]">{t("whyUsDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
