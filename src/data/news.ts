// お知らせ・ブログ（トップページに最新3件を表示）。記事ができたら、新しい順に追加する。
// 例: { date: '2026.11.20', category: 'お知らせ', title: '年末年始の営業日のお知らせ', href: '/news/xxxx' }
export interface NewsItem { date: string; category: 'お知らせ' | 'ブログ'; title: string; href: string; }
export const news: NewsItem[] = [];
