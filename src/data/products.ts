// 商品データ（/products・トップ・/business 共通）
// 出典：商品DB（スプレッドシート「製品管理表」）。商品名・規格はDBの記載のとおり。
// DBに価格・説明文はないため、価格や効能などの表現は載せない。
// 商品を追加・変更する場合は、まずDBを更新し、このファイルを同じ内容にそろえること。

export interface ProductGroup {
  id: string;
  name: string;      // グループ名
  lead: string;      // 一言説明（DBの区分に基づく）
  img: string;       // 仮画像
  items: { name: string; spec?: string }[];
}

export const sizes = ['LL', 'L', 'M', 'MS', 'S']; // 10kg箱のサイズ（DBの規格）

export const productGroups: ProductGroup[] = [
  {
    id: 'box',
    name: '業務用（10kg箱）',
    lead: '飲食店・製菓・給食施設など、まとまった数量でお使いの方向けです。サイズをお選びいただけます。',
    img: '/images/shop/point4.jpg',
    items: [
      { name: 'とれたて', spec: '10kg箱' },
      { name: '10kg箱 LL' }, { name: '10kg箱 L' }, { name: '10kg箱 M' }, { name: '10kg箱 MS' }, { name: '10kg箱 S' },
      { name: '赤玉', spec: '10kg箱' },
    ],
  },
  {
    id: 'pack',
    name: 'パック卵',
    lead: '小売店・店頭販売、ご家庭向けのパック詰めです。',
    img: '/images/hero_main.png',
    items: [
      { name: 'とれたて', spec: 'パック' },
      { name: '10個入パック L' }, { name: '10個入パック M' }, { name: '10個入パック MS' }, { name: '10個入パック S' },
      { name: '6個入パック' },
      { name: '赤玉パック' },
    ],
  },
  {
    id: 'brand',
    name: 'ブランド卵',
    lead: 'こだわりの飼育・飼料で知られるブランド卵も取り扱っています。',
    img: '/images/feature/feature-egg.jpg',
    items: [
      { name: 'ヨード卵' }, { name: '森の玉子' }, { name: 'メルヘン卵' }, { name: '地養卵', spec: 'パック' },
    ],
  },
  {
    id: 'other',
    name: 'うずら卵・温泉卵',
    lead: 'お弁当・お惣菜・トッピングなどにお使いいただけます。',
    img: '/images/feature/feature-hero.jpg',
    items: [
      { name: 'うずら卵' }, { name: '温泉卵', spec: 'パック' },
    ],
  },
];
