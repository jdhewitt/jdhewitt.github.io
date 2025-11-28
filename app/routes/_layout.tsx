import { Outlet, useLocation } from "react-router"
import NavBar from "~/components/nav/nav-bar"

export default function PageLayout() {
	const location = useLocation()
	const isContactPage = location.pathname === "/contact"
	return (
		<div className="flex min-h-screen flex-col p-6">
			<NavBar className={isContactPage ? "flex-none" : ""} />
			<main className="flex flex-grow flex-col">
				<Outlet />
			</main>
		</div>
	)
}
