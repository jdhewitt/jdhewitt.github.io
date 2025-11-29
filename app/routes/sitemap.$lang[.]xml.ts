import { generateRemixSitemap } from "@forge42/seo-tools/remix/sitemap"
import type { Route } from "./+types/sitemap.$lang[.]xml"

export const loader = async ({ params }: Route.LoaderArgs) => {
	const domain = "https://darius-0x4d.github.io/jdhewitt.github.io"

	const { routes } = await import("virtual:react-router/server-build")

	const sitemap = await generateRemixSitemap({
		domain,
		routes,
		ignore: ["/resource/*"],
		// Transforms the url before adding it to the sitemap
		// @ts-expect-error -- params.lang exists
		urlTransformer: (url) => `${url}?lng=${params.lang}`,
		sitemapData: {
			// @ts-expect-error -- params.lang exists
			lang: params.lang,
		},
	})

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	})
}
