import { usePractice } from '@/presentation/context/PracticeContext'
import { BookingComposer } from '@/presentation/components/BookingComposer'
import { HouseMark } from '@/presentation/components/HouseMark'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function HowToBook() {
  const { links } = usePractice()

  const steps = [
    { title: 'Monte sua mensagem', body: 'Escolha o pet, o motivo e o seu bairro aqui embaixo.' },
    { title: 'Envie pelo WhatsApp', body: 'A conversa abre pronta. Combinamos juntos o melhor dia e horário.' },
    { title: 'Receba a visita', body: 'A Dra. Indiana vai até você com o material necessário para o atendimento.' },
  ]

  return (
    <section id="como-agendar" className="section-y" aria-labelledby="como-agendar-titulo">
      <div className="wrap">
        <SectionHeading id="como-agendar-titulo">Como agendar</SectionHeading>

        <ol className="mt-12 grid gap-[clamp(28px,4vw,48px)] min-[761px]:grid-cols-3">
          {steps.map(({ title, body }, index) => (
            <li key={title} className="grid grid-cols-[auto_1fr] gap-x-4" {...reveal(index + 1)}>
              <HouseMark className="size-12 bg-brand-deep text-lead text-white">{index + 1}</HouseMark>
              <div>
                <h3 className="text-h3 font-bold tracking-[-0.01em]">{title}</h3>
                <p className="mt-1.5">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-[clamp(40px,6vw,64px)]" data-own-cta {...reveal(1)}>
          <BookingComposer />
          <p className="mt-5 text-small text-ink-soft">
            Prefere o Instagram? Mande uma mensagem no{' '}
            <a href={links.instagramDirect} target="_blank" rel="noopener noreferrer" className="inline-block py-2 font-semibold text-brand-deep underline">
              Direct
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
