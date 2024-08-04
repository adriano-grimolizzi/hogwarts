import { createFileRoute } from "@tanstack/react-router"
import { WizardControllerService } from "../../openapi"
import WizardDetail from "../../components/WizardDetail"

export const Route = createFileRoute("/wizards/$id")({
  loader: async ({ params: { id } }) => WizardControllerService.findById(id),
  component: () => <WizardDetail wizard={Route.useLoaderData()} />,
})
