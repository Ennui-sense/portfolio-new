import clsx from "clsx";
import "./Socials.scss";

import { socialsData } from "~/data/socialsData";

interface ISocials {
  className?: string;
}

const Socials = ({ className }: ISocials) => {
  return (
    <ul className={clsx("socials", className)}>
      {socialsData.map(({ id, href, label }) => (
        <li className="socials-item">
          <a href={href} key={id} className="socials-link">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
