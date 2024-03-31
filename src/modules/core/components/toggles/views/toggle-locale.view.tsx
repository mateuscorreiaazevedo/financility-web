'use client'

import { Button } from '@/components/ui/button'
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
import { Icon } from '@/components/ui/icon'
import { useToggleLocaleModel } from '../models/toggle-locale.model'

export function ToggleLocaleView(props: ReturnType<typeof useToggleLocaleModel>) {
  const { asSubContent, data, title } = props

  const ComponentRoot = asSubContent ? DropdownMenuSub : DropdownMenu
  const ComponentTrigger = asSubContent ? DropdownMenuSubTrigger : DropdownMenuTrigger
  const ComponentContent = asSubContent ? DropdownMenuSubContent : DropdownMenuContent

  return (
    <ComponentRoot>
      <ComponentTrigger asChild>
        <Button size={'icon'} variant={'ghost'}>
          <Icon name="Languages" className="" />
          {asSubContent && <span className="text-base font-semibold">{title}</span>}
        </Button>
      </ComponentTrigger>
      <ComponentContent sideOffset={4} align="end">
        <DropdownMenuGroup>
          {data.map(item => (
            <DropdownMenuItem
              className="cursor-pointer"
              key={item.id}
              onClick={item.action}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </ComponentContent>
    </ComponentRoot>
  )
}
