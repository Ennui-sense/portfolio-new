import clsx from "clsx";
import "./CaseCard.scss";

import type { CaseType } from "~/types";

import { useState, useEffect, useRef } from "react";

interface ICaseCard {
  caseData: CaseType;
  className?: string;
}

const CaseCard = ({ caseData, className }: ICaseCard) => {
  const { label, mp4VideoSrc, webmVideoSrc, href, description, posterSrc } =
    caseData;
  const cardRef = useRef<HTMLElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoadVideo(true);
        observer.disconnect();
      }
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article className={clsx("case-card", className)} ref={cardRef}>
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

        {shouldLoadVideo ? (
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
            className="case-card__video"
            disablePictureInPicture
            poster={posterSrc}
          >
            <source src={webmVideoSrc} type="video/webm" />
            <source src={mp4VideoSrc} type="video/mp4" />
            Извините, ваш браузер не поддерживает тег video
          </video>
        ) : (
          <img
            className="case-card__image"
            src={posterSrc}
            width={736}
            height={394}
            alt=""
          />
        )}
      </div>

      <p className="case-card__description">{description}</p>
    </article>
  );
};

export default CaseCard;
