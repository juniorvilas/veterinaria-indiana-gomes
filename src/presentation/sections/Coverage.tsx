import { usePractice } from '@/presentation/context/PracticeContext'
import { SectionHeading } from '@/presentation/components/SectionHeading'

export function Coverage() {
  const { practice, links } = usePractice()

  return (
    <section id="area" className="section-y bg-wine text-white" aria-labelledby="area-titulo">
      <div className="wrap">
        <SectionHeading id="area-titulo">Onde atendo</SectionHeading>
        <ul className="mt-8 mb-10">
          {practice.areas.map(({ name }) => (
            <li
              key={name}
              className="border-b border-white/25 py-2.5 font-display text-[clamp(2.25rem,7vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] last:text-blush"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="text-lg">
          Não sabe se o seu bairro está na rota?{' '}
          <a href={links.whatsapp('coverage')} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline underline-offset-3">
            Pergunte pelo WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
