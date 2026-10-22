import { StrictMode } from 'react'
import { App } from '@/App'
import { practice } from '@/composition'
import { PracticeProvider } from '@/presentation/context/PracticeContext'

/** Árvore completa da página, idêntica no navegador e no pré-render. */
export function Root() {
  return (
    <StrictMode>
      <PracticeProvider practice={practice}>
        <App />
      </PracticeProvider>
    </StrictMode>
  )
}
