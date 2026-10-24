// 取扱店舗データ（/stores ページ・トップページ共通）
// 取引先の店名は掲載しない方針のため、業態と市区町村のみを保持する。
// 取引先シート（得意先管理表）から、同一事業者の重複を除き、同業の鶏卵業者を除外して集計。
// 1件だけの業態は特定につながるため、「その他」に統合している。
// 業態は店名からの推定を含む。実態と異なる場合は、下の件数を直してください。

export type StoreCategory = '飲食店' | '菓子・パン' | 'スーパー・小売' | '食品卸・加工' | '団体・施設' | 'その他';

export interface Store {
  category: StoreCategory;
  area: string; // 市区町村
}

export const storeCategories: StoreCategory[] = ['飲食店', '菓子・パン', 'スーパー・小売', '食品卸・加工', '団体・施設', 'その他'];

// [業態, 市区町村, 件数]
const counts: [StoreCategory, string, number][] = [
  ['飲食店', '富山市', 9],
  ['菓子・パン', '富山市', 5],
  ['スーパー・小売', '富山市', 3],
  ['食品卸・加工', '富山市', 3],
  ['団体・施設', '富山市', 4],
  ['その他', '富山市', 6],
  ['その他', '射水市', 1],
];

export const stores: Store[] = counts.flatMap(([category, area, n]) =>
  Array.from({ length: n }, () => ({ category, area })),
);
