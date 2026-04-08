import { Authentication } from "~/presentation/authentication/Authentication";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign In | Transform Creative" },
    { name: "description", content: "Sign in to your Transform Creative account." },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function AuthenticationRoute() {
  return (<Authentication/>);
}