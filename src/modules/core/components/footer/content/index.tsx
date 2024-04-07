import { useFooterModel } from '@/modules/core/hooks/footer/use-footer-model'
import { FooterContentView } from './view'

export function FooterContent() {
  return <FooterContentView {...useFooterModel()} />
}
