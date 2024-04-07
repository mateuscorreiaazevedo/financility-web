import { Navigation } from '@/components/navigation'
import { Text } from '@/components/ui/text'
import { useFooterModel } from '@/modules/core/hooks/footer/use-footer-model'

export function FooterContentView(props: ReturnType<typeof useFooterModel>) {
  const { contactList, navigationList, titles } = props
  return (
    <div className="grid w-full flex-1 grid-cols-2">
      <div className="flex flex-col items-center gap-y-8 lg:items-start lg:gap-y-12">
        <Text as="h4" size="body/lg" color="white">
          {titles.contact}
        </Text>
        <ul className="flex flex-col gap-y-6">
          {contactList.map(({ href, key, title }) => (
            <li key={key}>
              <a href={href} target="_blank" rel="noreferrer">
                <Text
                  size={'body/md'}
                  color={'white'}
                  className="font-normal transition-all hover:text-white/80"
                >
                  {title}
                </Text>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex flex-col items-center
           gap-y-8 lg:items-start lg:gap-y-12"
      >
        <Text as="h4" size="body/lg" color="white">
          {titles.navigation}
        </Text>
        <ul className="flex flex-col gap-y-6">
          {navigationList.map(({ href, key, title }) => (
            <li key={key}>
              <Navigation to={href}>
                <Text
                  size={'body/md'}
                  color={'white'}
                  className="font-normal transition-all hover:text-white/80"
                >
                  {title}
                </Text>
              </Navigation>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
