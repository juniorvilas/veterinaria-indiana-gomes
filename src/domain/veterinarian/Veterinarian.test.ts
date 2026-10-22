import { describe, expect, it } from 'vitest'
import { educationByRecency, yearsOfPractice, type Education } from './Veterinarian'

describe('yearsOfPractice', () => {
  it('conta os anos desde o início da atuação', () => {
    expect(yearsOfPractice({ practicingSince: 2018 }, 2026)).toBe(8)
    expect(yearsOfPractice({ practicingSince: 2018 }, 2027)).toBe(9)
  })

  it('nunca retorna valor negativo', () => {
    expect(yearsOfPractice({ practicingSince: 2018 }, 2010)).toBe(0)
  })
})

const course = (title: string, startYear: number, endYear: number): Education => ({
  title,
  institution: 'UFRB',
  startYear,
  endYear,
})

describe('educationByRecency', () => {
  it('ordena da formação mais recente para a mais antiga sem alterar a lista original', () => {
    const original = [course('Bacharelado', 2011, 2017), course('Mestrado', 2020, 2023), course('Residência', 2018, 2020)]
    expect(educationByRecency(original).map((e) => e.title)).toEqual(['Mestrado', 'Residência', 'Bacharelado'])
    expect(original[0].title).toBe('Bacharelado')
  })
})
