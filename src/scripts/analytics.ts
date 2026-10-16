// Medición con Google Analytics 4. Los eventos se detectan por el destino del enlace
// (WhatsApp, teléfono, correo) o por atributos data-ga-* que se agregan al elemento.
// Nombres de eventos: ver references/analytics-search-console.md.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

if (typeof document !== 'undefined') {
  // Un solo listener delegado (este módulo se importa una vez, aunque ClientRouter cambie de página)
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement)?.closest<HTMLElement>('a, button, [data-ga-event]');
    if (!el) return;

    const params: Record<string, unknown> = { page_path: location.pathname };
    for (const { name, value } of Array.from(el.attributes)) {
      if (name.startsWith('data-ga-') && name !== 'data-ga-event') {
        params[name.slice(8).replace(/-/g, '_')] = value;
      }
    }

    // 1) Evento explícito
    if (el.dataset.gaEvent) return trackEvent(el.dataset.gaEvent, params);

    // 2) Detección automática por destino del enlace
    const href = (el as HTMLAnchorElement).href ?? '';
    if (href.startsWith('tel:')) trackEvent('phone_click', params);
    else if (href.startsWith('mailto:')) trackEvent('email_click', params);
    else if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
      trackEvent('whatsapp_click', { ...params, location: el.closest('[data-wa-fab]') ? 'fab' : 'page' });
    }
  });

  // ClientRouter: la primera carga ya la mide gtag('config'); las navegaciones internas se envían a mano
  let first = true;
  document.addEventListener('astro:page-load', () => {
    if (first) return void (first = false);
    trackEvent('page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: location.pathname,
    });
  });
}
