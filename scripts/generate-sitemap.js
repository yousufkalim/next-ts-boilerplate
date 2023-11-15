const fs = require('fs');

function addPage(page) {
  const path = page
    .replace('src/pages', '')
    .replace('.page.ts', '')
    .replace('.page.tsx', '')
    .replace('.page.mdx', '')
    .replace('/index', '/');
  const route = path === '/index' ? '' : path;

  // Exclude 404 page and generated `[]` pages
  if (route.includes('[') || route.includes('404')) return;

  return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_WEBSITE_URL}${route}`}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
}

async function generateSitemap() {
  const { globby } = await import('globby');
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*{.page.ts,.page.tsx,.page.mdx}',
    '!src/pages/_*.tsx',
    '!src/pages/api',
  ]);

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).filter(Boolean).join('\n')}
</urlset>\n`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
