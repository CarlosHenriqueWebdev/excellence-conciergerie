import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRef, useState } from "react";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function Faq() {
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

  const containerRef = useRef(null);
  useScrollTriggerAnimation(containerRef, {
    entranceScroll: true,
    entranceScrollDuration: 2,
  });

  return (
    <div ref={containerRef}>
      <div className="bg-deep-night py-[100px]">
        <div className="flex flex-col gap-[24px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <div className="item">
                <DetailText text={t("faqSubtitle")} />
              </div>
              <h2 className="item uppercase text-[1.5rem] font-bold">
                {t("faqTitle")}
              </h2>
            </div>
          </div>

          <ul className="flex flex-col gap-[16px]">
            {faq?.map((item, index) => (
              <li
                key={index}
                onClick={() => toggleFaq(index)}
                className="item hover:brightness-90 cursor-pointer font-semibold bg-graphite-gray rounded-[4px] px-[16px] py-[16px] flex flex-col"
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h3>{item.title}</h3>
                  <Image
                    src="/assets/images/vector4.svg"
                    alt="arrow"
                    intrinsic="true"
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
    </div>
  );
}
