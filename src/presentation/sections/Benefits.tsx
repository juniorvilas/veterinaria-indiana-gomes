import { usePractice } from '@/presentation/context/PracticeContext'
import { Icon } from '@/presentation/components/Icon'
import { SectionHeading } from '@/presentation/components/SectionHeading'

export function Benefits() {
  const { benefits } = usePractice().practice

  return (
    <section className="section-y bg-paper-2" aria-labelledby="beneficios">
      <div className="wrap">
        <SectionHeading id="beneficios">Por que atender em casa</SectionHeading>
        <ul className="mt-12 grid gap-[clamp(32px,4vw,56px)] min-[761px]:grid-cols-3">
          {benefits.map(({ kind, title, description }) => (
            <li key={kind}>
              <Icon name={kind} className="mb-4 size-10 text-wine" />
              <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]">{title}</h3>
              <p className="text-ink-soft">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
