// 卸売の実績データ（トップページ・/works ページ共通）
// ※数値・事例はすべて仮の値です。公開前に実際の実績へ必ず差し替えてください。

export interface Metric {
  num: string;
  unit: string;
  label: string;
  note?: string;
}

export const metrics: Metric[] = [
  { num: '100', unit: '年+', label: '創業からの歴史', note: '大正時代の創業' },
  { num: '000', unit: '社', label: '取引先企業数（仮）', note: '要確認' },
  { num: '000', unit: '店舗', label: '取扱店舗数（仮）', note: '要確認' },
  { num: '000', unit: '個', label: '年間出荷数（仮）', note: '要確認' },
];

export interface Work {
  id: string;
  category: string;   // 業態
  title: string;
  client: string;     // 取引先の表示名（掲載許可を得たもののみ）
  area: string;
  body: string;
  since: string;
}

export const works: Work[] = [
  {
    id: 'w1',
    category: 'ラーメン店',
    title: '毎日使う麺・トッピング用に安定供給',
    client: '（掲載許可の取れた店舗名）',
    area: '富山市',
    body: '味玉用など、サイズと鮮度を揃えたたまごを定期納品しています。',
    since: '20XX年〜',
  },
  {
    id: 'w2',
    category: '洋菓子店',
    title: '製菓向けの規格たまごを定期納品',
    client: '（掲載許可の取れた店舗名）',
    area: '富山市',
    body: '繁忙期の増量にも柔軟に対応し、仕込みに合わせてお届けします。',
    since: '20XX年〜',
  },
  {
    id: 'w3',
    category: 'ホテル',
    title: '朝食・宴会向けの大口納品',
    client: '（掲載許可の取れた施設名）',
    area: '富山県内',
    body: '朝食ビュッフェや宴会の需要に合わせ、数量調整しながら納品しています。',
    since: '20XX年〜',
  },
  {
    id: 'w4',
    category: 'スーパー',
    title: '店頭販売用パックの納品',
    client: '（掲載許可の取れた店舗名）',
    area: '富山県内',
    body: '店頭用パックのたまごを定期的にお届けしています。',
    since: '20XX年〜',
  },
  {
    id: 'w5',
    category: '給食施設',
    title: '学校・福祉施設向けの定期納品',
    client: '（掲載許可の取れた施設名）',
    area: '富山市',
    body: '衛生管理を徹底し、決まった曜日に安定してお届けしています。',
    since: '20XX年〜',
  },
  {
    id: 'w6',
    category: '催事・イベント',
    title: 'イベント・催事向けの臨時対応',
    client: '（掲載許可の取れた主催者名）',
    area: '富山県内',
    body: '大量注文や急な増減にも、事前のご相談で調整いたします。',
    since: '20XX年〜',
  },
];
