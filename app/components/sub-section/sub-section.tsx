import type { JSX } from "react"
import { TypographyH2 } from "../typography/typography-h2"

export type SubSectionProps = {
	title: string
	content: JSX.Element
}

const SubSection = (props: SubSectionProps): JSX.Element => {
	return (
		<>
			{TypographyH2(props.title)}
			{props.content}
		</>
	)
}

export default SubSection
