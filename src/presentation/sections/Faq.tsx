import { usePractice } from '@/presentation/context/PracticeContext'
import { SectionHeading } from '@/presentation/components/SectionHeading'

export function Faq() {
  const { faq } = usePractice().practice

  return (
    <section id="duvidas" className="section-y" aria-labelledby="duvidas-titulo">
      <div className="wrap grid items-start gap-[clamp(32px,6vw,96px)] min-[901px]:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="duvidas-titulo">Dúvidas frequentes</SectionHeading>
        <div>
          {faq.map(({ question, answer }) => (
            <details key={question} className="group border-t border-line last:border-b">
              <summary className="flex cursor-pointer list-none justify-between gap-4 py-5.5 text-lg font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-[1.75rem] font-medium leading-none text-brand transition-[rotate] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[40em] pb-6 text-ink-soft">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
