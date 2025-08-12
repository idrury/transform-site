import { Route } from "../+types/root";
import { Software } from "~/presentation/software/Software";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Software' },
    { name: "Contact", content: "Get in touch with us to create awesome videos, software and design" },
  ];
}

export default function LandingRoute() {
  return (<div className="row middle center w100 vh100">
    <div>
        <h2>Contact us</h2>
        
        <div>
            <a>Email us</a>
        </div>
    </div>
  </div>);
}