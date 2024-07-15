import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps }) {
  const lenisScrollDuration = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: lenisScrollDuration,
      }}
    >
      <Component {...pageProps} />
    </ReactLenis>
  );
}

export default appWithTranslation(App);
