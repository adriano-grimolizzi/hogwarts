import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"

import { type Wizard, WizardControllerService } from "../../openapi"

type FormValues = {
  firstName: string
  lastName: string
}

const WizardCreate = () => {
  const { t } = useTranslation()

  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (d: Wizard) => {
    WizardControllerService.save(d)
  }

  return (
    <div className="border rounded border-slate-400 m-1 p-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          {t("wizards.firstName", "Name")}
          <input className="text-black m-1 p-1" {...register("firstName")} />
        </label>
        <br />
        <label>
          {t("wizards.lastName", "Surname")}
          <input className="text-black m-1 p-1" {...register("lastName")} />
        </label>
        <br />
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
