import { site } from '../config/site';
import type { Lang } from '../config/site';
import { getT, localePath } from '../i18n';

const base = site.url.replace(/\/$/, '');
export const abs = (path: string) => new URL(path, base + '/').toString();

export function baseGraph(lang: Lang = 'es') {
  const t = getT(lang);
  return [
    {
      '@type': ['Organization', site.schemaType],
      '@id': `${base}/#org`,
      name: site.name,
      legalName: site.legalName,
      url: base,
      logo: abs('/favicon.svg'),
      description: t.description,
      email: site.email,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      sameAs: Object.values(site.social).filter(Boolean),
    },
    {
      '@type': 'WebSite',
      '@id': `${base}/#site`,
      url: base,
      name: site.name,
      inLanguage: lang,
      publisher: { '@id': `${base}/#org` },
    },
  ];
}

export const breadcrumbSchema = (lang: Lang, items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(localePath(lang, it.path)),
  })),
});
