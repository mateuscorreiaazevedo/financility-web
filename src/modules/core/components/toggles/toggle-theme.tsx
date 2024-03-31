'use client'

import { useToggleThemeModel } from './models/toggle-theme.model'
import { ToggleThemeView } from './views/toggle-theme.view'

type Props = {
  asSubContent?: boolean
}

export function ToggleTheme({ asSubContent = false }: Props) {
  return <ToggleThemeView {...useToggleThemeModel(asSubContent)} />
}
