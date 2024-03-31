import Image from 'next/image'
import { useHeroModel } from '../models/index.model'
import { HeroNavigations } from '../navigations'

export function HeroView(props: ReturnType<typeof useHeroModel>) {
  const { labels: l, images } = props
  return (
    <section className="container flex flex-col items-center justify-center px-8 lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center lg:items-start lg:gap-2">
        <h1 className="text-xl font-bold lg:text-5xl">
          {l.title} <span className="font-alt text-primary">{l.appName}</span>
        </h1>
        <p className="text-center text-base lg:text-start lg:text-2xl lg:leading-6">
          {l.subtitle}
        </p>
        <p className="text-center text-sm leading-relaxed tracking-wide text-muted-foreground lg:mt-8 lg:w-[460px] lg:text-start lg:text-lg">
          {l.description}
        </p>
        <HeroNavigations />
      </div>
      <div className="relative flex flex-1 items-center justify-center">
        <Image
          alt={l.appName}
          src={images.card}
          loading="lazy"
          className="w-max p-10"
        />
        <div className="absolute -z-10 aspect-square w-full rounded-full bg-gradient-to-bl from-transparent via-primary/20 blur-2xl dark:via-primary/10" />
      </div>
    </section>
  )
}
