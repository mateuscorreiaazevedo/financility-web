import { images as imgs } from '@/assets/images'
import { HomeNamesPaces } from '@/modules/core/utils/enums/translate-home'
import { useTranslations } from 'next-intl'

export function useHeroModel() {
  const t = useTranslations()

  const labels = {
    title: t(`${HomeNamesPaces.HERO}.title`),
    appName: t(`${HomeNamesPaces.HERO}.appName`),
    subtitle: t(`${HomeNamesPaces.HERO}.subtitle`),
    description: t(`${HomeNamesPaces.HERO}.description`),
  }

  const images = {
    card: imgs.home.hero.mockUp,
  }

  return {
    labels,
    images,
  }
}
