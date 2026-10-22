import type { HomeVisitPractice } from '@/domain/practice/HomeVisitPractice'

/** Porta de saída: de onde vêm os dados do atendimento (hoje estáticos, amanhã um CMS). */
export interface PracticeRepository {
  get(): HomeVisitPractice
}
