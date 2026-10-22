import { usePractice } from '@/presentation/context/PracticeContext'
import { Icon, type IconName } from '@/presentation/components/Icon'

export function Footer() {
  const { practice, links } = usePractice()
  const { veterinarian, contacts } = practice

  const socialLinks: { href: string; icon: IconName; label: string }[] = [
    { href: links.whatsapp(), icon: 'whatsapp', label: `WhatsApp ${contacts.whatsapp.display}` },
    { href: links.instagram, icon: 'instagram', label: `Instagram ${contacts.instagram.display}` },
    { href: veterinarian.linkedinUrl, icon: 'linkedin', label: 'LinkedIn' },
  ]

  return (
    <footer className="on-dark bg-ink pt-14 pb-30 text-small text-white/80 min-[761px]:pb-14">
      <div className="wrap flex flex-wrap items-end justify-between gap-10 [&_a]:text-white">
        <div>
          <img
            src="/img/logo-light.png"
            alt={`${veterinarian.displayName}, médica veterinária`}
            width={220}
            height={106}
            loading="lazy"
            className="mb-6"
          />
          <p>
            Veterinária a domicílio para cães e gatos
            <br />
            {practice.areas.map((area) => area.name).join(', ')}, BA
          </p>
        </div>

        <div>
          <ul className="flex gap-3">
            {socialLinks.map(({ href, icon, label }) => (
              <li key={icon}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid size-12 place-items-center rounded-full bg-white/10 transition-[background-color,transform] duration-150 ease-out hover:bg-white/20 active:scale-[0.94]"
                >
                  <Icon name={icon} className="size-6" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-white/65">
            Desenvolvido por{' '}
            <a
              href="https://www.carlindojunior.xyz/"
              target="_blank"
              rel="noopener"
              className="inline-block py-1.5 font-semibold hover:underline"
            >
              Junior
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
