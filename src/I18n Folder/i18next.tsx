import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lan") || "en",
  resources: {
    en: {
      translation: require("./Languages/English-Language/translation.json"),
    },
    hi: {
      translation: require("./Languages/Hindi-Language/translation.json"),
    },
  },

  fallbackLng: "en",
  interpolation: { escapeValue: false },
  detection: {
    order: ["cookie", "querystring", "localStorage", "path"],
    caches: ["cookie"],
  },
});
export default i18n;
