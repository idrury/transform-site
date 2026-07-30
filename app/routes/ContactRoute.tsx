import { ContactTab } from "~/presentation/landing/ContactTab";
import { buildMeta, canonical } from "~/business/seoBL";

export function meta() {
  return buildMeta({
    title: "Get in Touch | Transform Creative Adelaide",
    description:
      "Ready to upgrade your nonprofit's website or create video content? Get in touch with Transform Creative in Adelaide, South Australia.",
    path: "/contact",
    keywords:
      "contact Transform Creative, nonprofit website Adelaide enquiry, video production South Australia contact, creative agency Adelaide",
    twitterDescription:
      "Ready to upgrade your nonprofit's website or create video content? Get in touch with Transform Creative in Adelaide.",
  });
}

export const links = () => [canonical("/contact")];

export default function ContactRoute() {
  return (
    <div className="col middle w100 vh100 center">
      <ContactTab />
    </div>
  );
}
