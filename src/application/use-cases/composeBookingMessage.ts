import { normalizeNeighborhood, type BookingRequest } from '@/domain/booking/BookingRequest'
import type { HomeVisitPractice, Species } from '@/domain/practice/HomeVisitPractice'

const petLabel: Record<Species, string> = { dog: 'meu cão', cat: 'meu gato' }

/** Monta a mensagem de agendamento que abre preenchida no WhatsApp. */
export function composeBookingMessage(practice: HomeVisitPractice, request: BookingRequest): string {
  const service = practice.services.find((item) => item.id === request.serviceId)
  const neighborhood = normalizeNeighborhood(request.neighborhood)
  const pet = request.species ? petLabel[request.species] : 'meu pet'

  const lines = [`Olá, Dra. Indiana! Gostaria de agendar uma consulta em casa para ${pet}.`]
  if (service) lines.push(`Motivo: ${service.name}.`)
  if (neighborhood) lines.push(`Moro em ${neighborhood}.`)

  return lines.join(' ')
}
