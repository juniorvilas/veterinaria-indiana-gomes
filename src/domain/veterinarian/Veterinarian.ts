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
  bio: string[]
  education: readonly Education[]
  linkedinUrl: string
}

/** Formação da mais recente para a mais antiga. */
export function educationByRecency(education: readonly Education[]): Education[] {
  return [...education].sort((a, b) => b.endYear - a.endYear)
}
