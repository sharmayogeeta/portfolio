// ===================================
// Yogeeta Sharma — Portfolio scripts
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // ---------- Navigation ----------
    const nav = document.querySelector('.site-nav');
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const open = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!open));
            menu.classList.toggle('open', !open);
        });
        menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('open');
        }));
    }

    const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---------- Reveal on scroll ----------
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('in'));
    }

    // ---------- Live counts ----------
    if (typeof ARTICLES !== 'undefined') {
        document.querySelectorAll('[data-article-count]').forEach(el => { el.textContent = ARTICLES.length; });
    }

    // ---------- Footer year ----------
    document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

    // ---------- Articles page ----------
    const grid = document.getElementById('articlesGrid');
    if (grid && typeof ARTICLES !== 'undefined') initArticles(grid);
});

function initArticles(grid) {
    const PAGE_SIZE = 24;
    const searchInput = document.getElementById('articleSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const countEl = document.getElementById('resultCount');
    const emptyEl = document.getElementById('emptyState');
    const pager = document.getElementById('pagination');

    const params = new URLSearchParams(window.location.search);
    let state = {
        tag: params.get('tag') || 'all',
        query: params.get('q') || '',
        page: Math.max(1, parseInt(params.get('page'), 10) || 1)
    };

    const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    function filtered() {
        const q = state.query.trim().toLowerCase();
        return ARTICLES.filter(a =>
            (state.tag === 'all' || a.tags.includes(state.tag)) &&
            (!q || a.title.toLowerCase().includes(q) || a.domain.toLowerCase().includes(q))
        );
    }

    function syncUrl() {
        const p = new URLSearchParams();
        if (state.tag !== 'all') p.set('tag', state.tag);
        if (state.query) p.set('q', state.query);
        if (state.page > 1) p.set('page', state.page);
        const qs = p.toString();
        history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
    }

    function render(scroll) {
        const list = filtered();
        const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
        if (state.page > pages) state.page = pages;
        const start = (state.page - 1) * PAGE_SIZE;
        const slice = list.slice(start, start + PAGE_SIZE);

        grid.innerHTML = slice.map(a => `
            <a class="article-card" href="${escapeHtml(a.url)}" target="_blank" rel="noopener">
                <div class="article-body">
                    <h3>${escapeHtml(a.title)}</h3>
                    <p class="article-domain"><i class="fas fa-globe" aria-hidden="true"></i>${escapeHtml(a.domain)}</p>
                    <div class="tags">${a.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
                </div>
                <span class="article-link">Read article <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
            </a>`).join('');

        countEl.textContent = list.length
            ? `Showing ${start + 1}–${start + slice.length} of ${list.length} article${list.length === 1 ? '' : 's'}`
            : '';
        emptyEl.style.display = list.length ? 'none' : 'block';

        // Pagination
        pager.innerHTML = '';
        if (pages > 1) {
            const mk = (label, page, opts = {}) => {
                const b = document.createElement('button');
                b.type = 'button';
                b.innerHTML = label;
                if (opts.aria) b.setAttribute('aria-label', opts.aria);
                if (opts.current) b.setAttribute('aria-current', 'page');
                if (opts.disabled) b.disabled = true;
                b.addEventListener('click', () => { state.page = page; render(true); });
                pager.appendChild(b);
            };
            mk('<i class="fas fa-chevron-left"></i>', state.page - 1, { aria: 'Previous page', disabled: state.page === 1 });
            for (let p = 1; p <= pages; p++) mk(String(p), p, { current: p === state.page, aria: `Page ${p}` });
            mk('<i class="fas fa-chevron-right"></i>', state.page + 1, { aria: 'Next page', disabled: state.page === pages });
        }

        filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === state.tag)));
        syncUrl();
        if (scroll) document.getElementById('articles-top').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    filterButtons.forEach(b => b.addEventListener('click', () => {
        state.tag = b.dataset.filter;
        state.page = 1;
        render(false);
    }));

    if (searchInput) {
        searchInput.value = state.query;
        let t;
        searchInput.addEventListener('input', () => {
            clearTimeout(t);
            t = setTimeout(() => { state.query = searchInput.value; state.page = 1; render(false); }, 150);
        });
    }

    render(false);
}
