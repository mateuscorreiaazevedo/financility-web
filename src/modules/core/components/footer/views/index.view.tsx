import { Text } from '@/components/ui/text'
import { useFooterModel } from '../models/index.model'
import { Navigation } from '@/components/navigation'

export function FooterView(props: ReturnType<typeof useFooterModel>) {
  const { titles, contactList, navigationList } = props

  return (
    <footer className=" w-full bg-primary">
      <div className="container flex h-[424px] flex-col items-center justify-between pb-4 pt-20">
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
        <Text
          as="p"
          size={{ initial: 'body/sm', lg: 'body/sm' }}
          align={{ initial: 'center', lg: 'start' }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: titles.right,
            }}
          />
        </Text>
      </div>
    </footer>
  )
}
