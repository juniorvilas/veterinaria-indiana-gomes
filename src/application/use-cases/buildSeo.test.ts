import { describe, expect, it } from 'vitest'
import { StaticPracticeRepository } from '@/infrastructure/content/StaticPracticeRepository'
import { buildSeoMetadata, buildStructuredData, normalizeSiteUrl } from './buildSeo'

const practice = new StaticPracticeRepository().get()
const siteUrl = 'https://exemplo.com.br/'
const referenceYear = 2026

type Node = Record<string, unknown> & { '@type': string }
const graphOf = (data: Record<string, unknown>) => data['@graph'] as Node[]
const nodeOfType = (data: Record<string, unknown>, type: string) => graphOf(data).find((node) => node['@type'] === type)!

describe('normalizeSiteUrl', () => {
  it('garante a barra final e ignora valor vazio', () => {
    expect(normalizeSiteUrl('https://exemplo.com.br')).toBe('https://exemplo.com.br/')
    expect(normalizeSiteUrl(' ')).toBeUndefined()
    expect(normalizeSiteUrl(undefined)).toBeUndefined()
  })

  it('rejeita URL inválida para não publicar canonical quebrado', () => {
    expect(() => normalizeSiteUrl('exemplo.com.br')).toThrow()
  })
})

describe('buildSeoMetadata', () => {
  it('coloca serviço, cidades e nome no título', () => {
    const { title } = buildSeoMetadata(practice, { siteUrl, referenceYear })
    expect(title).toBe('Veterinária a domicílio em Lauro de Freitas e Salvador | Dra. Indiana Gomes')
  })

  it('usa URLs absolutas quando o domínio está configurado', () => {
    const metadata = buildSeoMetadata(practice, { siteUrl, referenceYear })
    expect(metadata.canonicalUrl).toBe(siteUrl)
    expect(metadata.imageUrl).toBe('https://exemplo.com.br/img/og-image.jpg')
  })

  it('cita o tempo de atuação na descrição', () => {
    expect(buildSeoMetadata(practice, { siteUrl, referenceYear }).description).toContain('veterinária há 8 anos')
  })

  it('omite canonical sem domínio configurado', () => {
    const metadata = buildSeoMetadata(practice, { referenceYear })
    expect(metadata.canonicalUrl).toBeUndefined()
    expect(metadata.imageUrl).toBe('/img/og-image.jpg')
  })
})

describe('buildStructuredData', () => {
  const data = buildStructuredData(practice, { siteUrl, referenceYear })

  it('descreve o atendimento veterinário com telefone, cidade e áreas', () => {
    const care = nodeOfType(data, 'VeterinaryCare')
    expect(care.telephone).toBe('+5575991337966')
    expect(care.address).toMatchObject({ addressLocality: 'Lauro de Freitas', addressRegion: 'BA' })
    expect(care.areaServed).toHaveLength(practice.areas.length)
  })

  it('inclui a formação da veterinária e todas as perguntas frequentes', () => {
    expect(nodeOfType(data, 'Person').hasCredential).toHaveLength(practice.veterinarian.education.length)
    expect(nodeOfType(data, 'FAQPage').mainEntity).toHaveLength(practice.faq.length)
  })
})
