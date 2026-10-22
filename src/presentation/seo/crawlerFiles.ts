export function renderRobotsTxt(siteUrl?: string): string {
  const lines = ['User-agent: *', 'Allow: /']
  if (siteUrl) lines.push('', `Sitemap: ${new URL('sitemap.xml', siteUrl).href}`)
  return `${lines.join('\n')}\n`
}

export function renderSitemapXml(siteUrl: string, lastModified: Date): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${lastModified.toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`
}
