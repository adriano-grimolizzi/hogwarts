import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./translations/en.json"
import fr from "./translations/fr.json"
import it from "./translations/it.json"
import es from "./translations/es.json"

const languages = {
  en,
  fr,
  it,
  es,
}

i18n.use(initReactI18next).init({
  resources: languages,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
