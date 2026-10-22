import type { InstagramHandle } from '@/domain/shared/InstagramHandle'
import type { PhoneNumber } from '@/domain/shared/PhoneNumber'
import type { Veterinarian } from '@/domain/veterinarian/Veterinarian'

export type Species = 'dog' | 'cat'

export type BenefitKind = 'calm' | 'no-commute' | 'routine'

export interface Benefit {
  kind: BenefitKind
  title: string
  description: string
}

export interface VetService {
  id: string
  name: string
  description: string
}

export interface ServiceArea {
  name: string
}

export interface FaqItem {
  question: string
  answer: string
}

/** Cidade-base do atendimento, usada no endereço público. */
export interface BaseLocation {
  city: string
  /** Sigla do estado, ex.: "BA" */
  region: string
  /** Código ISO do país, ex.: "BR" */
  country: string
}

export interface ContactChannels {
  whatsapp: PhoneNumber
  instagram: InstagramHandle
}

/**
 * Agregado raiz: o atendimento veterinário domiciliar.
 * Reúne quem atende, onde, para quais espécies e como agendar.
 */
export interface HomeVisitPractice {
  veterinarian: Veterinarian
  contacts: ContactChannels
  location: BaseLocation
  species: readonly Species[]
  areas: readonly ServiceArea[]
  services: readonly VetService[]
  benefits: readonly Benefit[]
  faq: readonly FaqItem[]
}
