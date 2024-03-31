'use client'

import { Button } from '@/components/ui/button'
import { useHeroNavigationsModel } from '../models/navigations.model'
import { Navigation } from '@/components/navigation'
import { LinksEnum } from '@/modules/core/utils/enums'

export function HeroNavigationsView(
  props: ReturnType<typeof useHeroNavigationsModel>
) {
  const { handleToLogin, labels: l } = props
  return (
    <div className="mt-6 flex flex-col gap-2">
      <Button
        className="max-w-64 flex-1 font-alt text-lg uppercase"
        onClick={handleToLogin}
      >
        {l.login}
      </Button>
      <div className="flex items-center gap-x-2">
        <p className="text-sm text-muted-foreground">{l.or}</p>
        <Navigation
          className="font-alt transition-all hover:text-muted-foreground hover:underline"
          to={LinksEnum.REGISTER}
        >
          {l.register}
        </Navigation>
      </div>
    </div>
  )
}
