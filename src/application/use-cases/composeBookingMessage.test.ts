import { describe, expect, it } from 'vitest'
import { normalizeNeighborhood } from '@/domain/booking/BookingRequest'
import { StaticPracticeRepository } from '@/infrastructure/content/StaticPracticeRepository'
import { SchedulingMessage, buildSchedulingLinks } from './buildSchedulingLinks'
import { composeBookingMessage } from './composeBookingMessage'

const practice = new StaticPracticeRepository().get()

describe('composeBookingMessage', () => {
  it('sem escolhas, gera a mesma mensagem padrão dos botões', () => {
    expect(composeBookingMessage(practice, {})).toBe(SchedulingMessage.booking)
  })

  it('usa uma consulta em casa quando o motivo não foi escolhido', () => {
    expect(composeBookingMessage(practice, { species: 'dog' })).toBe(
      'Olá, Dra. Indiana! Gostaria de agendar uma consulta em casa para meu cão.',
    )
  })

  it('inclui o serviço escolhido e o bairro', () => {
    expect(composeBookingMessage(practice, { species: 'cat', serviceId: 'vacinacao', neighborhood: ' Itapuã ' })).toBe(
      'Olá, Dra. Indiana! Gostaria de agendar uma consulta em casa para meu gato. Motivo: Vacinação. Moro em Itapuã.',
    )
  })

  it('ignora um serviço que não existe', () => {
    expect(composeBookingMessage(practice, { species: 'cat', serviceId: 'banho' })).not.toContain('Motivo')
  })

  it('gera um link do WhatsApp com a mensagem codificada', () => {
    const text = composeBookingMessage(practice, { species: 'dog', neighborhood: 'Vilas do Atlântico & cia' })
    const url = new URL(buildSchedulingLinks(practice.contacts).whatsappWithText(text))
    expect(url.searchParams.get('text')).toBe(text)
  })
})

describe('normalizeNeighborhood', () => {
  it('remove espaços e quebras de linha extras', () => {
    expect(normalizeNeighborhood('  Vilas \n do   Atlântico ')).toBe('Vilas do Atlântico')
  })

  it('retorna undefined para vazio e limita o tamanho', () => {
    expect(normalizeNeighborhood('   ')).toBeUndefined()
    expect(normalizeNeighborhood('a'.repeat(200))).toHaveLength(60)
  })
})
