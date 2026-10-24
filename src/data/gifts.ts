// ギフト商品データ（/gift ページ用）
// 商品情報は出品ページ（リベシティ市場）の記載に基づく。価格・内容は変更されることがあるため、更新時は出品ページと照合すること。

// オンライン決済を行う外部ECサイト（既存の構造化データに記載のショップ）
export const SHOP_URL = 'https://kozawa.theshop.jp/';

export interface Gift {
  id: string;
  img: string;
  img2?: string;      // 包装イメージなどの2枚目
  name: string;
  badge: string;
  desc: string;
  contents: string;
  price: number;      // 円。出品ページに税込・税抜の表記はないため、税表記は要確認
  shippingFee: number; // 1注文あたりの送料（円）。0 は送料込み
  shippingNote: string; // 送料などの補足
  scenes: string[];   // 贈答シーン
  squareUrl: string;  // Square「支払いリンク」のURL（未設定なら、メールで決済方法を案内）
  buyUrl: string;     // 外部の購入ページURLがある場合のみ設定（空なら /gift/order へ）
}

export const gifts: Gift[] = [
  {
    id: 'tkg-set',
    img: '/images/gift/tkg-set.webp',
    img2: '/images/gift/tkg-wrapping.webp',
    name: '卵かけご飯セット',
    badge: 'おすすめ',
    desc: '富山のおいしいを集めました。贈り物にも、自分へのご褒美にも。朝どれ卵、杉樽熟成の本醸造醤油、富山のお米を詰め合わせています。のし・内箱に対応しています。',
    contents: '朝どれ卵 10個入／杉樽熟成本醸造醤油 100ml／富山のお米 2合',
    price: 2980,
    shippingFee: 0,
    shippingNote: '送料込み（北海道＋500円、沖縄＋1,000円）／チルドゆうパックでお届け',
    scenes: ['お中元', 'お歳暮', '内祝い', '手土産'],
    squareUrl: '',
    buyUrl: '',
  },
  {
    id: 'egg-20',
    img: '/images/gift/egg-20.webp',
    name: '富山のおいしい朝どれ卵 20個入り',
    badge: 'お得',
    desc: '平飼いで育てた鶏の朝採れ卵。飼料には、富山県推奨品種の飼料用米を15％以上配合しています。採卵後は洗浄・乾燥、オゾン殺菌、ひび卵・血卵の検査を行っています。',
    contents: '朝どれ卵 20個（10個×2パック）',
    price: 2980,
    shippingFee: 0,
    shippingNote: '送料込み（北海道＋500円、沖縄＋1,000円）／チルドゆうパックでお届け',
    scenes: ['手土産', 'お裾分け', 'ご自宅用'],
    squareUrl: '',
    buyUrl: '',
  },
  {
    id: 'egg-10',
    img: '/images/gift/egg-10.webp',
    name: '富山のおいしい朝どれ卵 10個入り（お試し）',
    badge: 'お試し価格',
    desc: '平飼いで育った鶏の朝採れ卵。生臭さが少なく、卵かけご飯にもおすすめです。まずはお試しください。',
    contents: '朝どれ卵 10個（10個×1パック）',
    price: 980,
    shippingFee: 1200,
    shippingNote: '送料1,200円（同商品2点まで追加送料なし。3点以上は別途ご案内）／北海道＋500円、沖縄＋1,000円／チルドゆうパックでお届け',
    scenes: ['お試し', 'ご自宅用'],
    squareUrl: '',
    buyUrl: '',
  },
];

export const giftNotes = [
  'ご注文は注文フォームで承ります。クレジットカード情報などは、このフォームでは入力しません。',
  'お支払いは、クレジットカード（Square）または楽天ペイ残高送金をお選びいただけます。',
  'たまごは生食の場合、採卵日より14日以内にお召し上がりください。',
  '北海道は＋500円、沖縄は＋1,000円の送料を別途いただきます。',
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
