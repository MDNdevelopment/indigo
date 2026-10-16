import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { getT, localePath } from '../i18n';
import { projects, projectText, countryNames } from '../data/projects';
import { services } from '../data/services';
import { sectors } from '../data/sectors';

export const GET: APIRoute = () => {
  const root = site.url.replace(/\/$/, '');
  const t = getT('es');
  const url = (p: string) => `${root}${localePath('es', p)}`;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${t.description}`,
    '',
    '## Servicios',
    ...services.map((s) => `- [${s.es.title}](${url(`/servicios/${s.id}`)}): ${s.es.lead}`),
    '',
    '## Sectores',
    ...sectors.map((s) => `- [${s.es.title}](${url(`/sectores/${s.id}`)}): ${s.es.short}`),
    '',
    '## Proyectos',
    ...projects.map((p) => `- [${projectText(p, 'es').title}](${url(`/proyectos/${p.slug}`)}): ${countryNames[p.country].es}. ${projectText(p, 'es').summary}`),
    '',
    '## Contacto',
    `- Correo: ${site.email}`,
    `- Teléfono: ${site.phone}`,
    `- Dirección: ${site.address.street}, ${site.address.city}`,
    '',
    `Versión en inglés: ${root}/en`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
