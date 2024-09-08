import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Faq() {
  const { t } = useTranslation();

  const introRef = useRef(null);
  const listRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: true });
  const isListInView = useInView(listRef, { once: true });

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
        <div
          ref={introRef}
          className={`${isIntroInView ? "animated fadeInUp" : "opacity-0"} flex flex-col gap-[20px]`}
        >
          <div className="flex flex-col gap-[16px]">
            <div className="item">
              <DetailText text={t("faqSubtitle")} />
            </div>
            <h2
              id="questions"
              className="item uppercase text-[1.5rem] font-bold"
            >
              {t("faqTitle")}
            </h2>
          </div>
        </div>

        <ul
          ref={listRef}
          className={`${isListInView ? "animated fadeInUp" : "opacity-0"} flex flex-col gap-[16px]`}
        >
          {faq?.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndexes.includes(index)}
                className="item hover:brightness-90 cursor-pointer font-semibold bg-graphite-gray rounded-[4px] px-[16px] py-[16px] flex flex-col"
              >
                <div className="flex justify-between items-center cursor-pointer w-full">
                  <h3>{item.title}</h3>
                  <Image
                    aria-hidden={true}
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
                  <p
                    aria-hidden={!openIndexes.includes(index)}
                    className="text-start font-medium text-light-gray pt-[16px]"
                  >
                    {item.description}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
