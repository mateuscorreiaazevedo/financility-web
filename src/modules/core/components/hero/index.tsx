import { useHeroModel } from './models/index.model'
import { HeroView } from './views/index.view'

export function Hero() {
  return <HeroView {...useHeroModel()} />
}
