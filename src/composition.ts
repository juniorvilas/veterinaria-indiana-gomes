import { normalizeSiteUrl } from '@/application/use-cases/buildSeo'
import { StaticPracticeRepository } from '@/infrastructure/content/StaticPracticeRepository'

// Raiz de composição: escolhe as implementações concretas, usada pelo cliente e pelo pré-render.
export const practice = new StaticPracticeRepository().get()

export const referenceYear = __BUILD_YEAR__

export const siteUrl = normalizeSiteUrl(import.meta.env.VITE_SITE_URL)

export const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim() || undefined
