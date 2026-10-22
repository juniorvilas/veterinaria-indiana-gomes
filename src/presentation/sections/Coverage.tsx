import { usePractice } from '@/presentation/context/PracticeContext'
import { HouseMark } from '@/presentation/components/HouseMark'
import { Icon } from '@/presentation/components/Icon'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function Coverage() {
  const { practice, links } = usePractice()

  return (
    <section id="area" className="section-y on-dark bg-wine text-white" aria-labelledby="area-titulo">
      <div className="wrap">
        <SectionHeading id="area-titulo">Onde atendo</SectionHeading>
        <ul className="mt-10 mb-12 grid gap-[clamp(12px,2vw,20px)]">
          {practice.areas.map(({ name }, index) => (
            <li key={name} className="flex items-center gap-[clamp(14px,2vw,24px)]" {...reveal(index + 1)}>
              <HouseMark className="size-[clamp(32px,4.5vw,56px)] bg-blush text-wine">
                <Icon name="pin" className="size-[clamp(20px,2.8vw,34px)]" />
              </HouseMark>
              <span className="font-display text-display font-extrabold">{name}</span>
            </li>
          ))}
        </ul>
        <p className="text-lead" {...reveal(2)}>
          Não sabe se o seu bairro está na rota?{' '}
          <a
            href={links.whatsapp('coverage')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 font-semibold text-white underline"
          >
            Pergunte pelo WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
