import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'

type Props = {
  children: React.ReactNode
}

export function TranslateProvider({ children }: Props) {
  const messages = useMessages()
  const locale = useLocale()
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  )
}
