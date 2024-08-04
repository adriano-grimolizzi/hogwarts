import { createFileRoute } from "@tanstack/react-router"
import WizardCreate from "../../components/WizardCreate"

export const Route = createFileRoute("/wizards/create")({
  component: WizardCreate,
})
