// הרשימה שלך בדיוק כפי שנתת (ללא פריטים נוספים):
const gearItems = [
  // מעטפת
  { category:'מעטפת',name:'שיפודים למרשמלו' },
  { category:'מעטפת',name:'כוסות חדפ' },
  { category:'מעטפת',name:'קשים' },
  { category:'מעטפת',name:'חדפ' },
  { category:'מעטפת',name:'נייר סופג' },
  { category:'מעטפת',name:'שמן' },
  { category:'מעטפת',name:'קרחחח' },
  { category:'מעטפת',name:'נייר כסף' },
  { category:'מעטפת',name:'תבניות אלומיניום לבשר' },
  { category:'מעטפת',name:'קופסה לכלי עבודה מלוכלים' },
  { category:'מעטפת',name:'סוכר' },
  { category:'מעטפת',name:'סבון וספוג לכלים' },
  { category:'מעטפת',name:'מגבונים לחים' },
  { category:'מעטפת',name:'שקיות אשפה גדולות' },
  { category:'מעטפת',name:'נייר טואלט' },
  { category:'מעטפת',name:'מגבונים לקקי' },

  // נשנושים
  { category:'נשנושים',name:'מרשמלו' },
  { category:'נשנושים',name:'חטיפים' },
  { category:'נשנושים',name:'גומי' },

  // שתיה
  { category:'שתיה',name:'בירות' },
  { category:'שתיה',name:'ערק' },
  { category:'שתיה',name:'לימונים' },
  { category:'שתיה',name:'שתיה מתוקה' },
  { category:'שתיה',name:'מים' },
  { category:'שתיה',name:'חלב' },
  { category:'שתיה',name:'יין' },
  { category:'שתיה',name:'לימונצ\'לו' },
  { category:'שתיה',name:'פקל קפה' },

  // הווי ובידור
  { category:'הווי ובידור',name:'ששבש' },
  { category:'הווי ובידור',name:'מטקות' },
  { category:'הווי ובידור',name:'גיטרה' },
  { category:'הווי ובידור',name:'קלפים' },
  { category:'הווי ובידור',name:'בוקסה' },

  // אוכל
  { category:'אוכל',name:'פיתות' },
  { category:'אוכל',name:'חומוס' },
  { category:'אוכל',name:'סלטים' },
  { category:'אוכל',name:'חמוצים' },
  { category:'אוכל',name:'קורנפלקס' },
  { category:'אוכל',name:'ביצים' },
  { category:'אוכל',name:'בלילה לפנקייק' },
  { category:'אוכל',name:'רסק עגבניות (לשקשוקה)' },

  // על האש
  { category:'על האש',name:'בשר' },
  { category:'על האש',name:'ירקות לעל האש' },
  { category:'על האש',name:'בצל' },
  { category:'על האש',name:'מנגל' },
  { category:'על האש',name:'מדליק פחמים' },
  { category:'על האש',name:'פחמים' },
  { category:'על האש',name:'גפרורים' },
  { category:'על האש',name:'פקל מנגל' },
  { category:'על האש',name:'מלקחיים למנגל' },

  // לינה
  { category:'לינה',name:'כרית' },
  { category:'לינה',name:'מזרן' },
  { category:'לינה',name:'שמיכה' },
  { category:'לינה',name:'אוהלים (2)' },
  { category:'לינה',name:'נפנף למנגל' },

  // פנ״שׁ
  { category:'פנ״שׁ',name:'מחצלת גדולה' },
  { category:'פנ״שׁ',name:'צידנית גדולה' },
  { category:'פנ״שׁ',name:'צילייה' },
  { category:'פנ״שׁ',name:'קרחונים לצידנית' },
  { category:'פנ״שׁ',name:'שולחן מתקפל' },
  { category:'פנ״שׁ',name:'כסאות מתקפלים' },
  { category:'פנ״שׁ',name:'תאורה' },
  { category:'פנ״שׁ',name:'פנסים / גרילנדה / תאורה' },

  // אישי
  { category:'אישי',name:'בגדים' },
  { category:'אישי',name:'ציוד שינה' },
  { category:'אישי',name:'קרם הגנה' },
  { category:'אישי',name:'מברשת שיניים' },
  { category:'אישי',name:'מגבת' },
  { category:'אישי',name:'צלחת רב פעמית' },
  { category:'אישי',name:'סכום רב פעמי' }
];

// שמירת בחירות ושורות שבוצעו
const saved   = JSON.parse(localStorage.getItem('whoBrings')    || '{}');
const done    = JSON.parse(localStorage.getItem('doneItems')    || '{}');
const dark    = localStorage.getItem('darkMode') === 'true';
const people  = ['נופר','איתי','תומר','יהלי','שלי','יעל','טליה'];

function saveState() {
  localStorage.setItem('whoBrings', JSON.stringify(saved));
  localStorage.setItem('doneItems', JSON.stringify(done));
}

function buildTable() {
  const tbody = document.querySelector('#gear-table tbody');
  tbody.innerHTML = '';
  gearItems.forEach(item => {
    const tr = document.createElement('tr');
    // פריט
    let td = document.createElement('td');
    td.textContent = item.name; tr.appendChild(td);
    // קטגוריה
    td = document.createElement('td');
    td.textContent = item.category; tr.appendChild(td);
    // מי מביא (dropdown)
    td = document.createElement('td');
    const sel = document.createElement('select');
    sel.innerHTML = '<option value="">–</option>' +
      people.map(p => `<option>${p}</option>`).join('');
    sel.value = saved[item.name] || '';
    sel.onchange = e => {
      saved[item.name] = e.target.value;
      saveState();
    };
    td.appendChild(sel); tr.appendChild(td);
    // בוצע (checkbox)
    td = document.createElement('td');
    const chk = document.createElement('input');
    chk.type    = 'checkbox';
    chk.checked = done[item.name] || false;
    chk.onchange = e => {
      done[item.name] = e.target.checked;
      saveState();
    };
    td.appendChild(chk); tr.appendChild(td);

    tbody.appendChild(tr);
  });
}

// סינון
document.getElementById('search').oninput = e => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('#gear-table tbody tr').forEach(tr => {
    const text = tr.children[0].textContent.toLowerCase()
               + tr.children[1].textContent.toLowerCase();
    tr.style.display = (!q || text.includes(q)) ? '' : 'none';
  });
};

// ייצוא CSV
document.getElementById('export-csv').onclick = () => {
  let csv = 'פריט,קטגוריה,מי מביא,בוצע\n';
  gearItems.forEach(item => {
    const who = saved[item.name]  || '';
    const ds  = done[item.name]   ? 'כן' : 'לא';
    csv += `"${item.name}","${item.category}","${who}","${ds}"\n`;
  });
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'camping_gear.csv';
  a.click(); URL.revokeObjectURL(url);
};

// מצב כהה
if (dark) document.body.classList.add('dark');
document.getElementById('toggle-dark').onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
};

// ניווט טאבים
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(s=>s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  };
});

// מסך פתיחה
document.getElementById('enter-button').onclick = () => {
  const ls = document.getElementById('landing-screen');
  ls.style.opacity = '0';
  setTimeout(() => ls.style.display = 'none', 1000);
};

// הפעלה ראשונית
buildTable();
