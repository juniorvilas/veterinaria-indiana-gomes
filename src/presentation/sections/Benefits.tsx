import { usePractice } from '@/presentation/context/PracticeContext'
import { HouseMark } from '@/presentation/components/HouseMark'
import { Icon } from '@/presentation/components/Icon'
import { ResponsivePhoto } from '@/presentation/components/ResponsivePhoto'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function Benefits() {
  const { benefits } = usePractice().practice

  return (
    <section className="section-y" aria-labelledby="beneficios">
      <div className="wrap grid items-start gap-[clamp(40px,6vw,96px)] min-[901px]:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-[clamp(28px,4vw,48px)]">
          <SectionHeading id="beneficios">Por que em casa</SectionHeading>
          <div {...reveal(1)}>
            <ResponsivePhoto
              name="dra-indiana-atendimento"
              widths={[560, 900]}
              height={675}
              sizes="(min-width: 900px) 500px, 92vw"
              alt="Dra. Indiana Gomes, ao lado do sofá de uma casa, examinando com o estetoscópio um gato preto"
              pictureClassName="block overflow-hidden clip-house bg-paper-2"
              className="size-full object-cover"
            />
          </div>
        </div>

        <ul className="grid gap-[clamp(32px,4vw,48px)] min-[901px]:pt-[clamp(72px,9vw,120px)]">
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
