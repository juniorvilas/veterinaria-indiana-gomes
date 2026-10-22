import { describe, expect, it } from 'vitest'
import { PhoneNumber } from './PhoneNumber'

describe('PhoneNumber', () => {
  it('normaliza e formata um celular brasileiro', () => {
    const phone = PhoneNumber.create('+55 75 99133-7966')
    expect(phone.value).toBe('5575991337966')
    expect(phone.e164).toBe('+5575991337966')
    expect(phone.display).toBe('(75) 99133-7966')
  })

  it('formata telefone fixo de 8 dígitos', () => {
    expect(PhoneNumber.create('55 71 3333-4444').display).toBe('(71) 3333-4444')
  })

  it('rejeita número sem DDI ou incompleto', () => {
    expect(() => PhoneNumber.create('75 99133-7966')).toThrow(/Telefone inválido/)
    expect(() => PhoneNumber.create('+55 75 9913')).toThrow(/Telefone inválido/)
  })
})
