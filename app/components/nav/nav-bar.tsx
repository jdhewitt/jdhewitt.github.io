import type { JSX } from "react"
import { useTranslation } from "react-i18next"
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
	const { t } = useTranslation()
	const linkToHome = href("/")
	const linkToAbout = href("/")
	const linkToContactUs = href("/")

	return (
		<NavigationMenu className="pb-4">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link to={linkToHome}>{t("navigation.home_tab")}</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link to={linkToAbout}>{t("navigation.about_tab")}</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link to={linkToContactUs}>{t("navigation.contact_tab")}</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<ThemeSwitcher />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavBar
