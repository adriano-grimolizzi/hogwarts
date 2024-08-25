import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type Wizard, WizardControllerService } from "../../openapi"
import { type WizardSchema, wizardSchema } from "./create/WizardSchema"
 

const WizardCreate = () => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WizardSchema>({ resolver: zodResolver(wizardSchema), })

  const onSubmit = (wizard: Wizard) => {
    WizardControllerService.save(wizard)
  }

  const infos: Array<keyof WizardSchema> = [
    "firstName",
    "lastName",
    "email",
  ]

  const toInput = (info: keyof WizardSchema) => (
    <div className="flex">
      <label className="w-24">{t(`wizards.${info}`, info)}</label>
      <input className="text-black m-1 p-1" {...register(info)} />
      {errors[info] && <p className="text-red-500">
        {t(`wizards.errors.${errors[info]?.message}`)}</p>}
    </div>
  )

  return (
    <div className="border rounded border-slate-400 m-1 p-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {infos.map(toInput)}
        <input
          className="border rounded bg-slate-400"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  )
}

export default WizardCreate
