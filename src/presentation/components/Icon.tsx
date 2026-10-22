import type { ReactNode, SVGProps } from 'react'

export type IconName = 'whatsapp' | 'instagram' | 'calm' | 'no-commute' | 'routine'

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

const paths: Record<IconName, { viewBox: string; body: ReactNode }> = {
  whatsapp: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <path {...stroke} strokeWidth={1.8} d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
        <path
          fill="currentColor"
          d="M9.1 7.6c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.5.9 1.3 1.7 2.3 2.2.2.1.4.1.5 0l.6-.7c.2-.2.3-.2.6-.1l1.6.7c.2.1.4.2.4.4 0 .6-.3 1.3-.9 1.6-.6.3-1.3.4-2.4 0a8.4 8.4 0 0 1-4.6-4.3c-.5-1.1-.3-2.2.3-2.9.3-.4.6-.6 1-.6Z"
        />
      </>
    ),
  },
  instagram: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <rect {...stroke} strokeWidth={1.8} x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle {...stroke} strokeWidth={1.8} cx="12" cy="12" r="4" />
        <circle fill="currentColor" cx="17.2" cy="6.8" r="1.1" />
      </>
    ),
  },
  calm: {
    viewBox: '0 0 32 32',
    body: (
      <>
        <path {...stroke} d="M7 13 5 5l6 4h10l6-4-2 8c1.3 1.8 2 3.8 2 6 0 5.5-5 9-11 9S5 24.5 5 19c0-2.2.7-4.2 2-6Z" />
        <path {...stroke} d="M11 18q1.5 1.2 3 0M18 18q1.5 1.2 3 0M14.5 22.5q1.5 1 3 0" />
      </>
    ),
  },
  'no-commute': {
    viewBox: '0 0 32 32',
    body: (
      <>
        <path {...stroke} d="M4 20v-4l3-6h14l5 6h2v4h-3M9 20h11" />
        <circle {...stroke} cx="7" cy="21" r="2.6" />
        <circle {...stroke} cx="22.5" cy="21" r="2.6" />
        <path {...stroke} d="M5 27h22" />
      </>
    ),
  },
  routine: {
    viewBox: '0 0 32 32',
    body: (
      <>
        <path {...stroke} d="M4 15 16 5l12 10M7 13v14h18V13" />
        <circle fill="currentColor" cx="16" cy="20.5" r="2.2" />
        <circle fill="currentColor" cx="12.6" cy="17" r="1.2" />
        <circle fill="currentColor" cx="16" cy="15.6" r="1.2" />
        <circle fill="currentColor" cx="19.4" cy="17" r="1.2" />
      </>
    ),
  },
}

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
}

export function Icon({ name, className = 'size-5 shrink-0', ...rest }: IconProps) {
  const { viewBox, body } = paths[name]
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" focusable="false" {...rest}>
      {body}
    </svg>
  )
}
