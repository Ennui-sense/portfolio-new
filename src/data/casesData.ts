import type { CaseType } from "~/types";
import videoSource from "/hero-bg.mp4";

export const casesData: CaseType[] = [
  {
    id: 1,
    videoSrc: videoSource,
    href: "/",
    label: "godetailing.ru",
    descriprion:
      "Многостраничный сайт для сервиса мобильного детейлинга автомобилей",
  },
  {
    id: 2,
    videoSrc: videoSource,
    href: "/",
    label: "гаджет-галерея.рф",
    descriprion:
      "Интернет-магазин для заказа техники Apple в Перми и Екатеринбурге",
  },
  {
    id: 3,
    videoSrc: videoSource,
    href: "/",
    label: "avito.ru",
    descriprion:
      "Страница объявлений с интеграцией ИИ в рамках тестового задания для Авито",
  },
];
