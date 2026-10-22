import type { ReactNode, SVGProps } from 'react'
import type { BenefitKind } from '@/domain/practice/HomeVisitPractice'

export type IconName = 'whatsapp' | 'instagram' | 'linkedin' | 'pin' | BenefitKind

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
        <path {...stroke} d="M4 16h24c0 6-5.4 10-12 10S4 22 4 16Z" />
        <circle fill="currentColor" cx="11.5" cy="12" r="1.8" />
        <circle fill="currentColor" cx="16" cy="9.5" r="1.8" />
        <circle fill="currentColor" cx="20.5" cy="12" r="1.8" />
      </>
    ),
  },
  pin: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <path {...stroke} d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle fill="currentColor" cx="12" cy="10" r="2.4" />
      </>
    ),
  },
  linkedin: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <rect {...stroke} strokeWidth={1.8} x="3.5" y="3.5" width="17" height="17" rx="4" />
        <circle fill="currentColor" cx="8.2" cy="7.9" r="1.15" />
        <path {...stroke} strokeWidth={1.8} d="M8.2 10.8V16.5M11.9 16.5v-5.7M11.9 13.4a2.4 2.4 0 0 1 4.8 0v3.1" />
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
