import { usePractice } from '@/presentation/context/PracticeContext'
import { SectionHeading } from '@/presentation/components/SectionHeading'

export function Services() {
  const { services } = usePractice().practice

  return (
    <section id="servicos" className="section-y" aria-labelledby="servicos-titulo">
      <div className="wrap grid items-start gap-[clamp(32px,6vw,96px)] min-[901px]:grid-cols-[0.8fr_1.2fr]">
        <div className="min-[901px]:sticky min-[901px]:top-28">
          <SectionHeading id="servicos-titulo">O que dá para fazer em casa</SectionHeading>
          <p className="mt-5 max-w-[28em] text-ink-soft">
            Tudo com hora marcada. Se o caso pedir exames de imagem ou internação, você recebe o encaminhamento certo.
          </p>
        </div>

        <dl className="grid gap-x-10 min-[761px]:grid-cols-2">
          {services.map(({ id, name, description }) => (
            <div key={id} className="border-t border-line py-6">
              <dt className="mb-1.5 font-display text-[1.1875rem] font-bold leading-tight">{name}</dt>
              <dd className="text-ink-soft">{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
