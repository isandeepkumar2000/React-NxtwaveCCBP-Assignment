import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEn from "./Languages/English-Language/translation.json";
import TranslationHi from "./Languages/Hindi-Language/translation.json";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lan") || "en",
  resources: {
    en: {
      translation: TranslationEn,
    },
    hi: {
      translation: TranslationHi,
    },
  },

  fallbackLng: "en",
  interpolation: { escapeValue: false },
  // detection: {
  //   order: ["cookie", "querystring", "localStorage", "path"],
  //   caches: ["cookie"],
  // },
});
export default i18n;
