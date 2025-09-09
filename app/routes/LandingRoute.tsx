import { LandingPage } from "~/presentation/landing/LandingPage";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Transform Creative",
      name: "description",
      content:
        "On a mission to help a thousand Aussie organisations achieve meaningful change by crafting compelling online resources.",
    },
  ];
}

export default function LandingRoute() {
  return <LandingPage />;
}
