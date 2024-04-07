import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { HeroContentNavigation } from './content-navigation'
import en from '@/i18n/en'

describe('Content navigations', () => {
  beforeEach(() => {
    render(
      <NextIntlClientProvider messages={en} locale="en">
        <HeroContentNavigation />
      </NextIntlClientProvider>
    )
  })

  it('should render on screen', () => {
    const navigateLogin = screen.getByTestId('navigation-login')

    expect(navigateLogin).toBeInTheDocument()
  })

  it('should render register navigate on page', () => {
    const navigateRegister = screen.getByTestId('navigation-register')

    expect(navigateRegister).toBeInTheDocument()
  })
})
