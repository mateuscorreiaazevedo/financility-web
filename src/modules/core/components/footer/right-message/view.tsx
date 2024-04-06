import { Text } from '@/components/ui/text'

export function FooterRightMessageView({ message }: { message: string }) {
  return (
    <Text
      as="p"
      color={'white'}
      size={{ initial: 'body/sm', lg: 'body/sm' }}
      align={{ initial: 'center', lg: 'start' }}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
    </Text>
  )
}
