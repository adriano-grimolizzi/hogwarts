import { Outlet, createFileRoute } from "@tanstack/react-router"
import { WizardControllerService } from "../../services/openapi"
import WizardList from "../../components/WizardList"

export const Route = createFileRoute("/wizards")({
	loader: WizardControllerService.findAll,
	component: () => (
		<div className="p-2 flex">
			<WizardList wizards={Route.useLoaderData()} />
			<Outlet />
		</div>
	),
})
