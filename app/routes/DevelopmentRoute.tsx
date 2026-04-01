import { Icon } from "~/presentation/elements/Icon";
import { Route } from "../+types/root";
import "../app-v2.css";
import FeatureSelector, {
  type Feature,
} from "~/presentation/software/FeatureSelector";
import SoftwareProjects from "~/presentation/software/SoftwareProjects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Software Development in adelaide" },
    {
      name: "description",
      content:
        "Lightning fast, secure sites that build trust by reflecting not for profits true brand identity.",
    },
  ];
}

export default function DevelopmentRoute() {
  const buttons: Feature[] = [
    {
      className: "center col middle",
      icon: { name: "card-outline", size: 50 },
      text: "Opt out of the 'raisley fee'",
      description: [
        "Built for you fundraising platforms are great to get started, but as your organisation grows, that ~4% fee becomes a significant amount of your income.",
        "We charge a modest fee, not a percentage of your donations, so you keep more of the money you raise.",
      ],
    },
    {
      className: "center col middle",
      icon: { name: "lock-closed-outline", size: 50 },
      text: "Security built for your specific use case",
      description: [
        "By building a custom site, we know exactly where your data is stored, and where the biggest risks are.",
      ],
    },
    {
      className: "center col middle",
      icon: { name: "sparkles-outline", size: 50 },
      text: "Your dream features",
      description: [
        "Instead of spending hours finding hacky work-arounds to make your cool ideas work, give them to us!",
      ],
    },
    {
      className: "center col middle",
      icon: { name: "people-outline", size: 50 },
      text: "Face to face support",
      description: [
        "Our local team is here to help you, and your clients every step of the way.",
      ],
    },
    {
      className: "center col middle",
      icon: { name: "flash-outline", size: 50 },
      text: "Lightning fast performance",
      description: [
        "Our local team is here to help you, and your clients every step of the way.",
      ],
    },
  ];

  return (
    <div
      style={{ minHeight: "85vh" }}
      className="col middle center gap-20 m-20 "
    >
      <div className="w-50 center col middle gap-20">
        <h2 className="" style={{ textAlign: "center" }}>
          We love working with <b>Aussie not for profits</b> to create
          lightning fast, secure sites that <b>build trust</b> by
          reflecting your true brand identity.
        </h2>
        <button className="row gap-5">
          <Icon name="arrow-down" />
          More info
        </button>
        <div className="" style={{ height: 100 }} />
      </div>
      <div className="w-75 center">
        <div className="p-20 w-100">
          <FeatureSelector features={buttons} />
        </div>
      </div>

      <div className="" style={{ height: 100 }} />

      <SoftwareProjects />
    </div>
  );
}
