'use client'

import { useToggleLocaleModel } from './models/toggle-locale.model'
import { ToggleLocaleView } from './views/toggle-locale.view'

type Props = {
  asSubContent?: boolean
}

export function ToggleLocale({ asSubContent = false }: Props) {
  return <ToggleLocaleView {...useToggleLocaleModel(asSubContent)} />
}
