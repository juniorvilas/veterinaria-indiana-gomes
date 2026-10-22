import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'
import { ResponsivePhoto } from '@/presentation/components/ResponsivePhoto'
import { SectionHeading } from '@/presentation/components/SectionHeading'
import { reveal } from '@/presentation/motion/reveal'

export function Closing() {
  const { links } = usePractice()

  return (
    <section
      className="on-dark overflow-hidden bg-brand-deep pt-[clamp(72px,11vw,144px)] text-white"
      aria-labelledby="agendar-titulo"
      data-own-cta
    >
      <div className="wrap grid items-end gap-10 min-[901px]:grid-cols-[1.2fr_0.8fr]">
        <div className="pb-[clamp(72px,11vw,144px)] max-[900px]:pb-0">
          <SectionHeading id="agendar-titulo">Vamos marcar a visita do seu pet?</SectionHeading>
          <p className="mt-5 mb-8 text-lead" {...reveal(1)}>
            Mande uma mensagem e combine o melhor horário para a sua rotina.
          </p>
          <div className="flex flex-wrap gap-3" {...reveal(2)}>
            <ButtonLink href={links.whatsapp()} icon="whatsapp" variant="light">
              Agendar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href={links.instagramDirect} icon="instagram" variant="outline-light">
              Agendar pelo Instagram
            </ButtonLink>
          </div>
        </div>

        <div className="justify-self-center" {...reveal(1)}>
          <ResponsivePhoto
            name="dra-indiana-estetoscopio"
            widths={[480, 800]}
            height={983}
            sizes="(min-width: 900px) 380px, 70vw"
            alt="Dra. Indiana Gomes sorrindo e segurando o estetoscópio em direção à câmera"
            pictureClassName="block w-[min(80vw,340px)] overflow-hidden clip-house bg-white min-[901px]:w-[380px]"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
