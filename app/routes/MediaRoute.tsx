import { Media } from "~/presentation/media/Media";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Media' },
    { name: "description", content: "Partner with us to create authentic material that cuts through the dribble of AI content." },
  ];
}

export default function LandingRoute() {
  return (<Media/>);
}