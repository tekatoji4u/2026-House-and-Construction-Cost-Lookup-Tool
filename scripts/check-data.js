// Kiểm tra nhanh dữ liệu trong data.js. Chạy: node scripts/check-data.js
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'data.js'), 'utf8');
const { TABS, DATA_VERSION } = new Function(src + ';return {TABS, DATA_VERSION};')();

const errors = [], warnings = [];
if (!/^\d{4}-\d{2}-\d{2}$/.test(DATA_VERSION)) errors.push('DATA_VERSION phải có dạng YYYY-MM-DD');
const ids = new Set();
TABS.forEach(t => {
  if (!t.id || !t.label || !Array.isArray(t.items)) errors.push(`Tab thiếu id/label/items: ${t.id}`);
  if (ids.has(t.id)) errors.push(`Trùng id tab: ${t.id}`);
  ids.add(t.id);
  const seen = {};
  t.items.forEach((i, n) => {
    const where = `[${t.id} #${n + 1}${i.ma ? ' ' + i.ma : ''}]`;
    if (!i.t && !i.h) errors.push(`${where} thiếu mô tả`);
    if (i.p != null && (typeof i.p !== 'number' || i.p <= 0)) errors.push(`${where} đơn giá không hợp lệ: ${i.p}`);
    if (i.u && /\bm[23]\b/.test(i.u)) warnings.push(`${where} đơn vị nên viết m²/m³: "${i.u}"`);
    if ('p' in i && i.p == null && !i.n && !i.v) warnings.push(`${where} không có đơn giá và không có ghi chú`);
    // Mục A, B, C (có STT) dùng mỗi mã hiệu cho đúng một dòng
    if (i.st && i.ma) {
      const k = i.ma;
      if (seen[k]) warnings.push(`${where} trùng mã hiệu với STT ${seen[k]} (cần đối chiếu văn bản gốc)`);
      else seen[k] = i.st || n + 1;
    }
  });
});
warnings.forEach(w => console.log('CẢNH BÁO ' + w));
errors.forEach(e => console.log('LỖI ' + e));
console.log(`${TABS.length} tab, ${TABS.reduce((a, t) => a + t.items.length, 0)} mục, ${errors.length} lỗi, ${warnings.length} cảnh báo (dữ liệu ${DATA_VERSION})`);
process.exit(errors.length ? 1 : 0);
