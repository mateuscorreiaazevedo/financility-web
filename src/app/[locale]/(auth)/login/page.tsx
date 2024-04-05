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
    <>
      <h1>Login</h1>
    </>
  )
}
