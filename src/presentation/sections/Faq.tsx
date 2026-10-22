import { usePractice } from '@/presentation/context/PracticeContext'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function Faq() {
  const { faq } = usePractice().practice

  return (
    <section id="duvidas" className="section-y" aria-labelledby="duvidas-titulo">
      <div className="wrap grid items-start gap-[clamp(40px,6vw,96px)] min-[901px]:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="duvidas-titulo">Dúvidas frequentes</SectionHeading>
        <div className="grid gap-3">
          {faq.map(({ question, answer }, index) => (
            <details
              key={question}
              className="group rounded-3xl bg-paper-2 transition-colors duration-150 open:bg-paper-3"
              {...reveal(index + 1)}
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-3xl px-6 py-4 text-lead font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-paper font-display text-h3 leading-none text-brand-deep transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[40em] px-6 pb-6">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
