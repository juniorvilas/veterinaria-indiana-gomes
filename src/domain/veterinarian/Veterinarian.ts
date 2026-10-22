export interface Education {
  title: string
  institution: string
  startYear: number
  endYear: number
}

export interface Veterinarian {
  /** Nome de exibição, ex.: "Dra. Indiana Gomes" */
  displayName: string
  fullName: string
  role: string
  /** Resumo das credenciais em uma frase, para dar confiança logo no topo */
  credentials: string
  /** Ano em que começou a atuar como veterinária */
  practicingSince: number
  bio: string[]
  education: readonly Education[]
  linkedinUrl: string
}

/** Anos de atuação até o ano de referência (nunca negativo). */
export function yearsOfPractice(veterinarian: Pick<Veterinarian, 'practicingSince'>, referenceYear: number): number {
  return Math.max(0, referenceYear - veterinarian.practicingSince)
}

/** Formação da mais recente para a mais antiga. */
export function educationByRecency(education: readonly Education[]): Education[] {
  return [...education].sort((a, b) => b.endYear - a.endYear)
}
