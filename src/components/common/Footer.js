import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import LegalModal from "@/components/shared/LegalModal";

function Footer({ translations }) {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const currentYear = new Date().getFullYear();

  const contactInfo = t("contactInfo", { returnObjects: true });
  const socials = t("socials", { returnObjects: true });
  const legalLinks = t("legalLinks", { returnObjects: true });

  const mergedArray = contactInfo.concat(socials);

  const handleModalOpen = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  return (
    <footer className="flex flex-col text-lavender-haze bg-eclipse-black mt-[100px]">
      <div className="border-solid border-t-[2px] border-twilight-gray">
        <ul className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] flex flex-col gap-[48px] md:grid md:grid-cols-[1.5fr_1fr_1fr]">
          <li className="flex flex-col gap-[24px]">
            <Link href="/">
              <img
                className="block h-[32px]"
                src="/assets/images/logo.png"
                alt=""
              />
            </Link>
            <p className="md:max-w-[360px] text-light-gray">
              {t("footerDescription")}
            </p>
          </li>
          <li className="flex flex-col gap-[24px]">
            <h2 className="text-[18px] uppercase font-bold">
              {t("footerContactTitle")}
            </h2>
            <ul className="flex flex-col gap-[16px]">
              {mergedArray.map((item, index) => {
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
                  default:
                    href = item.link;
                }

                return (
                  <li key={index} className="flex gap-[8px]">
                    <Image
                      src={`/assets/images/${item.icon}`}
                      width={22}
                      height={22}
                      alt="Logo"
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
            <h2 className="text-[18px] uppercase font-bold">
              {t("footerSiteLinksTitle")}
            </h2>
            <ul className="flex flex-col gap-[16px]">
              {t("navLinks", { returnObjects: true }).map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.DO_NOT_CHANGE}
                    className="hover:underline hover:text-golden-yellow font-medium"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="border-solid border-y-[2px] border-twilight-gray">
        <ul className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[32px] text-silver-mist flex gap-[4px] flex-wrap">
          {legalLinks.map((item, index) => (
            <li key={index} className="text-white-75 flex gap-[6px]">
              <button
                onClick={() => handleModalOpen(item)}
                className="cursor-pointer hover:underline"
              >
                {item.text}
              </button>
              {index !== legalLinks.length - 1 && <span>|</span>}
            </li>
          ))}
        </ul>

        {isModalOpen && modalItem && (
          <LegalModal item={modalItem} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
      <div className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] text-center font-medium text-[16px]">
        <p>&copy; {currentYear} Excellence Conciergerie</p>
      </div>
    </footer>
  );
}

export default Footer;
