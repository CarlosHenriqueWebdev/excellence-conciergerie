import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Sparkle from "react-sparkle";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Message() {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      className={`bg-[url('/assets/images/img3.webp')] py-[100px] bg-cover bg-fixed border-solid border-y-[8px] border-[#020201]`}
    >
      <div className="bg-deep-night py-[56px]">
        <div
          ref={containerRef}
          className={`${isInView ? "animated fadeInUp" : "opacity-0"} px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px] md:justify-center md:items-center md:text-center`}
        >
          <div className="item relative w-fit">
            <Image
              aria-hidden={true}
              src="/assets/images/she1.webp"
              alt="excellence ceo picture"
              intrinsic="true"
              width={50}
              height={50}
              quality={100}
              className="border-solid border-[1px] border-golden-sunbeam rounded-[100%]"
            />
            <Sparkle count={7} color={"#E7E3E7"} fadeOutSpeed={15} />
          </div>

          <div className="flex flex-col gap-[20px] md:justify-center md:items-center">
            <div className="flex flex-col gap-[16px] md:justify-center md:items-center">
              <div className="item">
                <DetailText text={t("messageSubtitle")} />
              </div>
              <h2
                id="message"
                className="item uppercase text-[1.5rem] font-bold"
              >
                {t("messageTitle")}
              </h2>
            </div>

            <div className="flex flex-col gap-[16px] text-light-gray font-medium">
              <p className="item md:max-w-[800px]">{t("messageDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
