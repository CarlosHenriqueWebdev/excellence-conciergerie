import { useRef } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import useScrollTriggerAnimation from "@/components/hooks/useScrollTriggerAnimation";

export default function Packs() {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  useScrollTriggerAnimation(containerRef, {
    entranceScroll: true,
    entranceScrollDuration: 5,
  });

  const handleButtonClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }, 100);
    }
  };

  return (
    <div ref={containerRef}>
      <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] w-full">
        <div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
          <div className="item">
            <DetailText text={t("packsSubtitle")} />
          </div>
          <h2
            id="subscriptions"
            className="item uppercase text-[1.25rem] font-bold"
          >
            {t("packsTitle")}
          </h2>
        </div>

        <ul className="flex flex-col gap-[24px] md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] w-full">
          {t("packs", { returnObjects: true })?.map((item, index) => (
            <li
              key={index}
              className="item hover:scale-[1.02] transition-scale bg-twilight-gray rounded-[4px] flex flex-col w-full overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div
                  style={{
                    backgroundImage: `url(/assets/images/${item.pattern})`,
                  }}
                  className="scrollBackgroundAnimation flex flex-col gap-[16px] p-[24px] !bg-repeat !bg-[length:50%] md:text-center md:justify-center md:items-center"
                >
                  <Image
                    aria-hidden={true}
                    src={`/assets/images/${item.icon}`}
                    alt={`${item.title} illustration icon`}
                    intrinsic="true"
                    width={36}
                    height={36}
                    quality={100}
                    className="item block h-[36px] w-[36px] md:h-[49px] md:w-[49px]"
                  />

                  <div className="flex flex-col gap-[12px] font-bold uppercase">
                    <h3 className="item text-[1.25rem]">{item.title}</h3>
                    <span className="item text-white-75 text-[1rem]">
                      {item.subTitle}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-[32px] p-[24px] justify-between h-full">
                  <ul className="item flex flex-col gap-[12px]">
                    {item.pros?.map((proItem, proIndex) => (
                      <li
                        key={proIndex}
                        className="flex items-baseline gap-[8px]"
                      >
                        <Image
                          aria-hidden={true}
                          src={`/assets/images/vector16.svg`}
                          alt="golden checkmark"
                          intrinsic="true"
                          width={12}
                          height={12}
                          quality={100}
                          className="w-[12px] h-[12px]"
                        />
                        <p className="font-medium">{proItem.text}</p>
                      </li>
                    ))}
                  </ul>

                  <ScrollLink
                    className="item btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-fit md:self-center cursor-pointer md:text-center"
                    to="contact"
                    tabIndex="0"
                    onClick={() => handleButtonClick("contact")}
                  >
                    {t("packsButton")}{" "}
                  </ScrollLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
