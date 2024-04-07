import { useTranslations } from 'next-intl'
import { FooterRightMessageView } from './view'

export function FooterRightMessage() {
  const t = useTranslations('common.footer')

  return (
    <FooterRightMessageView
      message={t('right', { date: new Date().getFullYear() })}
    />
  )
}
