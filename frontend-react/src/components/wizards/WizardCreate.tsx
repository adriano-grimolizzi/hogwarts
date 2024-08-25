import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"

import { type Wizard, WizardControllerService } from "../../openapi"

type FormValues = {
  firstName: string
  lastName: string
  email: string
}

const WizardCreate = () => {
  const { t } = useTranslation()

  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (wizard: Wizard) => {
    WizardControllerService.save(wizard)
  }

  const infos: Array<keyof FormValues> = ['firstName', 'lastName', 'email']

  const toInput = (info: keyof FormValues) => (
    <label>
      {t(`wizards.${info}`, info)}
      <input className="text-black m-1 p-1" {...register(info)} />
    </label>
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
