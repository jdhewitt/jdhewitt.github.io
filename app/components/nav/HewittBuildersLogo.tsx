import type React from "react"
import { useTranslation } from "react-i18next"
import { useTheme } from "../theme/theme-provider"

type LogoProps = {
	className?: string
	width?: string | number | undefined
	height?: string | number | undefined
	fill?: string
	stroke?: string
}

const HewittBuildersLogo: React.FC<LogoProps> = ({
	className = "",
	width,
	height,
	fill: propFill,
	stroke: propStroke,
	...props
}) => {
	const { t } = useTranslation()
	const { resolvedTheme } = useTheme()

	const fillColor = resolvedTheme === "dark" ? "white" : (propFill ?? "#231f20")
	const strokeColor = resolvedTheme === "dark" ? "white" : (propStroke ?? "#231f20")

	return (
		<svg
			viewBox="0 0 162.95 68.49"
			width={width}
			height={height}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>{t("pageTitle")}</title>
			{/* Main "HEWITT" text */}
			<path fill={fillColor} d="M0,0h3.15v14.53h19.05V0h3.15v33.63h-3.15v-16.46H3.15v16.46H0V0Z" />
			<path fill={fillColor} d="M31.37,0h22.86v2.78h-19.71v12.09h18.06v2.73h-18.06v13.12h20.23v2.92h-23.38V0Z" />
			<path
				fill={fillColor}
				d="M57.06,0h3.25l5.83,22.67c.66,2.49,1.55,6.63,1.55,6.63h.09s.94-4.05,1.6-6.44L75.54,0h3.39l6.16,22.81c.61,2.4,1.55,6.49,1.55,6.49h.09s.94-4.14,1.55-6.63L94.17,0h3.15l-9.13,33.63h-3.2l-6.4-24.51c-.61-2.12-1.32-5.46-1.32-5.46h-.09s-.71,3.29-1.27,5.46l-6.58,24.51h-3.34L57.06,0Z"
			/>
			<path fill={fillColor} d="M101.04,0h3.15v33.63h-3.15V0Z" />
			<path fill={fillColor} d="M119.67,2.82h-11.38V0h25.87v2.82h-11.34v30.81h-3.15V2.82Z" />
			<path fill={fillColor} d="M148.03,2.82h-11.38V0h25.87v2.82h-11.34v30.81h-3.15V2.82Z" />

			{/* Dividing line */}
			<line y1="41.1" x2="162.95" y2="41.1" fill="none" stroke={strokeColor} strokeMiterlimit="10" strokeWidth="0.75" />

			{/* "BUILDERS" text */}
			<path
				fill={fillColor}
				d="M9.93,57.97c2.49.62,4.03,2.33,4.03,4.87,0,1.65-.57,2.95-1.6,3.87-1.03.95-2.57,1.49-4.44,1.49H0v-19.34h7.52c1.62,0,3,.41,4,1.19,1,.81,1.6,2.03,1.6,3.65,0,2.11-1.14,3.6-3.19,4.27ZM.84,57.67h7.27c2.46-.05,4.11-1.65,4.11-3.92,0-2.76-1.95-4.11-4.71-4.11H.84v8.03ZM.84,58.43v8.98h7c1.65,0,2.97-.49,3.87-1.27.89-.78,1.35-1.89,1.35-3.33,0-2.65-1.92-4.33-4.84-4.38H.84Z"
			/>
			<path
				fill={fillColor}
				d="M17.04,48.86v13.04c0,4.22,2.49,5.81,6.09,5.81s6.08-1.6,6.08-5.81v-13.04h.87v13.09c0,4.62-3.03,6.52-6.98,6.52s-6.92-1.95-6.92-6.52v-13.09h.87Z"
			/>
			<path fill={fillColor} d="M34.25,68.19h-.84v-19.34h.84v19.34Z" />
			<path fill={fillColor} d="M38.68,67.41h11.12v.78h-11.95v-19.34h.84v18.55Z" />
			<path
				fill={fillColor}
				d="M52.18,48.86h6.92c5.6,0,7.98,4.38,7.98,9.76s-2.57,9.57-8.17,9.57h-6.73v-19.34ZM58.89,67.44c4.68,0,7.3-3.35,7.3-8.82s-2.43-8.98-7.11-8.98h-6.06v17.8h5.87Z"
			/>
			<path fill={fillColor} d="M70.68,57.81h10.93v.76h-10.93v8.84h12.14v.78h-12.98v-19.34h12.71v.76h-11.87v8.19Z" />
			<path
				fill={fillColor}
				d="M86.42,68.19h-.84v-19.34h7.73c3.57,0,5.68,1.84,5.68,5.14,0,2.52-1.16,4.19-3.62,4.76v.03c2.22.51,3.08,2.11,3.19,4.92.11,3.62.49,4.16.78,4.41v.08h-.92c-.3-.22-.62-.84-.73-4.49-.11-3.16-1.3-4.52-4.38-4.52h-6.9v9.01ZM86.42,58.4h6.6c3.44,0,5.11-1.57,5.11-4.38s-1.7-4.41-4.9-4.41h-6.82v8.79Z"
			/>
			<path
				fill={fillColor}
				d="M101.68,62.05c.19,3.41,2.49,5.65,6.73,5.65,3.52,0,5.79-1.78,5.79-4.6,0-3-1.95-3.95-6.44-4.76-3.97-.73-6.19-1.92-6.19-4.98s2.49-4.81,6.25-4.81c3.95,0,6.19,2.19,6.6,5.44h-.87c-.38-2.95-2.49-4.65-5.71-4.65-3.38,0-5.41,1.6-5.41,4,0,2.57,1.81,3.52,5.73,4.25,4.16.76,6.9,1.81,6.9,5.46,0,3.22-2.51,5.44-6.63,5.44-4.98,0-7.41-2.76-7.65-6.44h.89Z"
			/>
		</svg>
	)
}

export default HewittBuildersLogo
