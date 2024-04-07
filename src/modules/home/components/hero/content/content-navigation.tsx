import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { LinksEnum } from '@/modules/core'
import { useTranslations } from 'next-intl'

export function HeroContentNavigation() {
  const t = useTranslations('home.hero.buttons')

  return (
    <div className="mt-3 flex flex-col items-center gap-2 lg:items-start">
      <Navigation to={LinksEnum.LOGIN} data-testid="navigation-login">
        <Button className="h-12 px-10 uppercase">
          <Text
            font={'alt'}
            transform={'uppercase'}
            size={'heading/xs'}
            color={'white'}
          >
            {t('login.label')}
          </Text>
        </Button>
      </Navigation>
      <div className="flex items-center gap-x-2">
        <Text as="p" size={'body/sm'} color={'muted-foreground'}>
          {t('or')}
        </Text>
        <Navigation to={LinksEnum.REGISTER} data-testid="navigation-register">
          <Text
            size={'body/md'}
            font={'alt'}
            color={'muted-foreground'}
            className="hover:text-accent-foreground hover:underline"
          >
            {t('register.label')}
          </Text>
        </Navigation>
      </div>
    </div>
  )
}
