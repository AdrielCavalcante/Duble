import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
    en: {
        translation: {
            "actual": "EN",
            "welcome": "Welcome!",
            "paragraph": "react-i18next is a powerful internationalization framework for React / React Native which is based on i18next."
    }
    },
    es: {
        translation: {
            "actual": "ES",
            "welcome": "Bienvenido!",
            "paragraph": "react-i18next es un poderoso marco de internacionalización para React / React Native que se basa en i18next."
    }
    },
    
    pt: {
        translation: {
            "actual": "PT",
            "welcome": "Bem vindo!",
            "paragraph": "react-i18next é um poderoso framework de internacionalização para React / React Native baseado no i18next."
    }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;