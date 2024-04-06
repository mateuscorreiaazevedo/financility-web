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
    <div className="mt-3 flex flex-col items-center gap-2 lg:items-start">
      <Button
        className="max-w-64 flex-1 font-alt text-lg uppercase"
        onClick={handleToLogin}
      >
        {l.login}
      </Button>
      <div className="flex items-center gap-x-2">
        <p
          className="text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: l.or,
          }}
        />
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
