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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxBlur = 5;
  const maxShadowOpacity = 1;
  const maxOverlayOpacity = 0.3;

  const blur = Math.min(maxBlur, scrollOffset / 100);
  const shadowOpacity = Math.min(maxShadowOpacity, scrollOffset / 1000);
  const overlayOpacity = Math.min(maxOverlayOpacity, scrollOffset / 100);

  return (
    <div>
      <Header translations={props} />
      <main className="">
        <div className="overflow-hidden sticky top-0 z-[-1]">
          <div
            style={{
              filter: `blur(${blur}px)`,
            }}
            className="relative"
          >
            <div
              style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
              className="h-full w-full absolute top-0 left-0 z-[40]"
            />

            <Hero translations={props} />
          </div>
        </div>
        <div
          style={{ borderTop: "10px solid rgba(0, 0, 0, 0.5)" }}
          className="flex flex-col gap-[100px] overflow-hidden bg-midnight-blue pt-[100px]"
        >
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
