import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
	component: () => (
		<div className="p-2">
			<h3>Welcome to Hogwarts!</h3>
		</div>
	),
})
