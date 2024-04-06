'use client'
import { tv } from 'tailwind-variants'
import { ToggleLocale } from '../toggle-locale'
import { ToggleTheme } from '../toggle-theme'

const togglesContainer = tv({
  base: 'fixed right-2 top-2 z-30 bg-background/20 backdrop-blur border border-muted/10 flex items-center gap-2 rounded lg:right-10 lg:top-10',
})

export function TogglesView() {
  return (
    <div className={togglesContainer()}>
      <ToggleLocale />
      <ToggleTheme />
    </div>
  )
}
