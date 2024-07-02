import { useRef } from "react";
import DetailText from "@/components/shared/DetailText";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

export default function ContactUpper() {
  const { t } = useTranslation();

  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <div
        className={`py-[100px] bg-cover bg-fixed bg-[url('/assets/images/img8.webp')] border-solid border-y-[8px] border-[#020201]`}
      >
        <div className="bg-deep-night py-[56px]">
          <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[16px]">
                <div className="item">
                  <DetailText text={t("contactSubtitle")} />
                </div>
                <h2 className="item uppercase text-[1.5rem] font-bold">
                  {t("contactTitle")}
                </h2>
              </div>

              <div className="flex flex-col gap-[16px] text-light-gray font-medium">
                <p className="item md:max-w-[800px]">
                  {t("contactDescription")}
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-[16px]">
              {t("contactInfo", { returnObjects: true })?.map((item, index) => {
                let href;
                switch (item.type) {
                  case "email":
                    href = `mailto:${item.link}`;
                    break;
                  case "whatsapp":
                    href = `https://wa.me/${item.link}`;
                    break;
                  case "phone":
                    href = `tel:${item.link}`;
                    break;
                  case "url":
                    href = item.link;
                    break;
                  default:
                    href = item.link;
                }

                return (
                  <li key={index} className="item flex gap-[8px]">
                    <Image
                      src={`/assets/images/${item.icon}`}
                      width={20}
                      height={20}
                      intrinsic="true"
                      className="w-[20px] h-[20px]"
                      alt={`icon ${item.text}`}
                    />
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold hover:text-golden-yellow"
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
