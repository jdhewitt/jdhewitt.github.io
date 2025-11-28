import { index, type RouteConfig } from "@react-router/dev/routes"

export default [
	index("./routes/home.tsx"),
	{ path: "/resource/:splat", file: "./routes/resource.locales.ts" },
	{ path: "sitemap-index.xml", file: "./routes/sitemap-index[.]xml.ts" },
	{ path: "sitemap.:lang.xml", file: "./routes/sitemap.$lang[.]xml.ts" },
	{ path: "robots.txt", file: "./routes/robots[.]txt.ts" },
	{ path: "*", file: "./routes/$.tsx" },
] satisfies RouteConfig
