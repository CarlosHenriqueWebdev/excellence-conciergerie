import { NextSeo } from 'next-seo';
import { useTranslation, initReactI18next } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import i18n from 'i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Initialize i18n
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  // Add your i18n configuration here
});

function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  );
}

export default function Home({ initialLocale }) {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(initialLocale);
  }, [initialLocale]);

  return (
    <>
      <NextSeo
        title="Your Page Title"
        description="Your page description"
        // Add more SEO-related properties as needed
      />
      <main>
        <h1>Testing Functionality</h1>
        <img src="/assets/images/detail2.png" alt="Test Image" />
        <h2>{t('navText2')}</h2>
        <LanguageSwitcher />
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      initialLocale: locale,
    },
  };
}
