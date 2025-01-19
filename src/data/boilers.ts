import boiler from "../assets/boiler.png";

export interface BoilerModel {
  id: string;
  name: string;
  power: string;
  efficiency: string;
  flowRate: string;
  weight: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  features: string[];
  warranty: string;
}

export interface Boiler {
  id: string;
  brand: string;
  description: string;
  img: string;
  models: BoilerModel[];
}

export const boilers: Boiler[] = [
  {
    id: "ariston",
    brand: "Ariston",
    description: "Итальянские котлы премиум класса",
    img: boiler,
    models: [
      {
        id: "p215",
        name: "P215",
        power: "21.5 кВт",
        efficiency: "93%",
        flowRate: "13.5 л/мин",
        weight: "28 кг",
        dimensions: {
          height: "700 мм",
          width: "400 мм",
          depth: "300 мм",
        },
        features: [
          "Электронный розжиг",
          "Защита от замерзания",
          "Система самодиагностики",
          "LCD дисплей",
        ],
        warranty: "3 года",
      },
      {
        id: "p224",
        name: "P224",
        power: "24 кВт",
        efficiency: "94%",
        flowRate: "14 л/мин",
        weight: "30 кг",
        dimensions: {
          height: "700 мм",
          width: "400 мм",
          depth: "300 мм",
        },
        features: [
          "Электронный розжиг",
          "Защита от замерзания",
          "Система самодиагностики",
          "LCD дисплей",
          "Wi-Fi модуль",
        ],
        warranty: "3 года",
      },
    ],
  },
  {
    id: "baxi",
    brand: "BAXI",
    description: "Надежные итальянские котлы",
    img: boiler,
    models: [
      {
        id: "eco-classic",
        name: "ECO Classic 24",
        power: "24 кВт",
        efficiency: "92%",
        flowRate: "14 л/мин",
        weight: "29 кг",
        dimensions: {
          height: "730 мм",
          width: "400 мм",
          depth: "299 мм",
        },
        features: [
          "Битермический теплообменник",
          "Электронный розжиг",
          "Защита от замерзания",
          "ЖК-дисплей",
        ],
        warranty: "2 года",
      },
      {
        id: "main-5",
        name: "MAIN 5 18 F",
        power: "18 кВт",
        efficiency: "93%",
        flowRate: "10.3 л/мин",
        weight: "26 кг",
        dimensions: {
          height: "700 мм",
          width: "400 мм",
          depth: "300 мм",
        },
        features: [
          "Компактные размеры",
          "Электронный розжиг",
          "Система защиты от замерзания",
          "Манометр",
        ],
        warranty: "2 года",
      },
    ],
  },
  {
    id: "vaillant",
    brand: "Vaillant",
    description: "Немецкое качество и надежность",
    img: boiler,
    models: [
      {
        id: "turbotec-plus",
        name: "turboTEC plus VU 242/5-5",
        power: "24 кВт",
        efficiency: "94%",
        flowRate: "13.8 л/мин",
        weight: "35 кг",
        dimensions: {
          height: "720 мм",
          width: "440 мм",
          depth: "335 мм",
        },
        features: [
          "Система Aqua Power Plus",
          "Система Aqua Comfort Plus",
          "Электронный розжиг",
          "Многофункциональный дисплей",
        ],
        warranty: "2 года",
      },
    ],
  },
];
