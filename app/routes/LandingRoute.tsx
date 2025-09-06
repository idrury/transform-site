import { LandingPage } from "~/presentation/landing/LandingPage";
import { Route } from "../+types/root";
import { A } from "node_modules/react-router/dist/development/route-data-DjzmHYNR.mjs";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Transform Creative",
      name: "Transform Creative | Home",
      content:
        "On a mission to help a thousand Aussie organisations achieve meaningful change by crafting compelling online resources.",
    },
  ];
}

export default function LandingRoute() {
  return <LandingPage />;
}
