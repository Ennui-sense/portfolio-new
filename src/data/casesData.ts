import type { CaseType } from "~/types";

import mp4DetailingVideoSource from "/detailing.mp4";
import mp4GadgetVideoSource from "/gadget.mp4";
import mp4WaterVideoSource from "/water.mp4";
import mp4AvitoVideoSource from "/avito.mp4";

import webmDetailingVideoSource from "/detailing.webm";
import webmGadgetVideoSource from "/gadget.webm";
import webmWaterVideoSource from "/water.webm";
import webmAvitoVideoSource from "/avito.webm";

import posterDetailingSource from "~/assets/images/poster-detailing.jpg";
import posterGadgetSource from "~/assets/images/poster-gadget.jpg";
import posterWaterSource from "~/assets/images/poster-water.jpg";
import posterAvitoSource from "~/assets/images/poster-avito.jpg";

export const casesData: CaseType[] = [
  {
    id: 1,
    mp4VideoSrc: mp4DetailingVideoSource,
    webmVideoSrc: webmDetailingVideoSource,
    posterSrc: posterDetailingSource,
    href: "https://godetailing.ru",
    label: "godetailing.ru",
    description:
      "Многостраничный сайт для сервиса мобильного детейлинга автомобилей",
  },
  {
    id: 2,
    mp4VideoSrc: mp4GadgetVideoSource,
    webmVideoSrc: webmGadgetVideoSource,
    posterSrc: posterGadgetSource,
    href: "https://xn----7sbbjcehdae3d3cua3q.xn--p1ai/",
    label: "гаджет-галерея.рф",
    description:
      "Интернет-магазин для заказа техники Apple в Перми и Екатеринбурге",
  },
  {
    id: 3,
    mp4VideoSrc: mp4AvitoVideoSource,
    webmVideoSrc: webmAvitoVideoSource,
    posterSrc: posterAvitoSource,
    href: "/",
    label: "avito.ru",
    description:
      "Страница объявлений с интеграцией ИИ в рамках тестового задания для Авито",
  },
  {
    id: 4,
    mp4VideoSrc: mp4WaterVideoSource,
    webmVideoSrc: webmWaterVideoSource,
    posterSrc: posterWaterSource,
    href: "https://living-water-nine.vercel.app/",
    label: "living-water.ru",
    description: "Концепт корпоративного сайта для компании по продаже автоматов питьевой воды",
  },
];
