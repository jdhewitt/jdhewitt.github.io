import type { JSX } from "react"
import { useTranslation } from "react-i18next"
import { href } from "react-router"
import HewittBuildersLogo from "~/components/nav/HewittBuildersLogo"
import SubSection from "~/components/sub-section/sub-section"
import { TypographyListContent, TypographyP } from "~/components/typography/typography-h2"
import { Button } from "~/components/ui/button"
import { Link } from "~/library/link"

export function meta() {
	const { t } = useTranslation()
	return [{ title: t("pageTitle") }, { name: "description", content: t("pageDescription") }]
}

const valuesListItem = (valueTitle: string, valueDescription: string): JSX.Element => {
	return (
		<div key={valueDescription}>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				<span className="font-semibold text-lg italic">{valueTitle}</span>
				{valueDescription}
			</p>
		</div>
	)
}

export default function Index() {
	const { t } = useTranslation()
	const purposeTitle = t("purposeTitle")
	const purposeDescription = t("purposeDescription")
	const purposeContent = TypographyP(purposeDescription)

	const valuesTitle = t("valuesTitle")
	const valuesKeys = [
		{ title: t("valuesStewardship.title"), description: t("valuesStewardship.description") },
		{ title: t("valuesIntegrity.title"), description: t("valuesIntegrity.description") },
		{ title: t("valuesQuality.title"), description: t("valuesQuality.description") },
	]
	const valuesContent: JSX.Element[] = valuesKeys.map((valueskey) => {
		return valuesListItem(valueskey.title, valueskey.description)
	})

	const linkToContactUs = href("/contact")
	return (
		<div className="flex flex-col">
			<HewittBuildersLogo />
			<SubSection title={purposeTitle} content={purposeContent} />
			<SubSection title={valuesTitle} content={TypographyListContent(valuesContent)} />
			<div className="flex justify-center pt-8">
				<Button asChild size={"lg"}>
					<Link to={linkToContactUs}>{"Contact Us"}</Link>
				</Button>
			</div>
		</div>
	)
}
