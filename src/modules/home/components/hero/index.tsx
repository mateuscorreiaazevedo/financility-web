import { HeroContent } from './content'
import { HeroImage } from './image'

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center px-8 lg:flex-row lg:justify-between">
      <HeroContent />
      <HeroImage />
    </section>
  )
}
