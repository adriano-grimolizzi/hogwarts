import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./translations/en.json"
import fr from "./translations/fr.json"
import it from "./translations/it.json"

const resources = {
  en,
  fr,
  it,
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
