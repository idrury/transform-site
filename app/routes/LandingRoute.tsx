import { LandingPage } from "~/presentation/landing/LandingPage";
import { buildMeta, canonical } from "~/business/seoBL";

const TITLE = "Transform Creative | Website & Video for Nonprofits";
const DESCRIPTION =
  "Adelaide creative agency specialising in websites, video production and software for Australian not-for-profits and charities. Built to drive real change.";

export function meta() {
  return buildMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: "/",
    keywords:
      "not for profit website Adelaide, NFP video production South Australia, charity website Australia, nonprofit website design, creative agency Adelaide, video production Adelaide",
    twitterDescription:
      "Adelaide creative agency specialising in websites, video production and software for Australian not-for-profits and charities.",
  });
}

export const links = () => [canonical("/")];

export default function LandingRoute() {
  return <LandingPage />;
}
