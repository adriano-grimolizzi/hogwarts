import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

const LanguageButton = ({ language }: { language: string; key: string }) => {
  const { i18n } = useTranslation()

  const isActive = i18n.language === language

  return (
    <Button
      variant="ghost"
      className={`p-2 ${isActive && "text-slate-500"}`}
      onClick={() => i18n.changeLanguage(language)}
    >
      {language.toUpperCase()}
    </Button>
  )
}

export default LanguageButton
