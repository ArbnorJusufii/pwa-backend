'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguage = (lang: string) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      await i18n.changeLanguage(lang);
    })();
  }, [i18n, lang]);
};

export default useLanguage;
