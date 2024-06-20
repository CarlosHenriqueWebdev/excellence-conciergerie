import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Footer({ translations }) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Retrieve the contact info and socials arrays
  const contactInfo = t("contactInfo", { returnObjects: true });
  const socials = t("socials", { returnObjects: true });
  const legalLinks = t("legalLinks", { returnObjects: true });

  // Merge the arrays
  const mergedArray = contactInfo.concat(socials);

  return (
    <footer className="flex flex-col text-lavender-haze bg-eclipse-black mt-[100px]">
      <div className="border-solid border-t-[2px] border-twilight-gray">
        <ul className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] flex flex-col gap-[48px] md:grid md:grid-cols-[1.5fr_1fr_1fr]">
          <li className="flex flex-col gap-[24px]">
            <a href="/">
              <img
                className="block h-[32px]"
                src="/assets/images/logo.png"
                alt=""
              />
            </a>
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
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-golden-yellow"
                    >
                      {item.text}
                    </a>
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
                  <a href={item.link} className="hover:underline hover:text-golden-yellow font-medium">
                    {item.text}
                  </a>
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
              <a
                href={item.action}
                target="_blank"
                className="cursor-pointer hover:underline"
              >
                {item.text}
              </a>
              {index !== legalLinks.length - 1 && <span>|</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] text-center font-medium text-[16px]">
        <p>&copy; {currentYear} Excellence Conciergerie</p>
      </div>
    </footer>
  );
}
