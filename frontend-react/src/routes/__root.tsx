import { createRootRoute, Outlet } from "@tanstack/react-router"

import Header from "../ui/Header"
import Sidebar from "../ui/Sidebar"
import { useState } from "react"

export const Route = createRootRoute({
  component: () => {
    const [theme, setTheme] = useState("dark")

    const switchTheme = () => {
      setTheme(theme === "dark" ? "" : "dark")
    }

    return (
      <div className={`${theme} bg-slate-100 dark:bg-slate-800 text-neutral-800 dark:text-neutral-200 h-screen `}>
        <Header switchTheme={switchTheme} />
        <div className="flex flex-row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    )
  },
})
