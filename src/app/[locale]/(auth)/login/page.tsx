import { Toggles } from '@/modules/core'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: UrlProps) {
  const { locale } = params as { locale: string }

  const t = await getTranslations({ locale, namespace: 'common.metadata' })

  return {
    title: t('login'),
  }
}
export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Toggles />
      <h1>Login</h1>
    </div>
  )
}
