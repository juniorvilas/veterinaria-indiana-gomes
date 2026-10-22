import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from '@/presentation/components/ButtonLink'
import { HouseMark } from '@/presentation/components/HouseMark'
import { ResponsivePhoto } from '@/presentation/components/ResponsivePhoto'
import { reveal } from '@/presentation/motion/reveal'

export function Hero() {
  const { practice, links, experienceYears } = usePractice()

  return (
    <section className="pt-[clamp(24px,5vw,64px)] pb-[clamp(72px,11vw,144px)]">
      <div className="wrap grid gap-x-[clamp(32px,6vw,96px)] gap-y-7 min-[901px]:grid-cols-[1.1fr_0.9fr] min-[901px]:gap-y-10">
        <h1
          className="order-2 max-w-[17ch] text-display font-extrabold min-[901px]:order-0 min-[901px]:col-span-2"
          {...reveal(0)}
        >
          Consulta <span className="text-brand">veterinária</span> na sua casa.
        </h1>

        <div className="order-3 min-[901px]:order-0">
          <p className="max-w-[34em] text-lead" {...reveal(1)}>
            Atendimento a domicílio só para cães e gatos em Lauro de Freitas, Salvador e região metropolitana, com hora
            marcada e sem sala de espera.
          </p>
          <p className="mt-5 flex max-w-[34em] items-center gap-3.5 font-medium" {...reveal(2)}>
            <HouseMark className="size-14 bg-wine text-white">
              <img src="/img/logo-mark-light.png" alt="" width={28} height={36} className="h-9 w-auto" />
            </HouseMark>
            <span>
              {practice.veterinarian.displayName}, veterinária há {experienceYears} anos, formada e mestre pela UFRB.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-hero-cta {...reveal(3)}>
            <ButtonLink href={links.whatsapp()} icon="whatsapp" className="max-[760px]:w-full">
              Agendar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href={links.instagramDirect} icon="instagram" variant="ghost" className="max-[760px]:w-full">
              Agendar pelo Instagram
            </ButtonLink>
          </div>
          <p className="mt-4 text-small text-ink-soft" {...reveal(4)}>
            Ou ligue:{' '}
            <a href={links.phone} className="inline-block py-2 font-semibold text-ink">
              {practice.contacts.whatsapp.display}
            </a>
          </p>
        </div>

        <figure className="relative order-1 m-0 aspect-3/4 w-[min(46vw,220px)] min-[901px]:order-0 min-[901px]:-mt-24 min-[901px]:w-[min(100%,460px)] min-[901px]:justify-self-end">
          <div aria-hidden="true" className="clip-house absolute inset-x-[-6%] top-[8%] bottom-[-5%] bg-paper-3" />
          <ResponsivePhoto
            name="dra-indiana-gato"
            widths={[560, 765]}
            height={1020}
            sizes="(min-width: 900px) 460px, 46vw"
            alt="Dra. Indiana Gomes, de jaleco branco, segurando um gato cinza no colo"
            priority
            pictureClassName="relative block size-full overflow-hidden clip-house"
            className="size-full animate-house-in object-cover"
          />
        </figure>
      </div>
    </section>
  )
}
