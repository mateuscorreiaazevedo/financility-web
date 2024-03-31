import { Hero, HomeToggles } from '@/modules/core'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden pt-24 lg:pt-0">
      <HomeToggles />
      <Hero />
    </main>
  )
}
