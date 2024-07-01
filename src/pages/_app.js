import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps }) {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis
      root
      options={{
        duration: 2.225,
      }}
    >
      <Component {...pageProps} />
    </ReactLenis>
  );
}

export default appWithTranslation(App);
