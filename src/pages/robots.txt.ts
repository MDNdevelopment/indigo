import type { APIRoute } from 'astro';
import { site } from '../config/site';

const bots = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended'];

export const GET: APIRoute = () => {
  const root = site.url.replace(/\/$/, '');
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${root}/sitemap-index.xml`,
    `# llms.txt: ${root}/llms.txt`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
