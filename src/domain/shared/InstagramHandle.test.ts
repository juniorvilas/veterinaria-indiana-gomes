import { describe, expect, it } from 'vitest'
import { InstagramHandle } from './InstagramHandle'

describe('InstagramHandle', () => {
  it.each(['@indianagomes_vet', 'indianagomes_vet', 'https://www.instagram.com/indianagomes_vet/'])(
    'aceita o formato %s',
    (raw) => {
      const handle = InstagramHandle.create(raw)
      expect(handle.display).toBe('@indianagomes_vet')
      expect(handle.url).toBe('https://www.instagram.com/indianagomes_vet/')
    },
  )

  it('rejeita perfil com caracteres inválidos', () => {
    expect(() => InstagramHandle.create('@perfil inválido')).toThrow(/Instagram inválido/)
  })
})
