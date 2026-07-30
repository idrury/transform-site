import { Authentication } from "~/presentation/authentication/Authentication";
import { buildMeta } from "~/business/seoBL";

export function meta() {
  return buildMeta({
    title: "Sign In | Transform Creative",
    description: "Sign in to your Transform Creative account.",
    path: "/auth",
    noIndex: true,
  });
}

export default function AuthenticationRoute() {
  return <Authentication />;
}
