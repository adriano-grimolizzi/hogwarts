import { useTranslation } from "react-i18next"

import LanguageButton from "./LanguageButton"
import { Button } from "@/components/ui/button"

const Header = ({ switchTheme }: { switchTheme: () => void }) => {
  const { t } = useTranslation()

  const languages = ["en", "it", "fr", "es"]

  return (
    <div className="flex justify-between bg-slate-400 text-slate-950 px-3 py-1 mb-1">
      <h1 className="select-none text-xl pt-1">{t("title", "Hogwarts")}</h1>
      <div className="flex">
        <Button variant="ghost" onClick={switchTheme}>
          {t("switch theme", "Switch theme")}
        </Button>
        {languages.map((language) => (
          <LanguageButton language={language} key={language} />
        ))}
      </div>
    </div>
  )
}

export default Header
