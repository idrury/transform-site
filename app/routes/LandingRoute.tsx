import { LandingPage } from "~/presentation/landing/LandingPage";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Transform Creative' },
    { name: "description", content: 'The landing page for transform creative' },
  ];
}

export default function LandingRoute() {
  return (<LandingPage/>);
}