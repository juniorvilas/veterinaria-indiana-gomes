import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'
import { ResponsivePhoto } from '@/presentation/components/ResponsivePhoto'

const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1)

export function Hero() {
  const { practice, links } = usePractice()

  return (
    <section className="pt-[clamp(40px,7vw,96px)] pb-[clamp(64px,10vw,120px)]">
      <div className="wrap grid items-center gap-[clamp(32px,6vw,88px)] min-[901px]:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 inline-block rounded-full bg-wine px-3.5 py-1.5 text-[0.9375rem] font-semibold text-white">
            Só cães e gatos
          </p>
          <h1 className="max-w-[13ch] text-[clamp(2.6rem,6.4vw,4.75rem)] font-extrabold leading-none tracking-[-0.035em]">
            A consulta veterinária que vai até a sua casa.
          </h1>
          <p className="mt-6 max-w-[34em] text-[clamp(1.0625rem,1.6vw,1.25rem)] text-ink-soft">
            Atendimento domiciliar em Lauro de Freitas, Salvador e região metropolitana. Seu pet é examinado com calma,
            no lugar onde ele se sente seguro, sem caixa de transporte nem sala de espera.
          </p>
          <p className="mt-4 mb-8 max-w-[34em] border-l-3 border-wine pl-3.5 font-medium">
            Com a {practice.veterinarian.displayName}: {lowerFirst(practice.veterinarian.credentials)}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={links.whatsapp()} icon="whatsapp" className="max-[760px]:w-full">
              Agendar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href={links.instagram} icon="instagram" variant="ghost" className="max-[760px]:w-full">
              Agendar pelo Instagram
            </ButtonLink>
          </div>
          <p className="mt-5 text-[0.9375rem] text-ink-soft">
            WhatsApp{' '}
            <a href={links.phone} className="font-semibold text-ink">
              {practice.contacts.whatsapp.display}
            </a>
          </p>
        </div>

        <figure className="relative m-0 aspect-[3/4] w-[min(86%,400px)] justify-self-center min-[901px]:w-[min(100%,440px)] min-[901px]:justify-self-end">
          <div aria-hidden="true" className="clip-house absolute inset-0 translate-x-[18px] translate-y-[18px] bg-brand" />
          <ResponsivePhoto
            name="dra-indiana-gato"
            widths={[560, 900]}
            height={1200}
            sizes="(min-width: 900px) 440px, 80vw"
            alt="Dra. Indiana Gomes, de jaleco branco, segurando um gato cinza no colo"
            priority
            pictureClassName="relative block size-full"
            className="clip-house size-full animate-house-in object-cover"
          />
        </figure>
      </div>
    </section>
  )
}
