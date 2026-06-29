import "./Header.scss";

import meImageSrc from "~/assets/images/me.png";

import { stackData } from "~/data/stackData";

import Socials from "../Socials/Socials";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <img
          src={meImageSrc}
          alt="Мой профиль лица сгенерированный нейросетью"
          className="header__image"
          width={120}
          height={120}
        />

        <div className="header__content">
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
    </header>
  );
};

export default Header;
