(() => {
  'use strict';
  const data = window.RESEARCH_STORY;
  const byId = id => document.getElementById(id);
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; return n; };
  data.questions.forEach(item => {
    const details = el('details'); details.append(el('summary', item.title), el('p', item.body), el('p', item.next, 'question-next')); byId('question-list').append(details);
  });
  const second = data.studyTwo;
  byId('study-two-status').textContent = second.status;
  byId('study-two-title').textContent = second.title;
  byId('study-two-intro').textContent = second.intro;
  [['Research question', second.question], ['Approach', second.approach], ['Main finding', second.finding], ['What comes next', second.nextQuestion]].forEach(([label, text]) => { const card = el('div'); card.append(el('h3', label), el('p', text || 'To be added.')); byId('study-two-fields').append(card); });
  if (/^10\.\d{4,9}\/.+/.test(second.doi)) { const a = el('a', 'Read Study 02 · DOI: ' + second.doi); a.href = 'https://doi.org/' + second.doi; a.target = '_blank'; a.rel = 'noopener noreferrer'; byId('study-two-link').append(a); }
  byId('study-two-note').textContent = second.note || '';
  byId('year').textContent = new Date().getFullYear();
  const toggle = document.querySelector('.theme-toggle');
  let saved; try { saved = localStorage.getItem('zhuo-theme'); } catch {}
  if (saved === 'dark') document.body.classList.add('dark');
  const updateThemeLabel = () => toggle.setAttribute('aria-label', 'Switch to ' + (document.body.classList.contains('dark') ? 'light' : 'dark') + ' theme');
  updateThemeLabel(); toggle.addEventListener('click', () => { document.body.classList.toggle('dark'); try { localStorage.setItem('zhuo-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch {} updateThemeLabel(); });
  const chapterLinks = [...document.querySelectorAll('.chapter-nav a')];
  const selectChapter = id => chapterLinks.forEach(a => { if (a.hash === '#' + id) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
  const updateChapter = () => { const threshold = window.innerWidth <= 650 ? 170 : 200; let active = chapterLinks[0].hash.slice(1); chapterLinks.forEach(a => { if (document.querySelector(a.hash).getBoundingClientRect().top <= threshold) active = a.hash.slice(1); }); selectChapter(active); };
  let scheduled = false;
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateChapter(); scheduled = false; }); } }, {passive:true});
  window.addEventListener('resize', updateChapter); updateChapter();
})();
