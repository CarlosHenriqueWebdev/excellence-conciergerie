import { useState } from "react";
import DetailText from "@/components/shared/DetailText";
import ImageAnimation from "@/components/shared/ImageAnimation";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Faq({ translations }) {
  const { t } = useTranslation();
  const faq = t("faq", { returnObjects: true });
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="bg-deep-night py-[100px]">
      <div className="flex flex-col gap-[24px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[16px]">
            <DetailText text={t("faqSubtitle")} />
            <h2 className="uppercase text-[24px] font-bold">{t("faqTitle")}</h2>
          </div>
        </div>

        <ul className="flex flex-col gap-[16px]">
          {faq.map((item, index) => (
            <li
              key={index}
              onClick={() => toggleFaq(index)}
              className="hover:brightness-90 cursor-pointer font-semibold bg-graphite-gray rounded-[4px] px-[16px] py-[16px] flex flex-col"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3>{item.title}</h3>
                <Image
                  src="/assets/images/vector4.svg"
                  intrinsic
                  width={12}
                  height={12}
                  quality={100}
                  className={`transition-transform ${
                    openIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden ${
                  openIndexes.includes(index)
                    ? "transition-max-height max-h-[500px]"
                    : "transition-max-height-closed max-h-[0px]"
                }`}
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
  );
}
