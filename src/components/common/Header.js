import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useTranslation } from "next-i18next";

export default function Header({ translations }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLocale) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, pathname, { locale: newLocale });
  };

  return (
    <header className="bg-eclipse-black text-lavender-haze text-[14px] border-solid border-twilight-gray border-b-[1px]">
      <nav
        className="px-[24px] py-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="block h-[32px]"
              src="/assets/images/logo.png"
              alt=""
            />
          </a>
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
          {t("navLinks", { returnObjects: true }).map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="font-semibold hover:text-golden-yellow"
            >
              {item.text}
            </a>
          ))}

          <span className="text-white-75">|</span>

          <div className="relative">
            <button
              className="flex items-center gap-[4px] text-white-75 font-bold"
              onClick={toggleDropdown}
            >
              <div className="flex items-center gap-[6px]">
                <img
                  src={`/assets/images/${t("currentLanguageFlag")}`}
                  alt=""
                  className="h-[14px] block"
                />
                {t("currentLanguage")}
              </div>
              <img
                src="/assets/images/vector4.svg"
                alt=""
                className="h-[10px] block"
              />
            </button>
            {isOpen && (
              <div className="w-[150px] right-[0] font-bold text-white-75 border-solid border-[2px] border-golden-sunbeam absolute top-full z-10 mt-3 overflow-hidden rounded-[4px] bg-eclipse-black">
                <div>
                  {t("languages", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      locale={item.locale}
                      className="flex items-center gap-[6px] hover:bg-graphite-gray px-[24px] py-[12px] w-full"
                    >
                      <img
                        src={`/assets/images/${item.flag}`}
                        alt=""
                        className="h-[14px] block"
                      />
                      {item.language}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </PopoverGroup>
      </nav>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[50] w-full overflow-y-auto bg-eclipse-black px-[24px] py-[24px] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto block h-[32px]"
                src="/assets/images/logo.png"
                alt=""
              />
            </a>
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
                      <DisclosureButton className="border-solid border-golden-sunbeam border-[3px] flex items-center justify-between w-full text-start block rounded-[4px] px-[16px] py-[12px] bg-graphite-gray hover:brightness-90 hover:text-golden-yellow font-semibold">
                        <div className="flex items-center gap-[6px]">
                          <img
                            src={`/assets/images/${t("currentLanguageFlag")}`}
                            alt=""
                            className="h-[14px] block"
                          />
                          {t("currentLanguage")}
                        </div>
                        <img
                          src="/assets/images/vector4.svg"
                          alt=""
                          className="h-[12px] block"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="flex flex-col gap-[16px] pl-[8px]">
                        {t("languages", {
                          returnObjects: true,
                        }).map((item, index) => (
                          <Link
                            key={item.name}
                            href="/"
                            locale={item.locale}
                            className="border-solid border-golden-sunbeam border-[3px] flex items-center gap-[6px] w-full text-start block rounded-[4px] px-[16px] py-[12px] bg-graphite-gray hover:brightness-90 hover:text-golden-yellow font-semibold"
                          >
                            <img
                              src={`/assets/images/${item.flag}`}
                              alt=""
                              className="h-[14px] block"
                            />
                            {item.language}
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {t("navLinks", { returnObjects: true }).map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="block rounded-[4px] px-[16px] py-[12px] bg-graphite-gray hover:brightness-90 hover:text-golden-yellow font-semibold"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}