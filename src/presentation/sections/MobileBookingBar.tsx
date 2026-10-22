import { useEffect, useState } from 'react'
import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'

// Barra flutuante de verdade: a sombra a separa do conteúdo que passa por baixo.
const floatingShadow = 'shadow-[0_12px_32px_-10px_rgb(79_59_115/0.55)]' // taste-skill-ignore

/**
 * Atalho fixo para agendar, só no celular. Aparece depois que os botões do topo
 * saem da tela, para nunca disputar espaço (nem sobrepor) com eles.
 */
export function MobileBookingBar() {
  const { links } = usePractice()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heroCta = document.querySelector('[data-hero-cta]')
    if (!heroCta || !('IntersectionObserver' in window)) return setVisible(true)

    // Áreas que já têm o próprio botão de agendar (montador, fechamento)
    const ownCtaAreas = new Set<Element>()
    let heroCtaPassed = false
    const update = () => setVisible(heroCtaPassed && ownCtaAreas.size === 0)

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroCta) {
          heroCtaPassed = !entry.isIntersecting && entry.boundingClientRect.top < 0
        } else if (entry.isIntersecting) {
          ownCtaAreas.add(entry.target)
        } else {
          ownCtaAreas.delete(entry.target)
        }
      }
      update()
    })

    observer.observe(heroCta)
    document.querySelectorAll('[data-own-cta]').forEach((area) => observer.observe(area))
    return () => observer.disconnect()
  }, [])

  return (
    <ButtonLink
      href={links.whatsapp()}
      icon="whatsapp"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed inset-x-4 bottom-[max(16px,env(safe-area-inset-bottom))] z-30 min-h-14 ${floatingShadow} transition-[transform,opacity,background-color] duration-300 min-[761px]:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-[calc(100%+24px)] opacity-0'
      }`}
    >
      Agendar consulta em casa
    </ButtonLink>
  )
}
