// Ciclo de servicios: elegir un servicio (clic, teclado o cursor) abre su texto y cambia la foto. No usa GSAP: es funcional, no decorativo.
export {};

function bind() {
  document.querySelectorAll<HTMLElement>('[data-cycle]').forEach((root) => {
    if (root.dataset.bound) return;
    root.dataset.bound = '1';
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-cycle-item]'));
    const tabs = Array.from(root.querySelectorAll<HTMLElement>('[data-cycle-tab]'));
    const shots = Array.from(root.querySelectorAll<HTMLElement>('[data-cycle-shot]'));
    const set = (i: number) => {
      items.forEach((it, n) => it.classList.toggle('is-active', n === i));
      tabs.forEach((t, n) => t.setAttribute('aria-expanded', String(n === i)));
      shots.forEach((s, n) => s.classList.toggle('is-active', n === i));
    };
    root.classList.add('is-js');
    tabs.forEach((t, i) => t.addEventListener('click', () => set(i)));
    if (matchMedia('(hover: hover) and (min-width: 901px)').matches) items.forEach((it, i) => it.addEventListener('pointerenter', () => set(i)));
    set(0);
  });
}

document.addEventListener('astro:page-load', bind);
