// נתוני הציוד עם קטגוריות
const gearItems = [
  // אוכל
  { category: 'אוכל', name: 'פיתות' },
  { category: 'אוכל', name: 'חומוס' },
  { category: 'אוכל', name: 'סלטים' },
  { category: 'אוכל', name: 'חמוצים' },
  { category: 'אוכל', name: 'שתייה' },
  { category: 'אוכל', name: 'בשר' },
  { category: 'אוכל', name: 'ירקות לעל האש' },
  { category: 'אוכל', name: 'כוסות חד\"פ לשתייה קלה' },
  { category: 'אוכל', name: 'נייר סופג' },
  { category: 'אוכל', name: 'מרשמלו + שיפודים' },
  { category: 'אוכל', name: 'קורנפלקס' },
  { category: 'אוכל', name: 'חלב' },
  { category: 'אוכל', name: 'חטיפים' },
  { category: 'אוכל', name: 'מתוקים' },
  { category: 'אוכל', name: 'ערק, בירות, לימונים (אלכוהול)' },
  { category: 'אוכל', name: '2 שישיות מים' },
  { category: 'אוכל', name: 'בצל' },
  { category: 'אוכל', name: 'שמן' },
  { category: 'אוכל', name: 'יין' },
  { category: 'אוכל', name: 'מבעיר פחמים' },
  { category: 'אוכל', name: 'תבניות אלומיניום' },
  { category: 'אוכל', name: 'רגליים למנגל' },
  { category: 'אוכל', name: 'שתייה מתוקה' },
  { category: 'אוכל', name: 'לימונצ\'לו' },
  { category: 'אוכל', name: 'קרח' },
  { category: 'אוכל', name: 'ביצים' },
  { category: 'אוכל', name: 'רסק עגבניות (לשקשוקה)' },
  { category: 'אוכל', name: 'בלילה לפנקייק' },
  { category: 'אוכל', name: 'לחשוב על אוכל לשבת' },
  // ציוד כללי
  { category: 'ציוד כללי', name: 'אוהלים (2)' },
  { category: 'ציוד כללי', name: 'קלפים' },
  { category: 'ציוד כללי', name: 'מיקאסה' },
  { category: 'ציוד כללי', name: 'משאבה למיקאסה' },
  { category: 'ציוד כללי', name: 'מחצלת גדולה' },
  { category: 'ציוד כללי', name: 'צילייה' },
  { category: 'ציוד כללי', name: 'צידנית גדולה' },
  { category: 'ציוד כללי', name: 'קרחונים לצידנית' },
  { category: 'ציוד כללי', name: 'מנגל' },
  { category: 'ציוד כללי', name: 'פחמים' },
  { category: 'ציוד כללי', name: 'מדליק פחמים' },
  { category: 'ציוד כללי', name: 'גפרורים' },
  { category: 'ציוד כללי', name: 'פקל קפה' },
  { category: 'ציוד כללי', name: 'פקל מנגל' },
  { category: 'ציוד כללי', name: 'מלקחיים למנגל' },
  { category: 'ציוד כללי', name: 'נייר כסף' },
  { category: 'ציוד כללי', name: 'שקית/קופסה לכלי עבודה מלוכלכים' },
  { category: 'ציוד כללי', name: 'שולחן מתקפל' },
  { category: 'ציוד כללי', name: 'תאורה' },
  { category: 'ציוד כללי', name: 'כסאות מתקפלים' },
  { category: 'ציוד כללי', name: 'מזרון מתנפח' },
  { category: 'ציוד כללי', name: 'פנסים / גרילנדה / תאורה' },
  { category: 'ציוד כללי', name: 'אלטוש' },
  { category: 'ציוד כללי', name: 'שקיות אשפה גדולות' },
  { category: 'ציוד כללי', name: 'מטקות' },
  { category: 'ציוד כללי', name: 'בוקסה' },
  { category: 'ציוד כללי', name: 'שש בש' },
  { category: 'ציוד כללי', name: 'נפנף למנגל' },
  { category: 'ציוד כללי', name: 'צלחת מעופפת' },
  // ציוד אישי
  { category: 'ציוד אישי', name: 'קרם הגנה' },
  { category: 'ציוד אישי', name: 'מגבת' },
  { category: 'ציוד אישי', name: 'מגבת חוף' },
  { category: 'ציוד אישי', name: 'מברשת שיניים' },
  { category: 'ציוד אישי', name: 'צלחת רב פעמית' },
  { category: 'ציוד אישי', name: 'סכום רב פעמי' },
  { category: 'ציוד אישי', name: 'בגדים ארוכים ללילה' },
  { category: 'ציוד אישי', name: 'נייר טואלט' },
  { category: 'ציוד אישי', name: 'מגבונים לקקי' },
  { category: 'ציוד אישי', name: 'כרית' },
  { category: 'ציוד אישי', name: 'שמיכה' },
  { category: 'ציוד אישי', name: 'מזרן' },
  // ניקיון והיגיינה
  { category: 'ניקיון והיגיינה', name: 'סבון וספוג לכלים' },
  { category: 'ניקיון והיגיינה', name: 'ספריי נגד יתושים' },
  { category: 'ניקיון והיגיינה', name: 'מגבונים לחים' },
  { category: 'ניקיון והיגיינה', name: 'ג\'ל אלכוהול (אם רוצים)' },
  // בטיחות ובריאות
  { category: 'בטיחות ובריאות', name: 'ערכת עזרה ראשונה' },
  { category: 'בטיחות ובריאות', name: 'אטמי אוזניים / מסכת שינה' },
  // שתייה חמה / בוקר
  { category: 'שתייה חמה / בוקר', name: 'פקל קפה ☕' },
  { category: 'שתייה חמה / בוקר', name: 'קפה תה סוכר' },
  // חשמל וטעינה
  { category: 'חשמל וטעינה', name: 'מטען נייד' },
  { category: 'חשמל וטעינה', name: 'נייר למטען / מפצל' },
  // בידור ותחביבים
  { category: 'בידור ותחביבים', name: 'כיף כיף' },
  { category: 'בידור ותחביבים', name: 'ששבש' },
  { category: 'בידור ותחביבים', name: 'חתולים מתפוצצים' },
  { category: 'בידור ותחביבים', name: 'גיטרה' }
];

// רשימת חברים ל-dropdown
const people = ['נופר','איתי','תומר','יהלי','שלי','יעל','טליה'];

// מבני נתונים מה-localStorage
let saved = JSON.parse(localStorage.getItem('whoBrings') || '{}');
let done   = JSON.parse(localStorage.getItem('doneItems') || '{}');

// שמירה
function saveState() {
  localStorage.setItem('whoBrings', JSON.stringify(saved));
  localStorage.setItem('doneItems', JSON.stringify(done));
}

// בניית הטבלה
function buildTable() {
  const tbody = document.querySelector('#gear-table tbody');
  tbody.innerHTML = '';
  gearItems.forEach(item => {
    const tr = document.createElement('tr');
    // שם פריט
    let td = document.createElement('td');
    td.textContent = item.name;
    tr.appendChild(td);
    // קטגוריה
    td = document.createElement('td');
    td.textContent = item.category;
    tr.appendChild(td);
    // מי מביא (dropdown)
    td = document.createElement('td');
    const sel = document.createElement('select');
    sel.innerHTML = '<option value="">–</option>' +
      people.map(p => `<option value="${p}">${p}</option>`).join('');
    sel.value = saved[item.name] || '';
    sel.addEventListener('change', e => {
      saved[item.name] = e.target.value;
      saveState();
    });
    td.appendChild(sel);
    tr.appendChild(td);
    // בוצע (checkbox)
    td = document.createElement('td');
    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.checked = done[item.name] || false;
    chk.addEventListener('change', e => {
      done[item.name] = e.target.checked;
      saveState();
    });
    td.appendChild(chk);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
}

// סינון
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('#gear-table tbody tr').forEach(tr => {
    const name = tr.children[0].textContent.toLowerCase();
    const cat  = tr.children[1].textContent.toLowerCase();
    tr.style.display = (!q || name.includes(q) || cat.includes(q)) ? '' : 'none';
  });
});

// ייצוא CSV
document.getElementById('export-csv').addEventListener('click', () => {
  let csv = 'פריט,קטגוריה,מי מביא,בוצע\n';
  gearItems.forEach(item => {
    const who = saved[item.name] || '';
    const doneStr = done[item.name] ? 'כן' : 'לא';
    csv += `"${item.name}","${item.category}","${who}","${doneStr}"\n`;
  });
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'camping_gear.csv';
  a.click(); URL.revokeObjectURL(url);
});

// מצב כהה
const body = document.body;
document.getElementById('toggle-dark').addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
});
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
}

// ניווט טאבים
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// מסך פתיחה
document.getElementById('enter-button').addEventListener('click', () => {
  const ls = document.getElementById('landing-screen');
  ls.style.opacity = '0';
  setTimeout(() => ls.style.display = 'none', 1000);
});

// אתחול
buildTable();
