import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'
import { ResponsivePhoto } from '@/presentation/components/ResponsivePhoto'
import { SectionHeading } from '@/presentation/components/SectionHeading'

export function Closing() {
  const { links } = usePractice()

  return (
    <section className="overflow-hidden bg-brand pt-[clamp(64px,10vw,120px)] text-white" aria-labelledby="agendar-titulo">
      <div className="wrap grid items-end gap-10 min-[901px]:grid-cols-[1.2fr_0.8fr]">
        <div className="pb-[clamp(64px,10vw,120px)] max-[900px]:pb-0">
          <SectionHeading id="agendar-titulo">Vamos marcar a visita do seu pet?</SectionHeading>
          <p className="mt-4.5 mb-8 text-lg text-white/85">Mande uma mensagem e combine o melhor horário para a sua rotina.</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={links.whatsapp()} icon="whatsapp" variant="light">
              Agendar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href={links.instagram} icon="instagram" variant="outline-light">
              Agendar pelo Instagram
            </ButtonLink>
          </div>
        </div>

        <ResponsivePhoto
          name="dra-indiana-estetoscopio"
          widths={[480, 800]}
          height={983}
          sizes="(min-width: 900px) 360px, 70vw"
          alt="Dra. Indiana Gomes sorrindo e segurando o estetoscópio em direção à câmera"
          pictureClassName="block max-w-[340px] justify-self-center min-[901px]:max-w-none"
          className="rounded-t-[200px] bg-white"
        />
      </div>
    </section>
  )
}
