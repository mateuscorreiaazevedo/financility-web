import { useLocale } from 'next-intl'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = useParams()
  const path = usePathname()
  const locale = useLocale()

  const to = (href: string) => `/${locale}${href}`

  const navigation = {
    push: (link: string) => router.push(to(link)),
    prefetch: (link: string) => router.prefetch(to(link)),
    refresh: () => router.refresh(),
    replace: (link: string) => router.replace(to(link)),
    back: () => router.back(),
    next: () => router.forward(),
  }

  const toggleLocale = (value: string) => {
    const url = path.replace(locale, value)
    router.replace(url)
  }

  return {
    navigation,
    params,
    path,
    searchParams,
    toggleLocale,
  }
}
