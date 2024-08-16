import { useTranslation } from "react-i18next"

import LanguageButton from "./LanguageButton"

const Header = ({ switchTheme }: { switchTheme: () => void }) => {
  const { t } = useTranslation()

  const languages = ["en", "it", "fr", 'es']

  return (
    <div className="flex justify-between bg-slate-400 text-slate-950 px-3 py-1 mb-1">
      <h1 className="select-none">{t("title", "Hogwarts")}</h1>
      <div className="flex gap-2">
        <button type="submit" onClick={switchTheme}>
          {t("switch theme", "Switch theme")}
        </button>
        {languages.map((language) => (
          <LanguageButton language={language} key={language} />
        ))}
      </div>
    </div>
  )
}

export default Header
