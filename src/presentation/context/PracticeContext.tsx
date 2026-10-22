import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { buildSchedulingLinks, type SchedulingLinks } from '@/application/use-cases/buildSchedulingLinks'
import type { HomeVisitPractice } from '@/domain/practice/HomeVisitPractice'
import { yearsOfPractice } from '@/domain/veterinarian/Veterinarian'

interface PracticeContextValue {
  practice: HomeVisitPractice
  links: SchedulingLinks
  experienceYears: number
}

interface PracticeProviderProps {
  practice: HomeVisitPractice
  /** Ano usado para calcular o tempo de atuação */
  referenceYear: number
  children: ReactNode
}

const PracticeContext = createContext<PracticeContextValue | null>(null)

export function PracticeProvider({ practice, referenceYear, children }: PracticeProviderProps) {
  // O pré-render usa o ano do build; no navegador, troca pelo ano atual depois da hidratação,
  // assim o tempo de atuação se atualiza sozinho mesmo sem um novo deploy.
  const [currentYear, setCurrentYear] = useState(referenceYear)
  useEffect(() => setCurrentYear(new Date().getFullYear()), [])

  const value = useMemo(
    () => ({
      practice,
      links: buildSchedulingLinks(practice.contacts),
      experienceYears: yearsOfPractice(practice.veterinarian, currentYear),
    }),
    [practice, currentYear],
  )
  return <PracticeContext value={value}>{children}</PracticeContext>
}

export function usePractice(): PracticeContextValue {
  const ctx = useContext(PracticeContext)
  if (!ctx) throw new Error('usePractice precisa estar dentro de <PracticeProvider>')
  return ctx
}
