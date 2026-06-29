import "./Footer.scss";

import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <a href="/" className="footer__link">
          designed by kalinin (•◡•){" "}
        </a>

				<Socials className="footer__socials"/>
      </div>
    </footer>
  );
};

export default Footer;
