import type { JSX } from "react"
import { href } from "react-router"
import { Link } from "~/library/link"
import { ThemeSwitcher } from "../theme/theme-switcher"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

const NavBar = (): JSX.Element => {
	const linkToHome = href("/")
	const linkToAbout = href("/about")
	const linkToContactUs = href("/contact")
	return (
		<NavigationMenu className="pb-4">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="/">Home</a>
						<Link to={linkToHome}>{"Contact Us"}</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link to={linkToAbout}>{"Contact Us"}</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link to={linkToContactUs}>{"Contact Us"}</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<ThemeSwitcher />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavBar
