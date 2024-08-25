import { Link } from "@tanstack/react-router"

import { WizardControllerService, type Wizard } from "../../openapi"

const WizardList = ({ wizards }: { wizards: Array<Wizard> }) => {
  const toListItem = ({ id, firstName, lastName }: Wizard) => {
    const deleteWizard = () => {
      WizardControllerService.delete(id || "")
    }

    return (
      <li key={id}>
        <Link className="[&.active]:text-slate-400" to={`/wizards/${id}`}>
          <div className="flex justify-between border rounded border-slate-400 min-w-48 my-1 px-2 ">
            <div>
              <span>
                {firstName} {lastName}
              </span>
            </div>
            <button type="submit" onClick={deleteWizard}>
              X
            </button>
          </div>
        </Link>
      </li>
    )
  }

  return (
    <ul>
      {wizards.map(toListItem)}
      <li>
        <Link className="flex [&.active]:text-slate-400" to={"/wizards/create"}>
          <div className="border rounded border-slate-400 min-w-48 my-1 px-2 ">
            <p>+ Create Wizard</p>
          </div>
        </Link>
      </li>
    </ul>
  )
}

export default WizardList
