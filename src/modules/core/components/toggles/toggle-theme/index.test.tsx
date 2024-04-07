import { render, screen } from '@testing-library/react'
import { ToggleTheme } from '.'
import { NextIntlClientProvider } from 'next-intl'
import en from '@/i18n/en'

describe('Theme toggle', () => {
  beforeEach(() => {
    render(
      <NextIntlClientProvider messages={en} locale="en">
        <ToggleTheme />
      </NextIntlClientProvider>
    )
  })

  it('should render to the component', () => {
    const triggerButton = screen.getByRole('button')

    expect(triggerButton).toBeInTheDocument()
  })
})
