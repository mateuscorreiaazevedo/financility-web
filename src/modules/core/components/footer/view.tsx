import { FooterContent } from './content'
import { FooterRightMessage } from './right-message'

export function FooterView() {
  return (
    <footer className="w-full bg-primary">
      <div className="container flex h-[424px] flex-col items-center justify-between pb-4 pt-20">
        <FooterContent />
        <FooterRightMessage />
      </div>
    </footer>
  )
}
