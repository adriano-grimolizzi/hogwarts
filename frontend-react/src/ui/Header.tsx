import i18next from "i18next"

const Header = () => {
  const languages = ["en", "fr", "it"]

  const toButton = (language: string) => (
    <button
      key={language}
      type="submit"
      onClick={() => i18next.changeLanguage(language)}
    >
      {language.toUpperCase()}
    </button>
  )

  return (
    <div className="flex justify-between bg-slate-400 text-slate-950 px-3 py-1 mb-1">
      <h1>Hogwarts</h1>
      <div className="flex gap-2" key={i18next.language}>
        {languages.map(toButton)}
      </div>
    </div>
  )
}

export default Header
