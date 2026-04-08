import { CONTACT } from "~/data/Objects";
import { Route } from "../+types/root";
import { Software } from "~/presentation/software/Software";
import { ContactTab } from "~/presentation/landing/ContactTab";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Get in Touch | Transform Creative Adelaide" },
    {
      name: "description",
      content:
        "Ready to upgrade your nonprofit's website or create video content? Get in touch with Transform Creative in Adelaide, South Australia.",
    },
    {
      name: "keywords",
      content:
        "contact Transform Creative, nonprofit website Adelaide enquiry, video production South Australia contact, creative agency Adelaide",
    },
    // Open Graph
    { property: "og:title", content: "Get in Touch | Transform Creative Adelaide" },
    {
      property: "og:description",
      content:
        "Ready to upgrade your nonprofit's website or create video content? Get in touch with Transform Creative in Adelaide, South Australia.",
    },
    { property: "og:image", content: "/og-image.jpg" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.transformcreative.com.au/contact" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Get in Touch | Transform Creative Adelaide" },
    {
      name: "twitter:description",
      content:
        "Ready to upgrade your nonprofit's website or create video content? Get in touch with Transform Creative in Adelaide.",
    },
    { name: "twitter:image", content: "/og-image.jpg" },
  ];
}

export default function LandingRoute() {
  return (
    <div className="col middle w100 vh100 center">
      <ContactTab />
      
    </div>
  );
}
