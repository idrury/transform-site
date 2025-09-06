import { CONTACT } from "~/data/Objects";
import { Route } from "../+types/root";
import { Software } from "~/presentation/software/Software";
import { ContactTab } from "~/presentation/landing/ContactTab";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    {
      name: "Contact",
      content:
        "Get in touch with us to create impactful videos, software and design",
    },
  ];
}

export default function LandingRoute() {
  return (
    <div className="col middle w100 vh100 center">
      <ContactTab />
      <h3 className="m3">{CONTACT.email}</h3>
    </div>
  );
}
