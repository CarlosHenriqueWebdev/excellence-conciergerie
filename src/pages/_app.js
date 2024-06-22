import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ReactLenis, useLenis } from 'lenis/react'

function App({ Component, pageProps }) {
    const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      <Component {...pageProps} />
    </ReactLenis>
  );
}

export default appWithTranslation(App);
