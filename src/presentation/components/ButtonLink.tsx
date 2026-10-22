import type { AnchorHTMLAttributes } from 'react'
import { Icon, type IconName } from './Icon'

type Variant = 'primary' | 'ghost' | 'light' | 'outline-light'
type Size = 'md' | 'sm'

const variants: Record<Variant, string> = {
  primary: 'border-brand bg-brand text-white hover:border-brand-deep hover:bg-brand-deep',
  ghost: 'border-brand bg-transparent text-brand-deep hover:bg-paper-2',
  light: 'border-white bg-white text-brand-deep hover:border-paper-2 hover:bg-paper-2',
  'outline-light': 'border-white/70 bg-transparent text-white hover:border-white hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  md: 'min-h-13 px-6 text-body',
  sm: 'min-h-11 px-4.5 text-small',
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: IconName
  variant?: Variant
  size?: Size
  external?: boolean
}

export function ButtonLink({
  icon,
  variant = 'primary',
  size = 'md',
  external = true,
  className = '',
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2.5 rounded-full border-2 font-semibold leading-none no-underline transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      {children}
    </a>
  )
}
