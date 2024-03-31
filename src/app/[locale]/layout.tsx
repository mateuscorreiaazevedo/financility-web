import { ThemeProvider, TranslateProvider } from '@/modules/core'
import { Inter as Sans, Bai_Jamjuree } from 'next/font/google'
import '../../assets/styles/globals.css'
import { ReactNode } from 'react'

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['sans serif'],
})

const alt = Bai_Jamjuree({
  weight: ['700'],
  variable: '--font-alt',
  fallback: ['sans serif'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Financility - Wallet App',
  description: 'App of finance control usign Next 14. Powered by Mateus Azevedo.',
}

type RootLayoutProps = UrlProps & {
  children: ReactNode
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params?.locale}>
      <body
        className={`${sans.variable} ${alt.variable} min-h-screen w-full bg-background font-sans font-semibold`}
      >
        <TranslateProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TranslateProvider>
      </body>
    </html>
  )
}
