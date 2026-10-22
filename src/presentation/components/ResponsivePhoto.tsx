interface ResponsivePhotoProps {
  /** Nome base do arquivo em /public/img, sem largura nem extensão */
  name: string
  /** Larguras disponíveis em .webp; a maior também existe em .jpg */
  widths: readonly [number, number]
  height: number
  sizes: string
  alt: string
  priority?: boolean
  className?: string
  pictureClassName?: string
}

export function ResponsivePhoto({
  name,
  widths: [small, large],
  height,
  sizes,
  alt,
  priority = false,
  className,
  pictureClassName,
}: ResponsivePhotoProps) {
  const base = `/img/${name}`
  return (
    <picture className={pictureClassName}>
      <source type="image/webp" srcSet={`${base}-${small}.webp ${small}w, ${base}-${large}.webp ${large}w`} sizes={sizes} />
      <img
        src={`${base}-${large}.jpg`}
        width={large}
        height={height}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}
