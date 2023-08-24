import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default async function AppLayout({ children }: { children: ReactNode }) {

  return (
    <>
      {children}
    </>
  )
}
