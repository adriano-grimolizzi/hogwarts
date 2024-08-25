import { createFileRoute } from "@tanstack/react-router"
import { WizardControllerService } from "../../openapi"
import WizardDetail from "../../components/wizards/WizardDetail"

export const Route = createFileRoute("/wizards/$id")({
  loader: async ({ params: { id } }) => WizardControllerService.getById(id),
  component: () => <WizardDetail wizard={Route.useLoaderData()} />,
})
