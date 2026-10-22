import { usePractice } from '@/presentation/context/PracticeContext'
import { HouseMark } from '@/presentation/components/HouseMark'
import { Icon } from '@/presentation/components/Icon'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function Benefits() {
  const { benefits } = usePractice().practice

  return (
    <section className="section-y" aria-labelledby="beneficios">
      <div className="wrap grid items-start gap-[clamp(40px,6vw,96px)] min-[901px]:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="beneficios">Por que em casa</SectionHeading>

        <ul className="grid gap-[clamp(32px,4vw,48px)]">
          {benefits.map(({ kind, title, description }, index) => (
            <li key={kind} className="grid grid-cols-[auto_1fr] gap-x-5" {...reveal(index + 1)}>
              <HouseMark className="size-14 bg-brand text-white">
                <Icon name={kind} className="size-9" />
              </HouseMark>
              <div>
                <h3 className="text-h3 font-bold tracking-[-0.015em]">{title}</h3>
                <p className="mt-2 max-w-[36em]">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
