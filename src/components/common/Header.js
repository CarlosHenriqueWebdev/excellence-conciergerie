import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLocale) => {
    const { pathname } = router;
    window.location.href = `${pathname}${newLocale}`;
  };

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
    <header className="relative bg-eclipse-black text-lavender-haze text-[14px] border-solid border-b-[2px] border-twilight-gray relative z-[1]">
      <nav
        className="px-[24px] py-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex items-center justify-between"
        aria-label="Global"
      >
        <ScrollLink
          className="skip-to-content"
          to="main-content"
          tabIndex="0"
          onClick={() => handleButtonClick("main-content")}
        >
          {t("accessibility_text1")}{" "}
        </ScrollLink>
        <h2 className="sr-only">{t("accessibility_text6")}</h2>
        <div className="flex lg:flex-1">
          <Image
            aria-hidden={true}
            src="/assets/images/logo.webp"
            alt="excellence logo"
            width={166}
            height={32}
            intrinsic="true"
            className="w-[166px] h-[32px]"
            quality={100}
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 text-golden-yellow"
              aria-hidden="true"
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex gap-[24px] items-center">
          <div className="flex gap-[24px] order-[1] items-center">
            <span className="text-white-75 h-fit" aria-hidden={true}>
              |
            </span>

            <div className="relative">
              <button
                className="py-[6px] flex items-center gap-[4px] text-white-75 font-bold"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="language-menu"
                aria-label="Select language"
              >
                <div className="flex items-center gap-[6px]">
                  <Image
                    aria-hidden={true}
                    src={`/assets/images/${t("currentLanguageFlag")}`}
                    alt={`${t("currentLanguage")} flag`}
                    width={14}
                    height={14}
                    intrinsic="true"
                    className="w-[14px] h-[14px]"
                    quality={100}
                  />
                  {t("currentLanguage")}
                </div>

                <Image
                  aria-hidden={true}
                  src="/assets/images/vector4.svg"
                  alt="down arrow"
                  width={10}
                  height={10}
                  intrinsic="true"
                  className="w-[10px] h-[10px]"
                  quality={100}
                />
              </button>
              {isOpen && (
                <div className="w-[150px] right-[0] font-bold text-white-75 border-solid border-[2px] border-golden-sunbeam absolute top-full z-10 mt-3 overflow-hidden rounded-[4px] bg-eclipse-black">
                  <ul>
                    {t("languages", {
                      returnObjects: true,
                    })?.map((item, index) => (
                      <li key={index} role="none">
                        <a
                          className="flex items-center gap-[6px] hover:bg-graphite-gray px-[24px] py-[12px] w-full cursor-pointer"
                          onClick={() => changeLanguage(item.DO_NOT_CHANGE)}
                          tabIndex="0"
                        >
                          <Image
                            aria-hidden={true}
                            src={`/assets/images/${item.flag}`}
                            alt={`${item.language} flag`}
                            width={14}
                            height={14}
                            intrinsic="true"
                            className="w-[14px] h-[14px]"
                            quality={100}
                          />
                          {item.language}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <ul className="flex gap-[24px]">
            {t("navLinks", { returnObjects: true })?.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  className="py-[6px] font-semibold hover:text-golden-yellow cursor-pointer"
                  to={item.DO_NOT_CHANGE}
                  tabIndex="0"
                  onClick={() => handleButtonClick(item.DO_NOT_CHANGE)}
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </PopoverGroup>
      </nav>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[50] max-w-[280px] overflow-y-auto bg-eclipse-black px-[24px] py-[24px] w-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image
              aria-hidden={true}
              src="/assets/images/logo.webp"
              alt="excellence logo"
              width={166}
              height={32}
              intrinsic="true"
              className="w-[166px] h-[32px]"
              quality={100}
            />

            <button
              type="button"
              className="rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-[32px] text-lavender-haze">
            <div className="divide-y divide-gray-500/10">
              <div className="py-[32px] flex flex-col gap-[16px]">
                <Disclosure as="div" className="flex flex-col gap-[16px]">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="border-solid border-golden-sunbeam border-[3px] items-center justify-between w-full text-start block rounded-[4px] px-[16px] py-[12px] bg-graphite-gray hover:brightness-90 hover:text-golden-yellow font-semibold flex">
                        <div className="flex items-center gap-[6px]">
                          <Image
                            aria-hidden={true}
                            src={`/assets/images/${t("currentLanguageFlag")}`}
                            alt={`${t("currentLanguage")} flag`}
                            width={14}
                            height={14}
                            intrinsic="true"
                            className="w-[14px] h-[14px]"
                            quality={100}
                          />

                          {t("currentLanguage")}
                        </div>

                        <Image
                          aria-hidden={true}
                          src="/assets/images/vector4.svg"
                          alt="arrow"
                          width={12}
                          height={12}
                          intrinsic="true"
                          className="w-[12px] h-[12px]"
                          quality={100}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="flex flex-col gap-[16px]">
                        {t("languages", {
                          returnObjects: true,
                        })?.map((item, index) => (
                          <a
                            key={item.name}
                            className="border-solid border-golden-sunbeam border-[3px] items-center gap-[6px] w-full text-start block rounded-[4px] px-[16px] py-[12px] bg-graphite-gray hover:brightness-90 hover:text-golden-yellow font-semibold cursor-pointer flex"
                            onClick={() => changeLanguage(item.DO_NOT_CHANGE)}
                          >
                            <Image
                              aria-hidden={true}
                              src={`/assets/images/${item.flag}`}
                              alt={`${item.language} flag`}
                              width={14}
                              height={14}
                              intrinsic="true"
                              className="w-[14px] h-[14px]"
                              quality={100}
                            />
                            {item.language}
                          </a>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <ul className="flex flex-col gap-[16px]">
                  {t("navLinks", { returnObjects: true })?.map(
                    (item, index) => (
                      <li key={index}>
                        <ScrollLink
                          className="block rounded-[4px] px-[16px] py-[12px] bg-graphite-gray hover:brightness-90 hover:text-golden-yellow font-semibold cursor-pointer"
                          to={item.DO_NOT_CHANGE}
                          tabIndex="0"
                          onClick={() => handleButtonClick(item.DO_NOT_CHANGE)}
                        >
                          {item.text}
                        </ScrollLink>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
