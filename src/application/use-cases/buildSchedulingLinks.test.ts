import { describe, expect, it } from 'vitest'
import { InstagramHandle } from '@/domain/shared/InstagramHandle'
import { PhoneNumber } from '@/domain/shared/PhoneNumber'
import { SchedulingMessage, buildSchedulingLinks } from './buildSchedulingLinks'

const links = buildSchedulingLinks({
  whatsapp: PhoneNumber.create('+55 75 99133-7966'),
  instagram: InstagramHandle.create('@indianagomes_vet'),
})

describe('buildSchedulingLinks', () => {
  it('gera link do WhatsApp com a mensagem de agendamento por padrão', () => {
    const url = new URL(links.whatsapp())
    expect(url.origin + url.pathname).toBe('https://wa.me/5575991337966')
    expect(url.searchParams.get('text')).toBe(SchedulingMessage.booking)
  })

  it('usa a mensagem da intenção escolhida', () => {
    expect(new URL(links.whatsapp('coverage')).searchParams.get('text')).toBe(SchedulingMessage.coverage)
  })

  it('expõe Instagram e telefone', () => {
    expect(links.instagram).toBe('https://www.instagram.com/indianagomes_vet/')
    expect(links.phone).toBe('tel:+5575991337966')
  })
})
