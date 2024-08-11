import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

const Sidebar = (): JSX.Element => {
  const { t } = useTranslation()

  type LinkInfo = {
    label: string
    path?: string
  }

  const links: Array<LinkInfo> = [
    {
      label: "home",
      path: "/",
    },
    {
      label: "wizards",
    },
    {
      label: "houses",
    },
  ]

  const toLink = (link: LinkInfo) => (
    <Link
      key={link.label}
      to={link.path || `/${link.label}`}
      className="[&.active]:text-slate-400"
    >
      {t(`sidebar.${link.label}`, link.label)}
    </Link>
  )

  return <div className="flex flex-col px-3 w-20">{links.map(toLink)}</div>
}

export default Sidebar
