// 商品データ（共通）
// このファイルを編集すると、TOPページ(LINE UP)と /products ページの両方に反映されます。

export interface Product {
  id: string;
  img: string;
  name: string;
  badge: string;
  note: string;       // TOPページ(LINE UP)用の短い説明
  desc: string;        // /products ページ用の詳しい説明
  price: string;
  sizes: string;
  pack: string;
  business: boolean;   // 業務用対応の有無
  gift: boolean;        // ギフト対応の有無
}

export const products: Product[] = [
  {
    id: 'kodawari',
    img: '/images/product_kodawari.svg',
    name: 'こだわりのたまご',
    badge: 'おすすめ',
    note: 'コクと甘みが特徴の、当社自慢のたまごです。',
    desc: 'コクと甘みが特徴の当社自慢のたまごです。こだわりの飼料と清潔な飼育環境で育てた鶏が産む、毎朝新鮮なたまごをお届けします。',
    price: '参考価格：市価による',
    sizes: 'S・M・L・LLサイズ',
    pack: '10個入り・6個入り',
    business: true,
    gift: true,
  },
  {
    id: 'pink',
    img: '/images/product_pink.svg',
    name: 'ピンクたまご',
    badge: '人気',
    note: 'やさしいピンク色の殻が特徴のたまごです。',
    desc: 'やさしいピンク色の殻が特徴のたまごです。見た目も美しく、ギフトにも最適。黄身の色が濃く、コクのある風味が特徴です。',
    price: '参考価格：市価による',
    sizes: 'M・Lサイズ',
    pack: '6個入り・ギフト用',
    business: false,
    gift: true,
  },
  {
    id: 'araucana',
    img: '/images/product_araucana.svg',
    name: 'アローカナのたまご',
    badge: '希少',
    note: '南米原産の鶏が産む、希少な青い殻のたまご。',
    desc: '南米原産のアローカナ種の鶏が産む、希少な青い殻のたまごです。コレステロールが低く、DHA・レシチンが豊富。贈り物にも喜ばれます。',
    price: '参考価格：市価による',
    sizes: 'Mサイズ',
    pack: '6個入り・ギフト用',
    business: false,
    gift: true,
  },
  {
    id: 'business',
    img: '/images/product_kodawari.svg',
    name: '業務用たまご',
    badge: '法人向け',
    note: '飲食店・施設様向けの大量注文・定期納品に対応。',
    desc: '飲食店・製菓・給食施設など大量のたまごが必要な現場に対応した業務用商品です。サイズ・規格・数量を柔軟にご相談いただけます。',
    price: 'お見積もりいたします',
    sizes: '各種サイズ・規格対応',
    pack: '1ケース(10kg)〜',
    business: true,
    gift: false,
  },
  {
    id: 'gift',
    img: '/images/product_gift.svg',
    name: 'ギフトセット',
    badge: 'ギフト',
    note: '大切な方への贈り物に。各種ご用意しています。',
    desc: '大切な方への贈り物に最適なギフトセットをご用意しています。化粧箱入りで、内祝い・お中元・お歳暮など様々なシーンに対応します。',
    price: '各種価格帯あり',
    sizes: '各種',
    pack: '4個入り〜12個入り',
    business: false,
    gift: true,
  },
  {
    id: 'uzura',
    img: '/images/product_kodawari.svg',
    name: 'うずらのたまご',
    badge: '栄養豊富',
    note: 'お弁当やお惣菜、サラダのトッピングなどに便利なうずら卵です。',
    desc: 'お弁当やお惣菜、サラダのトッピングなどに便利なうずら卵です。丁寧に育てたうずらの卵をお届けします。',
    price: '参考価格：市価による',
    sizes: '10個入・30個入・50個入',
    pack: '栄養豊富で使いやすいサイズ',
    business: false,
    gift: false,
  },
];
