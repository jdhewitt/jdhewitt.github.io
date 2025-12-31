import { index, layout, type RouteConfig, route } from "@react-router/dev/routes"

export default [
	layout("./routes/_layout.tsx", [
		index("./routes/home.tsx"),
		route("about", "./routes/about.tsx"),
		route("contact", "./routes/contact.tsx"),
		route("*", "./routes/$.tsx"),
	]),
	route("sitemap-index.xml", "./routes/sitemap-index[.]xml.ts"),
	route("sitemap.:lang.xml", "./routes/sitemap.$lang[.]xml.ts"),
	route("robots.txt", "./routes/robots[.]txt.ts"),
] satisfies RouteConfig
