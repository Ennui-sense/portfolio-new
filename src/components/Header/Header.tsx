import "./Header.scss";

import meImageSrc from "~/assets/images/me.png";

import { socialsData } from "~/data/socialsData";
import { stackData } from "~/data/stackData";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <img src={meImageSrc} alt="Мой профиль лица сгенерированный нейросетью" className="header__image" width={120} height={120} />

        <div className="header__content">
          <p className="header__name">Анатолий Шредер</p>
          <p className="header__description">Фронтенд-разработчик с 2 годами опыта с интересом к созданию технически качественных пользовательских интерфейсов</p>
          <ul className="header__socials">
            {socialsData.map(({ id, href, label }) => (
              <li className="header__socials-item">
                <a href={href} key={id} className="header__socials-link">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="header__stack">
          <p className="header__stack-title">Стек технологий</p>

          <ul className="header__stack-list">
            {stackData.map(({ id, label }) => (
              <li className="header__stack-item" key={id}>{label}</li>
            ))}

          </ul>

        </div>
      </div>
    </header>
  )
}

export default Header