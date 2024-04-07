'use client'

import { useToggleThemeModel } from '@/modules/core/hooks/toggles/use-toggle-theme'
import { ToggleThemeView } from './view'

type Props = {
  asSubContent?: boolean
}

export function ToggleTheme({ asSubContent = false }: Props) {
  return <ToggleThemeView {...useToggleThemeModel(asSubContent)} />
}
