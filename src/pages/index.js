// pages/index.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/pages/home/Hero";
import About from "@/components/pages/home/About";
import Message from "@/components/pages/home/Message";
import Services from "@/components/pages/home/Services";
import Packs from "@/components/pages/home/Packs";
import ContactUpper from "@/components/pages/home/ContactUpper";
import ContactLower from "@/components/pages/home/ContactLower";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default function Home(props) {
  const { t, i18n } = useTranslation();

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const overlayOpacity = Math.min(0.5, scrollOffset / 100);
  const oppositeOverlayOpacity = Math.min(1, scrollOffset / 100);
  const minusScale = 1 - Math.min(0.225, scrollOffset / 500);

  return (
    <div className="relative">
      <Header translations={props} />
      <main className="">
        <div className="overflow-hidden sticky top-0">
          <div className="relative">
            <div
              style={{
                backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                transition: "background-color 0.2s ease-in-out",
              }}
              className="h-full w-full absolute top-0 left-0 z-[40] pointer-events-none"
            />
            <Hero translations={props} minusScale={minusScale} />
          </div>
        </div>
        <div className="relative z-[1] flex flex-col gap-[100px] pt-[100px] bg-midnight-blue border-solid border-t-[10px] border-[#020201] overflow-hidden">
          <About translations={props} />
          <Message translations={props} />
          <Services translations={props} />
          <Packs translations={props} />
          <ContactUpper translations={props} />
          <ContactLower translations={props} />
        </div>
      </main>
      <Footer translations={props} />
    </div>
  );
}
