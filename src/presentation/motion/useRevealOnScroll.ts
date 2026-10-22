import { useEffect } from 'react'

/**
 * Revela cada elemento com [data-reveal] uma única vez, quando entra na tela.
 * Mexe só em classes do DOM (não em estado do React) para não afetar a hidratação.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement
    root.dataset.revealReady = 'true'

    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
