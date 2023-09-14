// generateSitemap.js

import fs from 'fs';

const baseUrl = 'https://www.saraannapolimeno.it';
const routes = [
  '/',
  '/chisono',
  '/laprimavisita',
  '/contatti',
];

const sitemapXml = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
      <url>
        <loc>${baseUrl}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      `;
    })
    .join('')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemapXml);

console.log('Sitemap generata con successo.');

