// Carga perezosa de GSAP con ClientRouter. Sin GSAP (reduced-motion) la web navega igual, sin cortina.
import './analytics.ts';
import './cookies.ts';
import './menu.ts';
import './contact-form.ts';
import './cycle.ts';
import './filters.ts';

type Motion = typeof import('./motion.ts');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let motion: Promise<Motion> | null = null;
let mod: Motion | null = null;
const load = () => (motion ??= import('./motion.ts').then((m) => (mod = m)));

function whenIdle(cb: () => void) {
  'requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 2000 }) : setTimeout(cb, 200);
}

// Con reduced-motion no hay GSAP: los heros cambian de slide por clase, sin animación
function staticEdit() {
  const root = document.querySelector<HTMLElement>('[data-edit]');
  if (!root) return;
  const copies = Array.from(root.querySelectorAll<HTMLElement>('[data-edit-copy]'));
  const photos = Array.from(root.querySelectorAll<HTMLElement>('[data-edit-photo]'));
  const tabs = Array.from(root.querySelectorAll<HTMLElement>('[data-edit-tab]'));
  tabs.forEach((t, i) =>
    t.addEventListener('click', () => {
      copies.forEach((c, n) => {
        c.classList.toggle('is-current', n === i);
        c.setAttribute('aria-hidden', String(n !== i));
        c.toggleAttribute('inert', n !== i);
      });
      photos.forEach((p, n) => p.classList.toggle('is-current', n === i));
      tabs.forEach((x, n) => x.setAttribute('aria-current', String(n === i)));
    }),
  );
}

// Cada página (primera carga y navegaciones): re-inicializar
let started = false;
document.addEventListener('astro:page-load', () => {
  if (reduced.matches) {
    staticEdit();
    return;
  }
  started = false;
  const start = () => {
    if (started) return;
    started = true;
    load().then((m) => { m.init(); m.curtainOut(); });
  };
  // Si la página abre con animación (hero), GSAP entra de inmediato; si no, en reposo o al primer gesto.
  if (document.querySelector('[data-hero-root], [data-split][data-hero]')) start();
  else {
    whenIdle(start);
    addEventListener('scroll', start, { once: true, passive: true });
    addEventListener('pointerdown', start, { once: true });
  }
});

// Antes de cambiar de página: cortina que cubre. Debajo se hace el swap.
// PRUEBA: cortina desactivada temporalmente. Poner en false para reactivarla.
const CURTAIN_OFF = true;
document.addEventListener('astro:before-preparation', (e) => {
  if (CURTAIN_OFF || reduced.matches || !mod) return;
  const ev = e as Event & { loader: () => Promise<void> };
  const original = ev.loader;
  ev.loader = async () => {
    await Promise.all([mod!.curtainIn(), original()]);
  };
});

// La página que entra arranca pre-oculta (igual que en la carga inicial) para que el hero no parpadee
document.addEventListener('astro:before-swap', (e) => {
  if (!reduced.matches) (e as Event & { newDocument: Document }).newDocument.documentElement.classList.add('has-motion');
});

// Limpiar triggers y tweens de la página que se va
document.addEventListener('astro:before-swap', () => {
  mod?.revert();
  started = false;
});
