import Image from 'next/image'
import { useHeroModel } from '../models/index.model'
import { HeroNavigations } from '../navigations'

export function HeroView(props: ReturnType<typeof useHeroModel>) {
  const { labels: l, images } = props
  return (
    <section className="container flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">
          {l.title} <span className="font-alt text-primary">{l.appName}</span>
        </h1>
        <p className="text-2xl leading-6">{l.subtitle}</p>
        <p className="mt-8 w-[460px] text-lg leading-relaxed tracking-wide">
          {l.description}
        </p>
        <HeroNavigations />
      </div>
      <div className="relative flex flex-1 items-center justify-center">
        <Image alt={l.appName} src={images.card} loading="lazy" />
        <div className="absolute -z-10 aspect-square w-full rounded-full bg-gradient-to-bl from-transparent via-primary/20 blur-2xl dark:via-primary/10" />
      </div>
    </section>
  )
}
