import { Outlet, createFileRoute } from "@tanstack/react-router"
import { WizardControllerService } from "../../openapi"
import WizardList from "../../components/wizards/WizardList"

export const Route = createFileRoute("/wizards")({
  loader: WizardControllerService.getAll,
  component: () => (
    <div className="p-2 flex">
      <WizardList wizards={Route.useLoaderData()} />
      <Outlet />
    </div>
  ),
})
