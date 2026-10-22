import type { ContactChannels } from '@/domain/practice/HomeVisitPractice'

export const SchedulingMessage = {
  booking: 'Olá, Dra. Indiana! Gostaria de agendar uma consulta em casa para meu pet.',
  coverage: 'Olá, Dra. Indiana! Você atende no meu bairro?',
} as const

export type SchedulingIntent = keyof typeof SchedulingMessage

export interface SchedulingLinks {
  whatsapp: (intent?: SchedulingIntent) => string
  instagram: string
  phone: string
}

export function buildSchedulingLinks({ whatsapp, instagram }: ContactChannels): SchedulingLinks {
  return {
    whatsapp: (intent = 'booking') =>
      `https://wa.me/${whatsapp.value}?text=${encodeURIComponent(SchedulingMessage[intent])}`,
    instagram: instagram.url,
    phone: `tel:${whatsapp.e164}`,
  }
}
