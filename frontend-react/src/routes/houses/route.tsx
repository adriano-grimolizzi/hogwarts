import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/houses")({
  component: () => (
    <>
      <p>Houses</p>
      <Outlet />
    </>
  ),
})
