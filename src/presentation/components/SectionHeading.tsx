import type { ReactNode } from 'react'

export function SectionHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em]">
      {children}
    </h2>
  )
}
