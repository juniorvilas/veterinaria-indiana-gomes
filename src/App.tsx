import { About } from '@/presentation/sections/About'
import { Benefits } from '@/presentation/sections/Benefits'
import { Closing } from '@/presentation/sections/Closing'
import { Coverage } from '@/presentation/sections/Coverage'
import { Faq } from '@/presentation/sections/Faq'
import { Footer } from '@/presentation/sections/Footer'
import { Header } from '@/presentation/sections/Header'
import { Hero } from '@/presentation/sections/Hero'
import { HowToBook } from '@/presentation/sections/HowToBook'
import { MobileBookingBar } from '@/presentation/sections/MobileBookingBar'
import { Services } from '@/presentation/sections/Services'
import { useRevealOnScroll } from '@/presentation/motion/useRevealOnScroll'

export function App() {
  useRevealOnScroll()

  return (
    <>
      <a href="#conteudo" className="absolute -top-16 left-4 z-50 bg-ink px-4 py-2.5 text-white focus:top-3">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Benefits />
        <Services />
        <HowToBook />
        <About />
        <Coverage />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  )
}
