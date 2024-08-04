import { Link } from "@tanstack/react-router"
import type { Wizard } from "../openapi"

const WizardList = ({ wizards }: { wizards: Array<Wizard> }) => (
  <ul>
    {wizards.map((wizard: Wizard) => (
      <li key={wizard.id}>
        <Link
          className="flex [&.active]:text-slate-400"
          to={`/wizards/${wizard.id}`}
        >
          <div className="border rounded border-slate-400 min-w-48 my-1 px-2 ">
            <p>
              {wizard.firstName} {wizard.lastName}
            </p>
          </div>
        </Link>
      </li>
    ))}
    <li>
      <Link className="flex [&.active]:text-slate-400" to={"/wizards/create"}>
        <div className="border rounded border-slate-400 min-w-48 my-1 px-2 ">
          <p>+ Create Wizard</p>
        </div>
      </Link>
    </li>
  </ul>
)

export default WizardList
