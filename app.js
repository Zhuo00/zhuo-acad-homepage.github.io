(() => {
  'use strict';
  const p = window.PROFILE;
  const byId = id => document.getElementById(id);
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; return n; };
  const safeURL = value => { try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol) ? u.href : null; } catch { return null; } };
  const link = (label, url) => { const a = el('a', label); a.href = url; if (!url.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; } return a; };
  const scientificText = (node, text) => {
    const name = 'Galdieria sulphuraria';
    String(text).split(name).forEach((part, i) => { if (i) node.append(el('i', name)); node.append(document.createTextNode(part)); });
    return node;
  };
  byId('profile-name').textContent = p.name;
  byId('profile-role').textContent = p.role;
  byId('profile-affiliation').textContent = p.affiliation;
  document.querySelector('.brand').firstChild.textContent = p.name;
  document.querySelector('.about h2 span').textContent = p.name + '.';
  document.title = p.name + ' | Academic Homepage';
  byId('intro').textContent = p.intro;
  p.bio.forEach(text => byId('bio').append(el('p', text)));
  p.interests.forEach((item, i) => {
    if (item.href && /^[a-zA-Z0-9][a-zA-Z0-9._/-]*\.html$/.test(item.href)) {
      const card = el('a', '', 'research-story-card'); card.href = item.href;
      card.append(el('span', item.label || 'Research story', 'story-card-label'), el('h3', item.title), el('p', item.description));
      const bottom = el('div', '', 'story-card-bottom'); bottom.append(el('span', item.status || ''), el('span', 'Explore the story', 'story-card-cta')); card.append(bottom); byId('interests').append(card);
    } else {
      const card = el('article', '', 'interest'); card.append(el('span', String(i + 1).padStart(2, '0'), 'interest-index'), el('h3', item.title), el('p', item.description)); byId('interests').append(card);
    }
  });
  if (!p.news.length) { const empty = el('div', '', 'news-empty'); empty.append(el('span', '✦'), el('p', 'Updates coming soon.')); byId('news-list').append(empty); }
  p.news.forEach(item => { const row = el('div', '', 'news-row'); row.append(el('time', item.date), el('span', item.text)); byId('news-list').append(row); });
  p.publications.forEach(pub => {
    const card = el('article', '', 'publication publication-row');
    if (pub.image && /^(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_.-]+\.(?:svg|png|jpe?g|webp)$/i.test(pub.image)) {
      const figure = el('a', '', 'publication-figure'); figure.href = pub.image; figure.target = '_blank'; figure.rel = 'noopener noreferrer';
      figure.setAttribute('aria-label', 'Open graphical abstract: ' + pub.title);
      const img = el('img'); img.src = pub.image; img.alt = pub.imageAlt || 'Graphical abstract for ' + pub.title; img.loading = 'lazy'; img.decoding = 'async';
      figure.append(img); card.append(figure);
    } else card.classList.add('publication-without-image');
    const content = el('div', '', 'publication-content'); const heading = el('h3');
    const paperURL = safeURL(pub.paper);
    heading.append(scientificText(paperURL ? link('', paperURL) : el('span'), pub.title));
    content.append(heading, el('p', pub.authors, 'authors'), el('p', pub.venue, 'publication-venue'));
    const highlights = el('ul', '', 'publication-highlights');
    (pub.highlights || []).forEach(text => highlights.append(scientificText(el('li'), text)));
    content.append(highlights); card.append(content); byId('publication-list').append(card);
  });
  p.education.forEach(item => { const row = el('article', '', 'timeline-item'); const top = el('div', '', 'timeline-top'); top.append(el('h3', item.title), el('time', item.period)); row.append(top, el('p', item.detail, 'detail'), el('p', item.note)); byId('education-list').append(row); });
  byId('contact-copy').textContent = p.contact;
  const contactLinks = [];
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) contactLinks.push(['Email', 'mailto:' + p.email]);
  [['Google Scholar', p.scholar], ['GitHub', p.github], ['LinkedIn', p.linkedin]].forEach(([label, value]) => { const url = safeURL(value); if (url) contactLinks.push([label, url]); });
  contactLinks.forEach(([label, url]) => { byId('profile-links').append(link(label, url)); byId('contact-links').append(link(label === 'Email' ? p.email : label, url)); });
  byId('year').textContent = new Date().getFullYear();
  const toggle = document.querySelector('.theme-toggle');
  let savedTheme; try { savedTheme = localStorage.getItem('zhuo-theme'); } catch {}
  if (savedTheme === 'dark') document.body.classList.add('dark');
  const updateThemeLabel = () => toggle.setAttribute('aria-label', 'Switch to ' + (document.body.classList.contains('dark') ? 'light' : 'dark') + ' theme');
  updateThemeLabel(); toggle.addEventListener('click', () => { document.body.classList.toggle('dark'); try { localStorage.setItem('zhuo-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch {} updateThemeLabel(); });
  const navLinks = [...document.querySelectorAll('nav a')];
  if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => { for (const entry of entries) { if (entry.isIntersecting) { navLinks.forEach(a => { const active = a.hash === '#' + entry.target.id; a.classList.toggle('active', active); if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); } } }, {rootMargin: '-15% 0px -55% 0px'}); navLinks.forEach(a => observer.observe(document.querySelector(a.hash))); }
})();
