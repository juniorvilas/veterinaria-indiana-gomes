import type { ReactNode } from 'react'

interface HouseMarkProps {
  /** Conteúdo dentro da casa, ex.: o número de um passo */
  children?: ReactNode
  className?: string
}

/** A casinha da foto do topo, em miniatura: o marcador visual da página. */
export function HouseMark({ children, className = 'size-10 bg-brand text-white' }: HouseMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`clip-house inline-grid shrink-0 place-items-center pt-[0.3em] font-display font-extrabold leading-none ${className}`}
    >
      {children}
    </span>
  )
}
