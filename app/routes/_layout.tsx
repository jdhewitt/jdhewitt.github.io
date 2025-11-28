import { Outlet } from "react-router"
import NavBar from "~/components/nav/nav-bar"

export default function PageLayout() {
	return (
		<div className="flex min-h-screen flex-col p-6">
			<NavBar />
			<main className="flex flex-grow flex-col">
				<Outlet />
			</main>
		</div>
	)
}
