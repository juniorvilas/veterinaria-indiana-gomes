import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { buildSchedulingLinks, type SchedulingLinks } from '@/application/use-cases/buildSchedulingLinks'
import type { HomeVisitPractice } from '@/domain/practice/HomeVisitPractice'

interface PracticeContextValue {
  practice: HomeVisitPractice
  links: SchedulingLinks
}

const PracticeContext = createContext<PracticeContextValue | null>(null)

export function PracticeProvider({ practice, children }: { practice: HomeVisitPractice; children: ReactNode }) {
  const value = useMemo(() => ({ practice, links: buildSchedulingLinks(practice.contacts) }), [practice])
  return <PracticeContext value={value}>{children}</PracticeContext>
}

export function usePractice(): PracticeContextValue {
  const ctx = useContext(PracticeContext)
  if (!ctx) throw new Error('usePractice precisa estar dentro de <PracticeProvider>')
  return ctx
}
