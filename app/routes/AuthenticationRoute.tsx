import { Authentication } from "~/presentation/authentication/Authentication";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Sign in' },
    { name: "description", content: '' },
  ];
}

export default function AuthenticationRoute() {
  return (<Authentication/>);
}