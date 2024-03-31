import { Hero, HomeToggles } from '@/modules/core'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full">
      <HomeToggles />
      <Hero />
    </main>
  )
}
