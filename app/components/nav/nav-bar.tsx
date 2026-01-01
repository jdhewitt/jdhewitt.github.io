import type { JSX } from "react"
import { useTranslation } from "react-i18next"
import { href, useLocation } from "react-router"
import { cn } from "~/lib/utils"
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
	const { pathname } = useLocation()
	const linkToHome = href("/")
	const linkToAbout = href("/about")
	const linkToContactUs = href("/contact")

	const normalizedPathname = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

	return (
		<NavigationMenu className="flex-none pb-4">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink
						active={normalizedPathname === linkToHome}
						asChild
						className={cn(navigationMenuTriggerStyle(), normalizedPathname === linkToHome && "bg-accent text-accent-foreground")}
					>
						<Link to={linkToHome}>{t("navigation.home_tab")}</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						active={normalizedPathname === linkToAbout}
						asChild
						className={cn(
							navigationMenuTriggerStyle(),
							normalizedPathname === linkToAbout && "bg-accent text-accent-foreground"
						)}
					>
						<Link to={linkToAbout}>{t("navigation.about_tab")}</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						active={normalizedPathname === linkToContactUs}
						asChild
						className={cn(
							navigationMenuTriggerStyle(),
							normalizedPathname === linkToContactUs && "bg-accent text-accent-foreground"
						)}
					>
						<Link to={linkToContactUs}>{t("navigation.contact_tab")}</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<ThemeSwitcher />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavBar
