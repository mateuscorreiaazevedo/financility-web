import createMiddleware from 'next-intl/middleware'
import { LocaleEnums } from './modules/core'

export default createMiddleware({
  locales: [LocaleEnums.PT_BR, LocaleEnums.EN],

  defaultLocale: LocaleEnums.PT_BR,
})

export const config = {
  matcher: ['/', '/(pt-br|en)/:path*'],
}
