import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enHeader from '../../public/locales/en/header.json';
import frHeader from '../../public/locales/fr/header.json';
import ptHeader from '../../public/locales/pt/header.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { header: enHeader },
    fr: { header: frHeader },
    pt: { header: ptHeader },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
