import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import i18nextBackend from "i18next-http-backend";

i18next
    .use(i18nextBackend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: import.meta.env.VITE_I18N_BACKEND_URL + '/{{lng}}.json'
        }
    })

export default i18next;