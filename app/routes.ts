import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/LandingRoute.tsx"),
  route("/media", "routes/MediaRoute.tsx"),
  route("/software", "routes/SoftwareRoute.tsx"),
  route("/design", "routes/DesignRoute.tsx"),
] satisfies RouteConfig;
