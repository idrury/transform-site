import { Portfolio } from "~/presentation/media/Portfolio";
import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    {
      name: "description",
      content:
        "Examples of videos, software and design we've created for organisations across South Australia. Partner with us to create authentic material that cuts through the dribble of AI content.",
    },
     // Open Graph (for social media sharing)
    { property: "og:title", content: "Transform Creative | Portfolio" },
    {
      property: "og:description",
      content:
        "On a mission to help a thousand Aussie organisations achieve meaningful change by crafting compelling online resources.",
    },
    {
      property: "og:image",
      content: "/transform-icon-color-donut.png",
    }, // Use your logo or a relevant image
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.transformcreative.com.au/portfolio" }, // Replace with your actual URL

    // Twitter Card
    { name: "twitter:card", content:"/transform-icon-color-donut.png" },
    { name: "twitter:title", content: "Transform Creative" },
    {
      name: "twitter:description",
      content:
        "On a mission to help a thousand Aussie organisations achieve meaningful change by crafting compelling online resources.",
    },
    {
      name: "twitter:image",
      content: "/transform-icon-color-donut.png",
    },
    {
      name: "keywords",
      content:
        "digital content, video production, web design, software, Adelaide, South Australia, creative agency",
    },
  ];

}

export default function LandingRoute() {
  return <Portfolio />;
}
