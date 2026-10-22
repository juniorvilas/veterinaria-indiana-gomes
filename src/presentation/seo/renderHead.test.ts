import { describe, expect, it } from 'vitest'
import type { SeoMetadata } from '@/application/use-cases/buildSeo'
import { renderHead } from './renderHead'

const metadata: SeoMetadata = {
  title: 'Cães & gatos "em casa"',
  description: 'Descrição',
  siteName: 'Site',
  locale: 'pt_BR',
  imageUrl: '/img/og-image.jpg',
  imageAlt: 'Foto',
}

describe('renderHead', () => {
  it('escapa texto do título e dos atributos', () => {
    const html = renderHead({ metadata, structuredData: {} })
    expect(html).toContain('<title>Cães &amp; gatos &quot;em casa&quot;</title>')
    expect(html).toContain('content="Cães &amp; gatos &quot;em casa&quot;"')
  })

  it('não deixa o JSON-LD fechar a tag script', () => {
    const html = renderHead({ metadata, structuredData: { text: '</script><script>alert(1)' } })
    expect(html).not.toContain('</script><script>')
    expect(html).toContain('\\u003c/script>')
  })

  it('só inclui canonical e verificação do Google quando configurados', () => {
    const bare = renderHead({ metadata, structuredData: {} })
    expect(bare).not.toContain('canonical')
    expect(bare).not.toContain('google-site-verification')

    const full = renderHead({
      metadata: { ...metadata, canonicalUrl: 'https://exemplo.com.br/' },
      structuredData: {},
      googleSiteVerification: 'abc123',
    })
    expect(full).toContain('<link rel="canonical" href="https://exemplo.com.br/" />')
    expect(full).toContain('<meta name="google-site-verification" content="abc123" />')
  })
})
