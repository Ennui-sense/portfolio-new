import type { CaseType } from "~/types";
import detailingVideoSource from "/detailing.mp4";
import gadgetVideoSource from "/gadget.mp4";
import waterVideoSource from "/water.mp4";
import avitoVideoSource from "/avito.mp4";

export const casesData: CaseType[] = [
  {
    id: 1,
    videoSrc: detailingVideoSource,
    href: "https://godetailing.ru",
    label: "godetailing.ru",
    descriprion:
      "Многостраничный сайт для сервиса мобильного детейлинга автомобилей",
  },
  {
    id: 2,
    videoSrc: gadgetVideoSource,
    href: "https://xn----7sbbjcehdae3d3cua3q.xn--p1ai/",
    label: "гаджет-галерея.рф",
    descriprion:
      "Интернет-магазин для заказа техники Apple в Перми и Екатеринбурге",
  },
  {
    id: 3,
    videoSrc: avitoVideoSource,
    href: "/",
    label: "avito.ru",
    descriprion:
      "Страница объявлений с интеграцией ИИ в рамках тестового задания для Авито",
  },
  {
    id: 4,
    videoSrc: waterVideoSource,
    href: "https://living-water-nine.vercel.app/",
    label: "living-water.ru",
    descriprion:
      "какой-то текст",
  },
];
