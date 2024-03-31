'use client'

import { useHeroNavigationsModel } from './models/navigations.model'
import { HeroNavigationsView } from './views/navigations.view'

export function HeroNavigations() {
  return <HeroNavigationsView {...useHeroNavigationsModel()} />
}
