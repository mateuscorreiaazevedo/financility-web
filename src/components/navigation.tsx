'use client'

import { AnchorHTMLAttributes } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode
  to: string
  className?: string
}

export function Navigation({ to, children, className, ...rest }: Props) {
  const locale = useLocale()

  const href = `/${locale}${to}`

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  )
}
