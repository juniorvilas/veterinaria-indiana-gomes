import type { SeoMetadata, StructuredData } from '@/application/use-cases/buildSeo'

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Impede que um "</script>" dentro do JSON feche a tag antes da hora. */
const serializeJsonLd = (data: StructuredData) => JSON.stringify(data).replace(/</g, '\\u003c')

const meta = (attr: 'name' | 'property', key: string, content: string) =>
  `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`

interface HeadOptions {
  metadata: SeoMetadata
  structuredData: StructuredData
  googleSiteVerification?: string
}

/** Tags de SEO do <head>, geradas a partir do domínio para não duplicar conteúdo. */
export function renderHead({ metadata, structuredData, googleSiteVerification }: HeadOptions): string {
  const { title, description, siteName, locale, canonicalUrl, imageUrl, imageAlt } = metadata

  return [
    `<title>${escapeHtml(title)}</title>`,
    meta('name', 'description', description),
    meta('name', 'robots', 'index, follow, max-image-preview:large'),
    canonicalUrl && `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    googleSiteVerification && meta('name', 'google-site-verification', googleSiteVerification),

    meta('property', 'og:type', 'website'),
    meta('property', 'og:locale', locale),
    meta('property', 'og:site_name', siteName),
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    canonicalUrl && meta('property', 'og:url', canonicalUrl),
    meta('property', 'og:image', imageUrl),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', imageAlt),

    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
    meta('name', 'twitter:image', imageUrl),

    `<script type="application/ld+json">${serializeJsonLd(structuredData)}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ')
}
