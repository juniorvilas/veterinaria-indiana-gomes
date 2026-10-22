import type { Species } from '@/domain/practice/HomeVisitPractice'

/** O que o tutor escolhe antes de chamar no WhatsApp. */
export interface BookingRequest {
  /** Ausente enquanto o tutor não escolheu entre cão e gato */
  species?: Species
  /** id de um VetService; ausente quando o tutor ainda não sabe o motivo */
  serviceId?: string
  neighborhood?: string
}

export const NEIGHBORHOOD_MAX_LENGTH = 60

/** Limpa o bairro digitado: espaços extras, quebras de linha e tamanho máximo. */
export function normalizeNeighborhood(raw: string | undefined): string | undefined {
  const clean = raw?.replace(/\s+/g, ' ').trim().slice(0, NEIGHBORHOOD_MAX_LENGTH).trim()
  return clean || undefined
}
