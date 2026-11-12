// 卸売の実績データ（トップページ・/works ページ共通）
// 取引先名は掲載せず、業態ごとの対応内容のみを載せる。件数は stores.ts の集計から算出。


export interface Metric {
  num: string;
  unit: string;
  label: string;
  note?: string;
}


export const metrics: Metric[] = [
  { num: '80', unit: '年', label: '1945年創業', note: '昭和20年の創業' },
  { num: '50', unit: '社以上', label: '取り扱い店舗', note: '飲食店・施設・小売など' },
  { num: '月〜金', unit: '受付', label: '注文受付', note: '平日はいつでもご注文いただけます' },
  { num: '当日', unit: '夕方', label: '夕方お届け対応', note: '富山市内' },
];

export interface Work {
  id: string;
  category: string;   // 業態
  title: string;   // 「|」は改行してよい位置（語の途中で折り返さないため）
  body: string;
}

// 対応内容は、既存の「法人のお客様」ページの記載に基づく
export const works: Work[] = [
  { id: 'w1', category: 'ラーメン店・飲食店', title: '毎日使うたまごを|安定してお届け', body: '大量注文や定期納品に対応し、毎日使うたまごを安定して供給しています。' },
  { id: 'w2', category: '洋菓子・パン', title: '品質を揃えたたまごを|定期納品', body: 'サイズ・規格を揃えたたまごを、仕込みに合わせて定期的にお届けします。' },
  { id: 'w3', category: 'ホテル・宿泊', title: '大口のご注文にも|対応', body: '数量に合わせて、ご希望の日程でお届けします。事前のご相談で調整します。' },
  { id: 'w4', category: 'スーパー・小売', title: '店頭向けのたまごを|お届け', body: '店頭販売向けのたまごを、定期的にお届けします。' },
  { id: 'w5', category: '給食・学校・病院・団体', title: '決まった曜日に|定期納品', body: '衛生管理を徹底し、決まった曜日に安定してお届けします。' },
  { id: 'w6', category: '催事・イベント', title: 'イベント・催事の|臨時対応', body: '大量注文や急な増減にも、事前のご相談で調整いたします。' },
];
