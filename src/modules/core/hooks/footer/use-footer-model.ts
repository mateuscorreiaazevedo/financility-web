import { useTranslations } from 'next-intl'

export function useFooterModel() {
  const t = useTranslations('common.footer')

  const titles = {
    contact: t('contact.title'),
    navigation: t('navigation.title'),
  }

  const contactList = [
    {
      key: 'insta',
      title: t('contact.options.insta.label'),
      href: t('contact.options.insta.href'),
    },
    {
      key: 'linkedin',
      title: t('contact.options.linkedin.label'),
      href: t('contact.options.linkedin.href'),
    },
    {
      key: 'portfolio',
      title: t('contact.options.portfolio.label'),
      href: t('contact.options.portfolio.href'),
    },
    {
      key: 'github',
      title: t('contact.options.github.label'),
      href: t('contact.options.github.href'),
    },
  ]
  const navigationList = [
    {
      key: 'login',
      title: t('navigation.options.login.label'),
      href: t('navigation.options.login.href'),
    },
    {
      key: 'register',
      title: t('navigation.options.register.label'),
      href: t('navigation.options.register.href'),
    },
  ]

  return { titles, contactList, navigationList }
}
