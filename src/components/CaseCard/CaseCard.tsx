import clsx from "clsx";
import "./CaseCard.scss";

import type { CaseType } from "~/types";

interface ICaseCard {
  caseData: CaseType;
  className?: string;
}

const CaseCard = ({ caseData, className }: ICaseCard) => {
  const { label, videoSrc, href, descriprion } = caseData;

  return (
    <article className={clsx("case-card", className)}>
      <div className="case-card__inner">
        <header className="case-card__address-bar">
          <div className="case-card__traffic-lights">
            <span className="case-card__control"></span>
            <span className="case-card__control"></span>
            <span className="case-card__control"></span>
          </div>

          <a className="case-card__active-tab" href={href}>
            {label}
          </a>
        </header>

        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="case-card__video"
          disablePictureInPicture
        >
          <source src={videoSrc} type="video/mp4" />
          Извините, ваш браузер не поддерживает тег video
        </video>
      </div>

      <p className="case-card__description">{descriprion}</p>
    </article>
  );
};

export default CaseCard;
