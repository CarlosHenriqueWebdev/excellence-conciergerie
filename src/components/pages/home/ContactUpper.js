import { useEffect, useRef, useState } from "react";
import DetailText from "@/components/shared/DetailText";
import ImageAnimation from "@/components/shared/ImageAnimation";
import { useTranslation } from "next-i18next";
import Sparkle from 'react-sparkle'

export default function ContactUpper({ translations }) {
  const { t } = useTranslation();

  return (
    <div className={`py-[100px] bg-cover bg-fixed bg-[url('/assets/images/img8.jpg')] border-solid border-y-[8px] border-[#020201]`}>
      <div className="bg-deep-night py-[56px]">
        <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <DetailText text={t("contactSubtitle")} />
              <h2 className="uppercase text-[24px] font-bold">
                {t("contactTitle")}
              </h2>
            </div>

            <div className="flex flex-col gap-[16px] text-light-gray font-medium">
              <p className="md:max-w-[800px]">{t("contactDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
