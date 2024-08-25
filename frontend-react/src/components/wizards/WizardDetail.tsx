import { useTranslation } from "react-i18next"

import type { Wizard } from "../../openapi"

const WizardDetail = ({ wizard }: { wizard: Wizard }) => {
  const { t } = useTranslation()

  const infos: Array<keyof Wizard> = ["firstName", "lastName", "email"]

  const toLink = (info: keyof Wizard) => (
    <div className="flex p-1" key={info}>
      <p className="text-slate-500 w-20">{t(`wizards.${info}`, info)}:</p>
      <p>{wizard?.[info] as string}</p>
      {/* todo: a WizardSummary with only strings */}
    </div>
  )

  return (
    <div className="flex flex-col border rounded border-slate-400 m-1">
      {infos.map(toLink)}
    </div>
  )
}

export default WizardDetail
