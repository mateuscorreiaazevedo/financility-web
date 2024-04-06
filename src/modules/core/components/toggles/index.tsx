import { ToggleLocale } from './toggle-locale'
import { ToggleTheme } from './toggle-theme'
import { TogglesView } from './view'

function Toggles() {
  return <TogglesView />
}

Toggles.Locale = ToggleLocale
Toggles.Theme = ToggleTheme

export { Toggles }
