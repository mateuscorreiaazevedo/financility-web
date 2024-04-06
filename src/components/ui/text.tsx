import { tv, VariantProps } from 'tailwind-variants'

const textVariants = tv({
  variants: {
    type: {
      'heading/xl': 'font-extrabold text-5xl leading-normal tracking-normal',
      'heading/lg': 'font-extrabold text-[2.5rem] leading-normal tracking-normal',
      'heading/md': 'font-extrabold text-[2rem] leading-normal tracking-normal',
      'heading/sm': 'font-extrabold text-2xl leading-normal tracking-tight',
      'heading/xs': 'font-extrabold text-lg leading-normal tracking-normal',
      'body/lg': 'font-semibold text-xl leading-none tracking-normal',
      'body/md': 'font-semibold text-base leading-relaxed tracking-tighter',
      'body/sm': 'font-semibold text-sm leading-none tracking-normal',
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
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normal: 'normal-case',
    },
  },
  defaultVariants: {
    type: 'body/md',
    color: 'foreground',
    font: 'base',
    transform: 'normal',
  },
})

type TextProps = VariantProps<typeof textVariants> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'strong' | 'span' | 'p'
  children: React.ReactNode
  className?: string
}

export function Text({
  children,
  as: As = 'span',
  type,
  className,
  color,
  font,
  transform,
}: TextProps) {
  return (
    <As className={textVariants({ type, className, color, font, transform })}>
      {children}
    </As>
  )
}
