type Props = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return <div className="flex h-screen w-full">{children}</div>
}
