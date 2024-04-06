import Image from 'next/image'
import { useHeroModel } from '../models/index.model'
import { HeroNavigations } from '../navigations'
import { Text } from '@/components/ui/text'

export function HeroView(props: ReturnType<typeof useHeroModel>) {
  const { labels: l, images } = props
  return (
    <section className="container flex flex-col items-center justify-center px-8 lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center lg:items-start lg:gap-2">
        <Text
          as="h1"
          align={{ initial: 'center', lg: 'start' }}
          size={{ initial: 'heading/lg', lg: 'heading/xl' }}
        >
          {l.title}{' '}
          <Text
            size={{ initial: 'heading/lg', lg: 'heading/xl' }}
            transform="uppercase"
            color="primary"
            font="alt"
          >
            {l.appName}
          </Text>
        </Text>
        <Text
          as="p"
          align={{
            initial: 'center',
            lg: 'start',
          }}
          size={{
            initial: 'body/md',
            lg: 'heading/sm',
          }}
        >
          {l.subtitle}
        </Text>
        <Text
          as="p"
          align={{
            initial: 'center',
            lg: 'start',
          }}
          size={{
            initial: 'body/sm',
            lg: 'heading/xs',
          }}
          color={'muted-foreground'}
          className="lg:w-[460px]"
        >
          {l.description}
        </Text>
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
