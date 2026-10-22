import { educationByRecency } from '@/domain/veterinarian/Veterinarian'
import { usePractice } from '@/presentation/context/PracticeContext'
import { ResponsivePhoto } from '@/presentation/components/ResponsivePhoto'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function About() {
  const { practice, links, experienceYears } = usePractice()
  const { fullName, role, bio, education, linkedinUrl } = practice.veterinarian

  return (
    <section id="sobre" className="section-y bg-paper-2" aria-labelledby="sobre-titulo">
      <div className="wrap grid items-center gap-[clamp(40px,6vw,96px)] min-[901px]:grid-cols-[0.8fr_1.2fr]">
        <div {...reveal(1)}>
          <ResponsivePhoto
            name="dra-indiana-retrato"
            widths={[480, 800]}
            height={994}
            sizes="(min-width: 900px) 420px, 80vw"
            alt="Dra. Indiana Gomes sorrindo, de braços cruzados, com estetoscópio no pescoço"
            pictureClassName="block max-w-[420px] overflow-hidden clip-house bg-paper"
            className="size-full object-cover"
          />
        </div>

        <div>
          <SectionHeading id="sobre-titulo">Quem vai cuidar do seu pet</SectionHeading>
          <p className="mt-6 font-display text-h3 font-bold leading-tight text-wine" {...reveal(1)}>
            {fullName}
            <span className="mt-1 block font-body text-body font-medium text-ink-soft">
              {role} há {experienceYears} anos
            </span>
          </p>
          {bio.map((paragraph, index) => (
            <p key={paragraph.slice(0, 24)} className="mt-4.5 max-w-[36em]" {...reveal(index + 2)}>
              {paragraph}
            </p>
          ))}

          <h3 className="mt-12 text-h3 font-bold tracking-[-0.01em]" {...reveal(1)}>
            Formação
          </h3>
          <ol className="mt-5 grid max-w-[36em] gap-5">
            {educationByRecency(education).map(({ title, institution, startYear, endYear }, index) => (
              <li key={title} className="grid gap-x-6 min-[481px]:grid-cols-[7.5rem_1fr]" {...reveal(index + 2)}>
                <span className="font-display font-bold text-brand-deep tabular-nums">
                  {startYear}–{endYear}
                </span>
                <span>
                  <strong className="block font-semibold leading-snug">{title}</strong>
                  <span className="text-ink-soft">{institution}</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-8 flex gap-2 font-semibold [&_a]:inline-block [&_a]:px-1 [&_a]:py-2.5 [&_a]:text-brand-deep [&_a]:underline">
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
