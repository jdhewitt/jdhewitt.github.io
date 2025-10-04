import type { JSX } from "react"
import { ThemeSwitcher } from "../theme/theme-switcher"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "../ui/navigation-menu"

const NavBar = (): JSX.Element => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Link</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<ThemeSwitcher />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavBar
