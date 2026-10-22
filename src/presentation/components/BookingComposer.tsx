import { useId, useMemo, useState, type ReactNode } from 'react'
import { composeBookingMessage } from '@/application/use-cases/composeBookingMessage'
import { NEIGHBORHOOD_MAX_LENGTH, type BookingRequest } from '@/domain/booking/BookingRequest'
import type { Species } from '@/domain/practice/HomeVisitPractice'
import { usePractice } from '@/presentation/context/PracticeContext'
import { ButtonLink } from './ButtonLink'

const speciesOptions: { value: Species; label: string }[] = [
  { value: 'dog', label: 'Cão' },
  { value: 'cat', label: 'Gato' },
]

const chip =
  'inline-flex min-h-11 cursor-pointer items-center rounded-full bg-paper px-4 font-medium transition-[background-color,color,transform] duration-150 ease-out select-none active:scale-[0.97] hover:bg-paper-3 has-checked:bg-brand-deep has-checked:text-white has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-(--focus-ring)'

function ChipGroup({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-3 font-semibold">{legend}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  )
}

/** O tutor escolhe pet, motivo e bairro; o WhatsApp abre com a mensagem pronta. */
export function BookingComposer() {
  const { practice, links } = usePractice()
  const [request, setRequest] = useState<BookingRequest>({})
  const neighborhoodId = useId()
  const name = useId()

  const message = useMemo(() => composeBookingMessage(practice, request), [practice, request])
  const update = (patch: Partial<BookingRequest>) => setRequest((current) => ({ ...current, ...patch }))

  return (
    <div className="grid gap-8 rounded-[28px] bg-paper-2 p-[clamp(20px,4vw,40px)] min-[901px]:grid-cols-[1.1fr_0.9fr]">
      <div className="grid content-start gap-7">
        <ChipGroup legend="Seu pet">
          {speciesOptions.map(({ value, label }) => (
            <label key={value} className={chip}>
              <input
                type="radio"
                name={`${name}-species`}
                value={value}
                checked={request.species === value}
                onChange={() => update({ species: value })}
                className="sr-only"
              />
              {label}
            </label>
          ))}
        </ChipGroup>

        <ChipGroup legend="Motivo">
          {practice.services.map((service) => (
            <label key={service.id} className={chip}>
              <input
                type="radio"
                name={`${name}-service`}
                value={service.id}
                checked={request.serviceId === service.id}
                onChange={() => update({ serviceId: service.id })}
                className="sr-only"
              />
              {service.name}
            </label>
          ))}
        </ChipGroup>

        <div>
          <label htmlFor={neighborhoodId} className="mb-3 block font-semibold">
            Seu bairro <span className="font-normal text-ink-soft">(opcional)</span>
          </label>
          <input
            id={neighborhoodId}
            type="text"
            autoComplete="address-level3"
            maxLength={NEIGHBORHOOD_MAX_LENGTH}
            placeholder="Ex.: Vilas do Atlântico"
            value={request.neighborhood ?? ''}
            onChange={(event) => update({ neighborhood: event.target.value })}
            className="min-h-12 w-full max-w-sm rounded-2xl border-2 border-transparent bg-paper px-4 text-body text-ink placeholder:text-ink-soft focus:border-brand-deep focus:outline-none"
          />
        </div>
      </div>

      <div className="grid content-start gap-5 rounded-3xl bg-paper p-6">
        <p className="font-semibold">Sua mensagem</p>
        <p aria-live="polite" className="text-lead text-ink">
          {message}
        </p>
        <ButtonLink href={links.whatsappWithText(message)} icon="whatsapp" className="w-full">
          Enviar pelo WhatsApp
        </ButtonLink>
      </div>
    </div>
  )
}
