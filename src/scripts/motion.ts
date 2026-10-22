import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// ------------------------------------------------------------------
// Utilidades
// ------------------------------------------------------------------

/** fromTo que limpia los estilos inline al terminar (evita transforms pegados). */
export function ft(targets: gsap.TweenTarget, from: gsap.TweenVars, to: gsap.TweenVars) {
  if (to.scrollTrigger) {
    const done = to.onComplete;
    to.onComplete = function (this: gsap.core.Tween, ...a: unknown[]) {
      gsap.set(this.targets(), { clearProps: 'clipPath,opacity,transform' });
      (done as ((...x: unknown[]) => void) | undefined)?.apply(this, a);
    };
  }
  return gsap.fromTo(targets, from, to);
}

const $$ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

/**
 * Divide en palabras con máscara que no corta ascendentes/descendentes.
 * Conserva el marcado interno (<em>, <span>…). Memoiza en el elemento.
 */
type Splittable = HTMLElement & { __words?: HTMLElement[] };

/** El chino no lleva espacios: se parte por carácter (con su puntuación pegada) para que el titular pueda saltar de línea. */
const CJK = /[\u3400-\u9fff\uf900-\ufaff]/;
const CJK_TOKEN = /[\u3400-\u9fff\uf900-\ufaff][，。、！？；：）」』”’]*|[^\u3400-\u9fff\uf900-\ufaff]+/g;
const cjkTokens = (p: string): string[] => (CJK.test(p) ? (p.match(CJK_TOKEN) ?? [p]) : [p]);
export function splitWords(el: Splittable): HTMLElement[] {
  if (el.__words) return el.__words;
  const words: HTMLElement[] = [];
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        const parts = (child.textContent ?? '').split(/(\s+)/).flatMap(cjkTokens);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) return void frag.appendChild(document.createTextNode(' '));
          const outer = document.createElement('span');
          outer.style.cssText =
            'display:inline-block;overflow:hidden;vertical-align:bottom;padding:.28em .03em .12em;margin:-.28em -.03em -.12em';
          const inner = document.createElement('span');
          inner.style.cssText = 'display:inline-block;will-change:transform';
          inner.textContent = p;
          outer.appendChild(inner);
          frag.appendChild(outer);
          words.push(inner);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && (child as HTMLElement).tagName !== 'BR') {
        walk(child);
      }
    });
  };
  el.setAttribute('aria-label', el.textContent?.trim() ?? '');
  walk(el);
  words.forEach((w) => w.parentElement?.setAttribute('aria-hidden', 'true'));
  el.__words = words;
  return words;
}

/** Móvil: la pantalla es corta y los bloques se apilan, así que todo dispara antes y con tandas más cortas. */
const isMobile = () => matchMedia('(max-width: 900px)').matches;
/** Stagger con tope de duración total: listas largas no se quedan animando cuando el usuario ya pasó de largo. */
const stag = (n: number, each: number, max = isMobile() ? 0.35 : 0.8) => (n > 1 ? Math.min(each * (n - 1), max) / (n - 1) : 0);

const once = (el: Element, start = 'top 88%') => ({ trigger: el, start: isMobile() && /^top \d+%$/.test(start) ? 'top 100%' : start, once: true });

// ------------------------------------------------------------------
// Motor declarativo: se anima con atributos data-*
// ------------------------------------------------------------------

function declarative() {
  // Titulares: palabras suben con rotación
  $$('[data-split]').forEach((el) => {
    const words = splitWords(el);
    const hero = el.hasAttribute('data-hero');
    ft(words, { yPercent: 120, rotate: 7 }, {
      yPercent: 0,
      rotate: 0,
      duration: 0.95,
      ease: 'expo.out',
      stagger: stag(words.length, 0.03, 0.45),
      ...(hero ? { delay: 0.15 } : { scrollTrigger: once(el, 'top 94%') }),
    });
  });

  // Citas y párrafos: por líneas
  $$('[data-lines]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        ft(self.lines, { yPercent: 105 }, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: stag(self.lines.length, 0.09), scrollTrigger: once(el) }),
    });
  });

  // Fade + subida (usar con medida: no en todo)
  $$('[data-fade]').forEach((el) => {
    const delay = Number(el.dataset.fadeDelay ?? 0) / 1000;
    ft(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', delay, scrollTrigger: once(el, 'top 96%') });
  });

  // Grupos que entran en tandas
  const batch = $$('[data-batch]');
  if (batch.length) {
    gsap.set(batch, { opacity: 0, y: 28 });
    ScrollTrigger.batch(batch, {
      start: isMobile() ? 'top 100%' : 'top 88%',
      once: true,
      onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: isMobile() ? 0.6 : 0.8, ease: 'power2.out', stagger: 0.09, clearProps: 'opacity,transform' }),
    });
  }

  // Grupos de hijos (flip, skew, shutter). En escritorio el contenedor dispara a todos con stagger; en móvil los hijos se apilan
  // y el contenedor es altísimo, así que cada hijo dispara con su propio trigger cuando asoma.
  const kids = (el: HTMLElement, from: gsap.TweenVars, to: gsap.TweenVars, start: string, max = 0.8) => {
    const list = Array.from(el.children) as HTMLElement[];
    if (!isMobile()) return ft(list, from, { ...to, stagger: stag(list.length, 0.12, max), scrollTrigger: once(el, start) });
    list.forEach((c) => ft(c, from, { ...to, duration: Math.min(Number(to.duration ?? 1), 0.8), scrollTrigger: once(c) }));
  };

  // Hijos que se abren como página (rotateX)
  $$('[data-flip]').forEach((el) =>
    kids(el, { rotateX: -85, y: 80, transformOrigin: '50% 0%' }, { rotateX: 0, y: 0, duration: 1, ease: 'expo.out' }, 'top 85%'),
  );

  // Hijos que entran deslizados
  $$('[data-skew]').forEach((el) =>
    kids(el, { x: 180, skewX: -18, opacity: 0 }, { x: 0, skewX: 0, opacity: 1, duration: 0.9, ease: 'expo.out' }, 'top 85%'),
  );

  // Hijos que se revelan como persiana
  $$('[data-shutter]').forEach((el) =>
    kids(el, { clipPath: 'inset(100% 0 0 0)', y: 60 }, { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 0.85, ease: 'expo.out' }, 'top 88%', 0.5),
  );

  // Persiana por elemento: para bloques altos que se apilan, cada uno con su propio trigger
  $$('[data-shutter-item]').forEach((el) =>
    ft(el, { clipPath: 'inset(100% 0 0 0)', y: 60 }, {
      clipPath: 'inset(0% 0 0 0)', y: 0, duration: 0.85, ease: 'expo.out', scrollTrigger: once(el, 'top 88%'),
    }),
  );

  // Frase gigante que se ilumina palabra a palabra
  $$('[data-scrub]').forEach((el) => {
    const floor = Number(el.dataset.scrubFloor ?? 0.14);
    const cjk = CJK.test(el.textContent ?? '');
    SplitText.create(el, {
      type: cjk ? 'chars' : 'words',
      tag: 'span',
      wordsClass: 'scrub-word',
      charsClass: 'scrub-word',
      onSplit: (self) =>
        gsap.fromTo(cjk ? self.chars : self.words, { opacity: floor }, {
          opacity: 1, ease: 'none', stagger: cjk ? 0.08 : 0.25,
          scrollTrigger: { trigger: el, start: 'clamp(top 88%)', end: 'clamp(bottom 62%)', scrub: true },
        }),
    });
  });

  // Contadores
  $$('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? '';
    const o = { v: 0 };
    gsap.to(o, {
      v: target, duration: 1.8, ease: 'power3.out',
      scrollTrigger: once(el, 'top 90%'),
      onUpdate: () => (el.textContent = Math.round(o.v).toLocaleString(document.documentElement.lang || 'es') + suffix),
    });
  });

  // Línea divisoria que se dibuja de un extremo al otro
  $$('[data-rule]').forEach((el) =>
    ft(el, { scaleX: 0 }, {
      scaleX: 1,
      duration: 0.9,
      ease: 'expo.out',
      transformOrigin: el.dataset.rule === 'right' ? '100% 50%' : '0% 50%',
      scrollTrigger: once(el, 'top 92%'),
    }),
  );

  // Retículas que se arman: cada pieza entra desde el borde que le toca, por columnas
  $$('[data-cols]').forEach((el) => {
    const list = Array.from(el.children) as HTMLElement[];
    if (!list.length) return;
    if (isMobile()) {
      list.forEach((c) =>
        ft(c, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: once(c) }),
      );
      return;
    }
    const order = [...list].sort((a, b) => a.offsetLeft - b.offsetLeft || a.offsetTop - b.offsetTop);
    const each = stag(order.length, 0.11, 0.6);
    const tl = gsap.timeline({ scrollTrigger: once(el, 'top 86%') });
    order.forEach((c, i) =>
      tl.fromTo(
        c,
        { x: c.offsetLeft + c.offsetWidth / 2 < el.clientWidth / 2 ? -54 : 54, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: 'expo.out', clearProps: 'opacity,transform' },
        i * each,
      ),
    );
  });

  // Portadas que se firman: la foto no se mueve; suben las palabras del titular y se dibuja la línea de acento
  $$('[data-cover]').forEach((el) => {
    const cards = Array.from(el.children) as HTMLElement[];
    if (!cards.length) return;
    const dur = isMobile() ? 0.8 : 0.9;
    const add = (tl: gsap.core.Timeline, card: HTMLElement, at: number) => {
      const title = card.querySelector<HTMLElement>('[data-cover-title]');
      const rule = card.querySelector<HTMLElement>('[data-cover-rule]');
      const words = title ? splitWords(title) : [];
      tl.fromTo(card, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'opacity,transform' }, at);
      if (words.length)
        tl.fromTo(words, { yPercent: 115 }, { yPercent: 0, duration: dur, ease: 'expo.out', stagger: stag(words.length, 0.035, 0.3), clearProps: 'transform' }, at + 0.1);
      if (rule) tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'expo.out', clearProps: 'transform' }, at + 0.28);
    };
    if (isMobile()) {
      cards.forEach((c) => add(gsap.timeline({ scrollTrigger: once(c) }), c, 0));
      return;
    }
    const tl = gsap.timeline({ scrollTrigger: once(el, 'top 85%') });
    const each = stag(cards.length, 0.14, 0.45);
    cards.forEach((c, i) => add(tl, c, i * each));
  });

  // Obras destacadas: cada ficha sube en diagonal (fila a fila), el titular entra por palabras y la línea de acento se dibuja. La foto no se transforma.
  $$('[data-works]').forEach((el) => {
    const cards = Array.from(el.children) as HTMLElement[];
    if (!cards.length) return;
    const add = (tl: gsap.core.Timeline, card: HTMLElement, at: number) => {
      const title = card.querySelector<HTMLElement>('[data-work-title]');
      const rule = card.querySelector<HTMLElement>('[data-work-rule]');
      const meta = card.querySelector<HTMLElement>('.work-meta');
      const words = title ? splitWords(title) : [];
      tl.fromTo(card, { y: 56, x: isMobile() ? 0 : -18, opacity: 0 }, { y: 0, x: 0, opacity: 1, duration: 0.95, ease: 'expo.out', clearProps: 'opacity,transform' }, at);
      if (words.length) tl.fromTo(words, { yPercent: 115 }, { yPercent: 0, duration: 0.85, ease: 'expo.out', stagger: stag(words.length, 0.04, 0.25), clearProps: 'transform' }, at + 0.25);
      if (rule) tl.fromTo(rule, { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.7, ease: 'expo.out', clearProps: 'transform' }, at + 0.4);
      if (meta) tl.fromTo(meta, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'opacity,transform' }, at + 0.5);
    };
    if (isMobile()) {
      cards.forEach((c) => add(gsap.timeline({ scrollTrigger: once(c, 'top 92%') }), c, 0));
      return;
    }
    // Se escalonan por fila y columna: la onda cae en diagonal.
    const rows = [...new Set(cards.map((c) => c.offsetTop))].sort((a, b) => a - b);
    const cols = [...new Set(cards.map((c) => c.offsetLeft))].sort((a, b) => a - b);
    rows.forEach((top) => {
      const row = cards.filter((c) => c.offsetTop === top);
      const tl = gsap.timeline({ scrollTrigger: once(row[0], 'top 90%') });
      row.forEach((c) => add(tl, c, cols.indexOf(c.offsetLeft) * 0.13));
    });
  });

  // Parallax suave
  $$('[data-parallax]').forEach((el) => {
    const k = Number(el.dataset.parallax || 0.15);
    gsap.fromTo(el, { yPercent: -k * 100 }, {
      yPercent: k * 100, ease: 'none',
      scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

// ------------------------------------------------------------------
// Recetas con nombre
// ------------------------------------------------------------------

/** Intro del header de página: el titular sube por palabras y la foto entra desplazándose desde un lado (sin escalar). Sin parpadeo: el CSS lo pre-oculta (has-motion). */
function heroIntro() {
  const hero = document.querySelector<HTMLElement>('.ph[data-hero-root]');
  if (!hero) return;
  const photo = hero.querySelector<HTMLElement>('[data-hero-media]');
  const rest = $$('[data-hero-rest]', hero);
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  if (photo) tl.fromTo(photo, { x: 110, opacity: 0 }, { x: 0, opacity: 1, duration: 1.3, clearProps: 'transform,opacity' }, 0);
  if (rest.length) tl.fromTo(rest, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, clearProps: 'opacity,transform' }, 0.45);
}

/** Autoplay del hero: solo se detiene cuando el hero sale de pantalla. El cursor encima no lo frena. */
function carouselGuard(root: HTMLElement, getBar: () => gsap.core.Tween | null, isBusy: () => boolean) {
  const state = { inView: true };
  const sync = () => {
    const bar = getBar();
    if (!bar) return;
    if (!state.inView) bar.pause();
    else if (!isBusy()) bar.resume();
  };
  const vis = ScrollTrigger.create({
    trigger: root, start: 'top bottom', end: 'bottom top',
    onToggle: (self) => { state.inView = self.isActive; sync(); },
  });
  return { sync, kill: () => vis.kill() };
}

/**
 * Hero "editorial dividido": mitad de color con el titular y mitad foto alta. La foto nueva sube tapando la anterior (persiana
 * vertical) y el titular cambia por palabras. Cuatro rombos (el motivo del isotipo) se llenan de abajo arriba como progreso y hacen de navegación (autoplay 7 s, no se frena con el cursor).
 */
function editorialHero(): (() => void) | void {
  const root = document.querySelector<HTMLElement>('[data-edit]');
  if (!root) return;
  const copies = $$('[data-edit-copy]', root);
  const photos = $$('[data-edit-photo]', root);
  const tabs = $$('[data-edit-tab]', root);
  if (copies.length < 2) return;
  const bars = tabs.map((t) => t.querySelector<HTMLElement>('[data-edit-bar]')!);
  const veil = root.querySelector<HTMLElement>('.edit-veil');
  const DUR = 7;
  let current = 0;
  let busy = false;
  let bar: gsap.core.Tween | null = null;
  const ctl = new AbortController();
  const guard = carouselGuard(root, () => bar, () => busy);

  const parts = (i: number) => ({
    words: splitWords(copies[i].querySelector<HTMLElement>('[data-edit-title]')!),
    rest: $$('[data-edit-rest]', copies[i]),
    img: photos[i].querySelector<HTMLElement>('img'),
  });
  const mark = (i: number) => {
    copies.forEach((c, n) => {
      c.classList.toggle('is-current', n === i);
      c.setAttribute('aria-hidden', String(n !== i));
      c.toggleAttribute('inert', n !== i);
    });
    photos.forEach((p, n) => p.classList.toggle('is-current', n === i));
    tabs.forEach((t, n) => t.setAttribute('aria-current', String(n === i)));
  };
  const play = () => {
    bar?.kill();
    bars.forEach((b) => gsap.set(b, { scaleY: 0 }));
    bar = gsap.fromTo(bars[current], { scaleY: 0 }, { scaleY: 1, duration: DUR, ease: 'none', onComplete: () => go(current + 1) });
    guard.sync();
  };
  const go = (to: number) => {
    const next = ((to % copies.length) + copies.length) % copies.length;
    if (busy || next === current) return;
    busy = true;
    bar?.kill();
    bars.forEach((b) => gsap.set(b, { scaleY: 0 }));
    tabs.forEach((t, n) => t.setAttribute('aria-current', String(n === next)));
    const out = current;
    const o = parts(out);
    const p = parts(next);
    gsap.timeline({
      onComplete: () => {
        busy = false;
        current = next;
        mark(next);
        gsap.set(photos[next], { clearProps: 'zIndex,clipPath' });
        gsap.set(photos[out], { clearProps: 'visibility,zIndex' });
        gsap.set([...o.words, ...o.rest], { clearProps: 'transform,opacity' });
        play();
      },
    })
      .set(photos[next], { visibility: 'visible', zIndex: 2 })
      .fromTo(photos[next], { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.15, ease: 'expo.inOut' }, 0)
      .fromTo(p.img, { scale: 1.25 }, { scale: 1, duration: 1.7, ease: 'expo.out' }, 0.1)
      .to(o.words, { yPercent: -120, duration: 0.5, ease: 'power3.in', stagger: 0.012 }, 0)
      .to(o.rest, { opacity: 0, y: -14, duration: 0.35, ease: 'power2.in' }, 0)
      .add(() => {
        copies[out].classList.remove('is-current');
        copies[out].setAttribute('aria-hidden', 'true');
        copies[out].setAttribute('inert', '');
        copies[next].classList.add('is-current');
        copies[next].setAttribute('aria-hidden', 'false');
        copies[next].removeAttribute('inert');
        gsap.set(p.words, { yPercent: 120, rotate: 6 });
        gsap.set(p.rest, { opacity: 0 });
      }, 0.7)
      .fromTo(p.words, { yPercent: 120, rotate: 6 }, { yPercent: 0, rotate: 0, duration: 1, stagger: 0.04, ease: 'expo.out' }, 0.72)
      .fromTo(p.rest, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out', clearProps: 'opacity,transform' }, 0.95);
  };

  mark(0);
  const p0 = parts(0);
  const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: play });
  if (veil) intro.fromTo(veil, { opacity: 1 }, { opacity: 0, duration: 1.1, ease: 'power2.out' }, 0);
  intro.fromTo(p0.img, { scale: 1.2 }, { scale: 1, duration: 2.2 }, 0);
  intro.fromTo(p0.words, { yPercent: 130, rotate: 8 }, { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.05 }, 0.25);
  intro.fromTo(p0.rest, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, clearProps: 'opacity,transform' }, 0.7);
  intro.fromTo(tabs, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, clearProps: 'opacity,transform' }, 0.9);

  const { signal } = ctl;
  tabs.forEach((t, n) => t.addEventListener('click', () => go(n), { signal }));
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') go(current + 1);
    if (e.key === 'ArrowLeft') go(current - 1);
  }, { signal });

  return () => {
    ctl.abort();
    guard.kill();
    bar?.kill();
    intro.kill();
  };
}

/** Mapa de presencia: el mapa de puntos se abre de izquierda a derecha y cada punto salta al llegar (el único rebote de la página). */
function worldMap(): (() => void) | void {
  const root = document.querySelector<HTMLElement>('[data-worldmap]');
  if (!root) return;
  const land = root.querySelector<SVGElement>('[data-map-land]');
  const pins = $$('[data-pin]', root) as unknown as SVGElement[];
  const places = $$('[data-place]', root);
  const tl = gsap.timeline({ scrollTrigger: once(root, 'top 70%'), defaults: { ease: 'power2.out' } });
  if (land) tl.fromTo(land, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.9, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
  pins.forEach((pin, i) => {
    tl.fromTo(pin.querySelector('.pin-dot'), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.7, ease: 'back.out(2)' }, 0.8 + i * 0.16);
  });
  tl.fromTo(places, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, clearProps: 'opacity,transform' }, 0.5);
  tl.add(() => root.classList.add('is-live'), 1.6);

  const ctl = new AbortController();
  const { signal } = ctl;
  const mark = (id: string | null) => {
    root.classList.toggle('has-focus', !!id);
    pins.forEach((p) => p.classList.toggle('is-active', p.dataset.pin === id));
  };
  places.forEach((pl) => {
    pl.addEventListener('pointerenter', () => mark(pl.dataset.place ?? null), { signal });
    pl.addEventListener('focus', () => mark(pl.dataset.place ?? null), { signal });
    pl.addEventListener('pointerleave', () => mark(null), { signal });
    pl.addEventListener('blur', () => mark(null), { signal });
  });
  return () => {
    ctl.abort();
    tl.kill();
    root.classList.remove('is-live');
  };
}

// ------------------------------------------------------------------
// Transición de página: mosaico de rombos (la forma del isotipo) que crece desde el centro y se retira por el mismo centro
// ------------------------------------------------------------------

let covered = false;
let tiles: HTMLElement[] = [];
let delays: number[] = [];
let tilesFor = '';

/** Dos retículas de rombos desplazadas medio paso cubren el plano sin huecos. Se regeneran solo si cambia el tamaño de la ventana. */
function buildTiles(host: HTMLElement) {
  const vw = innerWidth;
  const vh = innerHeight;
  const key = `${vw}x${vh}`;
  if (key === tilesFor) return;
  tilesFor = key;
  const size = vw < 700 ? 88 : 136;
  const cols = Math.ceil(vw / size) + 2;
  const rows = Math.ceil(vh / size) + 2;
  const cx = vw / 2;
  const cy = vh / 2;
  const maxD = Math.hypot(cx, cy) + size;
  host.textContent = '';
  tiles = [];
  delays = [];
  const frag = document.createDocumentFragment();
  for (let r = -1; r < rows; r++) {
    for (let c = -1; c < cols; c++) {
      for (const off of [0, 0.5]) {
        const x = (c + off) * size;
        const y = (r + off) * size;
        const el = document.createElement('i');
        el.className = (r * 7 + c * 13 + (off ? 5 : 0)) % 17 === 0 ? 'dia is-accent' : 'dia';
        el.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px`;
        frag.appendChild(el);
        tiles.push(el);
        delays.push((Math.hypot(x + size / 2 - cx, y + size / 2 - cy) / maxD) * 0.3);
      }
    }
  }
  host.appendChild(frag);
}

export function curtainIn(): Promise<void> {
  const host = document.querySelector<HTMLElement>('[data-page-diamonds]');
  if (!host) return Promise.resolve();
  covered = true;
  buildTiles(host);
  host.classList.add('is-on');
  return new Promise((res) => {
    gsap.fromTo(tiles, { scale: 0 }, { scale: 1.04, duration: 0.35, ease: 'power2.out', delay: (i: number) => delays[i], onComplete: res });
  });
}

export function curtainOut() {
  const host = document.querySelector<HTMLElement>('[data-page-diamonds]');
  if (!host || !covered) return;
  covered = false;
  gsap.to(tiles, {
    scale: 0, duration: 0.35, ease: 'power2.in', delay: (i: number) => delays[i],
    onComplete: () => host.classList.remove('is-on'),
  });
}

// ------------------------------------------------------------------
// Franjas de los hubs: la foto entra deslizada desde su lado y el texto sube detrás
// ------------------------------------------------------------------

function bands() {
  $$('.stripe').forEach((band, i) => {
    const photo = band.querySelector<HTMLElement>('.stripe-photo');
    const text = $$('.stripe-text p, .stripe-text .stripe-go', band);
    const wide = matchMedia('(min-width: 901px)').matches;
    const from = wide ? { x: i % 2 === 0 ? 90 : -90 } : { y: 36 };
    const tl = gsap.timeline({ scrollTrigger: once(band, 'top 82%') });
    if (photo) tl.fromTo(photo, { opacity: 0, ...from }, { opacity: 1, x: 0, y: 0, duration: 1.1, ease: 'expo.out', clearProps: 'opacity,transform' }, 0);
    if (text.length) tl.fromTo(text, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', stagger: 0.1, clearProps: 'opacity,transform' }, 0.3);
  });
}

// ------------------------------------------------------------------
// Entrada
// ------------------------------------------------------------------

let mm: gsap.MatchMedia | null = null;

export function init() {
  revert();
  mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const cleanups: (() => void)[] = [];
    const keep = (fn: (() => void) | void) => fn && cleanups.push(fn);
    heroIntro();
    keep(editorialHero());
    keep(worldMap());
    declarative();
    bands();
    const inner = gsap.matchMedia();
    // Los estados iniciales ya están aplicados: se retira el pre-ocultado del CSS en el mismo bloque síncrono
    document.documentElement.classList.remove('has-motion');
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => {
      inner.revert();
      cleanups.forEach((fn) => fn());
    };
  });
}

export function revert() {
  mm?.revert();
  mm = null;
}
