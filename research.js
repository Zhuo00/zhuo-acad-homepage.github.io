(() => {
  'use strict';
  const data = window.RESEARCH_STORY;
  const byId = id => document.getElementById(id);
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; return n; };
  // Buttons use aria-pressed, so mouse, touch, Enter, and Space all work naturally.
  const choiceGroup = (containerId, items, render) => {
    const buttons = items.map((item, index) => {
      const button = el('button', item.label); button.type = 'button'; button.setAttribute('aria-pressed', String(index === 0));
      button.setAttribute('aria-controls', containerId === 'carbon-controls' ? 'carbon-detail' : 'evidence-detail');
      button.addEventListener('click', () => { buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index))); render(item, index); });
      byId(containerId).append(button); return button;
    });
    render(items[0], 0);
  };
  const carbonDiagram = index => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 600 145'); svg.setAttribute('role', 'img'); svg.setAttribute('class', 'carbon-map');
    const descriptions = ['A long starch chain is partially hydrolyzed into shorter chains.', 'Oligosaccharides are converted outside the cells to smaller sugars and glucose.', 'Released glucose is transported across a cell boundary and used in metabolism.'];
    svg.setAttribute('aria-label', descriptions[index]);
    // Geometry is a conceptual scientific diagram, never experimental data.
    const unit = (x, y) => `<circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y+4}" class="unit-label">G</text>`;
    const chain = (n, x, y) => Array.from({length:n}, (_, i) => (i ? `<path d="M${x+(i-1)*24+11} ${y}h2"/>` : '') + unit(x+i*24,y)).join('');
    const arrow = '<path class="flow-line" d="M275 70h48m-8-6 8 6-8 6"/>';
    const left = '<text x="135" y="125" class="map-label">';
    const right = '<text x="455" y="125" class="map-label">';
    if (index === 0) svg.innerHTML = chain(9,40,70) + arrow + chain(4,370,53) + chain(3,420,88) + left + 'Starch chain</text>' + right + 'Shorter sugar chains</text>';
    if (index === 1) svg.innerHTML = chain(6,65,70) + arrow + chain(2,375,60) + unit(450,88) + unit(492,53) + unit(530,83) + '<text x="300" y="28" class="map-label">Outside the cells</text>' + left + 'Oligosaccharides</text>' + right + 'Smaller sugars + glucose</text>';
    if (index === 2) svg.innerHTML = unit(85,58) + unit(135,85) + unit(190,55) + arrow + '<rect class="cell-boundary" x="354" y="20" width="206" height="95" rx="16"/>' + unit(385,68) + '<path class="flow-line" d="M407 68h23m-6-5 6 5-6 5"/><text x="489" y="74" class="map-label">Metabolism</text>' + left + 'Released glucose</text>' + right + 'Inside the cell</text>';
    return svg;
  };
  choiceGroup('carbon-controls', data.carbonStages, (item, index) => {
    byId('carbon-detail').replaceChildren(carbonDiagram(index), el('p', item.cue, 'carbon-cue'), el('h4', item.title), el('p', item.text), el('span', item.evidence, 'evidence-source'));
  });
  choiceGroup('evidence-controls', data.evidence, item => {
    const dl = el('dl'); [['Observation', item.observation], ['What it suggests', item.meaning], ['Keep in mind', item.limit]].forEach(([title, text]) => dl.append(el('dt', title), el('dd', text)));
    byId('evidence-detail').replaceChildren(el('h4', item.title), dl, el('span', 'Source: Study 01 · ' + item.source, 'evidence-source'));
  });
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
