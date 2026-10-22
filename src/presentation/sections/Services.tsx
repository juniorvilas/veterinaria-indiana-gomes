import { usePractice } from '@/presentation/context/PracticeContext'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function Services() {
  const { services } = usePractice().practice

  return (
    <section id="servicos" className="section-y bg-paper-2" aria-labelledby="servicos-titulo">
      <div className="wrap grid items-start gap-[clamp(40px,6vw,96px)] min-[901px]:grid-cols-[0.8fr_1.2fr]">
        <div className="min-[901px]:sticky min-[901px]:top-28">
          <SectionHeading id="servicos-titulo">O que dá para fazer em casa</SectionHeading>
          <p className="mt-5 max-w-[28em]" {...reveal(1)}>
            Tudo com hora marcada. Se o caso pedir exames de imagem ou internação, você recebe o encaminhamento certo.
          </p>
        </div>

        <dl className="grid gap-x-10 gap-y-9 min-[761px]:grid-cols-2">
          {services.map(({ id, name, description }, index) => (
            <div key={id} {...reveal((index % 2) + 1)}>
              <dt className="font-display text-h3 font-bold leading-tight">{name}</dt>
              <dd className="mt-1.5">{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
