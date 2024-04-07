import { Toggles } from '@/modules/core'
import { Hero } from '@/modules/home'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden pt-24 lg:pt-0">
      <Toggles />
      <Hero />
    </main>
  )
}
