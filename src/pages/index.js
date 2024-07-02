import React, {  } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

// Import skeleton loaders
import HeaderSkeleton from "@/components/skeleton-loaders/HeaderSkeleton";
import FooterSkeleton from "@/components/skeleton-loaders/FooterSkeleton";
import HeroSkeleton from "@/components/skeleton-loaders/HeroSkeleton";
import AboutSkeleton from "@/components/skeleton-loaders/AboutSkeleton";
import WhyUsSkeleton from "@/components/skeleton-loaders/WhyUsSkeleton";
import MessageSkeleton from "@/components/skeleton-loaders/MessageSkeleton";
import ServicesSkeleton from "@/components/skeleton-loaders/ServicesSkeleton";
import PacksSkeleton from "@/components/skeleton-loaders/PacksSkeleton";
import FaqSkeleton from "@/components/skeleton-loaders/FaqSkeleton";
import ContactUpperSkeleton from "@/components/skeleton-loaders/ContactUpperSkeleton";
import ContactLowerSkeleton from "@/components/skeleton-loaders/ContactLowerSkeleton";

// Dynamic imports with dynamic loading
const Header = dynamic(() => import("@/components/common/Header"), {
  loading: () => <HeaderSkeleton />,
  ssr: false,
});
const Hero = dynamic(() => import("@/components/pages/home/Hero"), {
  loading: () => <HeroSkeleton />,
  ssr: false,
});
const About = dynamic(() => import("@/components/pages/home/About"), {
  loading: () => <AboutSkeleton />,
  ssr: false,
});
const WhyUs = dynamic(() => import("@/components/pages/home/WhyUs"), {
  loading: () => <WhyUsSkeleton />,
  ssr: false,
});
const Message = dynamic(() => import("@/components/pages/home/Message"), {
  loading: () => <MessageSkeleton />,
  ssr: false,
});
const Services = dynamic(() => import("@/components/pages/home/Services"), {
  loading: () => <ServicesSkeleton />,
  ssr: false,
});
const Packs = dynamic(() => import("@/components/pages/home/Packs"), {
  loading: () => <PacksSkeleton />,
  ssr: false,
});
const Faq = dynamic(() => import("@/components/pages/home/Faq"), {
  loading: () => <FaqSkeleton />,
  ssr: false,
});
const ContactUpper = dynamic(
  () => import("@/components/pages/home/ContactUpper"),
  {
    loading: () => <ContactUpperSkeleton />,
    ssr: false,
  },
);
const ContactLower = dynamic(
  () => import("@/components/pages/home/ContactLower/ContactLower"),
  {
    loading: () => <ContactLowerSkeleton />,
    ssr: false,
  },
);
const Footer = dynamic(() => import("@/components/common/Footer"), {
  loading: () => <FooterSkeleton />,
  ssr: false,
});

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default function Home(props) {
  return (
    <div>
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
              url: "https://excellence-conciergerie.com/assets/images/img1.webp",
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

      <div>
        <Header />
        <Hero />

        <div className="bg-midnight-blue border-solid border-t-[8px] border-[#020201] relative z-[1]">
          <div id="about">
            <About />
          </div>
          <div id="whyUs" className="py-[100px]">
            <WhyUs />
          </div>
          <div className="flex flex-col gap-[100px]">
            <div id="message">
              <Message />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="subscriptions">
              <Packs />
            </div>
            <div>
              <div id="questions">
                <Faq />
              </div>
              <div id="contact">
                <ContactUpper />
                <ContactLower />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
