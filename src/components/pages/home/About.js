import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="md:h-[full] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
      <div
        ref={ref}
        className={`${isInView ? "animated fadeInUp" : "opacity-0"}`}
      >
        <Image
          aria-hidden={true}
          src="/assets/images/img1.webp"
          className="block w-full object-cover border-solid border-[3px] border-golden-sunbeam rounded-[4px]"
          intrinsic="true"
          alt="french city houses"
          width={450}
          height={300}
          quality={100}
        />
      </div>

      <div className="flex flex-col gap-[20px] md:py-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="item">
            <DetailText text={t("introductionSubtitle")} />
          </div>

          <h2 id="about" className={`item uppercase text-[1.5rem] font-bold`}>
            {t("introductionTitle")}
          </h2>
        </div>

        <div className="flex flex-col gap-[16px] text-light-gray font-medium">
          {t("introductionDescription", { returnObjects: true })?.map(
            (item, index) => (
              <p key={index} className="item">
                {item.text}
              </p>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
