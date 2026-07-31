import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const template = await readFile(join(dist, 'index.html'), 'utf8');
const sitemap = await readFile(join(root, 'public', 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>https:\/\/www\.scafatiwoodworks\.com([^<]*)<\/loc>/g)]
  .map((match) => match[1] || '/');

function removeDefaultSeo(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta name="description"[^>]*>/i, '')
    .replace(/\s*<link rel="canonical"[^>]*>/i, '')
    .replace(/\s*<meta property="og:(?:title|description|image|image:width|image:height|type|url|site_name|locale)"[^>]*>/gi, '')
    .replace(/\s*<meta name="twitter:(?:card|title|description|image)"[^>]*>/gi, '');
}

function removeRenderedSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta[^>]*>/gi, '')
    .replace(/<link rel="canonical"[^>]*>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
}

function extractRenderedSeo(html) {
  const patterns = [
    /<title>[\s\S]*?<\/title>/gi,
    /<meta[^>]*>/gi,
    /<link rel="canonical"[^>]*>/gi,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/gi,
  ];
  return patterns.flatMap((pattern) => html.match(pattern) || []).join('\n');
}

for (const url of urls) {
  const { appHtml } = render(url);
  const headHtml = extractRenderedSeo(appHtml);
  const html = removeDefaultSeo(template)
    .replace('</head>', `    ${headHtml}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${removeRenderedSeo(appHtml)}</div>`);
  const output = url === '/' ? join(dist, 'index.html') : join(dist, `${url.slice(1)}.html`);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

await rm(join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${urls.length} routes.`);
