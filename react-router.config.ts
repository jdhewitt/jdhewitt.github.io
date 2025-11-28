import type { Config } from "@react-router/dev/config"

export default {
	future: {
		unstable_viteEnvironmentApi: true,
		unstable_splitRouteModules: true,
		unstable_optimizeDeps: true,
	},
	basename: "/jdhewitt.github.io/",
	routeDiscovery: { mode: "initial" },
	prerender: ["/", "/about", "/contact", "/sitemap-index.xml", "/sitemap.en.xml", "/sitemap.es.xml"],
} satisfies Config
