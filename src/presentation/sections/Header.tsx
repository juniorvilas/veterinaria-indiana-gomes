import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-agendar', label: 'Como agendar' },
  { href: '#area', label: 'Onde atendo' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const

export function Header() {
  const { practice, links } = usePractice()

  return (
    <header className="sticky top-0 z-20 bg-paper">
      <div className="wrap flex min-h-18 items-center gap-6">
        <a href="#" className="mr-auto flex items-center gap-3 font-display text-body font-bold leading-tight text-ink no-underline">
          <img src="/img/logo-mark.png" alt="" width={36} height={46} className="h-11.5 w-auto" />
          <span>
            {practice.veterinarian.displayName}
            <small className="block font-body text-small font-medium text-ink-soft">Veterinária a domicílio</small>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden gap-1 min-[961px]:flex">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-2.5 text-small font-medium text-ink-soft no-underline transition-colors duration-150 hover:bg-paper-2 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <ButtonLink href={links.whatsapp()} icon="whatsapp" size="sm" className="max-[760px]:hidden">
          Agendar
        </ButtonLink>
      </div>
    </header>
  )
}
