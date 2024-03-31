import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { LocaleEnums } from '../utils/enums'

export const locales = [LocaleEnums.PT_BR]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../../../i18n/${locale}`)).default,
  }
})
