import { Footer } from '@/modules/core'
import { ReactNode } from 'react'

type Props = UrlProps & {
  children: ReactNode
}
export default function ShowcaseLayout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
