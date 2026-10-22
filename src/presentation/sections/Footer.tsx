import { usePractice } from '@/presentation/context/PracticeContext'

export function Footer() {
  const { practice, links } = usePractice()
  const { veterinarian, contacts } = practice

  return (
    <footer className="bg-ink pt-12 pb-30 text-[0.9375rem] text-white/75 min-[761px]:pb-12">
      <div className="wrap flex flex-wrap items-end justify-between gap-8 [&_a]:text-white">
        <p>
          <img
            src="/img/logo-light.png"
            alt={`${veterinarian.displayName}, médica veterinária`}
            width={220}
            height={106}
            loading="lazy"
            className="mb-5"
          />
          Veterinária a domicílio para cães e gatos
          <br />
          {practice.areas.map((area) => area.name).join(', ')}, BA
        </p>
        <p>
          <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer">
            WhatsApp {contacts.whatsapp.display}
          </a>
          <br />
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            Instagram {contacts.instagram.display}
          </a>
          <br />
          <a href={veterinarian.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}
