import { generateSitemapIndex } from "@forge42/seo-tools/sitemap"

export const loader = async () => {
	const domain = "https://darius-0x4d.github.io"
	const sitemaps = generateSitemapIndex([
		{
			url: `${domain}/jdhewitt.github.io/sitemap.en.xml`,
			lastmod: "2025-11-27",
		},
		{
			url: `${domain}/jdhewitt.github.io/sitemap.es.xml`,
			lastmod: "2025-11-27",
		},
	])

	return new Response(sitemaps, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	})
}
