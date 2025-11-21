// import { flatRoutes } from "@react-router/fs-routes"

// export default flatRoutes({
// 	ignoredRouteFiles: ["**/*.test.{ts,tsx}"],
// })

import { index, type RouteConfig } from "@react-router/dev/routes"

export default [index("./routes/home.tsx")] satisfies RouteConfig
