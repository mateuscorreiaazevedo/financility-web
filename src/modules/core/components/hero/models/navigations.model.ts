import { useNavigation } from '@/modules/core/hooks/use-navigation'
import { LinksEnum, HomeNamesPaces } from '@/modules/core/utils/enums'

import { useTranslations } from 'next-intl'

export function useHeroNavigationsModel() {
  const t = useTranslations(HomeNamesPaces.HERO_BUTTONS)
  const { navigation } = useNavigation()

  const labels = {
    login: t('login.label'),
    register: t('register.label'),
    or: t('or'),
  }

  const handleToLogin = () => navigation.push(LinksEnum.LOGIN)

  return {
    labels,
    handleToLogin,
  }
}
