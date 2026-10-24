// 取扱店舗データ（/stores ページ・トップページ共通）
// ※店舗名・住所・URLはすべて仮の値です。掲載許可を得た実在の店舗情報に差し替えてください。
// 個人情報や、取引先との秘密保持契約に関わる情報は掲載しないでください。

export type StoreCategory = '飲食店' | '洋菓子・パン' | 'ホテル・宿泊' | 'スーパー・小売' | '給食・施設';

export interface Store {
  name: string;
  category: StoreCategory;
  area: string;     // 市区町村
  note?: string;    // 取扱商品など
  url?: string;
}

export const storeCategories: StoreCategory[] = ['飲食店', '洋菓子・パン', 'ホテル・宿泊', 'スーパー・小売', '給食・施設'];

export const stores: Store[] = [
  { name: '（店舗名を入力）', category: '飲食店', area: '富山市', note: 'こだわりのたまご' },
  { name: '（店舗名を入力）', category: '飲食店', area: '富山市', note: 'こだわりのたまご' },
  { name: '（店舗名を入力）', category: '洋菓子・パン', area: '富山市', note: 'こだわりのたまご' },
  { name: '（店舗名を入力）', category: '洋菓子・パン', area: '高岡市', note: 'ピンクたまご' },
  { name: '（施設名を入力）', category: 'ホテル・宿泊', area: '富山市', note: '業務用たまご' },
  { name: '（店舗名を入力）', category: 'スーパー・小売', area: '射水市', note: 'パックたまご' },
  { name: '（店舗名を入力）', category: 'スーパー・小売', area: '富山市', note: 'ギフトセット' },
  { name: '（施設名を入力）', category: '給食・施設', area: '富山市', note: '業務用たまご' },
];
