// ギフト商品データ（/gift ページ用）
// ※価格・内容量・購入URLは仮の値です。公開前に必ず実際の内容へ更新してください。

// オンライン決済を行う外部ECサイト（既存の構造化データに記載のショップ）
export const SHOP_URL = 'https://kozawa.theshop.jp/';

export interface Gift {
  id: string;
  img: string;
  name: string;
  badge: string;
  desc: string;
  contents: string;
  price: number;      // 税込（円）
  scenes: string[];   // 贈答シーン
  buyUrl: string;     // 商品ごとの購入ページURL
}

export const gifts: Gift[] = [
  {
    id: 'gift-kodawari',
    img: '/images/product_kodawari.svg',
    name: 'こだわりのたまご ギフト',
    badge: '定番',
    desc: 'コクと甘みが自慢の、当社の主力たまごを化粧箱に詰めました。',
    contents: 'こだわりのたまご 10個入',
    price: 1800,
    scenes: ['お中元', 'お歳暮', '内祝い'],
    buyUrl: SHOP_URL,
  },
  {
    id: 'gift-pink',
    img: '/images/product_pink.svg',
    name: 'ピンクたまご ギフト',
    badge: '人気',
    desc: 'やさしいピンク色の殻が映える、見た目にも華やかなギフトです。',
    contents: 'ピンクたまご 10個入',
    price: 2200,
    scenes: ['誕生日', '内祝い', '手土産'],
    buyUrl: SHOP_URL,
  },
  {
    id: 'gift-araucana',
    img: '/images/product_araucana.svg',
    name: 'アローカナのたまご ギフト',
    badge: '希少',
    desc: '南米原産の鶏が産む、青い殻の希少なたまごを贈り物に。',
    contents: 'アローカナのたまご 6個入',
    price: 2800,
    scenes: ['お祝い', '記念日', '手土産'],
    buyUrl: SHOP_URL,
  },
  {
    id: 'gift-assort',
    img: '/images/product_gift.svg',
    name: '食べ比べアソートセット',
    badge: 'おすすめ',
    desc: '3種のたまごを食べ比べできる、人気のアソートセットです。',
    contents: 'こだわり 4個・ピンク 4個・アローカナ 4個（計12個）',
    price: 3980,
    scenes: ['お中元', 'お歳暮', '出産祝い'],
    buyUrl: SHOP_URL,
  },
];

export const giftNotes = [
  'ご注文はオンラインショップ（外部サイト）で承ります。',
  'のし・メッセージカードの対応可否は、お届け前にご確認ください。',
  '配送方法・送料・お届け日の指定は、ショップの案内に従います。',
];
