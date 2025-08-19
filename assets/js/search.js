(function () {
  const $q = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const input = $q('#searchInput');
  const items = $$('#postList .post-item');
  const tagBtns = $$('.tag-filter .tag-btn');
  const tagChips = $$('.tag-chip');
  let activeTag = '__all';

  function applyFilter() {
    const kw = (input.value || '').trim().toLowerCase();
    items.forEach(li => {
      const title = li.dataset.title || '';
      const tags = (li.dataset.tags || '');
      const matchTitle = !kw || title.includes(kw);
      const matchTag = (activeTag === '__all') || tags.split('|').includes(activeTag);
      li.style.display = (matchTitle && matchTag) ? '' : 'none';
    });
  }

  input && input.addEventListener('input', applyFilter);

  function setActiveTag(t) {
    activeTag = t;
    tagBtns.forEach(b => b.classList.toggle('active', b.dataset.tag === t));
    applyFilter();
  }

  tagBtns.forEach(b => b.addEventListener('click', () => setActiveTag(b.dataset.tag)));
  tagChips.forEach(c => c.addEventListener('click', () => setActiveTag(c.dataset.tag)));

  applyFilter();
})();
