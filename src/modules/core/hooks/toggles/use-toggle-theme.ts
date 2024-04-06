import { ThemeEnum } from '@/modules/core/utils/enums'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export function useToggleThemeModel(asSubContent: boolean) {
  const t = useTranslations('common.toggles')
  const { setTheme } = useTheme()

  const data = [
    {
      label: t('theme.label.light'),
      value: ThemeEnum.LIGHT,
    },
    {
      label: t('theme.label.dark'),
      value: ThemeEnum.DARK,
    },
    {
      label: t('theme.label.system'),
      value: ThemeEnum.SYSTEM,
    },
  ]

  const labels = {
    title: t('theme.title'),
  }

  const toggleTheme = (value: string) => setTheme(value)

  return {
    data,
    asSubContent,
    toggleTheme,
    l: labels,
  }
}
