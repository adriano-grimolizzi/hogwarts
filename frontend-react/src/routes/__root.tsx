import { createRootRoute, Outlet } from "@tanstack/react-router"
import SideBar from "../ui/SideBar"

export const Route = createRootRoute({
	component: () => (
		<>
			<h1 className="bg-slate-400 text-slate-950 px-3 py-1 mb-1">Hogwarts</h1>
			<div className="flex flex-row">
				<SideBar />
				<Outlet />
			</div>
		</>
	),
})
