import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import LegalModal from "@/components/shared/LegalModal";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const currentYear = new Date().getFullYear();

  const contactInfo = t("contactInfo", { returnObjects: true });
  const socials = t("socials", { returnObjects: true });
  const mergedArray = contactInfo.concat(socials);

  const legalLinks = t("legalLinks", { returnObjects: true });
  const attributionsArray = t("attributions", { returnObjects: true });
  const newLegalItem = {
    text: t("attributionsTitle"),
    DO_NOT_CHANGE: "attributions",
    array: attributionsArray,
  };

  const updatedLegalLinks = [...legalLinks, newLegalItem];

  const handleModalOpen = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  return (
    <footer className="flex flex-col text-lavender-haze bg-eclipse-black mt-[100px]">
      <div className="border-solid border-t-[2px] border-twilight-gray">
        <ul className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] flex flex-col gap-[48px] md:grid md:grid-cols-[1.5fr_1fr_1fr]">
          <li className="flex flex-col gap-[24px]">
            <Image
              src="/assets/images/logo.webp"
              alt="excellence logo"
              intrinsic="true"
              className="w-[166px] h-[32px]"
              width={166}
              height={32}
              quality={100}
            />

            <p className="md:max-w-[360px] text-light-gray">
              {t("footerDescription")}
            </p>
          </li>
          <li className="flex flex-col gap-[24px]">
            <h2 className="text-[1.125rem] uppercase font-bold">
              {t("footerContactTitle")}
            </h2>
            <ul className="flex flex-col gap-[16px]">
              {mergedArray?.map((item, index) => {
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
                  <li key={index} className="flex gap-[8px]">
                    <Image
                      src={`/assets/images/${item.icon}`}
                      width={22}
                      height={22}
                      intrinsic="true"
                      className="w-[22px] h-[22px]"
                      alt={`${item.text} icon`}
                    />
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-golden-yellow"
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="flex flex-col gap-[24px]">
            <h2 className="text-[1.125rem] uppercase font-bold">
              {t("footerSiteLinksTitle")}
            </h2>
            <ul className="flex flex-col gap-[16px]">
              {t("navLinks", { returnObjects: true })?.map((item, index) => (
                <ScrollLink
                  key={index}
                  className="cursor-pointer hover:underline hover:text-golden-yellow font-medium"
                  to={item.DO_NOT_CHANGE}
                >
                  {item.text}
                </ScrollLink>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="border-solid border-y-[2px] border-twilight-gray">
        <ul className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[32px] text-silver-mist flex gap-[4px] flex-wrap">
          {updatedLegalLinks?.map((item, index) => (
            <li key={index} className="text-white-75 flex gap-[6px]">
              <button
                onClick={() => handleModalOpen(item)}
                className="cursor-pointer hover:underline"
              >
                {item.text}
              </button>
              {index !== updatedLegalLinks.length - 1 && <span>|</span>}
            </li>
          ))}
        </ul>

        {isModalOpen && modalItem && (
          <LegalModal item={modalItem} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
      <div className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] text-center font-medium text-[1rem]">
        <p>&copy; {currentYear} Excellence Conciergerie</p>
      </div>
    </footer>
  );
}

export default Footer;
