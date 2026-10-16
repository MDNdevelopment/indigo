// Filtros de proyectos en tiempo real: sector y país se combinan sin recargar. No usa GSAP.
export {};

function bind() {
  document.querySelectorAll<HTMLElement>('[data-filter-root]').forEach((root) => {
    if (root.dataset.bound) return;
    root.dataset.bound = '1';
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-item]'));
    const sectorBtns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-filter]'));
    const countryLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-country-filter]'));
    // En /proyectos los países filtran en la misma página; en la página de un país siguen siendo enlaces.
    const live = root.hasAttribute('data-live');
    let sector = 'todos';
    let country = 'todos';

    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    let run = 0;

    const matches = (it: HTMLElement) =>
      (sector === 'todos' || it.dataset.cat === sector) && (country === 'todos' || it.dataset.countryId === country);

    // Sale lo que ya no encaja (fundido y encogido), luego el resto se reacomoda (FLIP) y lo nuevo entra en escalera.
    const paint = () => {
      sectorBtns.forEach((b) => {
        const id = b.dataset.filter!;
        b.setAttribute('aria-pressed', String(id === sector));
        b.disabled = id !== 'todos' && !items.some((it) => it.dataset.cat === id && (country === 'todos' || it.dataset.countryId === country));
      });
      if (live) countryLinks.forEach((a) => {
        if (a.dataset.countryFilter === country) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
    };

    const apply = async (animate: boolean) => {
      const id = ++run;
      paint();
      items.forEach((it) => it.getAnimations().forEach((a) => a.cancel()));
      const showing = items.filter((it) => !it.hidden);
      const leaving = showing.filter((it) => !matches(it));
      const staying = showing.filter(matches);
      const entering = items.filter((it) => it.hidden && matches(it));
      const go = animate && !reduced.matches;

      if (go && leaving.length) {
        await Promise.all(
          leaving.map((it) => it.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(0.94)' }], { duration: 220, easing: 'ease-in', fill: 'forwards' }).finished.catch(() => {})),
        );
        if (id !== run) return;
      }
      const before = go ? staying.map((it) => it.getBoundingClientRect()) : [];
      leaving.forEach((it) => { it.hidden = true; it.getAnimations().forEach((a) => a.cancel()); });
      entering.forEach((it) => (it.hidden = false));
      if (go) {
        staying.forEach((it, i) => {
          const r = it.getBoundingClientRect();
          const dx = before[i].left - r.left;
          const dy = before[i].top - r.top;
          if (dx || dy) it.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 650, easing: ease });
        });
        entering.forEach((it, i) =>
          it.animate([{ opacity: 0, transform: 'translateY(22px) scale(0.97)' }, { opacity: 1, transform: 'none' }], { duration: 650, delay: 120 + i * 70, easing: ease, fill: 'backwards' }),
        );
      }
    };

    root.querySelector('[data-filter-bar]')?.removeAttribute('hidden');
    sectorBtns.forEach((b) => {
      b.hidden = false;
      b.addEventListener('click', () => {
        sector = b.dataset.filter!;
        apply(true);
      });
    });
    if (live) {
      countryLinks.forEach((a) =>
        a.addEventListener('click', (e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
          e.preventDefault();
          e.stopPropagation();
          country = a.dataset.countryFilter!;
          // si el sector elegido no existe en ese país, volver a "todos"
          if (sector !== 'todos' && !items.some((it) => it.dataset.cat === sector && (country === 'todos' || it.dataset.countryId === country))) sector = 'todos';
          apply(true);
        }),
      );
    }
    apply(false);
  });
}

document.addEventListener('astro:page-load', bind);
