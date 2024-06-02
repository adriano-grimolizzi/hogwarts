import { Link } from "@tanstack/react-router"

const SideBar = (): JSX.Element => (
	<div className="flex flex-col px-3">
		<Link data-testid="LINK_HOME" to="/" className="[&.active]:font-bold">
			Home
		</Link>
		<Link
			data-testid="LINK_WIZARDS"
			to="/wizards"
			className="[&.active]:font-bold"
		>
			Wizards
		</Link>
		<Link
			data-testid="LINK_HOUSES"
			to="/houses"
			className="[&.active]:font-bold"
		>
			Houses
		</Link>
	</div>
)

export default SideBar
