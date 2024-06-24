import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/faviconIcon.ico" />
      </Head>
      <body className="text-lavender-haze bg-midnight-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
