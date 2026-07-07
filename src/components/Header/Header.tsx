import "./Header.scss";

import { lazy, Suspense, useCallback, useState } from "react";

import { stackData } from "~/data/stackData";

import Socials from "../Socials/Socials";

import posterMeSrc from "~/assets/images/poster-me.png";

const HeaderModel = lazy(() => import("../HeaderModel/HeaderModel"));

const Header = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const handleModelLoaded = useCallback(() => {
    setIsModelLoaded(true);
  }, []);

  return (
    <header className="header">
      <div className="header__inner container">
        <div
          className="header__image"
          role="img"
          aria-label="3D-модель профиля"
        >
          {!isModelLoaded && (
            <img
              className="header__poster"
              src={posterMeSrc}
              alt="3D модель профиля"
            />
          )}

          <Suspense fallback={null}>
            <HeaderModel onLoaded={handleModelLoaded} />
          </Suspense>
        </div>

        <div className="header__content">
          <div className="header__info">
            <p className="header__name">Анатолий Шредер</p>
            <p className="header__description">
              Фронтенд-разработчик с&nbsp;2&nbsp;годами опыта с&nbsp;интересом
              к&nbsp;созданию технически качественных пользовательских интерфейсов
            </p>

            <Socials className="header__socials" />
          </div>

          <div className="header__stack">
            <p className="header__stack-title">Стек технологий</p>

            <ul className="header__stack-list">
              {stackData.map(({ id, label }) => (
                <li className="header__stack-item" key={id}>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
