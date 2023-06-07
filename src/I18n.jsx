import I18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

I18n.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cashe: ["cookie"],
    },
    Interpolation: {
      escapeValue: false,
    },
  });

export default I18n;
