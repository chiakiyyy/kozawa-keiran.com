# 小澤鶏卵 コーポレートサイト

地域密着の鶏卵販売・卸売会社「小澤鶏卵」のコーポレートサイトです。

## 技術スタック

- [Astro](https://astro.build/) v6（静的サイト生成）
- TypeScript
- Tailwind CSS v4
- Cloudflare Pages対応

## サイト構成

| ページ | パス | 説明 |
|--------|------|------|
| トップページ | `/` | ヒーロー・特徴・商品概要・品質・お問い合わせ導線 |
| 会社概要 | `/company` | 会社情報・代表メッセージ・アクセス |
| 商品案内 | `/products` | 新鮮たまご・業務用・温泉卵・定期納品 |
| 品質へのこだわり | `/quality` | 鮮度管理・安全管理・衛生管理・生産者連携 |
| お問い合わせ | `/contact` | フォーム・電話・メール |

## セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/chiakiyyy/kozawa-keiran.com.git
cd kozawa-keiran.com

# 依存パッケージのインストール
npm install
```

## 開発

```bash
# 開発サーバー起動（http://localhost:4321）
npm run dev
```

## ビルド

```bash
# 本番用ビルド（./dist/ に出力）
npm run build

# ビルド結果のプレビュー
npm run preview
```

## Cloudflare Pagesへのデプロイ

### 自動デプロイ（推奨）

1. Cloudflareダッシュボードで「Workers & Pages」→「Create application」→「Pages」→「Connect to Git」
2. このリポジトリを選択
3. ビルド設定を以下のように設定：
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 22.x

4. 「Save and Deploy」をクリック

### 手動デプロイ

```bash
# Wranglerをインストール
npm install -g wrangler

# ビルド後にデプロイ
npm run build
wrangler pages deploy dist --project-name=kozawa-keiran
```

### デプロイ先URL

https://kozawa-keiran.chiyyy1111.workers.dev

## ディレクトリ構成

```text
kozawa-keiran.com/
├── public/
│   ├── favicon.svg        # サイトアイコン
│   ├── favicon.ico        # サイトアイコン（ICO形式）
│   └── robots.txt         # クローラー設定
├── src/
│   ├── components/
│   │   ├── Header.astro   # ヘッダー・ナビゲーション
│   │   └── Footer.astro   # フッター
│   ├── layouts/
│   │   └── Layout.astro   # 共通レイアウト（SEO・OGP含む）
│   ├── pages/
│   │   ├── index.astro    # トップページ
│   │   ├── company.astro  # 会社概要
│   │   ├── products.astro # 商品案内
│   │   ├── quality.astro  # 品質へのこだわり
│   │   └── contact.astro  # お問い合わせ
│   └── styles/
│       └── global.css     # グローバルスタイル・デザイントークン
├── astro.config.mjs       # Astro設定（sitemap・静的出力）
├── tsconfig.json          # TypeScript設定
└── package.json
```

## カスタマイズガイド

### 会社情報の更新

仮データが入っている箇所は以下のファイルを編集してください：

- `src/components/Header.astro` — 電話番号
- `src/components/Footer.astro` — 電話番号・メールアドレス・営業時間
- `src/pages/company.astro` — 会社名・住所・代表者・設立年・事業内容
- `src/pages/contact.astro` — 電話番号・メールアドレス

### Googleマップの設置

`src/pages/company.astro` の `.map-placeholder` 部分を、Google Maps Embed URLを使った `<iframe>` に置き換えてください：

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="380"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

### お問い合わせフォームの本格運用

現在フォームはUIのみ実装です。送信処理を追加する際は：

1. Cloudflare Workersでエンドポイントを作成
2. Cloudflare Turnstileでスパム対策を実装
3. `src/pages/contact.astro` の `<form>` に `action` 属性を追加

### OGP画像の設定

`public/og-image.jpg`（1200×630px推奨）を配置してください。

### カラーパレット・デザイントークン

`src/styles/global.css` の `:root` セクションで管理しています。

## 今後の拡張予定

- 業務用卵向けLP
- ブランド卵向けLP
- 採用ページ
- お知らせ機能（Astro Content Collections推奨）
- フォーム送信処理（Cloudflare Workers + Turnstile）
