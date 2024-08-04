import { Link } from "@tanstack/react-router"
import type { Wizard } from "../openapi"

type DetailInfo = {
  id: number
  label: string
  value?: string | number
}

const WizardDetail = ({
  wizard: { id, firstName, lastName, house },
}: { wizard: Wizard }) => {
  const info = [
    {
      id: 1,
      label: "Name",
      value: firstName,
    },
    {
      id: 2,
      label: "Surname",
      value: lastName,
    },
    {
      id: 3,
      label: "Age",
      value: 40,
    },
    {
      id: 4,
      label: "House",
      value: house?.name,
    },
  ]

  return (
    <div className="border rounded border-slate-400 m-1 px-2 min-w-48">
      {info.map((info: DetailInfo) => (
        <Link key={info.id} className="flex" to={`/wizards/${id}`}>
          <p className="text-slate-500 text-sm text-right px-1 min-w-20">
            {info.label}:
          </p>
          <p>{info.value}</p>
        </Link>
      ))}
    </div>
  )
}

export default WizardDetail
