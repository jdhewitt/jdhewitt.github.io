import { useTranslation } from "react-i18next"
import type { MetaFunction } from "react-router"
import HewittBuildersLogo from "~/components/nav/HewittBuildersLogo"
import NavBar from "~/components/nav/nav-bar"

export const meta: MetaFunction = () => {
	const { t } = useTranslation()
	return [{ title: t("pageTitle") }, { name: "description", content: t("pageDescription") }]
}

export default function Index() {
	const { t } = useTranslation()
	return (
		<div>
			<NavBar />
			<HewittBuildersLogo />
			<h1>{t("hi")}</h1>
		</div>
	)
}
