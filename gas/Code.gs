/**
 * 小澤鶏卵 お問い合わせフォーム受信用 Google Apps Script
 * 役割: フォーム内容をスプレッドシートへ記録し、担当者へメール通知する。
 * 設定手順は gas/README.md を参照。
 */
const NOTIFY_TO = ''; // 通知先メールアドレス（例: info@kozawa-keiran.com 作成後、または担当者のGmail）
const TYPE_LABELS = {
  business: '法人取引について', product: '商品について', shop: '通販・ギフトについて',
  event: '催事・イベント注文', subscription: '定期購入について', other: 'その他',
};

function doPost(e) {
  const p = e.parameter || {};
  // ハニーポット（ボットが入力する非表示項目）
  if (p.website) return json_({ ok: true });

  const name = clean_(p.name, 100), email = clean_(p.email, 200), message = clean_(p.message, 5000);
  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || p.privacy === undefined) {
    return json_({ ok: false });
  }
  const row = [
    new Date(), clean_(p.company, 200), name, email, clean_(p.tel, 50),
    TYPE_LABELS[p.type] || clean_(p.type, 50), message,
  ];
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['受信日時', '会社名', 'お名前', 'メール', '電話', '種別', '内容']);
  }
  sheet.appendRow(row);

  if (NOTIFY_TO) {
    MailApp.sendEmail({
      to: NOTIFY_TO,
      replyTo: email,
      subject: '【HPお問い合わせ】' + row[5] + '／' + name + ' 様',
      body: ['会社名・店舗名: ' + row[1], 'お名前: ' + name, 'メール: ' + email,
             '電話: ' + row[4], '種別: ' + row[5], '', message].join('\n'),
    });
  }
  return json_({ ok: true });
}

// 先頭の = + - @ を除去（スプレッドシートの数式インジェクション対策）
function clean_(v, max) {
  return String(v || '').trim().slice(0, max).replace(/^[=+\-@]+/, '');
}
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
