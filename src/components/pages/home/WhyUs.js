import { useState } from "react";
import DetailText from "@/components/shared/DetailText";
import ImageAnimation from "@/components/shared/ImageAnimation";
import { useTranslation } from "next-i18next";
import AnimatedListItem from "@/components/shared/AnimatedListItem";

export default function WhyUs({ translations }) {
  const { t } = useTranslation();
  const reasons = t("whyUsReasons", { returnObjects: true });
  const [openIndexes, setOpenIndexes] = useState([0]);
  const [closingIndex, setClosingIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setClosingIndex(index);
      setTimeout(() => {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
        setClosingIndex(null);
      }, 500);
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
      <div className="md:order-[1]">
        <ImageAnimation
          src="/assets/images/img2.jpg"
          delay="!delay-[0.475s]"
          className="block h-[250px] lg:h-[350px] w-full border-solid border-[3px] border-golden-sunbeam rounded-[4px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-[24px] md:py-[16px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[16px]">
            <DetailText text={t("whyUsSubtitle")} />
            <h2 className="uppercase text-[24px] font-bold">
              {t("whyUsTitle")}
            </h2>
          </div>

          <div className="flex flex-col gap-[16px] text-light-gray font-medium">
            <p>{t("whyUsDescription")}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-[16px] select-none">
          {reasons.map((item, index) => (
            <AnimatedListItem
              key={index}
              index={index}
              onClick={toggleFaq}
              isOpen={openIndexes.includes(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex items-center gap-[8px]">
                  <img
                    src={`/assets/images/${item.icon}`}
                    alt=""
                    className={`h-[16px] block ${openIndexes.includes(index) ? "heartbeat" : ""}`}
                  />
                  <h3>{item.title}</h3>
                </div>
                <img
                  src="/assets/images/vector4.svg"
                  alt=""
                  className={`h-[12px] block transition-transform ${
                    openIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndexes.includes(index) && (
                <div
                  className={`${
                    closingIndex === index
                      ? "dropdown-close-animation"
                      : openIndexes.includes(index)
                        ? "dropdown-open-animation"
                        : ""
                  }`}
                >
                  <p className="font-medium text-light-gray">
                    {item.description}
                  </p>
                </div>
              )}
            </AnimatedListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
