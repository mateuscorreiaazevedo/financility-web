import { Footer, ThemeProvider, TranslateProvider } from '@/modules/core'
import { Inter as Sans, Bai_Jamjuree } from 'next/font/google'
import '../../assets/styles/globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

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

export async function generateMetadata({ params }: UrlProps): Promise<Metadata> {
  const { locale } = params as { locale: string }
  const t = await getTranslations({ locale, namespace: 'common.metadata' })

  return {
    title: t('root'),
    description: t('descriptions.root'),
  }
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
          <ThemeProvider>
            {children}
            <Footer />
          </ThemeProvider>
        </TranslateProvider>
      </body>
    </html>
  )
}
