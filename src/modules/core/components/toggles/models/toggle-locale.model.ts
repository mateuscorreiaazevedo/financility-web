import { useNavigation } from '@/modules/core/hooks/use-navigation'
import { LocaleEnums } from '@/modules/core/utils/enums'
import { useTranslations } from 'next-intl'

export function useToggleLocaleModel(asSubContent: boolean) {
  const t = useTranslations('common.toggles.locale')
  const { toggleLocale } = useNavigation()

  const data = [
    {
      id: LocaleEnums.PT_BR,
      label: t('label.pt-br'),
      action: () => toggleLocale(LocaleEnums.PT_BR),
    },
    {
      id: LocaleEnums.EN,
      label: t('label.en'),
      action: () => toggleLocale(LocaleEnums.EN),
    },
  ]

  return {
    data,
    asSubContent,
    title: t('title'),
  }
}
