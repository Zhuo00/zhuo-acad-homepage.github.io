(() => {
  'use strict';
  const byId = id => document.getElementById(id);
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
