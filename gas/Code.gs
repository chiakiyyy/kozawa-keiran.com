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
  if (p.form === 'order') return handleOrder_(p);

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

// ギフト注文（/gift/order）。「ギフト注文」シートに記録し、担当者へ通知する。
// 金額はブラウザ側の目安値。最終金額は担当者が確認すること。カード情報は受け取らない。
function handleOrder_(p) {
  const sName = clean_(p.sender_name, 100), sEmail = clean_(p.sender_email, 200), sTel = clean_(p.sender_tel, 50);
  const rName = clean_(p.recipient_name, 100), rTel = clean_(p.recipient_tel, 50);
  const rZip = clean_(p.recipient_zip, 20), rAddr = clean_(p.recipient_address, 300);
  const qty = Math.max(1, Math.min(50, parseInt(p.qty, 10) || 0));
  if (!sName || !sTel || !rName || !rTel || !rZip || !rAddr || !p.item || !qty ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail) || p.privacy === undefined) {
    return json_({ ok: false });
  }
  const row = [
    new Date(), clean_(p.item_name, 100), qty, clean_(p.total_estimate, 20),
    sName, sTel, sEmail, rName, rTel, rZip, rAddr,
    clean_(p.desired_date, 20), clean_(p.noshi, 50), clean_(p.memo, 500), clean_(p.payment, 50), '未対応',
  ];
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('ギフト注文') || ss.insertSheet('ギフト注文');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['受信日時', '商品', '数量', '小計(目安)', '依頼主', '依頼主TEL', '依頼主メール',
                     '届け先', '届け先TEL', '〒', '住所', '希望日', 'のし', 'メッセージ・備考', '支払方法', '状況']);
  }
  sheet.appendRow(row);
  if (NOTIFY_TO) {
    MailApp.sendEmail({
      to: NOTIFY_TO, replyTo: sEmail,
      subject: '【HPギフト注文】' + row[1] + ' ×' + qty + '／' + sName + ' 様',
      body: ['商品: ' + row[1], '数量: ' + qty, '小計(目安): ' + row[3] + '円', '',
             '依頼主: ' + sName + ' / ' + sTel + ' / ' + sEmail,
             '届け先: ' + rName + ' / ' + rTel, '〒' + rZip + ' ' + rAddr,
             '希望日: ' + row[11], 'のし: ' + row[12], '備考: ' + row[13], '支払方法: ' + row[14]].join('\n'),
    });
  }
  return json_({ ok: true });
}
