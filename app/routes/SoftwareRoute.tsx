import { LandingPage } from "~/presentation/landing/LandingPage";
import { Route } from "../+types/root";
import { Software } from "~/presentation/software/Software";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Software' },
    { name: "description", content: "We're experts at creating Softwaare for Aussie organisations" },
  ];
}

export default function LandingRoute() {
  return (<Software/>);
}