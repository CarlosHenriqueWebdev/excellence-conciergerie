import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/faviconIcon.ico" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K5PJJLB8SK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K5PJJLB8SK');
            `,
          }}
        />
      </Head>
      <body className="text-lavender-haze bg-midnight-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
