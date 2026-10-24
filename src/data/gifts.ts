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
  squareUrl: string;  // Square「支払いリンク」のURL（未設定なら、メールで決済方法を案内）
  buyUrl: string;     // 外部の購入ページURLがある場合のみ設定（空なら /gift/order へ）
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
    squareUrl: '',
    buyUrl: '',
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
    squareUrl: '',
    buyUrl: '',
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
    squareUrl: '',
    buyUrl: '',
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
    squareUrl: '',
    buyUrl: '',
  },
];

export const giftNotes = [
  'ご注文は注文フォームで承ります。クレジットカード情報などは、このフォームでは入力しません。',
  'お支払いは、クレジットカード（Square）または楽天ペイ残高送金をお選びいただけます。',
  'のし・メッセージカードの対応可否は、お届け前にご確認ください。',
];

// お支払い方法の設定
// ・カード決済：Square ダッシュボードで商品ごとに「支払いリンク」を作成し、上の squareUrl に貼り付ける
//   （カード情報は Square の画面で入力され、当サイトでは扱わない）
// ・楽天ペイ残高送金：送金先の案内文を下に記入する（未設定なら、メールで案内）
export const paymentMethods = [
  { id: 'card', label: 'クレジットカード（Square）' },
  { id: 'rakuten', label: '楽天ペイ 残高送金' },
  { id: 'other', label: 'その他・相談してから決める' },
] as const;

export const rakutenPayGuide = ''; // 例：楽天ペイアプリの「送る」から、次の送金先へお送りください。送金先：〇〇〇
