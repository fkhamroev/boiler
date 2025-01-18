import nitromixp24 from '../assets/nitromixp24.png'

export const boilers = [
  {
    "name": "Nitromix",
    "description": "Высокоэффективный и экономичный конденсационный котел",
    "img" : nitromixp24,
    "models": [
      {
        "model": "Nitromix P24",
        "efficiency": "109%",
        "powerOutput": {
          "CH": 23,
          "DHW": 11
        },
        "flowRate": "12.5 л/мин",
        "heatExchanger": "Нержавеющая сталь",
        "dimensions": {
          "height": "740 мм",
          "width": "425 мм",
          "depth": "310 мм"
        },
        "weight": "32.3 кг",
        "color": "Белый"
      },
      {
        "model": "Nitromix P28",
        "efficiency": "109%",
        "powerOutput": {
          "CH": 27,
          "DHW": 12.5
        },
        "flowRate": "12.5 л/мин",
        "heatExchanger": "Нержавеющая сталь",
        "dimensions": {
          "height": "740 мм",
          "width": "425 мм",
          "depth": "340 мм"
        },
        "weight": "34 кг",
        "color": "Белый"
      },
      {
        "model": "Nitromix P35",
        "efficiency": "109%",
        "powerOutput": {
          "CH": 35,
          "DHW": 15
        },
        "flowRate": "15 л/мин",
        "heatExchanger": "Нержавеющая сталь",
        "dimensions": {
          "height": "740 мм",
          "width": "425 мм",
          "depth": "340 мм"
        },
        "weight": "35.5 кг",
        "color": "Белый"
      }
    ]
  },
  {
    "name": "Nitron Condense",
    "description": "Высокоэффективный конденсационный котел",
    "models": [
      {
        "model": "Nitron Condense P24",
        "efficiency": "103%",
        "powerOutput": {
          "CH": 23,
          "DHW": 11.6
        },
        "flowRate": "11.6 л/мин",
        "heatExchanger": "Медь",
        "dimensions": {
          "height": "702 мм",
          "width": "405 мм",
          "depth": "330 мм"
        },
        "weight": "37 кг",
        "color": "Белый"
      },
      {
        "model": "Nitron Condense P28",
        "efficiency": "103%",
        "powerOutput": {
          "CH": 27,
          "DHW": 11.7
        },
        "flowRate": "11.7 л/мин",
        "heatExchanger": "Медь",
        "dimensions": {
          "height": "702 мм",
          "width": "430 мм",
          "depth": "330 мм"
        },
        "weight": "38 кг",
        "color": "Белый"
      }
    ]
  },
  {
    "name": "Atron",
    "description": "Высокоэффективный и современный газовый котел",
    "models": [
      {
        "model": "Atron H24",
        "efficiency": "93%",
        "powerOutput": {
          "CH": 23.5,
          "DHW": 10.7
        },
        "flowRate": "10.7 л/мин",
        "heatExchanger": "Медь",
        "dimensions": {
          "height": "700 мм",
          "width": "410 мм",
          "depth": "295 мм"
        },
        "weight": "30.5 кг",
        "color": "Белый"
      },
      {
        "model": "Atron H28",
        "efficiency": "93%",
        "powerOutput": {
          "CH": 27,
          "DHW": 12.7
        },
        "flowRate": "12.7 л/мин",
        "heatExchanger": "Медь",
        "dimensions": {
          "height": "700 мм",
          "width": "444 мм",
          "depth": "295 мм"
        },
        "weight": "33 кг",
        "color": "Белый"
      }
    ]
  }
]
