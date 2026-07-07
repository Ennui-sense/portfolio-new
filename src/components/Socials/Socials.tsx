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
        <li className="socials-item" key={id}>
          <a href={href} className="socials-link" target="_blank" rel="noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
