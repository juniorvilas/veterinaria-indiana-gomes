import { renderToString } from 'react-dom/server'
import { buildSeoMetadata, buildStructuredData } from '@/application/use-cases/buildSeo'
import { googleSiteVerification, practice, siteUrl } from '@/composition'
import { Root } from '@/Root'
import { renderRobotsTxt, renderSitemapXml } from '@/presentation/seo/crawlerFiles'
import { renderHead } from '@/presentation/seo/renderHead'

export { siteUrl }

export function renderAppHtml(): string {
  return renderToString(<Root />)
}

export function renderHeadHtml(): string {
  return renderHead({
    metadata: buildSeoMetadata(practice, siteUrl),
    structuredData: buildStructuredData(practice, siteUrl),
    googleSiteVerification,
  })
}

export function renderRobots(): string {
  return renderRobotsTxt(siteUrl)
}

export function renderSitemap(lastModified = new Date()): string | undefined {
  return siteUrl ? renderSitemapXml(siteUrl, lastModified) : undefined
}
