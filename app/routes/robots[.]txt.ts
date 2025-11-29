import { generateRobotsTxt } from "@forge42/seo-tools/robots"

export async function loader() {
	const isProduction = process.env.NODE_ENV === "production"
	const domain = "https://darius-0x4d.github.io"
	const robotsTxt = generateRobotsTxt([
		{
			userAgent: "*",
			[isProduction ? "allow" : "disallow"]: ["/"],
			sitemap: [`${domain}/jdhewitt.github.io/sitemap-index.xml`],
		},
	])
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain",
		},
	})
}
