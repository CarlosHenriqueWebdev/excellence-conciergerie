import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { motion, useScroll, useSpring } from "framer-motion";
import Headroom from "react-headroom";

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const initialLocale = props._nextI18Next.initialLocale;

  const titles = {
    en: "Excellence Conciergerie: Unforgettable Luxury on the French Riviera",
    fr: "Excellence Conciergerie: Découvrez le summum du luxe sur la Côte d'Azur",
    pt: "Excellence Conciergerie: Experimente o ápice do luxo na Riviera Francesa",
    es: "Excellence Conciergerie: Experimente el pináculo del lujo en la Riviera francesa",
  };

  const descriptions = {
    en: "Experience the epitome of luxury on the French Riviera with Excellence Conciergerie. We provide unforgettable experiences, exceptional property management, and discreet, 5-star service for both property owners and travelers.",
    fr: "Découvrez le summum du luxe sur la Côte d'Azur avec Excellence Conciergerie. Nous proposons des expériences inoubliables, une gestion immobilière exceptionnelle et un service discret 5 étoiles aux propriétaires et aux voyageurs.",
    pt: "Experimente o ápice do luxo na Riviera Francesa com a Excellence Conciergerie. Oferecemos experiências inesquecíveis, gestão de propriedades excepcional e serviço discreto 5 estrelas para proprietários e viajantes.",
    es: "Experimente el pináculo del lujo en la Riviera francesa con Excellence Conciergerie. Brindamos experiencias inolvidables, administración de propiedades excepcionales y un servicio discreto de 5 estrellas para propietarios e invitados.",
  };

  return (
    <div>
      <NextSeo
        title={titles[initialLocale]}
        description={descriptions[initialLocale]}
        canonical="https://www.excellence-conciergerie.com/"
        openGraph={{
          url: "https://www.excellence-conciergerie.com/",
          title: titles[initialLocale],
          description: descriptions[initialLocale],
          images: [
            {
              url: "https://excellence-conciergerie.com/assets/images/img1.webp",
              width: 800,
              height: 600,
              alt: "Excellence Conciergerie",
              type: "image/webp",
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
        <Headroom>
          <div className="relative z-[10]">
            <Header />

            <motion.div
              className="progress-bar absolute w-full bg-golden-yellow h-[4px] z-[-1]"
              style={{ scaleX }}
            />
          </div>
        </Headroom>

        <Hero />

        <div className="bg-midnight-blue border-solid border-t-[8px] border-[#020201] relative flex flex-col gap-[100px] pt-[100px]">
          <About />
          <WhyUs />
          <Message />
          <Services />
          <Packs />
          <div>
            <Faq />
            <div>
              <ContactUpper />
              <ContactLower />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
