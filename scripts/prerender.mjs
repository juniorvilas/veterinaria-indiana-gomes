// Gera o HTML final de dist/ com a página já renderizada e as tags de SEO,
// além de robots.txt e sitemap.xml. Roda depois do build do cliente e do SSR.
import { readFile, rm, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const serverBuild = new URL('../dist-server/', import.meta.url)

const server = await import(new URL('entry-server.js', serverBuild).href)

const indexFile = new URL('index.html', dist)
const template = await readFile(indexFile, 'utf8')

for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`Marcador ${marker} não encontrado em dist/index.html`)
}

const html = template
  .replace('<!--app-head-->', () => server.renderHeadHtml())
  .replace('<!--app-html-->', () => server.renderAppHtml())

await writeFile(indexFile, html)
await writeFile(new URL('robots.txt', dist), server.renderRobots())

const sitemap = server.renderSitemap()
if (sitemap) {
  await writeFile(new URL('sitemap.xml', dist), sitemap)
} else {
  console.warn('\n⚠ VITE_SITE_URL não definida: canonical, sitemap.xml e URLs absolutas de compartilhamento foram omitidos.\n')
}

await rm(serverBuild, { recursive: true, force: true })
console.log(`✓ página pré-renderizada${server.siteUrl ? ` para ${server.siteUrl}` : ''}`)
