import { Text } from '@/components/ui/text'

export function FooterView() {
  return (
    <footer className="h-[424px] w-full bg-primary">
      <div className="container flex justify-between pt-20">
        <div className="grid flex-1 grid-cols-2">
          <Text as="h4" type="body/lg" color="white">
            Teste
          </Text>
        </div>
      </div>
    </footer>
  )
}
