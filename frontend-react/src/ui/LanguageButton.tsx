import { useTranslation } from "react-i18next"

const LanguageButton = ({ language }: { language: string; key: string }) => {
  const { i18n } = useTranslation()

  const isActive = i18n.language === language

  return (
    <button
      className={isActive ? "text-slate-500" : ""}
      type="submit"
      onClick={() => i18n.changeLanguage(language)}
    >
      {language.toUpperCase()}
    </button>
  )
}

export default LanguageButton
