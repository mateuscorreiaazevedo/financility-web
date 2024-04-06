import { useFooterModel } from './models/index.model'
import { FooterView } from './views/index.view'

export function Footer() {
  return <FooterView {...useFooterModel()} />
}
