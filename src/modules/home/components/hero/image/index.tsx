import { images } from '@/assets/images'
import { Sphere } from '@/components/ui/sphere'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function HeroImage() {
  const t = useTranslations('home.hero')

  return (
    <div className="relative flex flex-1 items-center justify-center">
      <Image
        alt={t('appName')}
        src={images.home.hero.mockUp}
        loading="lazy"
        className="w-max p-10"
      />
      <Sphere />
    </div>
  )
}
