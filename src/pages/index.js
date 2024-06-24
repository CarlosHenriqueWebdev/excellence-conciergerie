import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/pages/home/Hero";
import About from "@/components/pages/home/About";
import WhyUs from "@/components/pages/home/WhyUs";
import Message from "@/components/pages/home/Message";
import Services from "@/components/pages/home/Services";
import Packs from "@/components/pages/home/Packs";
import Faq from "@/components/pages/home/Faq";
import ContactUpper from "@/components/pages/home/ContactUpper";
import ContactLower from "@/components/pages/home/ContactLower";
import { ParallaxProvider } from "react-scroll-parallax";
import FirstParallaxObject from "@/components/shared/FirstParallaxObject";
import SecondParallaxObject from "@/components/shared/SecondParallaxObject";
import { debounce } from "lodash";

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
  const headerStickyRef = useRef(null);
  const [isWhyUsInView, setIsWhyUsInView] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const handleScrollDebounced = debounce(() => {
      setScrollOffset(window.pageYOffset);
    }, 1);

    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationClass("header-enter");
            setIsHeaderVisible(true);
          } else {
            setAnimationClass("header-leave");
            setTimeout(() => {
              setIsHeaderVisible(false);
            }, 300); // Match the duration of the leave animation
          }
          setIsWhyUsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    if (headerStickyRef.current) {
      observer.observe(headerStickyRef.current);
    }

    return () => {
      if (headerStickyRef.current) {
        observer.unobserve(headerStickyRef.current);
      }
    };
  }, []);

  const overlayOpacity = Math.min(0.5, scrollOffset / 100);

  return (
    <ParallaxProvider scrollAxis="vertical">
      <NextSeo
        title="Excellence Conciergerie"
        description="Experience the pinnacle of luxury with Excellence Conciergerie."
        canonical="https://www.excellence-conciergerie.com/"
        openGraph={{
          url: "https://www.excellence-conciergerie.com/",
          title: "Excellence Conciergerie",
          description:
            "Experience the pinnacle of luxury with Excellence Conciergerie.",
          images: [
            {
              url: "https://excellence-conciergerie.com/assets/images/img1.jpg",
              width: 800,
              height: 600,
              alt: "Excellence Conciergerie",
              type: "image/jpg",
            },
          ],
          site_name: "Excellence Conciergerie",
        }}
        languageAlternates={[
          {
            hrefLang: "fr",
            href: "https://www.excellence-conciergerie.com/fr/",
          },
          {
            hrefLang: "en",
            href: "https://www.excellence-conciergerie.com/en/",
          },
          {
            hrefLang: "pt",
            href: "https://www.excellence-conciergerie.com/pt/",
          },
          {
            hrefLang: "es",
            href: "https://www.excellence-conciergerie.com/es/",
          },
        ]}
      />

      <div className="relative">
        <div
          className={`header-container ${isHeaderVisible ? animationClass : ""}`}
        >
          <Header translations={props} />
        </div>
        <main>
          <div
            className={`overflow-hidden top-0 ${!isWhyUsInView ? "sticky" : "static"}`}
          >
            <div className="relative">
              <div
                style={{
                  backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                  transition: "background-color 0.2s ease-in-out",
                }}
                className="h-full w-full absolute top-0 left-0 z-[40] pointer-events-none"
              />
              <Hero translations={props} isWhyUsInView={isWhyUsInView} />
            </div>
          </div>
          <div className="relative z-[1] flex flex-col gap-[100px] pt-[100px] bg-midnight-blue border-solid border-t-[8px] border-[#020201] overflow-hidden">
            <div ref={headerStickyRef} className="flex flex-col gap-[100px]">
            <div id="about">
              <About translations={props} />
            </div>
            <div className="relative" id="whyUs">
              <FirstParallaxObject />
              <WhyUs translations={props} />
            </div>
              <Message translations={props} />
              <div id="services">
                <Services translations={props} />
              </div>
              <div className="relative">
                <SecondParallaxObject />
                <div id="subscriptions">
                  <Packs translations={props} />
                </div>
              </div>
              <div className="flex flex-col">
                <Faq translations={props} />
                <div id="contact">
                  <ContactUpper translations={props} />
                </div>
                <ContactLower translations={props} />
              </div>
            </div>
          </div>
        </main>
        <Footer translations={props} />
      </div>
    </ParallaxProvider>
  );
}
