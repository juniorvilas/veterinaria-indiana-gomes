import type { CSSProperties } from 'react'

/** Props para um elemento entrar na sequência de revelação; `index` define o atraso do stagger. */
export function reveal(index = 0): { 'data-reveal': true; style: CSSProperties } {
  return { 'data-reveal': true, style: { '--reveal-index': index } as CSSProperties }
}
