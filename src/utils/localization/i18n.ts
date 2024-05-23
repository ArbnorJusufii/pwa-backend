import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { en } from './en';
import { pt } from './pt';

const resources = {
  en: { translation: en },
  pt: { translation: pt },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
