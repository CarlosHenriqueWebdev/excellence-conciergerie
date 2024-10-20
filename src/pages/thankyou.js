import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ThankYou() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-[100vh] justify-center items-center px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
      <div
        ref={ref}
        className={`${isInView ? "animated fadeInUp" : "opacity-0"}`}
      >
        <Image
          aria-hidden={true}
          src="/assets/images/thankyou.jpg"
          className="block w-full object-cover border-solid border-[3px] border-golden-sunbeam rounded-[4px]"
          intrinsic="true"
          alt="Thank you"
          width={450}
          height={300}
          quality={100}
        />
      </div>

      <div className="flex flex-col gap-[20px] md:py-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="item">
            <DetailText
              text={t("thankYouSubtitle", {
                defaultValue: "Thank You!",
              })}
            />
          </div>

          <h2
            id="thank-you"
            className={`item uppercase text-[1.5rem] font-bold`}
          >
            {t("thankYouTitle", {
              defaultValue: "Your submission has been received!",
            })}
          </h2>
        </div>

        <div className="flex flex-col gap-[16px] text-light-gray font-medium">
          <p className="item">
            {t("thankYouDescription", {
              defaultValue:
                "We appreciate you getting in touch. Our team will review your message and respond as soon as possible.",
            })}
          </p>
          <p className="item">
            {t("additionalInfo", {
              defaultValue:
                "In the meantime, feel free to explore our website further.",
            })}
          </p>
        </div>

        <Link
          href="/"
          className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-fit cursor-pointer"
        >
          {t("goBackHome", { defaultValue: "Go Back to Homepage" })}
        </Link>
      </div>
    </div>
  );
}

// Use serverSideTranslations in getStaticProps to load the translations for the ThankYou page
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
