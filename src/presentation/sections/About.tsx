import { educationByRecency } from '@/domain/veterinarian/Veterinarian'
import { usePractice } from '@/presentation/context/PracticeContext'
import { ResponsivePhoto } from '@/presentation/components/ResponsivePhoto'
import { SectionHeading } from '@/presentation/components/SectionHeading'

export function About() {
  const { practice, links } = usePractice()
  const { fullName, role, bio, education, linkedinUrl } = practice.veterinarian

  return (
    <section id="sobre" className="section-y" aria-labelledby="sobre-titulo">
      <div className="wrap grid items-center gap-[clamp(32px,6vw,96px)] min-[901px]:grid-cols-[0.8fr_1.2fr]">
        <ResponsivePhoto
          name="dra-indiana-retrato"
          widths={[480, 800]}
          height={994}
          sizes="(min-width: 900px) 400px, 90vw"
          alt="Dra. Indiana Gomes sorrindo, de braços cruzados, com estetoscópio no pescoço"
          pictureClassName="block max-w-[400px]"
          className="rounded-t-[200px] rounded-b-2xl bg-paper-2"
        />

        <div>
          <SectionHeading id="sobre-titulo">Quem vai cuidar do seu pet</SectionHeading>
          <p className="mt-6 font-display text-[1.375rem] font-bold leading-tight text-wine">
            {fullName}
            <span className="block font-body text-base font-medium text-ink-soft">{role}</span>
          </p>
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4.5 max-w-[36em]">
              {paragraph}
            </p>
          ))}

          <h3 className="mt-10 text-xl font-bold tracking-[-0.01em]">Formação</h3>
          <ol className="mt-3 max-w-[36em]">
            {educationByRecency(education).map(({ title, institution, startYear, endYear }) => (
              <li key={title} className="grid gap-x-6 border-t border-line py-4 min-[481px]:grid-cols-[7.5rem_1fr]">
                <span className="font-display font-bold text-wine tabular-nums">
                  {startYear}–{endYear}
                </span>
                <span>
                  <strong className="block font-semibold leading-snug">{title}</strong>
                  <span className="text-ink-soft">{institution}</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-6 flex gap-6 font-semibold [&_a]:text-brand [&_a]:underline-offset-3">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
