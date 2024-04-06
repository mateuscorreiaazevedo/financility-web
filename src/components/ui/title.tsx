import { tv, VariantProps } from 'tailwind-variants'
import React from 'react'

const titleVariants = tv({
  variants: {
    as: {
      h1: 'text-5xl font-bold',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-medium',
    },
    color: {
      white: 'text-white',
      primary: 'text-primary',
      danger: 'text-destructive',
      foreground: 'text-foreground',
      muted: 'text-muted',
      'muted-foreground': 'text-muted-foreground',
    },
    font: {
      alt: 'font-alt',
      base: 'font-sans',
    },
  },
  defaultVariants: {
    as: 'h1',
    color: 'foreground',
    font: 'base',
  },
})

type TitleProps = VariantProps<typeof titleVariants> & {
  children: React.ReactNode
  className?: string
}

export function Title({
  children,
  as: As = 'h1',
  className,
  color,
  font,
}: TitleProps) {
  return (
    <As className={titleVariants({ as: As, className, color, font })}>{children}</As>
  )
}
