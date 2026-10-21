// Menú móvil con panel lateral. Se re-enlaza en cada navegación (ClientRouter reemplaza el <body>).

export {};
let open = false;
let ctl: AbortController | null = null;

function bind() {
  ctl?.abort();
  ctl = new AbortController();
  const { signal } = ctl;
  open = false;
  document.documentElement.style.overflow = '';

  const burger = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');

  if (nav) {
    const onScroll = () => nav.classList.toggle('is-solid', scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true, signal });
  }
  if (!burger || !menu) return;

  const panel = menu.querySelector<HTMLElement>('[data-menu-panel]')!;
  const scrim = menu.querySelector<HTMLElement>('.menu-scrim')!;
  const closeBtn = menu.querySelector<HTMLButtonElement>('.menu-close')!;
  const labels = { open: burger.getAttribute('aria-label') ?? '', close: closeBtn.getAttribute('aria-label') ?? '' };
  const links = () => Array.from(menu.querySelectorAll<HTMLElement>('a, button')).filter((el) => el.offsetParent !== null && getComputedStyle(el).visibility !== 'hidden');

  const setOpen = async (next: boolean) => {
    if (next === open) return;
    open = next;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? labels.close : labels.open);
    document.documentElement.style.overflow = open ? 'hidden' : '';

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.hidden = !open;
      if (open) closeBtn.focus(); else burger.focus();
      return;
    }
    const { gsap } = await import('gsap');
    const items = menu.querySelectorAll('[data-menu-link]');
    gsap.killTweensOf([panel, scrim, items]);
    if (open) {
      menu.hidden = false;
      gsap.fromTo(scrim, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.out' });
      gsap.fromTo(panel, { xPercent: 100 }, { xPercent: 0, duration: 0.6, ease: 'expo.out' });
      gsap.fromTo(items, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, delay: 0.15, ease: 'power2.out' });
      closeBtn.focus();
    } else {
      gsap.to(scrim, { opacity: 0, duration: 0.3 });
      gsap.to(panel, {
        xPercent: 100, duration: 0.4, ease: 'expo.in',
        onComplete: () => { menu.hidden = true; gsap.set([panel, scrim], { clearProps: 'all' }); },
      });
      burger.focus();
    }
  };

  burger.addEventListener('click', () => setOpen(true), { signal });
  menu.addEventListener('click', (e) => {
    const el = e.target as HTMLElement;
    if (el.closest('[data-menu-close]') || el.closest('a')) return void setOpen(false);
    const more = el.closest<HTMLButtonElement>('[data-menu-more]');
    if (more) more.setAttribute('aria-expanded', String(more.getAttribute('aria-expanded') !== 'true'));
  }, { signal });
  addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') return void setOpen(false);
    if (e.key !== 'Tab') return;
    const f = links();
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }, { signal });
  matchMedia('(min-width: 980px)').addEventListener('change', (e) => e.matches && open && setOpen(false), { signal });
}

document.addEventListener('astro:page-load', bind);
