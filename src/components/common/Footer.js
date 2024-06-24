import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useState } from "react";

function LegalModal({ item, onClose }) {
  const renderContent = () => {
    switch (item.action) {
      case "terms":
        return (
          <div className="flex flex-col gap-[32px]">
            <h2 className="text-[24px] font-bold uppercase">{item.text}</h2>
            <div className="flex flex-col gap-[24px]">
              {item.array.map((subItem, index) => (
                <div key={index} className="flex flex-col gap-[16px]">
                  {subItem.title && (
                    <h3 className="font-bold text-[20px]">{subItem.title}</h3>
                  )}
                  {subItem.description && (
                    <p className="font-medium text-[16px]">
                      {subItem.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "privacy":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{item.text}</h2>
            {item.array.map((subItem, index) => (
              <div key={index} className="mb-4">
                {subItem.title && (
                  <h3 className="font-semibold">{subItem.title}</h3>
                )}
                {subItem.description && <p>{subItem.description}</p>}
              </div>
            ))}
          </div>
        );
      case "attributions":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{item.text}</h2>
            {item.array.map((subItem, index) => (
              <div key={index} className="mb-4">
                <p>
                  <a
                    href={subItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500"
                  >
                    {subItem.text}
                  </a>
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex text-[#181C18] px-[24px] lg:px-[80px] py-[24px] lg:py-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
      <div className="overflow-y-scroll bg-white p-[24px] rounded-[4px] w-full flex flex-col gap-[32px] justify-start">
        <div className="flex justify-end w-full">
          <button onClick={onClose} className="text-[24px]">
            x
          </button>
        </div>
        {renderContent()}
        <button
          onClick={onClose}
          className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-fit cursor-pointer"
        >
          {t('closeModalButton')}
        </button>
      </div>
    </div>
  );
}

export default function Footer({ translations }) {
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
                    href={item.link}
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
