import { LandingPage } from "~/presentation/landing/LandingPage";
import { Route } from "../+types/root";
import { Design } from "~/presentation/design/design";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Design' },
    { name: "description", content: "Tell us who you are and we'll help you develop a style that is uniquely you." },
  ];
}

export default function LandingRoute() {
  return (<Design/>);
}