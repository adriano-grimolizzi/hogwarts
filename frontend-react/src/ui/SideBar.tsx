import { Link } from "@tanstack/react-router"

const SideBar = (): JSX.Element => (
  <div className="flex flex-col px-3">
    <Link data-testid="LINK_HOME" to="/" className="[&.active]:text-slate-400">
      Home
    </Link>
    <Link
      data-testid="LINK_WIZARDS"
      to="/wizards"
      className="[&.active]:text-slate-400"
    >
      Wizards
    </Link>
    <Link
      data-testid="LINK_HOUSES"
      to="/houses"
      className="[&.active]:text-slate-400"
    >
      Houses
    </Link>
  </div>
)

export default SideBar
