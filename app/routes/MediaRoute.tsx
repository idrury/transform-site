import { Portfolio } from "~/presentation/media/Portfolio";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Nonprofit Video & Web Projects | Transform Creative" },
    {
      name: "description",
      content:
        "Browse our work with South Australian and Australian nonprofits — video production, custom websites, and software that builds trust and drives impact.",
    },
    {
      name: "keywords",
      content:
        "nonprofit video production portfolio, charity website examples South Australia, NFP digital content Adelaide, video production portfolio Adelaide",
    },
    // Open Graph
    { property: "og:title", content: "Portfolio | Nonprofit Video & Web Projects | Transform Creative" },
    {
      property: "og:description",
      content:
        "Browse our work with South Australian and Australian nonprofits — video production, custom websites, and software that builds trust and drives impact.",
    },
    { property: "og:image", content: "/og-image.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.transformcreative.com.au/portfolio" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Portfolio | Transform Creative" },
    {
      name: "twitter:description",
      content:
        "Browse our work with South Australian and Australian nonprofits — video production, custom websites, and software that builds trust.",
    },
    { name: "twitter:image", content: "/og-image.jpg" },
  ];
}

export default function LandingRoute() {
  return <Portfolio />;
}
