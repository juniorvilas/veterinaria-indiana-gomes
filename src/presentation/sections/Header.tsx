import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-agendar', label: 'Como agendar' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const

export function Header() {
  const { practice, links } = usePractice()

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/92 backdrop-blur-md">
      <div className="wrap flex min-h-18 items-center gap-6">
        <a href="#" className="mr-auto flex items-center gap-3 font-display text-[1.0625rem] font-bold leading-tight text-ink no-underline">
          <img src="/img/logo-mark.png" alt="" width={36} height={46} className="h-11.5 w-auto" />
          <span>
            {practice.veterinarian.displayName}
            <small className="block font-body text-[0.8125rem] font-medium text-ink-soft">Veterinária a domicílio</small>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden gap-6 min-[901px]:flex">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} className="text-[0.9375rem] font-medium text-ink-soft no-underline hover:text-ink">
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
