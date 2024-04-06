'use client'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useToggleThemeModel } from '@/modules/core/hooks/toggles/use-toggle-theme'

export function ToggleThemeView(props: ReturnType<typeof useToggleThemeModel>) {
  const { data, asSubContent, toggleTheme, l } = props

  const ComponentRoot = asSubContent ? DropdownMenuSub : DropdownMenu
  const ComponentTrigger = asSubContent ? DropdownMenuSubTrigger : DropdownMenuTrigger
  const ComponentContent = asSubContent ? DropdownMenuSubContent : DropdownMenuContent

  return (
    <ComponentRoot>
      <ComponentTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="relative">
          <Icon name="Sun" className="dark:opacity-0" />
          <Icon name="Moon" className="absolute opacity-0 dark:opacity-100" />
          {asSubContent && <span className="text-base">{l.title}</span>}
        </Button>
      </ComponentTrigger>
      <ComponentContent sideOffset={4} align="end">
        <DropdownMenuGroup>
          {data.map(item => (
            <DropdownMenuItem
              className="cursor-pointer font-semibold"
              key={item.value}
              onClick={() => toggleTheme(item.value)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </ComponentContent>
    </ComponentRoot>
  )
}
