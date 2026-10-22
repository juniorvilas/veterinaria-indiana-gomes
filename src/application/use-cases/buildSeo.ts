import type { HomeVisitPractice } from '@/domain/practice/HomeVisitPractice'
import { yearsOfPractice } from '@/domain/veterinarian/Veterinarian'

export interface SeoMetadata {
  title: string
  description: string
  siteName: string
  locale: 'pt_BR'
  /** Ausente enquanto o domínio do site não estiver configurado */
  canonicalUrl?: string
  imageUrl: string
  imageAlt: string
}

export type StructuredData = Record<string, unknown>

const SHARE_IMAGE_PATH = '/img/og-image.jpg'
const LOGO_PATH = '/img/logo.png'

const listFormat = new Intl.ListFormat('pt-BR', { style: 'long', type: 'conjunction' })

/** Normaliza a URL do site com barra final; retorna undefined se não houver uma URL válida. */
export function normalizeSiteUrl(raw: string | undefined): string | undefined {
  if (!raw?.trim()) return undefined
  const url = new URL(raw.trim())
  url.pathname = url.pathname.replace(/\/?$/, '/')
  return url.href
}

function absolute(path: string, siteUrl: string | undefined): string {
  return siteUrl ? new URL(path.replace(/^\//, ''), siteUrl).href : path
}

export interface SeoOptions {
  /** Domínio público; sem ele, canonical e URLs absolutas são omitidos */
  siteUrl?: string
  /** Ano usado para calcular o tempo de atuação */
  referenceYear: number
}

export function buildSeoMetadata(practice: HomeVisitPractice, { siteUrl, referenceYear }: SeoOptions): SeoMetadata {
  const { veterinarian, contacts, areas } = practice
  const mainCities = listFormat.format(areas.slice(0, 2).map((area) => area.name))
  const allAreas = listFormat.format(areas.map((area) => area.name))
  const years = yearsOfPractice(veterinarian, referenceYear)

  return {
    title: `Veterinária a domicílio em ${mainCities} | ${veterinarian.displayName}`,
    description: `Consulta veterinária em casa para cães e gatos em ${allAreas}, com a ${veterinarian.displayName}, veterinária há ${years} anos. Agende pelo WhatsApp ${contacts.whatsapp.display}.`,
    siteName: `${veterinarian.displayName} – Veterinária a domicílio`,
    locale: 'pt_BR',
    canonicalUrl: siteUrl,
    imageUrl: absolute(SHARE_IMAGE_PATH, siteUrl),
    imageAlt: `${veterinarian.displayName} segurando um gato no colo`,
  }
}

/** JSON-LD (schema.org) para o Google entender quem atende, onde e o quê. */
export function buildStructuredData(practice: HomeVisitPractice, options: SeoOptions): StructuredData {
  const { siteUrl, referenceYear } = options
  const { veterinarian, contacts, location, areas, services, faq } = practice
  const id = (fragment: string) => absolute(`#${fragment}`, siteUrl)
  const metadata = buildSeoMetadata(practice, options)
  const years = yearsOfPractice(veterinarian, referenceYear)

  const institutions = [...new Set(veterinarian.education.map((course) => course.institution))]

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': id('site'),
        name: metadata.siteName,
        inLanguage: 'pt-BR',
        ...(siteUrl && { url: siteUrl }),
      },
      {
        '@type': 'VeterinaryCare',
        '@id': id('atendimento'),
        name: metadata.siteName,
        description: metadata.description,
        ...(siteUrl && { url: siteUrl }),
        image: metadata.imageUrl,
        logo: absolute(LOGO_PATH, siteUrl),
        telephone: contacts.whatsapp.e164,
        address: {
          '@type': 'PostalAddress',
          addressLocality: location.city,
          addressRegion: location.region,
          addressCountry: location.country,
        },
        areaServed: areas.map((area) => ({ '@type': 'Place', name: area.name })),
        sameAs: [contacts.instagram.url, veterinarian.linkedinUrl],
        employee: { '@id': id('veterinaria') },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Atendimento veterinário domiciliar para cães e gatos',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: service.name, description: service.description },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': id('veterinaria'),
        name: veterinarian.fullName,
        jobTitle: veterinarian.role,
        description: `Veterinária há ${years} anos. ${veterinarian.credentials}`,
        image: absolute('/img/dra-indiana-retrato-800.jpg', siteUrl),
        sameAs: [veterinarian.linkedinUrl, contacts.instagram.url],
        alumniOf: institutions.map((name) => ({ '@type': 'EducationalOrganization', name })),
        hasCredential: veterinarian.education.map((course) => ({
          '@type': 'EducationalOccupationalCredential',
          name: course.title,
          recognizedBy: { '@type': 'EducationalOrganization', name: course.institution },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': id('duvidas'),
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }
}
