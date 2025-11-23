import { DayItinerary } from './types';

// Data extracted from user request with refined coordinates for better accuracy
export const ITINERARY_DATA: DayItinerary[] = [
  {
    day: 1,
    locations: [
      { id: "d1-1", name: "阿興虱目魚 (收14:00)", url: "https://maps.app.goo.gl/j8p7sjVapaAxSHQs9", lat: 23.00133, lng: 120.21279 },
      { id: "d1-2", name: "府城黃家蝦捲 (14:30 開)", url: "https://maps.app.goo.gl/9sqHq3P2du6YDmyE8", lat: 22.99505, lng: 120.19635 },
      { id: "d1-3", name: "天品 臭豆腐", url: "https://maps.app.goo.gl/wyUJDbARezaPWgHS6", lat: 22.99978, lng: 120.20115 },
      { id: "d1-4", name: "七誠米粿", url: "https://maps.app.goo.gl/SfEUBKp1XRYSpiur9", lat: 22.99226, lng: 120.19976 },
      { id: "d1-5", name: "MOXI MOXI 焙茶專門店", url: "https://maps.app.goo.gl/i6joPuhaAiiL2YG78", lat: 22.99673, lng: 120.20448 },
      { id: "d1-6", name: "永樂市場", url: "https://maps.app.goo.gl/S83ewGGpF2DY5Me2A", lat: 22.99756, lng: 120.19928 },
      { id: "d1-7", name: "大東夜市 & 大東東夜市", url: "https://maps.app.goo.gl/hgJTE9sPfPsR7wg59", lat: 22.98354, lng: 120.22008 },
      { id: "d1-8", name: "U.I.J Hotel & Hostel - 友愛街旅館", url: "https://maps.app.goo.gl/kwKXffhZfDxm7d888", lat: 22.99139, lng: 120.20168 },
    ]
  },
  {
    day: 2,
    locations: [
      { id: "d2-1", name: "阿鳳浮水虱目魚羹", url: "https://maps.app.goo.gl/bhSFqLYLBzzZDhUJA", lat: 22.99212, lng: 120.20152 },
      { id: "d2-2", name: "有愛早餐咖啡", url: "https://maps.app.goo.gl/mHLnKnhQc7PqRT8f9", lat: 22.99085, lng: 120.20235 },
      { id: "d2-3", name: "U.I.J Hotel & Hostel", url: "https://maps.app.goo.gl/kwKXffhZfDxm7d888", lat: 22.99139, lng: 120.20168 },
      { id: "d2-4", name: "阿裕牛肉涮涮鍋 (昆崙店)", url: "https://maps.app.goo.gl/kpbetoZNEKL8Ys5b9", lat: 22.94245, lng: 120.26415 },
      { id: "d2-5", name: "青山茶行", url: "https://maps.app.goo.gl/LXZ1mAHjYVQfsQkE6", lat: 22.99455, lng: 120.20505 },
      { id: "d2-6", name: "名東蛋糕", url: "https://maps.app.goo.gl/EBG5R1L7GqHSa7sg7", lat: 22.99482, lng: 120.20385 },
      { id: "d2-7", name: "揪粏集冰果室", url: "https://maps.app.goo.gl/orurL6GPJb6ztegS8", lat: 22.99605, lng: 120.20045 },
      { id: "d2-8", name: "西市場 & 西門市場", url: "https://maps.app.goo.gl/NhpE3ZmkATDNvejAA", lat: 22.99415, lng: 120.19865 },
      { id: "d2-9", name: "夾子園台南航母店", url: "https://maps.app.goo.gl/SYerUduyWaBDzegJ7", lat: 23.00235, lng: 120.20885 },
      { id: "d2-10", name: "武聖夜市", url: "https://maps.app.goo.gl/CBodcn6eNKqGFG5a9", lat: 23.00335, lng: 120.19125 },
      { id: "d2-11", name: "U.I.J Hotel & Hostel", url: "https://maps.app.goo.gl/kwKXffhZfDxm7d888", lat: 22.99139, lng: 120.20168 },
    ]
  },
  {
    day: 3,
    locations: [
      { id: "d3-1", name: "六千泓佐土產牛肉", url: "https://maps.app.goo.gl/4xvPruaG6S8M5u1UA", lat: 22.98745, lng: 120.19685 },
      { id: "d3-2", name: "U.I.J Hotel & Hostel", url: "https://maps.app.goo.gl/kwKXffhZfDxm7d888", lat: 22.99139, lng: 120.20168 },
      { id: "d3-3", name: "無名羊肉湯-大菜市", url: "https://maps.app.goo.gl/k5b8m8zhFsi9EZ6a6", lat: 22.99425, lng: 120.19855 },
      { id: "d3-4", name: "矮仔成蝦仁飯", url: "https://maps.app.goo.gl/qz1Qv91uSGjZAKnP7", lat: 22.98715, lng: 120.19645 },
      { id: "d3-5", name: "葉家小卷米粉", url: "https://maps.app.goo.gl/D5rgh2azmrSt6WWW7", lat: 22.99445, lng: 120.19855 },
      { id: "d3-6", name: "南埕衖事", url: "https://maps.app.goo.gl/fJjeCJCeEqSMPtcg9", lat: 22.99265, lng: 120.19905 },
      { id: "d3-7", name: "万茶川日本茶專賣店", url: "https://maps.app.goo.gl/jfAHuRpBghoznAYb7", lat: 22.99055, lng: 120.20275 },
      { id: "d3-8", name: "新光三越台南新天地", url: "https://maps.app.goo.gl/jxRdetKk79RGp9zn7", lat: 22.98735, lng: 120.19805 },
      { id: "d3-9", name: "誠實鍋燒", url: "https://maps.app.goo.gl/3LatWkhBttYLLcPK8", lat: 22.99555, lng: 120.20105 },
      { id: "d3-10", name: "台南車站", url: "https://maps.app.goo.gl/iKDZHFoFVR5proHG8", lat: 22.99708, lng: 120.21292 },
      { id: "d3-11", name: "遠東百貨 台南成功店", url: "https://maps.app.goo.gl/HTYaQq7F6Av7ZrG46", lat: 22.99575, lng: 120.21445 },
      { id: "d3-12", name: "高雄車站", url: "https://maps.app.goo.gl/k2kkec46UL6bmTyu8", lat: 22.63976, lng: 120.30245 },
      { id: "d3-13", name: "JOHO HOTEL", url: "https://maps.app.goo.gl/2us8nrHQiaVYMkCu5", lat: 22.63755, lng: 120.30545 },
      { id: "d3-14", name: "巨蛋站", url: "https://maps.app.goo.gl/FxERdyRhGjimS2Jd9", lat: 22.66645, lng: 120.30325 },
      { id: "d3-15", name: "漢神巨蛋購物廣場", url: "https://maps.app.goo.gl/cNpT26irrdYc61CR8", lat: 22.66945, lng: 120.30225 },
      { id: "d3-16", name: "瑞豐夜市", url: "https://maps.app.goo.gl/GnaMDkHq8CnZYfRR7", lat: 22.66815, lng: 120.29945 },
      { id: "d3-17", name: "巨蛋站", url: "https://maps.app.goo.gl/FxERdyRhGjimS2Jd9", lat: 22.66645, lng: 120.30325 },
      { id: "d3-18", name: "高雄車站", url: "https://maps.app.goo.gl/k2kkec46UL6bmTyu8", lat: 22.63976, lng: 120.30245 },
      { id: "d3-19", name: "JOHO HOTEL", url: "https://maps.app.goo.gl/2us8nrHQiaVYMkCu5", lat: 22.63755, lng: 120.30545 },
    ]
  },
  {
    day: 4,
    locations: [
      { id: "d4-1", name: "美紅豆漿", url: "https://maps.app.goo.gl/trWnGDVE9whukbpP6", lat: 22.66905, lng: 120.29145 },
      { id: "d4-2", name: "果貿社區", url: "https://maps.app.goo.gl/8rv4vPs7x2UtaVrr5", lat: 22.66775, lng: 120.29005 },
      { id: "d4-3", name: "大立A館", url: "https://maps.app.goo.gl/hydvB975VKPuzoZ86", lat: 22.62105, lng: 120.29845 },
      { id: "d4-4", name: "小北百貨-高雄新田店", url: "https://maps.app.goo.gl/xJFEhex9FhcDEmRU6", lat: 22.62315, lng: 120.30455 },
      { id: "d4-5", name: "高雄市新堀江商圈", url: "https://maps.app.goo.gl/y46A36P3thDMEam37", lat: 22.62355, lng: 120.30475 },
      { id: "d4-6", name: "下一鍋水煎包", url: "https://maps.app.goo.gl/pj7SrEJFYUbsr5w97", lat: 22.61845, lng: 120.29815 },
      { id: "d4-7", name: "鴨肉珍 (總店)", url: "https://maps.app.goo.gl/E1DdVCsAze2kdhfP9", lat: 22.62555, lng: 120.28545 },
      { id: "d4-8", name: "堀江商場", url: "https://maps.app.goo.gl/JYxfF3mYQeu54RgX9", lat: 22.62385, lng: 120.28405 },
      { id: "d4-9", name: "鹽埕第一公有零售市場", url: "https://maps.app.goo.gl/2isHA6F729HQd2fv7", lat: 22.62415, lng: 120.28445 },
      { id: "d4-10", name: "北港蔡三代筒仔米糕", url: "https://maps.app.goo.gl/CKfvA9dd2PwemVgw8", lat: 22.62515, lng: 120.28375 },
      { id: "d4-11", name: "文武聖殿站", url: "https://maps.app.goo.gl/LUSGV5YEwXb6n3Vz7", lat: 22.63455, lng: 120.28445 },
      { id: "d4-12", name: "駁二大義站", url: "https://maps.app.goo.gl/nabuoG8Wz6itwwtn7", lat: 22.61875, lng: 120.28505 },
      { id: "d4-13", name: "駁二藝術特區 / 大義倉庫", url: "https://maps.app.goo.gl/Yyd7jsJhJsg2Lvtb8", lat: 22.61895, lng: 120.28605 },
      { id: "d4-14", name: "光榮碼頭站", url: "https://maps.app.goo.gl/8Z6guVESNWD5rrE7A", lat: 22.61505, lng: 120.29345 },
      { id: "d4-15", name: "南豐魯肉飯", url: "https://maps.app.goo.gl/2rLgFxmNXheEM2Fd6", lat: 22.62845, lng: 120.29775 },
      { id: "d4-16", name: "苓雅市場/自強夜市", url: "https://maps.app.goo.gl/5MGWr3sT9V5tBXMeA", lat: 22.62805, lng: 120.29745 },
      { id: "d4-17", name: "JOHO Hotel", url: "https://maps.app.goo.gl/2us8nrHQiaVYMkCu5", lat: 22.63755, lng: 120.30545 },
    ]
  },
  {
    day: 5,
    locations: [
      { id: "d5-1", name: "興隆居", url: "https://maps.app.goo.gl/UQ1TtWh8TAksR8mB6", lat: 22.63145, lng: 120.29315 },
      { id: "d5-2", name: "永記牛肉湯 (自強店)", url: "https://maps.app.goo.gl/M5rHTKUgCMk5WGnX9", lat: 22.61845, lng: 120.29755 },
      { id: "d5-3", name: "Delicatesse 洲際烘焙坊", url: "https://maps.app.goo.gl/DeLJjRXNhA8N4Cfy6", lat: 22.61145, lng: 120.30405 },
      { id: "d5-4", name: "三多商圈站", url: "https://maps.app.goo.gl/h3VGdf9uRp7ho6B78", lat: 22.61445, lng: 120.30555 },
      { id: "d5-5", name: "獅甲站", url: "https://maps.app.goo.gl/D3by1pkhZV7Texku8", lat: 22.60855, lng: 120.30905 },
      { id: "d5-6", name: "後山林記炸蛋蔥油餅", url: "https://maps.app.goo.gl/m411h1AMmsZJkVha8", lat: 22.60795, lng: 120.30955 },
      { id: "d5-7", name: "朱爺爺QQ蛋地瓜球", url: "https://maps.app.goo.gl/Hxx67Q5jRNdkfBPC8", lat: 22.60755, lng: 120.30915 },
      { id: "d5-8", name: "貳月晴", url: "https://maps.app.goo.gl/kQXs9JSWddDcyKEaA", lat: 22.60815, lng: 120.30875 },
      { id: "d5-9", name: "草衙站 / SKM Park", url: "https://maps.app.goo.gl/tcd82X3mHBvZT33n9", lat: 22.58085, lng: 120.32955 },
      { id: "d5-10", name: "高雄國際機場站", url: "https://maps.app.goo.gl/B1P5egRHHSW2h4eM6", lat: 22.57245, lng: 120.34405 },
    ]
  }
];