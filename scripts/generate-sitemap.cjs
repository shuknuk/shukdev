const { writeFileSync, mkdirSync } = require('fs');
const path = require('path');

(function generate() {
  try {
    const hostname = 'https://kinshuk-goel.vercel.app';
    const links = [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/projects', changefreq: 'monthly', priority: 0.8 },
      { url: '/blog', changefreq: 'monthly', priority: 0.6 },
      // Add more routes here as your site grows
    ];

    const sitemapPath = path.join(__dirname, '..', 'public');
    mkdirSync(sitemapPath, { recursive: true });

    const items = links.map(link => {
      const loc = `${hostname}${link.url}`;
      const lastmod = new Date().toISOString();
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${link.changefreq}</changefreq>\n    <priority>${link.priority}</priority>\n  </url>`;
    }).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;

    const outPath = path.join(sitemapPath, 'sitemap.xml');
    writeFileSync(outPath, xml, 'utf8');
    console.log('sitemap.xml written to', outPath);
  } catch (err) {
    console.error('Failed to generate sitemap', err);
    process.exit(1);
  }
})();
