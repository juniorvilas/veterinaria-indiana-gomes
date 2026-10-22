import type { ReactNode } from 'react'
import { reveal } from '@/presentation/motion/reveal'

export function SectionHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-h2 font-bold" {...reveal(0)}>
      {children}
    </h2>
  )
}
