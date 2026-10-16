import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
      filter: (page) => !page.endsWith('/404'),
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  // Cambiar de marca: nombres y variables aquí + bloque @theme en global.css
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-display-src',
      options: { weights: ['500 700'], styles: ['normal'], subsets: ['latin'] },
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-body-src',
      options: { weights: ['400', '500', '600'], styles: ['normal'], subsets: ['latin'] },
    },
  ],
});
