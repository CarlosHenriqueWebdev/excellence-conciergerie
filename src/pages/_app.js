import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps }) {
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
