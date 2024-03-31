import { ToggleLocale } from '../toggle-locale'
import { ToggleTheme } from '../toggle-theme'

export function HomeTogglesView() {
  return (
    <div className="fixed right-2 top-2 flex items-center gap-2 lg:right-10 lg:top-10">
      <ToggleLocale />
      <ToggleTheme />
    </div>
  )
}
