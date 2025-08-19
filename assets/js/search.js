(function () {
  const $q = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const input = $q('#searchInput');
  const items = $$('#postList .post-item');
  let activeTag = '__all';

  function applyFilter() {
    const kw = (input?.value || '').trim().toLowerCase();
    items.forEach(li => {
      const title = (li.dataset.title || '');
      const tags = (li.dataset.tags || '');
      const matchTitle = !kw || title.includes(kw);
      const matchTag = (activeTag === '__all') || tags.split('|').includes(activeTag);
      li.style.display = (matchTitle && matchTag) ? '' : 'none';
    });
  }

  function setActiveTag(t) {
    activeTag = t;
    $$('.tag-filter .tag-btn').forEach(b => b.classList.toggle('active', b.dataset.tag === t));
    applyFilter();
  }

  input && input.addEventListener('input', applyFilter);
  $$('.tag-filter .tag-btn').forEach(b => b.addEventListener('click', () => setActiveTag(b.dataset.tag)));

  // 点击文章里的小标签也能筛选
  document.addEventListener('click', e => {
    if (e.target.classList.contains('tag-chip')) setActiveTag(e.target.dataset.tag);
  });

  applyFilter();
})();
