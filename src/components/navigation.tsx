'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  to: string
  className?: string
}

export function Navigation({ to, children, className }: Props) {
  const locale = useLocale()

  const href = `/${locale}${to}`

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
