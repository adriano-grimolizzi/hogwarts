import { createFileRoute } from "@tanstack/react-router"
import WizardTable from "../../components/tables/WizardTable"
import { WizardControllerService } from "../../openapi"

export const Route = createFileRoute("/houses")({
  loader: WizardControllerService.findAll,
  component: () => (
    <div className="p-2 flex">
      <WizardTable wizards={Route.useLoaderData()} />
    </div>
  ),
})
