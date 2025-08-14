import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/LandingRoute.tsx"),
  route("/portfolio", "routes/MediaRoute.tsx"),
  route("", "routes/ErrorBoundary.tsx")
] satisfies RouteConfig;
