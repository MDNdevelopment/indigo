// Aviso de cookies. Listeners delegados: funcionan aunque ClientRouter cambie de página.
const KEY = 'mdn-cookie-consent';
const banner = () => document.querySelector<HTMLElement>('[data-cookie-banner]');
const read = () => {
  try { return localStorage.getItem(KEY); } catch { return null; }
};
const save = (v: string | null) => {
  try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); } catch {}
};
const consent = (state: 'granted' | 'denied') => window.gtag?.('consent', 'update', { analytics_storage: state });

// En cada página (la primera y las que carga ClientRouter) se decide si el aviso se muestra
document.addEventListener('astro:page-load', () => {
  const v = read();
  if (v === 'accepted') consent('granted');
  else if (v !== 'rejected') banner()?.removeAttribute('hidden');
});

document.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  if (t.closest('[data-cookie-accept]')) {
    save('accepted');
    consent('granted');
    banner()?.setAttribute('hidden', '');
  } else if (t.closest('[data-cookie-reject]')) {
    save('rejected');
    consent('denied');
    banner()?.setAttribute('hidden', '');
  } else if (t.closest('[data-cookie-settings]')) {
    // "Configurar cookies" del footer: borra la decisión y vuelve a preguntar
    save(null);
    consent('denied');
    banner()?.removeAttribute('hidden');
  }
});
