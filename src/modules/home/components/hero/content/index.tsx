import { HeroContentNavigation } from './content-navigation'
import { Text } from '@/components/ui/text'
import { useTranslations } from 'next-intl'

export function HeroContent() {
  const t = useTranslations('home.hero')

  return (
    <div className="flex flex-col items-center lg:items-start lg:gap-2">
      <Text
        as="h1"
        align={{ initial: 'center', lg: 'start' }}
        size={{ initial: 'heading/lg', lg: 'heading/xl' }}
      >
        {t('title')}{' '}
        <Text
          size={{ initial: 'heading/lg', lg: 'heading/xl' }}
          transform="uppercase"
          color="primary"
          font="alt"
        >
          {t('appName')}
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
        {t('subtitle')}
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
        {t('description')}
      </Text>
      <HeroContentNavigation />
    </div>
  )
}
