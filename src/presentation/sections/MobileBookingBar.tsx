import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'

/** Atalho fixo para agendar, visível só no celular. */
export function MobileBookingBar() {
  const { links } = usePractice()

  return (
    <ButtonLink
      href={links.whatsapp()}
      icon="whatsapp"
      className="fixed inset-x-4 bottom-[max(16px,env(safe-area-inset-bottom))] z-30 min-h-14 shadow-[0_10px_30px_-8px_rgb(27_75_64/0.6)] min-[761px]:hidden"
    >
      Agendar consulta em casa
    </ButtonLink>
  )
}
