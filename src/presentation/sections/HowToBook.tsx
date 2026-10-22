import type { ReactNode } from 'react'
import { usePractice } from '@/presentation/context/PracticeContext'
import { SectionHeading } from '@/presentation/components/SectionHeading'

export function HowToBook() {
  const { practice, links } = usePractice()
  const { whatsapp, instagram } = practice.contacts

  const steps: { title: string; body: ReactNode }[] = [
    {
      title: 'Mande uma mensagem',
      body: (
        <>
          Pelo WhatsApp{' '}
          <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer">
            {whatsapp.display}
          </a>{' '}
          ou pelo Direct do{' '}
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            {instagram.display}
          </a>
          .
        </>
      ),
    },
    {
      title: 'Conte sobre o pet',
      body: 'Espécie, idade, o que está acontecendo e o seu bairro. Assim já combinamos o melhor dia e horário.',
    },
    {
      title: 'Receba a visita',
      body: 'A Dra. Indiana vai até você com o material necessário para o atendimento.',
    },
  ]

  return (
    <section id="como-agendar" className="section-y bg-brand-deep text-white" aria-labelledby="como-agendar-titulo">
      <div className="wrap">
        <SectionHeading id="como-agendar-titulo">Como agendar</SectionHeading>
        <ol className="mt-12 grid gap-[clamp(32px,4vw,56px)] min-[761px]:grid-cols-3">
          {steps.map(({ title, body }, index) => (
            <li key={title}>
              <span aria-hidden="true" className="mb-3 block font-display text-7xl font-extrabold leading-none text-mint">
                {index + 1}
              </span>
              <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]">{title}</h3>
              <p className="text-white/80 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-3">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
