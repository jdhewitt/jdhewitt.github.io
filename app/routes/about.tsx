import type { JSX } from "react"
import { useTranslation } from "react-i18next"
import david from "../../public/DavidHewitt.jpg"

export function meta() {
	const { t } = useTranslation()
	return [{ title: t("about.pageTitle") }, { name: "description", content: t("about.pageDescription") }]
}

const AboutPage = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<div>
			<div className="mx-auto max-w-4xl text-center">
				<img src={david} alt="David Hewitt" className="mx-auto h-auto w-full max-w-sm rounded-lg" />
				<p className="mt-8 text-lg">{t("about.daveBioBackground")}</p>
				<p className="mt-4 text-lg">{t("about.daveBioFounderGoal")}</p>
			</div>
		</div>
	)
}

export default AboutPage
