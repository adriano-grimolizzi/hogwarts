import { createRootRoute, Outlet } from "@tanstack/react-router"

import Header from "../ui/Header"
import Sidebar from "../ui/Sidebar"

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />  
      <div className="flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </>
  ),
})
