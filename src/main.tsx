import { createRoot, hydrateRoot } from 'react-dom/client'
import { Root } from '@/Root'
import './index.css'

const container = document.getElementById('root')!

// Em produção o HTML já vem pré-renderizado; no dev a raiz chega vazia.
if (container.firstElementChild) {
  hydrateRoot(container, <Root />)
} else {
  createRoot(container).render(<Root />)
}
