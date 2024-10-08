import { createFileRoute } from "@tanstack/react-router"
import WizardTable from "../../components/tables/WizardTable"
import { WizardControllerService } from "../../openapi"

export const Route = createFileRoute("/houses")({
  loader: WizardControllerService.getAll,
  component: () => <WizardTable wizards={Route.useLoaderData()} />,
})
