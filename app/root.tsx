import { clsx } from "clsx"
import { useTranslation } from "react-i18next"
import type { LinksFunction } from "react-router"
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "react-router"
import favicon from "../public/favicon.ico"

import { ThemeProvider, useTheme } from "./components/theme/theme-provider"
import { LanguageSwitcher } from "./library/language-switcher"
import { ClientHintCheck } from "./services/client-hints"
import tailwindcss from "./tailwind.css?url"

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: tailwindcss },
	{ rel: "icon", href: favicon },
]

export const handle = {
	i18n: "common",
}

export default function App() {
	const clientEnv = { NODE_ENV: import.meta.env.MODE }
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			<ThemedLayout clientEnv={clientEnv}>
				<Outlet />
			</ThemedLayout>
		</ThemeProvider>
	)
}

// biome-ignore lint/suspicious/noExplicitAny: Temporary for theme toggling
export function ThemedLayout({ children, clientEnv }: { children: React.ReactNode; clientEnv: any }) {
	const { i18n } = useTranslation()
	const { resolvedTheme } = useTheme()
	return (
		<html
			className={clsx("overflow-y-auto overflow-x-hidden", resolvedTheme)}
			lang={i18n.language}
			dir={i18n.dir()}
			style={{ colorScheme: resolvedTheme }}
		>
			<head>
				<ClientHintCheck />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full w-full">
				{clientEnv?.NODE_ENV === "development" && <LanguageSwitcher />}
				{children}
				<ScrollRestoration />
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: We set the window.env variable to the client env */}
				<script dangerouslySetInnerHTML={{ __html: `window.env = ${JSON.stringify(clientEnv ?? {})}` }} />
				<Scripts />
			</body>
		</html>
	)
}

export const ErrorBoundary = () => {
	const error = useRouteError()
	const { t } = useTranslation()
	// Constrain the generic type so we don't provide a non-existent key
	const statusCode = () => {
		if (!isRouteErrorResponse(error)) {
			return "500"
		}
		// Supported error code messages
		switch (error.status) {
			case 200:
				return "200"
			case 403:
				return "403"
			case 404:
				return "404"
			default:
				return "500"
		}
	}
	const errorStatusCode = statusCode()

	return (
		<div className="relative flex h-full min-h-screen w-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 placeholder-index sm:pt-8 sm:pb-16 dark:bg-white dark:from-blue-950 dark:to-blue-900">
			<div className="relative mx-auto max-w-[90rem] sm:px-6 lg:px-8">
				<div className="relative flex min-h-72 flex-col justify-center p-1 sm:overflow-hidden sm:rounded-2xl md:p-4 lg:p-6">
					<h1 className="w-full pb-2 text-center text-2xl text-red-600">{t(`error.${errorStatusCode}.title`)}</h1>
					<p className="w-full text-center text-lg dark:text-white">{t(`error.${errorStatusCode}.description`)}</p>
				</div>
			</div>
		</div>
	)
}
