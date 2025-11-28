import type { JSX } from "react"

export function TypographyH2(sectionTitle: string): JSX.Element {
	return (
		<h2 className="scroll-m-20 border-b pt-8 pb-2 font-semibold text-3xl tracking-tight first:mt-0">{sectionTitle}</h2>
	)
}

export function TypographyH4(sectionTitle: string) {
	return <h4 className="scroll-m-20 font-semibold text-xl tracking-tight">{sectionTitle}</h4>
}

export function TypographyLarge(text: string) {
	return <div className="font-semibold text-lg">{text}</div>
}

export function TypographyLargeItalic(text: string) {
	return <div className="font-semibold text-lg italic">{text}</div>
}

export function TypographyP(paragraphText: string) {
	return <p className="leading-7 [&:not(:first-child)]:mt-6">{paragraphText}</p>
}

export function TypographyListText(listItems: string[]): JSX.Element {
	return (
		<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
			{listItems.map((listItem) => {
				return <li key={listItem}>{listItem}</li>
			})}
		</ul>
	)
}

export function TypographyListContent(listItems: JSX.Element[]): JSX.Element {
	return (
		<ul className="my-6 ml-6 list-disc [&>li]:mt-2 [&>li]:pb-6">
			{listItems.map((listItem) => {
				return <li key={listItem?.key}>{listItem}</li>
			})}
		</ul>
	)
}
