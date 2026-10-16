import { es } from './es';
import { en } from './en';
import type { Lang } from '../config/site';
import { enSlugs } from './routes';

export type { Lang };
export const langs: Lang[] = ['es', 'en'];
export const defaultLang: Lang = 'es';

const dicts = { es, en } as const;
export const getT = (lang: Lang) => dicts[lang];
export type Dict = typeof es;

/**
 * Recibe siempre la ruta en español (la que usan los datos y los componentes).
 * Español sin prefijo; inglés con /en y cada tramo traducido (ver routes.ts).
 */
export function localePath(lang: Lang, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return p;
  const translated = p.split('/').map((seg) => enSlugs[seg] ?? seg).join('/');
  return p === '/' ? `/${lang}` : `/${lang}${translated}`;
}

/** Slug de un tramo en el idioma dado (para getStaticPaths). */
export const slugFor = (lang: Lang, slug: string) => (lang === defaultLang ? slug : (enSlugs[slug] ?? slug));

/** Rutas equivalentes en cada idioma (para hreflang y el selector de idioma). */
export const alternates = (path = '/') => Object.fromEntries(langs.map((l) => [l, localePath(l, path)])) as Record<Lang, string>;
