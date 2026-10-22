import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/App'
import { StaticPracticeRepository } from '@/infrastructure/content/StaticPracticeRepository'
import { PracticeProvider } from '@/presentation/context/PracticeContext'
import './index.css'

// Raiz de composição: escolhe a implementação concreta do repositório.
const practice = new StaticPracticeRepository().get()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PracticeProvider practice={practice}>
      <App />
    </PracticeProvider>
  </StrictMode>,
)
