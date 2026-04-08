import { LandingPage } from "~/presentation/landing/LandingPage";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Transform Creative | Website & Video for Nonprofits" },
    {
      name: "description",
      content:
        "Adelaide creative agency specialising in websites, video production and software for Australian not-for-profits and charities. Built to drive real change.",
    },
    {
      name: "keywords",
      content:
        "not for profit website Adelaide, NFP video production South Australia, charity website Australia, nonprofit website design, creative agency Adelaide, video production Adelaide",
    },
    // Open Graph
    { property: "og:title", content: "Transform Creative | Website & Video for Nonprofits" },
    {
      property: "og:description",
      content:
        "Adelaide creative agency specialising in websites, video production and software for Australian not-for-profits and charities. Built to drive real change.",
    },
    { property: "og:image", content: "/og-image.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.transformcreative.com.au/home" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Transform Creative | Website & Video for Nonprofits" },
    {
      name: "twitter:description",
      content:
        "Adelaide creative agency specialising in websites, video production and software for Australian not-for-profits and charities.",
    },
    { name: "twitter:image", content: "/og-image.jpg" },
  ];
}

export default function LandingRoute() {
  return <LandingPage />;
}
