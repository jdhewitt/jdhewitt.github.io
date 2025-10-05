import type { JSX } from "react"
import { ThemeSwitcher } from "../theme/theme-switcher"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

const NavBar = (): JSX.Element => {
	return (
		<NavigationMenu className="pb-4">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="/">Home</a>
					</NavigationMenuLink>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="/">About</a>
					</NavigationMenuLink>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="/">Contact Us</a>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<ThemeSwitcher />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavBar
