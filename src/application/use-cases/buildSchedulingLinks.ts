import type { ContactChannels } from '@/domain/practice/HomeVisitPractice'

export const SchedulingMessage = {
  booking: 'Olá, Dra. Indiana! Gostaria de agendar uma consulta em casa para meu pet.',
  coverage: 'Olá, Dra. Indiana! Você atende no meu bairro?',
} as const

export type SchedulingIntent = keyof typeof SchedulingMessage

export interface SchedulingLinks {
  whatsapp: (intent?: SchedulingIntent) => string
  /** WhatsApp com um texto livre, ex.: a mensagem do montador */
  whatsappWithText: (text: string) => string
  /** Perfil do Instagram */
  instagram: string
  /** Conversa direta no Instagram, para agendar */
  instagramDirect: string
  phone: string
}

export function buildSchedulingLinks({ whatsapp, instagram }: ContactChannels): SchedulingLinks {
  const whatsappWithText = (text: string) => `https://wa.me/${whatsapp.value}?text=${encodeURIComponent(text)}`

  return {
    whatsapp: (intent = 'booking') => whatsappWithText(SchedulingMessage[intent]),
    whatsappWithText,
    instagram: instagram.url,
    instagramDirect: instagram.directUrl,
    phone: `tel:${whatsapp.e164}`,
  }
}
