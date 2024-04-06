'use client'

import { useToggleLocaleModel } from '@/modules/core/hooks/toggles/use-toggle-locale'
import { ToggleLocaleView } from './view'

type Props = {
  asSubContent?: boolean
}

export function ToggleLocale({ asSubContent = false }: Props) {
  return <ToggleLocaleView {...useToggleLocaleModel(asSubContent)} />
}
