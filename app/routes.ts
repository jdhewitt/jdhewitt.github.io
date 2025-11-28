import { index, type RouteConfig, route } from "@react-router/dev/routes"

export default [
	{
		file: "./routes/_layout.tsx",
		children: [
			index("./routes/home.tsx"),
			route("about", "./routes/about.tsx"),
			route("contact", "./routes/contact.tsx"),
		],
	},
	{ path: "/resource/:splat", file: "./routes/resource.locales.ts" },
	{ path: "sitemap-index.xml", file: "./routes/sitemap-index[.]xml.ts" },
	{ path: "sitemap.:lang.xml", file: "./routes/sitemap.$lang[.]xml.ts" },
	{ path: "robots.txt", file: "./routes/robots[.]txt.ts" },
	{ path: "*", file: "./routes/$.tsx" },
] satisfies RouteConfig
